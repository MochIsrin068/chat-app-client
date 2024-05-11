"use server";

import { encodeObjectToBase64 } from "@/helpers/encryption";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { TParamsMessage, TParamsSendMessages } from "@/types/message";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getMessages = async (params: TParamsMessage) => {
  const encodeParams = encodeObjectToBase64(params);
  try {
    const response = await fetch(`${baseUrl}/messages?cursor=${encodeParams}`);
    const data = await response.json();
    return (data || [])?.reverse();
  } catch (error) {
    Promise.reject(error);
  }
};

export const sendMessage = async (params: TParamsSendMessages) => {
  try {
    const response = await fetch(`${baseUrl}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();

    // if (data?.isSuccess) {
    //   revalidatePath(`/?userId=${params.contact_id}`, "layout");
    //   redirect(`/?userId=${params.contact_id}`);
    // }
    return data;
  } catch (error) {
    Promise.reject(error);
  }
};

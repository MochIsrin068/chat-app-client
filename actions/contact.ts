"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getContact = async () => {
  try {
    const response = await fetch(`${baseUrl}/contacts`);
    const data = await response.json();
    return data;
  } catch (error) {
    Promise.reject(error);
  }
};

export const getContactChat = async () => {
  try {
    const response = await fetch(`${baseUrl}/contact-chat`);
    const data = await response.json();
    return data;
  } catch (error) {
    Promise.reject(error);
  }
};

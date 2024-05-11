import { useState } from "react";
import { sendMessage } from "@/actions/messages";
import { useSearchParams } from "next/navigation";
import useMessageStore from "@/store/useMessageStore";

export default function useInputBar() {
  const { getMessage } = useMessageStore();

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") || "1";
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();
    const value = event?.target?.value;
    setMessage(value);
  };

  const handleSend = async () => {
    const data = await sendMessage({
      contact_id: parseInt(userId),
      created_at: new Date().toISOString(),
      is_owner: false,
      message,
    });

    if (data?.isSuccess) {
      await getMessage({
        userId: parseInt(userId),
        limit: 30,
        offset: 0,
      });
      setMessage("");
    }
  };

  return {
    handleChange,
    handleSend,
    message,
  };
}

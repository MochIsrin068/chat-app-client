import { getMessages } from "@/actions/messages";
import { TMessageState } from "@/types/store";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create<TMessageState>()(
  devtools(
    persist(
      (set, get) => ({
        messages: [],
        setMessages(messages) {
          set({
            messages,
          });
        },
        getMessage: async (params: any) => {
          const messagesData = await getMessages(params);
          const newMessages = [...get().messages, ...messagesData];
          set({
            messages: messagesData,
          });
        },
      }),
      {
        name: "message-storage",
      }
    )
  )
);

export default useUserStore;

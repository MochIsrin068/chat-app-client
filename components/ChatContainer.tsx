"use client";

import Chat from "./Chat";
import { convertUTCtoCustomTime } from "@/helpers/date";
import List from "@mui/material/List";
import { TMessageItem } from "@/types/message";
import useChatContainer from "@/hooks/useChatContainer";
import { useEffect, useRef } from "react";

export default function ChatContainer() {
  const { messages, listRef } = useChatContainer();

  return (
    // @ts-ignore
    <List
      sx={{
        overflowY: "auto",
        height: "calc(100% - 82px)",
        padding: "20px",
      }}
      ref={listRef}
    >
      {messages?.map((message: TMessageItem) => (
        <Chat
          key={message?.id}
          message={message?.message}
          photo={
            message?.is_owner
              ? message?.contacts?.photo
              : "https://randomuser.me/api/portraits/men/3.jpg"
          }
          time={convertUTCtoCustomTime(message?.created_at)}
          isOwnChat={!message?.is_owner}
        />
      ))}
    </List>
  );
}

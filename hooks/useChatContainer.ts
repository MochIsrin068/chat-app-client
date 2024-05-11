import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import useMessageStore from "@/store/useMessageStore";
import { useShallow } from "zustand/react/shallow";

export default function useChatContainer() {
  const [filter, setFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const { messages, getMessage } = useMessageStore(
    useShallow((state) => ({
      messages: state.messages,
      getMessage: state.getMessage,
    }))
  );

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") || "1";
  const params = {
    userId: parseInt(userId),
    ...filter,
  };

  useEffect(() => {
    getMessage(params);
  }, [userId, filter]);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = listRef.current;

      if (listElement && listElement.scrollTop === 0) {
        setFilter((prevState) => ({
          ...prevState,
          limit: prevState.limit + 10,
        }));
      }
    };

    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listElement) {
        listElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  //   default set to bottom scroll
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  return {
    messages,
    listRef,
  };
}

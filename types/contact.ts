import { TMessageItem } from "./message";

export type TContact = {
  id: number;
  name: string;
  position: string;
  photo: string;
};

type TMessage = {
  messages: TMessageItem[];
  lastMessage: TMessageItem;
};

export type TContactItem = TContact & TMessage;

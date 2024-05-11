import { TMessageItem, TParamsMessage } from "./message";

type TUserFocus = {
  id: number;
  name: string;
  position: string;
  photo: string;
};

export type TUserState = {
  userFocus: TUserFocus;
  setUserFocus: (userFocus: TUserFocus) => void;
};

export type TMessageState = {
  messages: TMessageItem[];
  setMessages: (messages: TMessageItem[]) => void;
  getMessage: (params: TParamsMessage) => void;
};

import { TContact } from "./contact";

type TMessage = {
  id: number;
  contact_id: number;
  message: string;
  created_at: string;
  is_owner: boolean;
};

type TContactMessage = {
  contacts: TContact;
};

export type TMessageItem = TMessage & TContactMessage;

export type TParamsMessage = {
  userId: number;
  limit: number;
  offset: number;
};

export type TParamsSendMessages = {
    contact_id: number;
    message: string;
    created_at: string;
    is_owner: boolean;
  };
  
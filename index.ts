import { FNMessage } from "./Fortnite";

export enum MessageType {
  Control = 0,
  Fortnite,
}

export type BaseMessage<Type extends MessageType, Data> = {
  type: Type;
  data: Data;
};

export type Message = FNMessage;
export type MessageData = Message["data"];

export * from "./Fortnite";

import { BaseMessage, MessageType } from "..";
import { FNStartMessage } from "./Start";
import { FNSetLoadoutMessage } from "./SetLoadout";

export enum FNAction {
  Start = 0,
  SetLoadout,
}

export type FNBaseMessage<Action extends FNAction, Data> = BaseMessage<
  MessageType.Fortnite,
  Data
> & {
  action: Action;
};

export type FNMessage = FNStartMessage | FNSetLoadoutMessage;

export * from "./Start";

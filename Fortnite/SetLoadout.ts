import { FNBaseMessage } from ".";

export type FNLoadoutVariant = [
  {
    channel: string;
    type: string;
    tag: string;
  }
];

export type FNSetLoadoutMessageData = {
  character?: {
    id?: `CID_${string}`;
    variants?: FNLoadoutVariant[];
    enlightenment?: { season: number; level: number };
  };
  backpack?: {
    id?: `BID_${string}` | `PetID_${string}`;
    variants?: FNLoadoutVariant[];
    enlightenment?: { season: number; level: number };
  };
  pickaxe?: {
    id?: `BID_${string}` | `PetID_${string}`;
    variants?: FNLoadoutVariant[];
  };
  emote?: { id: `EID_${string}` | `Emoji_${string}` };
};

export type FNSetLoadoutMessage = FNBaseMessage<1, FNSetLoadoutMessageData>;

import { FNBaseMessage } from ".";

// Data required to start the bot
export type FNStartMessageData = {
  channelId: string;
  auths: {
    clientId: string;
    deviceId: string;
    secret: string;
  };
};

export type FNStartMessage = FNBaseMessage<0, FNStartMessageData>;

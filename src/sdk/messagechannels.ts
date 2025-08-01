/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messageChannelsCreateMessageChannel } from "../funcs/messageChannelsCreateMessageChannel.js";
import { messageChannelsGetMessageChannel } from "../funcs/messageChannelsGetMessageChannel.js";
import { messageChannelsGetMessageChannels } from "../funcs/messageChannelsGetMessageChannels.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class MessageChannels extends ClientSDK {
  /**
   * Returns a list of `MessageChannel` objects.
   */
  async getMessageChannels(
    options?: RequestOptions,
  ): Promise<components.MessageChannelList> {
    return unwrapAsync(messageChannelsGetMessageChannels(
      this,
      options,
    ));
  }

  /**
   * Creates a `MessageChannel` objects.
   */
  async createMessageChannel(
    request: components.CreateMessageChannelInfo,
    options?: RequestOptions,
  ): Promise<components.MessageChannel> {
    return unwrapAsync(messageChannelsCreateMessageChannel(
      this,
      request,
      options,
    ));
  }

  /**
   * Gets a `MessageChannel` object.
   */
  async getMessageChannel(
    request: operations.GetMessageChannelRequest,
    options?: RequestOptions,
  ): Promise<components.MessageChannel> {
    return unwrapAsync(messageChannelsGetMessageChannel(
      this,
      request,
      options,
    ));
  }
}

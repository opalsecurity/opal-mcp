/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { groupsRemoveGroupContainingGroup } from "../../funcs/groupsRemoveGroupContainingGroup.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RemoveGroupContainingGroupRequest$inboundSchema,
};

export const tool$groupsRemoveGroupContainingGroup: ToolDefinition<
  typeof args
> = {
  name: "groups-remove-group-containing-group",
  description: `Removes a containing group from a group.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await groupsRemoveGroupContainingGroup(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};

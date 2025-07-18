/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { groupsDeleteGroup } from "../../funcs/groupsDeleteGroup.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteGroupRequest$inboundSchema,
};

export const tool$groupsDeleteGroup: ToolDefinition<typeof args> = {
  name: "groups-delete-group",
  description: `Deletes a group.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await groupsDeleteGroup(
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

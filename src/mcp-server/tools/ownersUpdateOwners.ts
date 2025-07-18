/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ownersUpdateOwners } from "../../funcs/ownersUpdateOwners.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.UpdateOwnerInfoList$inboundSchema,
};

export const tool$ownersUpdateOwners: ToolDefinition<typeof args> = {
  name: "owners-update-owners",
  description: `Bulk updates a list of owners.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await ownersUpdateOwners(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};

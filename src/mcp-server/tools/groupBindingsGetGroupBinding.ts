/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { groupBindingsGetGroupBinding } from "../../funcs/groupBindingsGetGroupBinding.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetGroupBindingRequest$inboundSchema,
};

export const tool$groupBindingsGetGroupBinding: ToolDefinition<typeof args> = {
  name: "group-bindings-get-group-binding",
  description: `Returns a \`GroupBinding\` object.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await groupBindingsGetGroupBinding(
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

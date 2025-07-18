/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accessRulesUpdateAccessRule } from "../../funcs/accessRulesUpdateAccessRule.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateAccessRuleRequest$inboundSchema,
};

export const tool$accessRulesUpdateAccessRule: ToolDefinition<typeof args> = {
  name: "access-rules-update-access-rule",
  description: `Updates the access rule config for the given group_id.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await accessRulesUpdateAccessRule(
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

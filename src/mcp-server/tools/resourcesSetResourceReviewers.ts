/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { resourcesSetResourceReviewers } from "../../funcs/resourcesSetResourceReviewers.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SetResourceReviewersRequest$inboundSchema,
};

export const tool$resourcesSetResourceReviewers: ToolDefinition<typeof args> = {
  name: "resources-set-resource-reviewers",
  description: `Sets the list of reviewers for a resource.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await resourcesSetResourceReviewers(
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

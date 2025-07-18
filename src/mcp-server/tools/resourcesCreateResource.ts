/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { resourcesCreateResource } from "../../funcs/resourcesCreateResource.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.CreateResourceInfo$inboundSchema,
};

export const tool$resourcesCreateResource: ToolDefinition<typeof args> = {
  name: "resources-create-resource",
  description:
    `Creates a resource. See [here](https://docs.opal.dev/reference/end-system-objects) for details about importing resources.`,
  scopes: ["write"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await resourcesCreateResource(
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

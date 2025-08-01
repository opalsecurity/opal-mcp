/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { resourcesGetResourceScopedRolePermissions } from "../../funcs/resourcesGetResourceScopedRolePermissions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetResourceScopedRolePermissionsRequest$inboundSchema,
};

export const tool$resourcesGetResourceScopedRolePermissions: ToolDefinition<
  typeof args
> = {
  name: "resources-get-resource-scoped-role-permissions",
  description:
    `Returns all the scoped role permissions that apply to the given resource. Only OPAL_SCOPED_ROLE resource type supports this field.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await resourcesGetResourceScopedRolePermissions(
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

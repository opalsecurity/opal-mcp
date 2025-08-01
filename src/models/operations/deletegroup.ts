/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteGroupRequest = {
  /**
   * The ID of the group.
   */
  groupId: string;
};

/** @internal */
export const DeleteGroupRequest$inboundSchema: z.ZodType<
  DeleteGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  group_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "group_id": "groupId",
  });
});

/** @internal */
export type DeleteGroupRequest$Outbound = {
  group_id: string;
};

/** @internal */
export const DeleteGroupRequest$outboundSchema: z.ZodType<
  DeleteGroupRequest$Outbound,
  z.ZodTypeDef,
  DeleteGroupRequest
> = z.object({
  groupId: z.string(),
}).transform((v) => {
  return remap$(v, {
    groupId: "group_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGroupRequest$ {
  /** @deprecated use `DeleteGroupRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGroupRequest$inboundSchema;
  /** @deprecated use `DeleteGroupRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGroupRequest$outboundSchema;
  /** @deprecated use `DeleteGroupRequest$Outbound` instead. */
  export type Outbound = DeleteGroupRequest$Outbound;
}

export function deleteGroupRequestToJSON(
  deleteGroupRequest: DeleteGroupRequest,
): string {
  return JSON.stringify(
    DeleteGroupRequest$outboundSchema.parse(deleteGroupRequest),
  );
}

export function deleteGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGroupRequest' from JSON`,
  );
}

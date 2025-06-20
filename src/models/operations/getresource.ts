/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetResourceRequest = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
};

/** @internal */
export const GetResourceRequest$inboundSchema: z.ZodType<
  GetResourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "resource_id": "resourceId",
  });
});

/** @internal */
export type GetResourceRequest$Outbound = {
  resource_id: string;
};

/** @internal */
export const GetResourceRequest$outboundSchema: z.ZodType<
  GetResourceRequest$Outbound,
  z.ZodTypeDef,
  GetResourceRequest
> = z.object({
  resourceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    resourceId: "resource_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResourceRequest$ {
  /** @deprecated use `GetResourceRequest$inboundSchema` instead. */
  export const inboundSchema = GetResourceRequest$inboundSchema;
  /** @deprecated use `GetResourceRequest$outboundSchema` instead. */
  export const outboundSchema = GetResourceRequest$outboundSchema;
  /** @deprecated use `GetResourceRequest$Outbound` instead. */
  export type Outbound = GetResourceRequest$Outbound;
}

export function getResourceRequestToJSON(
  getResourceRequest: GetResourceRequest,
): string {
  return JSON.stringify(
    GetResourceRequest$outboundSchema.parse(getResourceRequest),
  );
}

export function getResourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceRequest' from JSON`,
  );
}

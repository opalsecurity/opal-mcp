/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetResourceNhisRequest = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
  /**
   * Limit the number of results returned.
   */
  limit?: number | undefined;
};

/** @internal */
export const GetResourceNhisRequest$inboundSchema: z.ZodType<
  GetResourceNhisRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource_id: z.string(),
  limit: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "resource_id": "resourceId",
  });
});

/** @internal */
export type GetResourceNhisRequest$Outbound = {
  resource_id: string;
  limit?: number | undefined;
};

/** @internal */
export const GetResourceNhisRequest$outboundSchema: z.ZodType<
  GetResourceNhisRequest$Outbound,
  z.ZodTypeDef,
  GetResourceNhisRequest
> = z.object({
  resourceId: z.string(),
  limit: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    resourceId: "resource_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResourceNhisRequest$ {
  /** @deprecated use `GetResourceNhisRequest$inboundSchema` instead. */
  export const inboundSchema = GetResourceNhisRequest$inboundSchema;
  /** @deprecated use `GetResourceNhisRequest$outboundSchema` instead. */
  export const outboundSchema = GetResourceNhisRequest$outboundSchema;
  /** @deprecated use `GetResourceNhisRequest$Outbound` instead. */
  export type Outbound = GetResourceNhisRequest$Outbound;
}

export function getResourceNhisRequestToJSON(
  getResourceNhisRequest: GetResourceNhisRequest,
): string {
  return JSON.stringify(
    GetResourceNhisRequest$outboundSchema.parse(getResourceNhisRequest),
  );
}

export function getResourceNhisRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceNhisRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceNhisRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceNhisRequest' from JSON`,
  );
}

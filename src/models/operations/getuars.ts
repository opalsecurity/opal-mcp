/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetUARsRequest = {
  /**
   * The pagination cursor value.
   */
  cursor?: string | undefined;
  /**
   * Number of results to return per page. Default is 200.
   */
  pageSize?: number | undefined;
};

/** @internal */
export const GetUARsRequest$inboundSchema: z.ZodType<
  GetUARsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.string().optional(),
  page_size: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
  });
});

/** @internal */
export type GetUARsRequest$Outbound = {
  cursor?: string | undefined;
  page_size?: number | undefined;
};

/** @internal */
export const GetUARsRequest$outboundSchema: z.ZodType<
  GetUARsRequest$Outbound,
  z.ZodTypeDef,
  GetUARsRequest
> = z.object({
  cursor: z.string().optional(),
  pageSize: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUARsRequest$ {
  /** @deprecated use `GetUARsRequest$inboundSchema` instead. */
  export const inboundSchema = GetUARsRequest$inboundSchema;
  /** @deprecated use `GetUARsRequest$outboundSchema` instead. */
  export const outboundSchema = GetUARsRequest$outboundSchema;
  /** @deprecated use `GetUARsRequest$Outbound` instead. */
  export type Outbound = GetUARsRequest$Outbound;
}

export function getUARsRequestToJSON(getUARsRequest: GetUARsRequest): string {
  return JSON.stringify(GetUARsRequest$outboundSchema.parse(getUARsRequest));
}

export function getUARsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUARsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUARsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUARsRequest' from JSON`,
  );
}

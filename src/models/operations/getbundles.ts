/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBundlesRequest = {
  /**
   * The maximum number of bundles to return from the beginning of the list. Default is 200, max is 1000.
   */
  pageSize?: number | undefined;
  /**
   * A cursor indicating where to start fetching items after a specific point.
   */
  cursor?: string | undefined;
  /**
   * A filter for the bundle name.
   */
  contains?: string | undefined;
};

export type GetBundlesResponse = {
  result: components.PaginatedBundleList;
};

/** @internal */
export const GetBundlesRequest$inboundSchema: z.ZodType<
  GetBundlesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page_size: z.number().int().optional(),
  cursor: z.string().optional(),
  contains: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
  });
});

/** @internal */
export type GetBundlesRequest$Outbound = {
  page_size?: number | undefined;
  cursor?: string | undefined;
  contains?: string | undefined;
};

/** @internal */
export const GetBundlesRequest$outboundSchema: z.ZodType<
  GetBundlesRequest$Outbound,
  z.ZodTypeDef,
  GetBundlesRequest
> = z.object({
  pageSize: z.number().int().optional(),
  cursor: z.string().optional(),
  contains: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBundlesRequest$ {
  /** @deprecated use `GetBundlesRequest$inboundSchema` instead. */
  export const inboundSchema = GetBundlesRequest$inboundSchema;
  /** @deprecated use `GetBundlesRequest$outboundSchema` instead. */
  export const outboundSchema = GetBundlesRequest$outboundSchema;
  /** @deprecated use `GetBundlesRequest$Outbound` instead. */
  export type Outbound = GetBundlesRequest$Outbound;
}

export function getBundlesRequestToJSON(
  getBundlesRequest: GetBundlesRequest,
): string {
  return JSON.stringify(
    GetBundlesRequest$outboundSchema.parse(getBundlesRequest),
  );
}

export function getBundlesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBundlesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBundlesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBundlesRequest' from JSON`,
  );
}

/** @internal */
export const GetBundlesResponse$inboundSchema: z.ZodType<
  GetBundlesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.PaginatedBundleList$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type GetBundlesResponse$Outbound = {
  Result: components.PaginatedBundleList$Outbound;
};

/** @internal */
export const GetBundlesResponse$outboundSchema: z.ZodType<
  GetBundlesResponse$Outbound,
  z.ZodTypeDef,
  GetBundlesResponse
> = z.object({
  result: components.PaginatedBundleList$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBundlesResponse$ {
  /** @deprecated use `GetBundlesResponse$inboundSchema` instead. */
  export const inboundSchema = GetBundlesResponse$inboundSchema;
  /** @deprecated use `GetBundlesResponse$outboundSchema` instead. */
  export const outboundSchema = GetBundlesResponse$outboundSchema;
  /** @deprecated use `GetBundlesResponse$Outbound` instead. */
  export type Outbound = GetBundlesResponse$Outbound;
}

export function getBundlesResponseToJSON(
  getBundlesResponse: GetBundlesResponse,
): string {
  return JSON.stringify(
    GetBundlesResponse$outboundSchema.parse(getBundlesResponse),
  );
}

export function getBundlesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBundlesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBundlesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBundlesResponse' from JSON`,
  );
}

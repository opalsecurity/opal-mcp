/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetRequestsRelayRequest = {
  /**
   * Number of results to return after the cursor. Use either first/after or last/before, not both.
   */
  first?: number | undefined;
  /**
   * Cursor to fetch results after. Used with 'first' for forward pagination.
   */
  after?: string | undefined;
  /**
   * Number of results to return before the cursor. Use either first/after or last/before, not both.
   */
  last?: number | undefined;
  /**
   * Cursor to fetch results before. Used with 'last' for backward pagination.
   */
  before?: string | undefined;
  /**
   * Filter requests by their status.
   */
  status?: components.RequestStatusEnum | undefined;
  /**
   * Filter requests assigned to a specific user ID.
   */
  to?: string | undefined;
  /**
   * Filter requests made by a specific user ID.
   */
  from?: string | undefined;
};

/** @internal */
export const GetRequestsRelayRequest$inboundSchema: z.ZodType<
  GetRequestsRelayRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  first: z.number().int().optional(),
  after: z.string().optional(),
  last: z.number().int().optional(),
  before: z.string().optional(),
  status: components.RequestStatusEnum$inboundSchema.optional(),
  to: z.string().optional(),
  from: z.string().optional(),
});

/** @internal */
export type GetRequestsRelayRequest$Outbound = {
  first?: number | undefined;
  after?: string | undefined;
  last?: number | undefined;
  before?: string | undefined;
  status?: string | undefined;
  to?: string | undefined;
  from?: string | undefined;
};

/** @internal */
export const GetRequestsRelayRequest$outboundSchema: z.ZodType<
  GetRequestsRelayRequest$Outbound,
  z.ZodTypeDef,
  GetRequestsRelayRequest
> = z.object({
  first: z.number().int().optional(),
  after: z.string().optional(),
  last: z.number().int().optional(),
  before: z.string().optional(),
  status: components.RequestStatusEnum$outboundSchema.optional(),
  to: z.string().optional(),
  from: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRequestsRelayRequest$ {
  /** @deprecated use `GetRequestsRelayRequest$inboundSchema` instead. */
  export const inboundSchema = GetRequestsRelayRequest$inboundSchema;
  /** @deprecated use `GetRequestsRelayRequest$outboundSchema` instead. */
  export const outboundSchema = GetRequestsRelayRequest$outboundSchema;
  /** @deprecated use `GetRequestsRelayRequest$Outbound` instead. */
  export type Outbound = GetRequestsRelayRequest$Outbound;
}

export function getRequestsRelayRequestToJSON(
  getRequestsRelayRequest: GetRequestsRelayRequest,
): string {
  return JSON.stringify(
    GetRequestsRelayRequest$outboundSchema.parse(getRequestsRelayRequest),
  );
}

export function getRequestsRelayRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRequestsRelayRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRequestsRelayRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRequestsRelayRequest' from JSON`,
  );
}

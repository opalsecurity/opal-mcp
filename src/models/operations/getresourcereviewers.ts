/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetResourceReviewersRequest = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
};

/** @internal */
export const GetResourceReviewersRequest$inboundSchema: z.ZodType<
  GetResourceReviewersRequest,
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
export type GetResourceReviewersRequest$Outbound = {
  resource_id: string;
};

/** @internal */
export const GetResourceReviewersRequest$outboundSchema: z.ZodType<
  GetResourceReviewersRequest$Outbound,
  z.ZodTypeDef,
  GetResourceReviewersRequest
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
export namespace GetResourceReviewersRequest$ {
  /** @deprecated use `GetResourceReviewersRequest$inboundSchema` instead. */
  export const inboundSchema = GetResourceReviewersRequest$inboundSchema;
  /** @deprecated use `GetResourceReviewersRequest$outboundSchema` instead. */
  export const outboundSchema = GetResourceReviewersRequest$outboundSchema;
  /** @deprecated use `GetResourceReviewersRequest$Outbound` instead. */
  export type Outbound = GetResourceReviewersRequest$Outbound;
}

export function getResourceReviewersRequestToJSON(
  getResourceReviewersRequest: GetResourceReviewersRequest,
): string {
  return JSON.stringify(
    GetResourceReviewersRequest$outboundSchema.parse(
      getResourceReviewersRequest,
    ),
  );
}

export function getResourceReviewersRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceReviewersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceReviewersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceReviewersRequest' from JSON`,
  );
}

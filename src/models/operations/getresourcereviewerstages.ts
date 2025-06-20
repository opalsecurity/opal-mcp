/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetResourceReviewerStagesRequest = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
};

/** @internal */
export const GetResourceReviewerStagesRequest$inboundSchema: z.ZodType<
  GetResourceReviewerStagesRequest,
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
export type GetResourceReviewerStagesRequest$Outbound = {
  resource_id: string;
};

/** @internal */
export const GetResourceReviewerStagesRequest$outboundSchema: z.ZodType<
  GetResourceReviewerStagesRequest$Outbound,
  z.ZodTypeDef,
  GetResourceReviewerStagesRequest
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
export namespace GetResourceReviewerStagesRequest$ {
  /** @deprecated use `GetResourceReviewerStagesRequest$inboundSchema` instead. */
  export const inboundSchema = GetResourceReviewerStagesRequest$inboundSchema;
  /** @deprecated use `GetResourceReviewerStagesRequest$outboundSchema` instead. */
  export const outboundSchema = GetResourceReviewerStagesRequest$outboundSchema;
  /** @deprecated use `GetResourceReviewerStagesRequest$Outbound` instead. */
  export type Outbound = GetResourceReviewerStagesRequest$Outbound;
}

export function getResourceReviewerStagesRequestToJSON(
  getResourceReviewerStagesRequest: GetResourceReviewerStagesRequest,
): string {
  return JSON.stringify(
    GetResourceReviewerStagesRequest$outboundSchema.parse(
      getResourceReviewerStagesRequest,
    ),
  );
}

export function getResourceReviewerStagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResourceReviewerStagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResourceReviewerStagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResourceReviewerStagesRequest' from JSON`,
  );
}

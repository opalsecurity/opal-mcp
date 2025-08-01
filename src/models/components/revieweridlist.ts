/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A list of reviewer IDs.
 */
export type ReviewerIDList = {
  reviewerIds: Array<string>;
};

/** @internal */
export const ReviewerIDList$inboundSchema: z.ZodType<
  ReviewerIDList,
  z.ZodTypeDef,
  unknown
> = z.object({
  reviewer_ids: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "reviewer_ids": "reviewerIds",
  });
});

/** @internal */
export type ReviewerIDList$Outbound = {
  reviewer_ids: Array<string>;
};

/** @internal */
export const ReviewerIDList$outboundSchema: z.ZodType<
  ReviewerIDList$Outbound,
  z.ZodTypeDef,
  ReviewerIDList
> = z.object({
  reviewerIds: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    reviewerIds: "reviewer_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReviewerIDList$ {
  /** @deprecated use `ReviewerIDList$inboundSchema` instead. */
  export const inboundSchema = ReviewerIDList$inboundSchema;
  /** @deprecated use `ReviewerIDList$outboundSchema` instead. */
  export const outboundSchema = ReviewerIDList$outboundSchema;
  /** @deprecated use `ReviewerIDList$Outbound` instead. */
  export type Outbound = ReviewerIDList$Outbound;
}

export function reviewerIDListToJSON(reviewerIDList: ReviewerIDList): string {
  return JSON.stringify(ReviewerIDList$outboundSchema.parse(reviewerIDList));
}

export function reviewerIDListFromJSON(
  jsonString: string,
): SafeParseResult<ReviewerIDList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReviewerIDList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReviewerIDList' from JSON`,
  );
}

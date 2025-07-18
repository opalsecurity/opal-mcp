/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers.
 */
export const Operator = {
  And: "AND",
  Or: "OR",
} as const;
/**
 * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers.
 */
export type Operator = ClosedEnum<typeof Operator>;

/**
 * A reviewer stage.
 */
export type ReviewerStage = {
  /**
   * Whether this reviewer stage should require manager approval.
   */
  requireManagerApproval: boolean;
  /**
   * Whether this reviewer stage should require admin approval.
   */
  requireAdminApproval?: boolean | undefined;
  /**
   * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers.
   */
  operator: Operator;
  ownerIds: Array<string>;
};

/** @internal */
export const Operator$inboundSchema: z.ZodNativeEnum<typeof Operator> = z
  .nativeEnum(Operator);

/** @internal */
export const Operator$outboundSchema: z.ZodNativeEnum<typeof Operator> =
  Operator$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Operator$ {
  /** @deprecated use `Operator$inboundSchema` instead. */
  export const inboundSchema = Operator$inboundSchema;
  /** @deprecated use `Operator$outboundSchema` instead. */
  export const outboundSchema = Operator$outboundSchema;
}

/** @internal */
export const ReviewerStage$inboundSchema: z.ZodType<
  ReviewerStage,
  z.ZodTypeDef,
  unknown
> = z.object({
  require_manager_approval: z.boolean(),
  require_admin_approval: z.boolean().optional(),
  operator: Operator$inboundSchema,
  owner_ids: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "require_manager_approval": "requireManagerApproval",
    "require_admin_approval": "requireAdminApproval",
    "owner_ids": "ownerIds",
  });
});

/** @internal */
export type ReviewerStage$Outbound = {
  require_manager_approval: boolean;
  require_admin_approval?: boolean | undefined;
  operator: string;
  owner_ids: Array<string>;
};

/** @internal */
export const ReviewerStage$outboundSchema: z.ZodType<
  ReviewerStage$Outbound,
  z.ZodTypeDef,
  ReviewerStage
> = z.object({
  requireManagerApproval: z.boolean(),
  requireAdminApproval: z.boolean().optional(),
  operator: Operator$outboundSchema,
  ownerIds: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    requireManagerApproval: "require_manager_approval",
    requireAdminApproval: "require_admin_approval",
    ownerIds: "owner_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReviewerStage$ {
  /** @deprecated use `ReviewerStage$inboundSchema` instead. */
  export const inboundSchema = ReviewerStage$inboundSchema;
  /** @deprecated use `ReviewerStage$outboundSchema` instead. */
  export const outboundSchema = ReviewerStage$outboundSchema;
  /** @deprecated use `ReviewerStage$Outbound` instead. */
  export type Outbound = ReviewerStage$Outbound;
}

export function reviewerStageToJSON(reviewerStage: ReviewerStage): string {
  return JSON.stringify(ReviewerStage$outboundSchema.parse(reviewerStage));
}

export function reviewerStageFromJSON(
  jsonString: string,
): SafeParseResult<ReviewerStage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReviewerStage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReviewerStage' from JSON`,
  );
}

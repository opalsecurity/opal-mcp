/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TagSelector,
  TagSelector$inboundSchema,
  TagSelector$Outbound,
  TagSelector$outboundSchema,
} from "./tagselector.js";

export type RuleDisjunction = {
  selectors: Array<TagSelector>;
};

/** @internal */
export const RuleDisjunction$inboundSchema: z.ZodType<
  RuleDisjunction,
  z.ZodTypeDef,
  unknown
> = z.object({
  selectors: z.array(TagSelector$inboundSchema),
});

/** @internal */
export type RuleDisjunction$Outbound = {
  selectors: Array<TagSelector$Outbound>;
};

/** @internal */
export const RuleDisjunction$outboundSchema: z.ZodType<
  RuleDisjunction$Outbound,
  z.ZodTypeDef,
  RuleDisjunction
> = z.object({
  selectors: z.array(TagSelector$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RuleDisjunction$ {
  /** @deprecated use `RuleDisjunction$inboundSchema` instead. */
  export const inboundSchema = RuleDisjunction$inboundSchema;
  /** @deprecated use `RuleDisjunction$outboundSchema` instead. */
  export const outboundSchema = RuleDisjunction$outboundSchema;
  /** @deprecated use `RuleDisjunction$Outbound` instead. */
  export type Outbound = RuleDisjunction$Outbound;
}

export function ruleDisjunctionToJSON(
  ruleDisjunction: RuleDisjunction,
): string {
  return JSON.stringify(RuleDisjunction$outboundSchema.parse(ruleDisjunction));
}

export function ruleDisjunctionFromJSON(
  jsonString: string,
): SafeParseResult<RuleDisjunction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RuleDisjunction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RuleDisjunction' from JSON`,
  );
}

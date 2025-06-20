/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAccessRuleRequest = {
  /**
   * The access rule ID (group ID) of the access rule.
   */
  accessRuleId: string;
};

/** @internal */
export const GetAccessRuleRequest$inboundSchema: z.ZodType<
  GetAccessRuleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_rule_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "access_rule_id": "accessRuleId",
  });
});

/** @internal */
export type GetAccessRuleRequest$Outbound = {
  access_rule_id: string;
};

/** @internal */
export const GetAccessRuleRequest$outboundSchema: z.ZodType<
  GetAccessRuleRequest$Outbound,
  z.ZodTypeDef,
  GetAccessRuleRequest
> = z.object({
  accessRuleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    accessRuleId: "access_rule_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccessRuleRequest$ {
  /** @deprecated use `GetAccessRuleRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccessRuleRequest$inboundSchema;
  /** @deprecated use `GetAccessRuleRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccessRuleRequest$outboundSchema;
  /** @deprecated use `GetAccessRuleRequest$Outbound` instead. */
  export type Outbound = GetAccessRuleRequest$Outbound;
}

export function getAccessRuleRequestToJSON(
  getAccessRuleRequest: GetAccessRuleRequest,
): string {
  return JSON.stringify(
    GetAccessRuleRequest$outboundSchema.parse(getAccessRuleRequest),
  );
}

export function getAccessRuleRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAccessRuleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccessRuleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccessRuleRequest' from JSON`,
  );
}

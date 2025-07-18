/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TagSelector = {
  key: string;
  value: string;
  connectionId: string;
};

/** @internal */
export const TagSelector$inboundSchema: z.ZodType<
  TagSelector,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  value: z.string(),
  connection_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "connection_id": "connectionId",
  });
});

/** @internal */
export type TagSelector$Outbound = {
  key: string;
  value: string;
  connection_id: string;
};

/** @internal */
export const TagSelector$outboundSchema: z.ZodType<
  TagSelector$Outbound,
  z.ZodTypeDef,
  TagSelector
> = z.object({
  key: z.string(),
  value: z.string(),
  connectionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TagSelector$ {
  /** @deprecated use `TagSelector$inboundSchema` instead. */
  export const inboundSchema = TagSelector$inboundSchema;
  /** @deprecated use `TagSelector$outboundSchema` instead. */
  export const outboundSchema = TagSelector$outboundSchema;
  /** @deprecated use `TagSelector$Outbound` instead. */
  export type Outbound = TagSelector$Outbound;
}

export function tagSelectorToJSON(tagSelector: TagSelector): string {
  return JSON.stringify(TagSelector$outboundSchema.parse(tagSelector));
}

export function tagSelectorFromJSON(
  jsonString: string,
): SafeParseResult<TagSelector, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TagSelector$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TagSelector' from JSON`,
  );
}

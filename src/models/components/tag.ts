/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * # Tag Object
 *
 * @remarks
 * ### Description
 * The `Tag` object is used to represent a tag.
 *
 * ### Usage Example
 * Get tags from the `GET Tag` endpoint.
 */
export type Tag = {
  /**
   * The ID of the tag.
   */
  tagId: string;
  /**
   * The date the tag was created.
   */
  createdAt?: Date | undefined;
  /**
   * The date the tag was last updated.
   */
  updatedAt?: Date | undefined;
  /**
   * The ID of the user that created the tag.
   */
  userCreatorId?: string | undefined;
  /**
   * The key of the tag.
   */
  key?: string | undefined;
  /**
   * The value of the tag.
   */
  value?: string | undefined;
};

/** @internal */
export const Tag$inboundSchema: z.ZodType<Tag, z.ZodTypeDef, unknown> = z
  .object({
    tag_id: z.string(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    updated_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    user_creator_id: z.string().optional(),
    key: z.string().optional(),
    value: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "tag_id": "tagId",
      "created_at": "createdAt",
      "updated_at": "updatedAt",
      "user_creator_id": "userCreatorId",
    });
  });

/** @internal */
export type Tag$Outbound = {
  tag_id: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  user_creator_id?: string | undefined;
  key?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const Tag$outboundSchema: z.ZodType<Tag$Outbound, z.ZodTypeDef, Tag> = z
  .object({
    tagId: z.string(),
    createdAt: z.date().transform(v => v.toISOString()).optional(),
    updatedAt: z.date().transform(v => v.toISOString()).optional(),
    userCreatorId: z.string().optional(),
    key: z.string().optional(),
    value: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      tagId: "tag_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      userCreatorId: "user_creator_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tag$ {
  /** @deprecated use `Tag$inboundSchema` instead. */
  export const inboundSchema = Tag$inboundSchema;
  /** @deprecated use `Tag$outboundSchema` instead. */
  export const outboundSchema = Tag$outboundSchema;
  /** @deprecated use `Tag$Outbound` instead. */
  export type Outbound = Tag$Outbound;
}

export function tagToJSON(tag: Tag): string {
  return JSON.stringify(Tag$outboundSchema.parse(tag));
}

export function tagFromJSON(
  jsonString: string,
): SafeParseResult<Tag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tag' from JSON`,
  );
}

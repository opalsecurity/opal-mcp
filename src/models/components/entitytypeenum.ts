/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of an entity.
 */
export const EntityTypeEnum = {
  Group: "GROUP",
  Resource: "RESOURCE",
  User: "USER",
} as const;
/**
 * The type of an entity.
 */
export type EntityTypeEnum = ClosedEnum<typeof EntityTypeEnum>;

/** @internal */
export const EntityTypeEnum$inboundSchema: z.ZodNativeEnum<
  typeof EntityTypeEnum
> = z.nativeEnum(EntityTypeEnum);

/** @internal */
export const EntityTypeEnum$outboundSchema: z.ZodNativeEnum<
  typeof EntityTypeEnum
> = EntityTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityTypeEnum$ {
  /** @deprecated use `EntityTypeEnum$inboundSchema` instead. */
  export const inboundSchema = EntityTypeEnum$inboundSchema;
  /** @deprecated use `EntityTypeEnum$outboundSchema` instead. */
  export const outboundSchema = EntityTypeEnum$outboundSchema;
}

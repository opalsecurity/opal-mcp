/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The third party provider of the on call schedule.
 */
export const OnCallScheduleProviderEnum = {
  Opsgenie: "OPSGENIE",
  PagerDuty: "PAGER_DUTY",
} as const;
/**
 * The third party provider of the on call schedule.
 */
export type OnCallScheduleProviderEnum = ClosedEnum<
  typeof OnCallScheduleProviderEnum
>;

/** @internal */
export const OnCallScheduleProviderEnum$inboundSchema: z.ZodNativeEnum<
  typeof OnCallScheduleProviderEnum
> = z.nativeEnum(OnCallScheduleProviderEnum);

/** @internal */
export const OnCallScheduleProviderEnum$outboundSchema: z.ZodNativeEnum<
  typeof OnCallScheduleProviderEnum
> = OnCallScheduleProviderEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OnCallScheduleProviderEnum$ {
  /** @deprecated use `OnCallScheduleProviderEnum$inboundSchema` instead. */
  export const inboundSchema = OnCallScheduleProviderEnum$inboundSchema;
  /** @deprecated use `OnCallScheduleProviderEnum$outboundSchema` instead. */
  export const outboundSchema = OnCallScheduleProviderEnum$outboundSchema;
}

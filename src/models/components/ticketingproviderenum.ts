/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The third party ticketing platform provider.
 */
export const TicketingProviderEnum = {
  Jira: "JIRA",
  Linear: "LINEAR",
  ServiceNow: "SERVICE_NOW",
} as const;
/**
 * The third party ticketing platform provider.
 */
export type TicketingProviderEnum = ClosedEnum<typeof TicketingProviderEnum>;

/** @internal */
export const TicketingProviderEnum$inboundSchema: z.ZodNativeEnum<
  typeof TicketingProviderEnum
> = z.nativeEnum(TicketingProviderEnum);

/** @internal */
export const TicketingProviderEnum$outboundSchema: z.ZodNativeEnum<
  typeof TicketingProviderEnum
> = TicketingProviderEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingProviderEnum$ {
  /** @deprecated use `TicketingProviderEnum$inboundSchema` instead. */
  export const inboundSchema = TicketingProviderEnum$inboundSchema;
  /** @deprecated use `TicketingProviderEnum$outboundSchema` instead. */
  export const outboundSchema = TicketingProviderEnum$outboundSchema;
}

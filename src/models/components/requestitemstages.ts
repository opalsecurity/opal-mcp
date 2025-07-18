/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RequestStage,
  RequestStage$inboundSchema,
  RequestStage$Outbound,
  RequestStage$outboundSchema,
} from "./requeststage.js";

/**
 * The stages configuration for a request item
 */
export type RequestItemStages = {
  /**
   * The name of the requested role
   */
  requestedRoleName?: string | undefined;
  /**
   * The name of the requested item
   */
  requestedItemName: string;
  /**
   * The stages of review for this request
   */
  stages: Array<RequestStage>;
};

/** @internal */
export const RequestItemStages$inboundSchema: z.ZodType<
  RequestItemStages,
  z.ZodTypeDef,
  unknown
> = z.object({
  requestedRoleName: z.string().optional(),
  requestedItemName: z.string(),
  stages: z.array(RequestStage$inboundSchema),
});

/** @internal */
export type RequestItemStages$Outbound = {
  requestedRoleName?: string | undefined;
  requestedItemName: string;
  stages: Array<RequestStage$Outbound>;
};

/** @internal */
export const RequestItemStages$outboundSchema: z.ZodType<
  RequestItemStages$Outbound,
  z.ZodTypeDef,
  RequestItemStages
> = z.object({
  requestedRoleName: z.string().optional(),
  requestedItemName: z.string(),
  stages: z.array(RequestStage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestItemStages$ {
  /** @deprecated use `RequestItemStages$inboundSchema` instead. */
  export const inboundSchema = RequestItemStages$inboundSchema;
  /** @deprecated use `RequestItemStages$outboundSchema` instead. */
  export const outboundSchema = RequestItemStages$outboundSchema;
  /** @deprecated use `RequestItemStages$Outbound` instead. */
  export type Outbound = RequestItemStages$Outbound;
}

export function requestItemStagesToJSON(
  requestItemStages: RequestItemStages,
): string {
  return JSON.stringify(
    RequestItemStages$outboundSchema.parse(requestItemStages),
  );
}

export function requestItemStagesFromJSON(
  jsonString: string,
): SafeParseResult<RequestItemStages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestItemStages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestItemStages' from JSON`,
  );
}

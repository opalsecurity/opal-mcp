/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SetResourceVisibilityRequest = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
  visibilityInfo: components.VisibilityInfo;
};

/** @internal */
export const SetResourceVisibilityRequest$inboundSchema: z.ZodType<
  SetResourceVisibilityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource_id: z.string(),
  VisibilityInfo: components.VisibilityInfo$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "resource_id": "resourceId",
    "VisibilityInfo": "visibilityInfo",
  });
});

/** @internal */
export type SetResourceVisibilityRequest$Outbound = {
  resource_id: string;
  VisibilityInfo: components.VisibilityInfo$Outbound;
};

/** @internal */
export const SetResourceVisibilityRequest$outboundSchema: z.ZodType<
  SetResourceVisibilityRequest$Outbound,
  z.ZodTypeDef,
  SetResourceVisibilityRequest
> = z.object({
  resourceId: z.string(),
  visibilityInfo: components.VisibilityInfo$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    resourceId: "resource_id",
    visibilityInfo: "VisibilityInfo",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetResourceVisibilityRequest$ {
  /** @deprecated use `SetResourceVisibilityRequest$inboundSchema` instead. */
  export const inboundSchema = SetResourceVisibilityRequest$inboundSchema;
  /** @deprecated use `SetResourceVisibilityRequest$outboundSchema` instead. */
  export const outboundSchema = SetResourceVisibilityRequest$outboundSchema;
  /** @deprecated use `SetResourceVisibilityRequest$Outbound` instead. */
  export type Outbound = SetResourceVisibilityRequest$Outbound;
}

export function setResourceVisibilityRequestToJSON(
  setResourceVisibilityRequest: SetResourceVisibilityRequest,
): string {
  return JSON.stringify(
    SetResourceVisibilityRequest$outboundSchema.parse(
      setResourceVisibilityRequest,
    ),
  );
}

export function setResourceVisibilityRequestFromJSON(
  jsonString: string,
): SafeParseResult<SetResourceVisibilityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SetResourceVisibilityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SetResourceVisibilityRequest' from JSON`,
  );
}

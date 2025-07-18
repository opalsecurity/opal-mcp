/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteBundleRequest = {
  /**
   * The ID of the bundle.
   */
  bundleId: string;
};

/** @internal */
export const DeleteBundleRequest$inboundSchema: z.ZodType<
  DeleteBundleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  bundle_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "bundle_id": "bundleId",
  });
});

/** @internal */
export type DeleteBundleRequest$Outbound = {
  bundle_id: string;
};

/** @internal */
export const DeleteBundleRequest$outboundSchema: z.ZodType<
  DeleteBundleRequest$Outbound,
  z.ZodTypeDef,
  DeleteBundleRequest
> = z.object({
  bundleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    bundleId: "bundle_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBundleRequest$ {
  /** @deprecated use `DeleteBundleRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteBundleRequest$inboundSchema;
  /** @deprecated use `DeleteBundleRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteBundleRequest$outboundSchema;
  /** @deprecated use `DeleteBundleRequest$Outbound` instead. */
  export type Outbound = DeleteBundleRequest$Outbound;
}

export function deleteBundleRequestToJSON(
  deleteBundleRequest: DeleteBundleRequest,
): string {
  return JSON.stringify(
    DeleteBundleRequest$outboundSchema.parse(deleteBundleRequest),
  );
}

export function deleteBundleRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteBundleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteBundleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteBundleRequest' from JSON`,
  );
}

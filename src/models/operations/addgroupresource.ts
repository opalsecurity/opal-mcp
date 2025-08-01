/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddGroupResourceRequestBody = {
  /**
   * The remote ID of the access level to grant to this user. If omitted, the default access level remote ID value (empty string) is used.
   */
  accessLevelRemoteId?: string | undefined;
  /**
   * The duration for which the resource can be accessed (in minutes). Use 0 to set to indefinite.
   */
  durationMinutes?: number | undefined;
};

export type AddGroupResourceRequest = {
  /**
   * The ID of the group.
   */
  groupId: string;
  /**
   * The ID of the resource.
   */
  resourceId: string;
  /**
   * The remote ID of the access level to grant to this user. If omitted, the default access level remote ID value (empty string) is used.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  accessLevelRemoteId?: string | undefined;
  requestBody?: AddGroupResourceRequestBody | undefined;
};

/** @internal */
export const AddGroupResourceRequestBody$inboundSchema: z.ZodType<
  AddGroupResourceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  access_level_remote_id: z.string().optional(),
  duration_minutes: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "access_level_remote_id": "accessLevelRemoteId",
    "duration_minutes": "durationMinutes",
  });
});

/** @internal */
export type AddGroupResourceRequestBody$Outbound = {
  access_level_remote_id?: string | undefined;
  duration_minutes?: number | undefined;
};

/** @internal */
export const AddGroupResourceRequestBody$outboundSchema: z.ZodType<
  AddGroupResourceRequestBody$Outbound,
  z.ZodTypeDef,
  AddGroupResourceRequestBody
> = z.object({
  accessLevelRemoteId: z.string().optional(),
  durationMinutes: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    accessLevelRemoteId: "access_level_remote_id",
    durationMinutes: "duration_minutes",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGroupResourceRequestBody$ {
  /** @deprecated use `AddGroupResourceRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddGroupResourceRequestBody$inboundSchema;
  /** @deprecated use `AddGroupResourceRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddGroupResourceRequestBody$outboundSchema;
  /** @deprecated use `AddGroupResourceRequestBody$Outbound` instead. */
  export type Outbound = AddGroupResourceRequestBody$Outbound;
}

export function addGroupResourceRequestBodyToJSON(
  addGroupResourceRequestBody: AddGroupResourceRequestBody,
): string {
  return JSON.stringify(
    AddGroupResourceRequestBody$outboundSchema.parse(
      addGroupResourceRequestBody,
    ),
  );
}

export function addGroupResourceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddGroupResourceRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddGroupResourceRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddGroupResourceRequestBody' from JSON`,
  );
}

/** @internal */
export const AddGroupResourceRequest$inboundSchema: z.ZodType<
  AddGroupResourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  group_id: z.string(),
  resource_id: z.string(),
  access_level_remote_id: z.string().optional(),
  RequestBody: z.lazy(() => AddGroupResourceRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "group_id": "groupId",
    "resource_id": "resourceId",
    "access_level_remote_id": "accessLevelRemoteId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddGroupResourceRequest$Outbound = {
  group_id: string;
  resource_id: string;
  access_level_remote_id?: string | undefined;
  RequestBody?: AddGroupResourceRequestBody$Outbound | undefined;
};

/** @internal */
export const AddGroupResourceRequest$outboundSchema: z.ZodType<
  AddGroupResourceRequest$Outbound,
  z.ZodTypeDef,
  AddGroupResourceRequest
> = z.object({
  groupId: z.string(),
  resourceId: z.string(),
  accessLevelRemoteId: z.string().optional(),
  requestBody: z.lazy(() => AddGroupResourceRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    groupId: "group_id",
    resourceId: "resource_id",
    accessLevelRemoteId: "access_level_remote_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGroupResourceRequest$ {
  /** @deprecated use `AddGroupResourceRequest$inboundSchema` instead. */
  export const inboundSchema = AddGroupResourceRequest$inboundSchema;
  /** @deprecated use `AddGroupResourceRequest$outboundSchema` instead. */
  export const outboundSchema = AddGroupResourceRequest$outboundSchema;
  /** @deprecated use `AddGroupResourceRequest$Outbound` instead. */
  export type Outbound = AddGroupResourceRequest$Outbound;
}

export function addGroupResourceRequestToJSON(
  addGroupResourceRequest: AddGroupResourceRequest,
): string {
  return JSON.stringify(
    AddGroupResourceRequest$outboundSchema.parse(addGroupResourceRequest),
  );
}

export function addGroupResourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddGroupResourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddGroupResourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddGroupResourceRequest' from JSON`,
  );
}

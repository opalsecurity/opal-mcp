/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RequestCustomFieldResponse,
  RequestCustomFieldResponse$inboundSchema,
  RequestCustomFieldResponse$Outbound,
  RequestCustomFieldResponse$outboundSchema,
} from "./requestcustomfieldresponse.js";
import {
  RequestedItem,
  RequestedItem$inboundSchema,
  RequestedItem$Outbound,
  RequestedItem$outboundSchema,
} from "./requesteditem.js";
import {
  RequestItemStages,
  RequestItemStages$inboundSchema,
  RequestItemStages$Outbound,
  RequestItemStages$outboundSchema,
} from "./requestitemstages.js";
import {
  RequestStatusEnum,
  RequestStatusEnum$inboundSchema,
  RequestStatusEnum$outboundSchema,
} from "./requeststatusenum.js";

/**
 * # Request Object
 *
 * @remarks
 * ### Description
 * The `Request` object is used to represent a request.
 *
 * ### Usage Example
 * Returned from the `GET Requests` endpoint.
 */
export type RequestT = {
  /**
   * The unique identifier of the request.
   */
  id: string;
  /**
   * The date and time the request was created.
   */
  createdAt: Date;
  /**
   * The date and time the request was last updated.
   */
  updatedAt: Date;
  /**
   * The unique identifier of the user who created the request.
   */
  requesterId: string;
  /**
   * The unique identifier of the user who is the target of the request.
   */
  targetUserId?: string | undefined;
  /**
   * The unique identifier of the group who is the target of the request.
   */
  targetGroupId?: string | undefined;
  /**
   * # Request Status
   *
   * @remarks
   * ### Description
   * The `RequestStatus` enum is used to represent the status of a request.
   *
   * ### Usage Example
   * Returned from the `GET Requests` endpoint.
   */
  status: RequestStatusEnum;
  /**
   * The reason for the request.
   */
  reason: string;
  /**
   * The duration of the request in minutes.
   */
  durationMinutes?: number | undefined;
  /**
   * The list of targets for the request.
   */
  requestedItemsList?: Array<RequestedItem> | undefined;
  /**
   * The responses given to the custom fields associated to the request
   */
  customFieldsResponses?: Array<RequestCustomFieldResponse> | undefined;
  /**
   * The stages configuration for a request item
   */
  stages?: RequestItemStages | undefined;
};

/** @internal */
export const RequestT$inboundSchema: z.ZodType<
  RequestT,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  requester_id: z.string(),
  target_user_id: z.string().optional(),
  target_group_id: z.string().optional(),
  status: RequestStatusEnum$inboundSchema,
  reason: z.string(),
  duration_minutes: z.number().int().optional(),
  requested_items_list: z.array(RequestedItem$inboundSchema).optional(),
  custom_fields_responses: z.array(RequestCustomFieldResponse$inboundSchema)
    .optional(),
  stages: RequestItemStages$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "requester_id": "requesterId",
    "target_user_id": "targetUserId",
    "target_group_id": "targetGroupId",
    "duration_minutes": "durationMinutes",
    "requested_items_list": "requestedItemsList",
    "custom_fields_responses": "customFieldsResponses",
  });
});

/** @internal */
export type RequestT$Outbound = {
  id: string;
  created_at: string;
  updated_at: string;
  requester_id: string;
  target_user_id?: string | undefined;
  target_group_id?: string | undefined;
  status: string;
  reason: string;
  duration_minutes?: number | undefined;
  requested_items_list?: Array<RequestedItem$Outbound> | undefined;
  custom_fields_responses?:
    | Array<RequestCustomFieldResponse$Outbound>
    | undefined;
  stages?: RequestItemStages$Outbound | undefined;
};

/** @internal */
export const RequestT$outboundSchema: z.ZodType<
  RequestT$Outbound,
  z.ZodTypeDef,
  RequestT
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  requesterId: z.string(),
  targetUserId: z.string().optional(),
  targetGroupId: z.string().optional(),
  status: RequestStatusEnum$outboundSchema,
  reason: z.string(),
  durationMinutes: z.number().int().optional(),
  requestedItemsList: z.array(RequestedItem$outboundSchema).optional(),
  customFieldsResponses: z.array(RequestCustomFieldResponse$outboundSchema)
    .optional(),
  stages: RequestItemStages$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    requesterId: "requester_id",
    targetUserId: "target_user_id",
    targetGroupId: "target_group_id",
    durationMinutes: "duration_minutes",
    requestedItemsList: "requested_items_list",
    customFieldsResponses: "custom_fields_responses",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestT$ {
  /** @deprecated use `RequestT$inboundSchema` instead. */
  export const inboundSchema = RequestT$inboundSchema;
  /** @deprecated use `RequestT$outboundSchema` instead. */
  export const outboundSchema = RequestT$outboundSchema;
  /** @deprecated use `RequestT$Outbound` instead. */
  export type Outbound = RequestT$Outbound;
}

export function requestToJSON(requestT: RequestT): string {
  return JSON.stringify(RequestT$outboundSchema.parse(requestT));
}

export function requestFromJSON(
  jsonString: string,
): SafeParseResult<RequestT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestT' from JSON`,
  );
}

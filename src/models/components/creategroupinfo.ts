/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GroupRemoteInfo,
  GroupRemoteInfo$inboundSchema,
  GroupRemoteInfo$Outbound,
  GroupRemoteInfo$outboundSchema,
} from "./groupremoteinfo.js";
import {
  GroupTypeEnum,
  GroupTypeEnum$inboundSchema,
  GroupTypeEnum$outboundSchema,
} from "./grouptypeenum.js";
import {
  RiskSensitivityEnum,
  RiskSensitivityEnum$inboundSchema,
  RiskSensitivityEnum$outboundSchema,
} from "./risksensitivityenum.js";

/**
 * # CreateGroupInfo Object
 *
 * @remarks
 * ### Description
 * The `CreateGroupInfo` object is used to store creation info for a group.
 *
 * ### Usage Example
 * Use in the `POST Groups` endpoint.
 */
export type CreateGroupInfo = {
  /**
   * The name of the remote group.
   */
  name: string;
  /**
   * A description of the remote group.
   */
  description?: string | undefined;
  /**
   * The type of the group.
   */
  groupType: GroupTypeEnum;
  /**
   * The ID of the app for the group.
   */
  appId: string;
  /**
   * Information that defines the remote group. This replaces the deprecated remote_id and metadata fields.
   */
  remoteInfo?: GroupRemoteInfo | undefined;
  /**
   * Deprecated - use remote_info instead. The ID of the group on the remote system. Include only for items linked to remote systems. See [this guide](https://docs.opal.dev/reference/end-system-objects) for details on how to specify this field.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  remoteGroupId?: string | undefined;
  /**
   * Deprecated - use remote_info instead.
   *
   * @remarks
   *
   * JSON metadata about the remote group. Include only for items linked to remote systems. See [this guide](https://docs.opal.dev/reference/end-system-objects) for details on how to specify this field.
   * The required format is dependent on group_type and should have the following schema:
   * <style type="text/css">
   * code {max-height:300px !important}
   * </style>
   * ```json
   * {
   *   "$schema": "http://json-schema.org/draft-04/schema#",
   *   "title": "Group Metadata",
   *   "properties": {
   *     "ad_group": {
   *       "properties": {
   *         "object_guid": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["object_guid"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "Active Directory Group"
   *     },
   *     "duo_group": {
   *       "properties": {
   *         "group_id": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["group_id"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "Duo Group"
   *     },
   *     "git_hub_team": {
   *       "properties": {
   *         "org_name": {
   *           "type": "string"
   *         },
   *         "team_slug": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["org_name", "team_slug"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "GitHub Team"
   *     },
   *     "google_groups_group": {
   *       "properties": {
   *         "group_id": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["group_id"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "Google Groups Group"
   *     },
   *     "ldap_group": {
   *       "properties": {
   *         "group_uid": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["group_uid"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "LDAP Group"
   *     },
   *     "okta_directory_group": {
   *       "properties": {
   *         "group_id": {
   *           "type": "string"
   *         }
   *       },
   *       "required": ["group_id"],
   *       "additionalProperties": false,
   *       "type": "object",
   *       "title": "Okta Directory Group"
   *     }
   *   },
   *   "additionalProperties": false,
   *   "minProperties": 1,
   *   "maxProperties": 1,
   *   "type": "object"
   * }
   * ```
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  metadata?: string | undefined;
  /**
   * Custom request notification sent upon request approval.
   */
  customRequestNotification?: string | null | undefined;
  riskSensitivityOverride?: RiskSensitivityEnum | undefined;
};

/** @internal */
export const CreateGroupInfo$inboundSchema: z.ZodType<
  CreateGroupInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  group_type: GroupTypeEnum$inboundSchema,
  app_id: z.string(),
  remote_info: GroupRemoteInfo$inboundSchema.optional(),
  remote_group_id: z.string().optional(),
  metadata: z.string().optional(),
  custom_request_notification: z.nullable(z.string()).optional(),
  risk_sensitivity_override: RiskSensitivityEnum$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "group_type": "groupType",
    "app_id": "appId",
    "remote_info": "remoteInfo",
    "remote_group_id": "remoteGroupId",
    "custom_request_notification": "customRequestNotification",
    "risk_sensitivity_override": "riskSensitivityOverride",
  });
});

/** @internal */
export type CreateGroupInfo$Outbound = {
  name: string;
  description?: string | undefined;
  group_type: string;
  app_id: string;
  remote_info?: GroupRemoteInfo$Outbound | undefined;
  remote_group_id?: string | undefined;
  metadata?: string | undefined;
  custom_request_notification?: string | null | undefined;
  risk_sensitivity_override?: string | undefined;
};

/** @internal */
export const CreateGroupInfo$outboundSchema: z.ZodType<
  CreateGroupInfo$Outbound,
  z.ZodTypeDef,
  CreateGroupInfo
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  groupType: GroupTypeEnum$outboundSchema,
  appId: z.string(),
  remoteInfo: GroupRemoteInfo$outboundSchema.optional(),
  remoteGroupId: z.string().optional(),
  metadata: z.string().optional(),
  customRequestNotification: z.nullable(z.string()).optional(),
  riskSensitivityOverride: RiskSensitivityEnum$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    groupType: "group_type",
    appId: "app_id",
    remoteInfo: "remote_info",
    remoteGroupId: "remote_group_id",
    customRequestNotification: "custom_request_notification",
    riskSensitivityOverride: "risk_sensitivity_override",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGroupInfo$ {
  /** @deprecated use `CreateGroupInfo$inboundSchema` instead. */
  export const inboundSchema = CreateGroupInfo$inboundSchema;
  /** @deprecated use `CreateGroupInfo$outboundSchema` instead. */
  export const outboundSchema = CreateGroupInfo$outboundSchema;
  /** @deprecated use `CreateGroupInfo$Outbound` instead. */
  export type Outbound = CreateGroupInfo$Outbound;
}

export function createGroupInfoToJSON(
  createGroupInfo: CreateGroupInfo,
): string {
  return JSON.stringify(CreateGroupInfo$outboundSchema.parse(createGroupInfo));
}

export function createGroupInfoFromJSON(
  jsonString: string,
): SafeParseResult<CreateGroupInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateGroupInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGroupInfo' from JSON`,
  );
}

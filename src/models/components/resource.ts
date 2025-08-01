/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RequestConfiguration,
  RequestConfiguration$inboundSchema,
  RequestConfiguration$Outbound,
  RequestConfiguration$outboundSchema,
} from "./requestconfiguration.js";
import {
  ResourceRemoteInfo,
  ResourceRemoteInfo$inboundSchema,
  ResourceRemoteInfo$Outbound,
  ResourceRemoteInfo$outboundSchema,
} from "./resourceremoteinfo.js";
import {
  ResourceTypeEnum,
  ResourceTypeEnum$inboundSchema,
  ResourceTypeEnum$outboundSchema,
} from "./resourcetypeenum.js";
import {
  RiskSensitivityEnum,
  RiskSensitivityEnum$inboundSchema,
  RiskSensitivityEnum$outboundSchema,
} from "./risksensitivityenum.js";
import {
  TicketPropagationConfiguration,
  TicketPropagationConfiguration$inboundSchema,
  TicketPropagationConfiguration$Outbound,
  TicketPropagationConfiguration$outboundSchema,
} from "./ticketpropagationconfiguration.js";

/**
 * The risk sensitivity level for the resource. When an override is set, this field will match that.
 */
export const ResourceRiskSensitivity = {
  Unknown: "UNKNOWN",
  Critical: "CRITICAL",
  High: "HIGH",
  Medium: "MEDIUM",
  Low: "LOW",
  None: "NONE",
} as const;
/**
 * The risk sensitivity level for the resource. When an override is set, this field will match that.
 */
export type ResourceRiskSensitivity = ClosedEnum<
  typeof ResourceRiskSensitivity
>;

/**
 * # Resource Object
 *
 * @remarks
 * ### Description
 * The `Resource` object is used to represent a resource.
 *
 * ### Usage Example
 * Update from the `UPDATE Resources` endpoint.
 */
export type Resource = {
  /**
   * The ID of the resource.
   */
  resourceId: string;
  /**
   * The ID of the app.
   */
  appId?: string | undefined;
  /**
   * The name of the resource.
   */
  name?: string | undefined;
  /**
   * A description of the resource.
   */
  description?: string | undefined;
  /**
   * The ID of the owner of the resource.
   */
  adminOwnerId?: string | undefined;
  /**
   * The ID of the resource on the remote system.
   */
  remoteResourceId?: string | undefined;
  /**
   * The name of the resource on the remote system.
   */
  remoteResourceName?: string | undefined;
  /**
   * The type of the resource.
   */
  resourceType?: ResourceTypeEnum | undefined;
  /**
   * The maximum duration for which the resource can be requested (in minutes).
   */
  maxDuration?: number | undefined;
  /**
   * The recommended duration for which the resource should be requested (in minutes). -1 represents an indefinite duration.
   */
  recommendedDuration?: number | undefined;
  /**
   * A bool representing whether or not access requests to the resource require manager approval.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  requireManagerApproval?: boolean | undefined;
  /**
   * A bool representing whether or not access requests to the resource require an access ticket.
   */
  requireSupportTicket?: boolean | undefined;
  /**
   * A bool representing whether or not to require MFA for reviewers to approve requests for this resource.
   */
  requireMfaToApprove?: boolean | undefined;
  /**
   * A bool representing whether or not to require MFA for requesting access to this resource.
   */
  requireMfaToRequest?: boolean | undefined;
  /**
   * A bool representing whether or not to require MFA to connect to this resource.
   */
  requireMfaToConnect?: boolean | undefined;
  /**
   * A bool representing whether or not to automatically approve requests to this resource.
   */
  autoApproval?: boolean | undefined;
  /**
   * The ID of the associated request template.
   */
  requestTemplateId?: string | undefined;
  /**
   * A bool representing whether or not to allow access requests to this resource.
   */
  isRequestable?: boolean | undefined;
  /**
   * The ID of the parent resource.
   */
  parentResourceId?: string | undefined;
  /**
   * The ID of the associated configuration template.
   */
  configurationTemplateId?: string | undefined;
  /**
   * A list of configurations for requests to this resource.
   */
  requestConfigurations?: Array<RequestConfiguration> | undefined;
  /**
   * A list of configurations for requests to this resource. Deprecated in favor of `request_configurations`.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  requestConfigurationList?: Array<RequestConfiguration> | undefined;
  /**
   * Configuration for ticket propagation, when enabled, a ticket will be created for access changes related to the users in this resource.
   */
  ticketPropagation?: TicketPropagationConfiguration | undefined;
  /**
   * Custom request notification sent upon request approval.
   */
  customRequestNotification?: string | null | undefined;
  /**
   * The risk sensitivity level for the resource. When an override is set, this field will match that.
   */
  riskSensitivity?: ResourceRiskSensitivity | undefined;
  riskSensitivityOverride?: RiskSensitivityEnum | undefined;
  /**
   * JSON metadata about the remote resource. Only set for items linked to remote systems. See [this guide](https://docs.opal.dev/reference/end-system-objects) for details.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  metadata?: string | undefined;
  /**
   * Information that defines the remote resource. This replaces the deprecated remote_id and metadata fields.
   */
  remoteInfo?: ResourceRemoteInfo | undefined;
  /**
   * List of resource IDs that are ancestors of this resource.
   */
  ancestorResourceIds?: Array<string> | undefined;
  /**
   * List of resource IDs that are descendants of this resource.
   */
  descendantResourceIds?: Array<string> | undefined;
};

/** @internal */
export const ResourceRiskSensitivity$inboundSchema: z.ZodNativeEnum<
  typeof ResourceRiskSensitivity
> = z.nativeEnum(ResourceRiskSensitivity);

/** @internal */
export const ResourceRiskSensitivity$outboundSchema: z.ZodNativeEnum<
  typeof ResourceRiskSensitivity
> = ResourceRiskSensitivity$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceRiskSensitivity$ {
  /** @deprecated use `ResourceRiskSensitivity$inboundSchema` instead. */
  export const inboundSchema = ResourceRiskSensitivity$inboundSchema;
  /** @deprecated use `ResourceRiskSensitivity$outboundSchema` instead. */
  export const outboundSchema = ResourceRiskSensitivity$outboundSchema;
}

/** @internal */
export const Resource$inboundSchema: z.ZodType<
  Resource,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource_id: z.string(),
  app_id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  admin_owner_id: z.string().optional(),
  remote_resource_id: z.string().optional(),
  remote_resource_name: z.string().optional(),
  resource_type: ResourceTypeEnum$inboundSchema.optional(),
  max_duration: z.number().int().optional(),
  recommended_duration: z.number().int().optional(),
  require_manager_approval: z.boolean().optional(),
  require_support_ticket: z.boolean().optional(),
  require_mfa_to_approve: z.boolean().optional(),
  require_mfa_to_request: z.boolean().optional(),
  require_mfa_to_connect: z.boolean().optional(),
  auto_approval: z.boolean().optional(),
  request_template_id: z.string().optional(),
  is_requestable: z.boolean().optional(),
  parent_resource_id: z.string().optional(),
  configuration_template_id: z.string().optional(),
  request_configurations: z.array(RequestConfiguration$inboundSchema)
    .optional(),
  request_configuration_list: z.array(RequestConfiguration$inboundSchema)
    .optional(),
  ticket_propagation: TicketPropagationConfiguration$inboundSchema.optional(),
  custom_request_notification: z.nullable(z.string()).optional(),
  risk_sensitivity: ResourceRiskSensitivity$inboundSchema.optional(),
  risk_sensitivity_override: RiskSensitivityEnum$inboundSchema.optional(),
  metadata: z.string().optional(),
  remote_info: ResourceRemoteInfo$inboundSchema.optional(),
  ancestor_resource_ids: z.array(z.string()).optional(),
  descendant_resource_ids: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "resource_id": "resourceId",
    "app_id": "appId",
    "admin_owner_id": "adminOwnerId",
    "remote_resource_id": "remoteResourceId",
    "remote_resource_name": "remoteResourceName",
    "resource_type": "resourceType",
    "max_duration": "maxDuration",
    "recommended_duration": "recommendedDuration",
    "require_manager_approval": "requireManagerApproval",
    "require_support_ticket": "requireSupportTicket",
    "require_mfa_to_approve": "requireMfaToApprove",
    "require_mfa_to_request": "requireMfaToRequest",
    "require_mfa_to_connect": "requireMfaToConnect",
    "auto_approval": "autoApproval",
    "request_template_id": "requestTemplateId",
    "is_requestable": "isRequestable",
    "parent_resource_id": "parentResourceId",
    "configuration_template_id": "configurationTemplateId",
    "request_configurations": "requestConfigurations",
    "request_configuration_list": "requestConfigurationList",
    "ticket_propagation": "ticketPropagation",
    "custom_request_notification": "customRequestNotification",
    "risk_sensitivity": "riskSensitivity",
    "risk_sensitivity_override": "riskSensitivityOverride",
    "remote_info": "remoteInfo",
    "ancestor_resource_ids": "ancestorResourceIds",
    "descendant_resource_ids": "descendantResourceIds",
  });
});

/** @internal */
export type Resource$Outbound = {
  resource_id: string;
  app_id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  admin_owner_id?: string | undefined;
  remote_resource_id?: string | undefined;
  remote_resource_name?: string | undefined;
  resource_type?: string | undefined;
  max_duration?: number | undefined;
  recommended_duration?: number | undefined;
  require_manager_approval?: boolean | undefined;
  require_support_ticket?: boolean | undefined;
  require_mfa_to_approve?: boolean | undefined;
  require_mfa_to_request?: boolean | undefined;
  require_mfa_to_connect?: boolean | undefined;
  auto_approval?: boolean | undefined;
  request_template_id?: string | undefined;
  is_requestable?: boolean | undefined;
  parent_resource_id?: string | undefined;
  configuration_template_id?: string | undefined;
  request_configurations?: Array<RequestConfiguration$Outbound> | undefined;
  request_configuration_list?: Array<RequestConfiguration$Outbound> | undefined;
  ticket_propagation?: TicketPropagationConfiguration$Outbound | undefined;
  custom_request_notification?: string | null | undefined;
  risk_sensitivity?: string | undefined;
  risk_sensitivity_override?: string | undefined;
  metadata?: string | undefined;
  remote_info?: ResourceRemoteInfo$Outbound | undefined;
  ancestor_resource_ids?: Array<string> | undefined;
  descendant_resource_ids?: Array<string> | undefined;
};

/** @internal */
export const Resource$outboundSchema: z.ZodType<
  Resource$Outbound,
  z.ZodTypeDef,
  Resource
> = z.object({
  resourceId: z.string(),
  appId: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  adminOwnerId: z.string().optional(),
  remoteResourceId: z.string().optional(),
  remoteResourceName: z.string().optional(),
  resourceType: ResourceTypeEnum$outboundSchema.optional(),
  maxDuration: z.number().int().optional(),
  recommendedDuration: z.number().int().optional(),
  requireManagerApproval: z.boolean().optional(),
  requireSupportTicket: z.boolean().optional(),
  requireMfaToApprove: z.boolean().optional(),
  requireMfaToRequest: z.boolean().optional(),
  requireMfaToConnect: z.boolean().optional(),
  autoApproval: z.boolean().optional(),
  requestTemplateId: z.string().optional(),
  isRequestable: z.boolean().optional(),
  parentResourceId: z.string().optional(),
  configurationTemplateId: z.string().optional(),
  requestConfigurations: z.array(RequestConfiguration$outboundSchema)
    .optional(),
  requestConfigurationList: z.array(RequestConfiguration$outboundSchema)
    .optional(),
  ticketPropagation: TicketPropagationConfiguration$outboundSchema.optional(),
  customRequestNotification: z.nullable(z.string()).optional(),
  riskSensitivity: ResourceRiskSensitivity$outboundSchema.optional(),
  riskSensitivityOverride: RiskSensitivityEnum$outboundSchema.optional(),
  metadata: z.string().optional(),
  remoteInfo: ResourceRemoteInfo$outboundSchema.optional(),
  ancestorResourceIds: z.array(z.string()).optional(),
  descendantResourceIds: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    resourceId: "resource_id",
    appId: "app_id",
    adminOwnerId: "admin_owner_id",
    remoteResourceId: "remote_resource_id",
    remoteResourceName: "remote_resource_name",
    resourceType: "resource_type",
    maxDuration: "max_duration",
    recommendedDuration: "recommended_duration",
    requireManagerApproval: "require_manager_approval",
    requireSupportTicket: "require_support_ticket",
    requireMfaToApprove: "require_mfa_to_approve",
    requireMfaToRequest: "require_mfa_to_request",
    requireMfaToConnect: "require_mfa_to_connect",
    autoApproval: "auto_approval",
    requestTemplateId: "request_template_id",
    isRequestable: "is_requestable",
    parentResourceId: "parent_resource_id",
    configurationTemplateId: "configuration_template_id",
    requestConfigurations: "request_configurations",
    requestConfigurationList: "request_configuration_list",
    ticketPropagation: "ticket_propagation",
    customRequestNotification: "custom_request_notification",
    riskSensitivity: "risk_sensitivity",
    riskSensitivityOverride: "risk_sensitivity_override",
    remoteInfo: "remote_info",
    ancestorResourceIds: "ancestor_resource_ids",
    descendantResourceIds: "descendant_resource_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Resource$ {
  /** @deprecated use `Resource$inboundSchema` instead. */
  export const inboundSchema = Resource$inboundSchema;
  /** @deprecated use `Resource$outboundSchema` instead. */
  export const outboundSchema = Resource$outboundSchema;
  /** @deprecated use `Resource$Outbound` instead. */
  export type Outbound = Resource$Outbound;
}

export function resourceToJSON(resource: Resource): string {
  return JSON.stringify(Resource$outboundSchema.parse(resource));
}

export function resourceFromJSON(
  jsonString: string,
): SafeParseResult<Resource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Resource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Resource' from JSON`,
  );
}

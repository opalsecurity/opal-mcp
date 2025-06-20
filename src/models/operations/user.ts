/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UserRequest = {
  /**
   * The user ID of the user.
   */
  userId?: string | undefined;
  /**
   * The email of the user. If both user ID and email are provided, user ID will take precedence. If neither are provided, an error will occur.
   */
  email?: string | undefined;
};

/** @internal */
export const UserRequest$inboundSchema: z.ZodType<
  UserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_id: z.string().optional(),
  email: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type UserRequest$Outbound = {
  user_id?: string | undefined;
  email?: string | undefined;
};

/** @internal */
export const UserRequest$outboundSchema: z.ZodType<
  UserRequest$Outbound,
  z.ZodTypeDef,
  UserRequest
> = z.object({
  userId: z.string().optional(),
  email: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserRequest$ {
  /** @deprecated use `UserRequest$inboundSchema` instead. */
  export const inboundSchema = UserRequest$inboundSchema;
  /** @deprecated use `UserRequest$outboundSchema` instead. */
  export const outboundSchema = UserRequest$outboundSchema;
  /** @deprecated use `UserRequest$Outbound` instead. */
  export type Outbound = UserRequest$Outbound;
}

export function userRequestToJSON(userRequest: UserRequest): string {
  return JSON.stringify(UserRequest$outboundSchema.parse(userRequest));
}

export function userRequestFromJSON(
  jsonString: string,
): SafeParseResult<UserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserRequest' from JSON`,
  );
}

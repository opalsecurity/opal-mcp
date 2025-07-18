/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Session,
  Session$inboundSchema,
  Session$Outbound,
  Session$outboundSchema,
} from "./session.js";

export type SessionsList = {
  /**
   * The cursor with which to continue pagination if additional result pages exist.
   */
  next?: string | null | undefined;
  /**
   * The cursor used to obtain the current result page.
   */
  previous?: string | null | undefined;
  results?: Array<Session> | undefined;
};

/** @internal */
export const SessionsList$inboundSchema: z.ZodType<
  SessionsList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.nullable(z.string()).optional(),
  previous: z.nullable(z.string()).optional(),
  results: z.array(Session$inboundSchema).optional(),
});

/** @internal */
export type SessionsList$Outbound = {
  next?: string | null | undefined;
  previous?: string | null | undefined;
  results?: Array<Session$Outbound> | undefined;
};

/** @internal */
export const SessionsList$outboundSchema: z.ZodType<
  SessionsList$Outbound,
  z.ZodTypeDef,
  SessionsList
> = z.object({
  next: z.nullable(z.string()).optional(),
  previous: z.nullable(z.string()).optional(),
  results: z.array(Session$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SessionsList$ {
  /** @deprecated use `SessionsList$inboundSchema` instead. */
  export const inboundSchema = SessionsList$inboundSchema;
  /** @deprecated use `SessionsList$outboundSchema` instead. */
  export const outboundSchema = SessionsList$outboundSchema;
  /** @deprecated use `SessionsList$Outbound` instead. */
  export type Outbound = SessionsList$Outbound;
}

export function sessionsListToJSON(sessionsList: SessionsList): string {
  return JSON.stringify(SessionsList$outboundSchema.parse(sessionsList));
}

export function sessionsListFromJSON(
  jsonString: string,
): SafeParseResult<SessionsList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SessionsList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SessionsList' from JSON`,
  );
}

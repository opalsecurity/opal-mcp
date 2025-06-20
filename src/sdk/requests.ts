/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { requestsApproveRequest } from "../funcs/requestsApproveRequest.js";
import { requestsCreateRequest } from "../funcs/requestsCreateRequest.js";
import { requestsGetRequests } from "../funcs/requestsGetRequests.js";
import { requestsGetRequestsRelay } from "../funcs/requestsGetRequestsRelay.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Requests extends ClientSDK {
  /**
   * Returns a list of requests for your organization that is visible by the admin.
   */
  async getRequests(
    request: operations.GetRequestsRequest,
    options?: RequestOptions,
  ): Promise<components.RequestList> {
    return unwrapAsync(requestsGetRequests(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an access request
   */
  async createRequest(
    request: components.CreateRequestInfo,
    options?: RequestOptions,
  ): Promise<operations.CreateRequestResponse> {
    return unwrapAsync(requestsCreateRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a paginated list of requests using Relay-style cursor pagination.
   */
  async getRequestsRelay(
    request: operations.GetRequestsRelayRequest,
    options?: RequestOptions,
  ): Promise<components.RequestConnection> {
    return unwrapAsync(requestsGetRequestsRelay(
      this,
      request,
      options,
    ));
  }

  /**
   * Approve an access request
   */
  async approveRequest(
    request: operations.ApproveRequestRequest,
    options?: RequestOptions,
  ): Promise<operations.ApproveRequestResponse> {
    return unwrapAsync(requestsApproveRequest(
      this,
      request,
      options,
    ));
  }
}

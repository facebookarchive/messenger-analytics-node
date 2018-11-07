/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * How are customers offered support and resolution?
 *
 * Related docs:
 * https://developers.facebook.com/docs/messenger-platform/handover-protocol
 * https://developers.facebook.com/docs/messenger-platform/identity/customer-matching
 */

const CustomerCare = {
  SupportCaseOpened: "support_case_opened",
  SupportCaseClosed: "support_case_closed",
  SupportCaseResolved: "support_case_resolved",
  HandedOverToAgent: "handed_over_to_agent",
  HandedOverToBot: "handed_over_to_bot",
  PromptedForDeflection: "prompted_for_deflection",
  InitiatedDeflection: "initiated_deflection",
  CompletedDeflection: "completed_deflection",
  NpsResponse: "nps_response",
  CsatResponse: "csat_response",
};

module.exports = CustomerCare;

/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * How do people discover your bot?
 *
 * Related docs:
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_referrals
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_optins
 */

const Acquisition = {
  EnteredThroughReferral: "entered_through_referral",
  NewConversation: "new_conversation",
  ResurrectedConversation: "resurrected_conversation",
  OptIn: "opt_in",
};

module.exports = Acquisition;

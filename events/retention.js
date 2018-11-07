/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * How do people return to your bot?
 *
 * Reference dev docs:
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_referrals
 */

const Retention = {
  ReminderSent: "reminder_message_sent",
  SubscriptionMessageSent: "subscription_message_sent",
};

module.exports = Retention;

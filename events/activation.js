/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * How do people use your bot?
 *
 * Related docs:
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messages
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_postbacks
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/message-deliveries
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/message-reads
 * https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_account_linking
 */

const Activation = {
  AccountLinked: "account_linked",
  MessageRead: "message_read",
  MessageReceived: "message_received",
  MessageSent: "message_sent",
  PostbackReceived: "postback_received",
  Subscribed: "subscribed",
  Unsubscribed: "unsubscribed",
};

module.exports = Activation;

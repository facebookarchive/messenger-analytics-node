/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * How do people transact in the bot?
 *
 * Related docs:
 * https://developers.facebook.com/docs/messenger-platform/payments#custom_webview
 */

const Conversion = {
  FilteredSearch: "filtered_search",
  BookmarkedItem: "bookmarked_item",
  ViewedItem: "viewed_item",
  PurchasedItem: "purchased_item",
};

module.exports = Conversion;

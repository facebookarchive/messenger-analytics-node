/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/*
 * Whenever possible and applicable, use these predefined app events.
 * They are utilized across the FB ecosystem and can be used
 * for attribution and campaign optimization in Ads Manager.
 * 
 * Related docs:
 * https://developers.facebook.com/docs/app-events/getting-started-app-events-web
 */

const Predefined = {
  AchievedLevel: "fb_mobile_level_achieved",
  AddedPaymentInfo: "fb_mobile_add_payment_info",
  AddedToCart: "fb_mobile_add_to_cart",
  AddedToWhishlist: "fb_mobile_add_to_wishlist",
  CompletedTutorial: "fb_mobile_tutorial_completion",
  CompletedRegistration: "fb_mobile_complete_registration",
  InitiatedCheckout: "fb_mobile_initiated_checkout",
  Purchased: "fb_mobile_purchase",
  Rated: "fb_mobile_rate",
  Searched: "fb_mobile_search",
  SpentCredit: "fb_mobile_spent_credits",
  UnlockedAchievement: "fb_mobile_achievement_unlocked",
  ViewedContent: "fb_mobile_content_view",
  ViewedPage: "fb_page_view",
};

module.exports = Predefined;

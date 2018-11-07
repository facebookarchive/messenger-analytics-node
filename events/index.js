/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/**
 * Commonly used events for Messenger bots
 * @module messenger-analytics/events
 */

const Acquisition = require("./acquisition"),
  Activation = require("./activation"),
  AR = require("./ar-camera"),
  Conversion = require("./conversion"),
  CustomerCare = require("./customer-care"),
  Predefined = require("./predefined"),
  Retention = require("./retention"),
  Sharing = require("./sharing");

module.exports = {
  Acquisition,
  Activation,
  AR,
  Conversion,
  CustomerCare,
  Predefined,
  Retention,
  Sharing,
};

/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/**
 * Facebook Analytics Event Logger
 * @module messenger-analytics/logger
 */

const EventNames = require("./events"),
  request = require("request");

class Logger {
  /**
   * Initializes the logger with an app and page ID
   * @constructor
   * @param {Object} config - Logger configuration including an {appID} and {pageID}
   */
  constructor(config) {
    if (config == null) {
      config = {};
    }
    this.appID = config.appID;
    this.pageID = config.pageID;
  }

  /**
   * Logs an event in Facebook Analytics
   * @param {string} eventName - Name of the event
   * @param {string} psid - PSID of the user who triggered the event
   * @param {Object} customParams - Object including arbitrary parameters to be stored with the event
   * @return {Promise} - A Promise to log the event
   * @public
   */
  logEvent(eventName, psid, customParams) {
    return new Promise((resolve, reject) => {
      if (!eventName || eventName.length === 0) {
        reject("No event name specified.");
      }
      if (!psid || psid.length === 0) {
        reject("No PSID specified.");
      }
      if (!this.appID || this.appID.length === 0) {
        reject("Invalid logger configuration: App ID missing.");
      }
      if (!this.pageID || this.pageID.length === 0) {
        reject("Invalid logger configuration: Page ID missing.");
      }

      let event = typeof customParams !== "undefined" ? customParams : {};
      if (Object.keys(event).length > 24) {
        // One slot is consumed by 'source' below, hence 25-1
        reject("An event cannot have more than 25 parameters. See https://developers.facebook.com/docs/app-events/faq.");
      }
      event["_eventName"] = eventName;
      event["source"] = "fba4m-node";

      request.post(
        {
          url: `https://graph.facebook.com/${this.appID}/activities`,
          form: {
            /*eslint-disable camelcase*/
            event: "CUSTOM_APP_EVENTS",
            custom_events: JSON.stringify([event]),
            advertiser_tracking_enabled: 1,
            application_tracking_enabled: 1,
            extinfo: JSON.stringify(["mb1"]),
            page_id: this.pageID,
            page_scoped_user_id: psid,
            /*eslint-enable camelcase*/
          },
          json: true,
        }, (error, response, body) => {
          if (!error && !body.error && response && response.statusCode >= 200 && response.statusCode < 300) {
            resolve(body);
          }
          reject(body.error || error || `Unknown error: ${response.statusCode}`, body);
        }
      );
    });
  }
}

module.exports = {
  EventNames,
  Logger,
};

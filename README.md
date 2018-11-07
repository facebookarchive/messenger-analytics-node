# Facebook Analytics for Messenger

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

The `messenger-analytics` module offers a simple interface to Facebook Analytics (FBA) for Messenger bots. It provides a thin integration layer as well as a collection of commonly used bot events.

The included event namespace is not meant to be exhaustive but aims to provide basic guidance around the following questions:

* Which events should my bot log?
* Which events are important for my industry / vertical / use case?
* How can I optimize my bot and increase customer satisfaction over time?

Facebook Analytics (FBA) is a people-first analytics tool for an omni-channel world. It can be used as a standalone logging solution for your Messenger bot or in addition to other analytics software. FBA is closely integrated with the Facebook ecosystem, including Ads Manager and the Facebook Pixel. This allows you to get a complete view of the full marketing funnel.

## Background
The Facebook Messenger platform automatically logs certain events for your bot, for example "message sent" and "message received". These events are logged on the app-level and can be visualized in [Facebook Analytics (FBA)](https://analytics.facebook.com). In addition to these automatic events, FBA also supports the logging of custom events which enable you to visualize user journeys and track the performance metrics of your choice.

In other words, custom events help you improve your service over time based on real interactions. Furthermore, it helps you to assess the effectiveness and [ROI](https://en.wikipedia.org/wiki/Return_on_investment) of your Messenger bot compared to other channels.

## Installing the module
```
npm install messenger-analytics --save
```

## Importing the module
```js
const FBA = require("messenger-analytics");
```

## Creating an event logger
Create a logger using the app and page ID associated with your bot.
```js
const logger = new FBA.Logger({
    appID: YOUR_APP_ID,
    pageID: YOUR_PAGE_ID,
});
```

## Logging events
The simplest form of logging an event is to provide an event name and the user identifier (PSID). You can either use an event name defined in this module or choose an arbitrary name.

**Note: Whenever possible and applicable, use the so called *predefined app events* in `FBA.EventNames.Predefined`. They are utilized across the Facebook ecosystem and can be used for attribution and campaign optimization in Ads Manager. Given the significance of these events for other products, it is advisable to treat them as first choice.**

```js
// Using a predefined event name (required if you want to report on a specific metric in Ads Manager)
logger.logEvent(
  FBA.EventNames.Predefined.Purchased,
  "USER_PSID",
).then(() => {
  console.log("Event successfully logged to FBA.");
}).catch((err) => {
  console.error(err);
});

// Using a custom event name
logger.logEvent(
  "subscribed_sports_news",
  "USER_PSID",
).then(() => {
  console.log("Event successfully logged to FBA.");
}).catch((err) => {
  console.error(err);
});
```

You may also attach additional parameters to an event. These parameters can be used for filtering, segmentation, and campaign reporting. Predefined events have specific parameter definitions which need to be followed if you want to log purchases and see the purchase value and currency in Ads Manager, as an example. The parameter definitions can be found in the [App Events API event structure](https://developers.facebook.com/docs/marketing-api/app-event-api#event_structure). On top of these standard parameters, you may also add additional custom parameters to the event. Parameters for custom events don't have to follow any naming convention.

```js
// Purchase event with 3 standard FB parameters and 1 custom parameter
logger.logEvent(
  FBA.EventNames.Predefined.Purchased,
  "USER_PSID",
  {
    _valueToSum: 87.90, // standard parameter, defaults to 1
    fb_num_items: 3, // standard parameter
    fb_currency: "EUR", // standard parameter
    custom_var: "hello_world", // custom parameter
  }
).then(() => {
  console.log("Event successfully logged to FBA.");
}).catch((err) => {
  console.error(err);
});

// Net Promoter Score (NPS) event
logger.logEvent(
  FBA.EventNames.CustomerCare.NpsResponse,
  "USER_PSID",
  {
    rating: 9,
  })
).then(() => {
  console.log("Event successfully logged to FBA.");
}).catch((err) => {
  console.error(err);
});
```

## License
Facebook Analytics for Messenger is MIT licensed, as found in the LICENSE file.

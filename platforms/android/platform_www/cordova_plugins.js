cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "launchnavigator"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "localforage"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "merges": [
        "launchnavigator"
      ]
    },
    {
      "id": "com.cmackay.plugins.googleanalytics.GoogleAnalytics",
      "file": "plugins/com.cmackay.plugins.googleanalytics/www/analytics.js",
      "pluginId": "com.cmackay.plugins.googleanalytics",
      "clobbers": [
        "navigator.analytics"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-actionsheet": "2.3.3",
    "cordova-plugin-dialogs": "2.0.2",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4",
    "com.cmackay.plugins.googleanalytics": "1.0.4"
  };
});
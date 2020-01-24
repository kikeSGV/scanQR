cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "com.phonegap.plugins.barcodescanner.barcodescanner",
      "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
      "pluginId": "com.phonegap.plugins.barcodescanner",
      "clobbers": [
        "plugins.barcodeScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-device": "2.0.3",
    "com.phonegap.plugins.barcodescanner": "0.6.1"
  };
});
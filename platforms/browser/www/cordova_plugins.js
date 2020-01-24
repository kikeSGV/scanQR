cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "pluginId": "com.phonegap.plugins.barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScannerProxy",
        "pluginId": "com.phonegap.plugins.barcodescanner",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.phonegap.plugins.barcodescanner": "5.0.1"
}
// BOTTOM OF METADATA
});
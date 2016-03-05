;(function() {
    'use strict';

    /**
     *  Helper constants for GeocoderResourceModules
     *
     *  NOTE: if you want to change this constant do this in your app.js config section
     */
    var GeocoderHelperConstant =  {
        //default handlers
        "handlers": {
            "exif": "Image/exif - Get a location from an image that was taken with a GPS enabled phone or camera",
            "yahoo": "Yahoo Placefinder - Geocodes via Yahoo Placefinder",
            "mapquest_nominatim": "MapQuest Nominatim - Geocodes via MapQuest Nominatim",
            "latlon": "Latitude / Longitude - Parse location from freeform latitude and longitude string",
            "openstreetmap_nominatim": "OpenStreetMap Nominatim - Geocodes via OpenStreetMap Nominatim",
            "wkt": "WKT - Get the geometry of a WKT string",
            "google": "Google Geocoder - Geocodes via google geocoder",
            "json": "GeoJSON - Get the geometry of a GeoJSON string, file, or URL",
            "kml": "KML - Get the geometry out of a KML string, file, or URL. Supports KMZ files upload as well.",
            "yandex": "Yandex (??????.????) - Geocodes addresses via Yandex (??????.????)",
            "gpx": "GPX - Get the geometry of a GPX string or file",
            "bing": "Bing - Geocodes via Bing"
        },
        //default output-formats
        "output_formats": {
            "wkt": "WKT",
            "ewkt": "EWKT",
            "wkb": "WKB",
            "ewkb": "EWKB",
            "json": "GeoJSON",
            "kml": "KML",
            "gpx": "GPX",
            "georss": "GeoRSS",
            "google_geocode": "GoogleGeocode",
            "geohash": "GeoHash"
        }

    };

    /**
     * Geocoder Helper Constant Modules
     */
    angular
        .module('d7-services.resources.geocoder.helperConstant', [])
        .constant("GeocoderHelperConstant", GeocoderHelperConstant);

})();

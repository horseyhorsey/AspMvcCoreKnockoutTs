var require = {
    baseUrl: ".",
    paths: {
        "tether": "lib/tether/dist/js/tether.min",
        "bootstrap": "lib/bootstrap/dist/js/bootstrap.min",
        "crossroads": "lib/crossroads/dist/crossroads.min",
        "hasher": "lib/hasher/dist/js/hasher.min",
        "jquery": "lib/jquery/dist/jquery",
        "knockout": "lib/knockout/dist/knockout",
        "knockout-projections": "lib/knockout-projections/dist/knockout-projections",
        "signals": "lib/js-signals/dist/signals.min",
        "text": "lib/requirejs-text/text"
    }
    ,
    shim: {
        "bootstrap": { deps: ["tether", "jquery"] }
    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var dataFilePath = "./src/data/saludo.json";
function debounce(fn, delay) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(void 0, args);
        }, delay);
    };
}
exports.debounce = debounce;
function saludo() {
    console.log("Hola, después de una pequeña espera");
}
var debounceSaludo = debounce(saludo, 2000);
debounceSaludo();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var saludo_controller_1 = require("../src/controllers/saludo-controller");
function saludo() {
    console.log("Hola, después de una pequeña espera");
}
var program = new commander_1.Command;
program
    .version("1.0.0")
    .description("Un saludo con delay debido a la función debounce");
program
    .command("Hola")
    .alias("hey")
    .description("Saluda para que te saluden")
    .action(function () {
    var debouncedSaludo = (0, saludo_controller_1.debounce)(saludo, 2000);
    debouncedSaludo();
});
program.parse(process.argv);

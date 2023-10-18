import { Command } from "commander";
import { debounce } from '../controllers/saludo-controller'; 

function saludo() {
  console.log("Hola, después de una pequeña espera");
}

const program = new Command;



program
  .version("1.0.0")
  .description("Un saludo con delay debido a la función debounce");

  program
  .command ("Hola")
  .alias("hey")
  .description("Saluda para que te saluden")
  .action(() => {
    const debouncedSaludo = debounce(saludo, 2000);
    debouncedSaludo();
    }
  );

  program.parse(process.argv);
import * as fs from "fs";


export function debounce(fn: Function, delay: number) {
  let timeout: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  }


function saludo() {
  console.log("Hola, después de una pequeña espera");
}

const debounceSaludo = debounce(saludo, 2000);

debounceSaludo();
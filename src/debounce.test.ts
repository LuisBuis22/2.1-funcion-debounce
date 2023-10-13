// debounce.test.ts
import { debounce } from './debounce';



describe('Creando función debounce', () => {
  it('Debería ejecutar la función debounce después del delay especificado', (done) => {
    const debouncedFunc = debounce(() => {
      done();
    }, 1000);

    debouncedFunc();
  });
});

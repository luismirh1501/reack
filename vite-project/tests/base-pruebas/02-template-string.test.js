import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en 02', () => { 
    test('getsaludo',() => {

        const name ='luismi';
        const message=getSaludo( name );
        
        expect( message ).toBe(`'Hola '${ name }`)

    });
 })
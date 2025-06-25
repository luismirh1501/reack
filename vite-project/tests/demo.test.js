
describe('pruebas en <DemoComponent>', () => { 
    test('esta prueba no debe de fallar', () => { 
        //1. inicializavion 
        const message1 ='Hola Mundo';
    
        //2. estimulo 
        const message2 = message1.trim();
    
        //3. observar el comportamiento ... esperado  
        expect( message1 ).toBe( message2 );
    
     })
 })


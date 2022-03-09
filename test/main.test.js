const { it } = require('@jest/globals');
const { hello } = require('..');

describe('Hola', () => {
    it('validación del formato de salida sea boolean', () => {
        const result = hello('hola');
        expect(result).toBe(true);
    });
});

import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci', () => {

    it('debe devolver 0 cuando n es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('debe devolver 1 cuando n es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debe devolver 1 cuando n es 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('debe devolver 2 cuando n es 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('debe devolver 5 cuando n es 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('debe lanzar un RangeError cuando n es negativo', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError);
    });

});
import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Función esPinValido', () => {

    it('debe aceptar un PIN de 4 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('debe aceptar un PIN de 6 dígitos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('debe rechazar un PIN de menos de 4 dígitos', () => {
        expect(esPinValido('123')).toBe(false);
    });

    it('debe rechazar un PIN de más de 6 dígitos', () => {
        expect(esPinValido('1234567')).toBe(false);
    });

    it('debe rechazar letras', () => {
        expect(esPinValido('12ab')).toBe(false);
    });

    it('debe rechazar valores vacíos', () => {
        expect(esPinValido('')).toBe(false);
    });

    it('debe rechazar valores null o undefined', () => {
        expect(esPinValido(null)).toBe(false);
        expect(esPinValido(undefined)).toBe(false);
    });

    it('debe rechazar PIN con todos los dígitos iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('222222')).toBe(false);
    });

});
export function esPinValido(pin) {
    return typeof pin === 'string'
        && (pin.length === 4 || pin.length === 6)
        && /^\d+$/.test(pin)
        && !/^(\d)\1+$/.test(pin);
}
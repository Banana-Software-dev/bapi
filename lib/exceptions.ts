class invalidParameter extends Error {
    constructor(parameter: unknown) {
        super(`Invalid parameter: ${parameter}.`);
    }
}

export { invalidParameter };
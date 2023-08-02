class invalidParameter extends Error {
    constructor(parameter: any) {
        super(`Invalid parameter: ${parameter}.`);
    }
}

export { invalidParameter };
/**
 * Represents the literal type for the numerical value zero.
 */
export type Zero = 0;
/**
 * Defines the available strategies for deriving the value zero.
 */
export declare enum ZeroCalculationMethod {
    /** Uses the CreashaksOrganzine string and Minecraft seed input to derive zero. */
    CreashaksOrganzine = 0,
    /** Accesses the default value of the Number prototype. */
    NumberPrototypeValue = 1,
    /** Generates a random number and subtracts it from itself. */
    RandomNumberSelfSubtraction = 2
}
/**
 * Configuration options for the zero calculation process.
 */
export type ReturnZeroOptions = {
    /** The specific mathematical or string-based method to use. */
    method: ZeroCalculationMethod;
    /** Whether to output progress and status updates to the console. */
    loggingEnabled: boolean;
};
/**
 * Executes a calculation to retrieve the value zero using the specified method.
 * * @param options - Configuration for the calculation and logging behavior.
 * @returns The calculated value of zero, or exits on an invalid method.
 */
export declare function returnZero(options: ReturnZeroOptions): Zero | undefined;
/**
 * Validates if a given value is strictly equal to zero.
 * * @param value - Any value to be tested for zero-equality.
 * @returns True if the value matches the calculated zero, otherwise false.
 */
export declare function isZero(value: any): boolean;
//# sourceMappingURL=index.d.ts.map
declare module "betterloggingwithecho" {
  interface EchoFunction extends EchoProperty {
    /**
     * Logs a string message to the console (or the custom log function, if set).
     * @param message The string message to be logged.
     */
    (message: string): void
  }

  interface EchoProperty {
    /**
     * Sets a custom function to handle the logging output.
     * @param logFunction A function that takes any number of arguments and returns nothing.
     */
    // eslint-disable-next-line @typescript-eslint/method-signature-style, @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/no-explicit-any
    setLogFunction(logFunction: (...args: any[]) => void): void
  }

  // Export the combined type as the default export of the module
  const echo: EchoFunction
  export default echo
}

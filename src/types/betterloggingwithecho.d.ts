// This declares the module 'betterloggingwithecho'
declare module "betterloggingwithecho" {
  interface EchoProperty {
    /**
     * Sets a custom function to handle the logging output.
     * @param logFunction A function that takes any number of arguments and returns nothing.
     */
    setLogFunction(logFunction: (...args: any[]) => void): void
  }

  interface EchoFunction extends EchoProperty {
    /**
     * Logs a string message to the console (or the custom log function, if set).
     * @param message The string message to be logged.
     */
    (message: string): void
  }

  // Export the combined type as the default export of the module
  const echo: EchoFunction
  export default echo
}

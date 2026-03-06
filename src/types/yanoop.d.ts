declare module "yanoop" {
  /**
   * Performs the given function if present, with the given arguments.
   * @param fn - The function to execute.
   * @param args - Arguments to pass to the function.
   * @returns The result of the function, or undefined if fn is not a function.
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/no-explicit-any
  function doop<T extends (...args: any[]) => any>(
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    fn: T | unknown,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined

  /**
   * Does nothing.
   */
  function noop(): void

  /**
   * Throws error if present.
   * @param err - The error to throw.
   */
  function throwop(err?: unknown): void

  export { doop, noop, throwop }
}
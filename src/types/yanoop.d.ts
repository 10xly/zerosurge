declare module "yanoop" {
  /**
   * Does nothing.
   */
  function noop(): void

  /**
   * Throws error if present.
   * @param err - The error to throw.
   */
  function throwop(err?: unknown): void

  /**
   * Performs the given function if present, with the given arguments.
   * @param fn - The function to execute.
   * @param args - Arguments to pass to the function.
   * @returns The result of the function, or undefined if fn is not a function.
   */
  function doop<T extends (...args: any[]) => any>(
    fn: T | unknown,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined

  export { noop, throwop, doop }
}
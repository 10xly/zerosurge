declare module "not-not" {
  /**
   * Returns a function that returns the truthiness of the original function's result.
   * @param f - The function to evaluate.
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/no-explicit-any
  function notNot<T extends (...args: any[]) => any>(f: T): (...args: Parameters<T>) => boolean

  export = notNot
}
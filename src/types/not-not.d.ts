declare module "not-not" {
  /**
   * Returns a function that returns the truthiness of the original function's result.
   * @param f - The function to evaluate.
   */
  function notNot<T extends (...args: any[]) => any>(f: T): (...args: Parameters<T>) => boolean

  export = notNot
}
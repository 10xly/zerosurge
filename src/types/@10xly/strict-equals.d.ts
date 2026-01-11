declare module "@10xly/strict-equals" {
  /**
   * Performs a strict equality comparison between two values.
   * @param a - The first value to compare.
   * @param b - The second value to compare.
   */
  function isEqual<T>(a: T, b: T): boolean

  export = isEqual
}
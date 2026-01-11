declare module "to-str" {
  /**
   * Converts a value to a string.
   * @param value - The value to convert.
   */
  function toStr<T>(value: T): string

  export = toStr
}
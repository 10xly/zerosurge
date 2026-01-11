declare module "literally" {
  /**
   * Returns a function that always returns the provided value.
   * @param value - The value to wrap in a constant function.
   */
  function constant<const T>(value: T): () => T

  export = constant
}
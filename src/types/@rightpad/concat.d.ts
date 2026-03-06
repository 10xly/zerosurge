declare module "@rightpad/concat" {
  
  /**
   * Concatenates multiple strings into a single string.
   * @param strings - The strings to join together.
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  function concat(...strings: string[]): string

  export = concat
}
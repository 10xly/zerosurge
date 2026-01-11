declare module "@rightpad/concat" {
  
  /**
   * Concatenates multiple strings into a single string.
   * @param strings - The strings to join together.
   */
  function concat(...strings: string[]): string

  export = concat
}
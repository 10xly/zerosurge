declare module "minecraft-seed-input" {
  /**
   * Generates a numerical Minecraft seed from a given input value.
   * * @param input The value to be converted into a seed (can be a string, number, etc.).
   * @returns The generated numerical seed (e.g., a 64-bit integer represented as a JavaScript number).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function seed(input: any): number

  export = seed
}

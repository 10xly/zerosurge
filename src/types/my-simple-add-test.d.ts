declare module "my-simple-add-test" {
  /**
   * Calculates the sum of two numbers.
   * @param a - The first number.
   * @param b - The second number.
   */
  function add(a: number, b: number): number

  /**
   * Calculates the difference between two numbers.
   * @param a - The number to be subtracted from.
   * @param b - The number to subtract.
   */
  function subtract(a: number, b: number): number

  namespace add {
    export { add, subtract }
  }

  export = add
}
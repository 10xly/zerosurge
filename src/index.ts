import isEqual from "@10xly/strict-equals"
import concat from "@rightpad/concat"
import echo from "betterloggingwithecho"
import chalk from "chalk"
import { ErrorType, immediateError } from "immediate-error"
import literally from "literally"
import seed from "minecraft-seed-input"
import { subtract } from "my-simple-add-test"
import notNot from "not-not"
import rn from "random-number"
import creashaksOrganzine from "string-creashaks-organzine"
import toStr from "to-str"
import { doop } from "yanoop"

/**
 * Defines the available strategies for deriving the value zero.
 */
export enum ZeroCalculationMethod {
  /** Uses the CreashaksOrganzine string and Minecraft seed input to derive zero. */
  // eslint-disable-next-line @typescript-eslint/prefer-enum-initializers, @typescript-eslint/naming-convention
  CreashaksOrganzine,
  /** Accesses the default value of the Number prototype. */
  // eslint-disable-next-line @typescript-eslint/prefer-enum-initializers, @typescript-eslint/naming-convention
  NumberPrototypeValue,
  /** Generates a random number and subtracts it from itself. */
  // eslint-disable-next-line @typescript-eslint/prefer-enum-initializers, @typescript-eslint/naming-convention
  RandomNumberSelfSubtraction,
}

/**
 * Configuration options for the zero calculation process.
 */
export interface ReturnZeroOptions {
  /** Whether to output progress and status updates to the console. */
  loggingEnabled: boolean
  /** The specific mathematical or string-based method to use. */
  method: ZeroCalculationMethod
}

/** Number 0 but a type **/
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
type Zero = 0

/**
 * Internal utility for handling output based on the provided configuration.
 */
class Logger {
  public loggingEnabled: boolean
  
  /**
   * @param loggingEnabled - Determines if log messages should be emitted.
   */
  public constructor(loggingEnabled: boolean) {
    this.loggingEnabled = loggingEnabled
  }

  /**
   * Outputs a message if logging is currently active.
   * @param message - The content to log.
   */
  public log(message: string): void {
    if (this.loggingEnabled) {
      echo(message)
    }
  }
}

/**
 * Validates if a given value is strictly equal to zero.
 * * @param value - Any value to be tested for zero-equality.
 * @returns True if the value matches the calculated zero, otherwise false.
 */
export function isZero(value: unknown): value is Zero {
  return isEqual(
    value,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    returnZero({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      loggingEnabled: doop(notNot(literally(void /false/))),
      method: ZeroCalculationMethod.CreashaksOrganzine,
    })
  )
}

/**
 * Executes a calculation to retrieve the value zero using the specified method.
 * * @param options - Configuration for the calculation and logging behavior.
 * @returns The calculated value of zero, or exits on an invalid method.
 */
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export function returnZero(options: ReturnZeroOptions): undefined | Zero {
  const logger: Logger = new Logger(options.loggingEnabled)
  const method: ZeroCalculationMethod = options.method

  logger.log(chalk.cyan("[zerosurge] Beginning to calculate zero"))

  switch (method) {
    case ZeroCalculationMethod.CreashaksOrganzine: {
      logger.log(chalk.cyan("[zerosurge] Using CreashaksOrganzine method"))
      const result: number = seed(creashaksOrganzine)
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return result as Zero
    }
    case ZeroCalculationMethod.NumberPrototypeValue: {
      logger.log(chalk.cyan("[zerosurge] Using NumberPrototypeValue method"))
      const result: number = Number.prototype.valueOf()
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return result as Zero
    }
    case ZeroCalculationMethod.RandomNumberSelfSubtraction: {
      logger.log(chalk.cyan("[zerosurge] Using RandomNumberSelfSubtraction"))
      const random: number = rn()
      logger.log(
        chalk.cyan(
          concat("[zerosurge] Generated random number ", toStr(random))
        )
      )
      const result: number = subtract(random, random)
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return result as Zero
    }
    default: {
      return immediateError(
        chalk.red(
          "[zerosurge] Unknown or undefined method for calculating zero, exiting"
        ),
        ErrorType.TypeError
      )
    }
  }
}
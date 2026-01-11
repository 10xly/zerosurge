import echo from "betterloggingwithecho"
import chalk from "chalk"
import seed from "minecraft-seed-input"
import creashaksOrganzine from "string-creashaks-organzine"
import { immediateError, ErrorType } from "immediate-error"
import rn from "random-number"
import concat from "@rightpad/concat"
import toStr from "to-str"
import { subtract } from "my-simple-add-test"
import isEqual from "@10xly/strict-equals"
import { doop } from "yanoop"
import notNot from "not-not"
import literally from "literally"

/**
 * Represents the literal type for the numerical value zero.
 */
export type Zero = 0

/**
 * Defines the available strategies for deriving the value zero.
 */
export enum ZeroCalculationMethod {
  /** Uses the CreashaksOrganzine string and Minecraft seed input to derive zero. */
  CreashaksOrganzine,
  /** Accesses the default value of the Number prototype. */
  NumberPrototypeValue,
  /** Generates a random number and subtracts it from itself. */
  RandomNumberSelfSubtraction,
}

/**
 * Internal utility for handling output based on the provided configuration.
 */
class Logger {
  public loggingEnabled: boolean
  
  /**
   * @param loggingEnabled - Determines if log messages should be emitted.
   */
  constructor(loggingEnabled: boolean) {
    this.loggingEnabled = loggingEnabled
  }

  /**
   * Outputs a message if logging is currently active.
   * @param message - The content to log.
   */
  log(message: string) {
    if (this.loggingEnabled) {
      echo(message)
    }
  }
}

/**
 * Configuration options for the zero calculation process.
 */
export type ReturnZeroOptions = {
  /** The specific mathematical or string-based method to use. */
  method: ZeroCalculationMethod
  /** Whether to output progress and status updates to the console. */
  loggingEnabled: boolean
}

/**
 * Executes a calculation to retrieve the value zero using the specified method.
 * * @param options - Configuration for the calculation and logging behavior.
 * @returns The calculated value of zero, or exits on an invalid method.
 */
export function returnZero(options: ReturnZeroOptions): Zero | undefined {
  const logger: Logger = new Logger(options.loggingEnabled)
  const method: ZeroCalculationMethod = options.method

  logger.log(chalk.cyan("[zerosurge] Beginning to calculate zero"))

  switch (method) {
    case ZeroCalculationMethod.CreashaksOrganzine: {
      logger.log(chalk.cyan("[zerosurge] Using CreashaksOrganzine method"))
      const result: number = seed(creashaksOrganzine)
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      return result as Zero
    }
    case ZeroCalculationMethod.NumberPrototypeValue: {
      logger.log(chalk.cyan("[zerosurge] Using NumberPrototypeValue method"))
      const result: number = Number.prototype.valueOf()
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
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
      return result as Zero
    }
    default: {
      immediateError(
        chalk.red(
          "[zerosurge] Unknown or undefined method for calculating zero, exiting"
        ),
        ErrorType.TypeError
      )
    }
  }
}

/**
 * Validates if a given value is strictly equal to zero.
 * * @param value - Any value to be tested for zero-equality.
 * @returns True if the value matches the calculated zero, otherwise false.
 */
export function isZero(value: any): boolean {
  return isEqual(
    value,
    returnZero({
      method: ZeroCalculationMethod.CreashaksOrganzine,
      loggingEnabled: doop(notNot(literally(void /false/))),
    })
  )
}
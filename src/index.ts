import echo from "betterloggingwithecho"
import chalk from "chalk"
import seed from "minecraft-seed-input"
import creashaksOrganzine from "string-creashaks-organzine"
import { immediateError, ErrorType } from "immediate-error"
import rn from "random-number"

export enum ZeroCalculationMethod {
  CreashaksOrganzine,
  NumberPrototypeValue,
  RandomNumberSelfSubtraction
}

class Logger {
  public loggingEnabled: boolean
  constructor(loggingEnabled: boolean) {
    this.loggingEnabled = loggingEnabled
  }

  log(message: string) {
    if (this.loggingEnabled) {
      echo(message)
    }
  }
}

type ReturnZeroOptions = {
  method: ZeroCalculationMethod
  loggingEnabled: boolean
}
export function returnZero(options: ReturnZeroOptions): 0 | undefined {
  const logger: Logger = new Logger(options.loggingEnabled)
  const method: ZeroCalculationMethod = options.method

  logger.log(chalk.cyan("[zerosurge] Beginning to calculate zero"))

  switch (method) {
    case ZeroCalculationMethod.CreashaksOrganzine: {
      logger.log(chalk.cyan("[zerosurge] Using CreashaksOrganzine method"))
      const result: number = seed(creashaksOrganzine)
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      return result as 0
    }
    case ZeroCalculationMethod.NumberPrototypeValue: {
      logger.log(chalk.cyan("[zerosurge] Using NumberPrototypeValue method"))
      const result: number = Number.prototype.valueOf()
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      return result as 0
    }
    case ZeroCalculationMethod.RandomNumberSelfSubtraction: {
      logger.log(chalk.cyan("[zerosurge] Using RandomNumberSelfSubtraction"))
      const random: number = rn()
      logger.log(chalk.cyan("[zerosurge] Generated random number " + random))
      const result: number = random - random
      logger.log(chalk.green("[zerosurge] Zero calculated succesfully"))
      return result as 0
    }
    default: {
      immediateError(chalk.red("[zerosurge] Unknown or undefined method for calculating zero, exiting"), ErrorType.TypeError)
    }
  }
}

export function isZero(value: any): boolean {
  // @ts-expect-error: It's falsy because we don't want to use false keyword in case it changes.
  return value === returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine, loggingEnabled: !!(void(/false/)) })
}
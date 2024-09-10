import { createLogger, format, transports } from "winston";

export const logger = {};

/*
export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.File({
      filename: process.env.ERROR_LOGS_PATH,
      level: "error",
    }),
    new transports.File({ filename: process.env.COMBINED_LOGS_PATH }),
  ],
});


if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}
*/

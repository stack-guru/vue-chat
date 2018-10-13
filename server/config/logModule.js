const winston = require("winston");

/** Logging Configurations */
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/info.log" })
  ]
});

module.exports = { logger };

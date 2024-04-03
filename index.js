#! /usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const {
  getTimeZoneDifferenceWithGMT,
  isTimestampFormatInMilliSeconds,
} = require("./core/util");

program
  .command("ts <dt>")
  .description(
    `Convert human-readable datetime (Local Timezone) to timestamp : Format("<dt>") example - ${chalk.greenBright.bold("Jan 1, 1970 22:30:00")}`,
  )
  .action((dt) => {
    const date = new Date(dt);
    const localTimestamp = date.getTime();
    const offset = date.getTimezoneOffset() * 60000;

    const gmtTimestamp = localTimestamp + offset; // GMT timestamp in milliseconds

    const formattedText = `
${chalk.bold.greenBright("Local Time:")}
${chalk.bold.greenBright(" - Epoch timestamp:")} ${chalk.yellowBright(localTimestamp / 1000)}
${chalk.bold.greenBright(" - Timestamp in milliseconds:")} ${chalk.yellowBright(localTimestamp)}

${chalk.bold.greenBright("GMT Time:")}
${chalk.bold.greenBright(" - Epoch timestamp (seconds):")} ${chalk.yellowBright(gmtTimestamp / 1000)}
${chalk.bold.greenBright(" - Epoch timestamp (milliseconds):")} ${chalk.yellowBright(gmtTimestamp)}
`;

    console.log(formattedText);
  });

program
  .command("dt <ts>")
  .description("Convert an timestamp to human-readable datetime")
  .action((ts) => {
    const isMilliSeconds = isTimestampFormatInMilliSeconds(ts);
    const timestamp = isMilliSeconds ? Number(ts) : Number(ts) * 1000;
    const date = new Date(timestamp);

    const formattedOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    };

    if (isMilliSeconds)
      console.log(chalk.bold.red("\nAssuming the timestamp in milliseconds"));

    console.log(chalk.bold.greenBright("\nLocal Time:"));
    console.log(
      chalk.bold.greenBright(
        ` - ${date.toLocaleString("en-US", formattedOptions)} ${getTimeZoneDifferenceWithGMT()}\n`,
      ),
    );

    console.log(chalk.bold.greenBright("GMT Time:"));
    console.log(chalk.bold.greenBright(` - ${date.toGMTString()}\n`));
  });

program.parse(process.argv);

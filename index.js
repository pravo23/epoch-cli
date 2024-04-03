#! /usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const {
  getTimeZoneDifferenceWithGMT,
  isTimestampFormatInMilliSeconds,
} = require("./core/util");

program
  .command("dt <timestamp>")
  .description("Convert an timestamp to human-readable datetime")
  .action((timestamp) => {
    const isMilliSeconds = isTimestampFormatInMilliSeconds(timestamp);
    const ts = isMilliSeconds ? Number(timestamp) : Number(timestamp) * 1000;
    const date = new Date(ts);

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

program
  .command("ts <datetime>")
  .description(
    `Convert human-readable datetime (Default Local Timezone) to timestamp:

      \t  Example Format(<datetime>)

      \t\tLocal Time:\t${chalk.greenBright.bold('"Jan 1, 1970 22:30:00"')}
      \t\tGMT Time:\t${chalk.greenBright.bold('"Jan 1, 1970 22:30:00 GMT"')}
`,
  )
  .action((datetime) => {
    const date = new Date(datetime);
    const localTimestamp = date.getTime();

    const formattedText = `
${chalk.bold.greenBright(" - Epoch timestamp:")} ${chalk.yellowBright(localTimestamp / 1000)}
${chalk.bold.greenBright(" - Timestamp in milliseconds:")} ${chalk.yellowBright(localTimestamp)}
`;

    console.log(formattedText);
  });

program.parse(process.argv);

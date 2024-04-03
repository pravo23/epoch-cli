# Epoch Converter CLI Application

This command line tool allows you to convert timestamps to human-readable datetime and vice versa. It's useful for developers working with timestamps in various scenarios.

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

Clone this repository:

```bash
git clone <repository-url>
```

Navigate to the project directory and install dependencies:

```bash
cd <project-directory>
npm install
```

## Usage

### Convert Timestamp to Human-Readable Datetime

```bash
$ epoch dt <timestamp>
```

This command converts a given timestamp to a human-readable datetime in both local and GMT timezones.

Example:

```bash
$ epoch dt 1617500000000
```

### Convert Human-Readable Datetime to Timestamp

```bash
$ epoch ts <datetime>
```

This command converts a given human-readable datetime to a timestamp, both in seconds and milliseconds.

Example:

```bash
$ epoch ts "Jan 1, 2023 12:00:00"
```

### Note:

- For the `dt` command, if the timestamp is provided in milliseconds, it's automatically detected. Otherwise, it's assumed to be in seconds.
- For the `ts` command, the datetime should be enclosed in double quotes and follow the format `"Month Day, Year Hour:Minute:Second"`, e.g., `"Jan 1, 2023 12:00:00"`.
- The tool displays both local time and GMT time for better clarity.

## Dependencies

- [commander](https://www.npmjs.com/package/commander): For creating command-line interfaces.
- [chalk](https://www.npmjs.com/package/chalk): For styling command line output.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# ATM_machine_application_ts_project03

This is a command-line interface (CLI) application developed in TypeScript that simulates basic ATM functionalities such as withdrawal, deposit, and balance inquiry.

## Features

- **Login System**: Users can log in using a predefined PIN.
- **Withdrawal**: Users can withdraw money from their account, provided they have sufficient balance.
- **Deposit**: Users can deposit money into their account.
- **Balance Inquiry**: Users can check their current account balance.
- **User-Friendly Interface**: Interactive prompts guide users through various operations.

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository:

    ```bash
    git clone https://github.com/hassanali38/ATM_Machine_Application.git
    ```
3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Follow the prompts to perform ATM operations.

## npx Command

- The npx command is:

    ```bash
    npx atm-machine-byhassanali
    ```
    
## Configuration

- You can modify the `userPin` and `accountBalance` variables in the `index.ts` file to set your desired PIN and initial account balance.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive command-line prompts.
- [chalk](https://www.npmjs.com/package/chalk): For styling the command-line output.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.


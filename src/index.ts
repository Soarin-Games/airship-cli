import figlet from 'figlet';
import chalk from 'chalk';
import { input } from '@inquirer/prompts';
import * as fs from 'fs';
import type { AccountInfo } from './AirshipTypes.js';

const airshipAccountPath = process.env.APPDATA + `../../LocalLow/Easy/Airship/account.json`;
let airshipRefreshToken: string;

async function PrintHeader(message: string) {
    const textArt = await figlet.text(message);
    const coloredText = chalk.blue(textArt);

    console.log(chalk.bold(coloredText));
};

async function PrintError(message: string) {
    const coloredText = chalk.red(message);

    console.log(chalk.bold(coloredText));
};

function FetchAirshipToken(): string {
    const accountsFile = fs.readFileSync(airshipAccountPath);
    if (!accountsFile) {
        PrintError("No Airship Installation Found!");

        process.exit(1);
    };

    const jsonData: AccountInfo = JSON.parse(accountsFile.toString("utf8"));

    return jsonData.refreshToken;
};

PrintHeader(`Airship CLI\n\n`);
airshipRefreshToken = FetchAirshipToken();
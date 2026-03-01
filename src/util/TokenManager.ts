import * as fs from 'fs';
import type { AccountInfo } from '../AirshipTypes.js';
import { PrintError } from './Styles.js';

const airshipAccountPath = process.env.APPDATA + `../../LocalLow/Easy/Airship/account.json`;

function FetchAirshipToken(): string {
    const accountsFile = fs.readFileSync(airshipAccountPath);
    if (!accountsFile) {
        PrintError("No Airship Installation Found!");

        process.exit(1);
    };

    const jsonData: AccountInfo = JSON.parse(accountsFile.toString("utf8"));

    return jsonData.refreshToken;
};

export const AirshipToken = FetchAirshipToken();
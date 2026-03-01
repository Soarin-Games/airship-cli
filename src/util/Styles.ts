import figlet from "figlet";
import chalk from "chalk";

export async function PrintHeader(message: string) {
    const textArt = await figlet.text(message);
    const coloredText = chalk.blue(textArt);

    console.log(chalk.bold(coloredText));
};

export async function PrintError(message: string) {
    const coloredText = chalk.red(message);

    console.log(chalk.bold(coloredText));
};

export function PrintTitle() {
    console.clear();
    PrintHeader(`Airship CLI\n\n`);
};
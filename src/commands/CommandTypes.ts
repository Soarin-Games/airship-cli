export type CLICommand = {
    name: string,
    description: string,
    usage: string,
    requiresToken: boolean,
    execute: () => void
};
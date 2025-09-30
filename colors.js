import chalk from 'chalk';

export function logMagnet (message){
    console.log(chalk.magentaBright(message));
}

export function logBlue (message){
    console.log(chalk.blue(message));
}

export function logGreen (message){
    console.log(chalk.green(message));
}

export function logWhite (message){
    console.log(chalk.bgWhiteBright(message));
}

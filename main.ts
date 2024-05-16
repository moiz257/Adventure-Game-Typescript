#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class player{
    name:string;
    fuel:number =100;
    constructor(name:string){
        this.name=name;
    };
    fueldecrease(){
        let fuel= this.fuel - 25
        this.fuel=fuel
    }
    fuelincrease(){
        this.fuel=100 
   }
}
class opponent{
    name:string;
    Fuel:number =100;
    constructor(name:string){
        this.name=name;
    };
    fueldecrease(){
        let fuel= this.Fuel - 25
        this.Fuel=fuel
    }
}

console.log(chalk.bold.bgCyanBright          ("            Adventure Game            ")          );


let Player=await inquirer.prompt(
    {
        name:"name",
        type:"input",
        message:chalk.cyanBright("\n ENTER PLAYER NAME "),
    }
)


let Opponent=await inquirer.prompt(
    {
        name:"select",
        type:"list",
        message:chalk.cyanBright("\n SELECT YOUR OPPONENT "),
        choices:["skeleton", "zombie", "ghost"]
    }
)

let p1 = new player(Player.name)
let o1 = new opponent(Opponent.select)

do{
    if(Opponent.select=="skeleton"){
        let ask=await inquirer.prompt(
            {
                name:"opt",
                type:"list",
                message:chalk.cyanBright("\n WHAT WOULD YOU LIKE TO DO "), 
                choices:["attack", "drink for energy", "run for your life.."]

            }
        );
        if(ask.opt == "attack"){
            let num= Math.floor(Math.random()*2)
            if(num > 0){
                p1.fueldecrease()
                console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel); 
                console.log(o1.name,chalk.magenta("fuel is"),o1.Fuel)
                if(p1.fuel <= 0){
                    console.log(chalk.redBright("you loose, better luck next time!!"));
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
            if(num <= 0){
                o1.fueldecrease()
                console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel);
                console.log(o1.name ,chalk.magenta("fuel is"),o1.Fuel)
                if(o1.Fuel <= 0){
                    console.log(chalk.greenBright("you win!!"));
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
        }
        if(ask.opt== "drink for energy"){
            p1.fuelincrease()
            console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel);
        }
        if(ask.opt== "run for your life.."){
            console.log(chalk.redBright("you loose, better luck next time!!"))
            console.log(chalk.cyanBright("\nAdventure Game"));

            process.exit()
        }
    }
    if(Opponent.select=="zombie"){
        let ask=await inquirer.prompt(
            {
                name:"opt",
                type:"list",
                message:chalk.cyanBright("\n WHAT WOULD YOU LIKE TO DO "), 
                choices:["attack", "drink for energy", "run for your life.."]

            }
        );
        if(ask.opt == "attack"){
            let num= Math.floor(Math.random()*2)
            if(num > 0){
                p1.fueldecrease()
                console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel);
                console.log(o1.Fuel,chalk.magenta("fuel is"),o1.Fuel)
                if(p1.fuel <= 0){
                    console.log(chalk.redBright("you loose, better luck next time"));
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
            if(num <= 0){
                o1.fueldecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.magenta(o1.name ,chalk.magenta("fuel is"),o1.Fuel))
                if(o1.Fuel <= 0){
                    console.log(chalk.greenBright("you win!!"));
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
        }
        if(ask.opt== "drink for energy"){
            p1.fuelincrease
            console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel);
                }
        if(ask.opt== "run for your life.."){
            console.log(chalk.redBright("you loose, better luck next time!!"))
            console.log(chalk.cyanBright("\nAdventure Game"))
            process.exit()
        }
    }
    if(Opponent.select=="ghost"){
        let ask=await inquirer.prompt(
            {
                name:"opt",
                type:"list",
                message:chalk.cyanBright("\n WHAT WOULD YOU LIKE TO DO "), 
                choices:["attack", "drink for energy", "run for your life.."]

            }
        );
        if(ask.opt == "attack"){
            let num= Math.floor(Math.random()*2)
            if(num > 0){
                p1.fueldecrease()
                console.log(p1.name,chalk.magenta( "fuel is" ),p1.fuel);
                console.log(o1.name ,chalk.magenta("fuel is"),o1.Fuel)
                if(p1.fuel <= 0){
                    console.log(chalk.redBright("you loose, better luck next time!!"))
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
            if(num <= 0){
                o1.fueldecrease()
                console.log(chalk.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(o1.name ,chalk.magenta("fuel is"),o1.Fuel)
                if(o1.Fuel <= 0){
                    console.log(chalk.redBright("you win!!"));
                    console.log(chalk.cyanBright("\nAdventure Game"));

                    process.exit()
                }
            }
        }
        if(ask.opt== "drink for energy"){
            p1.fuelincrease
            console.log(chalk.magenta("your health is"),p1.fuel );
        }
        if(ask.opt== "run for your life.."){
            console.log(chalk.redBright("you loose, better luck next time!!"))
            console.log(chalk.cyanBright("\nAdventure Game"));

            process.exit()
        }
    }
}
while(true)


    
    

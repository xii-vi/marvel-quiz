const chalk = require('chalk');
console.log(chalk.bgRed.bold("Welcome to the Marvel Quiz"))

console.log(chalk.bold("RULES ARE SIMPLE. THERE ARE FOUR OPTION TO THE EVERY QUESTION. SELECT THE RIGHT ONE."))

console.log("-----------------------------------------------");
var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please Enter your name ? ");

console.log("---------------------");

console.log(chalk.bold('Welcome, ') + chalk.red.bold(userName)  + chalk.bold(' Now Play'));

console.log("------------------------");

function game(que,ans)
{
  const chalk = require('chalk');
  var thought = readlineSync.question(que);
  var userAns = thought.toUpperCase();

if (userAns === ans)
{
  console.log (chalk.bold.green("Right !!"));
  score = score + 2 ;
}
else {

  console.log(chalk.bold.yellowBright("Wrong !!"));
}
console.log(chalk.bold.cyanBright("Current Score : " + score ));
console.log("****************************************");
}


var ques = [
{que : `What is Captain America\'s shield made out of?
1)Plastic and bits of cardboard
2)Adamantium
3)Vibranium
4)Titanium alloy
`, ans : "3"},
{que : `In Avengers: Civil War, who does Captain America fight?
1)Thor
2)Spider-man
3)Iron Man
4)Captain China
`,ans : "3"},
{que :`Where does Thor live?
1)Yggdrasil
2)Asgard
3)Ragnarok
4)In a caravan 4 miles outside of Batley`, ans : "2"},
{que : `What's Thor\'s hammer's name?
1)Melbö
2)Morgöt
3)Mjölnir 
4)Mönty`,ans : "3"},
{que : `What is Tony Stark\'s business empire called?
1)Stark Limited
2)Starkcom
3)Stark Industries
4)Stark Corp`, ans : "3"},
]

for (var i=0; i<ques.length; i++)
{

var currentQuestion = ques[i]

game(currentQuestion.que,currentQuestion.ans);
  
}

if ( score == 10 ){
  console.log(chalk.bold.underline.bgYellowBright.blackBright(" FAN boi Spotted"));
  console.log(chalk.bold.underline.cyanBright(" YAY!! PERFECT SCORE 10 on ") + chalk.bold.cyanBright(score));
}
else if ( score >= 6 )
{
  console.log(chalk.bold.underline.bgYellowBright.blackBright("Seems You Statred Watching Now"));
  console.log(chalk.bold.underline.cyanBright(" You gonna Love them. YOU SCORED ") + chalk.bold.cyanBright(score));
}
else{
  console.log(chalk.bold.underline.bgYellowBright.blackBright(" Newbie to MCU"));
  console.log(chalk.bold.underline.cyanBright("WAY to go. YOU ONLY SCORED ") + chalk.bold.cyanBright(score));
}

console.log(chalk.bgRed.bold(" Thank You For Playing."));
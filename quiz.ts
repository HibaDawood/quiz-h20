#! /usr/bin/env node

import inquirer from "inquirer";
import fetch from "node-fetch"; // Import fetch if you're using Node.js
import chalk from "chalk";

const apilink: string =
  "https://opentdb.com/api.php?amount=7&category=17&difficulty=easy&type=multiple";

let fetchData = async (data: string) => {
  let fetchQuiz: any = await fetch(data);
  let res = await fetchQuiz.json();
  return res.results; // Corrected to access results property
};

let data = await fetchData(apilink);

let startQuiz = async () => {
  let score: number = 0;
  // for user name
  let name = await inquirer.prompt({
    type: "input",
    name: "fname",
    message: "What is your name?",
  });

  for (let i = 0; i < 7; i++) {
    // Corrected loop range
    let answers = [...data[i].incorrect_answers, data[i].correct_answer];

    let ans = await inquirer.prompt({
      type: "list",
      name: "quiz",
      message: data[i].question,
      choices: answers.map((val: any) => val),
    });

    if (ans.quiz === data[i].correct_answer) {
      // Corrected comparison and increment
      ++score;
      console.log(`${chalk.bold.italic.green("correct")}`);
    } else {
      console.log(
        `Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`
      );
    }
  }
  console.log(
    `Dear ${chalk.bold.magenta(name.fname)}, your score is ${chalk.bold.red(
      score
    )} out of ${chalk.bold.magenta("7")}`
  );
};

startQuiz();

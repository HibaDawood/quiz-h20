# 🧠 CLI Trivia Quiz Application

[![npm version](https://img.shields.io/npm/v/quiz-h20.svg?style=flat-square)](https://www.npmjs.com/package/quiz-h20)
An interactive command-line quiz application built with TypeScript and Node.js. It dynamically fetches live trivia questions from an external API and tracks user performance.

---

## ✨ Features

* **Dynamic API Integration:** Fetches 7 live Science & Nature questions in real-time from the Open Trivia Database (OpenTDB).
* **Smart Option Shuffling:** Combines correct and incorrect answers dynamically into a single choice list for the user.
* **Instant Feedback:** Validates answers immediately, showing a green "correct" message or displaying the right answer in red.
* **Final Score Summary:** Provides a personalized score breakdown at the end of the quiz using the player's name.

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Dependencies:** `inquirer` (User input), `chalk` (Terminal styling), `node-fetch` (API requests)

### 🚀 How to Run & Use

Run this application directly in your terminal using `npx` (No installation required):

```bash
npx quiz-h20


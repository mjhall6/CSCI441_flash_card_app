# Techno Mastery: E-Flashcard Study Application

This project is a e-Flashcard web application tailored for Computer Science students.

## Features

* __Flashcard Viewing:__ Allows users to view electronic flashcards for efficient studying.
* __Category Selection:__ User can select categories or concept of Computer Science they would like to study.
* __Interactive Study:__ Virtually flip through flashcards to test your knowledge.


## Prerequisites
* Node.js(version 22.0.0 or higher)
* Express.js

* Internet browser
* Fork to current git repository files to your IDE

## Technologies Used
* MonogoDB Atlas
* Mongoose

## Installation

__Step 1:__
Install Node and Express.

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/en/starter/installing.html)

__Step 2:__
clone repository.
```bash
git clone https://github.com/ahmedjaff90/CSCI441_flash_card_app.git
```
__Step 3:__
Install required packages:
```bash
npm install
```
__Step 4:__ 
Set up environment variables: 

'.env' file, '.gitIgnore', Database URI, etc.

__Step 5:__
Run Node.js
```bash
npm run dev
```
```bash
node server.js
```

__Step 6:__
Install LiveServer

* [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

__Step 7:__
Run LiveServer

Press F1 or ctrl+shift+P and type Live Server: Open With Live Server to start a server or type Live Server: Stop Live Server to stop a server.

## Using the Web Application

When accessing web application the User will be greeted by the landing page and prompted to sign in if an account does not exist. 

The User can use the application navigation tools to choose which page to visit.

When viewing flashcards, a User can click the dropdown menu to choose the desired category of study. Once the front of the flashcard has been read, the User can click on the of the flashcard face to flip the flashcard and reveal the answer.


Using the Login and Sign Up pages require the User to enter their email address, password, and sometimes Name for validation.

Support requests can be sent from the contact page utilizing the User's name, email address, and a short message describing an issue.



## Authors

Ahmed Alzehhawi, Joseph Tracy, Megan Hall, Steven Smith.

## License

Group B - FHSU 2024


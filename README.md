## About
Requirements:
- nodejs
- npm


Clone this project 
```
$ git clone  https://github.com/alextuadev/front_sudoku.git
```


Move to folder api_sudoku
```
$ cd front_sudoku 
```

Install dependencies
```
$ npm install  
```


### Configuration
Configure the api url on api.js
Set this value on local or where you have the api 

Check this link https://github.com/alextuadev/api_sudoku

```
const URL = "http://localhost:8000/"; 
```


### Running development server
In the folder project run
```
$ npm start 
```

Ready, your api run on 
http://localhost:3000/


### Comments
You must fill the board and the name, you cannot retype in a cell where values have already been entered.
If you make a mistake you must restart the board

The ListSudokus menu you can see the sudokus that have been solved, a practical way to see it is to run the seeds in the API
const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

// Question 1
function printSeason (season){
    console.log(season);
}

printSeason("summer");

// Question 2
function printNumbers (firstNumber, secondNumber){
    console.log("first number: " + firstNumber);
    console.log("second number: " + secondNumber);
}

printNumbers(100, 10);

// Question 3
function addNumbers (valueOne, valueTwo, valueThree){
    const sum = valueOne + valueTwo + valueThree;
    return sum;
}

const result = addNumbers(10,20, 50);

const resultContainer = document.querySelector(".total");

resultContainer.innerHTML = result;

// Question 4
function createGreeting (greet) {
    const greeting = "Hello, my name is " + greet;
    return greeting;
}

const greetValue = createGreeting("Tom");

const greetingContainer = document.querySelector("#name");

greetingContainer.innerHTML = greetValue;

// Question 5
function printListItems (listItems){
    const itemLength = listItems.length;

    for (let i = 0; i < itemLength; i++){
        console.log(listItems[i]);
    }
}

printListItems(sports);

// Question 6
function createGames (gameList){
    let htmlResult = "";
    gameList.forEach(function(game){

        //check and assign default value
        let releaseYear = game.released;

        if (!releaseYear){
            releaseYear = "unknown";
        }

        //create html
        htmlResult += `
            <div>
                <p>${game.name}</p> 
                <p>${releaseYear}</p>
            </div>`;
    })

    return htmlResult;
}

const htmlRes = createGames(games);

const gameContainer = document.querySelector(".game-container");

gameContainer.innerHTML = htmlRes;
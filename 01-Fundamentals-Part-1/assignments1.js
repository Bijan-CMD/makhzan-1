/*
//JavaScript Fundamentals - Part 1

//values & variable
let country = "iran";
let continent = "asia";
let population = 85;
console.log(country);
console.log(continent);
console.log(population+" "+"millions");

//data type
let isIsland = false;
let language;
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//let , const & var
let language = "persian";
const country = "iran";
const continent = "asia";
const isIsland = false;
isIsland = true;

//basic operators
const country = "iran";
const continent = "asia";
const language = "persian";
let population = 85;
console.log(population/2);
population++;
console.log(population);
const finlnd = 6;
console.log(population > finlnd);
console.log(population < 33);
const description = country+' is in '+continent+', and its '+population+' million people speak '+language +'.';
console.log(description);

//strings and template literals
const country = "iran";
const continent = "asia";
const language = "persian";
let population = 85;
console.log(`${country} is in ${continent}, and its ${population} million people speak ${language} .`);

//taking decision: if/else statement
const country = "iran";
let population = 85;
if (population > 133){
    console.log(`${country}'s population above average`);
}else{
    console.log(`${country}'s population is ${133-population} below average`);
};

//Type Conversion and Coercion
console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'< 57);
console.log(5+6+'4'+9-4-2);

//Equality Operators: == vs. ===
const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbors === 1){
    console.log('Only 1 border!');
}else if (numNeighbors > 1){
    console.log('More than 1 border');
}else{
    console.log('No borders');
};

// Logical Operators
const hasDriversLicense = true ;
const hasGoodVision = true ;
const isTired = false ;
if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('She is able to drive.');
}else{
    console.log('Someone else should drive.');
};
//
const country = "canada";
const language = "english";
const population = 40;
const isIsland = false;
if (language==='english' && population<50 && !isIsland){
    console.log(`you should live in ${country}`);
}else{
    console.log(`${country} does not meet your criteria`);
};
//
const country = "iran";
const language = "persian";
let population = 85;
const island = false ;
if (language==='english' && population<50 && !island){
    console.log(`you should live in ${country}`);
}else{
    console.log(`${country} does not meet your criteria`);
};

//Example----with The switch Statement
const day = prompt('please choose a day in the week.');
switch (day) {
    case "monday":
        console.log('plan course structure');
        break;
    case "tuesday":
        console.log('perper theory videos');
        break;
    case "wednesday":
    case "thursday":
        console.log('write code examples');
        break;
    case "friday":
        console.log('record videos');
        break;
    case "saturday":
    case "sunday":
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
};

//Example----with The if/else Statement
const day = prompt('please choose a day in the week.');
if (day === 'monday') {
    console.log('plan course structure');
}else if (day === 'tuesday'){
    console.log('perper theory videos');
}else if (day === 'wednesday' || day === 'thursday'){
    console.log('write code examples');
}else if (day === 'friday'){
    console.log('record videos');
}else if (day === 'saturday' || day === 'sunday'){
    console.log('enjoy the weekend');
}else{
    console.log('not a valid day');
};

//
const language = prompt('please choose a language.');
switch (language) {
    case 'chinies':
    case 'mandarin':
      console.log('most member of native speakers.');
    break;
    case 'spanish':
      console.log('2nd place in number of native speakers.');
    break;
    case 'english':
      console.log('3nd place in number of native speakers.');
    break;
    case 'hindi':
      console.log('4nd place in number of native speakers.');
    break;
    case 'arabic':
      console.log('5nd place in most spoken language.');
    break;
    default:
      console.log('great language too.');
};

//The Conditional (Ternary) Operator
const age = 23;
let drink;
if (age>=20){
    drink='wine';
}else{
    drink='water';
}
console.log(`i want to drink ${drink}`);

//
const age = 15;
console.log(`i want to drink ${age>=20 ? 'wine': 'water'}`);

//
const country = "iran";
let population = 85;
console.log(`${country}'s population is ${population>33 ? 'above':'below'} average`);
*/
//end of JavaScript Fundamentals - Part 1

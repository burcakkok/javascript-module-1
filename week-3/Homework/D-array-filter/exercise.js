/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops", ["Peter", "John"]];

function isArray(rawElement) {
    return rawElement instanceof Array;
}

function hasTwoElements(rawElement) {
    return rawElement.length === 2;
}

function isNumber(element) {
    return !isNaN(element);
}

function allElementsAreNumbers(rawElement) {
    return rawElement.every(isNumber);
}

function isPair(rawElement) {
    return isArray(rawElement) && hasTwoElements(rawElement) && allElementsAreNumbers(rawElement);
}

function isPair(rawElement) {
    return rawElement instanceof Array && rawElement.length === 2 && rawElement.every(element => !isNaN(element));
}

var pairsByIndex = pairsByIndexRaw.filter(isPair); // [[0, 3], [1, 2], [2, 1]]

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
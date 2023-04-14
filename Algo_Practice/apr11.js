var smallerStringA1 = "abcd";
var smallerStringB1 = "efg";
var expected = "efgabcd";

var smallerStringA2 = "sunnyside up eggs";
var smallerStringB2 = "biscuits and gravy";
var expected = "sunnyside up eggsbiscuits and gravy";

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(string1, string2) {
  // Replace this comment with the code needed to make this function work.
  //   var length1 = string1.length;
  //   var length2 = string2.length;
  //   if (length1 <= length2) {
  //     return string1 + string2;
  //   } else {
  //     return string2 + string1;
  //   }

  return string1.length >= string2.length
    ? string1 + string2
    : string2 + string1;
}

console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2));

var stringToRepeat1 = "Birria Tacos";
var numberToRepeat1 = 5;
var repeatedExpected =
  "Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos";

var stringToRepeat2 = "margherita pizza";
var numberToRepeat2 = 2;
var repeatedExpected = "margherita pizzamargherita pizza";

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str, n) {}

var wordArray = [
  "shawn",
  "jim",
  "tyler",
  "heidi",
  "john",
  "alfredo",
  "michael",
];

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength() {}

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord() {}

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum() {}

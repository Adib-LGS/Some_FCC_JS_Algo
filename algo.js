/**------------------------------------------------ */
/**------------Some Algo test FreeCOdeCamp JS--------------- */
/**------------------------------------------------ */


//Sum All numbers in a Range [1,4] -- Have to return array[1,2,3,4]
function sumAll(arr) {
    //Using spread ... + math.min/max remove array to find min or max num in arr
    const first = Math.min(...arr);
    const last = Math.max(...arr);

    let total = 0;

    for(let i = first; i <= last; i++){
        total += i;
    }
    return total;
}

sumAll([1,4]);

/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

//Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
   //Find the different Item between this two array Using filter && includes func
   const diffArr1 = arr1.filter(item => !arr2.includes(item));
   const diffArr2 = arr2.filter(item => !arr1.includes(item));


   //Concat function to concat the two arrays
   return diffArr1.concat(diffArr2);
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {

    //Destroy the arguments Have to transfor arguments in array usign slice func
    const destroyArgs = Array.from(arguments).slice(1);

    //Find the different Item between this two array Using filter && includes func
    const arrayCleaned = arr.filter((item) => !destroyArgs.includes(item));


    return arrayCleaned;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

/*Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.*/
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
  //Iterate All items in collection
    collection.forEach((item) => {
        let isCorect = true;
  //Verify the properties of object
        for(let properties in source){
          if(!item.hasOwnProperty(properties) || item[properties] != source[properties]){
            isCorect = false;
          }
        }
        if(isCorect){
          arr.push(item);
        }
    });
    // Only change code above this line
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/**Same Wherefore art thou but Solution 2 */

function whatIsInAName(collection, source) {
  //Iterate All items in collection
    return collection.filter(item => {
        let isCorect = true;
  //Verify the properties of object
        for(let properties in source){
          if(!item.hasOwnProperty(properties) || item[properties] != source[properties]){
            isCorect = false;
          }
        }
        return isCorect;
    });
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  

/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
    //Chaining some REGEX to add '-' and remove space && add '-' between lower followe by Upper case
    return str.replace(/ |_/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
  
spinalCase('This Is Spinal Tap');

/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */



/**Perform a search and replace on the sentence using the arguments provided and return the new sentence.
-First argument is the sentence to perform the search and replace on.
-Second argument is the word that you will be replacing (before).
-Third argument is what you will be replacing the second argument with (after). */

function myReplace(str, before, after) {
    //REGEX To Verify if before start by UpperCase
    if(/^[A-Z]/.test(before)) {
        //If yes transform after's first letter in Uppercase
        //Get first Lettre and transform it in UpperCase
        //Took all the letter after the first One
        after = after[0].toUpperCase() + after.slice(1);
    }
    
    //Replace before by after
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

/**DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped ino one encapsulating array. */
function pairElement(str) {
    const keyVal = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'T': 'A,'
    };
    //Array.from == Transform str in array, map will transform each key in array including the value in keyValue
    const pairs = Array.from(str).map(key => {
        return [key, keyVal[key]];
    });
    
    return pairs;
}
  
pairElement("GCG");


/**------------------------------------------------ */
/**------------------------------------------------ */
/**------------------------------------------------ */

/** Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    //find the first letter in alphabet
    const start = alphabets.indexOf(str[0]);
    //find the last letter in alphabet
    const end = alphabets.indexOf(str[str.length -1]);

    let next = alphabets.substring(start, end);

    //Convert string in array with Array.from
    const array = Array.from(next);

    //Find the missing letter in array
    const missing = array.find(letter => {
        if(!str.includes(letter)){
            return true;
        }
    });


    return missing;
  }
  
  fearNotLetter("abce");
  
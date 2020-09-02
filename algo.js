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



//Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
   //Find the different Item between this two array Using filter && includes func
   const diffArr1 = arr1.filter(item => !arr2.includes(item));
   const diffArr2 = arr2.filter(item => !arr1.includes(item));


   //Concat function to concat the two arrays
   return diffArr1.concat(diffArr2);
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

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
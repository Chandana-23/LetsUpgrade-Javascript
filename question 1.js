// 1. Program to search for a particular character in a string
let name = "Javascript";
let char = 's';
if (name.indexOf('p')>=0){
    console.log("Search is successful");
}
else{
    console.log("Search is unsuccessful");
}

// 2 . Program to convert minutes to seconds
let minutes = 15;
let seconds = minutes * 60;
console.log(minutes+" Minutes in seconds = "+seconds+" seconds");

// 3. Program to search for an element in an array of strings
let arr = ["apple","bat","cat","dog","eagle","fox","ginger"];
let element = "apple";
for (let i=0;i<arr.length;i++)
{
    if (arr[i] == element){
        console.log("found");
    }
}

// 4. Program to display only elements containing 'a' in them from an array
let arr1 = ["ammey","aman","balu","firod","ameer","rahul","leo"];
for (let i=0;i<arr1.length;i++){
    if (arr1[i].indexOf('a')>=0){
        console.log(arr1[i]);
    }
}

// 5. Print an array in reverse order
let arr2 = [1,2,3,4,5,6,7,8,9];
let rev_arr = [];
for (let i=arr2.length-1;i>=0;i--){
    //console.log(arr2[i]);
    rev_arr.push(arr2[i]);
}
console.log(rev_arr);

//find 
//iterates throu an array
//runs a callback on each value in the array
//if the callback returns true at any point, return the value in the array that we're iterating over
//otherwise return undefined

const scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    55,
    59,
    69,
    73,
    73,
    75,
    79,
    83,
    88,
    91,
    93,
    96
];

scores.find(function(score){
   return score > 75;
});
// will return 79 but only 79 becuase it is the first truthy callback greater than 75

scores.find( function(score){
    return score !== 0 && score % 2 === 0;
})
// this will return 88 as it is the first even number that is not 0

const evenScores = scores.filter(function(score) {
    return score !== 0 && score % 2 === 0;
});
//this will return 88, 96 remember, filter returns all of that paramater find returns the first that is truthy in that paramater

//findIndex
//interates through an Array
//runs a callback on each value in the array
//if the callback returns true for any single value, return the index at which that value is found

const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0;
});
//returns scores[16] as in the index 16 of scores which would equal 88

function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr) === true) return arr[i]
    }
}

myFind(scores, function(score){
    return score > 91
})
//this will return 93 as it is the closest found greater than 91


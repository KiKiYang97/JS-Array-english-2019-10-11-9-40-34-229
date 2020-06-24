// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach(function (item, index, array) {
	array[index] = item * 2;
});
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var str = "'";
colors.forEach(function (item, index, array) {
	str += item;
	if(index<(array.length-1)){
		str += ' ';
	}
});
str += "'";
console.log(str);
// case 2 output: 'Red+Green+White+Black'
var str = "'";
colors.forEach(function (item, index, array) {
	str += item;
	if(index<(array.length-1)){
		str += '+';
	}
});
str += "'";
console.log(str);
// case 3 output: 'Red,Green,White,Black'
var str = "'";
colors.forEach(function (item, index, array) {
	str += item;
	if(index<(array.length-1)){
		str += ',';
	}
});
str += "'";
console.log(str);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(val1,val2){
      if(val1 < val2){
         return 1;
      }
      else if(val1 > val2){
         return -1;
      }
      else{
         return 0;   
      }
}
a.sort(compare)  
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr){
	var obj = {};
	var most;
	var max = 1;
	arr.join('').replace(/(\w)/g,function(word,p){
						 obj[p[0]]?obj[p[0]]+=1:obj[p[0]] = 1;
						 if(obj[p[0]]>max){
		most = p[0];
		max++;
	}
 });
	return most;
}
console.log(findMost(a));

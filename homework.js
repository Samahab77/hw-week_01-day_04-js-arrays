Q1:
Create a function that will get the sum of the numbers between 1 and n and return the answer 
summation(5) // should return 15 because 1+2+3+4+5=15
A1:
const sum=function(n){
    var total = 0
        for (let i=1;i<=n;i++){
        total+=i;
    }
      return total;
    }
    sum(5);
    15
    //////////////////////////////

Q2:
Create a program to get the sum of all the even numbers in a group 
summationEven(5) // should return 6 because 2+4=6

const sum=function(n){
    var total = 0
        for (let i=1;i<=n;i++){
      if(i%2===0){
        total+=i;
      }
    }
      return total; 
    }
    /////////////////////////////////
Q3:
Create a function to get the average of a group of numbers 
avg([8, 2, 2, 4]) // should return 4

const avg0 =function(toGetAvg){

    /// first we need to get the sum of arr
    let total=0;
    for( let i=0;i<toGetAvg.length;i++){
        total+=toGetAvg[i];}
    /// CAlculat avg
    let avg1= total/toGetAvg.length;
    console.log("the avg = "+avg1);}
//////////////////////////////////
Q4:
Create a function to reverse the letters in a word 
reverse("caterpillar") // should return "rallipretac"

const rever=function(oo){
   var i= oo.reverse()
}
///////////////////////\

Q5:
Create a function that takes an array of words and combines them with a dash 
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"

const arr=function(a){

    var c = a.join(" - ");
     console.log(c);
    }

    ////////////////////////////////

Q6:

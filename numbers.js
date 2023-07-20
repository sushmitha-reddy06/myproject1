//even or odd
let i, a = 20;

let remainder = (a % 2);

if (remainder === 0){
    console.log(a+ "is even");
}else{
    console.log(a+ "is odd");
};

console.log();

//even numbers upto 20
console.log("Even numbers");

for(i=1; i<=20; i++)

{
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log();

//odd numbers
console.log("Odd numbers");

for(let i=0; i<=20; i++){
    if(i%2 !==0)
    console.log(i);
}

console.log();

//list of prime numbers
console.log("Prime numbers");

let j, count=0;
for(j=2;j<=20;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
}

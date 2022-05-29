// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

//1.
function myFunction(a, n)
{
   return a[n - 1];
}

//2.
function myFunction(a, n)
{
let string = a;
let index = n-1;   
return string.charAt(index);
}
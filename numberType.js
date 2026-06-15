function checknumber (number) {
  if (number > 0)
     {
    return " Postive";
  } else 
    if (number < 0) 
      {
    return "Negative";
  }
   else 
    {
    return " Neutral";
  }
}
let number= 10;
console.log("The number",number,"is",checknumber(number));
number =-2;
console.log("The number",number, "is",checknumber(number));

number =0;
console.log("The number",number,"is",checknumber(number));



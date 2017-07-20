function main(){
  let i = 4;
  let i = 4.0;
  let s = "HackerRank "
  // Declare second integer, double, and String variables.
  let i2;
  let d2;
  let s2;
  // Read and save an integer, double, and String to your variables.
  i2 = parseInt(readLine());
  d2 = parseFloat(readLine());
  s2 = readLine().toString();
  // Print the sum of both integer variables on a new line.
  console.log(i + i2);
  // Print the sum of the double variables on a new line.
  console.log((d + d2).toFixed(1));
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + s2);
 }

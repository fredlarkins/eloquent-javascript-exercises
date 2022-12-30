function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
      sign = "-";
      n = -n;
    }
    do {
      result = String(n % base) + result; // keeps on concatting rather than summing
      n /= base;
      console.log(n);
    } while (n > 0);
    return sign + result;
  }
  console.log(numberToString(13, 10));
  // → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…

  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
  }
  
  function look() {
    if (promptDirection("Which way?") == "L") {
      return "a house";
    } else {
      return "two angry bears";
    }
  }
  
  try {
    console.log("You see", look());
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
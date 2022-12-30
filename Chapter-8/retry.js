class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) { // make sure we are only trying to handle the MultiplicatorUnitFailure
    try {
        return primitiveMultiply(a, b);
    } catch (error) {
        console.log(error.message);
        return reliableMultiply(a, b);
    }
}

console.log(reliableMultiply(8, 8));
// → 64
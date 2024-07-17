function sum(a, b) {
   if (typeof a != "number" || typeof b != "number") {
      throw new TypeError("sum() solo acepta números");
   }
   return a + b;
}

module.exports = sum;

function bigNumberSum(a, b) {
  const aArr = a.split("").reverse();
  const bArr = b.split("").reverse();

  let maxLength = Math.max(aArr.length, bArr.length);
  let result = [];
  let flag = 0;

  for (let i = 0; i < maxLength; i++) {
    let numberA = aArr[i] ? parseInt(aArr[i]) : 0;
    let numberB = bArr[i] ? parseInt(bArr[i]) : 0;

    let sum = numberA + numberB + flag;
    if (sum > 9) {
      flag = 1;
      sum -= 10;
    } else {
      flag = 0;
    }
    result[i] = sum;
  }

  return result.reverse().join("");
}

/*
  -------Luhn's Algorithm---------
  Luhn's algorithm is a checksum algorithm used for number verification
  Often used with validating credit card numbers and other things
    1. convert string to num arr
    2. Weight each int, starting from the right, alternating =* 1 or *= 2
    3. For each digit greater than 9, subtract 9
    4. Sum all digits
    5. return if final digit of sum == 0
 */

export default function luhnsCheck(creditCardNum: string): boolean {
  console.log(`creditCardNum: ${creditCardNum}`);
  const cardNumber: string[] = creditCardNum.split("").reverse();
  let digits: number[] = [];

  cardNumber.forEach((item: string) => {
    digits.push(parseInt(item));
  });

  const digitalRoot = (n: number) => {
    return ((n - 1) % 9) + 1;
  };

  digits = digits.map((currentElement: number, index: number) => {
    if (index % 2 != 0) {
      currentElement *= 2;
      if (currentElement > 9) {
        currentElement -= 9; // subtract 9 if digit is greater than 9
      }
    }
    return currentElement;
  });

  const sum = digits.reduce((a, b) => a + b, 0);

  console.log(`sum: ${sum}`);

  return sum % 10 == 0;
}

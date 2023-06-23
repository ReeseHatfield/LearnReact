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

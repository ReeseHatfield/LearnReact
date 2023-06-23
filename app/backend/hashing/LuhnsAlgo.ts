export default function luhnsCheck(creditCardNum: string): boolean{
    console.log(`creditCardNum: ${creditCardNum}`)
    const cardNumber: string[] = creditCardNum.split('')
    let digits: number[] = [];

    cardNumber.map((item: string) =>{
        digits.push(parseInt(item))
    })


    const digitalRoot = (n: number) =>{
        return (n - 1) % 9 + 1;
        //O(1) digital root is crazy
    }

    digits.map((currentElement: number, index: number) => {
        let weight: number = 1
        if(index % 2 == 0){
            weight = 2
        }

        currentElement *= weight
        currentElement = digitalRoot(currentElement);
    })

    const sum = digits.reduce((a, b) => a + b, 0);

    return sum % 10 == 0;
}


export default function hashValue(toHash: string, publicKey: string){
    const hexPassword: string = encodeStringToHex(toHash);
    const privateKey: string = hexPassword;

    const mergedKeys: string = mergeKeys(publicKey, privateKey)

    const numBitsToShift: number = parseInt(mergedKeys.charAt(0), 16)
    const finalHashedValue: string = circularShiftNBits(mergedKeys, numBitsToShift)

    return finalHashedValue

}


function encodeStringToHex(s: string): string {
    let hex: string = '';
    for (let i: number = 0; i < s.length; i++) {
        hex += s.charCodeAt(i).toString(16);
    }
    // truncate or pad string to 16 characters
    hex = (hex.length > 16) ? hex.substring(0, 16) : hex.padEnd(16, '0');
    return hex;
}


function mergeKeys(publicKey: string, privateKey: string): string{

    const isEven = (n: number) => n % 2 == 0

    let chunks: string[] = []
    let currentChunk: string = '';

    for(let i = 0; i < privateKey.length; i ++){

        const currentDigit: number = parseInt(privateKey.charAt(i), 16);

        currentChunk += currentDigit;

        if(isEven(currentDigit)){
            chunks.push(currentChunk);
            currentChunk = '';
        }

    }

    const mergedKeys: string = distributeStrings(publicKey, chunks)

    const finalHash: string = circularShiftNBits(mergedKeys, parseInt(mergedKeys.charAt(0)))

    console.log(finalHash)

    return finalHash

}

function distributeStrings(publicKey: string, chunks: string[]) {
    if (!chunks.length) return publicKey;

    let interval: number = Math.floor(publicKey.length / (chunks.length + 1));
    let result: string = '';
    let arrIndex: number = 0;

    for(let i: number = 0; i <= publicKey.length; i += interval){
        // Add the string portion
        result += publicKey.substring(i, i + interval);

        // assuming there are still array elements to distribute, add one
        // to make distribution evn
        if(arrIndex < chunks.length){
            result += chunks[arrIndex];
            arrIndex++;
        }
    }


    if (publicKey.length % interval !== 0) {
        result += publicKey.substring(interval * (chunks.length + 1));
    }

    return result;
}

function circularShiftNBits(hashToShift: string, numBitsToShift: number): string{
    let len: number = hashToShift.length;

    numBitsToShift = numBitsToShift % len;
    return hashToShift.substring(numBitsToShift) + hashToShift.substring(0, numBitsToShift);
}




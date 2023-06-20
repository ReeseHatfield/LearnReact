

export default function hashValue(toHash: string, publicKey: string){
    const hexPassword: string = encodeStringToHex(toHash);
    const privateKey: string = hexPassword;
    console.log(`Private Key: ${privateKey}, Public Key ${publicKey}`);

    const mergedKeys: string = mergeKeys(publicKey, privateKey)

    const numBitsToShift: number = parseInt(mergedKeys.charAt(0), 16)
    const finalHashedValue: string = circularShiftNBits(mergedKeys, numBitsToShift)

    return finalHashedValue

}


function encodeStringToHex(s: string): string {
    let hex = '';
    for (let i = 0; i < s.length; i++) {
        hex += s.charCodeAt(i).toString(16);
    }
    // truncate or pad string to 16 characters
    hex = (hex.length > 16) ? hex.substring(0, 16) : hex.padEnd(16, '0');
    return hex;
}


function mergeKeys(publicKey: string, privateKey: string): string{
    //todo

    return '';
}

function circularShiftNBits(hashToShift: string, numBitsToShift): string{
    //todo
    return '';
}




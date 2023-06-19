

export default function hashValue(toHash: string, publicKey: string){
    const hexPassword: string = encodeStringToHex(toHash);
    const privateKey: string = hexPassword;
    console.log(`Private Key: ${privateKey}, Public Key ${publicKey}`);

    return ''
}


function encodeStringToHex(s: string): string {
    let hex = '';
    for (let i = 0; i < s.length; i++) {
        hex += s.charCodeAt(i).toString(16);
    }
    // Truncate or pad to 16 characters
    hex = (hex.length > 16) ? hex.substring(0, 16) : hex.padEnd(16, '0');
    return hex;
}


function mergeKeys(publicKey: string, privateKey: string): string{

    return '';
}

function circularShiftNBits(hashToShift: string, numBitsToShift): string{
    return '';
}




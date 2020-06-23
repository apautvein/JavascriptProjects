function telephoneCheck(str) {
    return checkDigits(str) && checkCharacters(str)
}


function checkCharacters(str) {
    if (str.includes(")") && !str.includes('(')) {
        return false;
    } else if (/^[(]/.test(str) && /[)]$/.test(str)) {
        return false;
    } else if (/^[(]/.test(str) && !str.includes(')')) {
        return false;
    } else if (/^[-]/.test(str)) {
        return false;
    } else if (str.includes('?')) {
        return false;
    } return true;
}


function checkDigits(str) {

    const digits = str.replace(/\D/g, "")

    if (digits.length === 11) {
        return digits[0] === '1'
    } else if (digits.length === 10) {
        return true;
    } return false;
}

telephoneCheck("(6054756961)")
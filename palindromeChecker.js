function palindrome(str) {
    const allLowerCase = str.toLowerCase()
    const rejectNonAlphanumeric = allLowerCase.match(/[a-z]*\d*/g)
        .join("");

    const reversed = rejectNonAlphanumeric.split("")
        .reverse()
        .join("");

    if (rejectNonAlphanumeric === reversed) {
        return true
    } return false;

}



palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("nope"); 
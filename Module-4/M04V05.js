// Problem statement

// A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forwards.

// Your task is to write a Javascript function, is Palindrome(str), that takes a string str
// And return true is the string is a palindrome, and false otherwise.

// The function must be work for complex phrases, not just single words. To do this, your function must:
//      Be case-sensitive (i.e., 'R' is treated the same as 'r').
//      Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.)

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

//* Space Complexity = O(n)
//* Time Complexity = O(n)
const isPalindrome = (str) => {

    const startTime = performance.now()

    //* Space Complexity = O(n)
    //* Time Complexity = O(n)
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    console.log(normalized);

    //* Space Complexity = O(n)
    //* Time Complexity = O(n)
    const reversed = normalized.split("").reverse().join("") //* It's copy
    console.log(reversed);

    if (reversed === normalized) {
        return true
    }

    const endTime = performance.now()

    console.log("Time Complexity: ", endTime - startTime);
    return false
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("Level"));


//* Space Complexity = O(n)
//* Time Complexity = O(n)
const isPalindromeTwoPointer = (str) => {
    //* Space Complexity = O(n)
    //* Time Complexity = O(n)
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    let left = 0;
    let right = normalized.length - 1

    console.log("Previous left: ", left);
    console.log("Previous right: ", right);

    //* Time Complexity = O(m/2) / O(n)
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false
        }
        console.log(normalized[left]);
        console.log(normalized[right]);

        left++
        right--

        console.log("left: ", left);
        console.log("right: ", right);
    }

    return true
}

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));
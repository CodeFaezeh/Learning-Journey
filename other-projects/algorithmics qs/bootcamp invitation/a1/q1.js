"use stric";
const findLongestSubstring = (s) => {
  let maxLength = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let seenChars = new Set();

    // A counter for the number of vowels in the current substring.
    let vowelCount = 0;

    // Second loop: This loop expands the substring from the starting point 'i' towards the end of the string.
    // 'j' extends the substring one character at a time.
    for (let j = i; j < n; j++) {
      const char = s[j];

      // Condition 1: Check for unique characters.
      // If the current character (char) is already in our seenChars set,
      // it means the substring is no longer unique. So, we stop extending this
      // substring (break the inner loop) and move to the next starting point (i + 1).
      if (seenChars.has(char)) {
        break;
      }

      // If the character is unique, add it to our set of seen characters.
      seenChars.add(char);

      // Check if the current character is a vowel.
      if (vowels.has(char)) {
        vowelCount++;
      }

      // Conditions 2 & 3: Check for an even and non-zero number of vowels.
      // If the vowel count is even (the remainder when divided by 2 is 0)
      // and there's at least one vowel (count > 0)...
      if (vowelCount > 0 && vowelCount % 2 === 0) {
        // ...then the current substring is valid.
        // We calculate its length.
        const currentLength = j - i + 1;
        // We compare it with the maximum length found so far and update if it's longer.
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  }

  // Finally, after checking all possible substrings, return the maximum length found.
  return maxLength;
};

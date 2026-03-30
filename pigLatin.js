// Pig Latin Translator - Simple version for beginners
// This program translates English text to Pig Latin.
// It takes a phrase as a command line argument and converts each word
// according to Pig Latin rules.
//
// Rules:
// - If word starts with vowel: add "way" to the end
// - If word starts with consonant: move first consonant(s) to end + "ay"
// - If word starts with 1 consonant: move 1 consonant to end + "ay"
// - If word starts with 2+ consonants: move 2 consonants to end + "ay"
// - Preserves capitalization of the first letter
//
// Usage: node pigLatin.js "Hello World"
// Output: Ellohay Orldway

// Function to check if a letter is a vowel (case-insensitive)
function isVowel(letter) {
  // Step 1: Check if the letter is in the string of vowels (both cases)
  return 'aeiouAEIOU'.includes(letter);
}

// Function to translate a single word to Pig Latin
function translateWord(word) {
  // Step 1: Handle empty words
  if (!word) return word;

  // Step 2: Check if the first letter is uppercase to preserve capitalization
  const firstLetterIsUppercase = word[0] === word[0].toUpperCase();
  // Step 3: Convert the word to lowercase for processing
  const lowerWord = word.toLowerCase();

  let translatedWord;

  // Step 4: Check if the word starts with a vowel
  if (isVowel(lowerWord[0])) {
    // Step 5a: If starts with vowel, just add "way"
    translatedWord = word + 'way';
  } else {
    // Step 5b: If starts with consonant, find the first vowel position
    let firstVowelPosition = -1;

    for (let i = 0; i < lowerWord.length; i++) {
      if (isVowel(lowerWord[i])) {
        firstVowelPosition = i;
        break;
      }
    }

    // Step 6: If no vowel found, return the original word
    if (firstVowelPosition === -1) {
      return word;
    }

    // Step 7: Apply Pig Latin rules based on vowel position
    if (firstVowelPosition === 1) {
      // Step 7a: One consonant: move it to end + "ay"
      const firstConsonant = lowerWord[0];
      const restOfWord = word.slice(1);
      translatedWord = restOfWord + firstConsonant + 'ay';
    } else if (firstVowelPosition >= 2) {
      // Step 7b: Two or more consonants: move first two to end + "ay"
      const firstTwoConsonants = lowerWord.slice(0, 2);
      const restOfWord = word.slice(2);
      translatedWord = restOfWord + firstTwoConsonants + 'ay';
    } else {
      // Step 7c: Fallback (shouldn't happen)
      translatedWord = word;
    }
  }

  // Step 8: Restore capitalization if the original word started with uppercase
  if (firstLetterIsUppercase) {
    return translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
  }

  // Step 9: Return the translated word
  return translatedWord;
}

function translatePhrase(phrase) {
  const words = phrase.split(' ');
  const translatedWords = words.map(word => translateWord(word));
  return translatedWords.join(' ');
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Please provide a phrase to translate to Pig Latin');
    console.log('Example: node pigLatin.js "Hello World"');
    return;
  }

  const inputText = args.join(' ');
  const translatedText = translatePhrase(inputText);
  console.log(translatedText);
}

main();

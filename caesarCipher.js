// Caesar Cipher Encryption - Simple version for beginners
// This program encrypts text using the Caesar cipher method.
// It takes a message and a shift number as command line arguments,
// then shifts each letter by the specified number of positions.
//
// Rules:
// - Only shifts letters (A-Z, a-z), leaves other characters unchanged
// - Wraps around the alphabet (Z becomes A, z becomes a)
// - Preserves case (uppercase stays uppercase, lowercase stays lowercase)
// - Shift can be positive (forward) or negative (backward)
//
// Usage: node caesarCipher.js "Hello World" 3
// Output: Khoor Zruog

// Function to encrypt text using Caesar cipher
function caesarCipher(text, shift) {
  // Step 1: Parse the shift value to ensure it's a number
  const shiftNumber = parseInt(shift);

  // Step 2: Validate that shift is a valid number
  if (isNaN(shiftNumber)) {
    throw new Error('Shift must be a valid number');
  }

  // Step 3: Normalize the shift to be between 0 and 25 (modulo 26)
  const normalizedShift = ((shiftNumber % 26) + 26) % 26;

  // Step 4: Initialize an empty string for the result
  let result = '';

  // Step 5: Loop through each character in the input text
  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];

    // Step 6: Check if the character is an uppercase letter
    if (currentChar >= 'A' && currentChar <= 'Z') {
      // Step 6a: Calculate the new character code for uppercase
      const base = 'A'.charCodeAt(0); // ASCII code for 'A' is 65
      const newCharCode = ((currentChar.charCodeAt(0) - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(newCharCode);
    }
    // Step 7: Check if the character is a lowercase letter
    else if (currentChar >= 'a' && currentChar <= 'z') {
      // Step 7a: Calculate the new character code for lowercase
      const base = 'a'.charCodeAt(0); // ASCII code for 'a' is 97
      const newCharCode = ((currentChar.charCodeAt(0) - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(newCharCode);
    }
    // Step 8: If not a letter, keep the character unchanged
    else {
      result += currentChar;
    }
  }

  // Step 9: Return the encrypted result
  return result;
}

// Main function to handle command line execution
function main() {
  // Step 1: Get command line arguments (excluding 'node' and script name)
  const args = process.argv.slice(2);

  // Step 2: Check if we have at least 2 arguments (text and shift)
  if (args.length < 2) {
    console.log('Please provide both a phrase and a shift number');
    console.log('Example: node caesarCipher.js "hello world" 3');
    return;
  }

  // Step 3: Extract the text (all arguments except the last one)
  const text = args.slice(0, -1).join(' ');
  // Step 4: Extract the shift number (last argument)
  const shift = args[args.length - 1];

  // Step 5: Try to encrypt the text and handle any errors
  try {
    const encryptedText = caesarCipher(text, shift);
    console.log(encryptedText);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

// Step 6: Run the main function when the script is executed
main();

main();

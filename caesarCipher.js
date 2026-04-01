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
  const shiftNumber = Number(shift);
  if (Number.isNaN(shiftNumber)) {
    throw new Error('Shift must be a valid number');
  }

  const normalizedShift = ((shiftNumber % 26) + 26) % 26;

  let result = '';

  for (let i = 0; i < text.length; i++) {
    const currentChar = text[i];

    if (currentChar >= 'A' && currentChar <= 'Z') {
      const base = 'A'.charCodeAt(0);
      const newCharCode = ((currentChar.charCodeAt(0) - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(newCharCode);
    } else if (currentChar >= 'a' && currentChar <= 'z') {
      const base = 'a'.charCodeAt(0);
      const newCharCode = ((currentChar.charCodeAt(0) - base + normalizedShift) % 26) + base;
      result += String.fromCharCode(newCharCode);
    } else {
      result += currentChar;
    }
  }

  return result;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Error: please provide a phrase and a shift number');
    console.log('Usage: node caesarCipher.js "Hello World" 3');
    return;
  }

  const text = args.slice(0, -1).join(' ');
  const shift = args[args.length - 1];

  try {
    const encrypted = caesarCipher(text, shift);
    console.log(encrypted);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { caesarCipher };


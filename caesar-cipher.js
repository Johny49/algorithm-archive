// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Example: s = "There's-a-starman-waiting-in-the-sky"; k = 3;
// The alphabet is rotated by , matching the mapping above. The encrypted string is "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted. Strings do not include spaces.
// Constraints: 1 <= n <= 100; 0 <= k <= 100;

function caesarCipher(s, k) {
  let encryptedStr = "";

  // iterate through string
  for (const char of s) {
    let alphaChar = /[A-Z,a-z]/;
    if (!alphaChar.test(char)) {
      // if non alpha, return original
      encryptedStr += char;
    } else {
      // for letters, shift by k while charcode + k is in range; adjust if shift is out of range
      // A - Z => 65 - 90
      // a - z => 97 - 122;

      // adjust offset to be < 26
      let offset = k;
      while (offset > 26) {
        offset -= 26;
      }

      let code = char.charCodeAt(0);
      switch (true) {
        // uppercase out of range
        case code <= 90 && code + offset > 90:
          let newCode = code + offset - 26;
          encryptedStr += String.fromCharCode(newCode);
          break;
        // lowercase out of range
        case code <= 122 && code + offset > 122:
          let reducedCode = code + offset - 26;
          encryptedStr += String.fromCharCode(reducedCode);
          break;
        // default
        default:
          encryptedStr += String.fromCharCode(char.charCodeAt(0) + offset);
      }
    }
  }
  console.log(encryptedStr);
  return encryptedStr;
}

caesarCipher("This-is-only-a-test", 0);
caesarCipher("There's-a-starman-waiting-in-the-sky", 3); // Expected Output: "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
caesarCipher("The-quick-Brown-fox-Jumped-over-The-lazy-Dog's-house", 36); // Expected Output: "Dro-aesmu-Lbygx-pyh-Tewzon-yfob-Dro-vkji-Nyq'c-ryeco"
caesarCipher(
  "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M",
  27
); // Expected Output: "1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N"

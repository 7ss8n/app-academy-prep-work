// In All Strings
//
// Write a function inAllStrings(longStrings, shortString).
// Check if a shortString is a substring of ALL of the strings in longStrings.
//
// Examples:
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa") => true
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan") => false
// inAllStrings(["gandalf", "aragorn", "sauron"], "sam") => false
// inAllStrings(["axe", "ajax", "axl rose"], "ax") => true
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
// Write a function factorial(n) which takes a number and
// returns the factorial of n. A factorial is the product of
// all whole numbers between 1 and n, inclusive.
//
// Examples:
// factorial(1) => 1 (1 * 1))
// factorial(5) => 120 (5 * 4 * 3 * 2 * 1)
------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------
// Write a function repeatedChars(word) which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// Case-sensitive.
//
// Examples:
// repeatedChars("aaabaa") => ["a", "a"]
// repeatedChars("mississippi") => ["s", "s", "p"]
// repeatedChars("SSassSS") => ["S", "s", "S"]
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
// Write a function oneOffWords(word, dictionary) which takes
// a string called word and an array of strings called dictionary.
// It returns an array of all the words in dictionary of the same
// length that are one letter different.
//
// Examples:
// oneOffWords("cat", ["cat", "fat", "flat", "tar"]) => ["fat", "tar"]
// oneOffWords("will", ["wilt", "willow", "wail"]) => ["wilt", "wail"]
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
// Biodiversity
//
// Given an array of specimens, write a function biodiversity(ary) which 
// returns the biodiversity index of the argument passed in. The biodiversity
// index is defined by the following formula:
//
// biodiversityIndex = numberOfSpecies ^ 2 * smallestPopulationSize / largestPopulationSize
//
// Examples:
// biodiversity(["cat"]) => 1
// biodiversity(["cat", "cat", "cat"]) => 1 (1 ^ 2 * 3 / 3)
// biodiversity(["cat", "cat", "dog"]) => 2 (2 ^ 2 * 1 / 2)
// biodiversity(["cat", "fly", "dog"]) => 9
// biodiversity(["cat", "fly", "dog", "dog", "cat", "cat"]) => 3
------------------------------------------------------------------------------*/



/*------------------------------------------------------------------------------
// Vigenere Cipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt "bananasinpajamas" with the
// key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a method vigenereCipher(string, keySequence, alphabet) that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it.
//
// Examples:
// vigenereCipher("toerrishuman", [1], alphabet) => "upfssjtivnbo"
// vigenereCipher("toerrishuman", [1, 2], alphabet) => "uqftsktjvobp"
// vigenereCipher("toerrishuman", [1, 2, 3], alphabet) => "uqhstltjxncq"
------------------------------------------------------------------------------*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*------------------------------------------------------------------------------
// Caesar Guesser
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b.
//
// Given that the most common letter in english is 'E', build a decrypter that
// takes an encrypted word, determines the key, and returns the decrypted word.
//
// Strategy: find the most common letter in the encrypted string and assume that it
// should be the letter "e" in the decrypted string. Use this information to
// calculate the key.  Use helper functions to declutter your code.
//
// We're giving you the alphabet as an array if you need it.
//
// Examples:
// caesarGuesser("a", alphabet) == "e"
// caesarGuesser("b", alphabet) == "e"
// caesarGuesser("ruuauufuh", alphabet) == "beekeeper"
// caesarGuesser("mnonwmcqntnny", alphabet) == "defendthekeep"
// caesarGuesser("happdaiawpywga", alphabet) == "letthemeatcake"
// ------------------------------------------------------------------------------*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
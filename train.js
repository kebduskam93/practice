/*  A-TASK:
       Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi
       letterni ikkinchi parametrdagi so'zdan qatnashgan sonini return qilish kerak bo'ladi.
       MASALAN: countLetter("e", "engineer") 3ni return qiladi
*/

// Masalaning yechimi
function countLetter(letter, word) {
  return word.split(letter).length - 1;
}

const res = countLetter("e", "engineer");
console.log(res);

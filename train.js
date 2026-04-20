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


console.log("==========================")

/* B-TASK (NodeJS)

Shunday function tuzing, u 1ta string parametrga ega bolsin, 
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

MASALAN: countDigits("ad2a54y79wet0sfgb9") 
7ni return qiladi.
*/

// Masalaning yechimi

function countDigits(matn) {
  let count = 0;
  
  for (let belgi of matn) {
     if (belgi !== " " && !isNaN(belgi)) {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
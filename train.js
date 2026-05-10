// J-TASK (NodeJS)

// Shunday function yozing, u parametridagi array ichida
// eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// Masalaning yechimi:
function majorityElement(array) {
  let counter = {};
  let maxCount = 0;
  let result;

  for (let num of array) {
    counter[num] = (counter[num] || 0) + 1;

    if (counter[num] > maxCount) {
      maxCount = counter[num];
      result = num;
    }
  }

  return result;
}

let result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log("result:", result);

//  H-TASK (NodeJS)

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// Masalaning yechimi:

// function getPositive(arr) {
//   const natija = arr.filter((n) => n > 0).join("");

//   return natija;
// }
// const result = getPositive([1, -5, 2]);
// console.log("result:", result);

// F-TASK (NodeJS)

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib,
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.

// MASALAN: getReverse("hello") return true return qiladi

// Masalaning yechimi
// function findDoublers(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(findDoublers("hello"));

// E-TASK (NodeJS)

// Shunday function tuzing, u bitta string argumentni
// qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// Masalaning yechimi

// function getReverse(s) {
//   let result = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     result += s[i];
//   }
//   return result;
// }

// console.log(getReverse("hello"));
console.log("===========");
// D - TASK(NodeJS);

// Shunday function tuzingki unga integerlardan iborat array pass bolsin
//  va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// Masalaning yechimi

// function getHighestIndex(arr) {
//   let maxIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }
// let box = getHighestIndex([5, 21, 12, 21, 8]);
// console.log(box);

/* C-TASK (NodeJS)

Shunday function tuzing, u 2ta string parametr ega bolsin,
hamda agar har ikkala string bir hil harflardan iborat bolsa true
aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; */

// Masalaning yechimi
// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const bos1 = str1.split("").sort().join("");
//   const bos2 = str1.split("").sort().join("");

//   return bos1 === bos2;
// }

// console.log(checkContent("maktab", "kambat"));
// console.log(checkContent("maktab", "kamba"));

// console.log("===========");
/* B-TASK (NodeJS)

Shunday function tuzing, u 1ta string parametrga ega bolsin,
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.

MASALAN: countDigits("ad2a54y79wet0sfgb9")
7ni return qiladi.
*/

// Masalaning yechimi:
// function countDigits(matn) {
//   let count = 0;

//   for (let belgi of matn) {
//     if (belgi !== " " && !isNaN(belgi)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// console.log("==========================");

/*  A-TASK:
       Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi
       letterni ikkinchi parametrdagi so'zdan qatnashgan sonini return qilish kerak bo'ladi.
       MASALAN: countLetter("e", "engineer") 3ni return qiladi
*/

// // Masalaning yechimi
// function countLetter(letter, word) {
//   return word.split(letter).length - 1;
// }

// const res = countLetter("e", "engineer");
// console.log(res);

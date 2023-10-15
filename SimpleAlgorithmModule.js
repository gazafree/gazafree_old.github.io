import { arabicWords } from '../ArabicWordsModule.js';

const arabicReplacements1 = {
"ا": "a", 
"ب": "b", 
"ت": "t",
"ث" :"th",
"ج": "g",
"ح": "h",
"خ":"kh",
"د": "d",
"ذ": "z",
"ر": "r", 
"ز": "z",
"س": "s",
"ش" :"sh",
"ص":"s",
"ض":"d",
"ط":"t",
"ظ":"z",
"ع":"a",
"غ":"gh",
"ف": "f", 
"ق": "q", 
"ك": "k", 
"ل": "l", 
"م": "m", 
"ن": "n",
"ه":"h", 
"و": "o",
"ي": "e", 
"ى": "e",
"ئ":"e", 
};

const arabicReplacements = {
  "س": "ـ,s,ـ",
  "ص": "ـ,s,ـ",
  "ظ": "ـ,z,ـ",
  "ذ": "ـ,z,ـ",
  "ز": "ـ,z,ـ",
  "ك": "ـ,k,ـ",
  "ه": "ـ,h,ـ",
  "ط": "ـ,t,ـ",
  "ت": "ـ,t,ـ",
  "ن": "ـ,n,ـ",
  "د": "ـ,d,ـ",
  "و": "ـ,w,ـ",
  "ج": "ـ,g,ـ",
  "ب": "ـ,b,ـ",
  "ر": "ـ,r,ـ",
  "ث": "ـ,s,ـ",
  "ض": "ـ,d,ـ",
  "ف": "ـ,f,ـ",
  "ق": "ـ,k,ـ",
  "ل": "ـ,l,ـ",
  "م": "ـ,m,ـ"
};
function modifyWord(word, position) {
  let modifiedWord = word.split('');

  switch(position) {
    case 'start':
      if (arabicReplacements[modifiedWord[0]]) {
        modifiedWord[0] = arabicReplacements[modifiedWord[0]];
      }
      break;
    case 'middle':
      let middleIndex = Math.floor(word.length / 2);
      if (arabicReplacements[modifiedWord[middleIndex]]) {
        modifiedWord[middleIndex] = arabicReplacements[modifiedWord[middleIndex]];
      }
      break;
    case 'end':
      if (arabicReplacements[modifiedWord[modifiedWord.length - 1]]) {
        modifiedWord[modifiedWord.length - 1] = arabicReplacements[modifiedWord[modifiedWord.length - 1]];
      }
      break;
    default:
      console.error("Invalid position specified");
  }

  return modifiedWord.join('');
}



function modifyText(inputText,position) {
  let words = inputText.trim().split(' ');
  let modifiedText = [];

  words.forEach(word => {
    if (arabicWords.includes(word)) {
      modifiedText.push(modifyWord(word,position));
    } else {
      modifiedText.push(word);
    }
  });

  return modifiedText.join(' ');
}

function modifyTextStart(inputText) {
  return modifyText(inputText, 'start');
}
function modifyTextMid(inputText) {
  return modifyText(inputText, 'middle');
}
function modifyTextEnd(inputText) {
  return modifyText(inputText, 'end');
}

export { modifyTextStart, modifyTextMid, modifyTextEnd };

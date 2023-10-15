import { arabicWords } from '../ArabicWordsModule.js';

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
function modifyWord(word) {
  let modifiedWord = word.split('');
  let found = false;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (arabicReplacements[char] && !found) {
      modifiedWord[i] = arabicReplacements[char];
      found = true;
    }
  }

  return modifiedWord.join('');
}

function modifyText(inputText) {
  let words = inputText.split(' ');
  let modifiedText = [];

  words.forEach(word => {
    if (arabicWords.includes(word)) {
      modifiedText.push(modifyWord(word));
    } else {
      modifiedText.push(word);
    }
  });

  return modifiedText.join(' ');
}

export { modifyWord, modifyText };

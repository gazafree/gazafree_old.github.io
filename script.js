// Define arabicWords globally so it's accessible throughout your code
let arabicWords = [];

document.addEventListener('DOMContentLoaded', () => {
  // Load Arabic words when the document is fully loaded
  loadArabicWords().then(() => {
    // Now you have the arabicWords array loaded from words.json
    console.log('Loaded Arabic words:', arabicWords);

    // You can use this array in your modifyText function or other parts of your code.
  });
});

const loadArabicWords = async () => {
  try {
    const response = await fetch('words.json');
    if (!response.ok) {
      throw new Error('Failed to load Arabic words.');
    }
    
    const data = await response.json();
    arabicWords = data.arabicWords; // Assign the loaded data to arabicWords
  } catch (error) {
    console.error('Error loading Arabic words:', error);
    arabicWords = []; // Assign an empty array in case of an error
  }
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

const form = document.getElementById('text-form');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

form.addEventListener('keyup', (e) => {
  e.preventDefault();

  const text = inputText.value;
  const modified = modifyText(text);

  outputText.textContent = modified;
});

const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
  let text = outputText.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert('تم نسخ النص بنجاح, النصر و العزة لفلسطين!');
    }).catch(() => {
      alert('Cannot copy text to clipboard. Please copy the text manually.');
    });
  }
});
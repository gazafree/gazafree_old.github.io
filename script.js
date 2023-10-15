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

/*************Simple algorithm*************/
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


/*************Random algorithm*************/

// The core of the script and data hiding algorithm
function getRandomCharacterSet() {
  const characterSets = ["+++++++++++++", "ــــــــــــــ", "٠٠٠٠٠٠٠٠٠٠٠٠٠٠", "ّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّ" , "ءءءءءءءءءءءءء"];
  const randomIndex = Math.floor(Math.random() * characterSets.length);
  return characterSets[randomIndex];
}

function generateRandomString(length, charset) {
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }

  return randomString;
}

function modifyWord2(word) {
  charset = getRandomCharacterSet();
  // Check if the word has less than 3 characters; if so, no modification is needed
  if (word.length < 3) {
    return word;
  }

  // Extract the first and last characters
  const firstChar = word.charAt(0);
  const lastChar = word.charAt(word.length - 1);

  // Modify characters in the middle by appending random strings
  let middleChars = '';

  for (let i = 1; i < word.length - 1; i++) {
    const originalChar = word.charAt(i);
    const randomLength = (Math.floor(Math.random() * 5) + 1)%3; // Generate a random length (1 to 5 characters)
    const randomString = "ــ"+generateRandomString(randomLength, charset)+"ـ";
    middleChars += originalChar + randomString;
  }

  // Combine the first, modified middle, and last characters
  const encodedWord = firstChar + middleChars + lastChar;

  return encodedWord;
}

function modifyText2(inputText) {
  let words = inputText.split(' ');
  let modifiedText = [];

  words.forEach(word => {
    if (arabicWords.includes(word)) {
      modifiedText.push(modifyWord2(word));
    } else {
      modifiedText.push(word);
    }
  });

  return modifiedText.join(' ');
}


const form = document.getElementById('text-form');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const copyButton = document.getElementById('copy-button');

let selectedModificationFunction = modifyText2; // Default to modifyText

// Listen for changes in the radio buttons
const radioButtons = document.querySelectorAll('input[name="modification"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', (e) => {
    if (e.target.value === 'modifyText') {
      selectedModificationFunction = modifyText;
    } else if (e.target.value === 'modifyText2') {
      selectedModificationFunction = modifyText2;
    }

    // When the radio button selection changes, update the modified text
    const text = inputText.value;
    const modified = selectedModificationFunction(text);
    outputText.textContent = modified;
  });
});

form.addEventListener('keyup', (e) => {
  e.preventDefault();

  const text = inputText.value;
  const modified = selectedModificationFunction(text); // Use the selected function

  outputText.textContent = modified;
});

copyButton.addEventListener('click', () => {
  let text = outputText.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
      alert('تم نسخ النص بنجاح!');

    }).catch(() => {
      alert('برجاء نسخ النص يدوياً');
    });
  }
});
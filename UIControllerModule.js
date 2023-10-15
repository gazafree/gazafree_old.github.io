import { loadArabicWords, arabicWords } from './ArabicWordsModule.js';
import { modifyText } from './SimpleAlgorithmModule.js';
import { modifyText2 } from './RandomAlgorithmModule.js';

document.addEventListener('DOMContentLoaded', () => {
  loadArabicWords().then(() => {
    console.log('Loaded Arabic words:', arabicWords);
  });
});

const form = document.getElementById('text-form');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const copyButton = document.getElementById('copy-button');

let selectedModificationFunction = modifyText2; 

const radioButtons = document.querySelectorAll('input[name="modification"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', (e) => {
    if (e.target.value === 'modifyText') {
      selectedModificationFunction = modifyText;
    } else if (e.target.value === 'modifyText2') {
      selectedModificationFunction = modifyText2;
    }
    const text = inputText.value;
    const modified = selectedModificationFunction(text);
    outputText.textContent = modified;
  });
});

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const text = inputText.value;
  const modified = selectedModificationFunction(text);
  outputText.textContent = modified;
});

copyButton.addEventListener('click', () => {
  let text = outputText.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert('تم نسخ النص بنجاح!');
    }).catch(() => {
      alert('برجاء نسخ النص يدوياً');
    });
  }
});

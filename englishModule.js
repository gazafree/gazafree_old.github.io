import { englishWords } from '../KeyWordsModule.js';

const englishReplacements = {
    "A": ["à", "á", "â", "ã", "å", "ă", "ā"],
    "B": ["ß"],
    "C": ["ç", "ć", "č", "ĉ"],
    "D": ["ð"],
    "E": ["é", "è", "ê", "ë", "ę", "ě", "ė"],
    "F": ["φ"],
    "G": ["ğ"],
    "H": ["ĥ"],
    "I": ["í", "ì", "î", "ï", "į"],
    "J": ["ĵ"],
    "K": ["κ"],
    "L": ["ł"],
    "M": ["м"],
    "N": ["ñ", "ń", "ň"],
    "O": ["ø", "ö", "ô", "õ", "ő", "ō"],
    "P": ["þ"],
    "Q": ["Ϙ"],
    "R": ["ř", "ŕ"],
    "S": ["ş", "š"],
    "T": ["ț", "ť"],
    "U": ["ü", "û", "ů", "ū", "ű"],
    "V": ["υ"],
    "W": ["ŵ", "ů", "ŭ"],
    "X": ["χ"],
    "Y": ["ý", "ÿ"],
    "Z": ["ž", "ż", "ź"],
    "a": ["à", "á", "â", "ã", "å", "ă", "ā"],
    "b": ["ß"],
    "c": ["ç", "ć", "č", "ĉ"],
    "d": ["ð"],
    "e": ["é", "è", "ê", "ë", "ę", "ě", "ė"],
    "f": ["φ"],
    "g": ["ğ"],
    "h": ["ĥ"],
    "i": ["í", "ì", "î", "ï", "į"],
    "j": ["ĵ"],
    "k": ["κ"],
    "l": ["ł"],
    "m": ["м"],
    "n": ["ñ", "ń", "ň"],
    "o": ["ø", "ö", "ô", "õ", "ő", "ō"],
    "p": ["þ"],
    "q": ["Ϙ"],
    "r": ["ř", "ŕ"],
    "s": ["ş", "š"],
    "t": ["ț", "ť"],
    "u": ["ü", "û", "ů", "ū", "ű"],
    "v": ["υ"],
    "w": ["ŵ"],
    "x": ["χ"],
    "y": ["ý", "ÿ"],
    "z": ["ž", "ż", "ź"]
        };
    
function modifyWord (word) {
    let modifiedWord = word.split('');
    let found = false;

    for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (englishReplacements[char] && !found) {
        modifiedWord[i] = englishReplacements[char][Math.floor(Math.random() * englishReplacements[char].length)];
        found = true;
    }
    }

    return modifiedWord.join('');
}

function handeForCheck(word) {
    if(word == ""){
        console.log("empty string")
        return;
    }
    const firstLetter = word[0].toUpperCase()
    return firstLetter + word.slice(1).toLowerCase()
}

function modifyEnglishText(inputText) {
    let words = inputText.trim().split(' ');
    let modifiedText = [];

    words.forEach(word => {
        // /if (englishWords.includes(handeForCheck(word))) {
        if (englishWords.includes(word)) {
        modifiedText.push(modifyWord2(word));
        } else {
        modifiedText.push(word);
        }
    });

    return modifiedText.join(' ');
}

export { modifyEnglishText };

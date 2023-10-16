let arabicWords = [];
let englishWords = [];

const loadWords = async (language) => {
  try {
    const response = await fetch(`${language}_keywords.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${language} words.`);
    }
    
    const data = await response.json();
    // Remove duplicates using Set and then convert it back to an array
    const words = [...new Set(data.keywords)];
    
    if (language === 'arabic') {
      arabicWords = words;
      console.log(`Total unique Arabic words: ${arabicWords.length}`);
    } else if (language === 'english') {
      englishWords = words;
      console.log(`Total unique English words: ${englishWords.length}`);
    }
  } catch (error) {
    console.error(`Error loading ${language} words:`, error);
    if (language === 'arabic') {
      arabicWords = [];
    } else if (language === 'english') {
      englishWords = [];
    }
  }
};

const loadAllWords = async () => {
  await loadWords('arabic');
  await loadWords('english');
};

export { arabicWords, englishWords, loadAllWords };

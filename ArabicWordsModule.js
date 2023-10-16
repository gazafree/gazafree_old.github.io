let arabicWords = [];

const loadArabicWords = async () => {
  try {
    const response = await fetch('arabic_keywords.json');
    if (!response.ok) {
      throw new Error('Failed to load Arabic words.');
    }
    
    const data = await response.json();
    // Remove duplicates using Set and then convert it back to an array
    arabicWords = [...new Set(data.arabicWords)];
    // Print the total length
    console.log(`Total unique Arabic words: ${arabicWords.length}`);
  } catch (error) {
    console.error('Error loading Arabic words:', error);
    arabicWords = []; 
  }
};

export { arabicWords, loadArabicWords };

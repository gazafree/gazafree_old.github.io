let arabicWords = [];

const loadArabicWords = async () => {
  try {
    const response = await fetch('words.json');
    if (!response.ok) {
      throw new Error('Failed to load Arabic words.');
    }
    
    const data = await response.json();
    arabicWords = data.arabicWords; 
  } catch (error) {
    console.error('Error loading Arabic words:', error);
    arabicWords = []; 
  }
};

export { arabicWords, loadArabicWords };

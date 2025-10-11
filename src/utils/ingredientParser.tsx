import React from 'react';
import IngredientTooltip from '@/components/IngredientTooltip';

const ingredientInfo = {
  'salsa di pomodoro': {
    it: 'Pomodoro, cipolla, olio E.V.O., basilico, sale, zucchero',
    en: 'Tomato, onion, E.V.O. oil, basil, salt, sugar',
  },
  'tomato sauce': {
    it: 'Pomodoro, cipolla, olio E.V.O., basilico, sale, zucchero',
    en: 'Tomato, onion, E.V.O. oil, basil, salt, sugar',
  },
  'crema di radicchio': {
    it: 'Radicchio, cipolla, olio E.V.O., zucchero, aceto',
    en: 'Radicchio, onion, E.V.O. oil, sugar, vinegar',
  },
  'radicchio cream': {
    it: 'Radicchio, cipolla, olio E.V.O., zucchero, aceto',
    en: 'Radicchio, onion, E.V.O. oil, sugar, vinegar',
  },
  'crema al radicchio': {
    it: 'Radicchio, cipolla, olio E.V.O., zucchero, aceto',
    en: 'Radicchio, onion, E.V.O. oil, sugar, vinegar',
  },
};

export function parseIngredients(text: string): React.ReactNode[] {
  const terms = Object.keys(ingredientInfo);
  
  // Create a regex pattern that matches any of the terms (case insensitive)
  const pattern = new RegExp(`(${terms.join('|')})`, 'gi');
  
  // Split the text by the pattern while keeping the matched terms
  const parts = text.split(pattern);
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    const matchedTerm = terms.find(term => term.toLowerCase() === lowerPart);
    
    if (matchedTerm) {
      return (
        <IngredientTooltip
          key={index}
          term={part}
          info={ingredientInfo[matchedTerm as keyof typeof ingredientInfo]}
        />
      );
    }
    
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}


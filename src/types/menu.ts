export interface Translation {
  it: string;
  en: string;
}

export interface Dish {
  id: string;
  name: Translation;
  description: Translation;
  price: string;
  image: string;
  allergens?: string[];
}

export interface Category {
  id: string;
  name: Translation;
  dishes: Dish[];
}

export interface MenuData {
  categories: Category[];
}

export interface Allergen {
  id: string;
  number: number;
  icon: string;
  name: Translation;
  description?: Translation;
}

export interface AllergenData {
  allergens: Allergen[];
  legalText: Translation;
  regulationTitle: Translation;
  regulationText: Translation;
  rapidCooling: Translation;
  note: Translation;
  contactText: Translation;
  coverCharge: Translation;
}

export type Language = 'it' | 'en';


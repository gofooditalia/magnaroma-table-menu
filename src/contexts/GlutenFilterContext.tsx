'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlutenFilterContextType {
  isGlutenFree: boolean;
  toggleGlutenFilter: () => void;
}

const GlutenFilterContext = createContext<GlutenFilterContextType | undefined>(undefined);

export function GlutenFilterProvider({ children }: { children: ReactNode }) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  const toggleGlutenFilter = () => {
    setIsGlutenFree(prev => !prev);
  };

  return (
    <GlutenFilterContext.Provider value={{ isGlutenFree, toggleGlutenFilter }}>
      {children}
    </GlutenFilterContext.Provider>
  );
}

export function useGlutenFilter() {
  const context = useContext(GlutenFilterContext);
  if (context === undefined) {
    throw new Error('useGlutenFilter must be used within a GlutenFilterProvider');
  }
  return context;
}


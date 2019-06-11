import React, { createContext, useState } from 'react';
import useToggleState from '../Hooks/useToggle';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [latam, toggleLatam] = useToggleState(false);

  return (
    <LanguageContext.Provider value={{ latam, toggleLatam }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

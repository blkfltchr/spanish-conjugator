import React, { createContext, useState } from 'react';
import useToggleState from '../Hooks/useToggle';
import useArrUpdate from '../Hooks/useArrUpdate';
import useSubjUpdate from '../Hooks/useSubjUpdate';

export const SettingsContext = createContext();

export function SettingsProvider(props) {
  const [latam, toggleLatam] = useToggleState(true);
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [difficulty, setDifficulty] = useState(0);
  const [present, setPresent] = useState(true);
  const [pret, setPret] = useState(true);
  const [tenseArr, useUpdate] = useArrUpdate();
  const [subjArr, useSubjChange] = useSubjUpdate();

  return (
    <SettingsContext.Provider
      value={{
        latam,
        toggleLatam,
        beginner,
        setBeginner,
        intermediate,
        setIntermediate,
        advanced,
        difficulty,
        setDifficulty,
        setAdvanced,
        present,
        setPresent,
        pret,
        setPret,
        tenseArr,
        useUpdate,
        subjArr,
        useSubjChange
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

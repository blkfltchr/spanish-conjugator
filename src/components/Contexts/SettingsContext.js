import React, { createContext, useState } from 'react';
import useToggleState from '../Hooks/useToggle';
import useArrUpdate from '../Hooks/useArrUpdate';
import useSubjUpdate from '../Hooks/useSubjUpdate';

export const SettingsContext = createContext();

export function SettingsProvider(props) {
  const [latam, toggleLatam] = useToggleState(false);
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  const [advanced, setAdvanced] = useState(false);
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

import React from 'react';
import { PersonStore } from '../modules/store/PersonStore';

const storesContext = React.createContext({
  personStore: new PersonStore(),
});

export const useStores = () => React.useContext(storesContext);

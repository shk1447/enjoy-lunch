import React, { useEffect } from 'react';
import { useStores } from '../modules';
import { observer, useObserver } from 'mobx-react';

const EnjoyLunch = observer(() => {
  const { personStore } = useStores();
  const { list } = personStore;

  useEffect(() => {
    personStore.getPersonList();
  }, []);

  return (
    <>
      <h1>{list.length}</h1>
    </>
  );
});

export default EnjoyLunch;

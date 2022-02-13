import React, { useEffect, useState } from 'react';
import { useStores } from '../modules';
import { observer, useObserver } from 'mobx-react';
import {
  Box,
  Button,
  TextField,
  Stack,
  Chip,
  Avatar,
  Slider,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

import PersonModel from '../modules/model/PersonModel';

const EnjoyLunch = observer(() => {
  const [lunchGroup, setLunchGroup] = useState([]);
  const [minSize, setMinSize] = useState(2);
  const [groupSize, setGroupSize] = useState(2);

  const [name, setName] = useState('');
  const { personStore } = useStores();
  const { list } = personStore;

  useEffect(() => {
    personStore.getPersonList();
  }, []);

  const shuffle = (o: any) => {
    for (
      let j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  const genGroup = () => {
    shuffle(list);

    const _list = [...list];
    const groups = [];
    const maxPerson = Math.floor(list.length / groupSize);

    if (maxPerson < minSize) {
      alert('최소 인원을 조정해주세요.');
      return;
    }

    for (let i = 0; i < groupSize; i++) {
      groups.push(_list.splice(0, minSize));
    }

    let idx = 0;
    while (_list.length > 0) {
      const test = _list.pop();
      const t = idx % groups.length;
      groups[t].push(test as PersonModel);
      idx++;
    }
    setLunchGroup(groups as any);
  };

  const addPerson = () => {
    if (name) {
      personStore.addPerson(name);
      setName('');
    } else {
      alert('이름을 입력해주세요.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDelete = (person: PersonModel) => {
    personStore.removePerson(person);
  };

  return (
    <>
      <h1>{list?.length}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1em' }}>
        <div>
          {list?.map(person => {
            return (
              <Chip
                style={{ margin: '4px' }}
                avatar={<Avatar>M</Avatar>}
                label={person.name}
                onDelete={() => handleDelete(person)}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: 300 }}>
          <Typography gutterBottom>Minimum member size</Typography>
          <Slider
            aria-label="Temperature"
            value={minSize}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={list.length}
            onChange={(e, val) => setMinSize(val as number)}
          />
          <Typography gutterBottom>The Number of groups</Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={groupSize}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={list.length}
            onChange={(e, val) => setGroupSize(val as number)}
          />
        </Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '5px',
            margin: '1em',
          }}
        >
          <Button variant="outlined" onClick={genGroup}>
            GENERATE GROUPS
          </Button>
          <TextField
            size="small"
            required
            id="outlined-required"
            label="Name"
            value={name}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={addPerson}>
            ADD
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          margin: '1em',
          justifyContent: 'center',
        }}
      >
        {lunchGroup.map((group: PersonModel[], idx: number) => {
          return (
            <div
              style={{
                boxShadow: '0px 5px 5px rgb(0 0 0 / 10%)',
                padding: '1em',
              }}
            >
              <h4>GROUP {idx}</h4>
              {group.map((person: PersonModel) => {
                return (
                  <div style={{ textAlign: 'left', margin: '6px 4px' }}>
                    {person.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
});

export default EnjoyLunch;

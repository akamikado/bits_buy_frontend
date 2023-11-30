import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

import { useState } from 'react';

export function SearchBar(props) {
  const theme = useMantineTheme();
  const [product,setProduct] = useState('');

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search on BitsBuy"
      value={product}
      onChange={(e)=>{setProduct(e.target.value)}}
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={2} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color="#d35934" variant="filled" onClick={async()=>{
          const response= await fetch(`localhost:8080/search/{product}`).then((data)=>{return data.json()}).then((data)=>console.log(data)).catch((e)=>console.log(e));
        }}>
          <IconArrowRight style={{ width: rem(18), height: rem(18)}} stroke={2} />
        </ActionIcon>
      }
      {...props}
    />
  );
}

export default SearchBar;
//import {useState} from 'react';
import { TextInput, ActionIcon , rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';


export function SearchBar(props) {
  /*
  const [searchTerm,setSearchTerm] = useState('');
  
  const searchHandler = async () =>{
    try{
      const response = await fetch('https://xyz.com',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          searchTerm
        }),
      });

      if(!response.ok){
        throw new Error('Error Searching on backend');
      }

      const products=await response.json();

      props.onSearch(products);
    }catch(error){
      console.error('Error:',error);
    }
    
  }
  */
  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search on BitsBuy"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={2} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color="#d35934" variant="filled">

          <IconArrowRight style={{ width: rem(18), height: rem(18)}} stroke={2} />
        </ActionIcon>
      }
      {...props}
    />
  );
}

export default SearchBar;
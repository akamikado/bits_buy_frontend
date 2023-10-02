import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export function SearchBar(props) {
  const theme = useMantineTheme();

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
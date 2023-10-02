import React, { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, Button } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './UserForm.module.css';

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={2} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      label="Name"
      placeholder=""
      className={classes['text-input']}
    />
  );
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Phone Number should have +91'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
      withinPortal
    >
      <PasswordInput
        label="Enter Phone Number"
        required
        placeholder="Ph.no."
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        className={classes['password-input']}
      />
    </Tooltip>
  );
}

export function UserForm() {
  return (
    <>
      <TooltipIcon />
      <TooltipFocus />
      <Button variant="light" color="teal" size="lg" radius="xl" >Submit</Button>
    </>
  );
}

export default UserForm;

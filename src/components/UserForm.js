import React, { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, Button } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import classes from './UserForm.module.css';

  const ToolTipIcon = (
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
function EmailInput(){

  return(
    <TextInput
      rightSection={ToolTipIcon}
      label="Email"
      type="email"
      required
      placeholder=""
      className={classes['text-input']}
    />
  );
  
}


function PassInput() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length === 13;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Phone Number should have +91 and 10 digits'}
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
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const FormSubmissionHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('xyz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          phone: userPhone,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`Error: ${responseData.message}`);
      }

      // Handle successful response
      console.log('User data successfully submitted:', responseData);
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
      console.error('Error submitting user data:', error);
    }
  };

  return (
    <>
      <EmailInput value={userEmail} onChange={(event) => setUserEmail(event.currentTarget.value)} />
      <PassInput value={userPhone} onChange={(event) => setUserPhone(event.currentTarget.value)} />
      {errorMessage && <p className={classes['error-message']}>{errorMessage}</p>}
      <Button variant="light" color="teal" size="lg" radius="xl" onClick={FormSubmissionHandler}>
        Submit
      </Button>
    </>
  );
}

export default UserForm;
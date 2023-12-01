import React, { useEffect, useState } from 'react';
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
  return (
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
  return (
    <TextInput
      rightSection={ToolTipIcon}
      label="Phone Number"
      type="phoneNo"
      required
      placeholder=""
      className={classes['text-input']}
    />
  );
}

function HostelInput(){
  return (
    <TextInput
      rightSection={ToolTipIcon}
      label="Hostel"
      type="hostel"
      required
      placeholder=""
      className={classes['text-input']}
    />
  );
}

function NameInput(){
  return (
    <TextInput
      rightSection={ToolTipIcon}
      label="Name"
      type="name"
      required
      placeholder=""
      className={classes['text-input']}
    />
  );
}

export function UserForm() {
  const [userPhone, setUserPhone] = useState('');
  const [userHostel,setUserHostel] =useState('');
  const [userName,setUserName] =useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userEmail=''

  const FormSubmissionHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      console.log(userName + userHostel)
      const response = await fetch('xyz.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          phone: userPhone,
          name:userName,
          hostel:userHostel
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
      <EmailInput value={userEmail} disabled />
      <PassInput value={userPhone} onChange={(event) => setUserPhone(event.currentTarget.value)} />
      <HostelInput value={userHostel} onChange={(event)=>{setUserHostel(event.currentTarget.value)}}/>
      <NameInput value={userName} onChange={(event)=>{setUserName(event.currentTarget.value)}}/>
      
      {errorMessage && <p className={classes['error-message']}>{errorMessage}</p>}
      <Button variant="light" color="teal" size="lg" radius="xl" onClick={FormSubmissionHandler}>
        Submit
      </Button>
    </>
  );
}

export default UserForm;
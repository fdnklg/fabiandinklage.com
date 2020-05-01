import React, { useEffect, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import axios from 'axios';

import { content } from '~/data';

const Form = p => {
  const base = useStoreState(state => state.base);
  const form = content[base].form;

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState('');

  useEffect(() => {
    console.log(message, email, name)
  }, [message, email, name])

  // const state = useState({
  //     name: '',
  //     message: '',
  //     email: '',
  //     sent: false,
  //     buttonText: 'Send Message'
  // })

  const resetForm = () => {
    setName('');
    setMessage('');
    setEmail('');
    setSent('Message sent!');
  }

  const formSubmit = (e) => {
    e.preventDefault()

    setSent('Sending ...');

    let data = {
      name: name,
      email: email,
      message: message
    }

    axios.post('API_URI', data)
      .then( res => {
        setSent(true);
        resetForm();
      })
      .catch( () => {
        console.log('Message not sent')
      })
  }

  return (
    <form onSubmit={e => formSubmit(e)}>

      <textarea
        onChange={e => {setName(e.target.value)}}
        name="message"
        type="text"
        placeholder={form.name}
        value={name}
        required
      />


      <textarea
        onChange={e => {setEmail(e.target.value)}}
        name="email"
        type="text"
        placeholder={form.mail}
        value={email}
        required
      />


      <textarea
        onChange={e => {setMessage(e.target.value)}}
        name="message"
        class="message-input"
        type="text"
        placeholder={form.message}
        value={message}
        required
      />

      <button type="submit">{ form.btnSend }</button>
    </form>
  );
};

export default Form;
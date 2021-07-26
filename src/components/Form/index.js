import React, { useEffect, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import axios from 'axios';

import { content } from '~/data';

const StyledButton = styled.button`
  cursor: pointer;
  width: 180px;
  align-self: flex-end;
  padding-top: 7px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: none;
  font-size: ${p => p.theme.fontSizes[4]};
  border: 1px solid ${p => p.c[0]};
  color: ${p => p.c[0]};
  border-radius: 30px;
  text-decoration: none;
  margin-top: 30px;
  transition: all ${p => p.theme.times[0]} ease-in-out;

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    font-size: ${p => p.theme.fontSizes[3]};
    align-self: flex-start;
    margin-top: 20px;
  }

  &:hover {
    color: ${p => p.c[1]};
    background: ${p => p.c[0]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  textarea {
    width: 48% !important;
    max-height: 40px !important;
    min-height: 40px !important;
    margin-bottom: 20px;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  textarea {
    width: 48% !important;
  }

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    textarea {
      width: 100% !important;
    }
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  width: 100%;
  min-height: 150px;
  color: ${p => p.color[0]};
  font-size: 16px;
  max-height: 300px;
  height: 100%;
  padding: 10px;
  background-color: ${p => p.color[2]};
  resize: none;

  &::placeholder {
    color: ${p => p.color[0]};
  }

  &:focus {
    outline: 1px solid ${p => p.color[2]};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = p => {
  const base = useStoreState(state => state.base);
  const color = useStoreState(state => state.color.color);
  const form = content[base].form;

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(form.btnSend);

  const resetForm = () => {
    setName('');
    setMessage('');
    setEmail('');
    setTimeout(() => {
      setSent(form.btnSend);
    }, 1500);
  };

  useEffect(() => {
    setSent(form.btnSend);
  }, [base]);

  const formSubmit = e => {
    e.preventDefault();

    setSent(form.btnSending);

    let data = {
      name: name,
      email: email,
      message: message,
    };

    const productionUrl = 'https://fabiandinklage-com-form-api.now.sh/api/v1';
    const localUrl = 'http://localhost:3000/api/v1';

    axios
      .post(productionUrl, data)
      .then(res => {
        setSent(form.btnSuccess);
        resetForm();
      })

      .catch(() => {
        console.log('Message not sent');
      });
  };

  return (
    <StyledForm onSubmit={e => formSubmit(e)}>
      <FlexRow>
        <StyledTextArea
          onChange={e => {
            setName(e.target.value);
          }}
          name="message"
          color={color}
          type="text"
          placeholder={form.name}
          value={name}
          required
        />

        <StyledTextArea
          onChange={e => {
            setEmail(e.target.value);
          }}
          name="email"
          color={color}
          type="text"
          placeholder={form.mail}
          value={email}
          required
        />
      </FlexRow>

      <StyledTextArea
        onChange={e => {
          setMessage(e.target.value);
        }}
        name="message"
        type="text"
        color={color}
        placeholder={form.message}
        value={message}
        required
      />

      <StyledButton c={color} type="submit">
        {sent}
      </StyledButton>
    </StyledForm>
  );
};

export default Form;

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import styled from "styled-components";
import { useForm } from "@formspree/react";

const ContactStyles = styled.div`
  margin-top: 3rem;
  form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    width: 100%;
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }
  button {
    max-height: 36px;
    display: flex;
    align-self: flex-end;
  }
  .MuiFormLabel-root,
  .MuiInputBase-input {
    color: var(--white);
  }
  .MuiInput-underline::before {
    border-color: var(--grey);
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-color: var(--white);
  }
  @media (max-width: 550px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvjeppy");
  if (state.succeeded) {
    return (
      <ContactStyles>
        <h2>Thank you!</h2>
      </ContactStyles>
    );
  }

  console.log(state);

  return (
    <ContactStyles>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          type="email"
          name="email"
          label="Enter Your Email"
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<NotificationsOutlinedIcon />}
          type="submit"
        >
          Notify Me
        </Button>
      </form>
    </ContactStyles>
  );
};

export default Contact;

import React from 'react'
import { Container } from "@mui/material";
import ContactForm from '../src/components/ContactForm';

function Contact() {
  return (
    <main>
        <Container maxWidth="md">
            <ContactForm />
        </Container>
    </main>
  )
}

export default Contact
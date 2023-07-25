import React from 'react'
import { Container } from "@mui/material";
import ContactForm from '../src/components/ContactForm';
import Head from 'next/head';

function Contact() {
  return (
    <main>
      <Head>
        <title>Contact - Peter Wilson</title>
      </Head>
        <Container maxWidth="md">
            <ContactForm />
        </Container>
    </main>
  )
}

export default Contact
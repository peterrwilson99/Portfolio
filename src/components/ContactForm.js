import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const ContactForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCloseSnackbar = (event, reason) => {
    setOpenSnackbar(false);
  };

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setErrorState({
      ...errorState,
      [event.target.name]: "",
    });
  };

  const validateForm = () => {
    if (formState.name === "") {
      setErrorState((prevState) => ({
        ...prevState,
        name: "Name is required",
      }));
      return false;
    }

    if (formState.email === "" || !formState.email.includes("@")) {
      setErrorState((prevState) => ({
        ...prevState,
        email: "Valid email is required",
      }));
      return false;
    }

    if (formState.message === "") {
      setErrorState((prevState) => ({
        ...prevState,
        message: "Message is required",
      }));
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    // Here you would typically handle form submission like sending the form data to a server
    const emailSent = await sendEmail();

    if (!emailSent) {
      setSnackbarMessage("Error sending email");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }
    setSnackbarMessage("Email sent successfully!");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="mt-24"
          noValidate
          sx={{ mt: 1 }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Send me an email!
          </Typography>
          <Typography variant="h6" gutterBottom align="center">
            Feel free to send me an email, along with your email so I can get back to you. Looking forward to hearing from you 😀
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formState.name}
            onChange={handleInputChange}
            error={!!errorState.name}
            helperText={errorState.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formState.email}
            onChange={handleInputChange}
            error={!!errorState.email}
            helperText={errorState.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="message"
            label="Message"
            name="message"
            autoComplete="message"
            value={formState.message}
            onChange={handleInputChange}
            error={!!errorState.message}
            helperText={errorState.message}
          />
          <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        message={snackbarMessage}
        sev
        onClose={handleCloseSnackbar}
        >
        <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
        >
            {snackbarMessage}
        </Alert>
        </Snackbar>
    </div>
  );
};

export default ContactForm;

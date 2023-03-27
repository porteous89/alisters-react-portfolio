import React from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          'service_g2cxgak',
          'template_txiwb5e',
          values,
          'kIyeNEG903Y9OLmGR'
        )
        .then(
          (response) => {
            alert('Message sent successfully!');
            resetForm();
          },
          (error) => {
            alert('Failed to send message. Please try again later.');
            console.log('Error:', error);
          }
        );
    },
  });

  return (
    <Container className="contact-page" maxWidth="md">
      <Paper elevation={3} className="contact-paper">
        <Box p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Get in touch
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      name="message"
                      label="Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth color="primary" variant="contained" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data to email, etc.
    setFormSubmitted(true); // Show success message after form submission
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" style={{ color: '#1995AD', fontWeight: 'bold' }}>
        Contact Us
      </Typography>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Grid container spacing={4}>

          {/* Left Side: Google Maps with Locations */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6" gutterBottom style={{ color: '#1995AD' }}>Our Locations</Typography>
              {/* Google Maps for three locations */}
              <Box sx={{ width: '100%', mb: 3 }}>
                <iframe
                  src="https://www.google.com/maps?q=Location1&output=embed"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </Box>
              <Box sx={{ width: '100%', mb: 3 }}>
                <iframe
                  src="https://www.google.com/maps?q=Location2&output=embed"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </Box>
              <Box sx={{ width: '100%' }}>
                <iframe
                  src="https://www.google.com/maps?q=Location3&output=embed"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Company Details */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" gutterBottom style={{ color: '#1995AD' }}>Company Details</Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                <strong>Company Name:</strong> Busitron Technologies
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                <strong>Address:</strong> 1234 Tech Street, Silicon Valley, CA
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                <strong>Phone:</strong> (123) 456-7890
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                <strong>Email:</strong> contact@busitron.com
              </Typography>
              <Box mt={2}>
                <Typography variant="body1" paragraph style={{ color: '#666' }}>Follow us:</Typography>
                <Box display="flex">
                  <IconButton href="https://www.facebook.com" target="_blank" color="primary">
                    <Facebook />
                  </IconButton>
                  <IconButton href="https://twitter.com" target="_blank" color="primary">
                    <Twitter />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com" target="_blank" color="primary">
                    <LinkedIn />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Form Section */}
        <Box mt={5} sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom align="center" style={{ color: '#1995AD' }}>Get in Touch</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField label="Full Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Subject" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          
          {/* Success Message */}
          {formSubmitted && (
            <Typography variant="body1" color="success.main" align="center" style={{ marginTop: '20px' }}>
              Your message has been successfully sent! We will get back to you shortly.
            </Typography>
          )}
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactUs;

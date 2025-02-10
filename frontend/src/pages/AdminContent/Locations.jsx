// Locations.jsx
import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const officeLocations = [
  { name: 'Head Office', address: '1234 Tech Street, Silicon Valley, CA', mapLink: 'https://www.google.com/maps?q=1234+Tech+Street,+Silicon+Valley,+CA' },
  { name: 'Branch Office', address: '5678 Business Blvd, New York, NY', mapLink: 'https://www.google.com/maps?q=5678+Business+Blvd,+New+York,+NY' },
];

const Locations = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Our Locations</Typography>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Grid container spacing={4}>
          {officeLocations.map((location, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography variant="h6">{location.name}</Typography>
              <Typography variant="body2">{location.address}</Typography>
              <a href={location.mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Locations;

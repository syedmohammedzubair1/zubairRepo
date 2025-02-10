import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projectsList = [

  { title: 'Project 1', description: 'Completed project for XYZ Corp', year: 2022 },
  { title: 'Project 2', description: 'Ongoing project for ABC Ltd', year: 2023 },
  { title: 'Project 3', description: 'Completed project for DEF Ltd', year: 2021 },
  { title: 'Project 4', description: 'Completed project for GHI Inc', year: 2020 },
  { title: 'Project 5', description: 'Ongoing project for JKL Ltd', year: 2023 },
  { title: 'Project 6', description: 'Completed project for MNO Technologies', year: 2022 },
  { title: 'Project 7', description: 'Ongoing project for PQR Enterprises', year: 2023 },
  { title: 'Project 8', description: 'Completed project for STU Pvt Ltd', year: 2021 },
  { title: 'Project 9', description: 'Completed project for STU Pvt Ltd', year: 2021 },
  
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Our Projects
      </Typography>

      {/* Projects List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Grid container spacing={4}>
          {projectsList.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
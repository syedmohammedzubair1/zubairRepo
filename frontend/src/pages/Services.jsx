// src/pages/Services.jsx
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const services = [
  { title: "Web Development", description: "Building responsive and functional websites.",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGCDR5nBpsRnjkCoIccrnqoKpDSYUTG7MLA&s" },
  { title: "Mobile Apps", description: "Creating apps that deliver a great experience.",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIMnjnXlViLQyMfBQAoaZl95XBh5jnywapJCBgC0EegvnrLh-yT_36JbaFzGdVV_5PfQ&usqp=CAU" },
  { title: "Cloud Services", description: "Cloud solutions for better business performance.",
     img: "https://treinetic.com/wp-content/uploads/2024/03/Worlds-Famous-Cloud-Service-Providers.jpg" },
     { title: "Web Development", description: "Building responsive and functional websites.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGCDR5nBpsRnjkCoIccrnqoKpDSYUTG7MLA&s" },
     { title: "Mobile Apps", description: "Creating apps that deliver a great experience.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIMnjnXlViLQyMfBQAoaZl95XBh5jnywapJCBgC0EegvnrLh-yT_36JbaFzGdVV_5PfQ&usqp=CAU" },
     { title: "Cloud Services", description: "Cloud solutions for better business performance.",
        img: "https://treinetic.com/wp-content/uploads/2024/03/Worlds-Famous-Cloud-Service-Providers.jpg" },
];

const Services = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Our Services
        </Typography>

        {/* <Carousel>
          {services.map((service, index) => (
            <div key={index}>
              <img src={service.img} alt={service.title} />
              <p className="legend">{service.title}</p>
            </div>
          ))}
        </Carousel> */}

        <Grid container spacing={3} justifyContent="center" style={{ marginTop: "30px" }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia component="img" height="200" image={service.img} alt={service.title} />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Services;

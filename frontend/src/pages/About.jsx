import React from 'react';
import { Typography, Container, Grid, Box, Breadcrumbs, Link, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const companyLogos = [
  { src: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183937/denside-logo-design-d-letter-logo-concept-by-abdul-gaffar-dribbble.png', link: 'https://company1.com' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2WwHYaRpMAQy2sV7jga3Ase-y9rToIxB1A&s', link: 'https://company2.com' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJXMeoZ4H9687FHo68oJT3IXKWqY2-OL0Gw&s', link: 'https://company3.com' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXJzBWNAjtqepV1n84uBSDH6gHKwPvOIfrw&s', link: 'https://company4.com' },
  { src: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09211217/Adobe-1024x1024.png', link: 'https://company5.com' },
  { src: 'https://images-platform.99static.com//p1GQZ84ZuCY8nNYA7acsQYmM6Nk=/200x13:799x612/fit-in/500x500/99designs-contests-attachments/123/123190/attachment_123190046', link: 'https://company5.com' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJXMeoZ4H9687FHo68oJT3IXKWqY2-OL0Gw&s', link: 'https://company5.com' },
  { src: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183942/digital-software-app-by-royallogo-brandcrowd.png', link: 'https://company5.com' },
];

const stats = [
  { value: '600+', title: 'Happy Customers' },
  { value: '100%', title: 'Satisfied Clients' },
  { value: '350+', title: 'Total Projects' },
  { value: '7+', title: 'Years of Experience' },
];

const About = () => {
  return (
    <Container>
      {/* Top Banner */}
      {/* Top Banner with Background Image */} <br></br>
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 200,
    padding: 2,
    backgroundImage: 'url(https://www.fingent.com/wp-content/uploads/custom-software-development-01-1024x387-1.png)', // Change to your preferred image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff', // White text for better contrast
  }}
>
  {/* Overlay for better text visibility */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
      zIndex: 1,
    }}
  />
  
  <Typography variant="h4" sx={{ position: 'relative', zIndex: 2, fontWeight: 'bold' }}>
    Who We Are
  </Typography>
  
  {/* <Breadcrumbs sx={{ position: 'relative', zIndex: 2 }}>
    <Link href="/home" color="inherit" underline="hover">Home</Link>
    <Typography color="inherit">About</Typography>
  </Breadcrumbs> */}
</Box>


      {/* About Section */}
      <Grid container spacing={4} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <img src="https://www.3iplanet.com/wp-content/uploads/2024/02/Software-Development-Company-in-Udaipur.webp" alt="About" style={{ width: '100%', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>About Our Company</Typography>
          <Typography variant="body1">
            We have been pioneers in the tech industry, delivering top-notch solutions...
          </Typography>
        </Grid>
      </Grid>

      {/* Stats Section */}
      <Box
        sx={{
          mt: 5,
          textAlign: 'center',
          backgroundImage: 'url(https://www.fingent.com/wp-content/uploads/custom-software-development-01-1024x387-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 5,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '10px',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {stat.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Clients Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" align="center">Our Clients</Typography>
        <Typography variant="body1" align="center">Some of our clients have taken software solutions from us</Typography>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.src} alt={`Company ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default About;

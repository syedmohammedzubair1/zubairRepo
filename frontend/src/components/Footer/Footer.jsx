import React from "react";
import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Right Side - Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">
            OSTECHSERVICE
            </Typography>
            <Typography variant="body2" className="footer-text">
              We provide top-notch software solutions tailored to your business needs.
            </Typography>
            <Typography variant="body2" className="footer-text">
              Contact: ostechservices@gmail.com
            </Typography>
          </Grid>

          {/* Middle - Location & Map */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">
              Our Location
            </Typography>
            <Typography variant="body2" className="footer-text">
              Tech Park, Hyderabad, India
            </Typography>
            <iframe
              title="Google Map"
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2595275471777!2d-122.42194228468135!3d37.77520677975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7aabc123%3A0x1cd2b9d8d6342b45!2sGoogle!5e0!3m2!1sen!2sin!4v1632572941742!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Grid>

          {/* Next Middle - Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="footer-heading">
              Quick Links
            </Typography>
            <ul className="footer-links">
              <li><Link href="/" color="inherit">Home</Link></li>
              <li><Link href="/about" color="inherit">About Us</Link></li>
              <li><Link href="/services" color="inherit">Services</Link></li>
              <li><Link href="/contact" color="inherit">Contact Us</Link></li>
            </ul>
          </Grid>

          {/* Left Side - Social Media */}
          <Grid item xs={12} sm={6} md={3} className="social-icons">
            <Typography variant="h6" className="footer-heading">
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com" target="_blank" className="icon">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" className="icon">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" className="icon">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" className="icon">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://www.youtube.com" target="_blank" className="icon">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
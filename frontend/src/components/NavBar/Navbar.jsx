import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#1995AD" }}
      variant="dark"
      className="shadow-sm p-2"
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Logo
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-white">
            {["About", "Services", "Projects", "Locations", "Contact Us"].map(
              (item, index) => (
                <Nav.Link
                  key={index}
                  href={"#" + item.toLowerCase().replace(/ /g, "")}
                  className="mx-2"
                  style={{ color: "#F1F1F2" }}
                >
                  {item}
                </Nav.Link>
              )
            )}
            <Button
              variant="outline-light"
              href="#login"
              className="ms-3"
              style={{ borderColor: "#A1D6E2", color: "#A1D6E2" }}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

// Usage tips:
// 1. Install react-bootstrap and bootstrap if you haven't already.
//    npm install react-bootstrap bootstrap framer-motion
// 2. Import Bootstrap CSS in your index.js:
//    import 'bootstrap/dist/css/bootstrap.min.css';
// 3. Use <CustomNavbar /> in your app where you want the navbar to appear.

// Let me know if you'd like to tweak anything—I'm happy to adjust it! 🎨

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
const Navbar1 = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ background: "linear-gradient(135deg, #A1D6E2, #1995AD)" }}
        variant="dark"
        className="shadow-sm p-2"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-black">
            <img src="logo.jpg" alt="logo" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              OSTECHSERVICE
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
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {item}
                  </Nav.Link>
                )
              )}
              <Button
                variant="outline-light"
                href="#login"
                className="ms-3"
                style={{ borderColor: "#A1D6E2", color: "black" }}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;

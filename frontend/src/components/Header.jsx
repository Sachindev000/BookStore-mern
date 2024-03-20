import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-indigo-950 fixed-top">
        <Container>
          <Navbar.Brand href="#" className="text-white font-bold">
            BookStore📚
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 lg:flex items-center justify-items-center space-x-3" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"/"} className="text-white cursor-pointer" style={{ textDecoration: "none" }}>
                HOME
              </Link>
              <Link to={"/books"} className="text-white cursor-pointer lg:mt-0 md:mt-0 sm:mt-3 xs:mt-3" style={{ textDecoration: "none" }}>
                BOOKS
              </Link>
              <Link to={"/addBooks"} className="text-white border p-2 cursor-pointer lg:mt-0 md:mt-0 sm:mt-3 xs:mt-3" style={{ textDecoration: "none" }}>
                ADD BOOKS
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ paddingTop: "80px" }}> 
      
      </div>
    </>
  );
};

export default Header;

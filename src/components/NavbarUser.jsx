import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu, X, Phone } from "lucide-react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function OkandjoNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`okandjo-navbar ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Container>
        {/* LOGO & NOM */}
        <Navbar.Brand href="#home" className="nav-brand-container">
          <img src="/logo.jpg" alt="Logo" className="nav-logo" />
          <span className="nav-brand-text">
            O<span style={{ color: "#2DB87A" }}>B</span>T.
          </span>
        </Navbar.Brand>

        {/* BOUTON MOBILE */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <X color="white" size={30} />
          ) : (
            <Menu color="white" size={30} />
          )}
        </Navbar.Toggle>

        {/* LIENS */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            {/* Lien vers la page Accueil */}
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Accueil
            </Nav.Link>

            {/* Lien vers l'ancre Secteurs (fonctionne depuis n'importe quelle page) */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#secteurs"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Nos Secteurs
            </Nav.Link>

            {/* Lien vers la page Produits */}
            <Nav.Link
              as={Link}
              to="/home/produits"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Produits
            </Nav.Link>

            {/* Bouton vers la page Assistance (ton bouton "Expertise" ou "Problème") */}
            <Nav.Link
              as={Link}
              to="/home/assistance"
              className="btn-nav-contact"
              onClick={() => setExpanded(false)}
            >
              Assistance <Phone size={16} className="ms-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
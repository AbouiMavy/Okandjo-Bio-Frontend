import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="okandjo-footer">
      <Container>
        <Row className="gy-5">
          {/* Section Identité */}
          <Col lg={4} md={6}>
            <div className="footer-logo-section">
              <img src="/logo.jpg" alt="Okandjo Logo" className="footer-logo-circle" />
              <h4 className="fw-bold mb-3">Okandjo <span style={{color: 'var(--light-green)'}}>Bio</span></h4>
              <p className="small opacity-75">
                Leader dans la transformation biologique au Cameroun. Nous innovons pour une agriculture, une santé et un environnement durables.
              </p>
              <div className="social-icons">
                {/* <a href="#" className="social-link"><Facebook size={18} /></a>
                <a href="#" className="social-link"><Linkedin size={18} /></a>
                <a href="#" className="social-link"><Instagram size={18} /></a> */}
              </div>
            </div>
          </Col>

          {/* Section Liens Rapides */}
          <Col lg={2} md={6}>
            <h5 className="footer-title">Navigation</h5>
            <Link to="/" className="footer-link">Accueil</Link>
            <Link to="/home/produits" className="footer-link">Nos Produits</Link>
            <a href="#secteurs" className="footer-link">Expertise</a>
            <a href="#vision" className="footer-link">Notre Vision</a>
          </Col>

          {/* Section Services */}
          <Col lg={3} md={6}>
            <h5 className="footer-title">Secteurs</h5>
            <span className="footer-link">Agriculture Bio</span>
            <span className="footer-link">Élevage Sain</span>
            <span className="footer-link">Cosmétique Naturelle</span>
            <span className="footer-link">Santé & Environnement</span>
          </Col>

          {/* Section Contact */}
          <Col lg={3} md={6}>
            <h5 className="footer-title">Contact</h5>
            <div className="footer-contact-item">
              <MapPin size={18} className="text-success" />
              <span>Yaoundé, Cameroun</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="text-success" />
              <span>+237 657 484 766</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="text-success" />
              <span>contact@okandjobio.com</span>
            </div>
            <a href="https://wa.me/237680047554" className="btn btn-outline-light btn-sm mt-3 rounded-pill px-3">
              Support Client <ArrowUpRight size={14} />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="footer-bottom text-center">
          <Row>
            <Col md={12}>
              <p className="mb-0">
                &copy; {currentYear} Okandjo Bio Technology. Tous droits réservés. 
                <span className="mx-2">|</span> 
                Propulsé par Bantu Dev.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
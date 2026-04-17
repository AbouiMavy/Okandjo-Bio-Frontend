import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Trees, Dog, ShieldPlus, Sparkles, Microscope, MessageCircle, ChevronDown, ChevronUp, ShoppingBag, AlertCircle } from "lucide-react";
import "./Home.css";
import { Link } from "react-router-dom";
import Vision from "../../components/Vision";

const SECTORS = [
  { 
    icon: <Trees size={32}/>, 
    title: "Agriculture", 
    short: "Optimisation des rendements par la régénération des sols.",
    long: "Nous développons des engrais organiques et des biostimulants qui restaurent la biodiversité microbienne des terres épuisées, garantissant une récolte abondante sans pesticides."
  },
  { 
    icon: <Dog size={32}/>, 
    title: "Élevage", 
    short: "Solutions nutritionnelles bio pour une croissance saine.",
    long: "Nos additifs alimentaires naturels renforcent le système immunitaire du bétail et de la volaille, réduisant drastiquement le besoin d'antibiotiques de synthèse."
  },
  { 
    icon: <ShieldPlus size={32}/>, 
    title: "Environnement", 
    short: "Technologies d'assainissement biologique et durable.",
    long: "Traitement des eaux usées et des sols pollués via des micro-organismes spécifiques capables de décomposer les déchets industriels et ménagers proprement."
  },
  { 
    icon: <Sparkles size={32}/>, 
    title: "Cosmétique", 
    short: "Transformation d'extraits naturels en soins de haute qualité.",
    long: "Valorisation de la flore locale pour créer des huiles, beurres et sérums bio, respectant l'équilibre de la peau tout en préservant l'environnement."
  },
  { 
    icon: <Microscope size={32}/>, 
    title: "Santé", 
    short: "Le pouvoir des principes actifs biologiques.",
    long: "Recherche et développement de compléments alimentaires issus de la transformation biologique pour soutenir le bien-être quotidien et la vitalité naturelle."
  }
];

const SectorCard = ({ sector }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout className="sector-card-expandable shadow-sm mb-4" onClick={() => setIsOpen(!isOpen)}>
      <motion.div layout="position" className="text-success mb-3">{sector.icon}</motion.div>
      <motion.h4 layout="position" className="fw-bold h5">{sector.title}</motion.h4>
      <motion.p layout="position" className="text-muted small">{sector.short}</motion.p>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-3 pt-3 border-top">
            <p className="small text-dark" style={{ lineHeight: '1.6' }}>{sector.long}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button className="btn-read-more">
        {isOpen ? "Réduire" : "Lire plus"} {isOpen ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
      </button>
    </motion.div>
  );
};

export default function Home() {
  const whatsappNumber = "237657484766";

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <section className="hero-visual w-100 py-4">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* LOGO DANS UN CERCLE */}
            <motion.div
              className="logo-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <img src="/logo.jpg" alt="Okandjo Logo" className="logo-img" />
            </motion.div>

            <span className="brand-badge mb-3">Okandjo Bio Technology</span>

            <h1 className="hero-title-clean">
              L'excellence de la <br />
              <span>transformation biologique</span>
            </h1>

            <p
              className="mx-auto mt-4"
              style={{ maxWidth: "750px", opacity: 0.9 }}
            >
              Solutions durables pour l'agriculture, l'élevage, l'environnement,
              la cosmétique et la santé.
            </p>

            {/* DRAPEAU CENTRÉ ET RÉDUIT */}
            <div className="d-flex justify-content-center align-items-center  mb-4">
              <div
                style={{
                  width: "24px",
                  height: "16px",
                  borderRadius: "2px",
                  overflow: "hidden",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                  display: "flex",
                }}
              >
                <div style={{ flex: 1, backgroundColor: "#007A5E" }}></div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#CE1126",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ color: "#FCD116", fontSize: "6px" }}>★</div>
                </div>
                <div style={{ flex: 1, backgroundColor: "#FCD116" }}></div>
              </div>
            </div>

            {/* DOUBLE BOUTON */}
            <div className="btn-group-hero">
              <a href={`https://wa.me/${whatsappNumber}`} className="btn-main">
                CONSULTER UN EXPERT <MessageCircle size={18} className="ms-2" />
              </a>
              <Link
                to="/home/assistance"
                className="btn-secondary-outline text-decoration-none"
              >
                J'AI UN PROBLÈME <AlertCircle size={18} className="ms-2" />
              </Link>
              <Link
                to="/home/produits"
                className="btn-secondary-outline text-decoration-none"
              >
                NOS PRODUITS <ShoppingBag size={18} className="ms-2" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Voilà */}
      <Vision />
      {/* SECTEURS D'ACTIVITÉ (Centré sur PC) */}
      <section id="secteurs" className="py-5">
        <Container style={{ maxWidth: "1100px" }}>
          <div className="text-center my-5">
            <h2 className="fw-bold">Nos Domaines d'Intervention</h2>
            <div
              style={{
                width: "50px",
                height: "3px",
                background: "var(--light-green)",
                margin: "15px auto",
              }}
            ></div>
          </div>

          <Row className="g-4">
            {SECTORS.map((s, i) => (
              <Col lg={6} key={i}>
                <SectorCard sector={s} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
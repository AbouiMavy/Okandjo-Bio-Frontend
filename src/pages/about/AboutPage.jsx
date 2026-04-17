import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Microscope, BarChart } from 'lucide-react';

const AboutPage = () => {
  const theme = {
    primary: "#1A3557", // Bleu Nuit
    accent: "#2DB87A",  // Vert Jade
    white: "#FFFFFF",
    bgLight: "#FBFBFB",
    textMuted: "#64748B"
  };

  const values = [
    { icon: ShieldCheck, title: "Intégrité", desc: "Transparence · Éthique · Responsabilité" },
    { icon: Zap, title: "Innovation", desc: "IA · Meilleures pratiques · Agilité" },
    { icon: Microscope, title: "Rigueur", desc: "Données fiables · Méthodes éprouvées" },
    { icon: BarChart, title: "Impact", desc: "Résultats concrets · Valeur ajoutée" }
  ];

  const team = [
    { role: "CEO", name: "Marc Roméo B.", initials: "MRB" },
    { role: "CFO", name: "Nom du Directeur", initials: "CFO" },
    { role: "R&D", name: "Direction Recherche", initials: "R&D" },
    { role: "EXP", name: "Équipe Experts", initials: "EXP" }
  ];

  return (
    <div style={{ backgroundColor: theme.white }}>
      
      {/* --- HERO SECTION (BLEU NUIT) --- */}
      <section style={{ backgroundColor: theme.primary, paddingTop: "35px", paddingBottom: "120px", color: "white" }}>
        <Container>
          <Row>
            <Col lg={9}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span style={{ color: theme.accent, textTransform: "uppercase", letterSpacing: "5px", fontSize: "0.8rem", fontWeight: 800 }}>
                  Qui sommes-nous ?
                </span>
                <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "3rem", marginTop: "20px", lineHeight: 1.1 }}>
                  Un cabinet <span style={{ fontStyle: "italic", color: theme.accent }}>hybride</span> au carrefour de <span style={{ fontStyle: "italic", color: theme.accent }}>L'expertise</span> humaine et de <span style={{ fontStyle: "italic", color: theme.accent }}>L'intelligence</span> artificielle.
                </h1>
                
                <div className="d-flex gap-4 mt-5">
                  <button style={{ backgroundColor: theme.accent, color: "white", border: "none", padding: "18px 35px", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "1px", textTransform: "uppercase" }}>
                    Discutons de votre projet
                  </button>
                  <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.2)", padding: "18px 35px", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "1px", textTransform: "uppercase" }}>
                    Découvrir nos services
                  </button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- HISTOIRE & POSITIONNEMENT --- */}
      <section style={{ padding: "100px 0" }}>
        <Container>
          <Row className="gy-5">
            <Col lg={5}>
              <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2.5rem", color: theme.primary }}>
                Notre Histoire & <br /> <span style={{ color: theme.accent }}>Positionnement</span>
              </h2>
              <div style={{ width: "60px", height: "4px", backgroundColor: theme.accent, marginTop: "20px" }} />
            </Col>
            <Col lg={7}>
              <div style={{ paddingLeft: "40px", borderLeft: "1px solid #EEE" }}>
                <h4 style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "0.9rem", color: theme.primary, letterSpacing: "2px", marginBottom: "20px" }}>
                  CORTEXIA CONSULTING
                </h4>
                <p style={{ fontSize: "1.1rem", color: theme.primary, lineHeight: "1.8", opacity: 0.9 }}>
                  Cabinet pluridisciplinaire spécialisé dans les études socio-économiques, le consulting IT et la formation professionnelle. 
                  Notre approche unique combine intelligence humaine et IA pour des résultats mesurables.
                </p>
                <div className="mt-5 d-flex flex-column gap-2" style={{ fontSize: "0.9rem", color: theme.textMuted }}>
                  <span><strong>Siège social :</strong> Yaoundé, Cameroun</span>
                  <span><strong>Zone d'intervention :</strong> Afrique centrale & sous-régionale</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- VISION & MISSION (GRILLE PRAGMATIQUE) --- */}
      <section style={{ padding: "80px 0", backgroundColor: theme.bgLight }}>
        <Container>
          <Row className="g-0 border border-dark border-opacity-10">
            <Col md={6} className="border-end border-dark border-opacity-10 p-5">
              <span style={{ color: theme.accent, fontWeight: 800, fontSize: "0.7rem", textTransform: "uppercase" }}>Perspective</span>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2rem", marginTop: "15px", color: theme.primary }}>Notre Vision</h3>
              <p style={{ marginTop: "20px", color: theme.primary, opacity: 0.8, lineHeight: "1.7" }}>
                Être le partenaire stratégique de référence pour les organisations engagées dans la transformation en Afrique centrale.
              </p>
            </Col>
            <Col md={6} className="p-5">
              <span style={{ color: theme.accent, fontWeight: 800, fontSize: "0.7rem", textTransform: "uppercase" }}>Engagement</span>
              <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2rem", marginTop: "15px", color: theme.primary }}>Notre Mission</h3>
              <p style={{ marginTop: "20px", color: theme.primary, opacity: 0.8, lineHeight: "1.7" }}>
                Réaliser des études rigoureuses · Accompagner la transformation digitale · Concevoir des solutions durables · Promouvoir l'innovation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- NOS VALEURS --- */}
      <section style={{ padding: "100px 0" }}>
        <Container>
          <div className="text-center mb-5 pb-4">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2.5rem", color: theme.primary }}>Nos Valeurs</h2>
          </div>
          <Row>
            {values.map((val, i) => (
              <Col md={3} key={i} className="text-center px-4">
                <div style={{ color: theme.accent, marginBottom: "20px" }}>
                  <val.icon size={40} strokeWidth={1.5} />
                </div>
                <h5 style={{ fontWeight: 800, color: theme.primary, marginBottom: "10px" }}>{val.title}</h5>
                <p style={{ fontSize: "0.85rem", color: theme.textMuted }}>{val.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* --- TEAM SECTION (MINIMALISTE) --- */}
      <section style={{ padding: "100px 0", backgroundColor: theme.primary, color: "white" }}>
        <Container>
          <div className="mb-5">
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2.5rem" }}>Le Directoire</h2>
          </div>
          <Row className="g-4">
            {team.map((member, i) => (
              <Col lg={3} md={6} key={i}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "40px 30px", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: theme.accent, marginBottom: "20px", opacity: 0.5 }}>
                    {member.initials}
                  </div>
                  <h5 style={{ fontWeight: 700, marginBottom: "5px" }}>{member.name}</h5>
                  <p style={{ color: theme.accent, fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 600, letterSpacing: "1px" }}>
                    {member.role}
                  </p>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", opacity: 0.6 }}>
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default AboutPage;
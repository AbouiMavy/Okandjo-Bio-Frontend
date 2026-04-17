import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, FileText, ShieldCheck, HelpCircle } from 'lucide-react';

const QuoteRequestPage = () => {
  const theme = {
    primary: "#1A3557", // Bleu Nuit
    accent: "#2DB87A",  // Vert Jade
    white: "#FFFFFF",
    bgLight: "#F8F9FA",
    border: "#E2E8F0"
  };

  const inputStyle = {
    borderRadius: "0px",
    border: `1px solid ${theme.border}`,
    padding: "15px 20px",
    fontSize: "0.9rem",
    color: theme.primary,
    backgroundColor: "white",
    outline: "none",
    width: "100%",
    marginBottom: "20px",
    transition: "border-color 0.3s"
  };

  return (
    <div style={{ backgroundColor: theme.white, minHeight: "100vh" }}>
      
      {/* --- HERO SECTION --- */}
      <section style={{ backgroundColor: theme.primary, paddingTop: "140px", paddingBottom: "80px", color: "white" }}>
        <Container>
          <Row className="align-items-end">
            <Col lg={7}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <FileText size={20} color={theme.accent} />
                  <span style={{ color: theme.accent, textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.75rem", fontWeight: 800 }}>
                    Qualification de projet
                  </span>
                </div>
                <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "3.5rem", lineHeight: 1 }}>
                  Demander un <span style={{ color: theme.accent, fontStyle: "italic" }}>Devis</span>.
                </h1>
                <p style={{ fontSize: "1.1rem", opacity: 0.6, marginTop: "20px", maxWidth: "500px" }}>
                  Remplissez ce formulaire pour recevoir une proposition technique et financière adaptée à vos enjeux.
                </p>
              </motion.div>
            </Col>
            <Col lg={5} className="d-none d-lg-block text-end">
                <div style={{ display: "inline-block", textAlign: "left", padding: "20px", borderLeft: `1px solid ${theme.accent}` }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 800, color: theme.accent }}>DÉLAI DE RÉPONSE</div>
                    <div style={{ fontSize: "1.5rem", fontFamily: "'Bodoni Moda', serif" }}>24h à 48h ouvrables</div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- FORM SECTION --- */}
      <section style={{ padding: "80px 0", backgroundColor: theme.bgLight }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ backgroundColor: "white", padding: "60px", boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}
              >
                <Form>
                  <h4 style={{ fontWeight: 800, fontSize: "0.9rem", color: theme.primary, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "30px", borderBottom: `2px solid ${theme.accent}`, display: "inline-block" }}>
                    Informations Générales
                  </h4>
                  
                  <Row>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>NOM COMPLET *</label>
                      <input type="text" placeholder="Ex: Marc Bihina" style={inputStyle} required />
                    </Col>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>ORGANISATION *</label>
                      <input type="text" placeholder="Nom de l'entreprise / ONG" style={inputStyle} required />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>TYPE D'ORGANISATION</label>
                      <select style={inputStyle}>
                        <option>PME / Entreprise</option>
                        <option>Institution Publique</option>
                        <option>ONG / Association</option>
                        <option>Particulier</option>
                      </select>
                    </Col>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>SERVICE RECHERCHÉ</label>
                      <select style={inputStyle}>
                        <option>Études Socio-économiques</option>
                        <option>IT & Consulting Digital</option>
                        <option>Formation Professionnelle</option>
                        <option>Autre prestation</option>
                      </select>
                    </Col>
                  </Row>

                  <h4 style={{ fontWeight: 800, fontSize: "0.9rem", color: theme.primary, textTransform: "uppercase", letterSpacing: "2px", marginTop: "40px", marginBottom: "30px", borderBottom: `2px solid ${theme.accent}`, display: "inline-block" }}>
                    Détails Techniques
                  </h4>

                  <Row>
                    <Col md={12}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>DESCRIPTION DU BESOIN</label>
                      <textarea placeholder="Décrivez votre projet, vos objectifs et vos contraintes..." style={{ ...inputStyle, minHeight: "150px" }} />
                    </Col>
                    <Col md={12}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>BUDGET ESTIMATIF (FCFA / EUR)</label>
                      <input type="text" placeholder="Ex: 5 000 000 FCFA" style={inputStyle} />
                    </Col>
                  </Row>

                  <h4 style={{ fontWeight: 800, fontSize: "0.9rem", color: theme.primary, textTransform: "uppercase", letterSpacing: "2px", marginTop: "40px", marginBottom: "30px", borderBottom: `2px solid ${theme.accent}`, display: "inline-block" }}>
                    Coordonnées Directes
                  </h4>

                  <Row>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>EMAIL PROFESSIONNEL *</label>
                      <input type="email" placeholder="contact@organisation.com" style={inputStyle} required />
                    </Col>
                    <Col md={6}>
                      <label style={{ fontSize: "0.75rem", fontWeight: 800, marginBottom: "8px", display: "block" }}>TÉLÉPHONE / WHATSAPP *</label>
                      <input type="tel" placeholder="+237 6XX XXX XXX" style={inputStyle} required />
                    </Col>
                  </Row>

                  <div className="mt-5 text-center">
                    <button style={{ 
                      backgroundColor: theme.primary, 
                      color: "white", 
                      border: "none", 
                      padding: "20px 60px", 
                      fontWeight: 800, 
                      fontSize: "0.8rem", 
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      margin: "0 auto",
                      transition: "all 0.3s"
                    }}>
                      Envoyer ma demande <Send size={16} color={theme.accent} />
                    </button>
                    <p style={{ marginTop: "20px", fontSize: "0.7rem", color: "#94A3B8" }}>
                      <ShieldCheck size={12} /> Vos données sont traitées en toute confidentialité selon les normes RGPD.
                    </p>
                  </div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- FAQ MINI SECTION --- */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <HelpCircle size={30} color={theme.accent} className="mb-3" />
              <h5 style={{ fontWeight: 800, color: theme.primary }}>Besoin d'aide ?</h5>
              <p className="text-muted">Vous n'êtes pas sûr du service à choisir ? <a href="#" style={{ color: theme.accent, fontWeight: 700 }}>Contactez-nous directement.</a></p>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default QuoteRequestPage;
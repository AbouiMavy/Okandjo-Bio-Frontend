import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Send, ArrowRight } from "lucide-react";
import "./AssistanceTech.css";

export default function AssistancePage() {
  const [formData, setFormData] = useState({ category: "Agriculture", problem: "" });
  const whatsappNumber = "237657484766";

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const text = `*DIAGNOSTIC TECHNIQUE*%0A*Secteur:* ${formData.category}%0A*Problème:* ${formData.problem}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-light min-vh-100">
      {/* HERO : Fond sombre pour la visibilité du Logo blanc */}
      <section className="assistance-hero">
        <Container>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="support-badge">Centre de Diagnostic</span>
            <h1 className="display-4 fw-bold mt-3">Analyse & Solutions <br/> <span style={{color: 'var(--bio-green)'}}>Biologiques</span></h1>
          </motion.div>
        </Container>
      </section>

      {/* SECTION FORMULAIRE */}
      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="form-container-tech"
            >
              <Row className="mb-5 align-items-center">
                <Col md={1}>
                  <ShieldAlert size={40} className="text-success" />
                </Col>
                <Col md={11}>
                  <h4 className="fw-bold m-0 ms-2">Formulaire de Maintenance Bio</h4>
                  <p className="text-muted ms-2 small m-0">Décrivez votre pathologie ou dysfonctionnement pour une intervention rapide.</p>
                </Col>
              </Row>

              <Form onSubmit={sendToWhatsApp}>
                <Row>
                  <Col md={12} className="mb-4">
                    <Form.Label className="small fw-bold text-uppercase opacity-50">Secteur d'activité</Form.Label>
                    <Form.Select 
                      className="tech-input"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option>Agriculture (Cultures & Sols)</option>
                      <option>Élevage (Santé Animale)</option>
                      <option>Environnement (Eaux & Déchets)</option>
                      <option>Cosmétique (Formulation)</option>
                    </Form.Select>
                  </Col>

                  <Col md={12} className="mb-5">
                    <Form.Label className="small fw-bold text-uppercase opacity-50">Description détaillée</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={6} 
                      className="tech-input"
                      placeholder="Quels sont les symptômes observés ?"
                      required
                      value={formData.problem}
                      onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    />
                  </Col>

                  <Col md={12}>
                    <button type="submit" className="btn-tech-submit w-100 d-flex align-items-center justify-content-center gap-3">
                      Lancer le diagnostic via WhatsApp <ArrowRight size={20} />
                    </button>
                    <p className="text-center mt-4 small text-muted">
                      <Activity size={14} className="me-2 text-success" /> 
                      Une analyse préliminaire sera effectuée par nos ingénieurs sous 24h.
                    </p>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
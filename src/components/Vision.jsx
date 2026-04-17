import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { RefreshCw, Zap, Heart, Leaf } from "lucide-react";
import "./Vision.css";

export default function VisionEco() {
  return (
    <section id="vision" className="vision-eco-section">
      <Container>
        <div className="vision-main-card shadow-lg">
          <div className="eco-circle-decoration"></div>
          
          <Row className="align-items-center">
            {/* Colonne Gauche : Titre et Slogan */}
            <Col lg={5} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="vision-accent-text">Notre Manifeste</div>
                <h2 className="display-4 fw-bold mb-4">
                  Rien ne se perd, <br />
                  <span style={{ color: 'var(--light-green)' }}>Tout se transforme.</span>
                </h2>
                <p className="opacity-75">
                  Nous ne créons pas seulement des produits, nous concevons des cycles de vie. 
                  Chaque solution biologique Okandjo est pensée pour nourrir le maillon suivant de la chaîne.
                </p>
              </motion.div>
            </Col>

            {/* Colonne Droite : Les 3 Piliers du Cycle */}
            <Col lg={{ span: 6, offset: 1 }}>
              <div className="features-container">
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="vision-feature-item"
                >
                  <div className="icon-box-circle"><RefreshCw /></div>
                  <div>
                    <h4 className="fw-bold">Économie Circulaire</h4>
                    <p className="small opacity-70">Transformer les sous-produits organiques en intrants de haute valeur pour l'agriculture et l'élevage.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="vision-feature-item"
                >
                  <div className="icon-box-circle"><Zap /></div>
                  <div>
                    <h4 className="fw-bold">Performance Durable</h4>
                    <p className="small opacity-70">Prouver que le biologique surpasse le chimique en termes de rendement et de rentabilité à long terme.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="vision-feature-item"
                >
                  <div className="icon-box-circle"><Heart /></div>
                  <div>
                    <h4 className="fw-bold">Santé Holistique</h4>
                    <p className="small opacity-70">Garantir la sécurité alimentaire et le bien-être humain par la pureté de la source.</p>
                  </div>
                </motion.div>

              </div>
            </Col>
          </Row>
        </div>

        {/* Petit rappel de marque discret en dessous */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Leaf size={20} color="var(--light-green)" />
            <span className="fw-bold text-uppercase letter-spacing-2" style={{fontSize: '0.7rem'}}>
              Propulsé par la Biotechnologie Camerounaise
            </span>
            <Leaf size={20} color="var(--light-green)" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
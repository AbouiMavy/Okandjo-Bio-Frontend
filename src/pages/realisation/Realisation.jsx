import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Filter,
  Database,
  Monitor,
  GraduationCap,
  Layers,
} from "lucide-react";

const RealisationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("Tous les projets");

  const theme = {
    primary: "#1A3557", // Bleu Nuit
    accent: "#2DB87A", // Vert Jade
    white: "#FFFFFF",
    bgLight: "#F8F9FA",
    border: "rgba(26, 53, 87, 0.1)",
  };

  const categories = [
    { name: "Tous les projets", icon: Layers },
    { name: "Études socio-économiques", icon: Database },
    { name: "IT & Digital", icon: Monitor },
    { name: "Formation", icon: GraduationCap },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "Études socio-économiques",
      title: "Diagnostic économique — Secteur agricole",
      client: "ONG Internationale · Cameroun · 2024",
      desc: "Diagnostic des filières agricoles dans 3 régions, identification des blocages et recommandations stratégiques pour 12 000 producteurs.",
      stats: [
        { label: "Bénéficiaires", value: "12 000" },
        { label: "Régions", value: "3" },
        { label: "Impact Proj.", value: "+40%" },
      ],
    },
    {
      id: 2,
      category: "IT & Digital",
      title: "Transformation digitale — PME manufacturière",
      client: "Client confidentiel · Douala · 2023",
      desc: "Audit SI, migration cloud, déploiement ERP sur-mesure et formation des équipes. Résultat : gain de productivité significatif en 6 mois.",
      stats: [
        { label: "Déploiement", value: "6 mois" },
        { label: "Users formés", value: "50" },
        { label: "Coûts SI", value: "-30%" },
      ],
    },
    // Les doublons peuvent être ajoutés ici si nécessaire
  ];

  const filteredProjects =
    activeFilter === "Tous les projets"
      ? caseStudies
      : caseStudies.filter((p) => p.category === activeFilter);

  return (
    <div style={{ backgroundColor: theme.white, minHeight: "100vh" }}>
      {/* --- HERO SECTION --- */}
      <section
        style={{
          backgroundColor: theme.primary,
          paddingTop: "50px",
          paddingBottom: "80px",
          color: "white",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "4.5rem",
                    lineHeight: 1,
                  }}
                >
                  Nos{" "}
                  <span style={{ color: theme.accent, fontStyle: "italic" }}>
                    Réalisations
                  </span>
                  .
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    marginTop: "20px",
                    maxWidth: "600px",
                  }}
                >
                  Études de cas concrètes · Résultats mesurables · Clients
                  satisfaits.
                </p>
                <div className="d-flex gap-3 mt-5">
                  <button
                    style={{
                      backgroundColor: theme.accent,
                      color: "white",
                      border: "none",
                      padding: "18px 35px",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Discutons de votre projet
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "18px 35px",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Nos Services
                  </button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- FILTER BAR --- */}
      <style>{`
              .hide-scroll::-webkit-scrollbar { display: none; }
              .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

      <div
        style={{
          borderBottom: `1px solid ${theme.border}`,
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
        }}
      >
        <Container>
          <div className="hide-scroll d-flex justify-content-start gap-5 py-4 overflow-auto">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(cat.name)}
                style={{
                  background: "none",
                  border: "none",
                  whiteSpace: "nowrap",
                  color:
                    activeFilter === cat.name ? theme.accent : theme.primary,
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  position: "relative",
                  transition: "0.3s",
                }}
              >
                {cat.name}
                {activeFilter === cat.name && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: 0,
                      right: 0,
                      height: "3px",
                      backgroundColor: theme.accent,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* --- CASE STUDIES GRID --- */}
      <section style={{ padding: "80px 0", backgroundColor: theme.bgLight }}>
        <Container>
          <Row className="g-4">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <Col lg={6} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    style={{
                      backgroundColor: "white",
                      border: `1px solid ${theme.border}`,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Header Carte */}
                    <div style={{ padding: "40px 40px 20px 40px" }}>
                      <span
                        style={{
                          color: theme.accent,
                          fontSize: "0.65rem",
                          fontWeight: 900,
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          display: "block",
                          marginBottom: "15px",
                        }}
                      >
                        // {project.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Bodoni Moda', serif",
                          fontSize: "1.8rem",
                          color: theme.primary,
                          marginBottom: "10px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: theme.accent,
                          fontWeight: 600,
                          marginBottom: "25px",
                        }}
                      >
                        {project.client}
                      </p>
                      <p
                        style={{
                          color: theme.primary,
                          opacity: 0.8,
                          fontSize: "0.95rem",
                          lineHeight: "1.7",
                        }}
                      >
                        {project.desc}
                      </p>
                    </div>

                    {/* KPI Section */}
                    <div
                      style={{
                        marginTop: "auto",
                        padding: "30px 40px",
                        backgroundColor: theme.primary,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div
                            style={{
                              color: theme.accent,
                              fontSize: "1.2rem",
                              fontWeight: 800,
                            }}
                          >
                            {stat.value}
                          </div>
                          <div
                            style={{
                              color: "white",
                              fontSize: "0.6rem",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              opacity: 0.6,
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Action */}
                    <button
                      style={{
                        width: "100%",
                        padding: "20px",
                        border: "none",
                        backgroundColor: "white",
                        color: theme.primary,
                        fontWeight: 800,
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        borderTop: `1px solid ${theme.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = theme.bgLight)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "white")
                      }
                    >
                      VOIR L'ÉTUDE DE CAS{" "}
                      <ArrowRight size={16} color={theme.accent} />
                    </button>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RealisationsPage;

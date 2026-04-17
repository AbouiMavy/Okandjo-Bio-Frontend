import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User, Calendar, BookOpen } from 'lucide-react';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const theme = {
    primary: "#1A3557",
    accent: "#2DB87A",
    white: "#FFFFFF",
    bgLight: "#FBFBFB",
    border: "rgba(26, 53, 87, 0.08)"
  };

  const categories = ['Tous', 'Études & Analyses', 'Transformation digitale', 'Formation & Carrières', 'Vie du cabinet'];

  const articles = [
    {
      id: 1,
      category: 'Études & Analyses',
      title: "Les enjeux socio-économiques du secteur agricole au Cameroun en 2025",
      author: "Marc Roméo BIHINA AKOUMOU",
      date: "15 mars 2025",
      readTime: "8 min",
      excerpt: "Face aux défis du changement climatique et des nouvelles exigences de marché, le secteur agricole camerounais connaît une transformation profonde...",
      image: "https://images.unsplash.com/photo-1594488687399-5b32f8c21400?auto=format&fit=crop&q=80&w=800" // Placeholder architectural
    },
    {
      id: 2,
      category: 'Transformation digitale',
      title: "Intelligence artificielle en Afrique centrale : opportunités et défis pour les entreprises",
      author: "L'équipe Cortexia",
      date: "2 mars 2025",
      readTime: "6 min",
      excerpt: "L'IA transforme les modèles d'affaires à l'échelle mondiale. Pour les entreprises d'Afrique centrale, cela représente à la fois une opportunité...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = activeFilter === 'Tous' 
    ? articles 
    : articles.filter(a => a.category === activeFilter);

  return (
    <div style={{ backgroundColor: theme.white, minHeight: "100vh" }}>
      
      {/* --- HERO SECTION (STYLE INSTITUTIONNEL) --- */}
      <section style={{ backgroundColor: theme.primary, paddingTop: "30px", paddingBottom: "60px", color: "white" }}>
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="d-flex align-items-center gap-3 mb-4">
              {/* <div style={{ width: "40px", height: "1px", backgroundColor: theme.accent }}></div> */}
              <span style={{ color: theme.accent, textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.75rem", fontWeight: 800 }}>
                Pensée Stratégique
              </span>
            </div>
            <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "4.5rem", lineHeight: 0.9 }}>
              Blog &  <span style={{ color: theme.accent, fontStyle: "italic" }}>Actualités</span>
            </h1>
            <p style={{ fontSize: "1.1rem", opacity: 0.6, marginTop: "30px", maxWidth: "500px" }}>
              Analyses · Tendances · Vie du cabinet
            </p>
          </motion.div>
        </Container>
      </section>

      {/* --- FILTRES (NAVIGATION ÉPURÉE) --- */}
      <div style={{ borderBottom: `1px solid ${theme.border}`, position: "sticky", top: 0, backgroundColor: "white", zIndex: 100 }}>
        <Container>
          <div className="d-flex gap-4 py-4 overflow-auto scrollbar-hide no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: "none",
                  border: "none",
                  whiteSpace: "nowrap",
                  color: activeFilter === cat ? theme.accent : theme.primary,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  paddingBottom: "5px",
                  borderBottom: activeFilter === cat ? `2px solid ${theme.accent}` : "2px solid transparent",
                  transition: "0.3s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* --- ARTICLES GRID --- */}
      <section style={{ padding: "80px 0", backgroundColor: theme.bgLight }}>
        <Container>
          <Row className="gy-5">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <Col lg={12} key={article.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ backgroundColor: "white", overflow: "hidden" }}
                  >
                    <Row className="g-0 border border-light">
                      <Col md={4}>
                        <div style={{ height: "100%", minHeight: "300px", position: "relative" }}>
                          <img 
                            src={article.image} 
                            alt={article.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }}
                            onMouseOver={e => e.currentTarget.style.filter = "grayscale(0%)"}
                            onMouseOut={e => e.currentTarget.style.filter = "grayscale(100%)"}
                          />
                        </div>
                      </Col>
                      <Col md={8}>
                        <div style={{ padding: "50px" }}>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span style={{ color: theme.accent, fontWeight: 800, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px" }}>
                              {article.category}
                            </span>
                            <div className="d-flex gap-3 text-muted" style={{ fontSize: "0.75rem" }}>
                              <span className="d-flex align-items-center gap-1"><Calendar size={14}/> {article.date}</span>
                              <span className="d-flex align-items-center gap-1"><Clock size={14}/> {article.readTime}</span>
                            </div>
                          </div>

                          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2.2rem", color: theme.primary, marginBottom: "20px", lineHeight: 1.2 }}>
                            {article.title}
                          </h2>

                          <p style={{ color: theme.primary, opacity: 0.7, fontSize: "1rem", lineHeight: "1.8", marginBottom: "30px" }}>
                            {article.excerpt}
                          </p>

                          <div className="d-flex justify-content-between align-items-center">
                            <span className="d-flex align-items-center gap-2" style={{ fontSize: "0.85rem", fontWeight: 700, color: theme.primary }}>
                              <User size={16} color={theme.accent} /> {article.author}
                            </span>
                            
                            <button style={{ 
                              background: "none", 
                              border: "none", 
                              color: theme.primary, 
                              fontWeight: 800, 
                              fontSize: "0.75rem", 
                              letterSpacing: "1px",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px"
                            }}>
                              LIRE L'ARTICLE <ArrowRight size={16} color={theme.accent} />
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </Container>
      </section>

      {/* --- NEWSLETTER PRAGMATIQUE --- */}
      {/* <section style={{ padding: "80px 0", borderTop: `1px solid ${theme.border}` }}>
        <Container className="text-center">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <BookOpen size={40} color={theme.accent} className="mb-4" />
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "2rem", color: theme.primary }}>Veille Stratégique</h3>
            <p className="text-muted mb-4">Recevez mensuellement nos analyses socio-économiques et technologiques directement dans votre boîte mail.</p>
            <div className="d-flex border">
              <input 
                type="email" 
                placeholder="Votre email professionnel" 
                style={{ flex: 1, border: "none", padding: "15px 25px", outline: "none" }}
              />
              <button style={{ backgroundColor: theme.primary, color: "white", border: "none", padding: "15px 30px", fontWeight: 700, fontSize: "0.8rem" }}>
                S'ABONNER
              </button>
            </div>
          </div>
        </Container>
      </section> */}

    </div>
  );
};

export default BlogPage;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../supabaseClient"; // Import de ton client Supabase
import "./Products.css";

export default function ProductsPage() {
  const whatsappNumber = "237657484766";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement des données depuis Supabase
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('produits')
          .select('*')
          // .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error("Erreur de récupération:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      {/* HEADER */}
      <section className="assistance-hero">
        <Container>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="support-badge">Marché</span>
            <h1 className="display-4 fw-bold mt-3">
              Nos Produits <br />{" "}
              <span style={{ color: "var(--bio-green)" }}>Biologiques</span>
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* GRILLE DE PRODUITS */}
      <Container className="py-5 my-2">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-3 text-muted">Chargement de nos solutions...</p>
          </div>
        ) : (
          <Row>
            {products.map((p, i) => (
              <Col lg={4} md={6} key={p.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="product-minimal-card"
                >
                  <div className="img-container-sq">
                    {/* On utilise l'URL de Supabase Storage */}
                    <img src={p.image_url} alt={p.nom} />
                  </div>
                  <div className="product-content-minimal">
                    <span className="product-category-tag">{p.categorie}</span>
                    <h3 className="product-name-minimal">{p.nom}</h3>
                    <p className="text-muted small mb-2">
                      {p.description || "Expertise Okandjo Bio Technology pour des résultats mesurables."}
                    </p>
                    <p className="fw-bold text-success mb-4">{p.prix}</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Bonjour, je souhaite plus d'infos sur le produit ${p.nom}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-buy-minimal"
                    >
                      COMMANDER <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </Col>
            ))}

            {products.length === 0 && (
              <Col className="text-center py-5">
                <p className="text-muted">Aucun produit disponible pour le moment.</p>
              </Col>
            )}
          </Row>
        )}
      </Container>

      <footer className="py-5 text-center bg-light">
        <p className="small text-muted mb-0">
          Okandjo Bio Technology — Performance Durable
        </p>
      </footer>
    </div>
  );
}
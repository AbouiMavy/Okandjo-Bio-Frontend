import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Badge, Modal } from 'react-bootstrap';
import { supabase } from '../supabaseClient';
import { Edit3, Trash2, Plus, Save, X, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminUpdatePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // États pour la modification
  const [showEdit, setShowEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // État pour l'ajout
  const [formData, setFormData] = useState({ nom: '', prix: '', description: '', categorie: 'Agriculture' });
  const [file, setFile] = useState(null);

  useEffect(() => { fetchProducts(); }, []);

  async function fetchProducts() {
    setLoading(true);
    const { data } = await supabase.from('produits').select('*').order('created_at', { ascending: false });
    if (data) setProducts(data);
    setLoading(false);
  }

  // --- ACTIONS ---

  const handleAdd = async (e) => {
  e.preventDefault();
  if (!file) return alert("Veuillez choisir une image");

  // Déclenche le spinner et bloque le bouton
  setActionLoading(true);

  try {
    // 1. Upload de l'image
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    // 2. Récupération de l'URL publique
    const { data: url } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    // 3. Insertion dans la base de données
    const { error: insertError } = await supabase
      .from('produits')
      .insert([{ ...formData, image_url: url.publicUrl }]);

    if (insertError) throw insertError;

    // 4. Succès : Reset du formulaire et rafraîchissement
    fetchProducts();
    setFormData({ nom: '', prix: '', description: '', categorie: 'Agriculture' });
    setFile(null); // Ne pas oublier de vider le fichier
    alert("Produit ajouté avec succès !");

  } catch (error) {
    console.error("Erreur détaillée:", error);
    alert("Erreur lors de l'ajout : " + error.message);
  } finally {
    // 5. Arrête le spinner dans tous les cas
    setActionLoading(false);
  }
};

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('produits')
      .update({
        nom: currentProduct.nom,
        prix: currentProduct.prix,
        description: currentProduct.description,
        categorie: currentProduct.categorie
      })
      .eq('id', currentProduct.id);

    if (!error) {
      setShowEdit(false);
      fetchProducts();
    }
  };

  const deleteProd = async (id) => {
    if (window.confirm("Supprimer définitivement ?")) {
      await supabase.from('produits').delete().eq('id', id);
      fetchProducts();
    }
  };

  return (
    <div
      className="pb-5"
      style={{ backgroundColor: "#fbfbfd", minHeight: "100vh" }}
    >
      {/* HERO MINIMALISTE */}
      <section className="assistance-hero mb-5">
        <Container>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="support-badge">Administration</span>
            <h1 className="display-4 fw-bold mt-3">
              Catalogue Okandjo Bio Technology <br />{" "}
              <span style={{ color: "var(--bio-green)" }}>
                Gestion des produits
              </span>
            </h1>
          </motion.div>
        </Container>
      </section>

      <Container>
        <Row className="g-4">
          {/* COLONNE GAUCHE : FORMULAIRE D'AJOUT */}
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-4 shadow-sm border"
            >
              <h5 className="fw-bold mb-4 d-flex align-items-center">
                <Plus size={20} className="me-2 text-success" /> Nouveau Produit
              </h5>
              <Form onSubmit={handleAdd}>
                <Form.Control
                  className="mb-3 border-light bg-light"
                  placeholder="Nom"
                  required
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                />
                <Form.Control
                  className="mb-3 border-light bg-light"
                  placeholder="Prix (ex: 2500 FCFA)"
                  required
                  value={formData.prix}
                  onChange={(e) =>
                    setFormData({ ...formData, prix: e.target.value })
                  }
                />
                <Form.Select
                  className="mb-3 border-light bg-light"
                  onChange={(e) =>
                    setFormData({ ...formData, categorie: e.target.value })
                  }
                >
                  <option>Agriculture</option>
                  <option>Élevage</option>
                  <option>Environnement</option>
                </Form.Select>
                <Form.Control
                  type="file"
                  className="mb-3 border-light bg-light"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="mb-4 border-light bg-light"
                  placeholder="Description..."
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  variant="success"
                  className="w-100 rounded-3 py-2 fw-bold"
                  disabled={actionLoading}
                >
                  {actionLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      CHARGEMENT...
                    </>
                  ) : (
                    "AJOUTER AU STOCK"
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>

          {/* COLONNE DROITE : LISTE & UPDATE */}
          <Col lg={8}>
            <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
              <Table hover responsive borderless className="m-0 align-middle">
                <thead className="bg-light border-bottom">
                  <tr className="text-muted small">
                    <th className="ps-4">PRODUIT</th>
                    <th>CATÉGORIE</th>
                    <th>PRIX</th>
                    <th className="text-end pe-4">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-bottom">
                      <td className="ps-4 py-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={p.image_url}
                            alt=""
                            className="rounded-3 me-3"
                            style={{
                              width: "45px",
                              height: "45px",
                              objectFit: "cover",
                            }}
                          />
                          <span className="fw-bold">{p.nom}</span>
                        </div>
                      </td>
                      <td>
                        <Badge
                          bg="light"
                          className="text-dark border fw-normal"
                        >
                          {p.categorie}
                        </Badge>
                      </td>
                      <td className="text-success fw-bold">{p.prix}</td>
                      <td className="text-end pe-4">
                        <Button
                          variant="link"
                          className="text-primary me-2 p-0"
                          onClick={() => {
                            setCurrentProduct(p);
                            setShowEdit(true);
                          }}
                        >
                          <Edit3 size={18} />
                        </Button>
                        <Button
                          variant="link"
                          className="text-danger p-0"
                          onClick={() => deleteProd(p.id)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MODAL DE MODIFICATION (UPDATE) */}
      <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        centered
        borderless
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Modifier le produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentProduct && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Nom</Form.Label>
                <Form.Control
                  value={currentProduct.nom}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      nom: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Prix</Form.Label>
                <Form.Control
                  value={currentProduct.prix}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      prix: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Catégorie</Form.Label>
                <Form.Select
                  value={currentProduct.categorie}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      categorie: e.target.value,
                    })
                  }
                >
                  <option>Agriculture</option>
                  <option>Élevage</option>
                  <option>Environnement</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={currentProduct.description}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="light" onClick={() => setShowEdit(false)}>
            Annuler
          </Button>
          <Button variant="dark" onClick={handleUpdate}>
            Sauvegarder les changements
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .form-control, .form-select { border-radius: 8px; font-size: 0.9rem; }
        .table thead th { font-weight: 600; letter-spacing: 0.5px; }
        .btn { transition: all 0.2s; }
        .btn:hover { transform: translateY(-1px); }
      `}</style>
    </div>
  );
}
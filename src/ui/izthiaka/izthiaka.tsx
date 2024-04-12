import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./izthiaka.css";

const Izthiaka: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <a onClick={handleImageClick}>
        <img
          src="/izthiaka.png"
          className="izthiaka"
          width={250}
          alt="izthiaka"
        />
      </a>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-class">Hello 😁</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <img src="/izthiaka.png" className="card-img-top" alt="izthiaka" />
            <div className="card-body">
              <h3 className="card-title">Ismaila Thiaka Badji</h3>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="https://github.com/izthiaka"
                  target="_blank"
                  className="btn github-btn"
                >
                  Profil <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/izthiaka"
                  target="_blank"
                  className="btn linkedin-btn"
                >
                  Profil <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/izthiaka"
                  target="_blank"
                  className="btn instagram-btn"
                >
                  Profil <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Izthiaka;

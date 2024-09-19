import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Modal, Button } from 'react-bootstrap';

export default function SiteWeb({ projectCard }) {

    const [modalShow, setModalShow] = useState(false);
    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    return (
        <div className="project-card project-card-light">
            {projectCard.image ? (
                <div className="project-image">
                    <img
                        src={projectCard.image}
                        alt={projectCard.projectName}
                        className="card-image"
                        title={projectCard.projectName}
                    ></img>
                </div>
            ) : null}
            <div className="project-detail">
                <h5 className="card-title">
                    {projectCard.projectName}
                </h5>
                <br></br>
                <p className="card-subtitle">
                    {projectCard.projectDesc}
                </p>
            </div>
            <br />
            <Button variant="btnn" size="sm" onClick={handleShow}>
                More Details Here
            </Button>

            {/* Modal Component */}
            <Modal show={modalShow} onHide={handleClose} size="xl" dialogClassName="modal-dialog-scrollable" animation={Fade}>
                <Modal.Header closeButton>
                    <Modal.Title>{projectCard.projectName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-content-wrapper">
                        <div className="modal-image-section">
                            {projectCard.screenshot ? (
                                <img src={projectCard.screenshot} alt="Product" className="product-image" />
                            ) : null}
                            {projectCard.screenshot2 ? (
                                <img src={projectCard.screenshot2} alt="Product" className="product-image" />
                            ) : null}
                        </div>
                        <div className="modal-details-section">
                            <p>{projectCard.lgDesc}</p>
                            <p><b>Built With:</b> {projectCard.tech}</p>
                            <p><b></b></p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

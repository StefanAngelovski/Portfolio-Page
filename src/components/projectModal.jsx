import React, { Suspense } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProjectModalComponent({ project, isOpen, onClose }) {
    if (!project) return null;

    return (
        <Modal
            show={isOpen}
            onHide={onClose}
            size="lg"
            centered
            scrollable
            dialogClassName="modal-transparent"
        >
            <Modal.Header
                closeButton
                className="border-0 text-white"
                style={{
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '1rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                }}
            >
                <Modal.Title id="projectLabel" style={{ fontFamily: "'Play', sans-serif", fontWeight: 'bold' }}>
                    {project.title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-white" style={{ padding: '1rem' }}>
                <div className="container">
                    {project.CustomComponent && (
                        <Row className="mb-3">
                            <Col>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <project.CustomComponent />
                                </Suspense>
                            </Col>
                        </Row>
                    )}

                    {project.githubLink && (
                        <Row className="mb-3">
                            <Col className="text-center">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View on GitHub
                                </a>
                            </Col>
                        </Row>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
}
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const MarkdownComponents = {
    a: ({ href, children }) => {
        const isVideo =
            (href &&
                (href.endsWith('.mp4') ||
                    href.includes('github.com/user-attachments') ||
                    href.includes('assets/') && (href.endsWith('.mp4') || href.endsWith('.webm') || href.endsWith('.mov'))));
        if (isVideo) {
            return (
                <video controls style={{ width: '100%', maxHeight: '400px', margin: '1em 0' }}>
                    <source src={href} />
                    Your browser does not support the video tag.
                </video>
            );
        }
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    },
    img: ({ src, alt }) => {
        const [isLoaded, setIsLoaded] = useState(false);
        return (
            <img
                src={src}
                alt={alt}
                className={isLoaded ? 'loaded' : ''}
                onLoad={() => setIsLoaded(true)}
            />
        );
    },
};

export default function ProjectModalComponent({ project, isOpen, onClose }) {
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchReadme() {
            if (!project?.repo) return;
            setLoading(true);
            setReadme('');
            try {
                const res = await fetch(`https://raw.githubusercontent.com/${project.repo}/master/README.md`);
                if (res.ok) {
                    const text = await res.text();
                    setReadme(text);
                } else {
                    setReadme('UNDER_DEVELOPMENT');
                }
            } catch {
                setReadme('UNDER_DEVELOPMENT');
            }
            setLoading(false);
        }
        if (isOpen) fetchReadme();
    }, [project, isOpen]);

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

            <Modal.Body className="project-modal-content text-white" style={{ padding: '1rem'}}>
                <div className="container" >
                    {loading ? (
                        <div style={{textAlign: 'center', padding: '2em'}}>
                            <span className="spinner-border text-primary" role="status" aria-hidden="true"></span>
                            <div>Loading README...</div>
                        </div>
                    ) : (
                        <>
                        <Row className="mb-3">
                            <Col>
                                <div className="markdown-content">
                                    {readme === 'UNDER_DEVELOPMENT' ? (
                                        <div style={{textAlign: 'center', fontSize: '1.2em', color: '#ffb347', padding: '2em 0'}}>
                                            This project is currently under development.
                                        </div>
                                    ) : (
                                        <ReactMarkdown 
                                            rehypePlugins={[rehypeRaw]} 
                                            remarkPlugins={[remarkGfm]} 
                                            components={MarkdownComponents}
                                        >
                                            {readme}
                                        </ReactMarkdown>
                                    )}
                                </div>
                            </Col>
                        </Row>
                        {project.githubLink && (
                            <Row className="mb-3">
                                <Col className="text-center">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        View on GitHub
                                    </a>
                                </Col>
                            </Row>
                        )}
                        {project.liveLink && project.liveLink !== '' && (
                            <Row className="mb-3">
                                <Col className="text-center">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-success" style={{ marginLeft: '10px' }}>
                                        View Live Website
                                    </a>
                                </Col>
                            </Row>
                        )}
                        </>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
}
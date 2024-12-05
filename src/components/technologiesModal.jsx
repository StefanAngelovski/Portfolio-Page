import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FaCheck } from 'react-icons/fa';

export default function TechnologiesModal({isOpen, onClose}) {

  const technologies = {
    "Web Development": [
      { name: 'HTML', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/zvv1lmjrlqg8dlpd4xml.svg' },
      { name: 'CSS', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148182/Background%20media/logos/kcsv0rayvd3z3qsnj0j1.svg' },
      { name: 'Bootstrap', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148182/Background%20media/logos/aysjcs6o8wjak67in1zi.svg' },
      { name: 'Django', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/vwviwtiiay3e2bjgxwru.svg' },
      { name: 'React', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/cwmc0kkyxwfvnchrfjbm.svg' },
      { name: 'Springboot', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726783883/Background%20media/logos/bxnfcgag7qkswzcqdqq8.svg' },
      { name: 'JQuery', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726783954/Background%20media/logos/rpymnxkxmpjsobrtz4pu.svg' },
      { name: 'ThreeJS', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784099/Background%20media/logos/uwwsoeofngiic41wuqba.svg' },
    ],
    "Programming Languages": [
      { name: 'C', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148808/Background%20media/logos/escakdsh4mzdxfd4lnny.png' },
      { name: 'C++', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148664/Background%20media/logos/n2ldt82nl9e3vsqeb722.png' },
      { name: 'C#', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784154/Background%20media/logos/igkoz4rzg3hmnvq8a84u.svg' },
      { name: 'Java', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148602/Background%20media/logos/ppi4huc7gyewje11nuwe.svg' },
      { name: 'JavaScript', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/g5w9iyvkzbabfevxe8sy.svg' },
      { name: 'Python', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/ydbszjgfjryctt9jwbwg.svg' },
      {name: 'Rust', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg'},
      { name: 'Mips - Assembly', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726785127/Background%20media/logos/vnqx97hz1vtedostha7z.svg' }
    ],
    "Software Development": [
      { name: 'Windows PowerShell', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784419/Background%20media/logos/zmtbahctxzzvszl2kyof.svg' },
      { name: 'Windows Forms', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784926/Background%20media/logos/rficksfr6dr2lyancfgn.svg' },
      { name: 'Windows WPF', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1733436993/Background%20media/logos/i9nj4p2aziey9scl76qu.png'},
    ],
    "Embedded Systems": [
      {name: 'Arduino', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148182/Background%20media/logos/podctzxm9v8rslrzntuo.svg'},
      {name: 'ESP-IDF', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1732784787/Background%20media/logos/oqfjnp5vr8zrk7ij4vwq.svg'},
      {name: 'STM32Cube', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1733437676/Background%20media/logos/wf0uv2emubxnpogoewwl.svg'},
    ],
    "IDEs Used": [
      { name: 'Arduino IDE', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148182/Background%20media/logos/podctzxm9v8rslrzntuo.svg' },
      { name: 'JetBrains IDEs', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717148181/Background%20media/logos/uixjadj72rx3e6ozlbxd.svg' },
      { name: 'Unity', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1717151590/Background%20media/logos/yufy2xjiuseala5lcywc.svg' },
      { name: 'VS Code', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784699/Background%20media/logos/dm7b1yr3ymcudhw7askk.svg' },
      { name: 'Microsoft Visual Studio', logo: 'https://res.cloudinary.com/dk2fdiuvb/image/upload/v1726784622/Background%20media/logos/fwnna1kdi7czco2wd57b.svg' }
    ],
    "Other Skills": [
      "Knowledge of electronics, computer hardware and architecture, virtual machines, and Github.",
      "Understanding of Android, Linux and Windows operating systems, as well as Microsoft 365 applications.",
      "Experience with UI/UX design using Paint.net."
    ]
  };

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
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
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Modal.Title id="technologiesLabel" style={{ fontFamily: "'Play', sans-serif", fontWeight: 'bold' }}>
          Technologies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-white" style={{ padding: '1rem' }}>
        <div className="container">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-3">{category}</h4>
              {category !== 'Other Skills' ? (
                <Row className="mb-3">
                  {items.map(({ name, logo }, idx) => (
                    <Col key={idx} xs={4} sm={3} md={2} className="mb-3">
                      <div className="d-flex flex-column align-items-center">
                        <Image src={logo} style={{ width: '80px', height: '80px', filter: 'invert(100%)'}} alt={`${name} Logo`} />
                        <h6 className="mt-2 text-center">{name}</h6>
                      </div>
                    </Col>
                  ))}
                </Row>
              ) : (
                <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'white', fontFamily: "'Play', sans-serif" }}>
                  {items.map((skill, idx) => (
                    <li key={idx} className={idx > 0 ? "py-2" : "py-1"}>
                      <FaCheck className="checkMark" />
                      <span style={{ fontSize: '15px', paddingLeft: '15px'}}>{skill}<br /></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}
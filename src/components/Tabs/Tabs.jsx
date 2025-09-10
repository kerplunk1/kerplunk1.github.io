import Nav from 'react-bootstrap/Nav';


export default function Tabs({ activeKey, onSelect }) {
  return (
    <Nav justify variant="underline" activeKey={activeKey} onSelect={onSelect}>
      <Nav.Item>
        <Nav.Link eventKey="about">Обо мне</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="experience">Опыт работы</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contacts">Контакты</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
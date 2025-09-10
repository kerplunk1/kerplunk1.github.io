import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';


const myExp = [
  {
    id: 0,
    period: "Июль, 2024 - настоящее время",
    profession: "Python Junior Developer",
    description: "Разработка микросервисов, API, веб-приложений и т.п.",
  },
  {   
    id: 1,
    period: "Март, 2023 - Июль, 2024",
    profession: "Системный администратор",
    description: "Администрирование серверов и рабочих станций. Автоматизация рабочих процессов."
  },
  {   
    id: 2,
    period: "Апрель, 2019 - Январь, 2023",
    profession: "Специалист техподдержки",
    description: "Консультация пользователей по особенностям функционирования IT продуктов. Настройка ПО, пользовательского окружения. Удаленное подключение, диагностика логов, ошибок, неисправностей."
  }
]


function Experience(props) {
  return (      
    <Accordion.Item key={props.id} eventKey={props.id.toString()}>
      <Accordion.Header>{props.period}</Accordion.Header>
      <Accordion.Body>
        <span><b>{props.profession}</b></span>
        <p>{props.description}</p>
      </Accordion.Body>
    </Accordion.Item>     
  );  
}


export default function ExperienceDetails() {

  const [activeKeys, setActiveKeys] = useState(
    myExp.map(item => item.id.toString())
  );

  return (
    <Accordion alwaysOpen defaultActiveKey={activeKeys} style={{ marginTop: '30px' }}>
      {myExp.map(Experience)}
    </Accordion>
  );
}
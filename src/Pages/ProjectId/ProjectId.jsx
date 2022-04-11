import { useState, useEffect } from "react";
import { ProDetails, Title, ContainerDetails, Btn} from "./ProjectId.element";
import { useParams } from "react-router-dom";
import { Loading, Container } from "../../components";

export default function ProjectId() {
  const [projeto, setProjeto] = useState([]);
  const [showProjetoForm, setShowProjetoForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5500/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => setProjeto(data))
        .catch((erro) => console.log(`ERRO:${erro}`));
    }, 1000);
  }, [id]);

  function toogleProjectForm() {
    setShowProjetoForm(!showProjetoForm);
  }

  return (
    <>
      {projeto.name ? (
          <ProDetails>
            <Container customClass="column">
                <ContainerDetails>                
                    <Title>Projeto: {projeto.name}</Title>
                    <Btn onClick={toogleProjectForm}>
                    {!showProjetoForm ? "Editar Projeto" : "Fechar"}
                    </Btn>
                    {!showProjetoForm ? (
                        <div className="project_info">
                            <p><span>Categoria:</span>{projeto.category.name}</p>
                            <p><span>Valor Disponivel:</span>{projeto.valor}</p>
                            <p><span>Custos:</span>{projeto.cost}</p>
                        </div>
                    ) : (
                        <div>
                            <p>Detalhes do projeto</p>
                        </div>
                    )}
                </ContainerDetails>
            </Container>
          </ProDetails>
      ) : (
        <Loading />
      )}
    </>
  );
}

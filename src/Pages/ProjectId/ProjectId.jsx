import { useState, useEffect } from "react";
import { ProDetails, Title, ContainerDetails, Btn} from "./ProjectId.element";
import { useParams } from "react-router-dom";
import { Loading, Container, Form, Message } from "../../components";

export default function ProjectId() {
  const { id } = useParams();

  const [projeto, setProjeto] = useState([]);
  const [showProjetoForm, setShowProjetoForm] = useState(false);
  const [msg, setMsg] = useState()
  const [type, setType] = useState()

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

  function editPost(projeto){
    //bugdet validation
    if(projeto.valor < projeto.cost){
        setMsg('O Orçamento não pode ser menor que o custo do projeto')
        setType('error')
        return false
    }

    fetch(`http://localhost:5500/projects/${projeto.id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(projeto),
    })
    .then(resp => resp.json())
    .then(data => {
        setProjeto(data)
        setShowProjetoForm(false)//!showProjetoForm
        setMsg('Projeto Atualizado')
        setType('sucess')
    })
    .catch(error => console.log(`Erro: ${error}`))
  }

  return (
    <>
      {projeto.name ? (
          <ProDetails>
            <Container customClass="column">
                {msg && <Message type={type} msg={msg}></Message>}
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
                        <div className="project_info">
                            <Form 
                            handleSubmit={editPost}
                            btnText="Concluir Edição"
                            projectData={projeto}
                            >
                                Detalhes do projeto
                            </Form>
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

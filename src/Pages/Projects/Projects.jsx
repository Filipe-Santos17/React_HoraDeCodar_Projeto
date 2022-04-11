import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import {Message, Container, Linkbutton, ProjectCard, Loading} from "../../components/"
import {ProjectContainer, TitleContainer} from "./Projects.element"

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoad, setRemoveLoad] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5500/projects',{
        method: "GET",
        headers:{
          'Content-Type': 'application/json',
        },
      })
      .then(resp => resp.json()) 
      .then(data => {
        setProjects(data)
        setRemoveLoad(true)
      })
      .catch(erro => console.log(`Erro: ${erro}`))
    }, 300);
  },[])

  function removeProjetos(id){
    fetch(`http://localhost:5500/projects/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then( resp => resp.json())
    .then(data => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage('Projeto Removido com Sucesso!')
    })
    .catch( error => console.log(`Erro: ${error}`))
  }

  const location = useLocation()
  let message = ""
  if(location.state){
    message = location.state.message
  }

  return (
    <ProjectContainer>
      <TitleContainer>
        <h1>Meus Projetos</h1>
        <Linkbutton rout="/newproject" text="Criar Projeto"/>
      </TitleContainer>
      {message && <Message msg={message} type="sucess"/>}
      {projectMessage && <Message msg={message} type="sucess"/>}
      <Container customClass="start">
        {projects.length > 0 && projects.map(
          project => (
            <ProjectCard  
              key={project.id}
              id={project.category.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProjetos}
            />
          ))}
          {!removeLoad && <Loading/>}
          {!removeLoad && projects.length === 0 &&(
            <p>Não há projetos cadastrados</p>
          )}
      </Container>
    </ProjectContainer>
  )
}
 
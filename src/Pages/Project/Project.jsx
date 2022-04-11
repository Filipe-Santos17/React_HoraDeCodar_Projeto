import { useNavigate } from "react-router-dom"
import { Form } from "../../components"
import { ProjectContainer, ProjectContTitle, ProjectContPar } from "./project.element"

export default function Project(){
    
    const navigate = useNavigate(); //Hook do reacte-router-dom para alterar a pagina

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch("http://localhost:5500/projects",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            navigate("/projects", {message: "Projeto criado com sucesso"})
            console.log(data)
        })//redirect
        .catch( err => console.log(`Erro: ${err}`))
    }

    return(
        <ProjectContainer>
            <ProjectContTitle>Criar Projeto</ProjectContTitle>
            <ProjectContPar>Crie seu projeto para depois adicionar os serviços</ProjectContPar>
            <Form handleSubmit={createPost} btnText="Criar Projeto"/>
        </ProjectContainer>
    )
}


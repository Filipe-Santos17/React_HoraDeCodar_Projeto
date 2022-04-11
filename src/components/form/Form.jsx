import { useEffect, useState } from "react"
import Input from "./input/input"
import Selected from "./select/select"
import SubmitButton from "./submit/submitButton"
import {} from "./form.element"

export default function Form({handleSubmit,btnText, projectData}) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => { //Use Effect faz com que a renderização ocorra apenas uma vez
    fetch("http://localhost:5500/categories", {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    }) //Conexão com BackEnd propria do React -- É uma promise
    .then(resp => resp.json()) //pega os dados e transforma em json
    .then(data => {
        setCategories(data)
    }) //coloca os dados em json no hook setCategories
    .catch( err => console.log(`Erro: ${err}`))
  }, [])

  const Submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
    //console.log(project)
  }

  function HandleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
  }

  function HandleCategory(e){
    setProject({...project, category:{
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text, //Algo mais voltado ao MongoDB/NoSQL
    },
  })
  }


  return (
    <form onSubmit={Submit}>
        <Input 
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={HandleChange}
        value={project.name}
        />
        <Input 
        type="number"
        text="Orçamento do Projeto"
        name="bugdet"
        placeholder="Insira o orçamento Total"
        handleOnChange={HandleChange}
        value={project.bugdet}
        />
        <Selected 
        name="category_id" 
        text="Selecione a categoria" 
        options={categories}
        handleOnChange={HandleCategory}
        value={project.category ? project.category.id : ''}
        />
        <SubmitButton text={btnText}/>
    </form>
  )
}

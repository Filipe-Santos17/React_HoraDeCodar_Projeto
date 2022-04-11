import {Card, CardTitle, CardP, Cardtext,Actions, Alink} from "./projectCard.element"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function ProjectCard({id, name, budget, category, handleRemove}) {

    const remove = e => {
        e.preventDefault()
        handleRemove(id)
    }

  return (
    <Card>
        <CardTitle>{name}</CardTitle>
        <CardP>
            <span>Orçamento: </span> R$ {budget}
        </CardP>
        <Cardtext>
            <span className={`${category.toLowerCase()}`}></span> {category}
        </Cardtext>
        <Actions>
            <Alink to={`/projects/${id}`}>
                <p><BsPencil/> Editar</p>
            </Alink>
            <Alink to="/">
                <button onClick={remove}>
                    <BsFillTrashFill/> Remover
                </button>
            </Alink>
        </Actions>
    </Card>
  )
}

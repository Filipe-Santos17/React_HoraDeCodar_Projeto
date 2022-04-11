import logo from "../../img/logo.png"
import {HomeContainer,HomeTitle,Span,Par,Image} from "./home.element"
import {Linkbutton} from "../../components"

export default function Home(){
  return(
    <HomeContainer>
      <HomeTitle>Bem vindo ao <Span>Costs</Span></HomeTitle>
      <Par>Comece a Gerenciar seus projetos agora mesmo!</Par>
      <Linkbutton rout="/newproject" text="Criar Projeto"/>
      <Image src={logo} alt="Costs logo"/>
    </HomeContainer>
  )
}


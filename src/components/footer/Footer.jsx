import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import {Footter,SocialList,SocialItem,CopyRigth,Copy} from "./footer.element"

export default function Footer() {
  return (
    <Footter>
      <SocialList>
        <SocialItem><FaFacebook/></SocialItem>
        <SocialItem><FaInstagram/></SocialItem>
        <SocialItem><FaLinkedin/></SocialItem>
      </SocialList>
      <CopyRigth><Copy>Costs</Copy>&copy;</CopyRigth>
    </Footter>
  )
}

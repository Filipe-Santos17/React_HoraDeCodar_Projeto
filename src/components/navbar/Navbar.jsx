import { Nav, List, Item, LinkA, Logo } from "./navbar.element";

export default function Navbar() {
    return (
        <Nav>
            <LinkA to="/">
                <Logo />
            </LinkA>
            <List>
                <Item>
                    <LinkA to="/">
                        Home
                    </LinkA>
                </Item>
                <Item>
                    <LinkA to="/projects">
                        Projetos
                    </LinkA>
                </Item>
                <Item>
                    <LinkA to="/contact">
                        Contato
                    </LinkA>
                </Item>
                <Item>
                    <LinkA to="/company">
                        Empresa
                    </LinkA>
                </Item>
            </List>
        </Nav >
    )
}

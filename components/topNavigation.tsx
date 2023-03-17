import {Container, Navbar, Text} from "@nextui-org/react"

export default function TopNavigation(){
    return (
        <>
        <Container>
            <Navbar >
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">BJ</Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">interests</Navbar.Link>
                    <Navbar.Link href="#">careerExp</Navbar.Link>
                    <Navbar.Link href="#">acquiredSkills</Navbar.Link>
                    <Navbar.Link isActive href="#">credentials</Navbar.Link>
                    <Navbar.Link href="#">socialLinks</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </Container>
        </>
    )
}
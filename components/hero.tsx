import { Card, Container, Row, Text, useTheme } from "@nextui-org/react";

export default function Hero (){
    const { theme } = useTheme()
    return (
        <>
            <Container>
                <Text style={{ font: theme?.fonts.main }}>
                    BEllie Joe
                </Text>
            </Container>
        </>
    )
}
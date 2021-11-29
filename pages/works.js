import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbfpt from '../public/images/works/fpt.png'
import project1 from '../public/images/contents/calculator.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as = "h3" fontsize = {20} mb = {4}>
                Works
            </Heading>

            <SimpleGrid columns = {[1, 1, 2]} gap = {6}>
                <Section delay = {0.2}>
                    <GridItem id="FPT" title="Student" thumbnail={thumbfpt}>
                        I am a student at FPT University, major in Computer Science and Aritificial Intelligence
                    </GridItem>
                </Section>
            </SimpleGrid>

            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns = {[1, 1, 2]} gap = {6}>
                <Section delay = {0.2}>
                    <GridItem 
                        id="project1" 
                        title="Calculator with Graphic User Interface using Python" 
                        thumbnail={project1} 
                        href = "https://github.com/lehoangan2906/Playground/tree/main/calculator"
                        />
                </Section>
            </SimpleGrid>

        </Container>
        </Layout>
    )
}

export default Works
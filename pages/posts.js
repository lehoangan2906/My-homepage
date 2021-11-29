import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import calculator from '../public/images/contents/calculator.png'
import tortoiseandharepart1 from '../public/images/contents/tortoise.png'
import tortoiseandharepart2 from '../public/images/contents/hare.png'

const Posts = () => (
    <Layout title = "Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb = {4}>
                Popular Posts
            </Heading>

            <Section delay = {0.1}>
                <SimpleGrid columns = {[1, 2, 2]} gap = {6}>
                    <GridItem 
                        title = "GUI caculator using Tkinter" 
                        thumbnail = {calculator} 
                        href = "https://www.facebook.com/photo.php?fbid=530319674950959&set=a.165616874754576&type=3"
                    />
                    <GridItem 
                        title = "Floyd's tortoise and hare algorithm (Part 1)" 
                        thumbnail = {tortoiseandharepart1} 
                        href = "https://www.facebook.com/photo/?fbid=564687858180807&set=a.159717448677852"
                    />
                    <GridItem 
                        title = "Floyd's tortoise and hare algorithm (Part 2)" 
                        thumbnail = {tortoiseandharepart2} 
                        href = "https://www.facebook.com/photo/?fbid=564659111517015&set=a.159717448677852"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, Icon, List, ListItem } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import {SiCodewars} from 'react-icons/si'

const Page = () => {
   return (
	   <Layout> 
      	<Container>
      	<Box borderRadius = "lg" bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p = {3}mb = {6} align = "center">
	   		Hello, I&apos;m a Computer Science student from Vietnam!
		</Box> 

		<Box display = {{md: 'flex'}}>
			<Box flexGrow = {1}>
				<Heading as = "h2" variant = "page-title">
					Edward (An Le) Hoang
				</Heading>
					<p>Someone who loves all things tech ( Learner / Researcher ) </p>
			</Box>
			<Box flexShrink ={0} mt = {{base: 4, md: 0}} ml = {{md: 6}} align = "center">
				<Image borderColor = "whiteAlpha.800" 
				borderWidth = {2} 
				borderStyle = "solid" 
				maxWidth = "100px" 
				display = "inline-block" 
				borderRadius = "full" 
				src = "/images/lehoangan.jpg" 
				alt = "profile image"
				/>
			</Box>
		</Box>

		<Section delay = {0.1}>
			<Heading as = "h3" variant = "section-title">
				Work 
			</Heading>
			<Paragraph>I'm a sophomore and studying for a bachelor's degree in Artificial Intelligence from FPT University. My skills are broad in Python, C++, Java, Data Science and Artificial Intelligence. I am particularly interested in Natural Language Processing and Reinforcement Learning. I am also a competitive programmer who is always curious about data structures and algorithms.</Paragraph>
			<Box align = "center" my = {4}>
				<NextLink href = "/works">
					<Button rightIcon = {<ChevronRightIcon />} colorScheme = "teal">
						My portfolio
					</Button>
				</NextLink>
			</Box>
		</Section>

		<Section delay = {0.2}>
			<Heading as = "h3" variant = "section-title"> 
				Bio 
			</Heading>
			<BioSection>
				<BioYear>2002</BioYear>
				Borned, Thanh Hoa (province), Vietnam.
			</BioSection>
			<BioSection>
				<BioYear>2017</BioYear>
				Student, LeLoi highschool
			</BioSection>
			<BioSection>
				<BioYear>2019</BioYear>
				Aministrator, Toanmath.com
			</BioSection>
			<BioSection>
				<BioYear>2020</BioYear>
				Administrator, Toan nhan biet thong hieu
			</BioSection>
			<BioSection>
				<BioYear>2020</BioYear>
				Graduated from Le Loi highschool
			</BioSection>
			<BioSection>
				<BioYear>2020</BioYear>
				Student, Bachelor of Artificial Intelligence at FPT university (class of 2024)
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				Contestant, ACM ICPC Vietnam National 2021
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				Volunteer,{' '}
				<Link href = "https://vnoi.info/">
					VNOI
				</Link>
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				researcher,{' '}
				<Link href = "https://www.facebook.com/fptunilab">
					FPT SAP Laboratory
				</Link>
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				administrator,{' '}
				<Link href = "https://www.facebook.com/code.mely">
					Code mely
				</Link>
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				Volunteer,{' '}
				<Link href = "https://bedaoteam.github.io/?fbclid=IwAR3_jWcy1xcbmJBhcVjYYEYnMOAjbbSVxYU1Es0d-Qpbq2WM6W9qMwnrL80">
					Bedao contest
				</Link>
			</BioSection>
			<BioSection>
				<BioYear>2022</BioYear>
				Contestant, FPTU Hackathon 2022
			</BioSection>
		</Section>

		<Section delay = {0.3}>
			<Heading as= "h3" variant = "section-title">
				My hobbies
			</Heading>
			<Paragraph>
				Solving rubik, Competitive coding, Photograph, {' '}
				<Link href = "https://www.codewars.com/users/lehoangan2906">
					Coding
				</Link>
				, Machine Learning
			</Paragraph>
		</Section>
		<Section delay = {0.3}>
			<Heading as = "h3" variant = "section-title">
				On the web
			</Heading>
			<List>
				<ListItem>
					<Link href = "https://github.com/lehoangan2906" target = "_blank">
						<Button variant="ghost" colorScheme="teal" leftIcon = {<Icon as = {IoLogoGithub}/>}>@lehoangan2906</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href = "https://www.codewars.com/users/lehoangan2906" target = "_blank">
						<Button variant="ghost" colorScheme="teal" leftIcon = {<Icon as = {SiCodewars}/>}>@lehoangan2906</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href = "https://www.facebook.com/le.hoangan.182940/" target = "_blank">
						<Button variant="ghost" colorScheme="teal" leftIcon = {<Icon as = {IoLogoFacebook}/>}>@lehoangan</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href = "https://www.instagram.com/__lehoangan/" target = "_blank">
						<Button variant="ghost" colorScheme="teal" leftIcon = {<Icon as = {IoLogoInstagram}/>}>@_lehoangan</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href = "https://www.linkedin.com/in/edward-hoang-31bb34220/" target = "_blank">
						<Button variant="ghost" colorScheme="teal" leftIcon = {<Icon as = {IoLogoLinkedin}/>}>@Edward_Hoang</Button>
					</Link>
				</ListItem>
			</List>
		</Section>
    </Container>
	</Layout>
   )
}

export default Page

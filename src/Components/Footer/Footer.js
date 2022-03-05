import React from 'react';
import {
  Flex,
  Text,
  Stack,
  Heading,
  Center,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import Logo from '../Logo';
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container maxW='container.3xl' bg={'white'} alignSelf={'baseline'}>
      <VStack
        mx={'auto'}
        maxW='8xl'
        align={'start'}
        justifyContent={'baseline'}
        spacing={{ base: '4rem', lg: '6rem' }}
      >
        <Flex w={'full'} alignItems={['center', 'center', 'left']}>
          <HStack
            spacing={{ base: '2rem', sm: '4rem', lg: '4rem' }}
            mt={{ base: '2rem', lg: '4rem' }}
            mx={{ base: 'auto', lg: '2rem' }}
            w={'fit-content'}
          >
            <Center w={{ base: '8rem', sm: '10rem', lg: '18rem' }}>
              <Logo />
            </Center>
            {/*<Link to='/register'>
              <Center
                bg={'purple.900'}
                h={{ base: '2.2rem', sm: '3.5rem', lg: '3rem' }}
                w={'7rem'}
                borderRadius={0}
                color={'white'}
                size={{ base: 'md', lg: 'xl' }}
              >
                Apply Now
              </Center>
            </Link>*/}
          </HStack>
        </Flex>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems={'start'}
          mx={'auto'}
          maxW='8xl'
          w={'full'}
          justifyContent={'space-between'}
          spacing={{ base: '3rem', lg: '4rem' }}
        >
          <HStack
            fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}
            spacing={{ base: '2rem', lg: '4rem' }}
            alignItems={'flex-start'}
            maxW={'xl'}
            mx={{ base: 'auto', lg: '0' }}
            w='full'
            justify={'space-evenly'}
          >
            <VStack
              alignItems={'flex-start'}
              fontSize={{ base: 'xs', sm: 'md', lg: 'xl' }}
            >
              <Heading fontSize={{ base: 'xs', sm: 'md', lg: 'xl' }}>
                Explore
              </Heading>
              <Link to='/'>
                <Text>Instructors</Text>
              </Link>
              <Link to='/'>
                <Text>Projects</Text>
              </Link>
              <Link to='/'>
                <Text>Program Overview</Text>
              </Link>
              <Link to='/'>
                <Text>Why Brightigo</Text>
              </Link>
            </VStack>
            <VStack
              alignItems={'flex-start'}
              fontSize={{ base: 'xs', sm: 'md', lg: 'xl' }}
            >
              <Heading fontSize={{ base: 'xs', lg: 'lg' }}>
                Browse Pages
              </Heading>
              <Link to='/home'>
                <Text>Syllabus</Text>
              </Link>
              <Link to='/home'>
                <Text>FAQ</Text>
              </Link>
              <Link to='/home'>
                <Text>Blog</Text>
              </Link>
              <Link to='/home'>
                <Text>Contact Us</Text>
              </Link>
            </VStack>
          </HStack>
          <HStack
            alignSelf={{ base: 'center', lg: 'end' }}
            spacing={{ base: '1rem', lg: '2rem' }}
          >
            <FaYoutube size={24} />
            <FaFacebookF size={24} />
            <FaTwitter size={24} />
            <FaLinkedinIn size={24} />
            <AiFillInstagram size={24} />
          </HStack>
        </Stack>
        <Center w={'full'} pb={'2rem'}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            textAlign='center'
            w={{ base: '20rem', lg: '7xl' }}
            fontSize={{ base: 'xs', lg: 'sm' }}
            mx={'auto'}
            selfAlign='center'
            justifyContent={'space-between'}
          >
            <Text>
              Copyright 2022 Brightigo Private limited. All rights reserved
            </Text>
            <a href='https://demonicirfan.com'>
              <Text as='span' _hover={{ color: 'purple' }}>
                Designed and Developed by Irfan Asif
              </Text>
            </a>
          </Stack>
        </Center>
      </VStack>
    </Container>
  );
};

export default Footer;

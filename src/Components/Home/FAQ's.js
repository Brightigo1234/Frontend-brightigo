import {
  Flex,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const FAQ = () => {
  return (
    <VStack py={'6rem'}>
      <Center py={'2rem'} w={'full'} mb={'1rem'}>
        <Text
          alignSelf={'center'}
          pl={'2rem'}
          fontSize={{ base: '28px', md: '42px', lg: '42px' }}
          fontFamily={'Poppins'}
          fontWeight={'500'}
        >
          Frequently Asked Questions
        </Text>
      </Center>
      <Flex
        w={'full'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'1rem'}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: '2rem', md: '6rem' }}
      >
        <Accordion
          border={'1px solid #44337A'}
          bg='purple.50'
          w={'5xl'}
          defaultIndex={[0]}
          allowMultiple
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  1. Who can take the Brightigo Test?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              Anyone above the age of 18 with access to a webcam-enabled
              Desktop/Laptop and a stable internet connection can take the
              Relevel Test.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  2. Do I need to pay any fees to register for the Brightigo
                  Test?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              The Relevel Test is absolutely free of charge! In fact, you can
              win exciting prizes like MacBooks, iPhones, and Apple Watches by
              landing on our monthly leaderboard.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  3. How do I register for the Brightigo Test?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              Click here to choose your test. Then you'll be taken to a page
              with more details about your test. It is advised that you read
              this information. On the next page, you can choose a test date
              from a list. Select your preferred date, click 'Book Test' and
              you're done! Your exam is set! Last but not least, complete your
              admit card and prepare for the Brightigo Test!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  4. How do I get jobs through Brightigo?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              Once you pass the Brightigo Test by clearing the cutoff score of
              350, we will create your very own Brightigo Profile! After that,
              you can sit tight and wait for companies to invite you for
              interviews. It is that simple!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  5. What if I don’t clear the cutoff?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              In case, you don’t clear the cutoff score of 350, you can always
              book another test
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  6. Introduction to Communication Skills: Personality and
                  Behaviour in product management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0rem', '0.4rem']}>
                  Giving and Receiving Feedback
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Why Emotional Intelligence and Social Intelligence are More
                  Significant than IQ
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Introduction to Human Factors
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Communication and Communication Breakdown
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Elements Of Non-Verbal Communication
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </VStack>
  );
};

export default FAQ;

import React, { useState } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Image, Stack, Flex, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import Data from './data';
import Navbar from './Navbar';
import {useContext} from 'react';
import CartContext from '../CartContext';

export default function Dashboard() {
    const{addToCart} = useContext(CartContext);
  return (
    <>
      <Navbar />
      <Wrap
        margin='auto'
        justify='center'
        spacing='40px'
        p='2'
      >
        {Data.map((item) => (
          <WrapItem key={item.id}>
            <Card
              w='300px'
              h='350px'
              padding='1'
              boxShadow='lg'
              borderRadius='lg'
            >

              <CardBody>
                <Image src={item.image} alt={item.name} borderRadius='lg' />
                <Stack mt='2' spacing='1'>
                  <Flex alignItems='center'>
                    <Heading size='md' mr='3'>
                      {item.name} :&nbsp;
                    </Heading>
                    <Text color='blue.600' fontSize='2xl'>
                      ${item.price}
                    </Text>
                  </Flex>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue' onClick={() => console.log("Buy") }>
                    Buy now
                  </Button>
                  <Button
                    variant='ghost'
                    colorScheme='blue'
                    onClick={() => addToCart(item) }
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </WrapItem>
        ))}
      </Wrap>
      </>
  );
};

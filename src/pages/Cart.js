import ReNavbar from './RevNavbar'
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Image, Stack, Flex, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import {useContext} from 'react';
import CartContext from '../CartContext'

export default function Cart() {
    const {items} = useContext(CartContext);
    console.log(items.id);
    const{addToCart} = useContext(CartContext);
    const{checkout} = useContext(CartContext);

    let total = 0;
    let totalItems = 0;
    let ccount = 0;
    let count = 0;
    return (
    <>
    <ReNavbar />
      {items
  .filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index)
  .map((item) => (
    <WrapItem key={item.id} >
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  borderRadius='lg'
  boxShadow='lg'
  margin = '5'

>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={item.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{item.name}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>

    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'
      onClick={() => addToCart(item) }

      >
        Add more +
      </Button>
      <Button variant='solid' colorScheme='red' marginLeft = '5'>
        delete
      </Button>
      <Text py='2' marginLeft='10'>
        Price : {item.price}
      </Text>
      <Text py='2' marginLeft='10'>
        Quantity : {item.cart}
      </Text>
      {total += item.price * item.cart,null}
      {totalItems += item.cart,null}

    </CardFooter>
  </Stack>
</Card>
{count < items.length ? (
  <Flex
    direction={{ base: 'column', sm: 'column' }}
    justifyContent='space-between'
    py='6'
    id={count}
  >
    <Card
      direction={{ base: 'column', sm: 'column' }}
      overflow='hidden'
      variant='outline'
      borderRadius='lg'
      boxShadow='lg'
      margin='5'
      padding='5'
    >
      <Text fontSize='lg' fontWeight='bold'>
        Total : {total}
      </Text>
      <Text fontSize='lg' fontWeight='bold'>
        Total Items : {totalItems}
      </Text>
      <ButtonGroup>
        <Button variant='solid' colorScheme='blue' onClick= {()=>checkout(total,totalItems)} >
          Checkout
        </Button>
      </ButtonGroup>
    </Card>
  </Flex>
) : (
  count <1 ? null : (
    (() => {
      const flexToRemove = document.getElementById(`${count-1}`);
      if (flexToRemove) {
        flexToRemove.remove();
      }
      return null;
    })()
  )
)}



    </WrapItem>

    )

    )}
    </>
    );
}
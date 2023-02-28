import React, {useContext} from 'react';
import CartContext from '../CartContext';
import Nav from './Navbar';

import {Card, CardBody, Heading,  Stack, Text, StackDivider,Box, CardHeader} from '@chakra-ui/react'

export default function Checkout(){
const {items} = useContext(CartContext);
return(
<>
<Nav />
<Heading size='lg'>Hello, preparing for Checkout....</Heading>
{items.map((item) => (
<Card key={item.id} >
<CardHeader
borderBottomWidth='1px'

>
<Heading size='md'>{item.name}</Heading>
</CardHeader>
<CardBody>
<Stack direction='row' spacing='10px' divider={<StackDivider borderColor='gray.200' />}>
<Box>
<Text>Price: {item.price}</Text>
</Box>
<Box>
<Text>Quantity: {item.cart}</Text>
</Box>
</Stack>

</CardBody>
</Card>
))}

</>
)
}
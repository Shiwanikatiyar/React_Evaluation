import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Stack,Heading,Text,Button,Divider,ButtonGroup,Image} from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function addCart(){
  <Alert status='success' variant='solid'>
    <AlertIcon />
    Are you sure you want to add this item to cart!
  </Alert>
}

function ProductCard({brand,title,image,category,price}) {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={image}
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <Text>Brand:
        {brand}
        </Text>
        <Text>Category:
        {category}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            Price:
         {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue' onClick={addCart}>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductCard
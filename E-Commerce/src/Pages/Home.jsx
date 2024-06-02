import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Container, SimpleGrid, Select, Flex, HStack } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import LoadingIndicator from '../Components/LoadingIndicator'
import ErrorIndicator from '../Components/ErrorIndicator'


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const[filterValue,setFilterValue] = useState('')
    const[sortValue, setSortValue] =useState('')

    async function productData(sortValue,filterValue) {
        setLoading(true)
        try {


            let queryParams={};
            if(filterValue){
                queryParams.category =filterValue;
            }

            if(sortValue){
                queryParams._sort="price",
                queryParams._order= sortValue;
            }


            let res = await axios({
                method: "get",
                url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
                params: queryParams,
            });
            console.log(res?.data?.data)
            setProducts(res?.data?.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(true);
            setLoading(false)
        }
    }
    useEffect(() => {
        productData(sortValue,filterValue)
    }, [sortValue,filterValue]);

    if(loading){
        return <LoadingIndicator/>
    }
    if(error){
        return <ErrorIndicator/>
    }
    return (
        <Container maxW={'100%'}>
            <HStack py={'1em'}>
                <Select placeholder='Sort by Price' value={sortValue} onChange={(e)=>{
                    setSortValue(e.target.value);
                }}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                  
                </Select>
                <Select placeholder='Filter by Category' value={filterValue} onChange={(e)=>{
                    setFilterValue(e.target.value);
                }}>
                    <option value='men'>Men</option>
                    <option value='women'>Women</option>
                    <option value='kids'>Kids</option>
                    <option value='home decor'>Home Decor</option>
                </Select>
            </HStack>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={[4]}>
                {
                    products?.map((data) => (
                        <ProductCard {...data} key={data.id}></ProductCard>
                    ))
                }
            </SimpleGrid>
        </Container>
    )
}

export default Home
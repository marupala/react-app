import React, {useEffect, useState} from 'react';
import {  Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() =>{
        axios.get(`https://localhost:7101/api/ProductCatalog`)
            .then((response) => {
                setAPIData(response.data);
            })
    },[])

    

    const setData = (data) => {
            let { productId, productName, productDescription, productCategory } = data;
            localStorage.setItem('productId', productId);
            localStorage.setItem('productName', productName);
            localStorage.setItem('productDescription', productDescription);
            localStorage.setItem('productCategory', productCategory);
    }

    const getData = () => {
        axios.get(`https://localhost:7101/api/ProductCatalog`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:7101/api/ProductCatalog/${id}`)
        .then(() => {
            getData();
        })
      }

            
    return (
        <div>
            <Table  celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ProductId</Table.HeaderCell>
                        <Table.HeaderCell>ProductName</Table.HeaderCell>
                        <Table.HeaderCell>ProductDescription</Table.HeaderCell>
                        <Table.HeaderCell>ProductCategory</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.productId}>
                                <Table.Cell>{data.productId}</Table.Cell>
                                <Table.Cell>{data.productName}</Table.Cell>
                                <Table.Cell>{data.productDescription}</Table.Cell>
                                <Table.Cell>{data.productCategory}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell><Button color='violet' onClick={() => setData(data)} >Update</Button></Table.Cell>
                                </Link>
                                <Table.Cell><Button color='red' onClick={() => onDelete(data.productId)} >Delete</Button></Table.Cell>
                            </Table.Row>
                        )})}
                </Table.Body>
            </Table>
        </div>
    )
}
    
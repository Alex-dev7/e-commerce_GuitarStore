"use client"
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT = gql`
    query GetProductByID($id: ID!) {
        getProductByID(id: $id) {
            id
            name
            description
            images
        }
    }
`;

function Test() {
    const {loading, error, data} = useQuery(GET_PRODUCT, {
        variables: {id: 2},
    })

    console.log(data.getProductByID.name)

    return <div>{data.getProductByID.name}</div>;
}

export default Test;

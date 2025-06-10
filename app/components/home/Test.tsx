// "use client"
// import { gql, useMutation, useQuery } from "@apollo/client";
// import { useState } from "react";

// const GET_PRODUCT_BY_ID = gql`
//     query GetProductByID($id: ID!) {
//         getProductByID(id: $id) {
//             id
//             name
//             description
//             images
//         }
//     }
// `;
// const GET_PRODUCTS = gql`
//     query GetProducts {
//         getProducts {
//             id
//             name
//             description
//             images
//             price
//         }
//     }
// `;

// const CREATE_PRODUCT = gql`
//     mutation CreateProduct($name: String!, $images: [String], $description: String!, $price: Float!) {
//         createProduct(name: $name, images: $images, description: $description, price: $price){
//             name
//         }
//     }
// `

// function Test() {
//     const [newProd, setNewProd] = useState({})
//     // const {loading, error, data} = useQuery(GET_PRODUCT_BY_ID, {
//     //     variables: {id: 2},
//     // })
//     const {loading, error, data} = useQuery(GET_PRODUCTS)

//     console.log(data?.getProducts)

//     const [createProduct] = useMutation(CREATE_PRODUCT)

//     async function handleCreateProd() {
//         console.log(newProd)
//         createProduct({
//             variables: {
//                 name: newProd.name,
//                 images: newProd.images,
//                 description: newProd.description,
//                 price: 20.00,

//             }
//         })
//     }

//     return (
//         <div>
//             <div>
//                 <input type="text" placeholder="Name" onChange={(e) => setNewProd((prev) => ({...prev, name: e.target.value}))}/>
//                 <input type="text" placeholder="Images" onChange={(e) => setNewProd((prev) => ({...prev, images: e.target.value}))}/>
//                 <input type="text" placeholder="Description" onChange={(e) => setNewProd((prev) => ({...prev, description: e.target.value}))}/>
//                 <input type="number" placeholder="Price" onChange={(e) => setNewProd((prev) => ({...prev, price: e.target.value}))}/>
//                 <button onClick={handleCreateProd} >Create Product</button>
//             </div>
//             {data?.getProducts?.map((product, i) => (
//                 <div key={i}>
//                     <h1>{product.name}</h1>
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Test;



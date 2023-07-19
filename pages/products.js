import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
const [products,setProducts] =useState([]);
useEffect(() => {
  axios.get('/api/products').then(response => {
  setProducts(response.data);
});
}, []);


  return (
    <Layout>
      <Link href={"/products/new"} className="bg-slate-900 text-white py-2 px-2 rounded-lg shadow-lg">Add New Product</Link>
      <table className="basic">
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>buttons</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

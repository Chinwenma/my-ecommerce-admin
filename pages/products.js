import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link href={"/products/new"} className="bg-slate-900 text-white py-2 px-2 rounded-full">Add New</Link>
    </Layout>
  );
}

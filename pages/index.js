import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-slate-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-slate-500 gap-1 text-gray-200 rounded-full overflow-hidden">
          <img
            src={session?.user?.image}
            alt="profilepic"
            className="w-6 h-6 rounded-full"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}

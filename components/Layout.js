import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";


export default function Layout({children}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-gray-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-orange-700 text-white p-4 rounded-full font-semibold"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className= "flex bg-slate-900 min-h-screen">
       <Nav/>
      <div className="bg-gray-200 flex-grow mt-2 mr2 rounded-md p-4 mb-2">{children}</div>
     
    </div>
  );
}

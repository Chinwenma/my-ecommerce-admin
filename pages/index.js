import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-gray-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn('google')}
            className="bg-orange-700 text-white p-4 rounded-full font-semibold"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return(
  <div className="bg-slate-900 text-white text-2xl"><div>logged in as {session.user.email}</div></div>
  );
}

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {

  const { data } = useSession();
  
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>

        <li>
          <Link href="/video">
            Videos
          </Link>
        </li>

        {data?.user ? (
        <>
          <Link href="">
            <li>
              (Welcome {data?.user?.name})
            </li>
          </Link>

          <Link href="/">
          <li onClick={() => signOut()}>
            Logout
          </li>
          </Link>
        </>
        ) : (
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;

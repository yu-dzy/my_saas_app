

import NavItems from './NavItems';
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>

      <div className="flex items-center gap-8">

        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar

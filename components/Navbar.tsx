import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/voiceAcademy.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
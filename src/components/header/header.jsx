import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <div className="topNav">
                <Image src={'/images/logo_black.png'} width={50} height={50} />
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/events">Events</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Ut enim ad minima veniam</h1>
        </header>
    )
}

import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1 className="text-3xl lg:text-5xl">
                Kluth.me
            </h1>
            <nav>
                <ul className="flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

import reactlogo from '../assets/react.svg'

function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactlogo} alt="React Logo" />
                <span>React Facts</span>
            </nav>
        </header>
    )
}

export default Navbar
import chef from '../assets/chef.svg';

export default function Header() {
    return (
        <header>
        <img src={chef} alt="Chef cluade" className='chef-icon' />
        <h1>Chef Claude</h1>
        </header>
    )
    }
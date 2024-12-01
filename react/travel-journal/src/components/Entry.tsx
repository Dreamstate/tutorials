import marker from '../assets/marker.png';

interface EntryProps {
    img: string;
    location: string;
    link: string;
    place: string;
    dates: string;
    text: string;
}

export default function Entry(props: EntryProps) {
    return (
        <article className='journal-entry'>
        <div className='image-container'>
        <img src={props.img} alt="image" className='image'/>
        </div>
        <div className='info-container'>
        <img src={marker} alt="Marker" className='marker'/>
        <span className='name'>{props.location}</span>
        <a className='link' href={props.link}>View on Google Maps</a>
        <h2 className='place'>{props.place}</h2>
        <p className='dates'>{props.dates}</p>
        <p className='text'>{props.text}</p>
        </div>
        </article>
    )
}
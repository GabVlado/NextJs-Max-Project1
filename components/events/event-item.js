import Link from 'next/link';

const EventItem = ({ title,image,date,location,id }) => {


  const  humanReadableDate = new Date(date).toLocaleDateString('es-CO',{
    day:'numeric',
    month:'long',
    year: 'numeric'
  })

  const  formatedAddress =  location.replace(', ', '\n')

  const exploreLink = `/events/${id}`


  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>
            <a>Explore Event</a>
          </Link>
        </div>
      </div>

    </li>
  )
}

export default EventItem

import EventItem from "./event-item"



const EventList = ({items}) => {

  return (
    <ul>
      {items.map(event => 
       < EventItem 
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          data={event.data}
          image={event.image}
       /> 
       )}
    </ul>
  )
}

export default EventList

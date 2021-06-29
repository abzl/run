import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneSneaker } from '../../services/sneakers';


export default function SneakersDetail(props) {
  const [sneakerItem, setSneakerItem] = useState(null);
  const { sneakers, handleDelete } = props;
	const { id } = useParams();
 
  useEffect(() => {
		const fetchSneakerItem = async () => {
			const sneakerData = await getOneSneaker(id);
      setSneakerItem(sneakerData);
		};
    fetchSneakerItem();
  }, [id]);
  console.log(sneakerItem);

  

  return (
    <div>
      <p>{sneakerItem?.name}</p>
      <p>{sneakerItem?.price}</p>
      <p>{sneakerItem?.features}</p>
      <img src={sneakerItem?.img_url} alt={sneakerItem?.name} />
      {sneakerItem?.reviews.map(review => (
        <p key={review.id}>{review.content}</p>
      ))}
      
      <div>
        <Link to={`/sneakers/${id}/edit`}><button>Edit</button></Link> 
        <button onClick={() => handleDelete(sneakerItem.id)}>Delete</button>
      </div>
    </div>
    
  )
}

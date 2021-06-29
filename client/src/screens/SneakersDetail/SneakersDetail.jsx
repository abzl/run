import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneSneaker } from '../../services/sneakers';
import "./SneakersDetail.css";

export default function SneakersDetail(props) {
  const [sneakerItem, setSneakerItem] = useState(null);
  const { handleDelete } = props;
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
      <img className = "sneaker-detail-img"src={sneakerItem?.img_url} alt={sneakerItem?.name} />
      <p className="detail-name">{sneakerItem?.name}</p>
      <p className="detail-price">${sneakerItem?.price}</p>
      <p>{sneakerItem?.features}</p>
      {sneakerItem?.reviews.map(review => (
        <p key={review.id}>{review.content}</p>
      ))}
      
      <div>
        <Link to={`/sneakers/${id}/edit`}><button className="edit-button">Edit</button></Link> 
        <button className="delete-edit-button"onClick={() => handleDelete(sneakerItem.id)}>Delete</button>
      </div>
    </div>
    
  )
}

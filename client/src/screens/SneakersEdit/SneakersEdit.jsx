import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SneakersEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    features: '',
    img_url: ''
  });

  const { name, price, features, img_url } = formData;
  const { handleUpdate, sneakers } = props;
  const { id } = useParams();

  useEffect(() => {
		const prefillFormData = () => {
			const singleSneaker = sneakers.find((sneaker) => sneaker.id === Number(id));
			setFormData({
        name: singleSneaker.name,
        price: singleSneaker.price,
        features: singleSneaker.features,
        img_url: singleSneaker.img_url
			});
		};
		if (sneakers.length) {
			prefillFormData();
		}
  // eslint-disable-next-line
  }, [sneakers]);
  
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

  return (
    <div>
    <h3>Edit Sneaker</h3>
      <form
      onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}>
        <label> 
          Name:
          <input type="text" name="name" value={name} onChange={handleChange}/>
        </label>
        <label>
          Price:
          <input type="text" name="price" value={price} onChange={handleChange}/>
        </label>
        <label>
          Features:
          <input type="text" name="features" value={features} onChange={handleChange}/>
        </label>
        <label>
          Image:
          <input type="url" name="img_url" value={img_url} onChange={handleChange}/>
        </label>
        <button>
          Submit
        </button>
      </form>    </div>
  )
}

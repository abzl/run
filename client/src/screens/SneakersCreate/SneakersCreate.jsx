import { useState } from 'react'

export default function SneakersCreate(props) {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    features: '',
    img_url: ''
  });

  const { name, price, features, img_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Add new Sneaker</h3>
      <form
      onSubmit={(e) => {
				e.preventDefault();
				handleCreate(formData);
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
      </form>
    </div>
  )
}

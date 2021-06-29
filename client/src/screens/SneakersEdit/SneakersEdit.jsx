import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SneakersEdit.css";

export default function SneakersEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    features: "",
    img_url: "",
  });

  const { name, price, features, img_url } = formData;
  const { handleUpdate, sneakers } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleSneaker = sneakers.find(
        (sneaker) => sneaker.id === Number(id)
      );
      setFormData({
        name: singleSneaker.name,
        price: singleSneaker.price,
        features: singleSneaker.features,
        img_url: singleSneaker.img_url,
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
  };

  return (
    <div className ="edit-container">
      <h3>Edit Sneaker</h3>
      <form className="edit-container-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}>
        <label>
          Name:
          <input
            className="sneaker-edit-name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            className="price"
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </label>
        <label>
          Features:
          <input
            className="features"
            type="text"
            name="features"
            value={features}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            className="sneaker-edit-img"
            type="url"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <button className="sneaker-edit-button">Submit</button>
      </form>{" "}
    </div>
  );
}

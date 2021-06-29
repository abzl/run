import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Sneakers from '../screens/Sneakers/Sneakers';
import SneakersCreate from '../screens/SneakersCreate/SneakersCreate';
import SneakersDetail from '../screens/SneakersDetail/SneakersDetail';
import SneakersEdit from '../screens/SneakersEdit/SneakersEdit';
import { getAllSneaker, postSneaker, putSneaker, deleteSneaker } from '../services/sneakers';


export default function MainContainer() {
  const [sneakers, setSneakers] = useState([]);
  const history = useHistory();

	useEffect(() => {
		const fetchSneakers = async () => {
			const sneakerList = await getAllSneaker();
			setSneakers(sneakerList);
		};
		fetchSneakers();
  }, []);
  
	const handleCreate = async (formData) => {
		const sneakerItem = await postSneaker(formData);
		setSneakers((prevState) => [...prevState, sneakerItem]);
		history.push('/sneakers');
  };
  
	const handleUpdate = async (id, formData) => {
		const sneakerItem = await putSneaker(id, formData);
		setSneakers((prevState) =>
			prevState.map((sneaker) => {
				return sneaker.id === Number(id) ? sneakerItem : sneaker;
			})
		);
		history.push('/sneakers');
	};
	const handleDelete = async (id) => {
		await deleteSneaker(id);
		setSneakers((prevState) => prevState.filter((sneaker) => sneaker.id !== id));
    history.push('/sneakers');
  };

  return (
    <div>
      <Switch>
        <Route path='/sneakers/new'>
          <SneakersCreate handleCreate={handleCreate}/>
        </Route>
        <Route path='/sneakers/:id/edit'>
          <SneakersEdit sneakers={sneakers} handleUpdate={handleUpdate}/>
        </Route>
        <Route path='/sneakers/:id'>
          <SneakersDetail sneakers={sneakers} handleDelete={handleDelete} />
        </Route>
        <Route path='/sneakers'>
          <Sneakers sneakers={sneakers} />
        </Route>
      </Switch>
    </div>
  )
}

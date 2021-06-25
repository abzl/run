import api from './api-config';

export const getAllSneaker = async () => {
	const resp = await api.get('/sneakers');
	return resp.data;
};

export const getOneSneaker = async (id) => {
	const resp = await api.get(`/sneakers/${id}`);
	return resp.data;
};

export const postSneaker = async (sneakerData) => {
	const resp = await api.post('/sneakers', { sneaker: sneakerData });
	return resp.data;
};

export const putSneaker = async (id, sneakerData) => {
	const resp = await api.put(`/sneakers/${id}`, { sneaker: sneakerData });
	return resp.data;
};

export const deleteSneaker = async (id) => {
	const resp = await api.delete(`/sneakers/${id}`);
	return resp;
};

export const addSneaker = async (foodId, flavorId) => {
	const resp = await api.put(`/flavors/${flavorId}/sneakers/${foodId}`);
	return resp.data;
};
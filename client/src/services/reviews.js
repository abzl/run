import api from "./api-config";

export const getAllReviews = async () => {
  const resp = await api.get("/reviews");
  return resp.data;
};

export const postReview = async (id, formData) => {
  const resp = await api.post(`/sneakers/${id}/reviews`, { review: formData });
  return resp.data;
};

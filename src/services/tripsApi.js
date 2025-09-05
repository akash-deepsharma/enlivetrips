import { api } from "./config";

export async function homeTrips() {
  try {
    const res = await api.get(`/trips/home`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blog");
  }
}
export async function singleTrips(slug) {
  try {
    const res = await api.get(`/trips/single/${slug}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blog");
  }
}
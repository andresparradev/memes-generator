import { API_MEMES_URL } from "../config";

async function getDiscoverMemes() {
  const res = await fetch(`${API_MEMES_URL}/get_memes`);
  const data = await res.json();
  return data;
}

export default getDiscoverMemes;

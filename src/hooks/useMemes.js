import { useEffect, useState } from "react";
import getDiscoverMemes from "../services/getDiscoverMemes";

function useMemes() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetDiscoverMemes();
  }, []);

  const handleGetDiscoverMemes = async () => {
    setLoading(true);
    const data = await getDiscoverMemes();
    setMemes(data.data.memes);
    setLoading(false);
  };

  return {
    memes,
    loading,
  };
}

export default useMemes;

import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchGithub = (url) => {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {    
    if(url) {
      setLoading(true);
      axios.get(url)
      .then((res) => {
        if(res.data) {
          setContributions(res.data.contributions)
          setTotalContributions(res.data.total);
        }
        setLoading(false);
      })
      .catch((err) =>{ 
        console.log(err);
        setLoading(false);
        setError(`Failed to load data from ${url}`);
      })
    }
  }, [url])

  return [contributions, totalContributions, loading, error];
  // const [items, loading, error] =
}

export default useFetchGithub;
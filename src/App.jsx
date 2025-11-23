import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const fetchAPI = async () => {
    const url = "https://api.nekosia.cat/api/v1/images/catgirl";
    const response = await fetch(url);
    const result = await response.json();
    const finalurl = result.image.original.url;
    setData(finalurl);

    console.log(result.image.original.url);
  }

  useEffect(()=>{
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <img src={data} alt="" />
      </div>
    </>
  )
}

export default App

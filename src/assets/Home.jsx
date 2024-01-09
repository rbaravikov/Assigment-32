import { useEffect, useState } from "react"

const Home = () => {

  const BASE_URL = "https://sophisticated-humane-dandelion.glitch.me/"
  const [data, setData] = useState([])
  
  useEffect(() => {
      const fetchData = async () => {
          const resp = await fetch(BASE_URL)
          const result = await resp.json()
          setData(result)
      }
  
      fetchData()
  }, [])

  return (
    <section id="app" className="products">
      {data.map((el, index) => (
        <div className="product" key={index}>
          <img src={el.image} alt={el.title}/>
          <p>{el.title}</p>
          <p className="price">{el.price}</p>
          <button class="button">Ištrinti</button>
        </div>
      ))}
      
    </section>
  )
}

export default Home
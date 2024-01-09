import { useEffect, useState } from "react"
import '../scss/home.scss'

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

  const handleDelete = async (id) => {
    try {
      fetch(BASE_URL + "/" + id, {
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then(data => location.reload())
      } catch (error) {
        console.error("Error during DELETE request:", error)
    }
  }
  

  return (
    <section id="app" className="products">
      {data.map((el, index) => (
        <div className="product" key={index}>
          <img src={el.image} alt={el.title}/>
          <p>{el.title}</p>
          <p className="price">{el.price}</p>
          <button name={el.id} className="button" onClick={() => handleDelete(el.id)}>Ištrinti</button>
        </div>
      ))}
      
    </section>
  )
}

export default Home
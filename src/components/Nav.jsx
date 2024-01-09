import { Link } from "react-router-dom"

const Nav = ({active, setActive}) => {

  const setPage = (e) => {
    e.preventDefault()
    e.target.innerText === 'Form' ? setActive('Form') : setActive('Home')
  }

  return (
    <nav>
        <Link className={active==="Home" ? 'active' : ''} onClick={setPage} to='/'>Products</Link>
        <Link className={active==="Form" ? 'active' : ''} onClick={setPage} to='/form'>Form </Link>
    </nav>
  )
}

export default Nav
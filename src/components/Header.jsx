const Header = ({props1, props2, props3}) => {
  return (
  <header>
    <h1>Movie App</h1>
    <input 
      placeholder="Search movies..." 
      value={props3}
      onChange={e=>props1(e.target.value)}
    />
    <button onClick={()=>props2(props3)}>Search</button>
  </header>
  )
}

export default Header
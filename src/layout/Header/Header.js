 const Header=()=> {
    return(
        <header>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand" href="#">Navbar</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <p className="nav-link" href="#">Home <span className="sr-only">(current)</span></p>
      </li>
      <li className="nav-item">
        <p className="nav-link" href="#">Link</p>
      </li></ul></div></nav></header>
    )
}
export default  Header;
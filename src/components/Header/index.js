import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to='/'><img src='https://res.cloudinary.com/dwlbneeh4/image/upload/v1696791173/image_kmmiuh.png' alt='logo' className='logo'/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>Home <span class="sr-only"></span></Link>
      </li>
    </ul>
  </div>
</nav>
</>
    )


export default Header
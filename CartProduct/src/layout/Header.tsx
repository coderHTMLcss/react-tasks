import { Link } from "react-router-dom"
import PathConstants from "../routes/pathConstans"
import '../styles/Header.css'
// import cartIcon from './assets/svg/cart.svg'


export default function Header() {
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to={PathConstants.HOME}>Header</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to={PathConstants.HOME}>Home</Link></li>
                        <li className="nav-item"><Link to={PathConstants.CATALOG}>Catalog</Link></li>
                        <li className="nav-item"><Link to={PathConstants.CART}>
                            <img src='src/assets/svg/cart.svg' className="cart" alt="cartIcon" />
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


// const Header = () => {
//     return (
//         <nav>
//             <button>
//                 <Link to="/">home</Link>
//             </button>
//             <button>
//                 <Link to="/cart">cart</Link>
//             </button>
//             <button>
//                 <Link to="/catalog">catalog</Link>
//             </button>
//             <button>
//                 <Link to="/catalog/1">product #1</Link>
//             </button>
//             <button>
//                 <Link to="/catalog/2">product #2</Link>
//             </button>
//             <button>
//                 <Link to="/catalog/3">product #3</Link>
//             </button>
//             <button>
//                 <Link to="/catalog/4">product #4</Link>
//             </button>
//         </nav>
//     )
// }

// export default Header
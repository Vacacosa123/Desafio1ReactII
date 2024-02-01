import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-sm navbar-danger bg-danger p-2 header">
        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active text-dark':''}`} 
                to="/" > <i class="bi bi-cake2-fill"></i> Home  
                </NavLink>
                <NavLink 
                to="/contacto" className={({isActive}) => `nav-item nav-link ${isActive ? 'active text-dark' : ''}`}><i class="bi bi-cake2-fill"></i> Contacto  
                </NavLink>

            </div>

        </div>
    </nav>
    <br/>
    </>
  )
}

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    // This is important for SEO so to know what type of content is present
    <header className="header">

        {/*Navigation link is used to create the navigation links with provide default styling for active links. It also can partial matches / for /about so exact prop is used. Below is for the home page. The width is of 40 which 10 rem. The height is of 10 , backgroundcolor is white, items are center and justifies center and of flex and font-bold and shadow of md to feel like it's floating on top. className is an attribute which adds styling to the elements, and it's just the inline styles and also works as class which also helps to add the className to any elements.*/}
        <NavLink to='/' className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" >
        
        <p className="blue-gradient_text">Shivangini</p>
        </NavLink>

        {/* nav is for navigation bar. Here lg is for large  */}
        <nav className='flex text-lg gap-7 font-medium'>

            {/* Here the className is dynamic and the callback function is passed that if the it's active then it is blue or if not then it's black. */}
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                Projects
            </NavLink>
        </nav>

    </header>
  )
}

export default Navbar
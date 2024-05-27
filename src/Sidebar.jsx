 import { useState } from "react";
import { NavLink } from "react-router-dom";
function SidebarItem({ title, paths }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="py-2">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-90" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.293 8.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L10.586 13H3a1 1 0 0 1 0-2h7.586l-2.293-2.293a1 1 0 1 1 1.414-1.414z"
          />
        </svg>
      </button>
      <ul className={`${isOpen ? "block" : "hidden"} pl-4`}>
        {paths.map((child, index) => (
          <li key={index} className="py-2">

            {/* {index === 0 && <NavLink to={child}>Home </NavLink>}
            {index === 1 && <NavLink to={child}>About</NavLink>}  */}
             {/* <NavLink to={child}>{index === 0 && title === 'Menu1'}Home</NavLink> 
             <NavLink to={child}>{index === 1 && title === 'Menu1'}About</NavLink> 
             <NavLink to={child}>{index === 0 && title === 'Menu2'}Contact</NavLink> 
             <NavLink to={child}>{index === 1 && title === 'Menu2'}Address</NavLink>  */}
               {title === 'Menu 1' && (
              <>
                <NavLink to={child}>{index === 0 && "Home"}</NavLink>
                <NavLink to={child}>{index === 1 && "About"}</NavLink>
              </>
            )}
            {/* Conditionally render NavLink */}
            {title === 'Menu 2' && (
              <>
                <NavLink to={child}>{index === 0 && "Contact"}</NavLink>
                <NavLink to={child}>{index === 1 && "Address"}</NavLink>
              </>
            )}
              {title === 'Menu 3' && (
              <>
                <NavLink to={child}>{index === 0 && "aman"}</NavLink>
                <NavLink to={child}>{index === 1 && "jaiswal"}</NavLink>
                <NavLink to={child}>{index === 2 && "1234"}</NavLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

 function Siderbar() {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-48">
        <ul className="mt-6">
        
         <SidebarItem title="Menu 1" paths={["/submenu1", "/submenu2"]} />
          <SidebarItem title="Menu 2" paths={["/submenu3", "/submenu4"]}  />
          <SidebarItem title="Menu 3" paths={["/submenu5", "/submenu6","/submenu7"]}  />
        </ul>
      </div>
      {/* End Sidebar */}

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
      {/* End Main Content */}
    </div>
  );
}
export default Siderbar

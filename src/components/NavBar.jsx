import { NavLink } from "react-router-dom";

export default function NavBar(){
    const linkClass = ({ isActive }) =>
            `px-3 py-2 rounded-md text-sm transition-colors ${
        isActive
            ? "text-white bg-slate-800"
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        }`;

        return (
            <nav className = "px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

            <div className="max-w-5x1 mx-auto flex items-center justify-between">

            <div className="font semibold text-slate-900 dark:text-white">
                Noah Hickey
            </div>

            <div className="flex gap-2">
                <NavLink to="/" className={linkClass}>
                    Home
                </NavLink>
                <NavLink to="/story" className={linkClass}>
                    Story
                </NavLink>
                <NavLink to="/reviews" className={linkClass}>
                    Reviews
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                    Contact
                </NavLink>
            </div>
        </div>
        </nav>
     );

}
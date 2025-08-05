import { Link } from "react-router-dom";
import { links, ngoName } from "../utils/app-info.js";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 flex flex-row flex-nowrap p-4 h-fit max-h-16 w-full border-b border-gray-300 shadow-xs shadow-black/35 z-[1000] bg-white items-center justify-between">
        <h3 className="font-semibold">{ngoName}</h3>
        <ul className="flex flex-row list-none gap-2 uppercase text-sm font-semibold items-center">
          {links.map((link) => {
            return (
              <Link to={link.path} key={link.id}>
                <li className="hover:bg-red-500 py-2 px-4 hover:text-white bg-blend-lighten rounded-full transition-colors duration-300">
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;

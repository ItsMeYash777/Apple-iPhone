import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <div>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="w-full flex screen-max-width">
          <img src={appleImg} alt="apple-logo" width={14} height={18} />
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
              <div
                key={nav}
                className="text-sm px-5 text-gray-200 hover:text-white cursor-pointer transiton-all"
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img
              className="cursor-pointer"
              src={searchImg}
              alt="search"
              width={18}
              height={18}
            />
            <img
              className="cursor-pointer"
              src={bagImg}
              alt="bagImg"
              width={18}
              height={18}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

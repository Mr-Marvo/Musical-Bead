import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../../assets";
import { useEffect, useState } from "react";
import { useContentContext } from "../../providers/ContentContext";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  let { setVisitor } = useContentContext();
  const [userType, setUserType] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("user") === "FAN") {
      setVisitor(1);
      setUserType(true);
    } else {
      setVisitor(2);
      setUserType(false);
    }
  }, []);

  const action = (id) => {
    if (id === "1") {
      setVisitor(1);
      localStorage.setItem("user", "FAN");
    } else {
      setVisitor(2);
      localStorage.setItem("user", "ARTIST");
    }
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="absolute w-full px-2 sm:px-12 xl:px-16 bg-transparent text-white mt-24">
            <div className="flex h-16 items-center justify-between ">
              <div className="flex flex-1 items-start justify-start md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-start">
                  <div className="flex flex-row">
                    <div className="flex">
                      <img
                        className="sm:h-16 w-full h-16 block mt-4 md:mt-0"
                        src={Logo}
                        alt="Musical Bead"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4 flex-row gap-10">
                    {navigation.map((item) => (
                      <div className="flex mt-2">
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? "text-teal" : "text-gray-300",
                            "flex xl:text-[26px] text-[22px] font-normal font-montserrat hover:text-teal relative w-fit after:items-end after:justify-end after:content-[''] after:bg-teal after:absolute after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:rounded-xl after:duration-300 hover:after:w-full"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                    <select
                      className="bg-teal text-black rounded-full h-8 p-1 px-2 mt-3 font-montserrat"
                      onChange={(e) => {
                        action(e.target.value);
                      }}
                    >
                      <option value={1} selected={userType}>
                        FAN
                      </option>
                      <option value={2} selected={!userType}>
                        ARTIST
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-end justify-end rounded-md p-2  text-[#BA9449] hover:text-[#96BC20] focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col gap-3 pt-32 pb-4 px-4 sm:px-16 bg-slate-950">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "text-teal" : "text-gray-300",
                    "block text-xl font-medium font-montserrat hover:text-teal relative w-fit after:items-end after:justify-end after:content-[''] after:bg-teal after:absolute after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:rounded-xl after:duration-300 hover:after:w-full"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <select
                className="bg-teal text-black rounded-full w-fit h-8 p-1 px-2 mt-3 font-montserrat"
                onChange={(e) => {
                  action(e.target.value);
                }}
                aria-hidden="true"
              >
                <option value={1}>FAN</option>
                <option value={2}>ARTIST</option>
              </select>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;

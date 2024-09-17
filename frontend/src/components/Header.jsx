import logo from "../assets/images/swiggy-logo.png"
import { IoIosArrowDown } from "react-icons/io"
export default function Header() {
  return (
    <header className="w-full shadow-md h-20 flex justify-center items-center">
      <div className="w-[90%]">
        <div className="flex items-center">
          <img className="w-20" src={logo} alt="swiggy" />
          <div className="flex items-center gap-2">
            <p className="font-semibold border-b-2 border-black tracking-tight text-sm">Other</p>
            <IoIosArrowDown size={19} className="mt-1 text-orange-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

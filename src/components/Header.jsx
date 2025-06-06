export default function Header(){
    return(
        <>
          <div className="flex items-center gap-x-2 p-5 justify-center m-0 shadow-sm">
            <img className="w-9" src="../src/images/Chef Claude Icon.png" alt="Chef Claude Logo" />
            <p className="text-3xl font-[inter] ">Chef Claude</p>
          </div>
        </>
    )
}

import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

import { useState } from "react"
import Movie from "./Movie"
import Suggestion from "./Suggestion"
import Future from "./Future"

const Header = () => {

  const [name,setName] = useState("");
  const [val,setVal] = useState("");

  const change = event  => {
    setVal(event.target.value)
  }

  const click = () => {
    setName(val)
  }

  return (
    <>
    <div className="w-full h-[15vh] bg-[#22223B] text-[#F2E9E4] flex items-center">
      <div className="ml-20 text-[3rem] font-bold font-playfair flex items-center">
        Moovers
      </div>
      <div className="translate-x-6 w-full flex place-content-end mr-20">
        <input 
          type="text"
          value={val}
          onChange={change}
          className="rounded-full p-1 outline-none text-[#DFDEFF] bg-[#4A4E69] pl-4 pr-4 w-1/2 text-lg"
          placeholder="Movie Name..." 
        />  
        <button
          className="ml-10 text-xl"
          onClick={click}
        >
          Search
        </button>
      </div>  
    </div>
    <div className="flex">
    <div>
      <Movie name={name} />
      <Future />
    </div>
    <Suggestion name ={name}/>
  </div>
  </>
  )
}

export default Header
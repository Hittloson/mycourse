import About from "./About"
import Interest from "./Interest"

function Main() {
  return (
    <div className="w-[317px] h-[399px] m-auto text-[#fff] bg-[#1A1B21] font-display">
        <h1 className="text-center pt-[15px] text-2xl font-semibold">Mark Smith</h1>
        <h3 className="text-center text-xl">Frontend Developer</h3>
        <p className="text-center text-x">marksmith.gh</p>
        <div className=" text-center pt-[15px] ">
            <button className=" w-[115px] h-[34px] bg-[#fff] text-[#374151] text-xl rounded-md mr-[10px]">Email</button>
            <button className="bg-[#5093E2] text-[#fff] w-[115px] h-[34px] text-xl rounded-md ml-[10px]">Linkedin</button>
        </div>
        <About />
        <Interest />
    </div>
  )
}

export default Main
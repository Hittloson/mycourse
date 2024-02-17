import manImg from "../assets/img/man.jpg";
import Main from "./Main";

function Info() {
  return (
    <div className=" w-[317px] m-auto pt-[30px] ">
        <img src={manImg} className="rounded-t-lg"/>
        
        <Main />
    </div>
  )
}

export default Info

import Completed from "../components/Completed"
import Input from "../components/Input"
import Pendings from "../components/Pendings"
import "./Home.css"

const Home = () => {
  return (
    <>
        <div className="container">
            <Input/>
            <Pendings/>
            <Completed/>
        </div>
    </>
  )
}

export default Home
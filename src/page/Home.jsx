import Completed from "../components/Completed"
import Input from "../components/Input"
import Pendings from "../components/Pendings"

const Home = () => {
  return (
    <>
        <div>
            <Input/>
            <Pendings/>
            <Completed/>
        </div>
    </>
  )
}

export default Home
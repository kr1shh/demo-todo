import "./Pendings.css";

const Pendings = () => {
  return (
    <>
        <div className="pendings">
            <h2>Pending ToDos</h2>
            <div className="pending-container">
                <p>ToDo Title</p>
                <button className="complete-btn">Tick</button>
            </div>
        </div>
    </>
  )
}

export default Pendings
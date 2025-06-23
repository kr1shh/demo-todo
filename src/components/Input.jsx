import "./input.css"

const Input = ({ onChange,onSubmit,value }) => {
  return (
    <>
        <div className="input-container">
            <input type="text" onChange={onChange} value={value}/>
            <button className="input-add" onClick={onSubmit}>
                Add
            </button>
        </div>
    </>
  )
}

export default Input
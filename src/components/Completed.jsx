import "./Completed.css";

const Completed = ({ todos }) => {
  return (
    <>
      <div className="completed-container">
        <h2>Completed ToDos</h2>
        <div className="completed-todo">
          {todos.length === 0 ? (
            <p>No todos</p>
          ) : (
            todos.map((todo, index) => <p key={index}>{todo}</p>)
          )}
        </div>
      </div>
    </>
  );
};

export default Completed;

function TodoItem(props) {
    return (
        <li>
        <h2>
            Tarea: {props.text} 
        </h2>

        <h2>
            Completada: {props.completed}
        </h2>
      </li>
    );
  }

export { TodoItem };
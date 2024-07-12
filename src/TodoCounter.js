function TodoCounter( { total, completed }) {
    return (
      <h1>
        Ya completaste { completed } de { total } TODOs
      </h1>
    );
  }

  export { TodoCounter };
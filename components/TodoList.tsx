import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo: any) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </>
  );
};

export default TodoList;

import { createTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <>
      <form action={createTodo}>
        <input name="content" type="text" className="" />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default NewTodoForm;

'use client';

import { updateTodo } from '@/utils/actions';
import { useTransition } from 'react';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  console.log({ todo });
  return (
    <>
      <h3
        onClick={() => startTransition(() => updateTodo(todo.id))}
        className={`cursor-pointer ${todo.complete ? 'line-through' : ''} `}
      >
        {todo?.content}
      </h3>
    </>
  );
};

export default Todo;

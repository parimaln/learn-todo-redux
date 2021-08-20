export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return (await response.json()) as TodoType[];
}

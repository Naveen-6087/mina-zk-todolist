// PendingTodosQueue.tsx
import PendingTodoItem from "./PendingTodoItem";

export default function TodosQueue({ title, subheading, todos }: { title: string, subheading: string, todos: Array<string> }) {
    return (
        <div className="flex flex-col gap-2 w-3/4">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">{subheading}</p>
            <li className="flex flex-row items-center gap-4 p-2 border-b border-gray-200">
                <div className="flex-1">
                    <p className="text-gray-900 font-medium">Todo</p>
                </div>
            </li>
            <ul className="flex flex-col gap-2">
                {todos.map((todo, index) => (
                    <PendingTodoItem key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
}
import PendingTodoItem from "./PendingTodoItem";

export default function TodosQueue({ title, subheading, todos }: { title: string, subheading: string, todos: Array<string> }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-200">{title}</h1>
            <p className="text-sm sm:text-base text-gray-400">{subheading}</p>
            <li className="flex flex-row items-center gap-4 p-2 border-b border-gray-700">
                <div className="flex-1">
                    <p className="text-gray-200 font-medium">Todo</p>
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
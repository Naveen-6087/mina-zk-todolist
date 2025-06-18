import { TodoObjectRepr } from "@/app/todoListWorker";
import ProvenTodoItem from "./ProvenTodoItem";

export default function ProvenTodosQueue({ title, subheading, todos, completeTodo }: { title: string, subheading: string, todos: Record<number, TodoObjectRepr>, completeTodo: (index: number) => void }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-200">{title}</h1>
            <p className="text-sm sm:text-base text-gray-400">{subheading}</p>
            <li className="flex flex-row items-center gap-2 sm:gap-4 p-2 border-b border-gray-700 text-sm sm:text-base">
                <div className="flex-1">
                    <p className="text-gray-200 font-medium">Todo</p>
                </div>
                <div className="hidden sm:flex flex-1">
                    <p className="text-gray-200 font-medium">Status</p>
                </div>
                <div className="hidden sm:block">
                    <p className="text-gray-200 font-medium">Index</p>
                </div>
                <div className="flex-1 text-right">
                    <p className="text-gray-200 font-medium">Actions</p>
                </div>
            </li>
            <ul className="flex flex-col gap-2">
                {Object.entries(todos).map(([index, todo]) => {
                    console.log(index, todo);
                    return (
                        <ProvenTodoItem key={index} todo={todo} index={Number(index)} completeTodo={completeTodo} />
                    );
                })}
            </ul>
        </div>
    );
}
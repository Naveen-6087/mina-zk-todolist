import { type TodoObjectRepr } from "@/app/todoListWorker";

export default function ProvenTodoItem({ todo, index, completeTodo }: { todo: TodoObjectRepr, index: number, completeTodo: (index: number) => void }) {
    return (
        <li className="flex flex-row items-center gap-2 sm:gap-4 p-2 border-b border-gray-700 text-sm sm:text-base">
            <div className="flex-1">
                <p className="text-gray-300">{todo.text}</p>
            </div>
            <div className="hidden sm:flex flex-1">
                <p className="text-gray-300">{todo.status ? "✅" : "❌"}</p>
            </div>
            <div className="hidden sm:block">
                <p className="text-gray-300 font-medium">{index}</p>
            </div>
            <div className="flex-1 text-right">
                {todo.status ? (
                    <p className="text-green-400 font-medium">Already complete!</p>
                ) : (
                    <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:px-3 rounded transition-colors duration-200 shadow-sm text-sm sm:text-base" 
                        onClick={() => completeTodo(index)}
                    >
                        Complete
                    </button>
                )}
            </div>
        </li>
    );
}
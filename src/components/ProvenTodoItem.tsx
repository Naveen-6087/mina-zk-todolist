// ProvenTodoItem.tsx
import { type TodoObjectRepr } from "@/app/todoListWorker";

export default function ProvenTodoItem({ todo, index, completeTodo }: { todo: TodoObjectRepr, index: number, completeTodo: (index: number) => void }) {
    return (
        <li className="flex flex-row items-center gap-4 p-2 border-b border-gray-200">
            <div className="flex-1">
                <p className="text-gray-800">{todo.text}</p>
            </div>
            <div className="flex-1">
                <p className="text-gray-800">{todo.status ? "✅" : "❌"}</p>
            </div>
            <div>
                <p className="text-gray-800 font-medium">{index}</p>
            </div>
            <div className="flex-1 text-right">
                {todo.status ? (
                    <p className="text-green-600 font-medium">Already complete!</p>
                ) : (
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded transition-colors duration-200 shadow-sm" 
                        onClick={() => completeTodo(index)}
                    >
                        Complete
                    </button>
                )}
            </div>
        </li>
    );
}
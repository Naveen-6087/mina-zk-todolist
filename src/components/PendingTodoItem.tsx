export default function PendingTodoItem({ todo }: { todo: string }) {
    return (
        <li className="flex flex-row items-center gap-4 p-2 border-b border-gray-700">
            <div className="flex-1">
                <p className="text-gray-300">{todo}</p>
            </div>
        </li>
    );
}
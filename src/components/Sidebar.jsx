import { ChevronFirst, ChevronLast, LucideSidebarClose, LucideSidebarOpen, SidebarClose, SidebarOpen } from "lucide-react";
import logo from "../assets/person3.jpg";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className="text-center">
                        <img
                            src={logo}
                            className={`overflow-hidden transition-all rounded-full ${expanded ? "w-32 h-32" : "w-0 h-0"} mx-auto`}
                            alt="Logo"
                        />
                        {expanded && <p className="mt-4 font-bold">Ninja</p>}
                    </div>
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <LucideSidebarOpen /> : <LucideSidebarClose />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, alert }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600"
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}

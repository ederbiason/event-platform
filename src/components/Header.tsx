import { List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
    onToggleSidebar: () => void;
}

export function Header({onToggleSidebar}: HeaderProps) {
    const [toggleMenuIcon, setToggleMenuIcon] = useState(false)

    return (
        <header className="w-full py-5 px-2 flex items-center lg:justify-center justify-between bg-gray-700 border-b border-gray-600">
            <Logo />

            <nav className="lg:hidden">
                <a href="#" className="flex items-center gap-2" onClick={onToggleSidebar}>
                    Aulas
                    {toggleMenuIcon
                        ?
                        <X size={32} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenuIcon(false)}/>
                        :
                        <List size={32} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenuIcon(true)}/>    
                    }
                </a>
            </nav>
        </header>
    )
}
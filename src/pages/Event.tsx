import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const [sidebarVisibility, setSidebarVisibility] = useState('hidden')

    function handleToogleSidebar() {
        sidebarVisibility === 'hidden' ? setSidebarVisibility('') : setSidebarVisibility('hidden')
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header onToggleSidebar={handleToogleSidebar}/>

            <main className="lg:flex flex-1 relative">
                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1"/>
                }
                <Sidebar visibility={sidebarVisibility}/>
            </main>
        </div>
    )
}
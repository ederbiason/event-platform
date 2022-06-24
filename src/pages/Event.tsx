import { HandPointing } from "phosphor-react";
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

            <main className="flex flex-1 relative">
                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="lg:flex-1 flex flex-col items-center justify-center m-auto">
                        <h1 className="text-6xl text-center">
                            Bem vindo ao <br /> <strong className="text-blue-500">Ignite Lab</strong>
                        </h1>
                        
                        <span className="text-2xl mt-5 mx-3 text-center">Selecione uma aula para assistir...</span>
                        <div className="lg:rotate-90 flex lg:static absolute top-3 right-10 rotate-45">
                            <HandPointing size={100} className="animate-bounce"/>
                        </div>
                    </div>
                }
                <Sidebar visibility={sidebarVisibility}/>
            </main>
        </div>
    )
}
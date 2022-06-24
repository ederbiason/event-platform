import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
    visibility: string;
}

export function Sidebar({visibility}: SidebarProps) {
    const { data } = useGetLessonsQuery()

    console.log(data)

    return (
        <aside className={`lg:w-[348px] lg:block ${visibility} lg:relative absolute right-0 top-0 z-50 bg-gray-700 p-6 border-l border-gray-600 w-full min-h-full`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}
import { projectList } from "../../services/utils";
import ProjectItem from "../Items/ProjectItem";

export default function Project() {
    return (
        <>
            <section class="w-full py-16 bg-white">
                <div class="px-10 mx-auto">
                    <div class="text-center mb-2">
                        <h2 class="relative inline-block px-5 py-2 mb-5 text-5xl font-bold bg-white border-2 border-black">
                            <div class="absolute w-full py-2 h-full inset-0 border-2 border-red-600 bg-red-600 ml-1.5 mt-1.5"></div>
                            <div class="absolute inset-0 w-full h-full py-2 bg-white"></div>
                            <p class="relative">Merry Christmas dev challenge 2024 <br /> (By The Tech Pastor 👋)</p>
                        </h2>
                    </div>
                    <div class="grid grid-cols-12 mt-6 gap-8">
                        {projectList.map(project => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

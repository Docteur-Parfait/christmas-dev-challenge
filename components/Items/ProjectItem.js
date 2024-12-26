export default function ProjectItem({ project }) {
    return (
        <div class="relative col-span-12 duration-150 ease-out transform border-2 border-black cursor-pointer md:col-span-6 lg:col-span-3 hover:scale-105">
            <a href={project.url} className="block h-48 overflow-hidden">
                <img src={`/assets/projects/${project.id}.png`} className="object-cover w-full h-full" />
            </a>
            <div class="p-5 pb-6">
                <div className="flex flex-row align-middle space-x-4">
                    <img class="w-12 h-12 mb-6 rounded-full" src={project.authorPhoto} />
                    <h2 className="mb-2">
                        <a href={project.url} className="text-lg font-bold ">{project.authorName}</a>
                        <p className="overflow-hidden max-w-xs" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{project.authorPosition}</p>
                    </h2>
                </div>
                <div className="flex flex-row justify-center items-center space-x-4 mt-4">
                    <a href={project.url} class="px-4 py-2 text-white bg-red-600 rounded hover:bg-blue-700">Visit</a>
                    <a href={project.github} class="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700">Github</a>
                    <a href={project.authorLinkedin} class="px-4 py-2 text-white bg-blue rounded hover:bg-blue">In</a>
                </div>
            </div>
        </div>
    )
}
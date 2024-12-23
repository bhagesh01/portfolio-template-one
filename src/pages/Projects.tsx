import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description:
      "This is a very long description for project 1. It contains more than forty words to demonstrate how truncation works. Clicking on the truncated description will expand it to show the full content for better user experience.",
    image: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for project 2.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "This is another long description for project 3, demonstrating how the truncate and expand feature works effectively. It also provides users a clean and interactive way to view content.",
    image: "https://cdn.pixabay.com/photo/2023/11/11/08/54/data-8380808_1280.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for project 4.",
    image: "https://cdn.pixabay.com/photo/2018/05/23/13/29/network-3424070_960_720.jpg",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description for project 5.",
    image: "https://cdn.pixabay.com/photo/2023/05/21/07/49/earth-8008054_960_720.jpg",
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl mt-6 font-bold text-gray-900 mb-12 text-center">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-2 border-[1px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <a
  className="border-[1px] group px-3 py-1 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center gap-2 transition-all duration-500"
  href="#site"
>
  Check Site
  <ArrowUpRight 
    className="transition-all duration-500 ease-in-out w-0 h-0 group-hover:w-5 group-hover:h-5 opacity-0 group-hover:opacity-100" 
  />
</a>

              </div>
              <p className="text-gray-600 mt-2">
                {expandedProject === project.id
                  ? project.description
                  : truncateText(project.description, 15)}
              </p>
              {project.description.split(" ").length > 15 && (
                <button
                  onClick={() => toggleDescription(project.id)}
                  className="text-blue-500 mt-2 hover:underline"
                >
                  {expandedProject === project.id ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Clock } from 'lucide-react'

export default function BlogCard() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <article className="bg-slate-900 rounded-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Header Section */}
        <div className="bg-blue-600 p-8 flex items-center justify-center">
          <div className="w-16 h-16">
            <svg viewBox="0 0 24 24" className="text-white w-full h-full">
              <path
                fill="currentColor"
                d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
              />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              CSS3
            </span>
          </div>

          <h2 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
            30 Useful CSS Examples For Logically Creative Minds
          </h2>

          <p className="text-slate-400 line-clamp-2">
            Cinyras ea tulit in inducit qui mater Lorem markdownum facit? Hinc tutus serisque, mihi iaculum...
          </p>

          {/* Author Section */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium">Jane Smith</span>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span>July 15, 2020</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}


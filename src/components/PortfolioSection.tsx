import { useState } from "react"
import Icon from "@/components/ui/icon"
import { categories, works, Work } from "@/components/portfolio/portfolioData"
import PortfolioCard from "@/components/portfolio/PortfolioCard"
import PortfolioModal from "@/components/portfolio/PortfolioModal"

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  const filtered = activeCategory === "all" ? works : works.filter((w) => w.category === activeCategory)

  return (
    <section id="works" className="relative z-10 bg-black py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Icon name="FolderOpen" size={13} className="text-orange-400" />
            <span className="text-white/70 text-xs">Портфолио Елизаветы</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Избранные <span className="text-orange-400">работы</span>
          </h2>
          <p className="text-white/50 text-base lg:text-lg max-w-xl">
            Каждый проект — это история результата, а не просто красивый текст.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white/5 border-white/15 text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((work) => (
            <PortfolioCard key={work.id} work={work} onClick={setSelectedWork} />
          ))}
        </div>
      </div>

      {selectedWork && (
        <PortfolioModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  )
}

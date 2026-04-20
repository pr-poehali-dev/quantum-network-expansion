import { useState } from "react"
import Icon from "@/components/ui/icon"
import { categories, works, Work } from "@/components/portfolio/portfolioData"
import PortfolioCard from "@/components/portfolio/PortfolioCard"
import PortfolioModal from "@/components/portfolio/PortfolioModal"

const categoryIcons: Record<string, string> = {
  all: "LayoutGrid",
  copywriting: "PenLine",
  landing: "Layout",
  cards: "ShoppingBag",
  "business-card": "CreditCard",
  music: "Music",
  sites: "Globe",
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  const filtered = activeCategory === "all" ? works : works.filter((w) => w.category === activeCategory)

  return (
    <section id="works" className="relative z-10 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-900/8 rounded-full blur-3xl" />
      </div>

      <div className="relative py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3.5 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-orange-400/90 text-xs font-medium tracking-wide">Портфолио</span>
              </div>
              <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-orange-500/20 to-transparent" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-4">
                  Избранные<br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">работы</span>
                  </span>
                </h2>
                <p className="text-white/40 text-base max-w-sm leading-relaxed">
                  Каждый проект — история результата,<br />а не просто красивый текст.
                </p>
              </div>

              <div className="flex items-center gap-4 lg:pb-1">
                <div className="text-center">
                  <div className="text-white font-black text-3xl leading-none">{works.length}</div>
                  <div className="text-white/30 text-[11px] mt-1 tracking-wide">проектов</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <div className="text-white font-black text-3xl leading-none">{categories.length - 1}</div>
                  <div className="text-white/30 text-[11px] mt-1 tracking-wide">категорий</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-white/4 border-white/8 text-white/50 hover:text-white/80 hover:bg-white/8 hover:border-white/15"
                  }`}
                >
                  <Icon
                    name={categoryIcons[cat.id] as Parameters<typeof Icon>[0]["name"]}
                    size={13}
                    className={isActive ? "text-white" : "text-white/40"}
                  />
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      {filtered.length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((work, i) => (
              <PortfolioCard key={work.id} work={work} onClick={setSelectedWork} index={i} />
            ))}
          </div>

        </div>
      </div>

      {selectedWork && (
        <PortfolioModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  )
}

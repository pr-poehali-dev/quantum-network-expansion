import Icon from "@/components/ui/icon"
import { Work } from "./portfolioData"

interface PortfolioCardProps {
  work: Work
  onClick: (work: Work) => void
}

export default function PortfolioCard({ work, onClick }: PortfolioCardProps) {
  return (
    <div
      onClick={() => onClick(work)}
      className={`group relative rounded-2xl border ${work.border} bg-gradient-to-br ${work.accent} overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer`}
    >
      <div className="h-44 overflow-hidden bg-black/20">
        {work.preview}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs border border-white/15 rounded-full px-2.5 py-0.5">{work.tag}</span>
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="ExternalLink" size={13} className="text-white/70" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-sm leading-snug">{work.title}</h3>
        <p className="text-white/45 text-xs leading-relaxed">{work.description}</p>
      </div>
    </div>
  )
}

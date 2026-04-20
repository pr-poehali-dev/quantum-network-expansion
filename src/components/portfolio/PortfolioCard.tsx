import Icon from "@/components/ui/icon"
import { Work } from "./portfolioData"

interface PortfolioCardProps {
  work: Work
  onClick: (work: Work) => void
  index: number
}

export default function PortfolioCard({ work, onClick, index }: PortfolioCardProps) {
  return (
    <div
      onClick={() => onClick(work)}
      className="group relative cursor-pointer"
    >
      <div className={`relative rounded-3xl border ${work.border} bg-gradient-to-br ${work.accent} overflow-hidden flex flex-col transition-all duration-500 group-hover:scale-[1.025] group-hover:shadow-2xl`}
        style={{ boxShadow: undefined }}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
          style={{ boxShadow: `0 0 60px -10px var(--glow)` }}
        />

        <div className="relative h-52 overflow-hidden">
          {work.preview}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70">
              {work.tag}
            </span>
            <span className={`text-[11px] font-black tabular-nums ${work.iconColor} opacity-60`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Icon name="ArrowUpRight" size={14} className="text-white" />
          </div>
        </div>

        <div className="p-5 flex flex-col gap-2">
          <h3 className="text-white font-bold text-sm leading-snug group-hover:text-white transition-colors">{work.title}</h3>
          <p className="text-white/45 text-xs leading-relaxed">{work.description}</p>

          <div className="flex items-center gap-1.5 mt-1 pt-3 border-t border-white/8">
            <Icon name={work.icon as Parameters<typeof Icon>[0]["name"]} size={12} className={`${work.iconColor} opacity-70`} />
            <span className={`text-[10px] font-medium ${work.iconColor} opacity-60`}>{work.tag}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

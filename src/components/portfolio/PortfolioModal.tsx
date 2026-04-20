import Icon from "@/components/ui/icon"
import { Work } from "./portfolioData"

interface PortfolioModalProps {
  work: Work
  onClose: () => void
}

export default function PortfolioModal({ work, onClose }: PortfolioModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className={`relative w-full sm:max-w-xl max-h-[92vh] sm:max-h-[85vh] overflow-hidden rounded-t-3xl sm:rounded-3xl border ${work.border} shadow-2xl`}
        style={{ background: "rgb(10,10,12)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative h-2 w-full bg-gradient-to-r ${work.accent.replace("/60", "").replace("/40", "")}`} />

        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${work.accent} border ${work.border} flex items-center justify-center`}>
              <Icon name={work.icon as Parameters<typeof Icon>[0]["name"]} size={13} className={work.iconColor} />
            </div>
            <span className={`text-xs font-semibold tracking-wide ${work.iconColor}`}>{work.tag}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={14} className="text-white/60" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(92vh-80px)] sm:max-h-[calc(85vh-80px)]">
          <div className="px-5 pb-6">
            {work.modalContent}
          </div>
        </div>
      </div>
    </div>
  )
}

import Icon from "@/components/ui/icon"
import { Work } from "./portfolioData"

interface PortfolioModalProps {
  work: Work
  onClose: () => void
}

export default function PortfolioModal({ work, onClose }: PortfolioModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 border border-white/10 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-white/50 text-xs border border-white/15 rounded-full px-2.5 py-0.5">{work.tag}</span>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <Icon name="X" size={14} className="text-white/70" />
          </button>
        </div>
        <div className="p-5">
          {work.modalContent}
        </div>
      </div>
    </div>
  )
}

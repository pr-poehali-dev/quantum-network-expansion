import { ShimmerButton } from "@/components/shimmer-button"
import Icon from "@/components/ui/icon"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-wide">
            Творческое <span className="text-orange-400">Бюро</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Услуги</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Работы</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Музыка</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Контакты</a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name="Menu" size={24} />
        </button>

        <ShimmerButton className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Заказать
        </ShimmerButton>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Услуги</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Работы</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Музыка</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Контакты</a>
            <ShimmerButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Заказать
            </ShimmerButton>
          </nav>
        </div>
      )}
    </>
  )
}

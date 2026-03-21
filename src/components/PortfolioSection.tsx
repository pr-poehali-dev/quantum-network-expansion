import { useState } from "react"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все работы" },
  { id: "copywriting", label: "Копирайтинг" },
  { id: "landing", label: "Лендинги" },
  { id: "cards", label: "Карточки товаров" },
  { id: "business-card", label: "Визитки" },
  { id: "music", label: "Музыка" },
  { id: "sites", label: "Сайты" },
]

const works = [
  {
    id: 1,
    category: "copywriting",
    title: "«Кофе с характером»",
    description: "Серия рекламных текстов для specialty-кофейни. Вырос средний чек на 23% за первый месяц.",
    tag: "Копирайтинг",
    icon: "PenLine",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: 2,
    category: "landing",
    title: "Лендинг «Студия танца Aria»",
    description: "Одностраничник для танцевальной студии с онлайн-записью. Конверсия 8,4% с холодного трафика.",
    tag: "Лендинг",
    icon: "Layout",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    id: 3,
    category: "cards",
    title: "Карточки для Wildberries — «LuxSkin»",
    description: "50 карточек косметики с SEO-описаниями. Продажи выросли в 2,1 раза за 6 недель.",
    tag: "Карточки товаров",
    icon: "ShoppingBag",
    accent: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    id: 4,
    category: "business-card",
    title: "Визитка архитектора Новикова",
    description: "Минималистичная визитка с тиснением и QR-кодом на портфолио. Серия 500 экземпляров.",
    tag: "Визитка",
    icon: "CreditCard",
    accent: "from-slate-500/20 to-zinc-500/10",
    border: "border-slate-500/30",
    iconColor: "text-slate-300",
  },
  {
    id: 5,
    category: "music",
    title: "«Полночь» — сингл для инди-проекта",
    description: "Авторские тексты и продакшн для московского инди-артиста. 80K прослушиваний за первый месяц.",
    tag: "Музыка",
    icon: "Music",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: 6,
    category: "sites",
    title: "Сайт юридической фирмы «Правовой щит»",
    description: "Корпоративный сайт с каталогом услуг и блогом. Органический трафик вырос в 3 раза за квартал.",
    tag: "Сайт",
    icon: "Globe",
    accent: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    id: 7,
    category: "copywriting",
    title: "Email-рассылка для SaaS-продукта",
    description: "Цепочка из 7 писем для онбординга новых пользователей. Open rate 41%, CTR 12%.",
    tag: "Копирайтинг",
    icon: "Mail",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    id: 8,
    category: "landing",
    title: "Лендинг «ФитнесМарафон 30 дней»",
    description: "Продающий лендинг онлайн-марафона. Собрали 1200 регистраций за первую неделю запуска.",
    tag: "Лендинг",
    icon: "Layout",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    id: 9,
    category: "music",
    title: "Корпоративный гимн «Стальные горизонты»",
    description: "Текст и аранжировка для промышленной компании. Исполнен вживую на юбилее предприятия.",
    tag: "Музыка",
    icon: "Mic2",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    id: 10,
    category: "cards",
    title: "Карточки Ozon — бренд «NordBaby»",
    description: "30 карточек детских товаров с инфографикой и Rich-контентом. Рейтинг продавца вырос до 4.9.",
    tag: "Карточки товаров",
    icon: "PackageOpen",
    accent: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    id: 11,
    category: "business-card",
    title: "Визитная карточка фотографа",
    description: "Двусторонняя визитка с образцом работ на обороте для свадебного фотографа Марины Соловьёвой.",
    tag: "Визитка",
    icon: "Camera",
    accent: "from-slate-500/20 to-zinc-500/10",
    border: "border-slate-500/30",
    iconColor: "text-slate-300",
  },
  {
    id: 12,
    category: "sites",
    title: "Портфолио-сайт дизайнера интерьеров",
    description: "Галерейный сайт с проектами и калькулятором стоимости. Клиент получает 5–7 заявок в неделю.",
    tag: "Сайт",
    icon: "Palette",
    accent: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")

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
            <div
              key={work.id}
              className={`group relative rounded-2xl border ${work.border} bg-gradient-to-br ${work.accent} backdrop-blur-sm p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center`}>
                  <Icon name={work.icon} size={18} className={work.iconColor} />
                </div>
                <span className="text-white/40 text-xs border border-white/15 rounded-full px-2.5 py-1">
                  {work.tag}
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">{work.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

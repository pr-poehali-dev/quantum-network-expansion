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

type Work = {
  id: number
  category: string
  title: string
  description: string
  tag: string
  icon: string
  accent: string
  border: string
  iconColor: string
  preview: React.ReactNode
  modalContent: React.ReactNode
}

const works: Work[] = [
  {
    id: 1,
    category: "copywriting",
    title: "«Кофе с характером»",
    description: "Серия рекламных текстов для specialty-кофейни. Средний чек вырос на 23%.",
    tag: "Копирайтинг",
    icon: "PenLine",
    accent: "from-amber-950/60 to-orange-950/40",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-amber-950 to-stone-950 p-4 flex flex-col justify-between font-serif">
        <div className="text-amber-400 text-[10px] tracking-widest uppercase">Specialty Coffee</div>
        <div>
          <div className="text-white text-lg font-bold leading-tight mb-1">Каждая чашка —<br/>маленький бунт</div>
          <div className="text-amber-200/70 text-[11px] leading-relaxed">Мы не варим кофе. Мы превращаем утро в ритуал для тех, кто живёт вкусом, а не привычкой.</div>
        </div>
        <div className="flex gap-1">
          <div className="h-1 w-8 bg-amber-400 rounded-full" />
          <div className="h-1 w-4 bg-amber-400/40 rounded-full" />
          <div className="h-1 w-2 bg-amber-400/20 rounded-full" />
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4 text-white/80 text-sm leading-relaxed">
        <p className="text-white font-semibold text-base">Рекламный текст для specialty-кофейни «Характер»</p>
        <div className="bg-amber-950/40 border border-amber-500/20 rounded-xl p-4 font-serif">
          <p className="text-amber-300 font-bold text-base mb-2">«Каждая чашка — маленький бунт»</p>
          <p className="text-white/70 text-sm mb-3">Мы не варим кофе. Мы превращаем утро в ритуал для тех, кто живёт вкусом, а не привычкой.</p>
          <p className="text-white/70 text-sm mb-3">Наш эфиопский Йергачефф пахнет жасмином и черникой — потому что зерно растёт на высоте 2000 метров, где воздух тоньше, а вкус ярче.</p>
          <p className="text-white/70 text-sm">Попробуйте один раз — и вы поймёте, почему 500 наших гостей приходят каждый день не за кофеином, а за нами.</p>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📈 +23% к среднему чеку</span>
          <span>📅 1 месяц после запуска</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    category: "landing",
    title: "Лендинг «Студия танца Aria»",
    description: "Одностраничник для танцевальной студии с онлайн-записью. Конверсия 8,4%.",
    tag: "Лендинг",
    icon: "Layout",
    accent: "from-violet-950/60 to-purple-950/40",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-violet-950 to-black flex flex-col">
        <div className="bg-violet-900/50 px-3 py-1.5 flex justify-between items-center">
          <span className="text-violet-300 text-[9px] font-bold tracking-widest">ARIA</span>
          <div className="flex gap-2">
            {["О нас","Цены","Запись"].map(i => <span key={i} className="text-white/40 text-[8px]">{i}</span>)}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-3 text-center">
          <div className="text-[9px] text-violet-400 tracking-widest mb-1">ШКОЛА ТАНЦЕВ</div>
          <div className="text-white font-bold text-sm leading-tight mb-2">Танцуй так,<br/>как чувствуешь</div>
          <div className="bg-violet-500 text-white text-[9px] px-3 py-1 rounded-full">Записаться бесплатно</div>
        </div>
        <div className="flex border-t border-white/10">
          {["Hip-hop","Contemp","Latina"].map(s => (
            <div key={s} className="flex-1 py-1.5 text-center border-r border-white/10 last:border-0">
              <div className="text-white/60 text-[8px]">{s}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Лендинг для студии танца «Aria»</p>
        <div className="bg-violet-950/40 border border-violet-500/20 rounded-xl overflow-hidden">
          <div className="bg-violet-900/50 px-4 py-2 flex justify-between items-center">
            <span className="text-violet-300 text-xs font-bold tracking-widest">ARIA DANCE</span>
            <div className="flex gap-3 text-white/50 text-xs">
              <span>О нас</span><span>Цены</span><span>Запись</span>
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-[11px] text-violet-400 tracking-widest mb-2">ШКОЛА СОВРЕМЕННОГО ТАНЦА</div>
            <div className="text-white font-bold text-xl mb-2">Танцуй так, как чувствуешь</div>
            <div className="text-white/60 text-sm mb-4">Направления: Hip-hop · Contemporary · Latina · Waacking</div>
            <div className="inline-block bg-violet-500 text-white text-sm px-6 py-2 rounded-full">Записаться на пробное бесплатно</div>
          </div>
          <div className="flex border-t border-white/10">
            {[["🏆","Чемпионы России"],["👩‍🏫","14 тренеров"],["🎓","3 года опыта"]].map(([e, l]) => (
              <div key={l} className="flex-1 py-3 text-center border-r border-white/10 last:border-0">
                <div className="text-lg mb-0.5">{e}</div>
                <div className="text-white/50 text-[11px]">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📈 Конверсия 8,4%</span><span>🎯 Холодный трафик</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    category: "cards",
    title: "Карточки Wildberries — «LuxSkin»",
    description: "50 карточек косметики с SEO-описаниями. Продажи выросли в 2,1 раза за 6 недель.",
    tag: "Карточки товаров",
    icon: "ShoppingBag",
    accent: "from-pink-950/60 to-rose-950/40",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
    preview: (
      <div className="w-full h-full bg-white flex">
        <div className="w-2/5 bg-gradient-to-b from-pink-100 to-rose-50 flex items-center justify-center">
          <div className="w-12 h-16 bg-gradient-to-b from-pink-300 to-rose-300 rounded-lg shadow-md flex items-end justify-center pb-1">
            <span className="text-white text-[7px] font-bold">LUXSKIN</span>
          </div>
        </div>
        <div className="flex-1 p-2 flex flex-col justify-between">
          <div>
            <div className="text-[8px] text-pink-500 font-semibold mb-0.5">LuxSkin</div>
            <div className="text-gray-800 text-[9px] font-bold leading-tight mb-1">Сыворотка с гиалуроновой кислотой 2%</div>
            <div className="flex text-yellow-400 text-[8px] mb-1">★★★★★ <span className="text-gray-400 ml-1">4.9 (847)</span></div>
            <div className="text-[8px] text-gray-600 leading-relaxed">Увлажнение 72ч · Без отдушек · Дерматотест</div>
          </div>
          <div>
            <div className="text-pink-600 font-bold text-sm">1 290 ₽</div>
            <div className="bg-violet-600 text-white text-[8px] text-center py-0.5 rounded mt-1">В корзину</div>
          </div>
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Карточки товаров для Wildberries — бренд LuxSkin</p>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex">
            <div className="w-1/3 bg-gradient-to-b from-pink-100 to-rose-50 flex items-center justify-center py-6">
              <div className="w-16 h-22 bg-gradient-to-b from-pink-300 to-rose-300 rounded-xl shadow-lg flex flex-col items-center justify-end pb-2">
                <span className="text-white text-[9px] font-bold">LUXSKIN</span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="text-[11px] text-pink-500 font-semibold mb-1">LuxSkin</div>
              <div className="text-gray-900 text-sm font-bold leading-snug mb-2">Сыворотка с гиалуроновой кислотой 2% + ниацинамид</div>
              <div className="flex text-yellow-400 text-xs mb-2">★★★★★ <span className="text-gray-500 ml-1 text-xs">4.9 (847 отзывов)</span></div>
              <div className="text-xs text-gray-600 mb-3 leading-relaxed">Интенсивное увлажнение на 72 часа. Без отдушек и парабенов. Подходит для чувствительной кожи. Прошла дерматологическое тестирование.</div>
              <div className="flex gap-1 flex-wrap mb-3">
                {["Увлажнение","Антивозрастной","Гипоаллергенно"].map(t => (
                  <span key={t} className="bg-pink-50 text-pink-600 text-[10px] px-2 py-0.5 rounded-full border border-pink-200">{t}</span>
                ))}
              </div>
              <div className="text-pink-600 font-bold text-lg">1 290 ₽</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📦 50 карточек</span><span>📈 ×2,1 к продажам</span><span>⏱ 6 недель</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    category: "business-card",
    title: "Визитка архитектора Новикова",
    description: "Минималистичная визитка с тиснением и QR-кодом на портфолио. Серия 500 экз.",
    tag: "Визитка",
    icon: "CreditCard",
    accent: "from-slate-950/60 to-zinc-950/40",
    border: "border-slate-500/30",
    iconColor: "text-slate-300",
    preview: (
      <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-3">
        <div className="w-full aspect-[1.75/1] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600/50 rounded-lg p-3 flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-white font-bold text-[11px] tracking-wider">НОВИКОВ</div>
              <div className="text-zinc-400 text-[8px] tracking-widest uppercase">Архитектор</div>
            </div>
            <div className="w-5 h-5 border border-zinc-500 rounded-sm flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_,i) => <div key={i} className="w-1 h-1 bg-zinc-400 rounded-sm" />)}
              </div>
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-zinc-400 text-[8px]">+7 (985) 000-00-00</div>
            <div className="text-zinc-400 text-[8px]">novikov.arch@gmail.com</div>
            <div className="w-8 h-px bg-zinc-600 my-1" />
            <div className="text-zinc-500 text-[7px] tracking-widest">NOVIKOV.ARCH</div>
          </div>
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Визитная карточка — архитектор Новиков</p>
        <div className="flex gap-4">
          <div className="flex-1 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600/50 rounded-xl p-5 flex flex-col justify-between" style={{minHeight: 140}}>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-white font-bold text-base tracking-wider">НОВИКОВ</div>
                <div className="text-zinc-400 text-xs tracking-widest uppercase">Архитектор · BIM-специалист</div>
              </div>
              <div className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center text-xs text-zinc-400">QR</div>
            </div>
            <div className="space-y-1">
              <div className="text-zinc-400 text-xs">+7 (985) 000-00-00</div>
              <div className="text-zinc-400 text-xs">novikov.arch@gmail.com</div>
              <div className="w-12 h-px bg-zinc-600 my-2" />
              <div className="text-zinc-500 text-[10px] tracking-widest">NOVIKOV.ARCH · МОСКВА</div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-xl p-5 flex flex-col justify-between" style={{minHeight: 140}}>
            <div className="text-zinc-800 font-bold text-sm">Обратная сторона</div>
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_,i) => (
                <div key={i} className="bg-zinc-100 rounded aspect-square" />
              ))}
            </div>
            <div className="text-zinc-400 text-[10px]">Примеры объектов</div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>🖨 500 экземпляров</span><span>✨ Тиснение золотом</span><span>📱 QR на портфолио</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    category: "music",
    title: "«Полночь» — сингл для инди-проекта",
    description: "Авторские тексты и продакшн для московского инди-артиста. 80K прослушиваний.",
    tag: "Музыка",
    icon: "Music",
    accent: "from-cyan-950/60 to-blue-950/40",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-blue-950 to-indigo-950 flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center">
          <div className="text-2xl">🌙</div>
        </div>
        <div className="text-center">
          <div className="text-white font-bold text-xs">Полночь</div>
          <div className="text-cyan-400/70 text-[9px]">Elara · Single 2024</div>
        </div>
        <div className="flex items-center gap-1">
          {[2,4,6,5,3,7,4,2,5,6,3,4].map((h,i) => (
            <div key={i} className="w-0.5 bg-cyan-400/60 rounded-full" style={{height: h * 2.5}} />
          ))}
        </div>
        <div className="text-cyan-300/50 text-[8px]">3:42 · 80K plays</div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Сингл «Полночь» — инди-проект Elara</p>
        <div className="bg-gradient-to-br from-blue-950/60 to-indigo-950/60 border border-cyan-500/20 rounded-xl p-5">
          <div className="flex gap-4 items-center mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-2xl flex-shrink-0">🌙</div>
            <div>
              <div className="text-white font-bold">Полночь</div>
              <div className="text-cyan-400/70 text-sm">Elara · Single · 2024</div>
              <div className="text-white/40 text-xs">80 000 прослушиваний</div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 mb-3 font-serif">
            <div className="text-cyan-300/80 text-xs mb-1 uppercase tracking-widest">Текст</div>
            <p className="text-white/70 text-sm leading-relaxed italic">«Полночь стоит у окна,<br/>Считает огни за стеклом.<br/>Ты снова приходишь во сне —<br/>Я снова теряю себя в нём.»</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="w-2/5 h-full bg-cyan-400 rounded-full" />
            </div>
            <span className="text-white/40 text-xs">1:29 / 3:42</span>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>🎵 80K прослушиваний</span><span>📅 1 месяц</span><span>🎹 Текст + продакшн</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    category: "sites",
    title: "Сайт юрфирмы «Правовой щит»",
    description: "Корпоративный сайт с каталогом услуг и блогом. Трафик вырос в 3 раза за квартал.",
    tag: "Сайт",
    icon: "Globe",
    accent: "from-emerald-950/60 to-green-950/40",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    preview: (
      <div className="w-full h-full bg-slate-50 flex flex-col text-[8px]">
        <div className="bg-slate-800 px-2 py-1 flex justify-between items-center">
          <span className="text-white font-bold text-[9px]">⚖ ПРАВОВОЙ ЩИТ</span>
          <div className="flex gap-2 text-slate-300">
            {["Услуги","О нас","Блог","Контакты"].map(i=><span key={i}>{i}</span>)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-3 py-3 text-center">
          <div className="text-white font-bold text-[11px] mb-1">Защита ваших интересов</div>
          <div className="text-slate-300 text-[8px] mb-2">15 лет опыта · 2400+ выигранных дел</div>
          <div className="bg-emerald-500 text-white text-[7px] px-2 py-0.5 rounded inline-block">Бесплатная консультация</div>
        </div>
        <div className="flex-1 px-2 py-1.5 grid grid-cols-3 gap-1">
          {[["🏢","Корпоративное","право"],["👨‍👩‍👧","Семейное","право"],["🏠","Недвижимость",""]].map(([e,l,s])=>(
            <div key={l} className="bg-white border border-slate-200 rounded p-1 text-center">
              <div className="text-sm">{e}</div>
              <div className="text-slate-700 font-semibold leading-tight">{l}</div>
              <div className="text-slate-500">{s}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Корпоративный сайт — «Правовой щит»</p>
        <div className="bg-slate-50 rounded-xl overflow-hidden text-sm">
          <div className="bg-slate-800 px-4 py-2 flex justify-between items-center">
            <span className="text-white font-bold">⚖ ПРАВОВОЙ ЩИТ</span>
            <div className="flex gap-3 text-slate-300 text-xs">
              {["Услуги","О нас","Блог","Контакты"].map(i=><span key={i}>{i}</span>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-5 text-center">
            <div className="text-white font-bold text-lg mb-1">Защита ваших интересов</div>
            <div className="text-slate-300 text-sm mb-3">15 лет опыта · 2400+ выигранных дел · Москва и МО</div>
            <div className="inline-block bg-emerald-500 text-white text-sm px-5 py-1.5 rounded-lg">Бесплатная консультация</div>
          </div>
          <div className="grid grid-cols-3 gap-2 p-4">
            {[["🏢","Корпоративное право"],["👨‍👩‍👧","Семейные споры"],["🏠","Недвижимость"]].map(([e,l])=>(
              <div key={l} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">{e}</div>
                <div className="text-slate-700 text-xs font-semibold">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📈 ×3 к трафику</span><span>⏱ 1 квартал</span><span>📝 SEO-блог</span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    category: "copywriting",
    title: "Email-рассылка для SaaS",
    description: "Цепочка из 7 писем для онбординга новых пользователей. Open rate 41%, CTR 12%.",
    tag: "Копирайтинг",
    icon: "Mail",
    accent: "from-amber-950/60 to-orange-950/40",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
    preview: (
      <div className="w-full h-full bg-white flex flex-col text-[8px]">
        <div className="bg-gray-100 px-2 py-1 flex items-center gap-1 border-b border-gray-200">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-gray-400 ml-1 text-[7px]">Входящие · 1 из 7</span>
        </div>
        <div className="flex-1 p-2">
          <div className="text-gray-500 text-[7px] mb-0.5">От: Елизавета · hello@saas.io</div>
          <div className="text-gray-800 font-bold text-[9px] mb-1.5">Добро пожаловать! Вот с чего начать 👋</div>
          <div className="space-y-1 text-gray-600 text-[8px] leading-relaxed">
            <p>Привет! Рады видеть вас в команде.</p>
            <p>За 5 минут вы сделаете первый отчёт — покажем как.</p>
          </div>
          <div className="mt-2 bg-orange-500 text-white text-[8px] text-center py-1 rounded">Начать → Шаг 1</div>
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Email-цепочка онбординга — SaaS-платформа</p>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5 border-b border-gray-200">
            {["bg-red-400","bg-yellow-400","bg-green-400"].map(c=><div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />)}
            <span className="text-gray-500 ml-1 text-xs">Входящие · Письмо 1 из 7</span>
          </div>
          <div className="p-4">
            <div className="text-gray-500 text-xs mb-0.5">От: Елизавета, команда SaaS · hello@saas.io</div>
            <div className="text-gray-900 font-bold mb-3">Добро пожаловать! Вот с чего начать 👋</div>
            <div className="text-gray-600 text-sm space-y-2 mb-4">
              <p>Привет! Рады видеть вас в команде — это письмо первое из семи.</p>
              <p>Сегодня за 5 минут вы сделаете свой первый отчёт. Звучит просто — потому что так и есть.</p>
            </div>
            <div className="inline-block bg-orange-500 text-white text-sm px-5 py-2 rounded-lg">Начать → Шаг 1</div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>✉️ 7 писем в цепочке</span><span>📬 Open rate 41%</span><span>🖱 CTR 12%</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    category: "landing",
    title: "Лендинг «ФитнесМарафон 30 дней»",
    description: "Продающий лендинг онлайн-марафона. 1200 регистраций за первую неделю.",
    tag: "Лендинг",
    icon: "Layout",
    accent: "from-violet-950/60 to-purple-950/40",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    preview: (
      <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-center p-3">
        <div className="text-orange-400 text-[8px] tracking-widest mb-1">ОНЛАЙН · 30 ДНЕЙ</div>
        <div className="text-white font-black text-sm leading-tight mb-1">ФИТНЕС<br/>МАРАФОН</div>
        <div className="text-white/50 text-[8px] mb-2">Минус 5 кг за месяц или возврат денег</div>
        <div className="flex gap-2 mb-2">
          {[["1200","участников"],["30","дней"],["0","оборудования"]].map(([n,l])=>(
            <div key={l} className="text-center">
              <div className="text-orange-400 font-bold text-[10px]">{n}</div>
              <div className="text-white/40 text-[7px]">{l}</div>
            </div>
          ))}
        </div>
        <div className="bg-orange-500 text-white text-[8px] px-3 py-1 rounded-full">Присоединиться</div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Лендинг «ФитнесМарафон 30 дней»</p>
        <div className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-xl p-6 text-center">
          <div className="text-orange-400 text-xs tracking-widest mb-2">ОНЛАЙН-МАРАФОН · 30 ДНЕЙ</div>
          <div className="text-white font-black text-2xl mb-1">ФИТНЕС МАРАФОН</div>
          <div className="text-white/60 text-sm mb-4">Минус 5 кг за месяц — или возврат денег. Без зала и оборудования.</div>
          <div className="flex justify-center gap-6 mb-5">
            {[["1200+","участников"],["30","тренировок"],["5","тренеров"]].map(([n,l])=>(
              <div key={l}>
                <div className="text-orange-400 font-bold text-xl">{n}</div>
                <div className="text-white/40 text-xs">{l}</div>
              </div>
            ))}
          </div>
          <div className="inline-block bg-orange-500 text-white px-8 py-2 rounded-full font-semibold">Присоединиться — 990 ₽</div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>🎯 1200 регистраций</span><span>📅 1 неделя</span>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    category: "music",
    title: "Гимн «Стальные горизонты»",
    description: "Текст и аранжировка для промышленной компании. Исполнен вживую на юбилее.",
    tag: "Музыка",
    icon: "Mic2",
    accent: "from-cyan-950/60 to-blue-950/40",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-2 p-3">
        <div className="text-4xl">🏭</div>
        <div className="text-center">
          <div className="text-white font-bold text-[10px]">СТАЛЬНЫЕ ГОРИЗОНТЫ</div>
          <div className="text-slate-400 text-[8px]">Корпоративный гимн · 2024</div>
        </div>
        <div className="w-full bg-slate-700/50 rounded p-2">
          <div className="text-slate-300 text-[8px] italic text-center leading-relaxed">
            «Мы строим мосты к рассвету,<br/>сталь и мечта — наш путь...»
          </div>
        </div>
        <div className="flex gap-0.5">
          {[3,5,4,7,6,4,5,3,6,5,4,3].map((h,i)=>(
            <div key={i} className="w-0.5 bg-slate-400/60 rounded-full" style={{height:h*2}} />
          ))}
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Корпоративный гимн «Стальные горизонты»</p>
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-500/20 rounded-xl p-5">
          <div className="flex gap-3 items-center mb-4">
            <div className="text-3xl">🏭</div>
            <div>
              <div className="text-white font-bold">Стальные горизонты</div>
              <div className="text-slate-400 text-sm">АО «МеталлСтрой» · Гимн компании · 2024</div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4 mb-3">
            <div className="text-slate-400 text-xs mb-2 uppercase tracking-widest">Припев</div>
            <p className="text-white/80 text-sm leading-relaxed italic font-serif">
              «Мы строим мосты к рассвету,<br/>
              Сталь и мечта — наш путь.<br/>
              Стальные горизонты — это<br/>
              Мы — тех, кто смотрит вперёд чуть-чуть.»
            </p>
          </div>
          <div className="text-slate-400 text-xs">Исполнено вживую оркестром на юбилее компании (25 лет)</div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>🎼 Текст + аранжировка</span><span>🎤 Живое исполнение</span>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    category: "cards",
    title: "Карточки Ozon — «NordBaby»",
    description: "30 карточек детских товаров с инфографикой. Рейтинг продавца вырос до 4.9.",
    tag: "Карточки товаров",
    icon: "PackageOpen",
    accent: "from-pink-950/60 to-rose-950/40",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
    preview: (
      <div className="w-full h-full bg-white flex flex-col text-[8px]">
        <div className="bg-blue-600 px-2 py-1 flex justify-between items-center">
          <span className="text-white font-bold text-[9px]">ozon</span>
          <span className="text-blue-200 text-[7px]">NordBaby</span>
        </div>
        <div className="flex flex-1">
          <div className="w-2/5 bg-sky-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl">🧸</div>
              <div className="bg-green-100 text-green-700 text-[7px] px-1 rounded mt-0.5">SAFE</div>
            </div>
          </div>
          <div className="flex-1 p-1.5 flex flex-col justify-between">
            <div>
              <div className="text-blue-600 font-semibold text-[8px] mb-0.5">NordBaby</div>
              <div className="text-gray-800 font-bold text-[9px] leading-tight">Развивающий коврик «Арктика»</div>
              <div className="flex text-yellow-400 text-[7px]">★★★★★ <span className="text-gray-400 ml-0.5">4.9</span></div>
              <div className="text-gray-500 text-[7px] leading-relaxed mt-0.5">0+ · BPA-free · Стирается</div>
            </div>
            <div className="text-blue-600 font-bold text-xs">2 490 ₽</div>
          </div>
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Карточки Ozon — детский бренд NordBaby</p>
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="bg-blue-600 px-4 py-2 flex justify-between items-center">
            <span className="text-white font-bold">ozon</span>
            <span className="text-blue-200 text-sm">NordBaby · Официальный магазин</span>
          </div>
          <div className="flex">
            <div className="w-1/3 bg-sky-50 flex flex-col items-center justify-center py-5 gap-2">
              <div className="text-4xl">🧸</div>
              <div className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">BPA-free · Сертифицировано</div>
            </div>
            <div className="flex-1 p-4">
              <div className="text-blue-600 font-semibold text-xs mb-1">NordBaby</div>
              <div className="text-gray-900 font-bold mb-2">Развивающий коврик «Арктика» с дугами</div>
              <div className="flex text-yellow-400 text-sm mb-2">★★★★★ <span className="text-gray-500 ml-1 text-xs">4.9 (312 отзывов)</span></div>
              <div className="text-gray-600 text-xs mb-3 leading-relaxed">Для детей от 0 месяцев. Безопасные красители, стирается в машине. 8 развивающих элементов.</div>
              <div className="flex gap-1 flex-wrap mb-3">
                {["0+","Стирается","Гипоаллерген"].map(t=>(
                  <span key={t} className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <div className="text-blue-600 font-bold text-lg">2 490 ₽</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📦 30 карточек</span><span>⭐ Рейтинг 4.9</span><span>🖼 Rich-контент</span>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    category: "business-card",
    title: "Визитка свадебного фотографа",
    description: "Двусторонняя визитка с образцом работ на обороте для фотографа Марины Соловьёвой.",
    tag: "Визитка",
    icon: "Camera",
    accent: "from-slate-950/60 to-zinc-950/40",
    border: "border-slate-500/30",
    iconColor: "text-slate-300",
    preview: (
      <div className="w-full h-full bg-rose-950 flex items-center justify-center p-3">
        <div className="w-full aspect-[1.75/1] bg-gradient-to-br from-rose-900/80 to-pink-950 border border-rose-500/30 rounded-lg p-3 flex flex-col justify-between shadow-xl">
          <div className="flex justify-between items-start">
            <div className="text-[7px] text-rose-300 tracking-widest uppercase">Photography</div>
            <div className="text-rose-400 text-[14px]">📷</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-[11px] tracking-wide">Марина Соловьёва</div>
            <div className="text-rose-300/70 text-[7px] tracking-widest">СВАДЕБНЫЙ ФОТОГРАФ</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-rose-300/60 text-[7px]">@marina.foto · +7 (916) 000-00-00</div>
          </div>
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Визитка — свадебный фотограф Марина Соловьёва</p>
        <div className="flex gap-3">
          <div className="flex-1 bg-gradient-to-br from-rose-900/80 to-pink-950 border border-rose-500/30 rounded-xl p-5 flex flex-col justify-between" style={{minHeight:130}}>
            <div className="text-rose-300 text-xs tracking-widest uppercase">Photography</div>
            <div className="text-center">
              <div className="text-white font-bold tracking-wide">Марина Соловьёва</div>
              <div className="text-rose-300/70 text-xs tracking-widest">СВАДЕБНЫЙ ФОТОГРАФ</div>
            </div>
            <div className="text-rose-300/60 text-xs">@marina.foto · +7 (916) 000-00-00</div>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden border border-rose-500/20" style={{minHeight:130}}>
            <div className="grid grid-cols-2 grid-rows-2 h-full">
              {["🌸","💍","🥂","🌹"].map((e,i)=>(
                <div key={i} className="bg-rose-950/80 flex items-center justify-center text-2xl border border-rose-900/50">{e}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>🖨 300 экземпляров</span><span>📸 Образцы на обороте</span><span>🔗 QR-портфолио</span>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    category: "sites",
    title: "Портфолио дизайнера интерьеров",
    description: "Галерейный сайт с проектами и калькулятором. Клиент получает 5–7 заявок в неделю.",
    tag: "Сайт",
    icon: "Palette",
    accent: "from-emerald-950/60 to-green-950/40",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    preview: (
      <div className="w-full h-full bg-stone-100 flex flex-col text-[8px]">
        <div className="bg-white px-2 py-1.5 flex justify-between items-center border-b border-stone-200">
          <span className="text-stone-800 font-bold text-[9px] italic">Anna Morozova</span>
          <div className="flex gap-2 text-stone-500">
            {["Проекты","Услуги","Контакт"].map(i=><span key={i}>{i}</span>)}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-0.5 p-1.5">
          {[
            {bg:"bg-stone-300",label:"Гостиная · Скандинав"},
            {bg:"bg-amber-200",label:"Кухня · Лофт"},
            {bg:"bg-teal-200",label:"Спальня · Минимализм"},
            {bg:"bg-rose-200",label:"Детская · Эко"},
          ].map(({bg,label})=>(
            <div key={label} className={`${bg} rounded flex items-end p-1`}>
              <span className="text-[6px] text-stone-700 bg-white/60 px-1 rounded">{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    modalContent: (
      <div className="space-y-4">
        <p className="text-white font-semibold text-base">Сайт-портфолио — дизайнер интерьеров Анна Морозова</p>
        <div className="bg-stone-100 rounded-xl overflow-hidden">
          <div className="bg-white px-4 py-2.5 flex justify-between items-center border-b border-stone-200">
            <span className="text-stone-800 font-bold italic">Anna Morozova · Interior Design</span>
            <div className="flex gap-3 text-stone-500 text-sm">
              {["Проекты","Услуги","Контакт"].map(i=><span key={i}>{i}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 p-3">
            {[
              {bg:"bg-stone-300",label:"Гостиная · Скандинав"},
              {bg:"bg-amber-200",label:"Кухня · Лофт"},
              {bg:"bg-teal-200",label:"Спальня · Минимализм"},
              {bg:"bg-rose-200",label:"Детская · Эко"},
            ].map(({bg,label})=>(
              <div key={label} className={`${bg} rounded-xl h-20 flex items-end p-2`}>
                <span className="text-xs text-stone-700 bg-white/70 px-2 py-0.5 rounded-full">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 text-xs text-white/50">
          <span>📋 5–7 заявок/нед</span><span>🧮 Калькулятор стоимости</span><span>🖼 Галерея проектов</span>
        </div>
      </div>
    ),
  },
]

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
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
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
          ))}
        </div>
      </div>

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-zinc-900 border border-white/10 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-white/50 text-xs border border-white/15 rounded-full px-2.5 py-0.5">{selectedWork.tag}</span>
              <button
                onClick={() => setSelectedWork(null)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon name="X" size={14} className="text-white/70" />
              </button>
            </div>
            <div className="p-5">
              {selectedWork.modalContent}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

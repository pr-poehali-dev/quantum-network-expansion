import { Work } from "./types"

export const worksGroup3: Work[] = [
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

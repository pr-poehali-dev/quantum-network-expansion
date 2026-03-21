import { Work } from "./types"

export const worksGroup2: Work[] = [
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
]

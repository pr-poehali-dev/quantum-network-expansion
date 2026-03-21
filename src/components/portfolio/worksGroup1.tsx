import { Work } from "./types"

export const worksGroup1: Work[] = [
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
]

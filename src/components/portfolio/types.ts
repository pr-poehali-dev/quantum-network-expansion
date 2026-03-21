export type Work = {
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

export const categories = [
  { id: "all", label: "Все работы" },
  { id: "copywriting", label: "Копирайтинг" },
  { id: "landing", label: "Лендинги" },
  { id: "cards", label: "Карточки товаров" },
  { id: "business-card", label: "Визитки" },
  { id: "music", label: "Музыка" },
  { id: "sites", label: "Сайты" },
]

// components/TermsPrivacyModals.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

export default function TermsPrivacyModals() {
  const [openModal, setOpenModal] = useState<'terms' | 'privacy' | null>(null)
    const termsOfUse = [
    {
        title: "1. Введение",
        text: "Добро пожаловать в AsylMind — интеллектуальное финансовое приложение! Мы уважаем вашу конфиденциальность и обязуемся защищать ваши личные данные. В этом документе описано, как мы собираем, используем, храним и защищаем вашу информацию. Пожалуйста, прочтите внимательно.",
    },
    {
        title: "2. Какие данные мы собираем",
        text: "Мы обрабатываем следующие категории информации:",
        list: {
            "Личные данные": "Имя, адрес электронной почты, номер телефона и другие контактные данные, которые вы указываете при регистрации.",
            "Технические данные":"IP-адрес, тип устройства и браузера, операционная система, информация об использовании (например, время посещения, просмотренные страницы и действия в приложении)",
            "Финансовая информация":"Данные о ваших доходах, расходах, целях, инвестициях и других финансовых действиях, которые вы вводите в приложении.",
        }
    },
    {
        title: "3. Как мы используем вашу информацию",
        text: "Ваши данные используются для следующих целей:",
        list: {
            "Предоставление сервиса": "Создание бюджета, рекомендации по сбережениям и другие функции приложения.",
            "Улучшение продукта":"Анализ поведения пользователей, оптимизация интерфейса и функций.",
            "Связь с вами":"Уведомления об обновлениях, поддержка, полезные советы и предложения (с вашего согласия).",
        },
        subtext: "Мы не продаём ваши данные."
    },
    {
        title: "4. Передача данных третьим лицам",
        text: "Мы не передаём ваши персональные данные третьим лицам, кроме следующих случаев:",
        list: {
            "Проверенные сервисы": "Надёжные партнёры для хостинга или аналитики, работающие по договору конфиденциальности.",
            "Закон":"В случаях, когда требуется по закону или для защиты прав, безопасности и интересов.",
        },
    },
    {
        title: "5. Безопасность данных",
        text: "Мы применяем стандартные методы защиты информации: шифрование, ограничение доступа, безопасное хранение. Но ни одна система не даёт 100% гарантии защиты.",
    },
    {
        title: "6. Ваши права",
        text: "Вы имеете право:",
        list: {
            "Получить доступ": "Ознакомиться с хранимыми у нас данными.",
            "Исправить":"Обновить или исправить неточные сведения.",
            "Удалить":"Запросить удаление своей учётной записи и всех данных..",
        },
        subtext: "Чтобы воспользоваться правами, свяжитесь с нами по указанным контактам."
    },
    {
        title: "7. Обновления политики",
        text: "Мы можем вносить изменения в политику. Обновления будут опубликованы в приложении или на сайте. Рекомендуем периодически проверять актуальность условий.",
    },
    {
        title: "8. Контактная информация",
        text: "Если у вас возникли вопросы, напишите нам:",
        list: {
            "Электронный адрес": "team.asylmind@gmail.com"
        }
    },
    ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
      {/* Terms of Use Button */}
      <Dialog open={openModal === 'terms'} onOpenChange={(open) => setOpenModal(open ? 'terms' : null)}>
        <DialogTrigger asChild>
          <Button variant="link" className="p-0 h-auto text-muted-foreground">
            Условия использования
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className='font-bold text-xl'>Условия использования</DialogTitle>
          </DialogHeader>
          <div className="text-sm space-y-4">
            <p>Последнее обновление: 5 июля 2025 г.</p>
            
            {termsOfUse.map((data, idx)=>(
                !data.list ? (
                    <div key={idx} className='space-y-2'>
                        <p className='text-lg font-semibold'>{data.title}</p>
                        <p>{data.text}</p>
                        {data?.subtext && <p>{data?.subtext}</p>}
                    </div>
                ) : (
                    <div key={idx} className='space-y-2'>
                        <p className='text-lg font-semibold'>{data.title}</p>
                        <p>{data.text}</p>
                        <ul className='list-disc ml-0 pl-5'>
                            {Object.entries(data.list).map(([title, desc], idx)=>(
                                <li key={idx}>
                                    <span className='font-medium'>{title}:</span> {desc}
                                </li>
                            ))}
                        </ul>
                        {data?.subtext && <p>{data?.subtext}</p>}
                    </div>
                )
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Button */}
      <Dialog open={openModal === 'privacy'} onOpenChange={(open) => setOpenModal(open ? 'privacy' : null)}>
        <DialogTrigger asChild>
          <Button variant="link" className="p-0 h-auto text-muted-foreground">
            Политика конфиденциальности
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Политика конфиденциальности</DialogTitle>
          </DialogHeader>
          <div className="text-sm space-y-4">
            <p>Мы собираем минимальный объем персональных данных: имя, email и предпочтения, необходимые для работы сервиса.</p>
            <p>Все данные хранятся в защищённых базах данных и используются исключительно для улучшения пользовательского опыта.</p>
            <p>Мы не передаём ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.</p>
            <p>Пользователь имеет право запросить удаление своих данных в любое время через настройки профиля.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

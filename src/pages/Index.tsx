import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const TELEGRAM_BOT_URL = "https://t.me/NikitaTechnology";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 animate-gradient bg-[length:200%_200%]" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Бизнес тонет в рутине?
              <span className="block mt-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Автоматизируем с AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Сокращаем издержки на 60%, освобождаем команду от монотонной работы. Внедряем AI-решения за 2 недели.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 hover:scale-105 transition-all"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Начать диалог
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {[
                { num: "50+", text: "Проектов" },
                { num: "60%", text: "Экономия" },
                { num: "14 дней", text: "Внедрение" },
                { num: "24/7", text: "Поддержка" }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2 animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <p className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.num}</p>
                  <p className="text-sm text-muted-foreground">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Как AI решает ваши проблемы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Превращаем болевые точки бизнеса в источники роста с помощью искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Автоматизация рутины",
                desc: "Сотрудники тратят 40% времени на повторяющиеся задачи. AI берёт это на себя — обработка заявок, документооборот, отчёты."
              },
              {
                icon: "MessageSquare",
                title: "Клиенты без ожидания",
                desc: "AI-ассистент отвечает мгновенно 24/7. Конверсия растёт на 35%, а нагрузка на менеджеров падает в 3 раза."
              },
              {
                icon: "TrendingUp",
                title: "Решения на данных",
                desc: "AI анализирует тысячи параметров и предсказывает тренды. Вы принимаете решения на основе фактов, а не догадок."
              }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный цикл разработки AI-решений под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Cog",
                title: "Автоматизация бизнес-процессов",
                features: ["Анализ текущих процессов", "Разработка AI-сценариев", "Интеграция с CRM/ERP"],
                gradient: "from-primary to-secondary"
              },
              {
                icon: "Bot",
                title: "Создание чат-ботов",
                features: ["Умные голосовые помощники", "Telegram/WhatsApp боты", "Обработка естественного языка"],
                gradient: "from-secondary to-accent"
              },
              {
                icon: "Sparkles",
                title: "Генерация контента",
                features: ["Тексты для сайтов и соцсетей", "Изображения и видео", "Персонализация под аудиторию"],
                gradient: "from-accent to-primary"
              },
              {
                icon: "Cpu",
                title: "AI-решения под задачу",
                features: ["Распознавание изображений", "Предиктивная аналитика", "Обработка больших данных"],
                gradient: "from-primary via-accent to-secondary"
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="p-8 space-y-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Реальные результаты
            </h2>
            <p className="text-xl text-muted-foreground">
              Проекты, которые окупились за 3 месяца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Интернет-магазин",
                result: "+250% конверсия",
                desc: "AI-чат-бот обрабатывает 500+ запросов в день, персонализирует предложения. Средний чек вырос на 40%."
              },
              {
                company: "Производство",
                result: "-65% время на отчёты",
                desc: "Автоматизировали сбор данных с оборудования и генерацию аналитики. Экономия 120 часов в месяц."
              },
              {
                company: "Маркетинговое агентство",
                result: "10x скорость контента",
                desc: "AI создаёт черновики постов, email-рассылок и лендингов. Команда фокусируется на стратегии."
              }
            ].map((project, i) => (
              <Card key={i} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wide">{project.company}</p>
                    <p className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.result}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Rocket", title: "Быстрый старт", desc: "MVP за 2 недели, полное внедрение — 1-2 месяца" },
              { icon: "Shield", title: "Безопасность", desc: "Все данные на ваших серверах, полное соответствие ФЗ-152" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Техподдержка и обновления в течение всего проекта" },
              { icon: "Award", title: "Гарантия результата", desc: "Возврат 100%, если не достигнем KPI за 3 месяца" }
            ].map((adv, i) => (
              <div key={i} className="text-center space-y-4 p-6 hover:bg-muted/50 rounded-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name={adv.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Старт",
                price: "от 150 000 ₽",
                features: ["Простой чат-бот", "До 1000 запросов/мес", "Telegram/WhatsApp", "1 месяц поддержки"],
                highlighted: false
              },
              {
                name: "Бизнес",
                price: "от 450 000 ₽",
                features: ["Автоматизация процессов", "Интеграция с системами", "До 10 000 запросов/мес", "3 месяца поддержки", "Аналитика"],
                highlighted: true
              },
              {
                name: "Корпоративный",
                price: "от 1 200 000 ₽",
                features: ["Полная кастомизация", "Безлимитные запросы", "Собственная инфраструктура", "Год поддержки", "Выделенная команда"],
                highlighted: false
              }
            ].map((plan, i) => (
              <Card key={i} className={`relative hover:shadow-2xl transition-all duration-300 animate-fade-in ${plan.highlighted ? 'border-primary border-4 scale-105 md:scale-110' : 'border-2 hover:-translate-y-2'}`} style={{ animationDelay: `${i * 150}ms` }}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold">{plan.name}</h3>
                    <p className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Алексей Иванов",
                position: "CEO, TechStart",
                text: "За 3 недели внедрили AI-ассистента для техподдержки. Время ответа сократилось с 2 часов до 30 секунд. Клиенты в восторге!",
                rating: 5
              },
              {
                name: "Мария Петрова",
                position: "Директор по маркетингу, BeautyShop",
                text: "Контент-план на месяц AI генерирует за 2 часа. Освободили 60% времени SMM-менеджера на креатив и аналитику.",
                rating: 5
              },
              {
                name: "Дмитрий Сидоров",
                position: "Владелец, LogisticPro",
                text: "Автоматизировали маршрутизацию и прогнозирование. Экономия на топливе — 40 000 ₽/месяц, сроки доставки сократились на 25%.",
                rating: 5
              },
              {
                name: "Елена Козлова",
                position: "HR-директор, FinanceCorp",
                text: "AI-рекрутер обрабатывает резюме и проводит первичные собеседования. Время на закрытие вакансии упало с 45 до 18 дней.",
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Icon key={j} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Сколько времени занимает внедрение?",
                a: "Простой чат-бот — 1-2 недели. Комплексная автоматизация процессов — 1-2 месяца. Мы начинаем с MVP и поэтапно масштабируем функционал."
              },
              {
                q: "Нужны ли технические знания для работы с AI?",
                a: "Нет! Мы создаём интуитивные интерфейсы и обучаем вашу команду. Для базовых операций достаточно знания Excel."
              },
              {
                q: "Как AI интегрируется с нашими системами?",
                a: "Подключаем через API к 1С, Bitrix24, AmoCRM и другим системам. Если готовых интеграций нет — разрабатываем кастомные."
              },
              {
                q: "Что если AI не даст результат?",
                a: "Мы прописываем KPI в договоре. Если за 3 месяца показатели не достигнуты — возвращаем 100% стоимости. Но таких случаев не было."
              },
              {
                q: "Безопасны ли наши данные?",
                a: "Да. Данные хранятся на ваших серверах или в защищённом облаке с шифрованием. Мы соблюдаем ФЗ-152 и подписываем NDA."
              },
              {
                q: "Какая стоимость обслуживания после внедрения?",
                a: "Первые 1-3 месяца (в зависимости от тарифа) включены в стоимость. Далее — от 15 000 ₽/месяц за техподдержку и обновления."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 rounded-xl px-6 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Гарантии качества
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "FileCheck",
                title: "Договор с KPI",
                desc: "Прописываем измеримые результаты в документе"
              },
              {
                icon: "RotateCcw",
                title: "Возврат средств",
                desc: "100% возврат, если не достигли целей"
              },
              {
                icon: "Clock",
                title: "Точные сроки",
                desc: "Поэтапная сдача с фиксацией в календаре"
              }
            ].map((guarantee, i) => (
              <div key={i} className="text-center space-y-4 p-8 border-2 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name={guarantee.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient bg-[length:200%_200%]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="border-0 shadow-2xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold">
                    Готовы начать?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Напишите нам в Telegram — обсудим ваш проект и предложим оптимальное решение за 24 часа
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button 
                    size="lg" 
                    className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-110 shadow-2xl w-full sm:w-auto"
                    onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                  >
                    <Icon name="Send" className="mr-3" size={24} />
                    Написать в Telegram
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-sm">Ответим за 1 час</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <span className="text-sm">100% конфиденциально</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Icon name="Sparkles" size={20} className="text-primary" />
                    <span className="text-sm">Бесплатная консультация</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Agency
              </h3>
              <p className="text-sm text-muted-foreground">
                Автоматизируем бизнес с помощью искусственного интеллекта
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-semibold">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Автоматизация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Чат-боты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Генерация контента</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI-разработка</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-semibold">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@ai-agency.ru" className="hover:text-primary transition-colors">info@ai-agency.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 AI Agency. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
export type Text = { ru: string; en: string };
export type Category = "landing" | "bot" | "system" | "automation" | "product" | "data";

export type Frame = { src: string; alt: Text };

export type Project = {
  slug: string;
  featured?: boolean;
  category: Category;
  year: string;
  title: Text;
  summary: Text;
  task: Text;
  built: Text;
  outcome: Text;
  format: Text;
  timeline: Text;
  stack: string[];
  frames: Frame[];
};

const frame = (src: string, ru: string, en: string): Frame => ({
  src,
  alt: { ru, en },
});

export const projects: Project[] = [
  {
    slug: "amoure",
    featured: true,
    category: "landing",
    year: "2026",
    title: { ru: "AMOURE", en: "AMOURE" },
    summary: {
      ru: "Лендинг свадебного ателье: крупная фотография, галерея платьев и запись на консультацию.",
      en: "A wedding atelier landing: large photography, a dress gallery and a consultation booking.",
    },
    task: {
      ru: "Ателье Аврелии Ветровой в Санкт-Петербурге. Нужна страница, которая ощущается как примерочная, а не как каталог, и собирает запись.",
      en: "Aurelia Vetrova’s atelier in Saint Petersburg. The page had to feel like a fitting room, not a catalogue, and collect a booking.",
    },
    built: {
      ru: "Шесть блоков, шапка, мобильное меню, галерея и форма. Имя и телефон проверяются до отправки. Заявка уходит в сообщения сообщества ВКонтакте. Рядом политика конфиденциальности.",
      en: "Six sections, a header, a mobile menu, a gallery and a form. Name and phone are checked before sending. The enquiry goes to a VKontakte community. A privacy page sits beside it.",
    },
    outcome: {
      ru: "Гость видит характер ателье в первом кадре и оставляет запись, не ища контакты в подвале.",
      en: "A guest meets the atelier in the first frame and leaves a booking without hunting for a footer contact.",
    },
    format: { ru: "Лендинг", en: "Landing page" },
    timeline: { ru: "3–7 дней", en: "3–7 days" },
    stack: ["HTML", "CSS", "JavaScript", "Python"],
    frames: [
      frame("/work/amoure-1.png", "Первый экран ателье AMOURE", "AMOURE atelier hero"),
      frame("/work/amoure-2.png", "Галерея платьев", "Dress gallery"),
      frame("/work/amoure-3.png", "Форма записи", "Booking form"),
    ],
  },
  {
    slug: "aeris",
    featured: true,
    category: "landing",
    year: "2026",
    title: { ru: "AERIS", en: "AERIS" },
    summary: {
      ru: "Лендинг консалтинга по ИИ-автоматизации с калькулятором эффекта и заявкой на диагностику.",
      en: "An AI-automation consultancy landing with a savings calculator and a diagnostic enquiry.",
    },
    task: {
      ru: "Показать собственнику цену рутины и дать первый шаг без длинного созвона: бесплатная диагностика и короткий расчёт.",
      en: "Show an owner the cost of routine and offer a first step without a long call: a free diagnostic and a short calculation.",
    },
    built: {
      ru: "Оффер, блок боли, шаги продукта, FAQ, форма и модальный калькулятор. Заявка падает в Google Таблицу и дублируется на почту.",
      en: "Offer, pain, product steps, FAQ, a form and a modal calculator. The enquiry lands in a Google Sheet and is copied to email.",
    },
    outcome: {
      ru: "Страница ведёт к одному действию. Калькулятор даёт повод оставить контакт тем, кто ещё не готов к разговору.",
      en: "The page leads to one action. The calculator gives a reason to leave a contact before a person is ready to talk.",
    },
    format: { ru: "Лендинг", en: "Landing page" },
    timeline: { ru: "3–7 дней", en: "3–7 days" },
    stack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    frames: [
      frame("/work/aeris-1.png", "Первый экран AERIS", "AERIS hero"),
      frame("/work/aeris-2.png", "Калькулятор эффекта", "Savings calculator"),
      frame("/work/aeris-3.png", "Форма диагностики", "Diagnostic form"),
    ],
  },
  {
    slug: "eleonora",
    featured: true,
    category: "landing",
    year: "2026",
    title: { ru: "Eleonora Reis", en: "Eleonora Reis" },
    summary: {
      ru: "Сайт частного преподавателя английского: направления, тарифы и запись на пробный урок.",
      en: "A private English teacher’s site: paths, fees and a trial-lesson booking.",
    },
    task: {
      ru: "Собрать доверие к человеку и сразу показать, какой формат занятий выбрать. Цель страницы — пробный урок.",
      en: "Build trust in the person and show which lesson format to choose. The page exists to book a trial.",
    },
    built: {
      ru: "Лондон на первом экране, четыре направления, блок о преподавателе, карусель историй, три тарифа, вопросы и форма. Заявка уходит на почту. На телефоне остаются мессенджеры.",
      en: "London on the first screen, four paths, a teacher block, a story carousel, three fees, questions and a form. The enquiry goes to email. Messengers stay on the phone.",
    },
    outcome: {
      ru: "Ученик выбирает направление и оставляет контакт, не разбирая программу в переписке.",
      en: "A student picks a path and leaves a contact without unpacking the syllabus in a chat.",
    },
    format: { ru: "Лендинг", en: "Landing page" },
    timeline: { ru: "3–7 дней", en: "3–7 days" },
    stack: ["HTML", "CSS", "JavaScript", "FormSubmit"],
    frames: [
      frame("/work/eleonora-1.png", "Первый экран занятий с Eleonora Reis", "Eleonora Reis hero"),
      frame("/work/eleonora-2.png", "Тарифы", "Pricing"),
      frame("/work/eleonora-3.png", "Вопросы и форма", "Questions and form"),
    ],
  },
  {
    slug: "photographer",
    featured: true,
    category: "landing",
    year: "2026",
    title: { ru: "Мария Золотая", en: "Maria Zolotaya" },
    summary: {
      ru: "Лендинг свадебного и портретного фотографа: портфолио с фильтрами, пакеты и заявка.",
      en: "A wedding and portrait photographer landing: a filtered portfolio, packages and an enquiry.",
    },
    task: {
      ru: "Показать свет и характер съёмки, разложить работы по типам и привести к брони даты. Имя героини на самом лендинге — Мария Золотая, оно оставлено как в проекте.",
      en: "Show the light and character of the work, sort pictures by type and lead to a date request. The name on the landing itself is Maria Zolotaya and is kept as in the project.",
    },
    built: {
      ru: "Общий кадр на фоне, фильтры портфолио, пакеты, отзывы, форма с типом съёмки и датой, окно с материалом. Заявки рассчитаны на Google Таблицу. Это демо-сайт фотографа, не отдельная услуга съёмки.",
      en: "One background frame, portfolio filters, packages, reviews, a form with shoot type and date, and a guide window. Enquiries are set up for a Google Sheet. This is a photographer demo, not a separate photography service.",
    },
    outcome: {
      ru: "Человек выбирает тип съёмки и оставляет дату. Пакет можно отметить прямо из цен.",
      en: "A person chooses a shoot type and leaves a date. A package can be marked from the pricing block.",
    },
    format: { ru: "Лендинг", en: "Landing page" },
    timeline: { ru: "3–7 дней", en: "3–7 days" },
    stack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    frames: [
      frame("/work/photo-1.jpg", "Первый экран фотографа", "Photographer hero"),
      frame("/work/photo-2.jpg", "Портфолио с фильтрами", "Filtered portfolio"),
      frame("/work/photo-3.jpg", "Пакеты съёмки", "Shoot packages"),
    ],
  },
  {
    slug: "sokolova",
    category: "landing",
    year: "2026",
    title: { ru: "Анна Соколова", en: "Anna Sokolova" },
    summary: {
      ru: "Сайт психолога: услуги, цены, ход терапии и тихая форма записи.",
      en: "A psychologist’s site: services, fees, the shape of therapy and a quiet booking form.",
    },
    task: {
      ru: "Сделать запись спокойной. Человек должен понять формат работы и оставить контакт, не чувствуя давления.",
      en: "Make the booking feel calm. A person should understand the format and leave a contact without pressure.",
    },
    built: {
      ru: "Первый экран, рассказ, три формата с ценами, шаги, отзывы, вопросы, призыв и форма. Есть материал-гайд, оферта и политика. Заявка пишется в Google Таблицу.",
      en: "A first screen, a story, three priced formats, steps, reviews, questions, a closing call and a form. A guide, an offer and a privacy page are included. The enquiry is written to a Google Sheet.",
    },
    outcome: {
      ru: "Формат выбран до переписки. В таблице остаётся услуга и комментарий, а не обрывок чата.",
      en: "The format is chosen before the chat starts. The sheet keeps the service and a note, not a fragment of a conversation.",
    },
    format: { ru: "Лендинг", en: "Landing page" },
    timeline: { ru: "3–7 дней", en: "3–7 days" },
    stack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    frames: [
      frame("/work/sokolova-1.jpg", "Первый экран психолога", "Psychologist hero"),
      frame("/work/sokolova-2.jpg", "Услуги и цены", "Services and fees"),
      frame("/work/sokolova-3.jpg", "Форма записи", "Booking form"),
    ],
  },
  {
    slug: "elvira",
    featured: true,
    category: "bot",
    year: "2026",
    title: { ru: "Элвира", en: "Elvira" },
    summary: {
      ru: "Администратор танцевального зала в ВКонтакте: живая речь, холд слота, контакты и напоминания.",
      en: "A dance-studio administrator in VKontakte: natural speech, a slot hold, contacts and reminders.",
    },
    task: {
      ru: "Пространство «Эльвайс» принимает бронь в личных сообщениях. Бот должен понимать обычную фразу про время и не обещать окно, которого нет.",
      en: "Elweiss takes bookings in private messages. The bot had to understand an ordinary phrase about time and never promise a slot that does not exist.",
    },
    built: {
      ru: "Элвира разбирает «завтра после ужина» и «на следующую неделю», показывает свободные окна и держит выбранное 15 минут. Контакты пишет в таблицу. Если касса заполнена, присылает ссылку ЮKassa. Напоминает о репетиции и сама считает правило отмены. Часы и ссылки, которых не было в календаре, наружу не выходят.",
      en: "Elvira reads “tomorrow after dinner” and “next week”, shows open slots and holds the chosen one for 15 minutes. Contacts go into a table. If the checkout is filled in, she sends a YooKassa link. She reminds about a rehearsal and applies the cancellation rule herself. Hours and links that were not in the calendar never leave the system.",
    },
    outcome: {
      ru: "Ночная заявка не ждёт утра в непрочитанных. Расписание, холд и деньги остаются в правилах, а не в памяти администратора.",
      en: "A night enquiry does not wait until morning in unread messages. The schedule, the hold and the money stay inside the rules, not in someone’s memory.",
    },
    format: { ru: "Бот и автоматизация", en: "Bot and automation" },
    timeline: { ru: "3–10 дней", en: "3–10 days" },
    stack: ["Python", "VK API", "SQLite", "YooKassa"],
    frames: [
      frame("/work/elvira-1.png", "Диалог Элвиры: холд и контакты", "Elvira dialogue: hold and contacts"),
    ],
  },
  {
    slug: "datacenter",
    featured: true,
    category: "system",
    year: "2026",
    title: { ru: "Рынок ЦОД", en: "Data-center market" },
    summary: {
      ru: "Дашборд компаний ЦОД и ИИ-инфраструктуры: фильтры, карточка, письма на трёх языках и выгрузка.",
      en: "A dashboard of data-center and AI-infrastructure companies: filters, a card, letters in three languages and export.",
    },
    task: {
      ru: "Собрать реестр производителей, EPC и инвесторов в Шэньчжэне, Гуанчжоу и Гонконге так, чтобы с ним можно было работать, а не читать простыню.",
      en: "Build a registry of manufacturers, EPC firms and investors in Shenzhen, Guangzhou and Hong Kong that can be worked, not merely read.",
    },
    built: {
      ru: "Сводка, фильтры, карточки компаний, проверка источников и шаблоны писем на английском, китайском и русском. Есть экспорт CSV, лицензия для установки у клиента и упаковка в Docker.",
      en: "A summary, filters, company cards, source checks and letter templates in English, Chinese and Russian. CSV export, a client license and a Docker package are included.",
    },
    outcome: {
      ru: "Поиск компании и черновик письма живут в одном окне. Язык письма переключается под адресата.",
      en: "Finding a company and drafting a letter live in one window. The letter language follows the recipient.",
    },
    format: { ru: "Система", en: "System" },
    timeline: { ru: "2–6 недель", en: "2–6 weeks" },
    stack: ["Python", "Docker", "CSV"],
    frames: [
      frame("/work/dc-1.png", "Главный экран дашборда", "Dashboard home"),
      frame("/work/dc-2.png", "Фильтры и карточки", "Filters and cards"),
      frame("/work/dc-3.png", "Языки письма", "Letter languages"),
    ],
  },
  {
    slug: "detailing",
    category: "bot",
    year: "2026",
    title: { ru: "Детейлинг", en: "Detailing studio" },
    summary: {
      ru: "Бот сообщества ВКонтакте: каталог услуг, прайс и заявка менеджеру.",
      en: "A VKontakte community bot: a service catalogue, a price list and a note to the manager.",
    },
    task: {
      ru: "Студии нужен ответ в сообщениях, пока менеджер занят: что входит в услугу, почём и как оставить запрос.",
      en: "The studio needed an answer in messages while the manager is busy: what a service includes, what it costs and how to leave a request.",
    },
    built: {
      ru: "Постоянная клавиатура: услуги, прайс, менеджер. Карточка услуги собирается из каталога: цена, состав, срок, для кого. Следующее свободное сообщение после менеджера считается заявкой.",
      en: "A persistent keyboard: services, prices, manager. A service card is built from the catalogue: price, scope, timing, who it is for. The next free message after the manager screen is treated as a request.",
    },
    outcome: {
      ru: "Клиент смотрит цену сам. Менеджеру приходит уже сформулированный запрос, а не «сколько стоит?».",
      en: "The client reads the price alone. The manager receives a formed request, not “how much?”.",
    },
    format: { ru: "Бот", en: "Bot" },
    timeline: { ru: "3–10 дней", en: "3–10 days" },
    stack: ["Python", "VK API"],
    frames: [
      frame("/work/detail-1.jpg", "Меню бота детейлинга", "Detailing bot menu"),
      frame("/work/detail-2.jpg", "Карточка услуги", "Service card"),
      frame("/work/detail-3.jpg", "Прайс-лист", "Price list"),
    ],
  },
  {
    slug: "tasks",
    category: "bot",
    year: "2026",
    title: { ru: "Задачи команды", en: "Team tasks" },
    summary: {
      ru: "Telegram-бот с общим списком задач, статусами и выгрузкой CSV.",
      en: "A Telegram bot with a shared task list, statuses and a CSV export.",
    },
    task: {
      ru: "Команде нужен один список вместо пересланных сообщений. Задачу добавляет любой, видят все.",
      en: "A team needed one list instead of forwarded messages. Anyone can add a task, and everyone can see it.",
    },
    built: {
      ru: "Команды добавления, отмены, списка и файла. Статус меняется кнопкой: выполнено, в процессе, отложено. Задачи лежат в SQLite, файл tasks.csv уходит в чат.",
      en: "Commands to add, cancel, list and export. Status changes from a button: done, in progress, postponed. Tasks live in SQLite, and tasks.csv is sent into the chat.",
    },
    outcome: {
      ru: "Список не зависит от того, кто был онлайн. Его можно забрать файлом.",
      en: "The list does not depend on who was online. It can be taken away as a file.",
    },
    format: { ru: "Бот", en: "Bot" },
    timeline: { ru: "2–3 дня", en: "2–3 days" },
    stack: ["Python", "Telegram", "SQLite"],
    frames: [
      frame("/work/tasks-1.png", "Чат со списком задач", "Task chat"),
      frame("/work/tasks-2.png", "Список и подсказка статуса", "List and status hint"),
    ],
  },
  {
    slug: "deepseek",
    category: "bot",
    year: "2026",
    title: { ru: "Диалог DeepSeek", en: "DeepSeek dialogue" },
    summary: {
      ru: "Бот сообщества ВКонтакте, который отвечает моделью и помнит контекст диалога.",
      en: "A VKontakte community bot that answers with a model and remembers the dialogue.",
    },
    task: {
      ru: "Сообществу нужен ответ в личных сообщениях и в беседе, если бота упомянули. Ключи не должны лежать в коде.",
      en: "The community needed replies in private messages and in a chat when the bot is mentioned. Keys must not live in the code.",
    },
    built: {
      ru: "Long Poll, память контекста по пользователю, команды /start, /help и /reset, кнопки сброса и помощи. Модель DeepSeek вызывается через Alibaba Cloud. Настройки читаются из .env.",
      en: "Long Poll, per-user context, /start, /help and /reset, plus reset and help buttons. DeepSeek is called through Alibaba Cloud. Settings are read from .env.",
    },
    outcome: {
      ru: "Диалог не начинается заново на каждой фразе. Сброс контекста остаётся явным действием человека.",
      en: "The dialogue does not restart on every phrase. Clearing the context stays an explicit human action.",
    },
    format: { ru: "Бот", en: "Bot" },
    timeline: { ru: "3–10 дней", en: "3–10 days" },
    stack: ["Python", "VK API", "DeepSeek"],
    frames: [],
  },
  {
    slug: "cleaning",
    category: "automation",
    year: "2026",
    title: { ru: "Калькулятор клининга", en: "Cleaning calculator" },
    summary: {
      ru: "Настольный расчёт сметы уборки из файла Excel. Интернет для расчёта не нужен.",
      en: "A desktop estimate for a cleaning job, read from an Excel file. The calculation does not need the internet.",
    },
    task: {
      ru: "Менеджеру нужна смета при клиенте: площадь, тип уборки, район, выходной и дополнительные работы. Цены живут в таблице, которую правит сам бизнес.",
      en: "A manager needs an estimate in front of a client: area, cleaning type, district, a weekend and extras. Prices live in a spreadsheet the business edits itself.",
    },
    built: {
      ru: "Слева параметры, справа четыре суммы: работы и материалы, накладные, прибыль, итог. Файл можно взять рядом с программой или выбрать с компьютера. Проценты в таблице понимаются и как доля, и как целое число.",
      en: "Parameters on the left, four sums on the right: labour and materials, overhead, profit, total. The file can sit beside the program or be chosen from the computer. Percentages in the sheet are read either as a fraction or as a whole number.",
    },
    outcome: {
      ru: "Смета собирается из актуальных цен, а не из памяти. Таблицу можно обновить, не трогая программу.",
      en: "The estimate is built from current prices, not from memory. The sheet can be updated without touching the program.",
    },
    format: { ru: "Автоматизация", en: "Automation" },
    timeline: { ru: "3–10 дней", en: "3–10 days" },
    stack: ["Python", "Tkinter", "Excel"],
    frames: [
      frame("/work/clean-1.png", "Окно калькулятора до расчёта", "Calculator before a result"),
      frame("/work/clean-2.png", "Четыре суммы и итог", "Four sums and a total"),
    ],
  },
  {
    slug: "reminder",
    category: "automation",
    year: "2026",
    title: { ru: "Напоминания Windows", en: "Windows reminders" },
    summary: {
      ru: "Настольные напоминания: список, быстрые интервалы и системное уведомление.",
      en: "Desktop reminders: a list, quick intervals and a system notification.",
    },
    task: {
      ru: "Короткое напоминание на компьютере, без отдельного сервиса и без облака.",
      en: "A short reminder on the computer, without a separate service and without a cloud.",
    },
    built: {
      ru: "Заголовок, описание, дата и статус. Быстрые кнопки на 10, 20 и 30 минут. Просроченное само становится просроченным. Уведомление Windows приходит даже если окно свёрнуто. Данные в SQLite.",
      en: "Title, description, date and status. Quick buttons for 10, 20 and 30 minutes. An overdue item marks itself. A Windows notification arrives even if the window is minimized. Data sits in SQLite.",
    },
    outcome: {
      ru: "Напоминание не зависит от вкладки браузера. Список можно фильтровать по статусу.",
      en: "A reminder does not depend on a browser tab. The list can be filtered by status.",
    },
    format: { ru: "Автоматизация", en: "Automation" },
    timeline: { ru: "3–10 дней", en: "3–10 days" },
    stack: ["Python", "Tkinter", "SQLite"],
    frames: [
      frame("/work/reminder-1.png", "Список напоминаний", "Reminder list"),
      frame("/work/reminder-2.png", "Окно нового напоминания", "New reminder window"),
    ],
  },
  {
    slug: "habits",
    category: "product",
    year: "2026",
    title: { ru: "Лучше, чем вчера", en: "Better than yesterday" },
    summary: {
      ru: "Закрытый трекер привычек: день, серии, календарь и статистика. Без ленты и чужих глаз.",
      en: "A private habit tracker: the day, streaks, a calendar and statistics. No feed and no outside eyes.",
    },
    task: {
      ru: "Сделать отметку привычки приятной и честной. Данные остаются на устройстве, прогресс виден без социальной витрины.",
      en: "Make marking a habit pleasant and honest. Data stays on the device, and progress is visible without a social display.",
    },
    built: {
      ru: "PWA на React. Экран сегодня, список привычек, тепловая карта года и графики. Отметка выглядит как пузырёк. На телефоне нижние вкладки.",
      en: "A React PWA. Today, the habit list, a year heatmap and charts. A mark looks like a bubble. On a phone, bottom tabs.",
    },
    outcome: {
      ru: "Привычка отмечается за секунду. Серия и пропуски читаются без отдельной таблицы.",
      en: "A habit is marked in a second. The streak and the gaps can be read without a separate spreadsheet.",
    },
    format: { ru: "Продукт", en: "Product" },
    timeline: { ru: "Демо-продукт", en: "Demo product" },
    stack: ["React", "TypeScript", "Vite", "PWA"],
    frames: [
      frame("/work/habits-1.webp", "Вход в трекер привычек", "Habit tracker entrance"),
      frame("/work/habits-2.webp", "Экран сегодня", "Today screen"),
      frame("/work/habits-3.webp", "Статистика", "Statistics"),
    ],
  },
  {
    slug: "vershina",
    category: "product",
    year: "2026",
    title: { ru: "Вершина", en: "Vershina" },
    summary: {
      ru: "Второй трекер привычек: локальное приложение, темы, конструктор и выгрузка в Excel.",
      en: "A second habit tracker: a local app, themes, a builder and an Excel export.",
    },
    task: {
      ru: "Собрать тот же смысл другим характером: победа над собой, золото рассвета, данные только на этом устройстве.",
      en: "Build the same idea with another character: a private win, dawn gold, data only on this device.",
    },
    built: {
      ru: "Экраны вершины, арсенала, лаборатории привычки, карты пути, аналитики и профиля. Две темы. Выгрузка Excel, CSV и JSON. Приложение можно передать архивом и открыть без облака.",
      en: "Screens for the summit, the arsenal, a habit laboratory, a path map, analytics and a profile. Two themes. Excel, CSV and JSON export. The app can be handed over as an archive and opened without a cloud.",
    },
    outcome: {
      ru: "Один сценарий привычки можно одеть в разный визуальный язык и отдать человеку файлом.",
      en: "One habit scenario can wear a different visual language and be handed to a person as a file.",
    },
    format: { ru: "Продукт", en: "Product" },
    timeline: { ru: "Демо-продукт", en: "Demo product" },
    stack: ["React", "TypeScript", "Vite", "Excel"],
    frames: [
      frame("/work/peak-1.jpg", "Стартовый экран «Вершина»", "Vershina opening screen"),
      frame("/work/peak-2.jpg", "День и карточки привычек", "Day and habit cards"),
      frame("/work/peak-3.jpg", "Аналитика", "Analytics"),
    ],
  },
  {
    slug: "warframe",
    category: "product",
    year: "2026",
    title: { ru: "Tenno Farm", en: "Tenno Farm" },
    summary: {
      ru: "Трекер фарма Warframe: цели, циклы миров, журнал дня и сводка. Данные в браузере.",
      en: "A Warframe farm tracker: goals, world cycles, a day journal and a summary. Data stays in the browser.",
    },
    task: {
      ru: "Игроку нужен свой список целей и понимание, что фармить сейчас, без аккаунта и без чужого сервера.",
      en: "A player needed a personal goal list and a sense of what to farm now, without an account and without someone else’s server.",
    },
    built: {
      ru: "Цели из каталога или свои, кнопки добычи, оценка числа заходов, живые циклы открытых миров, недельная сводка, календарь и две темы. Ставится как PWA.",
      en: "Goals from a catalogue or custom ones, loot buttons, an estimate of runs, live open-world cycles, a weekly summary, a calendar and two themes. It installs as a PWA.",
    },
    outcome: {
      ru: "Цель, таймер мира и журнал даты собраны в одном интерфейсе на устройстве игрока.",
      en: "The goal, the world timer and the day’s journal sit in one interface on the player’s device.",
    },
    format: { ru: "Продукт", en: "Product" },
    timeline: { ru: "Демо-продукт", en: "Demo product" },
    stack: ["React", "TypeScript", "Vite", "PWA"],
    frames: [
      frame("/work/wf-1.png", "Главная Tenno Farm", "Tenno Farm home"),
      frame("/work/wf-2.png", "Список целей", "Goal list"),
      frame("/work/wf-3.png", "Цикл мира", "World cycle"),
    ],
  },
  {
    slug: "pharma-sql",
    category: "data",
    year: "2026",
    title: { ru: "Аптечные заказы", en: "Pharmacy orders" },
    summary: {
      ru: "Восемь SQL-запросов по учебным заказам: выручка аптек, лекарства, клиенты и накопленные суммы.",
      en: "Eight SQL queries on a training order set: pharmacy revenue, medicines, clients and running totals.",
    },
    task: {
      ru: "Прочитать таблицу заказов так, чтобы из неё вышли решения: кто продаёт больше, что покупают, кто возвращается.",
      en: "Read an orders table so that decisions come out of it: who sells more, what is bought, who comes back.",
    },
    built: {
      ru: "Запросы с GROUP BY, оконными суммами и отборами. На учебном наборе три верхние аптеки по выручке — «Столичная», «Доктор Айболит» и «Здравсити». Отдельно посчитаны частые клиенты двух сетей.",
      en: "Queries with GROUP BY, running sums and filters. On the training set the three pharmacies by revenue are Stolichnaya, Doctor Aibolit and Zdravcity. Frequent clients of two chains are counted separately.",
    },
    outcome: {
      ru: "Это учебный разбор, не отчёт живой сети. Он показывает, как я достаю из таблицы ответ, прежде чем предлагать систему.",
      en: "This is a training study, not a report for a live chain. It shows how I take an answer out of a table before proposing a system.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["SQL"],
    frames: [],
  },
  {
    slug: "fitness-excel",
    category: "data",
    year: "2026",
    title: { ru: "Фитнес-клуб", en: "Fitness club" },
    summary: {
      ru: "Книга Excel: дашборд, тренеры, возраст, длительность, сезон услуг, оплата и оценки.",
      en: "An Excel workbook: a dashboard, trainers, age, duration, service season, payment and ratings.",
    },
    task: {
      ru: "Собрать операционные срезы клуба на одном листе, чтобы владелец видел не сырые строки, а картины.",
      en: "Gather a club’s operating cuts on sheets an owner can read as pictures, not as raw rows.",
    },
    built: {
      ru: "Листы распределения по тренерам, возраста, среднего времени, сезона по услугам, способа оплаты и оценок клиентов. Сверху дашборд.",
      en: "Sheets for trainers, age, average time, season by service, payment method and client ratings. A dashboard sits on top.",
    },
    outcome: {
      ru: "Учебная модель того, как таблица становится витриной показателей до появления отдельной системы.",
      en: "A training model of how a spreadsheet becomes a display of indicators before a separate system exists.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Excel"],
    frames: [],
  },
  {
    slug: "sales-excel",
    category: "data",
    year: "2026",
    title: { ru: "Продажи сети", en: "Retail sales" },
    summary: {
      ru: "Книга Excel по магазинам, поставщикам, категориям, географии и лояльности.",
      en: "An Excel workbook of stores, suppliers, categories, geography and loyalty.",
    },
    task: {
      ru: "Разложить продажи так, чтобы было видно магазин, поставщика, категорию и страну клиента, а не одну общую сумму.",
      en: "Lay sales out so a store, a supplier, a category and a client’s country are visible, not one total.",
    },
    built: {
      ru: "Дашборд и листы по магазинам, выгоде клиентов, поставщикам, категориям, частоте покупок, географии, программе лояльности и платёжеспособности по странам.",
      en: "A dashboard and sheets for stores, client benefit, suppliers, categories, purchase frequency, geography, a loyalty programme and purchasing power by country.",
    },
    outcome: {
      ru: "Учебный разбор. Он полезен как привычка смотреть продажи слоями, прежде чем автоматизировать отчёт.",
      en: "A training study. It is useful as the habit of reading sales in layers before automating a report.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Excel"],
    frames: [],
  },
  {
    slug: "amazon-python",
    category: "data",
    year: "2026",
    title: { ru: "Маркетплейс Amazon", en: "Amazon marketplace" },
    summary: {
      ru: "Ноутбук с разбором учебного набора данных маркетплейса.",
      en: "A notebook study of a training marketplace dataset.",
    },
    task: {
      ru: "Посмотреть структуру продаж площадки: что в данных вообще можно спросить, прежде чем строить витрину.",
      en: "Look at the structure of marketplace sales: what the data can be asked, before building a display.",
    },
    built: {
      ru: "Jupyter-ноутбук amazon_marketplace_data. Учебный разбор, без претензии на отчёт Amazon.",
      en: "The Jupyter notebook amazon_marketplace_data. A training study, not an Amazon report.",
    },
    outcome: {
      ru: "Навык, который потом садится в дашборд или в выгрузку для собственника.",
      en: "A skill that later sits inside a dashboard or an export for an owner.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Python", "Jupyter"],
    frames: [],
  },
  {
    slug: "bank-python",
    category: "data",
    year: "2026",
    title: { ru: "Транзакции банка", en: "Bank transactions" },
    summary: {
      ru: "Ноутбук по учебным транзакциям клиентов банка.",
      en: "A notebook on a training set of bank-client transactions.",
    },
    task: {
      ru: "Разобрать поведение клиентов по операциям: частота, суммы и группы, а не по анкете.",
      en: "Read client behaviour from operations: frequency, amounts and groups, not from a form.",
    },
    built: {
      ru: "Jupyter-ноутбук bank_clients_research на учебном наборе. Это демо аналитики, не банковский продукт.",
      en: "The Jupyter notebook bank_clients_research on a training set. It is an analytics demo, not a banking product.",
    },
    outcome: {
      ru: "Так я проверяю, какие срезы вообще имеют смысл, до того как рисовать кабинет.",
      en: "This is how I check which cuts make sense before drawing a cabinet.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Python", "Jupyter"],
    frames: [],
  },
  {
    slug: "literacy-python",
    category: "data",
    year: "2026",
    title: { ru: "Грамотность", en: "Literacy" },
    summary: {
      ru: "Ноутбук по учебному набору грамотности населения, срез 2026.",
      en: "A notebook on a training literacy dataset, 2026 cut.",
    },
    task: {
      ru: "Сравнить показатель между группами и не потерять, что именно считается грамотностью в этом файле.",
      en: "Compare the indicator across groups without losing what this file actually counts as literacy.",
    },
    built: {
      ru: "Jupyter-ноутбук literacy_rate_2026. Учебное исследование открытого среза, не государственная статистика от моего имени.",
      en: "The Jupyter notebook literacy_rate_2026. A training study of an open cut, not an official statistic in my name.",
    },
    outcome: {
      ru: "Аккуратность формулировки: график не должен обещать больше, чем лежит в столбце.",
      en: "Care with the claim: a chart should not promise more than the column holds.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Python", "Jupyter"],
    frames: [],
  },
  {
    slug: "netflix-python",
    category: "data",
    year: "2026",
    title: { ru: "Пользователи Netflix", en: "Netflix users" },
    summary: {
      ru: "Ноутбук по учебному набору пользователей стриминга.",
      en: "A notebook on a training set of streaming users.",
    },
    task: {
      ru: "Посмотреть, как пользователи распределены, и какие вопросы к такому набору вообще законны.",
      en: "See how users are distributed, and which questions of a set like this are even fair.",
    },
    built: {
      ru: "Jupyter-ноутбук netflix_users. Демо-разбор, не внутренний отчёт сервиса.",
      en: "The Jupyter notebook netflix_users. A demo study, not an internal report of the service.",
    },
    outcome: {
      ru: "Ещё один пример того, как сырой файл превращается в короткий вывод, пригодный для интерфейса.",
      en: "Another example of a raw file becoming a short finding that an interface can carry.",
    },
    format: { ru: "Данные", en: "Data" },
    timeline: { ru: "Учебный разбор", en: "Course study" },
    stack: ["Python", "Jupyter"],
    frames: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function relatedProjects(slug: string) {
  const current = getProject(slug);
  if (!current) return [];
  const same = projects.filter(
    (project) => project.slug !== slug && project.category === current.category,
  );
  const extra = projects.filter(
    (project) => project.slug !== slug && project.featured && project.category !== current.category,
  );
  return [...same, ...extra].slice(0, 3);
}

export const visualProjects = projects.filter((project) => project.category !== "data");
export const dataProjects = projects.filter((project) => project.category === "data");
export const featuredProjects = projects.filter((project) => project.featured);

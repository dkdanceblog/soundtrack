const archives = {
  1970: "https://docs.google.com/document/d/e/2PACX-1vRuLV4RpHhKjNCxNaMGIyhwJzNB3sX7xSFPjroqfBBkrU34ncL7uwDdsA0P_HErZg/pub?embedded=true",
  1971: "https://docs.google.com/document/d/e/2PACX-1vShu7FexQMU7LxvSQ6TGe4RdRIggU8OMiKZCIi5InrvXnurYvhM95JGPqnXnrfoWg/pub?embedded=true",
  1972: "https://docs.google.com/document/d/e/2PACX-1vRgv-gZZTWu-yUUFwyehZbN7EU7Jg1s6u-NlRSUGaTQ-jTRyO7Lh43ANUw0ELVRww/pub?embedded=true",
  1973: "https://docs.google.com/document/d/e/2PACX-1vSzhtLAO-nTeOP1HrggMgTDPmOqG_8TJJ3bj_wIg0GdD7_b5t90dbPsZ7dTFIesAQ/pub?embedded=true",
  1974: "https://docs.google.com/document/d/e/2PACX-1vTzr2ZB1kry6t4g8QrJ5wxJAtGdaPPsujopiGRXLXGeZSAKqxJfKozumNEvN98dgQ/pub?embedded=true",
  1975: "https://docs.google.com/document/d/e/2PACX-1vSxkUOYF-z7OrEhHtvcGnIY-gK0sf3XdxQojilXos3Dm4kyt2MEfdZPvBE_zIrHUw/pub?embedded=true",
  1976: "https://docs.google.com/document/d/e/2PACX-1vTfrOLpvRDdvdMU6NgRLysJh6T6n0W2QFkugSL-ZCNJLyNzZTQBriOAbemQ01bKZw/pub?embedded=true",
  1977: "https://docs.google.com/document/d/e/2PACX-1vQeuirSnTNtTfaBg33xiiTAY4PRC-HI9l-MuMzqu2SkOdOyjxicMpoyeeO9sYCOog/pub?embedded=true",
  1978: "https://docs.google.com/document/d/e/2PACX-1vSaeDaTnoFV5wUZhqJU2WLBf4R8B5gRx-cQSmfr6b67hsXPSlMihUWNijaQDqraRQ/pub?embedded=true",
  1979: "https://docs.google.com/document/d/e/2PACX-1vQ0UdR_O437tFOgy7XwguMyJn3y7O-0WVwLyKtYW9d_sVvwe3-zNoLJgFO-TFbMKw/pub?embedded=true",
  1980: "https://docs.google.com/document/d/e/2PACX-1vTn16vLP5AetqjCx0NYBr_lLfkZdBf-RRVwXfEea_UW_RoA7XwCSagH8F6XziKfPA/pub?embedded=true",
  1981: "https://docs.google.com/document/d/e/2PACX-1vSsVEpYNsWF82GBS9BI214FVgUz4TsOJXrFLU4hclABE0-7kBim-60rBNgIdfLVsw/pub?embedded=true",
  1982: "https://docs.google.com/document/d/e/2PACX-1vStwPx7OxiEgmQt_IGhoP2jmHr6ks-muLAMC0IOeJ2MEQr2jeDp1cJ1SlvQqnEpZQ/pub?embedded=true",
  1983: "https://docs.google.com/document/d/e/2PACX-1vTjrZH2iaWzTKe96zzTl7x_hhESOZlj7t1Ei3MMfJa7z5JU8OLbDdaoaZsFFPWqKg/pub?embedded=true",
  1984: "https://docs.google.com/document/d/e/2PACX-1vTGxi5DuMQ4WWaCtGx8-eAa8TrKFSLMYV9_hHDkw4M2SPyEyNjU09KZKwpdzeHGkw/pub?embedded=true",
  1985: "https://docs.google.com/document/d/e/2PACX-1vT0m30dQ48726VwldFYIOHrqo0I0TqZzi3SCWCP70bJZKB35R2TsjilHJeU84ExEw/pub?embedded=true",
  1986: "https://docs.google.com/document/d/e/2PACX-1vTOy9SBhVEk5UalBotbVqI-57J4reKquaM3JQfgWy1g-7VLb3GivWyqtamXR452ww/pub?embedded=true",
  1987: "https://docs.google.com/document/d/e/2PACX-1vRyGO711gAEZTSDLnx5NRLXCx9uY57Q51gMF3hTKWqOBa4kKBwSBlhEztRQp59MmQ/pub?embedded=true",
  1988: "https://docs.google.com/document/d/e/2PACX-1vRhHZzu-Dxi1gQe9UxWjgmFPkC_KTKuxtimwgipltsTPv6r30d0ZPy4KSAmXOTGXQ/pub?embedded=true",
  1989: "https://docs.google.com/document/d/e/2PACX-1vSPJgxP8cLwhkBSHty-ObEEh7cWq7yCRocBLN-EVKXtLAdBd00YVAxnoqwetXMnFQ/pub?embedded=true",
  1990: "https://docs.google.com/document/d/e/2PACX-1vTlpfFpLLV4qKyauzAoHln4OsB_iO5UY-EdhW3mrwBzkTrWlloauvs9iE7tdTMpOg/pub?embedded=true",
  1991: "https://docs.google.com/document/d/e/2PACX-1vTLiwJpj1C-7CQzsmbMCfM1O38PvUG1xlhJ5db7_kn8YXlGhj6Snfp6mPh_CsguuA/pub?embedded=true",
  1992: "https://docs.google.com/document/d/e/2PACX-1vQBBrewGdoJAZmcKlV2BPgsCNRokNnOmkfm7fnRl9llgImkAJdU3DF_vWwk2rdldA/pub?embedded=true",
  1993: "https://docs.google.com/document/d/e/2PACX-1vTmqyYXQU9HjR2NRo6ziyerhLOmrQyzgObvh80cP9ab43QTBF3ZNJM-UW-Hcox91w/pub?embedded=true",
  1994: "https://docs.google.com/document/d/e/2PACX-1vR_ltkrimmkkyYbdpNh025fZTB6BAHSxC_CnBeIW7Ewe_8Jksk3dUsTQeZ4v3BqMg/pub?embedded=true",
  1995: "https://docs.google.com/document/d/e/2PACX-1vTN1mdTZd0IwwWbQPEKRIz4ymglra4S0nD8Ph8xwAO72kXIz4cLaO-qP3xXmIRI1g/pub?embedded=true",
  1996: "https://docs.google.com/document/d/e/2PACX-1vRGOrGhm_ZNLXmN4vriKH7dwn3crxyAVWYkuFsfC70janNuwIptsDr1PdQxHgSkAw/pub?embedded=true",
  1997: "https://docs.google.com/document/d/e/2PACX-1vSv83M2eFveh7NS8zMB01J46ASkKyp68hmmGIcay1MTmzCJmzTbt4eRspas4lCF2Q/pub?embedded=true",
  1998: "https://docs.google.com/document/d/e/2PACX-1vR0V1rbDbjNVPcvp_jiIp6DItJt2w_U2f8vxFuJRO2sqb7EJqY3ITccimWf8PBnDQ/pub?embedded=true",
  1999: "https://docs.google.com/document/d/e/2PACX-1vRrk6PHJix_r5uwiO5eMVjbBwX6oLGaCffinv6t--nZduz-4qNQuYFQOSWmiNee7A/pub?embedded=true",
  2000: "https://docs.google.com/document/d/e/2PACX-1vR_6QEhXKMPrKlflU0ImIB-gHYAwm0gVRz7-XGVVhK4_XxK5I-mB3jnhWLJ5GgCjw/pub?embedded=true",
};

const checks = {
  1970: ["Ваше благородие", "Ты погоди", "Чунга-чанга", "Алешкина любовь", "А лес стоит загадочный", "Товарищ", "Глаза на песке", "Возвращение романса"],
  1971: ["Незримый бой", "Ромашки спрятались", "Нам нужна одна победа", "Журавль по небу летит", "Ходят кони", "От героев былых времен", "Тополиный пух", "Веришь-не веришь", "Пороша белая", "Он не вернулся из боя", "Свадьба", "А где мне взять такую песню", "Не плачь, девчонка", "Зима"],
  1972: ["Песенка о шпаге", "Что будет, то и будет", "Лесной олень", "Черное и белое", "Где среди пампасов бегают бизоны", "Увезу тебя я в тундру", "Гляжу в озера синие", "Березовый сок", "За того парня", "Подари мне платок"],
  1973: ["Если любишь ты", "Мгновенье", "Где-то далеко", "Звенит январская вьюга", "Кап-кап-кап", "Разговор со счастьем", "Там, за облаками", "Мелодия", "Дрозды", "Разве тот мужчина", "Мой адрес-Советский Союз", "Точка, точка, запятая"],
  1974: ["Голубой вагон", "Смуглянка", "Этот большой мир", "Не повторяется такое никогда", "Поговори со мною, мама", "Травы, травы", "Баллада о матери", "Старые слова", "Есть только миг", "В порту", "Посидим, поокаем"],
  1975: ["Ты говоришь мне о любви", "Степная птица вдаль зовет", "Арлекино", "Губит людей не пиво", "Мальчик купидон", "День Победы", "Где он, этот день", "Лебединая верность", "Яблони в цвету", "Вся жизнь впереди"],
  1976: ["Небо мое", "Уходишь ты", "Мольба", "Мне нравится", "На Тихорецкую", "По улице моей", "У зеркала", "Вологда", "Через две зимы", "Очень хорошо", "Аленушка"],
  1977: ["По секрету всему свету", "Соловьиная роща", "Вероника", "Когда цвели сады", "Алия"],
  1978: ["Остановите музыку", "Сонет Шекспира", "Песенка про меня", "Напиши мне письмо", "Фотографии любимых", "Песня первоклассника", "Ты возьми меня с собой", "Наш город"],
  1979: ["Эти летние дожди", "Звёздное лето", "Красный конь", "Подберу музыку", "Поднимись над суетой", "Поворот"],
  1980: [
    "Александра", "Диалог у новогодней елки", "Мы маленькие дети",
    "Гадалка", "Кружатся диски", "Малиновка", "До свидания, Москва",
    "Мои года", "Вокруг любви", "Не оставляй меня одну", "Вот и весь разговор",
    "Колесо судьбы", "Ожидание", "Танец на барабане",
  ],
  1981: ["Маэстро", "Я тебя рисую", "Птица счастья", "Всё пройдёт"],
  1982: ["Старинные часы", "Я не могу иначе", "Три колодца"],
  1983: ["Полёт на дельтаплане", "Трава у дома", "Три белых коня", "А музыка звучит"],
  1984: ["Расскажите, птицы", "Без меня", "Снегири", "Надо подумать"],
  1985: ["Прекрасное далёко", "Паромщик", "Комарово", "Майский вальс"],
  1986: [
    "Если любишь", "Знаю — любил", "Конь мой, конь", "Белая ночь", "Глупец на холме",
    "Али-баба", "Время мчится", "Портрет Челентано", "Я люблю банджо", "Балалайка",
    "Ванька-встанька", "Если бы мы были взрослей", "Прости, поверь", "Две звезды",
    "Луна, луна", "Лаванда", "Улетели листья",
  ],
  1987: [
    "Было, но прошло", "20:00", "Алло", "Королева", "Белый снег", "Чарли Чаплин",
    "Чёрное море", "Южный берег Крыма", "Евпатория", "Мечтатель", "Я готов целовать",
    "Рэп диск-жокея", "У самого синего моря", "Замыкая круг", "Я тебя никогда не забуду",
    "Белая ворона", "Ягода-малина", "На теплоходе музыка играет", "Чистые пруды",
  ],
  1988: [
    "Дорогие мои старики", "Люси", "Билет на балет", "Яблоки на снегу",
    "Синий туман", "Только этого мало", "Золотое сердце",
  ],
  1989: [
    "Россия", "Не сыпь мне соль на рану", "Розовые розы", "Забава",
    "Незабудка", "Зимний сад", "Музыка нас связала", "Маргарита",
  ],
  1990: [
    "Жёлтые тюльпаны", "Белый вальс", "Плот", "Дожди",
    "Я за тебя молюсь", "Странная женщина", "Колдовское озеро",
    "Не плачь, Алиса", "Атас",
  ],
  1991: ["Ну и что", "Я вернусь"],
  1992: ["Атлантида", "Офицеры", "Хуторянка", "Такси"],
  1993: ["Ля-ля-фа", "Ночь", "Просто кончилась зима", "Осенний поцелуй"],
  1994: ["Дорога", "Городок", "Любовь, похожая на сон", "Дружочек"],
  1995: ["Сэра", "Мальчик-бродяга", "Нелюбимая", "Выпьем за любовь"],
  1996: [
    "Тучи", "Радио ночных дорог", "Погода в доме", "Самоволочка",
    "Течёт ручей", "Ясный мой свет", "Зимняя вишня", "Бродяга",
  ],
  1997: [
    "Позови меня с собой", "Самба белого мотылька", "Королева", "Незаконченный роман",
    "Кукла", "Что ты имела в виду", "Колечко",
  ],
  1998: ["Голубая луна", "Ты не верь слезам", "Крошка моя", "Тополиный пух"],
  1999: ["Солнышко", "Я у твоих ног", "Аргентина-Ямайка 5:0", "Люби меня, люби"],
  2000: ["Ты где-то", "Мадам Брошкина", "Полковнику никто не пишет", "Цветы"],
};

function plainText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&laquo;|&#171;/g, "«")
    .replace(/&raquo;|&#187;/g, "»")
    .replace(/&mdash;|&#8212;/g, "—")
    .replace(/&ndash;|&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .normalize("NFKC")
    .toLocaleLowerCase("ru-RU");
}

function canonical(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

for (const [year, url] of Object.entries(archives)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${year}: archive returned ${response.status}`);
  const text = canonical(plainText(await response.text()));
  console.log(`\n${year}`);
  for (const title of checks[year]) {
    const found = text.includes(canonical(title));
    console.log(`${found ? "✓" : "·"} ${title}`);
  }
}

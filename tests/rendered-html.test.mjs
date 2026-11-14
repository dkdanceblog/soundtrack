import assert from "node:assert/strict";
import test from "node:test";

test("renders the date picker and evidence with real product metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /name="birthdate"/);
  assert.match(html, /Что известно о популярности|ЧТО ИЗВЕСТНО О ПОПУЛЯРНОСТИ/);
  assert.doesNotMatch(html, /Сомневаюсь в треке/);
  assert.doesNotMatch(html, /codex-preview/);
});


test("production worker returns dated results and rejects invalid API dates", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const [date, precision] of [["2002-03-01", "Неделя"], ["2002-04-01", "Неделя"], ["1999-07-04", "Неделя"], ["2024-01-05", "Неделя"]]) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    assert.equal(response.status, 200, date);
    const data = await response.json();
    assert.equal(data.hit.precision, precision, date);
    assert.ok(data.hit.sources.length, date);
  }
  const firstChartDozen = await worker.fetch(new Request("http://localhost/api/hit?date=1999-07-04"), env, ctx);
  const firstChartDozenData = await firstChartDozen.json();
  assert.match(firstChartDozenData.hit.title, /Туда/);
  assert.ok(firstChartDozenData.hit.sources.length >= 2);
  const invalid = await worker.fetch(new Request("http://localhost/api/hit?date=2023-02-29"), env, ctx);
  assert.equal(invalid.status, 400);
  const shared = await worker.fetch(new Request("http://localhost/?date=2002-03-01", { headers: { accept: "text/html" } }), env, ctx);
  const html = await shared.text();
  assert.match(html, /01.03.2002/);
  assert.match(html, /«Золотой граммофон»/);
});

test("keeps the strengthened historical anchors precise and local", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const cases = [
    ["1970-01-10", /Белые ночи/],
    ["1970-02-10", /Только ты молчи/],
    ["1970-04-10", /Россия/],
    ["1970-11-10", /Ленивый дождь/],
    ["1972-03-10", /Ребята с нашего двора/],
    ["1972-06-10", /Журавли|Семёновна/],
    ["1972-10-10", /Ромашки спрятались|Берёза белая/],
    ["1973-01-10", /Благодарю тебя/],
    ["1973-02-10", /Гармошка/],
    ["1973-05-10", /Я так давно не видел маму/],
    ["1973-07-10", /Стою на полустаночке/],
    ["1974-02-10", /Разбуди меня, дождь/],
    ["1974-04-10", /Мелодия/],
    ["1974-06-10", /У меня, Марины/],
    ["1974-11-10", /Надежда/],
    ["1975-02-10", /Дорогие мои москвичи/],
    ["1975-04-10", /^Песня$/],
    ["1975-06-10", /Девятый класс|Десятый класс/],
    ["1975-08-10", /Колыбельная/],
    ["1975-11-10", /Арлекино/],
    ["1976-05-10", /День Победы/],
    ["1976-02-10", /Наши любимые/],
    ["1976-07-10", /Герои спорта|Динамо-марш|Песня о риске/],
    ["1976-10-10", /Сыну/],
    ["1976-11-10", /Песня Хоакина/],
    ["1979-02-10", /Сохнет, сохнет во поле травушка/],
    ["1979-04-10", /Верни мне музыку|Так не должно быть/],
    ["1979-06-10", /Звездное лето/],
    ["1979-07-10", /Старт даёт Москва/],
    ["1979-08-10", /Начало/],
    ["1979-12-10", /Звёздное лето/],
    ["1983-01-10", /Миллион алых роз|Канатоходка|Поздно/],
    ["1983-04-10", /Полёт на дельтаплане|Любовь и разлука/],
    ["1983-02-10", /Канатоходка/],
    ["1983-03-10", /Всё пройдёт/],
    ["1983-06-10", /Крыша дома твоего/],
    ["1983-05-10", /Нежная мелодия/],
    ["1983-07-10", /Песня о моём крае/],
    ["1983-08-10", /Мамины глаза/],
    ["1983-09-10", /А знаешь, всё ещё будет/],
    ["1983-10-10", /Белый снег/],
    ["1983-11-10", /Я не могу иначе/],
    ["1984-01-10", /Ветер перемен/],
    ["1984-02-10", /Трава у дома|А музыка звучит/],
    ["1984-03-10", /Айсберг/],
    ["1984-05-10", /Буги-вуги каждый день/],
    ["1984-06-10", /Эхо первой любви/],
    ["1984-07-10", /Затменье сердца/],
    ["1984-08-10", /Романс о романсе/],
    ["1984-09-10", /Белая ночь/],
    ["1984-11-10", /Аист на крыше/],
    ["1985-03-25", /Прекрасное далёко/],
    ["1985-01-10", /Свет, моя улица/],
    ["1985-02-10", /Остановись, постой!/],
    ["1985-04-10", /Старый альбом/],
    ["1985-06-10", /Путь домой/],
    ["1985-05-10", /День Победы/],
    ["1985-07-10", /По лестнице/],
    ["1985-08-10", /Сеньорита Грация/],
    ["1985-10-10", /Аист на крыше/],
    ["1985-11-10", /Комарово/],
    ["1991-05-28", /Я диджей/],
    ["1991-03-10", /Не плачь, Алиса/],
    ["1991-09-10", /Пластун/],
    ["1991-11-10", /Небо и земля/],
    ["1991-12-10", /Рай в шалаше/],
    ["1992-01-10", /Хуторянка/],
    ["1992-02-10", /Ксюша/],
    ["1992-03-10", /Такси/],
    ["1992-04-10", /Делай как я|Девочка в красном/],
    ["1992-05-10", /Ксюша/],
    ["1992-06-10", /Делай как я|Девочка в красном|Запорожец/],
    ["1992-07-10", /Делай как я|Девочка в красном|Запорожец/],
    ["1992-08-10", /Секс без перерыва|Танцы/],
    ["1992-09-10", /Два кусочека колбаски|Девочка в красном/],
    ["1992-10-10", /Посмотри в глаза|Запорожец/],
    ["1992-11-10", /Запорожец|Девочка в красном/],
    ["1992-12-10", /Лёха|Запорожец/],
    ["1993-03-08", /Босоногий мальчик/],
    ["1993-02-10", /Ничего не поделать/],
    ["1993-04-10", /Секс без перерыва/],
    ["1993-05-04", /Прогулки по воде/],
    ["1993-07-10", /Как на войне/],
    ["1993-06-10", /Меня зовут Смерть/],
    ["1971-01-10", /Ненаглядный мой/],
    ["1971-05-10", /Любовь, как песня/],
    ["1977-02-10", /Вологда/],
    ["1977-03-10", /Струны гитары/],
    ["1977-11-10", /Женщина, которая поёт/],
    ["1978-03-10", /Вступительная песня/],
    ["1978-06-10", /Я люблю этот мир/],
    ["1978-07-01", /И это всё о нём/],
    ["1978-08-30", /Дай мне сил, земля/],
    ["1978-09-27", /Солнечные часы/],
    ["1978-12-01", /Придёт и к вам любовь/],
    ["1984-04-10", /Закат-рассвет/],
    ["1984-10-10", /Если любишь — люби/],
    ["1990-04-10", /Красный закат/],
    ["1990-07-10", /Звезда по имени Солнце/],
    ["2002-02-10", /Нас не догонят/],
    ["2002-06-10", /Первый раз/],
    ["2002-12-10", /Мой рок-н-ролл/],
    ["1993-08-10", /Солнце встаёт!/],
    ["1993-09-10", /Мальчик мой/],
    ["1993-10-10", /Замок из дождя/],
    ["1993-11-10", /Всё так не просто/],
    ["1993-12-10", /Ля-ля-фа|Ночь|Просто кончилась зима|Осенний поцелуй/],
    ["1994-02-10", /Дружочек/],
    ["1994-03-10", /Хоп-хей, ла-ла-лей|Городок|Сердце не камень|Поклонник/],
    ["1994-04-20", /Тутанхамон/],
    ["1994-05-10", /Колокольчик/],
    ["1994-06-10", /Немного огня/],
    ["1994-07-10", /Поклонник/],
    ["1994-08-10", /Дорога/],
    ["1994-09-10", /Колыбельная/],
    ["1994-10-10", /На летящем коне|Мотылёк/],
    ["1994-11-10", /Магадан/],
    ["1994-12-10", /Давай оставим всё как есть/],
    ["1995-01-23", /Опиум для никого/],
    ["1995-02-10", /Серые глаза/],
    ["1995-03-10", /Сэра|Ночь накануне Рождества/],
    ["1995-04-10", /Лунный кот/],
    ["2002-03-20", /За четыре моря/],
    ["2002-05-30", /Простые движения/],
    ["1995-05-07", /Комбат/],
    ["1995-06-10", /Это всё/],
    ["1995-07-10", /Крылья/],
    ["1995-08-10", /Крылья/],
    ["1995-09-17", /Круг от руки/],
    ["1995-10-10", /Крылья/],
    ["1995-11-10", /Мэри/],
    ["1995-12-10", /Ночь накануне Рождества/],
    ["1996-05-10", /Где-то/],
    ["1996-03-10", /Я тучи разведу руками/],
    ["1996-04-10", /Маленькая страна/],
    ["1996-06-09", /Конь вороной/],
    ["1996-07-19", /Ясный мой свет/],
    ["1996-08-10", /Бедная овечка/],
    ["1996-09-10", /Кто ещё/],
    ["1996-10-07", /Вера/],
    ["1996-11-25", /Зимняя вишня/],
    ["1997-05-10", /Позови меня с собой/],
    ["1997-06-10", /Студент/],
    ["1997-02-10", /Алмаз/],
    ["1997-03-10", /Моряк/],
    ["1997-04-10", /Утекай/],
    ["1997-07-27", /Мальчик хочет в Тамбов/],
    ["1997-08-10", /Малыш/],
    ["1997-09-30", /Видение/],
    ["1997-10-10", /Кто-то простит/],
    ["1997-12-10", /Ребята с нашего двора/],
    ["1998-02-10", /Крошка моя/],
    ["1998-01-10", /Лучшая песня о любви/],
    ["1998-03-10", /Медсестра/],
    ["1998-04-10", /Выхода нет/],
    ["1998-05-10", /Тише, послушай/],
    ["1998-06-10", /На вечеринке/],
    ["1998-07-10", /Любочка/],
    ["1998-08-10", /Кукла колдуна/],
    ["1998-12-10", /Ковёр-вертолёт/],
    ["1999-02-10", /Беспризорник/],
    ["1999-01-10", /Катись, колесо/],
    ["1999-04-10", /Двое/],
    ["1999-05-25", /Ромашки|Туда/],
    ["1999-06-10", /Прыгну со скалы/],
    ["1999-08-10", /Чао, бамбино/],
    ["1999-09-10", /Любовь/],
    ["1999-11-10", /Река любви/],
    ["2000-02-10", /Без обмана/],
    ["2000-03-10", /Искала/],
    ["2000-04-10", /Мелодия моей души/],
    ["2000-06-10", /Демобилизация/],
    ["2000-07-10", /Алёшка/],
    ["2000-08-10", /Полковнику никто не пишет/],
    ["2000-09-10", /Мой сон/],
    ["2000-10-10", /Восьмиклассница/],
    ["2000-12-10", /Новогодняя/],
    ["2001-01-10", /Опера № 2/],
    ["2001-02-10", /Опера № 2/],
    ["2001-06-21", /Горошины/],
    ["2001-07-10", /Не говори мне/],
    ["2001-08-29", /Ты поверишь/],
    ["2001-09-10", /Попытка № 5/],
    ["2001-10-10", /Серебро/],
    ["2001-12-10", /Я за тебя умру|На острие атаки/],
    ["2002-07-10", /Смайл/],
    ["2002-01-10", /Некрещёная луна/],
    ["2002-08-10", /Мой рок-н-ролл/],
    ["2003-06-10", /Роза чайная/],
    ["2003-02-10", /Не оставляй меня, любимый!/],
    ["2003-03-10", /Про любовь/],
    ["2003-07-10", /Небо/],
    ["2003-08-10", /Желанная/],
    ["2003-09-10", /Океан и три реки/],
    ["2003-11-10", /Биология/],
    ["2004-03-10", /Ты узнаешь её/],
    ["2004-01-10", /Билетик в кино/],
    ["2004-02-10", /Плакала берёза/],
    ["2004-04-10", /К дому Сварога/],
    ["2004-05-10", /Нарисуй помадой/],
    ["2004-06-10", /Небо/],
  ];

  for (const [date, title] of cases) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    assert.equal(response.status, 200, date);
    const data = await response.json();
    if (/^(gramophone|maximum)-weekly-/.test(data.hit.sourceId)) {
      // BETA78: a dated weekly radio hit-parade within six days replaces month-level evidence.
      assert.equal(data.hit.precision, "Неделя", date);
      assert.ok(data.hit.distanceDays <= 6, date);
      assert.match(data.hit.method, /массовая популярность вне аудитории/, date);
    } else if (data.hit.sourceId.startsWith("gramophone-2004-")) {
      assert.ok(data.hit.precision === "Месяц" || data.hit.distanceDays <= 6, date);
      assert.equal(data.hit.alternatives.length, 2, date);
      assert.match(data.hit.method, /массовая популярность вне аудитории/, date);
    } else if (data.hit.sourceId.startsWith("zd-reader-")) {
      assert.equal(data.hit.precision, "Месяц", date);
      assert.equal(data.hit.evidenceMonth, date.slice(0,7), date);
      assert.ok(data.hit.alternatives.length >= 2, date);
      assert.match(data.hit.method, /одна аудитория и вторичный источник/, date);
    } else {
      assert.equal(data.hit.precision, "Месяц", date);
      assert.match(data.hit.title, title, date);
      assert.ok(data.hit.sources.length >= 2, date);
    }
  }

  const weekly2004 = await worker.fetch(new Request("http://localhost/api/hit?date=2004-07-15"), env, ctx);
  assert.equal(weekly2004.status, 200);
  const weekly2004Data = await weekly2004.json();
  assert.equal(weekly2004Data.hit.precision, "Неделя");
  assert.match(weekly2004Data.hit.title, /О нём/);
  assert.ok(weekly2004Data.hit.sources.length >= 2);

});


test("excluded recordings never appear in production results or alternatives", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const date of ["1972-01-10", "1977-06-10", "1977-07-10", "1978-10-29"]) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    assert.equal(response.status, 200, date);
    const { hit } = await response.json();
    assert.ok(hit, date);
    assert.doesNotMatch(JSON.stringify([hit, ...hit.alternatives]), /Жужуна цвима|Роза Рымбаева.*Алия|Евгений Дога.*Вальс/);
    if (hit.precision === "Месяц") assert.equal(hit.evidenceMonth ?? hit.chartDate.slice(0, 7), date.slice(0, 7));
  }
});

test("2025/2026 API and shared HTML expose streaming evidence without invented weekly totals", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const date of ["2025-12-01", "2025-12-22", "2025-12-31", "2026-01-26", "2026-03-23", "2026-05-19", "2026-06-22", "2026-07-14", "2026-09-08", "2026-09-30", "2026-10-01"]) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    assert.equal(response.status, 200);
    const { hit } = await response.json();
    assert.equal(hit.mode, "стриминговый чарт");
    assert.equal(hit.alternatives.length, 2);
    assert.match(hit.period, /снимок чартов/);
  }
  const response = await worker.fetch(new Request("http://localhost/?date=2026-09-08"), env, ctx);
  const html = await response.text();
  assert.doesNotMatch(html, /СЛУШАТЬ · /);
  for (const service of ['Яндекс Музыка', 'VK Музыка', 'Spotify', 'YouTube']) assert.match(html, new RegExp(`btn-service[^>]*>${service}<`));
  assert.match(html, /open\.spotify\.com\/search\//);
  assert.match(html, /music\.yandex\.ru\/search/);
  assert.match(html, /og:title" content="«/);
  assert.doesNotMatch(html, /og:image/);
  assert.match(html, /СЛУШАТЕЛЬСКИЕ ЧАРТЫ 2026/);
  const december = await worker.fetch(new Request("http://localhost/?date=2025-12-31"), env, ctx);
  const decemberHtml = await december.text();
  assert.match(decemberHtml, /СЛУШАТЕЛЬСКИЕ ЧАРТЫ 2025/);
  assert.doesNotMatch(decemberHtml, /СЛУШАТЕЛЬСКИЕ ЧАРТЫ 2026/);
});

test("new historical API keeps publication year, poll month and radio limits visible", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const date of ["1980-04-10", "1980-12-15"]) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    const { hit: poll } = await response.json();
    assert.equal(poll.mode, "месячный чарт");
    assert.equal(poll.evidenceMonth, date.slice(0, 7));
    assert.equal(poll.alternatives.length, 4);
    assert.match(poll.method, /одна аудитория и вторичный источник/);
    if (date.startsWith("1980-12")) assert.equal(poll.chartDate, "1981-01-01");
  }
  const december = await worker.fetch(new Request("http://localhost/api/hit?date=1981-12-15"), env, ctx);
  assert.equal(december.status, 200);
  const { hit } = await december.json();
  assert.equal(hit.year, 1981);
  assert.equal(hit.evidenceMonth, "1981-12");
  assert.equal(hit.chartDate, "1982-01-31");
  assert.equal(hit.alternatives.length, 4);
  const autumn = await worker.fetch(new Request("http://localhost/api/hit?date=1998-10-31"), env, ctx);
  const { hit: october } = await autumn.json();
  assert.equal(october.precision, "Неделя");
  assert.equal(october.chartDate, "1998-11-01");
  assert.match(october.method, /массовая популярность вне аудитории/);
  const rendered = await worker.fetch(new Request("http://localhost/?date=1981-12-15"), env, ctx);
  const html = await rendered.text();
  assert.match(html, /31\.01\.1982/);
  assert.match(html, /декабрь 1981/);
});

test("production exposes month-only gap evidence and coherent May 2020 weeks", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const date of ["2018-07-31", "2018-08-01", "2018-09-10", "2020-05-01", "2020-05-04", "2020-05-17", "2020-05-24"]) {
    const response = await worker.fetch(new Request(`http://localhost/api/hit?date=${date}`), env, ctx);
    assert.equal(response.status, 200);
    const { hit } = await response.json();
    assert.equal(hit.alternatives.length, 2);
    assert.equal(hit.mode, "стриминговый чарт");
    assert.equal(hit.precision, ["2020-05-04", "2020-05-17"].includes(date) ? "Неделя" : "Месяц");
    if (hit.precision === "Месяц") assert.equal(hit.evidenceMonth, date.slice(0,7));
    assert.doesNotMatch(JSON.stringify(hit.sources), /151804030491438/);
  }
});


test("historical result labels distinguish an unverified month from publication and local reception", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  for (const [date, label] of [["1972-01-15", "Месяц не подтверждён"], ["1982-12-15", "Месяц выступления"], ["1977-06-15", "Месяц публикации"], ["1977-07-15", "Месяц концертного отклика"]]) {
    const response = await worker.fetch(new Request(`http://localhost/?date=${date}`), env, ctx);
    assert.equal(response.status, 200);
    assert.ok((await response.text()).includes(label), date);
  }
});

test("life soundtrack lists one song per birthday up to today", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const response = await worker.fetch(new Request("http://localhost/api/life?date=1984-02-29"), env, ctx);
  assert.equal(response.status, 200);
  const { entries } = await response.json();
  const today = new Date().toISOString().slice(0, 10);
  assert.equal(entries[0].age, 0);
  assert.equal(entries[0].date, "1984-02-29");
  assert.equal(entries[1].date, "1985-02-28");
  assert.ok(entries.every((entry, index) => entry.age === index && entry.date <= today && entry.title && entry.artist));
  const birth = await (await worker.fetch(new Request("http://localhost/api/hit?date=1984-02-29"), env, ctx)).json();
  assert.equal(entries[0].title, birth.hit.title);
  const invalid = await worker.fetch(new Request("http://localhost/api/life?date=2023-02-29"), env, ctx);
  assert.equal(invalid.status, 400);
  const html = await (await worker.fetch(new Request("http://localhost/?date=1985-06-12"), env, ctx)).text();
  assert.match(html, /id="life"/);
  assert.match(html, /Совершеннолетие/);
});

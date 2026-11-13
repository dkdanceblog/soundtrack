import type { PilotSource } from "./pilot-2017";

export type HistoricalBroadcastCandidate = {
  artist: string;
  title: string;
  sources: readonly PilotSource[];
};

export type HistoricalBroadcast = {
  chartDate: string;
  dateLabel: string;
  archiveYear: number;
  programLabel: string;
  anchorKind?: "месячный концерт" | "месячный эфир" | "кинопремьера" | "телепремьера" | "фестиваль" | "концерт" | "месячный релиз" | "месячный чарт" | "недельный чарт";
  periodStart?: string;
  periodEnd?: string;
  candidates: readonly HistoricalBroadcastCandidate[];
};

const morningMailUrl = "https://ru.wikipedia.org/wiki/Список_выпусков_телепередачи_«Утренняя_почта»";
const archive1970Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssrv1970god/";
const archive1971Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssrv1971godu/";
const archive1972Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1972goda/";
const archive1973Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1973goda/";
const archive1974Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1974goda/";
const archive1975Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1975goda/";
const archive1976Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1976goda/";
const archive1977Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1977goda/";
const archive1978Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1978goda/";
const archive1979Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19701979gody/khitparadsssr1979goda/";
const archive1980Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1980god/";
const archive1981Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1981god_oxrp/";
const archive1982Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1982god/";
const archive1983Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1983god/";
const archive1984Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1984god/";
const archive1985Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1985god/";
const archive1986Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1986god/";
const archive1987Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1987god/";
const archive1988Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1988god/";
const archive1989Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19801989gody/khitparad1989god/";
const archive1990And1991Url = "https://music-press-archive.com/khitparadsssr/khitparadsssr19901991god/";
const archive1992To2000Url = "https://music-press-archive.com/khitparadsssr/khitparad1992-2000/";
const archive1998Url = "https://music-press-archive.com/khitparadsssr/khitparad1992-2000/khitparad1998/";
const archive1999Url = "https://music-press-archive.com/khitparadsssr/khitparad1992-2000/khitparad1999/";
const archive2000Url = "https://music-press-archive.com/khitparadsssr/khitparad1992-2000/khitparad2000/";
const officialGramophone2001Url = "https://rusradio.ru/news/zolotoi-grammofon-2001";
const mkTop2002Url = "https://www.mk.ru/editions/daily/article/2003/01/10/142687-30-hitov-goda.html";
const officialGramophone2003Url = "https://rusradio.ru/news/zolotoi-grammofon-2003";
const hotTenDecember1995Url = "https://staroetv.su/video/20186-goryachaya-desyatka-rtr-dekabr-1995--";
const teaRoseAlbum2003Url = "https://ru.wikipedia.org/wiki/Роза_чайная_(альбом)";
const goldenGramophoneAugust2003Url = "https://chartoteka.com/charts/zolotoy-gramofon/2003-08-24";
const oceanThreeRivers2003Url = "https://ru.wikipedia.org/wiki/Океан_и_три_реки";
const viaGraHistoryUrl = "https://via-gra.3dn.ru/index/0-2";
const viaGraBiologyAppleUrl = "https://music.apple.com/us/song/1148920220";
const viaGraBiologyPetershopUrl = "https://www.petershop.com/ru/catalogue/audiocd/via-gra/biologiya.html";
const whiteSunPremiereUrl = "https://www.calend.ru/events/4907/";
const yourHonorSongUrl = "https://ru.wikipedia.org/wiki/Ваше_благородие,_госпожа_удача";
const newYearBlueLight1971Url = "https://tv-80.ru/muzykalnye/goluboy-ogonek/goluboy-ogonyok-1971/";
const znatokiPremiereUrl = "https://history.ru/teacher/historical-calendar/na-centralnom-televidenii-sostoyalas-premera-pervoy-serii-detektivnogo-cikla-sledstvie-vedut-znatoki";
const znatokiSongUrl = "https://music.apple.com/ru/song/1670715862";
const myStreetPremiereUrl = "https://www.okino.ua/film/moya-ulitsa-392325/";
const myStreetPopularityUrl = "https://www.doverie-tv.ru/videos/15031";
const belorussianStationPremiereUrl = "https://ru.wikipedia.org/wiki/Белорусский_вокзал_(фильм)";
const oneVictorySongUrl = "https://ru.wikipedia.org/wiki/Нам_нужна_одна_победа";
const twelveChairsPremiereUrl = "https://www.kinobusiness.com/movies/12-stulev/";
const twelveChairsFilmUrl = "https://ru.wikipedia.org/wiki/12_стульев_(фильм,_1971)";
const officersPremiereUrl = "https://pro.culture.ru/blog/848";
const eternalFireSongUrl = "https://ru.wikipedia.org/wiki/Вечный_огонь_(песня)";
const sonsGoToBattlePremiereUrl = "https://ru.wikipedia.org/wiki/Сыновья_уходят_в_бой_(фильм)";
const didNotReturnSongUrl = "https://ru.wikipedia.org/wiki/Он_не_вернулся_из_боя";
const shadowsPremiereUrl = "https://ru.wikipedia.org/wiki/Тени_исчезают_в_полдень";
const blueLakesSongUrl = "https://www.5-tv.ru/video/1023395/";
const krugozorJuly1972CatalogUrl = "https://records.su/album/36381";
const krugozorJuly1972ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b907(100).pdf";
const krugozorSeptember1972CatalogUrl = "https://records.su/album/36329";
const krugozorSeptember1972ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b909(102).pdf";
const krugozorNovember1972CatalogUrl = "https://records.su/album/33197";
const krugozorNovember1972ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b911(104).pdf";
const zykinaPodariCatalogUrl = "https://music.apple.com/ru/song/1508011449";
const krugozorMarch1973CatalogUrl = "https://records.su/album/36384";
const krugozorMarch1973ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b903(108).pdf";
const krugozorJune1973CatalogUrl = "https://records.su/album/36330";
const krugozorJune1973ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b906(111).pdf";
const samotsvetyDiscographyUrl = "https://v-dyakonov.ru/samocvety";
const krugozorOctober1973CatalogUrl = "https://records.su/album/36393";
const krugozorOctober1973ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b910(115).pdf";
const krugozorNovember1973CatalogUrl = "https://records.su/album/32941";
const krugozorNovember1973ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b911(116).pdf";
const dotCommaPremiereUrl = "https://www.culture.ru/live/movies/750/tochka-tochka-zapyataya";
const dotCommaSongUrl = "https://music.apple.com/ru/song/1582338613";
const krugozorJanuary1974CatalogUrl = "https://records.su/album/32942";
const krugozorJanuary1974ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201974,%20%b901(118).pdf";
const krugozorMarch1974CatalogUrl = "https://records.su/album/33196";
const krugozorMarch1974ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201974,%20%b903(120).pdf";
const krugozorOctober1974CatalogUrl = "https://records.su/album/32944";
const krugozorOctober1974ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201974,%20%b910(127).pdf";
const krugozorJune1975CatalogUrl = "https://records.su/album/35920";
const krugozorJune1975ContentsUrl = "https://krugozor-kolobok.ru/75/06/75-06-Spisok_zvyka.html";
const krugozorJune1975ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201975,%20%b906(135).pdf";
const krugozorMarch1976CatalogUrl = "https://records.su/album/35973";
const krugozorMarch1976ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201976,%20%b903(144).pdf";
const krugozorMay1976CatalogUrl = "https://records.su/album/35975";
const krugozorMay1976ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201976,%20%b905(146).pdf";
const krugozorJuly1976CatalogUrl = "https://records.su/album/32950";
const krugozorJuly1976ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201976,%20%b907(148).pdf";
const krugozorJanuary1977CatalogUrl = "https://records.su/album/36000";
const krugozorJanuary1977ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201977,%20%b901(154).pdf";
const krugozorApril1977CatalogUrl = "https://records.su/album/36003";
const krugozorApril1977ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201977,%20%b904(157).pdf";
const annaGermanMayJune1977CatalogUrl = "https://records.su/album/10258";
const krugozorJune1977CatalogUrl = "https://records.su/album/36096";
const krugozorJune1977ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201977,%20%b906(159).pdf";
const womanWhoSingsPremiereUrl = "https://www.okino.ua/film/zhenschina-kotoraya-poet-2830/";
const womanWhoSingsSoundtrackUrl = "https://records.su/album/10997";
const sopot1979Url = "https://ru.wikipedia.org/wiki/Интервидение-1979";
const sopot1979TvScheduleUrl = "https://pesnyagoda.my1.ru/sopot.htm";
const krugozorOctober1979CatalogUrl = "https://records.su/album/32964";
const krugozorOctober1979ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201979,%20%b910(187).pdf";
const povorotHistoryUrl = "https://ru.wikipedia.org/wiki/Поворот_(песня)";
const machineTimeHistoryRiaUrl = "https://ria.ru/20081211/156985060.html";
const moscowTearsPremiereUrl = "https://www.kinoafisha.info/movies/1375806/";
const moscowTearsSongPopularityUrl = "https://www.shkolazhizni.ru/kino/articles/111073/";
const electronicaPremiereUrl = "https://www.kp.ru/afisha/msk/obzory/kino/film-priklyucheniya-elektronika/";
const electronicaSongsCatalogUrl = "https://records.su/album/29258";
const krugozorJune1980CatalogUrl = "https://records.su/album/32969";
const krugozorJune1980ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201980,%20%b906(195).pdf";
const verasyJulyAugust1980CatalogUrl = "https://records.su/album/9941";
const olympicsClosing1980Url = "https://ok.ru/video/6697873576381";
const olympicsClosingHistoryUrl = "https://ru.wikipedia.org/wiki/Церемония_закрытия_летних_Олимпийских_игр_1980";
const krugozorAugust1980CatalogUrl = "https://records.su/album/32970";
const krugozorAugust1980ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201980,%20%b908(197).pdf";
const helloSongAugustSeptember1980CatalogUrl = "https://records.su/album/11068";
const kikabidzeSeptemberOctober1980CatalogUrl = "https://records.su/album/11840";
const krasilovskySeptemberOctober1980CatalogUrl = "https://records.su/album/11870";
const drumDanceFebruaryMarch1981CatalogUrl = "https://records.su/album/10131";
const youNeverDreamedPremiere1981Url = "https://www.culture.ru/events/4431345/pokaz-khudozhestvennogo-filma";
const lastPoemHistory1981Url = "https://www.radiodacha.ru/news/istoriya-pesni-poslednyaya-poema";
const reznikovAprilMay1981CatalogUrl = "https://records.su/album/11051";
const maestroAprilMay1981CatalogUrl = "https://records.su/album/5589";
const krugozorJune1981CatalogUrl = "https://records.su/album/33186";
const krugozorJune1981ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201981,%20%b906(207).pdf";
const krugozorJuly1981CatalogUrl = "https://records.su/album/30891";
const krugozorJuly1981ScanUrl = "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201981,%20%b907(208).pdf";
const flameJulyAugust1981CatalogUrl = "https://records.su/album/11049";
const pugachevaJulyAugust1981CatalogUrl = "https://records.su/album/11055";
const krugozorSeptember1981CatalogUrl = "https://records.su/album/32997";
const antonovOctoberNovember1981CatalogUrl = "https://records.su/album/11474";
const roadToSeaJanuaryFebruary1982CatalogUrl = "https://records.su/album/10018";
const krugozorMarch1982CatalogUrl = "https://records.su/album/30893";
const detectiveAprilMay1982CatalogUrl = "https://records.su/album/1679";
const pugachevaMayJune1982CatalogUrl = "https://records.su/album/11070";
const earthlingsMayJune1982CatalogUrl = "https://records.su/album/11471";
const krugozorJune1982CatalogUrl = "https://records.su/album/30956";
const earthlingsJuneJuly1982CatalogUrl = "https://records.su/album/11472";
const flameJuneJuly1982CatalogUrl = "https://records.su/album/11071";
const krugozorJuly1982CatalogUrl = "https://records.su/album/33005";
const carnivalJulyAugust1982CatalogUrl = "https://records.su/album/11528";
const machineTimeAugustSeptember1982CatalogUrl = "https://records.su/album/11207";
const gnatyukSeptemberOctober1982CatalogUrl = "https://records.su/album/40447";
const krugozorOctober1982CatalogUrl = "https://records.su/album/30957";
const millionRosesNovemberDecember1982CatalogUrl = "https://records.su/album/2051";
const antonovNovemberDecember1982CatalogUrl = "https://records.su/album/10115";
const leontievNovemberDecember1982CatalogUrl = "https://records.su/album/12649";
const tvContestJuneJuly1977CatalogUrl = "https://records.su/album/5592";
const samotsvetyAugustSeptember1977CatalogUrl = "https://records.su/album/10983";
const samotsvetyEverythingHitUrl = "https://ru.wikipedia.org/wiki/Всё,_что_есть_у_меня";
const derbenyovSongsUrl = "https://ru.wikipedia.org/wiki/Список_песен_на_стихи_Леонида_Дербенёва";
const republicPremiereUrl = "https://ru.wikipedia.org/wiki/Миронов,_Андрей_Александрович";
const republicFilmUrl = "https://ru.wikipedia.org/wiki/Достояние_республики_(фильм)";
const swordSongUrl = "https://ru.wikipedia.org/wiki/Песенка_о_шпаге";
const bumbarashUrl = "https://ru.wikipedia.org/wiki/Бумбараш";
const bumbarashImpactUrl = "https://www.shkolazhizni.ru/kino/articles/113147/";
const bigBreakPremiereUrl = "https://ru.wikipedia.org/wiki/Большая_перемена";
const blackAndWhiteSongUrl = "https://ru.wikipedia.org/wiki/Чёрное_и_белое_(романс)";
const seventeenMomentsPremiereUrl = "https://www.calend.ru/events/3005/";
const seventeenMomentsFilmUrl = "https://ru.wikipedia.org/wiki/Семнадцать_мгновений_весны";
const ivanPremiereUrl = "https://russian.rt.com/nopolitics/article/1201809-ivan-vasilevich-menyaet-professiyu-film";
const ivanFilmUrl = "https://ru.wikipedia.org/wiki/Иван_Васильевич_меняет_профессию";
const januaryBlizzardSongUrl = "https://ru.wikipedia.org/wiki/Звенит_январская_вьюга";
const marusyaSongUrl = "https://music.apple.com/ru/song/1754033146";
const cassiopeiaPremiereUrl = "https://ru.wikipedia.org/wiki/Москва_—_Кассиопея";
const bigWorldSongUrl = "https://zaycev.net/news/muzstoris_/2025-04-12/6436419886b8cd9328bfc61c/kak_poyavilis_sovetskie_pesni_o_kosmose_";
const oldMenPremiereUrl = "https://history.ru/read/articles/k-50-letiyu-filma-v-boy-idut-odni-stariki";
const oldMenFilmUrl = "https://ru.wikipedia.org/wiki/В_бой_идут_одни_«старики»";
const threeDaysMoscowUrl = "https://ru.wikipedia.org/wiki/Три_дня_в_Москве";
const yurkinDawnsUrl = "https://ru.wikipedia.org/wiki/Юркины_рассветы";
const smetannikovVictoryInterviewUrl = "https://saratov.mk.ru/social/2020/05/13/pervyy-ispolnitel-glavnoy-pesni-9-maya-rasskazal-kak-ona-obedinyala-narody.html";
const victoryDaySongUrl = "https://ru.wikipedia.org/wiki/День_Победы_(песня)";
const victoryBlueLightArchiveUrl = "https://www.etvnet.com/watch/goluboj-ogonek-9-maya/296065";
const variantOmegaPremiereUrl = "https://www.afisha.ru/movie/variant-omega-266131/";
const variantOmegaSongCatalogUrl = "https://records.su/album/25222";
const tv1975Url = "https://ru.wikipedia.org/wiki/1975_год_в_телевидении";
const pugachevaUrl = "https://ru.wikipedia.org/wiki/Пугачёва,_Алла_Борисовна";
const impossiblePremiereUrl = "https://www.okino.ua/film/ne-mozhet-byit-9681/";
const impossibleFilmUrl = "https://ru.wikipedia.org/wiki/Не_может_быть!";
const ironyPremiereUrl = "https://ru.wikipedia.org/wiki/Ирония_судьбы,_или_С_лёгким_паром!";
const betweenSkyEarthPremiereUrl = "https://www.kinobusiness.com/movies/mezhdu-nebom-i-zemley/";
const betweenSkyEarthFilmUrl = "https://ru.wikipedia.org/wiki/Между_небом_и_землёй_(фильм,_1975)";
const boatPremiereUrl = "https://www.kinoafisha.info/movies/8360230/";
const boatFilmUrl = "https://www.animator.ru/db/?fid=2509&p=show_film";
const mondrusMay1970ReleaseUrl = "https://records.su/album/11498";
const mondrusTyPogodiCatalogUrl = "https://music.apple.com/ru/song/1687174926";
const miansarovaSeptember1970ReleaseUrl = "https://records.su/album/12174";
const miansarovaEyesTvArchiveUrl = "https://www.5-tv.ru/video/1023940/";
const miansarovaEyesCatalogUrl = "https://music.apple.com/ru/song/1716338023";
const alyoshkaLoveReleaseUrl = "https://records.su/image/comment/293204";
const vesyolyeRebyataUrl = "https://ru.wikipedia.org/wiki/Весёлые_ребята_(ВИА)";
const krugozorJuly1970Url = "https://www.krugozor-kolobok.ru/70/07/70_07_16.html";
const nenashevaUrl = "https://ru.wikipedia.org/wiki/Ненашева,_Галина_Алексеевна";
const shainskySongsUrl = "https://records.su/album/16969";
const krugozorAugust1970Url = "https://www.krugozor-kolobok.ru/70/08/70_08_16.html";
const vedishchevaAlbumUrl = "https://www.records.su/album/5356";
const comradeSongUrl = "https://ru.wikipedia.org/wiki/Товарищ_(песня)";
const krugozorOctober1970Url = "https://www.krugozor-kolobok.ru/70/10/70-10-Spisok_zvyka.html";
const magomaevBiographyUrl = "https://magomaev.info/biography.html";
const recordsCatalogAugust1971Url = "https://www.records.su/albums/catalog/page/3250";
const mulermanRecordsCatalogUrl = "https://records.su/personrecs.php?lnk=1&tagid=1497&type=perf";
const obodzinskyDiscography1971Url = "https://web.archive.org/web/*/http://via-era.narod.ru/Solisti/Obodzinsky/discograf_vo/discograf_vo5.htm";
const melodiyaFlexiCatalog2001To3000Url = "https://album.fandom.com/ru/wiki/2001-3000_Flexi_(Мелодия)";
const krugozorOctober1971Url = "https://www.krugozor-kolobok.ru/71/10/71-10_Spisok_zvyka.html";
const velikanova1971AlbumCatalogUrl = "https://www.shamardanov.ru/katalog-sovetskih-gramplastinok-stereo-%E2%84%96%E2%84%96-3001-4000-1971-1973-gg.html";
const nastyaPremiereUrl = "https://www.kinobusiness.com/movies/okh-uzh-eta-nastya/";
const nastyaFilmUrl = "https://ru.wikipedia.org/wiki/Ох_уж_эта_Настя!";
const worldGuyPremiereUrl = "https://www.kinobusiness.com/movies/mirovoy-paren/";
const worldGuyFilmUrl = "https://ru.wikipedia.org/wiki/Мировой_парень";
const sopotFestivalUrl = "https://en.wikipedia.org/wiki/Sopot_International_Song_Festival";
const leshchenkoSopotUrl = "https://russian.rt.com/nopolitics/article/1524419-leschenko-sopot-festival-intervidenie";
const aniskinPremiereUrl = "https://www.kinobusiness.com/movies/aniskin-i-fantomas/";
const ponarovskayaUrl = "https://ru.wikipedia.org/wiki/Понаровская,_Ирина_Витальевна";
const shapoklyakPremiereUrl = "https://ru.wikipedia.org/wiki/Шапокляк_(мультфильм)";
const blueCarriageSongUrl = "https://ru.wikipedia.org/wiki/Голубой_вагон_(песня)";
const goldenOrpheus1976DatesUrl = "https://lyricstranslate.com/en/collection/golden-orpheus-1976-zlatniyat-orfey-1976";
const goldenOrpheusUrl = "https://ru.wikipedia.org/wiki/Золотой_Орфей";
const song1971Url = "https://ru.wikipedia.org/wiki/Песня-71";
const song1972Url = "https://ru.wikipedia.org/wiki/Песня-72";
const song1973Url = "https://ru.wikipedia.org/wiki/Песня-73";
const song1974Url = "https://ru.wikipedia.org/wiki/Песня-74";
const song1975Url = "https://ru.wikipedia.org/wiki/Песня-75";
const song1976Url = "https://ru.wikipedia.org/wiki/Песня-76";
const song1977Url = "https://ru.wikipedia.org/wiki/Песня-77";
const song1978Url = "https://ru.wikipedia.org/wiki/Песня-78";
const song1979Url = "https://ru.wikipedia.org/wiki/Песня-79";
const song1980Url = "https://ru.wikipedia.org/wiki/Песня-80";
const song1981Url = "https://ru.wikipedia.org/wiki/Песня-81";
const song1982Url = "https://ru.wikipedia.org/wiki/Песня-82";
const song1983Url = "https://ru.wikipedia.org/wiki/Песня-83";
const song1984Url = "https://ru.wikipedia.org/wiki/Песня-84";
const song1985Url = "https://ru.wikipedia.org/wiki/Песня-85";
const song1986Url = "https://ru.wikipedia.org/wiki/Песня-86";
const song1987Url = "https://ru.wikipedia.org/wiki/Песня-87";
const song1988Url = "https://ru.wikipedia.org/wiki/Песня-88";
const song1989Url = "https://ru.wikipedia.org/wiki/Песня-89";
const song1990Url = "https://ru.wikipedia.org/wiki/Песня-90";
const song1991Url = "https://ru.wikipedia.org/wiki/Песня-91";
const hitParade1992Url = "https://www.staroetv.su/video/59536-hit-parad-ostankino-1-kanal-01-01-1993";
const song1993Url = "https://ru.wikipedia.org/wiki/Песня-93";
const song1994Url = "https://ru.wikipedia.org/wiki/Песня-94";
const song1995Url = "https://ru.wikipedia.org/wiki/Песня-95";
const song1996Url = "https://ru.wikipedia.org/wiki/Песня-96";
const song1997Url = "https://ru.wikipedia.org/wiki/Песня-97";
const goldenGramophoneUrl = "https://ru.wikipedia.org/wiki/Список_лауреатов_премии_«Золотой_граммофон»";
const newYearAttraction1983SingleUrl = "https://ru.wikipedia.org/wiki/Новогодний_аттракцион-1_(сингл)";
const lateDuetArchive1983Url = "https://t.me/s/sovtv?before=17937&q=%23%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9%D0%9B%D0%B5%D0%BE%D0%BD%D1%82%D1%8C%D0%B5%D0%B2";
const discoclub9MusicBrainzUrl = "https://musicbrainz.org/release/a2241068-a693-4a46-b21d-5f2fdb0916ed";
const krugozorApril1983CatalogUrl = "https://www.records.su/album/30958";
const krugozorJune1983CatalogUrl = "https://records.su/album/36460";
const antonovNamedni1983Url = "https://namednibook.ru/yuriy-antonov.html";
const krugozorAugust1983CatalogUrl = "https://www.records.su/album/30963";
const krugozorAugust1983ArticleUrl = "https://www.krugozor-kolobok.ru/83/08/83_08_04_cov.html";
const krugozorSeptember1983Url = "https://www.krugozor-kolobok.ru/83/09/83-09-spisok_zvyka.html";
const krugozorOctober1983Url = "https://krugozor-kolobok.ru/83/10/83-10-spisok_zvyka.html";
const krugozorOctober1983CatalogUrl = "https://www.records.su/album/30964";
const krugozorNovember1983Url = "https://krugozor-kolobok.ru/83/11/83-11-spisok_zvyka.html";
const krugozorNovember1983CatalogUrl = "https://www.records.su/album/30965";
const martynovBiographyUrl = "https://ru.wikipedia.org/wiki/Мартынов,_Евгений_Григорьевич";
const notChurchPremiere1983Url = "https://www.afisha.ru/movie/nas-venchali-ne-v-cerkvi-176798/";
const kamburovaLoveFilmArchiveUrl = "https://www.kino-teatr.ru/video/29466/";
const kamburovaLoveHistoryUrl = "https://kirov.aif.ru/culture/dve_vernyh_podrugi_lyubov_i_razluka_istoriya_izvestnogo_romansa";
const krugozorFebruary1984Url = "https://krugozor-kolobok.ru/84/02/84-02-Spisok_zvyka.html";
const krugozorMarch1984Url = "https://www.krugozor-kolobok.ru/84/03/84_03_16.html";
const krugozorJune1984Url = "https://www.krugozor-kolobok.ru/84/06/84-06-Spisok_zvyka.html";
const krugozorJune1984CatalogUrl = "https://www.records.su/album/30968";
const echoFirstLove1984CompilationUrl = "https://www.records.su/album/1876";
const krugozorJuly1984Url = "https://krugozor-kolobok.ru/84/07/84-07-Spisok_zvyka.html";
const krugozorAugust1984Url = "https://krugozor-kolobok.ru/84/08/84-08-Spisok_zvyka.html";
const krugozorAugust1984CatalogUrl = "https://www.records.su/album/30969";
const cruelRomanceSoundtrackUrl = "https://records.su/album/454";
const forumOfficialHistoryUrl = "https://www.gruppaforum.ru/about.html";
const aistPremiere1984Url = "https://www.fortuna-rotaru.com/?p=7366";
const maryPoppinsPremiere1984Url = "https://mozhaisky.mos.ru/presscenter/news/detail/9650353.html?pdf_file=y";
const leningradRockFestival1984Url = "https://www.wyrgorod.ru/shop/details_20728.html";
const guestFuturePremiere1985Url = "https://www.mos.ru/news/item/151745073/";
const beautifulFarAwayHistoryUrl = "https://ru.wikipedia.org/wiki/Прекрасное_далёко_(песня)";
const krugozorFebruary1985Url = "https://www.krugozor-kolobok.ru/85/02/85-02-Spisok_zvyka.html";
const georgiadiStopRecords1985Url = "https://www.records.su/composition/10741";
const krugozorApril1985Url = "https://www.krugozor-kolobok.ru/85/04/85-04-Spisok_zvyka.html";
const boyarskyOldAlbum1985Url = "https://www.records.su/album/1529";
const krugozorJune1985Url = "https://www.krugozor-kolobok.ru/85/06/85-06-Spisok_zvyka.html";
const zemlyaneHistoryUrl = "https://ru.wikipedia.org/wiki/Земляне_(группа)";
const krugozorAugust1985Url = "https://krugozor-kolobok.ru/85/08/85-08-Spisok_zvyka.html";
const leontievGrace1985Url = "https://records.su/album/30933";
const krugozorOctober1985Url = "https://www.krugozor-kolobok.ru/85/10/85-10-Spisok_zvyka.html";
const krugozorNovember1985Url = "https://krugozor-kolobok.ru/85/11/85-11-Spisok_zvyka.html";
const apinaStreetOfLove1992Url = "https://music.apple.com/us/album/%D1%83%D0%BB%D0%B8%D1%86%D0%B0-%D0%BB%D1%8E%D0%B1%D0%B2%D0%B8/1743194687";
const rotaru1992ChronicleUrl = "https://www.fortuna-rotaru.com/?page_id=4685";
const nikolaevOfficialChronicleUrl = "https://igornikolaev.ru/faqs/";
const nikolaevTaxiProgramUrl = "https://svirelin.ru/text/taxi.html";
const apinaDiscography1992Url = "https://ru.wikipedia.org/wiki/Дискография_Алёны_Апиной";
const titomirHighEnergy1992Url = "https://ru.wikipedia.org/wiki/Высокая_энергия";
const malchishnikTalkSex1992Url = "https://ru.wikipedia.org/wiki/Поговорим_о_сексе_(альбом)";
const combinationSausage1992Url = "https://ru.wikipedia.org/wiki/Два_кусочека_колбаски";
const vetlitskayaLook1992Url = "https://ru.wikipedia.org/wiki/Посмотри_в_глаза";
const agutinBarefootBoy1993TvUrl = "https://www.youtube.com/watch?v=IETmlaOGm2M";
const nautilusAnniversary1993Url = "https://www.kibitka.net/1993r/569-199305041.html";
const nautilusVideoArchive1993Url = "https://naunaunau.narod.ru/video-records/10let/";
const agathaPozornayaZvezda1993Url = "https://music.apple.com/us/album/%D0%BF%D0%BE%D0%B7%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0/1139745226";
const presnyakovBiography1993Url = "https://ru.sberopedia.org/wiki/Пресняков,_Владимир_Владимирович";
const apinaDancingUntilMorning1993Url = "https://ru.wikipedia.org/wiki/Танцевать_до_утра";
const song1993FinalUrl = "https://ru.wikipedia.org/wiki/Песня-93";
const apinaDruzhochek1994TvUrl = "https://www.youtube.com/watch?v=9piDGUNJ6rk";
const song1994MarchArchiveUrl = "https://staroetv.su/video/12356-pesnya-94-1-y-kanal-ostankino-15-03-tat";
const song1994MayArchiveUrl = "https://staroetv.su/video/12358";
const song1994IntermediateEpisodesUrl = "https://televisionchannels.fandom.com/wiki/Песня_года/1990-е/Промежуточные_выпуски";
const song1994OfficialProgramUrl = "https://www.vremya.tv/announce/12044";
const vetlitskayaMagadan1994VideoUrl = "https://ok.ru/video/7432151763485";
const lyubeMorningMail1994ArchiveUrl = "https://staroetv.su/video/13101";
const lyubeDoroga1994VideoUrl = "https://www.youtube.com/watch?v=ZTxlpa60mrs";
const bulanovaLullabySeptember1994Url = "https://vkvideo.ru/video174588322_167418586";
const nautilusTitanic1994Url = "https://ru.wikipedia.org/wiki/Титаник_(альбом)";
const agathaOpium1995Url = "https://ru.wikipedia.org/wiki/Опиум_(альбом)";
const saltykovaBiographyUrl = "https://ru.wikipedia.org/wiki/Салтыкова,_Ирина_Ивановна";
const nautilusKrylyaConcert1995Url = "https://www.kursivom.ru/%D0%BD%D0%B0%D1%83%D1%82%D0%B8%D0%BB%D1%83%D1%81-%D0%BF%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D0%B8%D1%83%D1%81-%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC-%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D1%8F/";
const lyubeKombatPremiere1995Url = "https://ru.wikipedia.org/wiki/Любэ";
const lindaFreehandCircle1995Url = "https://ru.wikipedia.org/wiki/Круг_от_руки";
const lindaCrowAlbumUrl = "https://ru.wikipedia.org/wiki/Ворона_(альбом)";
const ivanushkiKonechnoOn1996Url = "https://music.apple.com/us/album/%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE-%D0%BE%D0%BD/1604358095";
const likaStarBiographyUrl = "https://www.thevoicemag.ru/stars/biography/lika-star/";
const shlyager1991TvScheduleUrl = "https://lubernet.ru/pressa/download/5439.pdf";
const bulanovaClearLightJuly1996Url = "https://www.newlookmedia.ru/?p=3267";
const varumWinterCherryNovember1996Url = "https://www.newlookmedia.ru/?p=3173";
const meladzeDiscographyUrl = "https://ru.wikipedia.org/wiki/Дискография_Валерия_Меладзе";
const song1996BabkinaJuneUrl = "https://staroetv.su/video/59293-pesnya-96-ort-9-iyunya-1996-nadezhda--";
const hotTenSviridovaAugust1996Url = "https://staroetv.su/video/20194-goryachaya-desyatka-rtr-avgust-1996--";
const song1997FebruaryTvUrl = "https://staroetv.su/video/46356-pesnya-97-ort-16-02-1997-ne-s-nachala";
const mumiyMorskayaReleaseUrl = "https://mumiytroll.com/history/year/1997";
const mumiyUtekayFactsUrl = "https://mumiytroll.com/facts";
const pugachevaCallMe1997Url = "https://ru.wikipedia.org/wiki/Песня-97";
const lyubeSongsAboutPeople1997Url = "https://ru.wikipedia.org/wiki/Песни_о_людях";
const nasyrovTambovJuly1997Url = "https://www.newlookmedia.ru/?p=4711";
const leonidovVisionSeptember1997Url = "https://www.newlookmedia.ru/?p=4368";
const handsUpLouder1998Url = "https://music.apple.com/us/album/%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9-%D0%B5%D1%89%D1%91-%D0%B3%D1%80%D0%BE%D0%BC%D1%87%D0%B5/1488606575";
const strelkiGoAhead1998Url = "https://music.apple.com/us/album/%D0%B8%D0%B4%D1%83%D1%82-%D0%B2%D0%BF%D0%B5%D1%80%D1%91%D0%B4/1281012817";
const leapYearBestLove1998Url = "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4_(%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0)";
const kirkorovOnlyLove1998Url = "https://ru.wikipedia.org/wiki/%D0%A1_%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%D1%8E_%D0%BA_%D0%95%D0%B4%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9";
const spleanPomegranate1998Url = "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC";
const bravoLoveHits1998Url = "https://www.discogs.com/release/1691655-%D0%91%D1%80%D0%B0%D0%B2%D0%BE-%D0%91%D1%80%D0%B0%D0%B2%D0%BE";
const mashaSunKlesh1998Url = "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%BA%D0%BB%D1%91%D1%88";
const kingJesterAcoustic1998Url = "https://zvuk.com/release/8125614";
const agathaMiracles1998Url = "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B4%D0%B5%D1%81%D0%B0_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const zemfiraIskala2000Url = "https://ru.wikipedia.org/wiki/Искала";
const mumiyMercuryAloe2000Url = "https://mumiytroll.com/press/498";
const mumiyKinoproby2000Url = "https://mumiytroll.com/news/33";
const handsUpHello2000PressUrl = "https://www.newlookmedia.ru/?p=46920";
const handsUpHello2000CatalogUrl = "https://music.amazon.co.uk/albums/B07DRQKKPW";
const setiSmile2002Url = "https://www.intermedia.ru/news/141747";
const viaGraAttempt2001Url = "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BF%D1%8B%D1%82%D0%BA%D0%B0_%E2%84%96_5_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const katyaLelGoroshiny2001Url = "https://www.intermedia.ru/news/126386";
const kirkorovMongolia2001Url = "https://www.intermedia.ru/news/128828";
const meladzeSera1995Url = "https://ru.wikipedia.org/wiki/%D0%A1%D1%8D%D1%80%D0%B0_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const agathaHurricane1997Url = "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B0%D0%B3%D0%B0%D0%BD_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const hiFiFirstContact1999Url = "https://ru.ruwiki.ru/wiki/Hi-Fi_(%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0)";
const mikheyLove1999Url = "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BA%D0%B0_%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const nasheFirstChartDozen1999Url = "https://www.nashe.ru/news/pervyj-vypusk-chartovoj-dyuzhiny";
const chartDozenFirstArchive1999Url = "https://staroetv.su/radio/64037-chartova-dyuzhina-nashe-radio-4-07";
const nashestvieHistoryUrl = "https://ru.wikipedia.org/wiki/Нашествие";
const nashestvie2000Bi2VideoUrl = "https://www.youtube.com/watch?v=D0st-XAoIkw";
const nashestvie2002RockVideoUrl = "https://www.youtube.com/watch?v=_2ytfYkGcG0";
const kingJesterLive1999Url = "https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D0%B8_%D0%BC%D1%8F%D1%81%D0%BE_%D0%BC%D1%83%D0%B6%D0%B8%D0%BA%D0%B8";
const dolphinDepth1999Url = "https://ru.wikipedia.org/wiki/%D0%93%D0%BB%D1%83%D0%B1%D0%B8%D0%BD%D0%B0_%D1%80%D0%B5%D0%B7%D0%BA%D0%BE%D1%81%D1%82%D0%B8_(%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC)";
const totalShowMarch2004Url = "https://staroetv.su/video/54616-total-noe-shou-mtv-16-03-2004-zhasmin";
const russianRadio2004Url = "https://hotcharts.ru/rusradio/archive/2004.htm";
const leontievLipstickSong2004TvUrl = "https://staroetv.su/video/48423-valeriy-leont-ev---narisuy-pomadoy-1-29";
const leontievNightCall2004Url = "https://www.zvuki.ru/M/P/30314/";
const muzTvAwardsHistoryUrl = "https://muz-tv.ru/news/premiya-muz-tv-ot-2003-do-2021/";
const muzTv2004Url = "https://ru.wikipedia.org/wiki/Премия_Муз-ТВ_2004";

function sources(year: 1986 | 1987, dateLabel: string, slug: string): readonly PilotSource[] {
  const archiveUrl = year === 1986 ? archive1986Url : archive1987Url;
  return [
    {
      id: `morning-mail-${year}-${dateLabel}-${slug}`,
      label: `«Утренняя почта»: датированный эфир ${dateLabel}`,
      url: morningMailUrl,
      kind: "телевизионный эфир",
    },
    {
      id: `music-press-${year}-${slug}`,
      label: `Архив музыкальной прессы: песня в списке ${year} года`,
      url: archiveUrl,
      kind: "годовой архив",
    },
  ];
}

function festivalSources(
  year: 1971 | 1972 | 1973 | 1974 | 1975 | 1976 | 1978 | 1979 | 1980 | 1981 | 1982 | 1983 | 1984 | 1985 | 1986 | 1987 | 1988 | 1989 | 1990 | 1991 | 1992 | 1993 | 1994 | 1995 | 1996 | 1997,
  dateLabel: string,
  slug: string,
): readonly PilotSource[] {
  const festivalUrls = {
    1971: song1971Url,
    1972: song1972Url,
    1973: song1973Url,
    1974: song1974Url,
    1975: song1975Url,
    1976: song1976Url,
    1978: song1978Url,
    1979: song1979Url,
    1980: song1980Url,
    1981: song1981Url,
    1982: song1982Url,
    1983: song1983Url,
    1984: song1984Url,
    1985: song1985Url,
    1986: song1986Url,
    1987: song1987Url,
    1988: song1988Url,
    1989: song1989Url,
    1990: song1990Url,
    1991: song1991Url,
    1992: hitParade1992Url,
    1993: song1993Url,
    1994: song1994Url,
    1995: song1995Url,
    1996: song1996Url,
    1997: song1997Url,
  } as const;
  const archiveUrls = {
    1971: archive1971Url,
    1972: archive1972Url,
    1973: archive1973Url,
    1974: archive1974Url,
    1975: archive1975Url,
    1976: archive1976Url,
    1978: archive1978Url,
    1979: archive1979Url,
    1980: archive1980Url,
    1981: archive1981Url,
    1982: archive1982Url,
    1983: archive1983Url,
    1984: archive1984Url,
    1985: archive1985Url,
    1986: archive1986Url,
    1987: archive1987Url,
    1988: archive1988Url,
    1989: archive1989Url,
    1990: archive1990And1991Url,
    1991: archive1990And1991Url,
    1992: archive1992To2000Url,
    1993: archive1992To2000Url,
    1994: archive1992To2000Url,
    1995: archive1992To2000Url,
    1996: archive1992To2000Url,
    1997: archive1992To2000Url,
  } as const;
  const festivalUrl = festivalUrls[year];
  const archiveUrl = archiveUrls[year];
  return [
    {
      id: `${year === 1992 ? "ostankino-hit-parade" : "song-of-year"}-${year}-${slug}`,
      label: year === 1992
        ? `«Хит-парад Останкино»: финальный эфир ${dateLabel}`
        : `«Песня-${String(year).slice(2)}»: датированный телевизионный выпуск ${dateLabel}`,
      url: festivalUrl,
      kind: "телевизионный выпуск",
    },
    {
      id: `music-press-${year}-${slug}`,
      label: `Архив музыкальной прессы: песня в списке ${year} года`,
      url: archiveUrl,
      kind: "годовой архив",
    },
  ];
}

function annual1981Source(slug: string, title: string): PilotSource {
  return {
    id: `music-press-1981-${slug}`,
    label: `Годовой слушательский архив: «${title}» в списке популярных песен 1981 года`,
    url: archive1981Url,
    kind: "годовой слушательский архив",
  };
}

function song1981Source(slug: string, label: string, kind = "итоги читательского хит-парада"): PilotSource {
  return {
    id: `song-1981-${slug}`,
    label,
    url: song1981Url,
    kind,
  };
}

function annual1982Source(slug: string, title: string): PilotSource {
  return {
    id: `music-press-1982-${slug}`,
    label: `Годовой слушательский архив: «${title}» в списке популярных песен 1982 года`,
    url: archive1982Url,
    kind: "годовой слушательский архив",
  };
}

function song1982Source(slug: string, label: string, kind = "итоги читательского хит-парада"): PilotSource {
  return {
    id: `song-1982-${slug}`,
    label,
    // Song places 1/5/6/7 are attributed to Smena by Razzakov, not MK.
    // Keep the attribution qualified until the original January 1983 issue is checked.
    url: label.startsWith("По Ф. Раззакову:") ? "https://biography.wikireading.ru/123302" : song1982Url,
    kind,
  };
}

function awardSources(
  year: 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003,
  dateLabel: string,
  slug: string,
): readonly PilotSource[] {
  const secondarySources = {
    1996: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1996 года", kind: "годовой архив" },
    1997: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1997 года", kind: "годовой архив" },
    1998: { url: archive1998Url, label: "Архив музыкальной прессы: песня в списке 1998 года", kind: "годовой архив" },
    1999: { url: archive1999Url, label: "Архив музыкальной прессы: песня в списке 1999 года", kind: "годовой архив" },
    2000: { url: archive2000Url, label: "Архив музыкальной прессы: песня в списке 2000 года", kind: "годовой архив" },
    2001: { url: officialGramophone2001Url, label: "«Русское Радио»: репортаж с церемонии 2001 года", kind: "первичный репортаж" },
    2002: { url: mkTop2002Url, label: "«Звуковая дорожка» МК: итоговый Top 30 hits-02", kind: "читательский годовой чарт" },
    2003: { url: officialGramophone2003Url, label: "«Русское Радио»: список народных лауреатов 2003 года", kind: "первичный репортаж" },
  } as const;
  const secondary = secondarySources[year];
  return [
    {
      id: `golden-gramophone-${year}-${slug}`,
      label: `«Золотой граммофон — ${year}»: церемония ${dateLabel}`,
      url: goldenGramophoneUrl,
      kind: "слушательская музыкальная премия",
    },
    {
      id: `music-press-${year}-${slug}`,
      label: secondary.label,
      url: secondary.url,
      kind: secondary.kind,
    },
  ];
}

function monthlyReleaseSources(
  year: 1983 | 1984 | 1992 | 1993 | 1994 | 1995 | 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003,
  slug: string,
  releaseUrl: string,
  releaseLabel: string,
  releaseKind = "датированный каталог релиза",
): readonly PilotSource[] {
  const annualSources = {
    1983: { url: archive1983Url, label: "Архив музыкальной прессы: песня в списке 1983 года", kind: "годовой архив" },
    1984: { url: archive1984Url, label: "Архив музыкальной прессы: песня в списке 1984 года", kind: "годовой архив" },
    1992: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1992 года", kind: "годовой архив" },
    1993: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1993 года", kind: "годовой архив" },
    1994: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1994 года", kind: "годовой архив" },
    1995: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1995 года", kind: "годовой архив" },
    1996: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1996 года", kind: "годовой архив" },
    1997: { url: archive1992To2000Url, label: "Архив музыкальной прессы: песня в списке 1997 года", kind: "годовой архив" },
    1998: { url: archive1998Url, label: "Архив музыкальной прессы: песня в списке 1998 года", kind: "годовой архив" },
    1999: { url: archive1999Url, label: "Архив музыкальной прессы: песня в списке 1999 года", kind: "годовой архив" },
    2000: { url: archive2000Url, label: "Архив музыкальной прессы: песня в списке 2000 года", kind: "годовой архив" },
    2001: { url: officialGramophone2001Url, label: "«Русское Радио»: песня подтверждена итогами 2001 года", kind: "первичный репортаж" },
    2002: { url: mkTop2002Url, label: "«Звуковая дорожка» МК: песня в итоговом Top 30 hits-02", kind: "читательский годовой чарт" },
    2003: { url: officialGramophone2003Url, label: "«Русское Радио»: песня среди народных лауреатов 2003 года", kind: "первичный репортаж" },
  } as const;
  const annual = annualSources[year];
  return [
    {
      id: `dated-release-${year}-${slug}`,
      label: releaseLabel,
      url: releaseUrl,
      kind: releaseKind,
    },
    {
      id: `annual-popularity-${year}-${slug}`,
      label: annual.label,
      url: annual.url,
      kind: annual.kind,
    },
  ];
}

function krugozorIssueSources(
  year: number,
  month: number,
  issueNumber: number,
  slug: string,
  listingUrl: string,
  title: string,
): readonly PilotSource[] {
  const issue = String(month).padStart(2, "0");
  return [
    {
      id: `krugozor-${year}-${issue}-${slug}-listing`,
      label: `Содержание звуковых страниц «Кругозора» № ${month}: «${title}» · ${year}.${issue}`,
      url: listingUrl,
      kind: "датированное содержание выпуска",
    },
    {
      id: `krugozor-${year}-${issue}-${slug}-scan`,
      label: `Независимый библиотечный архив: скан «Кругозора» № ${month} за ${year} год`,
      url: `https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%20${year},%20%b9${issue}(${issueNumber}).pdf`,
      kind: "скан первоисточника",
    },
  ];
}

function krugozorMonthlyBroadcast(
  year: number,
  month: number,
  issueNumber: number,
  artist: string,
  title: string,
  slug: string,
): HistoricalBroadcast {
  const issue = String(month).padStart(2, "0");
  return {
    chartDate: `${year}-${issue}-15`,
    dateLabel: `${issue}.${year}`,
    archiveYear: year,
    programLabel: `«Кругозор» № ${month}`,
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist,
        title,
        sources: krugozorIssueSources(
          year,
          month,
          issueNumber,
          slug,
          `https://tunnel.ru/post-${year}-${issue}`,
          title,
        ),
      },
    ],
  };
}

function song1994IntermediateSources(
  slug: string,
  performanceLabel: string,
  episodeLabel: string,
  datedArchiveUrl?: string,
): readonly PilotSource[] {
  const result: PilotSource[] = [
    {
      id: `song-94-intermediate-${slug}`,
      label: `Архив промежуточных выпусков: ${performanceLabel} в ${episodeLabel}`,
      url: song1994IntermediateEpisodesUrl,
      kind: "архив состава телеэфира",
    },
  ];
  if (datedArchiveUrl) {
    result.push({
      id: `song-94-dated-archive-${slug}`,
      label: "«Старый телевизор»: сохранившийся выпуск «Песни-94» от 15.03.1994 с указанным исполнителем",
      url: datedArchiveUrl,
      kind: "датированный видеоархив",
    });
  }
  result.push(
    {
      id: `song-94-final-program-${slug}`,
      label: `Телеканал «Время»: ${performanceLabel} в итоговой программе «Песни-94»`,
      url: song1994OfficialProgramUrl,
      kind: "архив итоговой телепрограммы",
    },
    {
      id: `song-94-annual-popularity-${slug}`,
      label: "Архив музыкальной прессы: песня в списке популярных композиций 1994 года",
      url: archive1992To2000Url,
      kind: "годовой архив популярности",
    },
  );
  return result;
}

function precise1992Sources(
  slug: string,
  evidenceUrl: string,
  evidenceLabel: string,
  evidenceKind: string,
  rank?: number,
): readonly PilotSource[] {
  return [
    {
      id: `precise-1992-${slug}`,
      label: evidenceLabel,
      url: evidenceUrl,
      kind: evidenceKind,
      ...(rank === undefined ? {} : { rank }),
    },
    {
      id: `annual-popularity-1992-${slug}`,
      label: "Архив музыкальной прессы: песня в итогах 1992 года",
      url: archive1992To2000Url,
      kind: "годовой архив",
    },
  ];
}

// We include only songs that satisfy both checks:
// 1) an exact dated TV edition or a cultural release dated at least to the month names the song;
// 2) Music Press Archive independently includes it in the relevant annual catalogue.
export const HISTORICAL_BROADCASTS_1970_2003: readonly HistoricalBroadcast[] = [
  {
    chartDate: "1970-01-15",
    dateLabel: "январь 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 1",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Эдита Пьеха",
        title: "Белые ночи",
        sources: krugozorIssueSources(1970, 1, 70, "piekha-white-nights", "https://tunnel.ru/post-1970-01", "Белые ночи"),
      },
    ],
  },
  {
    chartDate: "1970-02-15",
    dateLabel: "февраль 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Галина Ненашева",
        title: "Только ты молчи",
        sources: krugozorIssueSources(1970, 2, 71, "nenasheva-only-keep-silent", "https://tunnel.ru/post-1970-02", "Только ты молчи"),
      },
    ],
  },
  {
    chartDate: "1970-03-30",
    dateLabel: "30.03.1970",
    archiveYear: 1970,
    programLabel: "«Белое солнце пустыни»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Павел Луспекаев",
        title: "Ваше благородие, госпожа удача",
        sources: [
          {
            id: "white-sun-wide-release-1970-03-30",
            label: "«Белое солнце пустыни»: широкий прокат с 30.03.1970",
            url: whiteSunPremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1970-vashe-blagorodie",
            label: "Архив музыкальной прессы: песня в списке 1970 года",
            url: archive1970Url,
            kind: "годовой архив",
          },
          {
            id: "white-sun-song-vashe-blagorodie",
            label: "Песня Верещагина в фильме — Павел Луспекаев",
            url: yourHonorSongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1970-04-15",
    dateLabel: "апрель 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 4",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Екатерина Шаврина",
        title: "Россия",
        sources: krugozorIssueSources(1970, 4, 73, "shavrina-russia", "https://tunnel.ru/post-1970-04", "Россия"),
      },
    ],
  },
  {
    // Каталог указывает только май. 15-е число — технический центр месяца
    // для выбора результата и не выдаётся пользователю за точную дату релиза.
    chartDate: "1970-05-15",
    dateLabel: "май 1970",
    archiveYear: 1970,
    programLabel: "пластинка «Поёт Лариса Мондрус»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лариса Мондрус",
        title: "Ты погоди",
        sources: [
          {
            id: "mondrus-ty-pogodi-monthly-release-1970-05",
            label: "Каталог советских пластинок: «Ты погоди» на релизе ГД 0001983-4 · 1970.05",
            url: mondrusMay1970ReleaseUrl,
            kind: "месячный релиз",
          },
          {
            id: "music-press-1970-ty-pogodi",
            label: "Архив музыкальной прессы: «Ты погоди» в списке популярных песен 1970 года",
            url: archive1970Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "mondrus-ty-pogodi-1970-catalog",
            label: "Каталог записи: Лариса Мондрус — «Ты погоди», антология советской песни 1970",
            url: mondrusTyPogodiCatalogUrl,
            kind: "независимый каталог записи",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1970-06-06",
    dateLabel: "06.06.1970",
    archiveYear: 1970,
    programLabel: "мультфильм «Катерок»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Аида Ведищева и Анатолий Горохов",
        title: "Чунга-Чанга",
        sources: [
          {
            id: "boat-premiere-1970-06-06",
            label: "«Катерок»: дата выхода 06.06.1970",
            url: boatPremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1970-chunga-changa",
            label: "Архив музыкальной прессы: песня в списке 1970 года",
            url: archive1970Url,
            kind: "годовой архив",
          },
          {
            id: "boat-song-chunga-changa",
            label: "Каталог российской анимации: «Чунга-Чанга» в «Катерке», поют Аида Ведищева и Анатолий Горохов",
            url: boatFilmUrl,
            kind: "связь песни с мультфильмом",
          },
        ],
      },
    ],
  },
  {
    // Источник подтверждает только месяц. 15-е число — технический центр
    // месяца для выбора ближайшего результата и не показывается как дата релиза.
    chartDate: "1970-07-15",
    dateLabel: "июль 1970",
    archiveYear: 1970,
    programLabel: "подтверждённые музыкальные публикации июля",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Весёлые ребята»",
        title: "Алёшкина любовь",
        sources: [
          {
            id: "alyoshka-love-monthly-release-1970-07",
            label: "Аннотация «Мелодии»: первый миньон вышел в июле 1970 года, «Алёшкина любовь» названа мега-хитом",
            url: alyoshkaLoveReleaseUrl,
            kind: "месячный релиз и массовый тираж",
          },
          {
            id: "music-press-1970-alyoshka-love",
            label: "Архив музыкальной прессы: песня и ВИА «Весёлые ребята» в списке 1970 года",
            url: archive1970Url,
            kind: "годовой архив",
          },
          {
            id: "vesyolye-rebyata-first-ep-1970",
            label: "История ВИА: июльский миньон разошёлся тиражом 15 млн и принёс песне всесоюзную популярность",
            url: vesyolyeRebyataUrl,
            kind: "независимая проверка месяца и массовости",
          },
        ],
      },
      {
        artist: "Галина Ненашева",
        title: "А лес стоит загадочный",
        sources: [
          {
            id: "krugozor-1970-07-mysterious-forest",
            label: "«Кругозор» № 7 за июль 1970: Галина Ненашева исполняет «А лес стоит загадочный»",
            url: krugozorJuly1970Url,
            kind: "месячная звуковая публикация",
          },
          {
            id: "music-press-1970-mysterious-forest",
            label: "Архив музыкальной прессы: песня и Галина Ненашева в списке 1970 года",
            url: archive1970Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "nenasheva-first-hit-mysterious-forest",
            label: "Биография Ненашевой: «А лес стоит загадочный» прямо названа её шлягером",
            url: nenashevaUrl,
            kind: "независимая проверка статуса хита",
          },
          {
            id: "shainsky-known-song-mysterious-forest",
            label: "Архив «Мелодии» о песнях Шаинского: «Кому не известна» «А лес стоит загадочный»",
            url: shainskySongsUrl,
            kind: "проверка массовой узнаваемости",
          },
        ],
      },
    ],
  },
  {
    // Августовский номер подтверждает месяц публикации, но не конкретный день.
    // 15-е число остаётся только техническим центром месяца.
    chartDate: "1970-08-15",
    dateLabel: "август 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 8: «С концертной афиши»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Аида Ведищева",
        title: "Товарищ",
        sources: [
          {
            id: "krugozor-1970-08-tovarishch",
            label: "«Кругозор» № 8 за август 1970: Аида Ведищева исполняет «Товарищ»",
            url: krugozorAugust1970Url,
            kind: "месячная звуковая публикация",
          },
          {
            id: "music-press-1970-tovarishch",
            label: "Архив музыкальной прессы: Аида Ведищева и «Товарищ» в списке 1970 года",
            url: archive1970Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "melodiya-vedishcheva-tovarishch-award",
            label: "Аннотация «Мелодии»: песня получила премию слушательского конкурса «Юности»",
            url: vedishchevaAlbumUrl,
            kind: "слушательская премия",
          },
          {
            id: "tovarishch-all-union-youth-anthem",
            label: "История песни: «Товарищ» облетела весь СССР и стала гимном молодёжи",
            url: comradeSongUrl,
            kind: "независимая проверка массового отклика",
          },
        ],
      },
    ],
  },
  {
    // Каталог пластинки подтверждает сентябрь, но не конкретный день.
    // 15-е число используется только как технический центр месяца.
    chartDate: "1970-09-15",
    dateLabel: "сентябрь 1970",
    archiveYear: 1970,
    programLabel: "пластинка Тамары Миансаровой",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Тамара Миансарова",
        title: "Глаза на песке",
        sources: [
          {
            id: "miansarova-eyes-monthly-release-1970-09",
            label: "Каталог советских пластинок: «Глаза на песке» на релизе ГД 0002145-6 · 1970.09",
            url: miansarovaSeptember1970ReleaseUrl,
            kind: "месячный релиз",
          },
          {
            id: "music-press-1970-eyes-on-sand",
            label: "Архив музыкальной прессы: «Глаза на песке» в списке популярных песен 1970 года",
            url: archive1970Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "central-tv-1970-eyes-on-sand",
            label: "Телеархив: «Глаза на песке» снята для музыкального фильма Центрального телевидения в 1970 году",
            url: miansarovaEyesTvArchiveUrl,
            kind: "архив телевизионной съёмки",
          },
          {
            id: "miansarova-eyes-1970-catalog",
            label: "Каталог записи: Тамара Миансарова — «Глаза на песке», антология советской песни 1970",
            url: miansarovaEyesCatalogUrl,
            kind: "независимый каталог записи",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» подтверждает номер и месяц, но не конкретный день публикации.
    // 15-е число — только технический центр месяца для выбора ближайшего результата.
    chartDate: "1970-10-15",
    dateLabel: "октябрь 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 10: «Первый оттиск. Лирические премьеры»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Муслим Магомаев",
        title: "Возвращение романса",
        sources: [
          {
            id: "krugozor-1970-10-vozvrashchenie-romansa",
            label: "«Кругозор» № 10 за октябрь 1970: песня в рубрике «Первый оттиск. Лирические премьеры»",
            url: krugozorOctober1970Url,
            kind: "месячная звуковая публикация",
          },
          {
            id: "music-press-1970-vozvrashchenie-romansa",
            label: "Архив музыкальной прессы: Муслим Магомаев и «Возвращение романса» в списке 1970 года",
            url: archive1970Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "magomaev-biography-remembered-songs",
            label: "Биографический архив Магомаева: «Возвращение романса» в числе песен, запомнившихся слушателям",
            url: magomaevBiographyUrl,
            kind: "независимая проверка массового отклика",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1970-11-15",
    dateLabel: "ноябрь 1970",
    archiveYear: 1970,
    programLabel: "«Кругозор» № 11",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Муслим Магомаев",
        title: "Ленивый дождь",
        sources: krugozorIssueSources(1970, 11, 80, "magomayev-lazy-rain", "https://tunnel.ru/post-1970-11", "Ленивый дождь"),
      },
    ],
  },
  {
    chartDate: "1970-12-31",
    dateLabel: "31.12.1970",
    archiveYear: 1971,
    programLabel: "«Новогодний голубой огонёк — 1971»",
    candidates: [
      {
        artist: "Эдуард Хиль",
        title: "Зима",
        sources: [
          {
            id: "blue-light-1970-12-31-zima",
            label: "«Новогодний голубой огонёк — 1971»: эфир 31.12.1970",
            url: newYearBlueLight1971Url,
            kind: "телевизионный эфир",
          },
          {
            id: "music-press-1971-zima",
            label: "Архив музыкальной прессы: песня в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-02-14",
    dateLabel: "14.02.1971",
    archiveYear: 1971,
    programLabel: "«Следствие ведут ЗнаТоКи»: дело № 1 «Чёрный маклер»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Владимир Макаров",
        title: "Незримый бой",
        sources: [
          {
            id: "znatoki-tv-premiere-1971-02-14",
            label: "«Следствие ведут ЗнаТоКи»: премьера первой серии 14.02.1971",
            url: znatokiPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1971-invisible-battle",
            label: "Архив музыкальной прессы: песня и Владимир Макаров в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "znatoki-song-invisible-battle",
            label: "Каталог записи: «Незримый бой» из телефильма — Владимир Макаров",
            url: znatokiSongUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-03-20",
    dateLabel: "20.03.1971",
    archiveYear: 1971,
    programLabel: "«Моя улица»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Нина Сазонова",
        title: "Ромашки спрятались",
        sources: [
          {
            id: "my-street-tv-premiere-1971-03-20",
            label: "«Моя улица»: телепремьера 20.03.1971",
            url: myStreetPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1971-daisies-hidden",
            label: "Архив музыкальной прессы: песня и Нина Сазонова в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "my-street-song-daisies-popularity",
            label: "«Москва Доверие»: песня написана для фильма и получила безмерную любовь зрителей",
            url: myStreetPopularityUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-04-30",
    dateLabel: "30.04.1971",
    archiveYear: 1971,
    programLabel: "«Белорусский вокзал»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Нина Ургант",
        title: "Нам нужна одна победа",
        sources: [
          {
            id: "belorussian-station-premiere-1971-04-30",
            label: "«Белорусский вокзал»: премьера 30.04.1971",
            url: belorussianStationPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1971-one-victory",
            label: "Архив музыкальной прессы: песня и Нина Ургант в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "belorussian-station-song-one-victory",
            label: "В картине песню исполняет героиня Нины Ургант",
            url: oneVictorySongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-06-21",
    dateLabel: "21.06.1971",
    archiveYear: 1972,
    programLabel: "«12 стульев»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Валерий Золотухин",
        title: "Где среди пампасов бегают бизоны",
        sources: [
          {
            id: "twelve-chairs-premiere-1971-06-21",
            label: "«12 стульев»: премьера в кинотеатрах 21.06.1971",
            url: twelveChairsPremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1972-twelve-chairs-pampas",
            label: "Архив музыкальной прессы: песня, фильм и Валерий Золотухин в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "twelve-chairs-song-and-audience",
            label: "Фильм — лидер проката с 39,3 млн зрителей; песню Остапа исполнил Валерий Золотухин",
            url: twelveChairsFilmUrl,
            kind: "массовая аудитория и связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-07-26",
    dateLabel: "26.07.1971",
    archiveYear: 1971,
    programLabel: "«Офицеры»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Владимир Златоустовский",
        title: "От героев былых времён",
        sources: [
          {
            id: "officers-premiere-1971-07-26",
            label: "«Офицеры»: выход на советские экраны 26.07.1971",
            url: officersPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1971-eternal-fire",
            label: "Архив музыкальной прессы: песня в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "officers-song-eternal-fire",
            label: "«Вечный огонь»: песня впервые исполнена в фильме Владимиром Златоустовским",
            url: eternalFireSongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    // Каталог records.su указывает только месяц издания. 15-е число —
    // технический центр августа и не показывается пользователю как релизная дата.
    chartDate: "1971-08-15",
    dateLabel: "август 1971",
    archiveYear: 1971,
    programLabel: "флекси-пластинка Вадима Мулермана и Нины Бродской ГД 0002555",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Вадим Мулерман",
        title: "Тополиный пух",
        sources: [
          {
            id: "records-su-1971-08-poplar-fluff",
            label: "records.su: пластинка ГД 0002555 с Вадимом Мулерманом датирована августом 1971 года",
            url: recordsCatalogAugust1971Url,
            kind: "месячный каталог релиза",
          },
          {
            id: "music-press-1971-poplar-fluff",
            label: "Архив музыкальной прессы: песня и Вадим Мулерман в списке популярных песен 1971 года",
            url: archive1971Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "mulerman-records-1971-poplar-fluff",
            label: "records.su: «Тополиный пух» связан с исполнителем и исходной матрицей ГД 0002555",
            url: mulermanRecordsCatalogUrl,
            kind: "проверка исполнителя и матрицы",
          },
          {
            id: "melodiya-flexi-1971-poplar-fluff",
            label: "Каталог флекси-пластинок «Мелодии»: исходный трек-лист ГД 0002555–6 с «Тополиным пухом»",
            url: melodiyaFlexiCatalog2001To3000Url,
            kind: "проверка физического издания",
          },
        ],
      },
    ],
  },
  {
    // Дискография указывает только месяц издания сингла. 15-е число —
    // технический центр сентября и не показывается пользователю как релизная дата.
    chartDate: "1971-09-15",
    dateLabel: "сентябрь 1971",
    archiveYear: 1971,
    programLabel: "флекси-сингл Валерия Ободзинского ГД 0002583",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Ободзинский",
        title: "Веришь — не веришь",
        sources: [
          {
            id: "obodzinsky-discography-1971-09-believe",
            label: "Дискография Ободзинского: ГД 0002583 с песней «Веришь — не веришь» — сентябрь 1971 года",
            url: obodzinskyDiscography1971Url,
            kind: "месячный каталог релиза",
          },
          {
            id: "music-press-1971-believe",
            label: "Архив музыкальной прессы: песня и Валерий Ободзинский в списке популярных песен 1971 года",
            url: archive1971Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "melodiya-flexi-1971-obodzinsky-believe",
            label: "Каталог флекси-пластинок «Мелодии»: матрица ГД 0002583 и исходный трек-лист с песней",
            url: melodiyaFlexiCatalog2001To3000Url,
            kind: "проверка физического издания",
          },
        ],
      },
    ],
  },
  {
    // Каталог «Кругозора» подтверждает октябрьский номер, но не день продажи.
    // 15-е число используется только как технический центр месяца.
    chartDate: "1971-10-15",
    dateLabel: "октябрь 1971",
    archiveYear: 1971,
    programLabel: "«Кругозор» № 10: «Песенные премьеры»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Галина Ненашева",
        title: "Пороша белая",
        sources: [
          {
            id: "krugozor-1971-10-white-powder",
            label: "«Кругозор» № 10 за октябрь 1971: «Пороша белая» Галины Ненашевой в рубрике «Песенные премьеры»",
            url: krugozorOctober1971Url,
            kind: "месячная звуковая публикация",
          },
          {
            id: "music-press-1971-white-powder",
            label: "Архив музыкальной прессы: песня и Галина Ненашева в списке популярных песен 1971 года",
            url: archive1971Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "velikanova-1971-album-white-powder",
            label: "Каталог «Мелодии»: в том же 1971 году песня отдельно вышла на LP Гелены Великановой",
            url: velikanova1971AlbumCatalogUrl,
            kind: "независимое параллельное издание",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-11-29",
    dateLabel: "29.11.1971",
    archiveYear: 1971,
    programLabel: "«Сыновья уходят в бой»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Владимир Высоцкий",
        title: "Он не вернулся из боя",
        sources: [
          {
            id: "sons-go-to-battle-premiere-1971-11-29",
            label: "«Сыновья уходят в бой»: московская премьера 29.11.1971",
            url: sonsGoToBattlePremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1971-did-not-return-from-battle",
            label: "Архив музыкальной прессы: песня, фильм и Владимир Высоцкий в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "did-not-return-first-wide-audience-1971",
            label: "История песни: первое исполнение для широкой аудитории — на премьере фильма в ноябре 1971 года",
            url: didNotReturnSongUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1971-12-22",
    dateLabel: "22.12.1971",
    archiveYear: 1971,
    programLabel: "«Песня-71»",
    candidates: [
      {
        artist: "Муслим Магомаев",
        title: "Свадьба",
        sources: festivalSources(1971, "22.12.1971", "svadba"),
      },
      {
        artist: "Ольга Воронец",
        title: "А где мне взять такую песню",
        sources: festivalSources(1971, "22.12.1971", "a-gde-mne-vzyat-takuyu-pesnyu"),
      },
      {
        artist: "Лев Лещенко",
        title: "Не плачь, девчонка",
        sources: festivalSources(1971, "22.12.1971", "ne-plach-devchonka"),
      },
      {
        artist: "Эдуард Хиль",
        title: "Зима",
        sources: festivalSources(1971, "22.12.1971", "zima"),
      },
    ],
  },
  {
    // Номер журнала датирован январём; 15-е число — технический центр месяца.
    chartDate: "1972-01-15",
    dateLabel: "январь 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 1: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Цицинатела»",
        title: "Жужуна цвима",
        sources: [
          {
            id: "krugozor-1972-01-tsitsin-atela-catalog",
            label: "Каталог советских пластинок: ВИА «Цицинатела» — «Жужуна цвима» в «Кругозоре» № 1 · 1972.01",
            url: "https://records.su/tag/%D0%A6%D0%B8%D1%86%D0%B8%D0%BD%D0%B0%D1%82%D0%B5%D0%BB%D0%B0",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-01-tsitsin-atela-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 1 за январь 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b901(094).pdf",
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1972-tsitsin-atela",
            label: "Годовой слушательский архив: сверка песенного контекста 1972 года",
            url: archive1972Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-02-14",
    dateLabel: "14.02.1972",
    archiveYear: 1972,
    programLabel: "«Тени исчезают в полдень»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Екатерина Шаврина",
        title: "Гляжу в озёра синие",
        sources: [
          {
            id: "shadows-tv-premiere-1972-02-14",
            label: "«Тени исчезают в полдень»: телепремьера 14.02.1972",
            url: shadowsPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1972-blue-lakes",
            label: "Архив музыкальной прессы: песня и Екатерина Шаврина в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "shadows-song-blue-lakes",
            label: "Песня написана для телефильма; первая исполнительница — Екатерина Шаврина",
            url: blueLakesSongUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-03-15",
    dateLabel: "март 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 3: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Владимир Макаров",
        title: "Ребята с нашего двора",
        sources: [
          {
            id: "krugozor-1972-03-makarov-catalog",
            label: "Каталог советских пластинок: Владимир Макаров — «Ребята с нашего двора» в «Кругозоре» № 3 · 1972.03",
            url: "https://records.su/album/36378",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-03-makarov-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b903(096).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-04-28",
    dateLabel: "28.04.1972",
    archiveYear: 1972,
    programLabel: "«Достояние республики»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Андрей Миронов",
        title: "Песенка о шпаге",
        sources: [
          {
            id: "republic-premiere-1972-04-28-sword",
            label: "«Достояние республики»: выход на экраны 28.04.1972",
            url: republicPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1972-sword-song",
            label: "Архив музыкальной прессы: песня и Андрей Миронов в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "republic-song-sword",
            label: "«Песенка о шпаге» впервые исполнена Андреем Мироновым в фильме",
            url: swordSongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "Андрей Миронов",
        title: "Что будет, то и будет",
        sources: [
          {
            id: "republic-premiere-1972-04-28-what-will-be",
            label: "«Достояние республики»: выход на экраны 28.04.1972",
            url: republicPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1972-what-will-be",
            label: "Архив музыкальной прессы: песня и Андрей Миронов в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "republic-song-what-will-be",
            label: "Список музыки фильма: романс исполняет Андрей Миронов",
            url: republicFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-05-01",
    dateLabel: "01.05.1972",
    archiveYear: 1971,
    programLabel: "«Бумбараш»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Александр Хочинский и Валерий Золотухин",
        title: "Журавль по небу летит",
        sources: [
          {
            id: "bumbarash-tv-premiere-1972-05-01-crane",
            label: "«Бумбараш»: первый показ 01.05.1972",
            url: bumbarashUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1971-bumbarash-crane",
            label: "Архив музыкальной прессы: песня и исполнители в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "bumbarash-crane-film-impact",
            label: "После первого показа песни «Бумбараша» стали настоящими шлягерами",
            url: bumbarashImpactUrl,
            kind: "свидетельство массового успеха",
          },
        ],
      },
      {
        artist: "Валерий Золотухин",
        title: "Ходят кони",
        sources: [
          {
            id: "bumbarash-tv-premiere-1972-05-01-horses",
            label: "«Бумбараш»: первый показ 01.05.1972; песня указана в программе фильма",
            url: bumbarashUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1971-bumbarash-horses",
            label: "Архив музыкальной прессы: песня и Валерий Золотухин в списке 1971 года",
            url: archive1971Url,
            kind: "годовой архив",
          },
          {
            id: "bumbarash-horses-film-impact",
            label: "После первого показа песни «Бумбараша» стали настоящими шлягерами",
            url: bumbarashImpactUrl,
            kind: "свидетельство массового успеха",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-05-15",
    dateLabel: "15.05.1972",
    archiveYear: 1972,
    programLabel: "«Ох уж эта Настя!»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Аида Ведищева",
        title: "Лесной олень",
        sources: [
          {
            id: "nastya-premiere-1972-05-15",
            label: "«Ох уж эта Настя!»: премьера 15.05.1972",
            url: nastyaPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1972-forest-deer",
            label: "Архив музыкальной прессы: песня и Аида Ведищева в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "nastya-song-forest-deer",
            label: "Фильм обязан популярностью «Лесному оленю»; песня стала одной из самых популярных советских детских песен",
            url: nastyaFilmUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-05-22",
    dateLabel: "22.05.1972",
    archiveYear: 1972,
    programLabel: "«Мировой парень»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "ВИА «Песняры»",
        title: "Берёзовый сок",
        sources: [
          {
            id: "world-guy-premiere-1972-05-22",
            label: "«Мировой парень»: выход на экраны 22.05.1972",
            url: worldGuyPremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1972-birch-sap-film",
            label: "Архив музыкальной прессы: песня и «Песняры» в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "world-guy-song-birch-sap",
            label: "В фильме впервые прозвучал ставший популярным «Берёзовый сок» в исполнении «Песняров»",
            url: worldGuyFilmUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-06-15",
    dateLabel: "июнь 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 6: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Аида Ведищева",
        title: "Журавли",
        sources: [
          {
            id: "krugozor-1972-06-vedishcheva-catalog",
            label: "Каталог советских пластинок: Аида Ведищева — «Журавли» в «Кругозоре» № 6 · 1972.06",
            url: "https://records.su/album/36380",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-06-vedishcheva-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b906(099).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
      {
        artist: "Эдуард Хиль",
        title: "Семёновна",
        sources: [
          {
            id: "krugozor-1972-06-khil-catalog",
            label: "Каталог советских пластинок: Эдуард Хиль — «Семёновна» в «Кругозоре» № 6 · 1972.06",
            url: "https://records.su/album/36380",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-06-khil-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b906(099).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» и каталог records.su указывают только июльский номер.
    // 15-е число — технический центр месяца, а не заявленная дата выхода.
    chartDate: "1972-07-15",
    dateLabel: "июль 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 7: песни из телефильмов",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Карелина",
        title: "Гляжу в озёра синие",
        sources: [
          {
            id: "krugozor-1972-07-blue-lakes-catalog",
            label: "Каталог советских пластинок: «Кругозор» № 7 с песней из «Теней…» в исполнении Ирины Карелиной · 1972.07",
            url: krugozorJuly1972CatalogUrl,
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-07-blue-lakes-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1972 года",
            url: krugozorJuly1972ScanUrl,
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1972-blue-lakes-karelina",
            label: "Годовой слушательский архив: «Гляжу в озёра синие» и Ирина Карелина в списке популярных песен 1972 года",
            url: archive1972Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "blue-lakes-song-tv-history-1972",
            label: "Телеархив: история песни «Гляжу в озёра синие» и её связи с телефильмом",
            url: blueLakesSongUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-08-23",
    dateLabel: "23–26.08.1972",
    archiveYear: 1972,
    programLabel: "Международный фестиваль песни в Сопоте — 1972",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "За того парня",
        sources: [
          {
            id: "sopot-festival-1972-08-23",
            label: "Сопот-1972: фестиваль проходил 23–26.08.1972",
            url: sopotFestivalUrl,
            kind: "датированный фестиваль",
          },
          {
            id: "music-press-1972-za-togo-parnya-sopot",
            label: "Архив музыкальной прессы: песня и Лев Лещенко в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "leshchenko-sopot-1972-za-togo-parnya",
            label: "Лев Лещенко: первая премия, многократный бис и всесоюзная телетрансляция Сопота",
            url: leshchenkoSopotUrl,
            kind: "свидетельство массового успеха",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» подтверждает сентябрьский номер, но не день продажи.
    // 15-е число используется только как технический центр месяца.
    chartDate: "1972-09-15",
    dateLabel: "сентябрь 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 9: Андрей Миронов о кино и в кино",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Андрей Миронов",
        title: "Песенка о шпаге",
        sources: [
          {
            id: "krugozor-1972-09-sword-song-catalog",
            label: "Каталог советских пластинок: «Песенка о шпаге» в «Кругозоре» № 9 · 1972.09",
            url: krugozorSeptember1972CatalogUrl,
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-09-sword-song-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 9 за сентябрь 1972 года",
            url: krugozorSeptember1972ScanUrl,
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1972-sword-song-september",
            label: "Годовой слушательский архив: «Песенка о шпаге» и Андрей Миронов в списке популярных песен 1972 года",
            url: archive1972Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "sword-song-film-history-1972",
            label: "История песни: «Песенка о шпаге» впервые исполнена Андреем Мироновым в фильме",
            url: swordSongUrl,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-10-15",
    dateLabel: "октябрь 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 10: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ольга Воронец",
        title: "Ромашки спрятались",
        sources: [
          {
            id: "krugozor-1972-10-voronets-catalog",
            label: "Каталог советских пластинок: Ольга Воронец — «Ромашки спрятались» в «Кругозоре» № 10 · 1972.10",
            url: "https://records.su/album/36382",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-10-voronets-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b910(103).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
      {
        artist: "Лев Лещенко",
        title: "Берёза белая",
        sources: [
          {
            id: "krugozor-1972-10-leshchenko-catalog",
            label: "Каталог советских пластинок: Лев Лещенко — «Берёза белая» в «Кругозоре» № 10 · 1972.10",
            url: "https://records.su/album/36382",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-10-leshchenko-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1972 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201972,%20%b910(103).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» подтверждает ноябрьский номер, но не день продажи.
    // 15-е число используется только как технический центр месяца.
    chartDate: "1972-11-15",
    dateLabel: "ноябрь 1972",
    archiveYear: 1972,
    programLabel: "«Кругозор» № 11: концертная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Людмила Зыкина",
        title: "Подари мне платок",
        sources: [
          {
            id: "krugozor-1972-11-podari-mne-platok-catalog",
            label: "Каталог советских пластинок: Людмила Зыкина исполняет «Подари мне платок» в «Кругозоре» № 11 · 1972.11",
            url: krugozorNovember1972CatalogUrl,
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1972-11-podari-mne-platok-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 11 за ноябрь 1972 года",
            url: krugozorNovember1972ScanUrl,
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1972-podari-mne-platok",
            label: "Годовой слушательский архив: «Подари мне платок» и Людмила Зыкина в списке популярных песен 1972 года",
            url: archive1972Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "zykina-podari-mne-platok-catalog",
            label: "Каталог записи: Людмила Зыкина — «Подари мне платок»",
            url: zykinaPodariCatalogUrl,
            kind: "проверка названия и исполнителя",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1972-12-22",
    dateLabel: "22.12.1972",
    archiveYear: 1972,
    programLabel: "«Песня-72»",
    candidates: [
      {
        artist: "Кола Бельды",
        title: "Увезу тебя я в тундру",
        sources: festivalSources(1972, "22.12.1972", "uvezu-tebya-ya-v-tundru"),
      },
      {
        artist: "Тамара Синявская",
        title: "Гляжу в озёра синие",
        sources: festivalSources(1972, "22.12.1972", "glyazhu-v-ozera-sinie"),
      },
      {
        artist: "ВИА «Песняры»",
        title: "Берёзовый сок",
        sources: festivalSources(1972, "22.12.1972", "berezovyy-sok"),
      },
      {
        artist: "Лев Лещенко",
        title: "За того парня",
        sources: festivalSources(1972, "22.12.1972", "za-togo-parnya"),
      },
    ],
  },
  {
    chartDate: "1972-12-30",
    dateLabel: "30.12.1972",
    archiveYear: 1973,
    programLabel: "фильм «Точка, точка, запятая…»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Олег Анофриев",
        title: "Точка, точка, запятая",
        sources: [
          {
            id: "dot-comma-premiere-1972-12-30",
            label: "«Культура.РФ»: премьерный показ фильма состоялся 30.12.1972",
            url: dotCommaPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1973-dot-comma",
            label: "Годовой слушательский архив: песня и Олег Анофриев в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "dot-comma-song-anofriev",
            label: "Каталог записи: «Точка, точка, запятая» — Олег Анофриев",
            url: dotCommaSongUrl,
            kind: "проверка названия и исполнителя",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-01-15",
    dateLabel: "январь 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 1: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Раиса Мкртчян",
        title: "Благодарю тебя",
        sources: [
          {
            id: "krugozor-1973-01-mkrtchyan-catalog",
            label: "Каталог советских пластинок: Раиса Мкртчян — «Благодарю тебя» в «Кругозоре» № 1 · 1973.01",
            url: "https://records.su/albums/locate/13192",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1973-01-mkrtchyan-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 1 за январь 1973 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b901(106).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-02-15",
    dateLabel: "февраль 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 2: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Татьяна Раевская",
        title: "Гармошка",
        sources: [
          {
            id: "krugozor-1973-02-raevskaya-catalog",
            label: "Каталог советских пластинок: Татьяна Раевская — «Гармошка» в «Кругозоре» № 2 · 1973.02",
            url: "https://records.su/album/13788",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1973-02-raevskaya-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 2 за февраль 1973 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b902(107).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-03-15",
    dateLabel: "март 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 3: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Весёлые ребята»",
        title: "Если любишь ты",
        sources: [
          {
            id: "krugozor-1973-03-if-you-love-catalog",
            label: "Каталог советских пластинок: «Если любишь ты» в «Кругозоре» № 3 · 1973.03",
            url: krugozorMarch1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-03-if-you-love-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1973 года",
            url: krugozorMarch1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-if-you-love",
            label: "Годовой слушательский архив: «Если любишь ты» и ВИА «Весёлые ребята» в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "derbenyov-songs-if-you-love",
            label: "История песни: ВИА «Весёлые ребята» указан среди её первых исполнителей",
            url: derbenyovSongsUrl,
            kind: "история песни",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-04-29",
    dateLabel: "29.04.1973",
    archiveYear: 1972,
    programLabel: "«Большая перемена»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Светлана Крючкова",
        title: "Чёрное и белое",
        sources: [
          {
            id: "big-break-tv-premiere-1973-04-29",
            label: "«Большая перемена»: телепремьера с 29.04 по 02.05.1973",
            url: bigBreakPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1972-black-and-white",
            label: "Архив музыкальной прессы: песня и Светлана Крючкова в списке 1972 года",
            url: archive1972Url,
            kind: "годовой архив",
          },
          {
            id: "big-break-song-black-and-white",
            label: "В фильме романс исполнила Светлана Крючкова",
            url: blackAndWhiteSongUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-05-15",
    dateLabel: "май 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 5: песни Михаила Ножкина",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Михаил Ножкин",
        title: "Я так давно не видел маму",
        sources: [
          {
            id: "krugozor-1973-05-nozhkin-catalog",
            label: "Каталог советских пластинок: Михаил Ножкин — «Я так давно не видел маму» в «Кругозоре» № 5 · 1973.05",
            url: "https://records.su/album/36359",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1973-05-nozhkin-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 5 за май 1973 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b905(110).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-06-15",
    dateLabel: "июнь 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 6: «По просьбам читателей»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Самоцветы»",
        title: "Мой адрес — Советский Союз",
        sources: [
          {
            id: "krugozor-1973-06-my-address-catalog",
            label: "Каталог советских пластинок: «Мой адрес — Советский Союз» в рубрике «По просьбам читателей» · 1973.06",
            url: krugozorJune1973CatalogUrl,
            kind: "датированный читательский запрос",
          },
          {
            id: "krugozor-1973-06-my-address-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1973 года",
            url: krugozorJune1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-my-address-june",
            label: "Годовой слушательский архив: «Мой адрес — Советский Союз» и «Самоцветы» в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "samotsvety-discography-my-address-krugozor",
            label: "Дискография «Самоцветов»: песня указана на пластинке «Кругозора» № 6",
            url: samotsvetyDiscographyUrl,
            kind: "дискография исполнителя",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-07-15",
    dateLabel: "июль 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 7: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Нина Сазонова",
        title: "Стою на полустаночке",
        sources: [
          {
            id: "krugozor-1973-07-sazonova-catalog",
            label: "Архив выпуска: Нина Сазонова — «Стою на полустаночке» в «Кругозоре» № 7 · 1973.07",
            url: "https://tunnel.ru/post-1973-07",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1973-07-sazonova-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1973 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201973,%20%b907(112).pdf",
            kind: "скан исходного выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-08-11",
    dateLabel: "11.08.1973",
    archiveYear: 1973,
    programLabel: "«Семнадцать мгновений весны»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Иосиф Кобзон",
        title: "Мгновения",
        sources: [
          {
            id: "seventeen-moments-tv-premiere-1973-08-11-moments",
            label: "«Семнадцать мгновений весны»: первая серия показана 11.08.1973",
            url: seventeenMomentsPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1973-moments",
            label: "Архив музыкальной прессы: песня и Иосиф Кобзон в списке 1973 года",
            url: archive1973Url,
            kind: "годовой архив",
          },
          {
            id: "seventeen-moments-song-moments",
            label: "В телефильм вошли «Мгновения» в исполнении Иосифа Кобзона",
            url: seventeenMomentsFilmUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
      {
        artist: "Иосиф Кобзон",
        title: "Песня о далёкой Родине",
        sources: [
          {
            id: "seventeen-moments-tv-premiere-1973-08-11-homeland",
            label: "«Семнадцать мгновений весны»: первая серия показана 11.08.1973",
            url: seventeenMomentsPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1973-distant-homeland",
            label: "Архив музыкальной прессы: песня и Иосиф Кобзон в списке 1973 года",
            url: archive1973Url,
            kind: "годовой архив",
          },
          {
            id: "seventeen-moments-song-homeland",
            label: "В телефильм вошла «Песня о далёкой Родине» в исполнении Иосифа Кобзона",
            url: seventeenMomentsFilmUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-09-17",
    dateLabel: "17.09.1973",
    archiveYear: 1973,
    programLabel: "«Иван Васильевич меняет профессию»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Нина Бродская",
        title: "Звенит январская вьюга",
        sources: [
          {
            id: "ivan-premiere-1973-09-17-blizzard",
            label: "«Иван Васильевич меняет профессию»: прокат с 17.09.1973",
            url: ivanPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1973-january-blizzard",
            label: "Архив музыкальной прессы: песня и Нина Бродская в списке 1973 года",
            url: archive1973Url,
            kind: "годовой архив",
          },
          {
            id: "ivan-song-january-blizzard",
            label: "«Звенит январская вьюга»: впервые прозвучала в фильме 1973 года",
            url: januaryBlizzardSongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "Валерий Золотухин",
        title: "Разговор со счастьем",
        sources: [
          {
            id: "ivan-premiere-1973-09-17-happiness",
            label: "«Иван Васильевич меняет профессию»: прокат с 17.09.1973",
            url: ivanPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1973-happiness",
            label: "Архив музыкальной прессы: песня и Валерий Золотухин в списке 1973 года",
            url: archive1973Url,
            kind: "годовой архив",
          },
          {
            id: "ivan-song-happiness",
            label: "Вокал «Разговора со счастьем» в фильме — Валерий Золотухин",
            url: ivanFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "Борис Кузнецов и Лев Полосин",
        title: "Кап-кап-кап (Маруся)",
        sources: [
          {
            id: "ivan-premiere-1973-09-17-marusya",
            label: "«Иван Васильевич меняет профессию»: прокат с 17.09.1973",
            url: ivanPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1973-marusya",
            label: "Архив музыкальной прессы: песня в списке 1973 года",
            url: archive1973Url,
            kind: "годовой архив",
          },
          {
            id: "ivan-song-marusya",
            label: "Саундтрек фильма: «Кап-кап-кап» — Борис Кузнецов и Лев Полосин",
            url: marusyaSongUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-10-15",
    dateLabel: "октябрь 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 10: песни из «Семнадцати мгновений весны»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Иосиф Кобзон",
        title: "Мгновения",
        sources: [
          {
            id: "krugozor-1973-10-moments-catalog",
            label: "Каталог советских пластинок: песни Кобзона из «Семнадцати мгновений весны» в «Кругозоре» № 10 · 1973.10",
            url: krugozorOctober1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-10-moments-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1973 года",
            url: krugozorOctober1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-moments-october",
            label: "Годовой слушательский архив: «Мгновения» и Иосиф Кобзон в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "seventeen-moments-song-october",
            label: "В телефильм вошли «Мгновения» в исполнении Иосифа Кобзона",
            url: seventeenMomentsFilmUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
      {
        artist: "Иосиф Кобзон",
        title: "Песня о далёкой Родине",
        sources: [
          {
            id: "krugozor-1973-10-distant-homeland-catalog",
            label: "Каталог советских пластинок: песни Кобзона из «Семнадцати мгновений весны» в «Кругозоре» № 10 · 1973.10",
            url: krugozorOctober1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-10-distant-homeland-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1973 года",
            url: krugozorOctober1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-distant-homeland-october",
            label: "Годовой слушательский архив: «Песня о далёкой Родине» и Иосиф Кобзон в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "seventeen-moments-song-distant-homeland-october",
            label: "В телефильм вошла «Песня о далёкой Родине» в исполнении Иосифа Кобзона",
            url: seventeenMomentsFilmUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-11-15",
    dateLabel: "ноябрь 1973",
    archiveYear: 1973,
    programLabel: "«Кругозор» № 11: новые песни и мелодии кино",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Самоцветы»",
        title: "Там, за облаками",
        sources: [
          {
            id: "krugozor-1973-11-beyond-clouds-catalog",
            label: "Каталог советских пластинок: «Там, за облаками» в «Кругозоре» № 11 · 1973.11",
            url: krugozorNovember1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-11-beyond-clouds-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 11 за ноябрь 1973 года",
            url: krugozorNovember1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-beyond-clouds",
            label: "Годовой слушательский архив: «Там, за облаками» и «Самоцветы» в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "samotsvety-discography-beyond-clouds",
            label: "Дискография «Самоцветов» подтверждает песню в репертуаре ансамбля",
            url: samotsvetyDiscographyUrl,
            kind: "дискография исполнителя",
          },
        ],
      },
      {
        artist: "Валерий Золотухин",
        title: "Разговор со счастьем",
        sources: [
          {
            id: "krugozor-1973-11-happiness-catalog",
            label: "Каталог советских пластинок: «Разговор со счастьем» в «Кругозоре» № 11 · 1973.11",
            url: krugozorNovember1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-11-happiness-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 11 за ноябрь 1973 года",
            url: krugozorNovember1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-happiness-november",
            label: "Годовой слушательский архив: «Разговор со счастьем» и Валерий Золотухин в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "ivan-song-happiness-november",
            label: "Вокал «Разговора со счастьем» в фильме — Валерий Золотухин",
            url: ivanFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "Борис Кузнецов и Лев Полосин",
        title: "Кап-кап-кап (Маруся)",
        sources: [
          {
            id: "krugozor-1973-11-marusya-catalog",
            label: "Каталог советских пластинок: «Кап-кап-кап» в «Кругозоре» № 11 · 1973.11",
            url: krugozorNovember1973CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1973-11-marusya-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 11 за ноябрь 1973 года",
            url: krugozorNovember1973ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1973-marusya-november",
            label: "Годовой слушательский архив: «Кап-кап-кап» в списке популярных песен 1973 года",
            url: archive1973Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "ivan-song-marusya-november",
            label: "Саундтрек фильма: «Кап-кап-кап» — Борис Кузнецов и Лев Полосин",
            url: marusyaSongUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1973-12-22",
    dateLabel: "22.12.1973",
    archiveYear: 1973,
    programLabel: "«Песня-73»",
    candidates: [
      {
        artist: "Муслим Магомаев",
        title: "Мелодия",
        sources: festivalSources(1973, "22.12.1973", "melodiya"),
      },
      {
        artist: "Геннадий Белов",
        title: "Дрозды",
        sources: festivalSources(1973, "22.12.1973", "drozdy"),
      },
      {
        artist: "Муслим Магомаев",
        title: "Разве тот мужчина",
        sources: festivalSources(1973, "22.12.1973", "razve-tot-muzhchina"),
      },
      {
        artist: "ВИА «Самоцветы»",
        title: "Мой адрес — Советский Союз",
        sources: festivalSources(1973, "22.12.1973", "moy-adres-sovetskiy-soyuz"),
      },
    ],
  },
  {
    chartDate: "1974-01-15",
    dateLabel: "январь 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 1: музыка кино",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Павел Бабаков и ВИА «Голубые гитары»",
        title: "Старые слова",
        sources: [
          {
            id: "krugozor-1974-01-old-words-catalog",
            label: "Каталог советских пластинок: «Старые слова» в исполнении «Голубых гитар», солист П. Бабаков · 1974.01",
            url: krugozorJanuary1974CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1974-01-old-words-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 1 за январь 1974 года",
            url: krugozorJanuary1974ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1974-old-words",
            label: "Годовой слушательский архив: «Старые слова» и Павел Бабаков в списке популярных песен 1974 года",
            url: archive1974Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-02-15",
    dateLabel: "февраль 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Эдуард Хиль",
        title: "Разбуди меня, дождь",
        sources: krugozorIssueSources(1974, 2, 119, "razbudi-menya-dozhd", "https://www.records.su/album/36397", "Разбуди меня, дождь"),
      },
    ],
  },
  {
    chartDate: "1974-03-15",
    dateLabel: "март 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 3: музыка экрана",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Олег Анофриев",
        title: "Есть только миг",
        sources: [
          {
            id: "krugozor-1974-03-only-a-moment-catalog",
            label: "Каталог советских пластинок: «Есть только миг» в исполнении Олега Анофриева · 1974.03",
            url: krugozorMarch1974CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1974-03-only-a-moment-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1974 года",
            url: krugozorMarch1974ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1974-only-a-moment",
            label: "Годовой слушательский архив: «Есть только миг» и Олег Анофриев в списке популярных песен 1974 года",
            url: archive1974Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Олег Анофриев",
        title: "В порту",
        sources: [
          {
            id: "krugozor-1974-03-in-the-port-catalog",
            label: "Каталог советских пластинок: «В порту» в исполнении Олега Анофриева · 1974.03",
            url: krugozorMarch1974CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1974-03-in-the-port-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1974 года",
            url: krugozorMarch1974ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1974-in-the-port",
            label: "Годовой слушательский архив: «В порту» и Олег Анофриев в списке популярных песен 1974 года",
            url: archive1974Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-04-15",
    dateLabel: "апрель 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 4",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Иосиф Кобзон",
        title: "Мелодия",
        sources: krugozorIssueSources(1974, 4, 121, "melodiya", "https://records.su/album/32632", "Мелодия"),
      },
    ],
  },
  {
    chartDate: "1974-05-08",
    dateLabel: "08.05.1974",
    archiveYear: 1974,
    programLabel: "телефильм «Анискин и Фантомас»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Геннадий Белов",
        title: "Травы, травы",
        sources: [
          {
            id: "aniskin-premiere-1974-05-08",
            label: "«Анискин и Фантомас»: премьера 08.05.1974",
            url: aniskinPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1974-travy-travy-premiere",
            label: "Архив музыкальной прессы: песня и Геннадий Белов в списке 1974 года",
            url: archive1974Url,
            kind: "годовой архив",
          },
          {
            id: "aniskin-song-travy-travy-popularity",
            label: "«Травы, травы» впервые прозвучала в телефильме и стала популярной",
            url: song1974Url,
            kind: "история массовой популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-06-15",
    dateLabel: "июнь 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Александра Стрельченко",
        title: "У меня, Марины",
        sources: krugozorIssueSources(1974, 6, 123, "u-menya-mariny", "https://www.records.su/album/33194", "У меня, Марины"),
      },
    ],
  },
  {
    chartDate: "1974-07-18",
    dateLabel: "18.07.1974",
    archiveYear: 1974,
    programLabel: "мультфильм «Шапокляк»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Владимир Ферапонтов",
        title: "Голубой вагон",
        sources: [
          {
            id: "shapoklyak-premiere-1974-07-18",
            label: "«Шапокляк»: выпуск студией «Союзмультфильм» 18.07.1974",
            url: shapoklyakPremiereUrl,
            kind: "датированный кинорелиз",
          },
          {
            id: "music-press-1974-blue-carriage",
            label: "Архив музыкальной прессы: песня в списке 1974 года",
            url: archive1974Url,
            kind: "годовой архив",
          },
          {
            id: "shapoklyak-song-blue-carriage",
            label: "«Голубой вагон» написан для серии «Шапокляк» о Чебурашке и крокодиле Гене",
            url: blueCarriageSongUrl,
            kind: "связь песни с мультфильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-08-12",
    dateLabel: "12.08.1974",
    archiveYear: 1974,
    programLabel: "«В бой идут одни „старики“»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Мурад Садыков",
        title: "Смуглянка",
        sources: [
          {
            id: "old-men-premiere-1974-08-12",
            label: "«В бой идут одни „старики“»: премьера 12.08.1974",
            url: oldMenPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1974-dark-girl",
            label: "Архив музыкальной прессы: песня и Мурад Садыков в списке 1974 года",
            url: archive1974Url,
            kind: "годовой архив",
          },
          {
            id: "old-men-song-dark-girl",
            label: "В начале фильма «Смуглянка» звучит в исполнении Мурада Садыкова",
            url: oldMenFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-09-23",
    dateLabel: "23.09.1974",
    archiveYear: 1974,
    programLabel: "«Москва — Кассиопея»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Геннадий Белов",
        title: "Этот большой мир",
        sources: [
          {
            id: "cassiopeia-premiere-1974-09-23",
            label: "«Москва — Кассиопея»: премьера 23.09.1974",
            url: cassiopeiaPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1974-big-world",
            label: "Архив музыкальной прессы: песня и Геннадий Белов в списке 1974 года",
            url: archive1974Url,
            kind: "годовой архив",
          },
          {
            id: "cassiopeia-song-big-world",
            label: "«Этот большой мир» написана специально для фильма «Москва — Кассиопея»",
            url: bigWorldSongUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-10-15",
    dateLabel: "октябрь 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 10: поёт Алла Пугачёва",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Посидим, поокаем",
        sources: [
          {
            id: "krugozor-1974-10-sit-and-sigh-catalog",
            label: "Каталог советских пластинок: Алла Пугачёва исполняет «Посидим-поокаем» · 1974.10",
            url: krugozorOctober1974CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1974-10-sit-and-sigh-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1974 года",
            url: krugozorOctober1974ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1974-sit-and-sigh",
            label: "Годовой слушательский архив: «Посидим, поокаем» и Алла Пугачёва в списке популярных песен 1974 года",
            url: archive1974Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1974-11-15",
    dateLabel: "ноябрь 1974",
    archiveYear: 1974,
    programLabel: "«Кругозор» № 11",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Эдита Пьеха",
        title: "Надежда",
        sources: krugozorIssueSources(1974, 11, 128, "nadezhda", "https://tunnel.ru/post-1974-11", "Надежда"),
      },
    ],
  },
  {
    chartDate: "1974-12-22",
    dateLabel: "22.12.1974",
    archiveYear: 1974,
    programLabel: "«Песня-74»",
    candidates: [
      {
        artist: "ВИА «Самоцветы»",
        title: "Не повторяется такое никогда",
        sources: festivalSources(1974, "22.12.1974", "ne-povtoryaetsya-takoe-nikogda"),
      },
      {
        artist: "Валентина Толкунова",
        title: "Поговори со мною, мама",
        sources: festivalSources(1974, "22.12.1974", "pogovori-so-mnoyu-mama"),
      },
      {
        artist: "Геннадий Белов",
        title: "Травы, травы",
        sources: festivalSources(1974, "22.12.1974", "travy-travy"),
      },
      {
        artist: "София Ротару",
        title: "Баллада о матери",
        sources: festivalSources(1974, "22.12.1974", "ballada-o-materi"),
      },
    ],
  },
  {
    chartDate: "1975-01-02",
    dateLabel: "02.01.1975",
    archiveYear: 1975,
    programLabel: "«Три дня в Москве»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Нина Бродская",
        title: "Ты говоришь мне о любви",
        sources: [
          {
            id: "three-days-moscow-tv-premiere-1975-01-02",
            label: "«Три дня в Москве»: первый показ 02–03.01.1975",
            url: threeDaysMoscowUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1975-you-tell-me-about-love",
            label: "Архив музыкальной прессы: песня и Нина Бродская в списке 1975 года",
            url: archive1975Url,
            kind: "годовой архив",
          },
          {
            id: "three-days-moscow-song-love",
            label: "Список исполнителей телефильма: песню поёт Нина Бродская",
            url: threeDaysMoscowUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-02-15",
    dateLabel: "февраль 1975",
    archiveYear: 1975,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Леонид Утёсов",
        title: "Дорогие мои москвичи",
        sources: krugozorIssueSources(1975, 2, 131, "dorogie-moi-moskvichi", "https://tunnel.ru/post-1975-02", "Дорогие мои москвичи"),
      },
    ],
  },
  {
    chartDate: "1975-03-11",
    dateLabel: "11.03.1975",
    archiveYear: 1975,
    programLabel: "«Юркины рассветы»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Николай Соловьёв",
        title: "Степная птица вдаль зовёт",
        sources: [
          {
            id: "yurkin-dawns-tv-premiere-1975-03-11",
            label: "«Юркины рассветы»: первый показ 11–14.03.1975",
            url: yurkinDawnsUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1975-steppe-bird",
            label: "Архив музыкальной прессы: песня и Николай Соловьёв в списке 1975 года",
            url: archive1975Url,
            kind: "годовой архив",
          },
          {
            id: "yurkin-dawns-song-steppe-bird",
            label: "В телефильме песню исполнили Николай Соловьёв и Алла Абдалова",
            url: yurkinDawnsUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-04-15",
    dateLabel: "апрель 1975",
    archiveYear: 1975,
    programLabel: "«Кругозор» № 4",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Анна Герман",
        title: "Песня",
        sources: krugozorIssueSources(1975, 4, 133, "pesnya", "https://records.su/album/33212", "Песня"),
      },
    ],
  },
  {
    chartDate: "1975-05-09",
    dateLabel: "09.05.1975",
    archiveYear: 1975,
    programLabel: "праздничный «Голубой огонёк»",
    candidates: [
      {
        artist: "Леонид Сметанников",
        title: "День Победы",
        sources: [
          {
            id: "victory-day-blue-light-1975-05-09",
            label: "Леонид Сметанников: запись «Дня Победы» вышла в эфир «Голубого огонька» 09.05.1975",
            url: smetannikovVictoryInterviewUrl,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "music-press-1975-victory-day-smetannikov",
            label: "Годовой слушательский архив: «День Победы» и Леонид Сметанников в списке популярных песен 1975 года",
            url: archive1975Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "victory-day-first-tv-history",
            label: "История песни: первый телеэфир — Леонид Сметанников в праздничном «Голубом огоньке» 09.05.1975",
            url: victoryDaySongUrl,
            kind: "история массовой популярности",
          },
          {
            id: "victory-blue-light-program-archive",
            label: "Архив программы: праздничный «Голубой огонёк» к 30-летию Победы, 1975 год; среди участников Леонид Сметанников",
            url: victoryBlueLightArchiveUrl,
            kind: "архив телевизионной программы",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-06-15",
    dateLabel: "июнь 1975",
    archiveYear: 1975,
    programLabel: "«Кругозор» № 6: песни для старшеклассников",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Верные друзья»",
        title: "Девятый класс",
        sources: [
          {
            id: "krugozor-1975-06-ninth-grade-catalog",
            label: "Каталог советских пластинок: «Девятый класс» в исполнении ВИА «Верные друзья» · 1975.06",
            url: krugozorJune1975CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1975-06-ninth-grade-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1975 года",
            url: krugozorJune1975ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "krugozor-1975-06-ninth-grade-contents",
            label: "Архив звуковых страниц: «Девятый класс» — ВИА «Верные друзья»",
            url: krugozorJune1975ContentsUrl,
            kind: "архив содержания выпуска",
          },
        ],
      },
      {
        artist: "Иосиф Кобзон",
        title: "Десятый класс",
        sources: [
          {
            id: "krugozor-1975-06-tenth-grade-catalog",
            label: "Каталог советских пластинок: «Десятый класс» в исполнении Иосифа Кобзона · 1975.06",
            url: krugozorJune1975CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1975-06-tenth-grade-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1975 года",
            url: krugozorJune1975ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "krugozor-1975-06-tenth-grade-contents",
            label: "Архив звуковых страниц: «Десятый класс» — Иосиф Кобзон",
            url: krugozorJune1975ContentsUrl,
            kind: "архив содержания выпуска",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-07-04",
    dateLabel: "04.07.1975",
    archiveYear: 1975,
    programLabel: "«Золотой Орфей — 1975»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Арлекино",
        sources: [
          {
            id: "golden-orpheus-tv-1975-07-04",
            label: "ЦТ СССР: эфир церемонии «Золотой Орфей» 04.07.1975",
            url: tv1975Url,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "music-press-1975-arlekino",
            label: "Архив музыкальной прессы: «Арлекино» и Алла Пугачёва в списке 1975 года",
            url: archive1975Url,
            kind: "годовой архив",
          },
          {
            id: "pugacheva-arlekino-1975-impact",
            label: "После телеэфира вышел 14-миллионный сольный миньон «Арлекино»",
            url: pugachevaUrl,
            kind: "массовый культурный отклик",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-08-15",
    dateLabel: "август 1975",
    archiveYear: 1975,
    programLabel: "«Кругозор» № 8",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Верасы»",
        title: "Колыбельная",
        sources: krugozorIssueSources(1975, 8, 137, "kolybelnaya", "https://tunnel.ru/post-1975-08", "Колыбельная"),
      },
    ],
  },
  {
    chartDate: "1975-09-15",
    dateLabel: "15.09.1975",
    archiveYear: 1975,
    programLabel: "телефильм «Вариант „Омега“»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Олег Даль",
        title: "Где он, этот день?",
        sources: [
          {
            id: "variant-omega-tv-premiere-1975-09-15",
            label: "«Вариант „Омега“»: дата телепремьеры 15.09.1975",
            url: variantOmegaPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1975-where-is-that-day",
            label: "Годовой слушательский архив: «Где он, этот день?» и Олег Даль в списке популярных песен 1975 года",
            url: archive1975Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "variant-omega-song-catalog",
            label: "Каталог записи: Олег Даль — «Где он, этот день?» из телефильма «Вариант „Омега“»",
            url: variantOmegaSongCatalogUrl,
            kind: "связь песни с телефильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-10-23",
    dateLabel: "23.10.1975",
    archiveYear: 1975,
    programLabel: "«Не может быть!»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Вячеслав Невинный",
        title: "Губит людей не пиво",
        sources: [
          {
            id: "impossible-premiere-1975-10-23-beer",
            label: "«Не может быть!»: премьера 23.10.1975",
            url: impossiblePremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1975-not-beer",
            label: "Архив музыкальной прессы: песня и Вячеслав Невинный в списке 1975 года",
            url: archive1975Url,
            kind: "годовой архив",
          },
          {
            id: "impossible-song-not-beer",
            label: "Песня «Губит людей не пиво» входит в фильм «Не может быть!»",
            url: impossibleFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "Олег Даль",
        title: "Мальчик Купидон",
        sources: [
          {
            id: "impossible-premiere-1975-10-23-cupid",
            label: "«Не может быть!»: премьера 23.10.1975",
            url: impossiblePremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1975-cupid",
            label: "Архив музыкальной прессы: песня и Олег Даль в списке 1975 года",
            url: archive1975Url,
            kind: "годовой архив",
          },
          {
            id: "impossible-song-cupid",
            label: "Песня «Мальчик Купидон» входит в фильм «Не может быть!»",
            url: impossibleFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-11-15",
    dateLabel: "ноябрь 1975",
    archiveYear: 1975,
    programLabel: "«Кругозор» № 11",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Арлекино",
        sources: [
          ...krugozorIssueSources(1975, 11, 140, "arlekino", "https://tunnel.ru/post-1975-11", "Арлекино"),
          {
            id: "music-press-1975-arlekino-november",
            label: "Годовой слушательский архив: «Арлекино» в списке популярных песен 1975 года",
            url: archive1975Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1975-12-22",
    dateLabel: "22.12.1975",
    archiveYear: 1975,
    programLabel: "«Песня-75»",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "День Победы",
        sources: festivalSources(1975, "22.12.1975", "den-pobedy"),
      },
      {
        artist: "София Ротару",
        title: "Лебединая верность",
        sources: festivalSources(1975, "22.12.1975", "lebedinaya-vernost"),
      },
      {
        artist: "София Ротару",
        title: "Яблони в цвету",
        sources: festivalSources(1975, "22.12.1975", "yabloni-v-tsvetu"),
      },
      {
        artist: "ВИА «Пламя»",
        title: "Вся жизнь впереди",
        sources: festivalSources(1975, "22.12.1975", "vsya-zhizn-vperedi"),
      },
    ],
  },
  {
    chartDate: "1976-01-01",
    dateLabel: "01.01.1976",
    archiveYear: 1976,
    programLabel: "«Ирония судьбы, или С лёгким паром!»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Мне нравится",
        sources: [
          {
            id: "irony-tv-premiere-1976-01-01-like",
            label: "«Ирония судьбы»: первый показ 01.01.1976",
            url: ironyPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1976-like",
            label: "Архив музыкальной прессы: песня и Алла Пугачёва в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "irony-soundtrack-like",
            label: "Саундтрек фильма: «Мне нравится» — Алла Пугачёва",
            url: ironyPremiereUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "На Тихорецкую",
        sources: [
          {
            id: "irony-tv-premiere-1976-01-01-tikhoretskaya",
            label: "«Ирония судьбы»: первый показ 01.01.1976",
            url: ironyPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1976-tikhoretskaya",
            label: "Архив музыкальной прессы: песня и Алла Пугачёва в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "irony-soundtrack-tikhoretskaya",
            label: "Саундтрек фильма: «На Тихорецкую» — Алла Пугачёва",
            url: ironyPremiereUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "По улице моей",
        sources: [
          {
            id: "irony-tv-premiere-1976-01-01-street",
            label: "«Ирония судьбы»: первый показ 01.01.1976",
            url: ironyPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1976-street",
            label: "Архив музыкальной прессы: песня и Алла Пугачёва в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "irony-soundtrack-street",
            label: "Саундтрек фильма: «По улице моей» — Алла Пугачёва",
            url: ironyPremiereUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "У зеркала",
        sources: [
          {
            id: "irony-tv-premiere-1976-01-01-mirror",
            label: "«Ирония судьбы»: первый показ 01.01.1976",
            url: ironyPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "music-press-1976-mirror",
            label: "Архив музыкальной прессы: песня и Алла Пугачёва в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "irony-soundtrack-mirror",
            label: "Саундтрек фильма: «У зеркала» — Алла Пугачёва",
            url: ironyPremiereUrl,
            kind: "каталог саундтрека",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-02-15",
    dateLabel: "февраль 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Песняры»",
        title: "Наши любимые",
        sources: krugozorIssueSources(1976, 2, 143, "pesnyary-nashi-lyubimye", "https://krugozor-kolobok.ru/76/02/76-02-Spisok_zvyka.html", "Наши любимые"),
      },
    ],
  },
  {
    chartDate: "1976-03-15",
    dateLabel: "март 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 3: песни из телефильма «Ирония судьбы, или С лёгким паром!»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Мне нравится",
        sources: [
          {
            id: "krugozor-1976-03-i-like-catalog",
            label: "Каталог советских пластинок: «Мне нравится» в исполнении Аллы Пугачёвой · 1976.03",
            url: krugozorMarch1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-03-i-like-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1976 года",
            url: krugozorMarch1976ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1976-i-like-march",
            label: "Годовой слушательский архив: «Мне нравится» и Алла Пугачёва в списке популярных песен 1976 года",
            url: archive1976Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "У зеркала",
        sources: [
          {
            id: "krugozor-1976-03-at-the-mirror-catalog",
            label: "Каталог советских пластинок: «У зеркала» в исполнении Аллы Пугачёвой · 1976.03",
            url: krugozorMarch1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-03-at-the-mirror-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1976 года",
            url: krugozorMarch1976ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1976-at-the-mirror-march",
            label: "Годовой слушательский архив: «У зеркала» и Алла Пугачёва в списке популярных песен 1976 года",
            url: archive1976Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-04-12",
    dateLabel: "12.04.1976",
    archiveYear: 1976,
    programLabel: "«Между небом и землёй»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Валерий Ободзинский",
        title: "Небо моё",
        sources: [
          {
            id: "between-sky-earth-premiere-1976-04-12-sky",
            label: "«Между небом и землёй»: премьера 12.04.1976",
            url: betweenSkyEarthPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1976-my-sky",
            label: "Архив музыкальной прессы: песня и Валерий Ободзинский в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "between-sky-earth-song-my-sky",
            label: "Список музыки фильма: «Небо моё» — Валерий Ободзинский",
            url: betweenSkyEarthFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
      {
        artist: "ВИА «Ариэль»",
        title: "Уходишь ты",
        sources: [
          {
            id: "between-sky-earth-premiere-1976-04-12-leaving",
            label: "«Между небом и землёй»: премьера 12.04.1976",
            url: betweenSkyEarthPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1976-you-are-leaving",
            label: "Архив музыкальной прессы: песня и ВИА «Ариэль» в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "between-sky-earth-song-you-are-leaving",
            label: "Список музыки фильма: «Уходишь ты» — ВИА «Ариэль»",
            url: betweenSkyEarthFilmUrl,
            kind: "связь песни с фильмом",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-05-15",
    dateLabel: "май 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 5: оркестр Юрия Силантьева",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "День Победы",
        sources: [
          {
            id: "krugozor-1976-05-victory-day-catalog",
            label: "Каталог советских пластинок: «День Победы» в исполнении Льва Лещенко · 1976.05",
            url: krugozorMay1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-05-victory-day-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 5 за май 1976 года",
            url: krugozorMay1976ScanUrl,
            kind: "скан первоисточника",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-06-03",
    dateLabel: "03–07.06.1976",
    archiveYear: 1976,
    programLabel: "международный фестиваль «Золотой Орфей — 1976»",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Евгений Мартынов",
        title: "Алёнушка",
        sources: [
          {
            id: "golden-orpheus-festival-1976-06-03",
            label: "«Золотой Орфей — 1976»: фестиваль проходил 03–07.06.1976",
            url: goldenOrpheus1976DatesUrl,
            kind: "датированный фестиваль",
          },
          {
            id: "music-press-1976-alyonushka-golden-orpheus",
            label: "Архив музыкальной прессы: песня и Евгений Мартынов в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "golden-orpheus-1976-martynov-alyonushka",
            label: "Евгений Мартынов получил вторую премию «Золотого Орфея» за «Алёнушку»",
            url: goldenOrpheusUrl,
            kind: "фестивальная награда",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-07-15",
    dateLabel: "июль 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 7: песни о спорте",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Надежда»",
        title: "Герои спорта",
        sources: [
          {
            id: "krugozor-1976-07-sports-heroes-catalog",
            label: "Каталог советских пластинок: «Герои спорта» в исполнении ВИА «Надежда» · 1976.07",
            url: krugozorJuly1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-07-sports-heroes-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1976 года",
            url: krugozorJuly1976ScanUrl,
            kind: "скан первоисточника",
          },
        ],
      },
      {
        artist: "Эстрадно-симфонический оркестр ЦТ и ВР под управлением Юрия Силантьева",
        title: "Динамо-марш",
        sources: [
          {
            id: "krugozor-1976-07-dynamo-march-catalog",
            label: "Каталог советских пластинок: «Динамо-марш» оркестра Юрия Силантьева · 1976.07",
            url: krugozorJuly1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-07-dynamo-march-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1976 года",
            url: krugozorJuly1976ScanUrl,
            kind: "скан первоисточника",
          },
        ],
      },
      {
        artist: "Владимир Макаров",
        title: "Песня о риске",
        sources: [
          {
            id: "krugozor-1976-07-risk-song-catalog",
            label: "Каталог советских пластинок: «Песня о риске» в исполнении Владимира Макарова · 1976.07",
            url: krugozorJuly1976CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1976-07-risk-song-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1976 года",
            url: krugozorJuly1976ScanUrl,
            kind: "скан первоисточника",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-08-24",
    dateLabel: "24–29.08.1976",
    archiveYear: 1976,
    programLabel: "Международный фестиваль песни в Сопоте — 1976",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Ирина Понаровская",
        title: "Мольба",
        sources: [
          {
            id: "sopot-festival-1976-08-24",
            label: "Сопот-1976: фестиваль проходил 24–29.08.1976; Гран-при получила «Мольба»",
            url: sopotFestivalUrl,
            kind: "датированный фестиваль",
          },
          {
            id: "music-press-1976-molba-sopot",
            label: "Архив музыкальной прессы: песня и Ирина Понаровская в списке 1976 года",
            url: archive1976Url,
            kind: "годовой архив",
          },
          {
            id: "ponarovskaya-sopot-1976-molba",
            label: "Ирина Понаровская: Гран-при Сопота за «Мольбу» и девять выходов на бис",
            url: ponarovskayaUrl,
            kind: "свидетельство массового успеха",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1976-09-25",
    dateLabel: "25.09.1976",
    archiveYear: 1976,
    programLabel: "«Песня-76»: промежуточный выпуск",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "На Тихорецкую",
        sources: festivalSources(1976, "25.09.1976", "na-tikhoretskuyu"),
      },
      {
        artist: "Алла Пугачёва",
        title: "По улице моей",
        sources: festivalSources(1976, "25.09.1976", "po-ulitse-moey"),
      },
    ],
  },
  {
    chartDate: "1976-10-15",
    dateLabel: "октябрь 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 10: песни Микаэла Таривердиева",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Микаэл Таривердиев",
        title: "Сыну",
        sources: krugozorIssueSources(1976, 10, 151, "tariverdiev-synu", "https://www.krugozor-kolobok.ru/76/10/76-10-Spisok_zvyka.html", "Сыну"),
      },
    ],
  },
  {
    chartDate: "1976-11-15",
    dateLabel: "ноябрь 1976",
    archiveYear: 1976,
    programLabel: "«Кругозор» № 11: музыка из рок-оперы «Звезда и смерть Хоакина Мурьеты»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Геннадий Трофимов",
        title: "Песня Хоакина",
        sources: krugozorIssueSources(1976, 11, 152, "trofimov-pesnya-hoakina", "https://krugozor-kolobok.ru/76/11/76-11-Spisok_zvyka.html", "Музыка к спектаклю «Звезда и смерть Хоакина Мурьеты»"),
      },
    ],
  },
  {
    chartDate: "1976-12-18",
    dateLabel: "18.12.1976",
    archiveYear: 1976,
    programLabel: "«Песня-76»",
    candidates: [
      {
        artist: "ВИА «Песняры»",
        title: "Вологда",
        sources: festivalSources(1976, "18.12.1976", "vologda"),
      },
      {
        artist: "Юрий Богатиков",
        title: "Через две зимы",
        sources: festivalSources(1976, "18.12.1976", "cherez-dve-zimy"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Очень хорошо",
        sources: festivalSources(1976, "18.12.1976", "ochen-khorosho"),
      },
      {
        artist: "Евгений Мартынов",
        title: "Алёнушка",
        sources: festivalSources(1976, "18.12.1976", "alenushka"),
      },
    ],
  },
  {
    chartDate: "1977-01-15",
    dateLabel: "январь 1977",
    archiveYear: 1977,
    programLabel: "«Кругозор» № 1: песни из телефильма «По секрету всему свету»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Большой детский хор ЦТ и ВР (солист Дмитрий Викторов)",
        title: "По секрету всему свету",
        sources: [
          {
            id: "krugozor-1977-01-secret-catalog",
            label: "Каталог советских пластинок: «По секрету всему свету» в «Кругозоре» № 1 · 1977.01",
            url: krugozorJanuary1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1977-01-secret-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 1 за январь 1977 года",
            url: krugozorJanuary1977ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1977-secret",
            label: "Годовой слушательский архив: «По секрету всему свету» в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1977-04-15",
    dateLabel: "апрель 1977",
    archiveYear: 1977,
    programLabel: "«Кругозор» № 4: русскоязычные песни месяца",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "Соловьиная роща",
        sources: [
          {
            id: "krugozor-1977-04-nightingale-grove-catalog",
            label: "Каталог советских пластинок: Лев Лещенко исполняет «Соловьиную рощу» · 1977.04",
            url: krugozorApril1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1977-04-nightingale-grove-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 4 за апрель 1977 года",
            url: krugozorApril1977ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1977-nightingale-grove",
            label: "Годовой слушательский архив: «Соловьиная роща» и Лев Лещенко в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "ВИА «Песняры»",
        title: "Вероника",
        sources: [
          {
            id: "krugozor-1977-04-veronica-catalog",
            label: "Каталог советских пластинок: «Вероника» в исполнении ВИА «Песняры» · 1977.04",
            url: krugozorApril1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1977-04-veronica-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 4 за апрель 1977 года",
            url: krugozorApril1977ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1977-veronica",
            label: "Годовой слушательский архив: «Вероника» и ВИА «Песняры» в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "song-1977-veronica",
            label: "«Песня-77»: «Вероника» вошла в число финалистов фестиваля",
            url: song1977Url,
            kind: "телевизионный фестиваль",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1977-05-15",
    dateLabel: "май—июнь 1977",
    archiveYear: 1977,
    programLabel: "миньон Анны Герман «Когда цвели сады»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Анна Герман",
        title: "Когда цвели сады",
        sources: [
          {
            id: "anna-german-1977-05-06-gardens-catalog",
            label: "Каталог советских пластинок: миньон Анны Герман с «Когда цвели сады» · 1977.05/06",
            url: annaGermanMayJune1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1977-gardens",
            label: "Годовой слушательский архив: «Когда цвели сады» и Анна Герман в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "song-1977-gardens",
            label: "«Песня-77»: «Когда цвели сады» исполнили на бис после продолжительной овации",
            url: song1977Url,
            kind: "свидетельство массового успеха",
          },
        ],
      },
    ],
  },
  {
    // Technical midpoint only: the issue establishes June, not 15 June.
    chartDate: "1977-06-15",
    dateLabel: "июнь 1977",
    archiveYear: 1977,
    programLabel: "«Кругозор» № 6 (159): песни из «Розыгрыша» по просьбам читателей",
    anchorKind: "месячный релиз",
    candidates: [{
      artist: "Вячеслав Киселёв и вокальная группа «Добры молодцы»",
      title: "Прощальный вальс",
      sources: [
        {
          id: "krugozor-1977-06-rozygrysh-scan",
          label: "Оригинал «Кругозора» № 6 (159), июнь 1977: песни из «Розыгрыша», звуковая страница 11; публикация по просьбам читателей (печатная стр. 10).",
          url: "https://nzdr.ru/data/media/biblio/j/krugozor/1977/Кругозор%201977-06%20(159)%20июнь.pdf",
          kind: "скан первоисточника",
        },
        {
          id: "krugozor-1977-06-farewell-waltz-catalog",
          label: "Дискография Олега Песенникова: Г62-06179-80, «Кругозор» № 6 (11), 1977 — «Прощальный вальс»; Вячеслав Киселёв, вокальная группа «Добры молодцы».",
          url: "https://www.sssrviapesni.info/dobmoldisk.html",
          kind: "датированный каталог",
        },
        {
          id: "krugozor-1977-06-rozygrysh-readers",
          label: "Марина Наталич, «Кругозор», июнь 1977, стр. 10: читатели из Нальчика напевали песни фильма; учителя и родители из Томска просили их опубликовать. Отклик на песни фильма в целом; даты писем, рейтинг отдельной песни и пик популярности не указаны.",
          url: "https://nzdr.ru/data/media/biblio/j/krugozor/1977/Кругозор%201977-06%20(159)%20июнь.pdf#page=12",
          kind: "культурный след",
        },
      ],
    }],
  },
  {
    chartDate: "1977-06-15",
    dateLabel: "июнь 1977",
    archiveYear: 1977,
    programLabel: "«Кругозор» № 6: финалистка телеконкурса Роза Рымбаева",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Роза Рымбаева",
        title: "Алия",
        sources: [
          {
            id: "krugozor-1977-06-aliya-catalog",
            label: "Каталог советских пластинок: Роза Рымбаева исполняет «Алию» · 1977.06",
            url: krugozorJune1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1977-06-aliya-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1977 года",
            url: krugozorJune1977ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1977-aliya-june",
            label: "Годовой слушательский архив: «Алия» и Роза Рымбаева в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "tv-contest-1977-aliya-june",
            label: "Каталог телеконкурса «С песней по жизни»: «Алия» на релизе 1977.06/07; победителей выбрали телезрители",
            url: tvContestJuneJuly1977CatalogUrl,
            kind: "массовое голосование",
          },
        ],
      },
    ],
  },
  {
    // July is corroborated by the tour chronology. The midpoint is not a concert day.
    chartDate: "1977-07-15",
    dateLabel: "июль 1977",
    archiveYear: 1977,
    programLabel: "таллинские выступления Аллы Пугачёвой: отклик на конкретные песни",
    anchorKind: "месячный концерт",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Арлекино",
        sources: [
          {
            id: "soviet-estonia-1977-07-13-arlekino",
            label: "Б. Славина, «Зеркало души», «Советская Эстония», 13.07.1977: публика узнавала «Арлекино» до объявления и встречала аплодисментами. Сверено со сканом газетной вырезки; дата 13.07.1977 указана в описании архива, шапка с датой в вырезку не попала.",
            url: "https://pugacheva-disc.ru/displayimage.php?album=178&pos=42",
            kind: "культурный след",
          },
          {
            id: "tallinn-1977-july-tour-arlekino",
            label: "Хронология гастролей: Таллин, 9–10 июля 1977; в программе «Арлекино». Вторичный архив поклонников, точный день исполнения отдельно не подтверждён.",
            url: "https://forumpugacheva.ru/viewtopic.php?id=4662",
            kind: "вторичная хронология концертов",
          },
          {
            id: "err-1977-tallinn-arlekino",
            label: "Владимир Калакаускас, ERR: таллинские концерты 1977 и статья Б. Славиной «Зеркало души». Подтверждает исторический контекст, не песенный рейтинг.",
            url: "https://rus.err.ee/131058/kalakauskas-poroj-mne-kazhetsja-chto-pugacheva-byla-vsegda",
            kind: "ретроспективный архив прессы",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Приезжай",
        sources: [
          {
            id: "soviet-estonia-1977-07-13-priezzhay",
            label: "Б. Славина, «Зеркало души», «Советская Эстония», 13.07.1977: премьера «Приезжай» встречена бурными аплодисментами. Сверено со сканом газетной вырезки; дата 13.07.1977 указана в описании архива, шапка с датой в вырезку не попала.",
            url: "https://pugacheva-disc.ru/displayimage.php?album=178&pos=42",
            kind: "культурный след",
          },
          {
            id: "tallinn-1977-july-tour-priezzhay",
            label: "Хронология гастролей: Таллин, 9–10 июля 1977; в программе премьера «Приезжай». Вторичный архив поклонников, точный день исполнения отдельно не подтверждён.",
            url: "https://forumpugacheva.ru/viewtopic.php?id=4662",
            kind: "вторичная хронология концертов",
          },
          {
            id: "err-1977-tallinn-priezzhay",
            label: "Владимир Калакаускас, ERR: таллинские концерты 1977 и статья Б. Славиной «Зеркало души». Подтверждает исторический контекст, не песенный рейтинг.",
            url: "https://rus.err.ee/131058/kalakauskas-poroj-mne-kazhetsja-chto-pugacheva-byla-vsegda",
            kind: "ретроспективный архив прессы",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1977-07-15",
    dateLabel: "июнь—июль 1977",
    archiveYear: 1977,
    programLabel: "телеконкурс «С песней по жизни»: релиз песен-победителей",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Роза Рымбаева",
        title: "Алия",
        sources: [
          {
            id: "tv-contest-1977-06-07-aliya-catalog",
            label: "Каталог советских пластинок: «Алия» на релизе телеконкурса «С песней по жизни» · 1977.06/07",
            url: tvContestJuneJuly1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1977-aliya-july",
            label: "Годовой слушательский архив: «Алия» и Роза Рымбаева в списке популярных песен 1977 года",
            url: archive1977Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "song-1977-aliya-popularity",
            label: "«Песня-77»: Роза Рымбаева с «Алией» названа третьей по популярности после Пугачёвой и Ротару",
            url: song1977Url,
            kind: "свидетельство массового успеха",
          },
          {
            id: "krugozor-1977-06-aliya-july-check",
            label: "Дополнительная проверка: «Алия» опубликована в «Кругозоре» № 6 · 1977.06",
            url: krugozorJune1977CatalogUrl,
            kind: "датированный каталог",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1977-08-15",
    dateLabel: "август—сентябрь 1977",
    archiveYear: 1977,
    programLabel: "миньон ВИА «Самоцветы» «Всё, что есть у меня»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Самоцветы»",
        title: "Всё, что есть у меня",
        sources: [
          {
            id: "samotsvety-1977-08-09-everything-catalog",
            label: "Каталог советских пластинок: миньон «Самоцветов» с «Всё, что есть у меня» · 1977.08/09",
            url: samotsvetyAugustSeptember1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "samotsvety-1977-everything-hit-august",
            label: "История песни: пластинка вышла в августе 1977 года, а песня стала главным хитом и визитной карточкой «Самоцветов»",
            url: samotsvetyEverythingHitUrl,
            kind: "история массового хита",
          },
          {
            id: "mk-chart-1977-everything-august",
            label: "Читательский хит-парад за декабрь 1977: «Всё, что есть у меня» заняла первое место",
            url: song1977Url,
            kind: "читательский чарт",
            rank: 1,
          },
        ],
      },
    ],
  },
  {
    chartDate: "1977-09-15",
    dateLabel: "август—сентябрь 1977",
    archiveYear: 1977,
    programLabel: "миньон ВИА «Самоцветы» «Всё, что есть у меня»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Самоцветы»",
        title: "Всё, что есть у меня",
        sources: [
          {
            id: "samotsvety-1977-08-09-everything-catalog-september",
            label: "Каталог советских пластинок: миньон «Самоцветов» с «Всё, что есть у меня» · 1977.08/09",
            url: samotsvetyAugustSeptember1977CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "samotsvety-1977-everything-hit-september",
            label: "История песни: пластинка вышла в августе 1977 года, а песня стала главным хитом и визитной карточкой «Самоцветов»",
            url: samotsvetyEverythingHitUrl,
            kind: "история массового хита",
          },
          {
            id: "mk-chart-1977-everything-september",
            label: "Читательский хит-парад за декабрь 1977: «Всё, что есть у меня» заняла первое место",
            url: song1977Url,
            kind: "читательский чарт",
            rank: 1,
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-01-01",
    dateLabel: "01.01.1979",
    archiveYear: 1978,
    programLabel: "финальный концерт «Песня-78»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Песенка первоклассника",
        sources: [
          {
            ...festivalSources(1978, "01.01.1979", "pesenka-pervoklassnika")[0],
          },
          {
            id: "music-press-1978-pesenka-pervoklassnika",
            label: "Годовой слушательский архив: песня указана в списке 1978 года под вариантом названия «Песня первоклассника»",
            url: archive1978Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Ренат Ибрагимов",
        title: "Наш город",
        sources: festivalSources(1978, "01.01.1979", "nash-gorod"),
      },
    ],
  },
  {
    chartDate: "1979-02-15",
    dateLabel: "февраль 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ансамбль «Русская песня»",
        title: "Сохнет, сохнет во поле травушка",
        sources: krugozorIssueSources(1979, 2, 179, "sokhnet-travushka", "https://tunnel.ru/post-1979-02", "Сохнет, сохнет во поле травушка"),
      },
    ],
  },
  {
    chartDate: "1979-03-02",
    dateLabel: "02.03.1979",
    archiveYear: 1979,
    programLabel: "«Женщина, которая поёт»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Песенка про меня",
        sources: [
          {
            id: "woman-who-sings-premiere-1979-03-02-pesenka-pro-menya",
            label: "«Женщина, которая поёт»: всесоюзная премьера 02.03.1979",
            url: womanWhoSingsPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "woman-who-sings-soundtrack-pesenka-pro-menya",
            label: "Каталог саундтрека: «Песенка про меня» названа безусловным хитом конца 1970-х",
            url: womanWhoSingsSoundtrackUrl,
            kind: "история массового хита",
          },
          {
            id: "music-press-1978-pesenka-pro-menya-film-check",
            label: "Годовой слушательский архив: «Песенка про меня» в списке популярных песен 1978 года",
            url: archive1978Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Этот мир",
        sources: [
          {
            id: "woman-who-sings-premiere-1979-03-02-etot-mir",
            label: "«Женщина, которая поёт»: всесоюзная премьера 02.03.1979",
            url: womanWhoSingsPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "woman-who-sings-soundtrack-etot-mir",
            label: "Каталог саундтрека: «Этот мир» назван безусловным хитом конца 1970-х",
            url: womanWhoSingsSoundtrackUrl,
            kind: "история массового хита",
          },
          {
            id: "music-press-1978-etot-mir-film-check",
            label: "Годовой слушательский архив: «Этот мир» в списке популярных песен 1978 года",
            url: archive1978Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-04-15",
    dateLabel: "апрель 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 4",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "София Ротару",
        title: "Верни мне музыку",
        sources: krugozorIssueSources(1979, 4, 181, "verni-mne-muzyku", "https://tunnel.ru/post-1979-04", "Верни мне музыку"),
      },
    ],
  },
  {
    chartDate: "1979-06-15",
    dateLabel: "июнь 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Михаил Боярский и Ольга Зарубина",
        title: "Так не должно быть",
        sources: [
          ...krugozorIssueSources(1979, 6, 183, "tak-ne-dolzhno-byt", "https://tunnel.ru/post-1979-06", "Так не должно быть"),
          {
            id: "music-press-1979-tak-ne-dolzhno-byt-june",
            label: "Годовой слушательский архив: «Так не должно быть» в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-07-15",
    dateLabel: "июль 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 7",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Людмила Сенчина и Ренат Ибрагимов",
        title: "Старт даёт Москва",
        sources: krugozorIssueSources(1979, 7, 184, "start-daet-moskva", "https://tunnel.ru/post-1979-07", "Старт даёт Москва"),
      },
    ],
  },
  {
    chartDate: "1979-08-15",
    dateLabel: "август 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 8",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "Начало",
        sources: krugozorIssueSources(1979, 8, 185, "nachalo", "https://tunnel.ru/post-1979-08", "Начало"),
      },
    ],
  },
  {
    chartDate: "1979-09-02",
    dateLabel: "02.09.1979",
    archiveYear: 1979,
    programLabel: "телетрансляция конкурса «Интервидение-79»",
    candidates: [
      {
        artist: "Яак Йоала",
        title: "Подберу музыку",
        sources: [
          {
            id: "sopot-1979-tv-1979-09-02-podberu-muzyku",
            label: "Программа советского телевидения: трансляция конкурса из Сопота 02.09.1979",
            url: sopot1979TvScheduleUrl,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "sopot-1979-result-podberu-muzyku",
            label: "«Интервидение-79»: Яак Йоала занял третье место с песней «Подберу музыку»",
            url: sopot1979Url,
            kind: "результат международного конкурса",
            rank: 3,
          },
          {
            id: "music-press-1979-podberu-muzyku-sopot",
            label: "Годовой слушательский архив: «Подберу музыку» в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-10-15",
    dateLabel: "октябрь 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 10: Яак Йоала",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Яак Йоала",
        title: "Подберу музыку",
        sources: [
          {
            id: "krugozor-1979-10-podberu-muzyku-catalog",
            label: "Каталог советских пластинок: «Подберу музыку» в «Кругозоре» № 10 · 1979.10",
            url: krugozorOctober1979CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1979-10-podberu-muzyku-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 10 за октябрь 1979 года",
            url: krugozorOctober1979ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1979-podberu-muzyku-october",
            label: "Годовой слушательский архив: «Подберу музыку» в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "sopot-1979-podberu-muzyku-october-check",
            label: "Дополнительная проверка массового успеха: третье место «Интервидения-79»",
            url: sopot1979Url,
            kind: "результат международного конкурса",
            rank: 3,
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-11-15",
    dateLabel: "ноябрь 1979",
    archiveYear: 1979,
    programLabel: "«Звуковая дорожка» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Машина времени",
        title: "Поворот",
        sources: [
          {
            id: "sound-track-1979-11-povorot-entry",
            label: "История песни: «Поворот» вошёл в хит-парад «Звуковая дорожка» в ноябре 1979 года",
            url: povorotHistoryUrl,
            kind: "месячный читательский чарт",
          },
          {
            id: "music-press-1979-povorot-november",
            label: "Годовой слушательский архив: «Поворот» в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1979-12-15",
    dateLabel: "декабрь 1979",
    archiveYear: 1979,
    programLabel: "«Кругозор» № 12",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Звёздное лето",
        sources: [
          ...krugozorIssueSources(1979, 12, 189, "zvezdnoe-leto", "https://tunnel.ru/post-1979-12", "Звёздное лето"),
          {
            id: "music-press-1979-zvezdnoe-leto-december",
            label: "Годовой слушательский архив: «Звёздное лето» в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-01-01",
    dateLabel: "01.01.1980",
    archiveYear: 1979,
    programLabel: "«Песня-79»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Эти летние дожди",
        sources: festivalSources(1979, "01.01.1980", "eti-letnie-dozhdi"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Звёздное лето",
        sources: festivalSources(1979, "01.01.1980", "zvezdnoe-leto"),
      },
      {
        artist: "Валентин Дьяконов",
        title: "Красный конь",
        sources: festivalSources(1979, "01.01.1980", "krasnyy-kon"),
      },
      {
        artist: "Яак Йоала",
        title: "Подберу музыку",
        sources: festivalSources(1979, "01.01.1980", "podberu-muzyku"),
      },
    ],
  },
  {
    chartDate: "1980-02-11",
    dateLabel: "11.02.1980",
    archiveYear: 1980,
    programLabel: "«Москва слезам не верит»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Татьяна и Сергей Никитины",
        title: "Александра",
        sources: [
          {
            id: "moscow-tears-premiere-1980-02-11-alexandra",
            label: "«Москва слезам не верит»: выход в прокат СССР 11.02.1980",
            url: moscowTearsPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "moscow-tears-alexandra-superhit",
            label: "История фильма: «Александра» названа суперхитом, а картина стала лидером советского проката",
            url: moscowTearsSongPopularityUrl,
            kind: "история массового хита",
          },
          {
            id: "music-press-1980-alexandra",
            label: "Годовой слушательский архив: «Александра» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Валентина Толкунова и Леонид Серебренников",
        title: "Диалог у новогодней ёлки",
        sources: [
          {
            id: "moscow-tears-premiere-1980-02-11-dialog",
            label: "«Москва слезам не верит»: выход в прокат СССР 11.02.1980",
            url: moscowTearsPremiereUrl,
            kind: "датированная кинопремьера",
          },
          {
            id: "music-press-1980-dialog-new-year-tree",
            label: "Годовой слушательский архив: «Диалог у новогодней ёлки» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-03-15",
    dateLabel: "март 1980",
    archiveYear: 1980,
    programLabel: "«Звуковая дорожка» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Машина времени",
        title: "Поворот",
        sources: [
          {
            id: "sound-track-1980-03-povorot-presence",
            label: "История песни: «Поворот» находился в хит-параде «Звуковая дорожка» непрерывно с ноября 1979 по ноябрь 1980 года",
            url: povorotHistoryUrl,
            kind: "помесячный читательский чарт",
          },
          {
            id: "ria-machine-time-povorot-march",
            label: "РИА Новости: после «Тбилиси-80» всесоюзную популярность группы закрепили «Поворот», «Свеча» и «Три окна»",
            url: machineTimeHistoryRiaUrl,
            kind: "независимая история массового успеха",
          },
          {
            id: "music-press-1979-povorot-march-check",
            label: "Годовой слушательский архив: «Поворот» уже находился в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-05-02",
    dateLabel: "02.05.1980",
    archiveYear: 1980,
    programLabel: "«Приключения Электроника»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Елена Камбурова",
        title: "Мы — маленькие дети",
        sources: [
          {
            id: "electronica-tv-premiere-1980-05-02-little-children",
            label: "«Приключения Электроника»: телевизионная премьера 02.05.1980; фильм стал культовым у советских детей",
            url: electronicaPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "electronica-songs-catalog-little-children",
            label: "Каталог советских пластинок: «Мы — маленькие дети» на релизе песен из телефильма",
            url: electronicaSongsCatalogUrl,
            kind: "каталог саундтрека",
          },
          {
            id: "music-press-1980-little-children",
            label: "Годовой слушательский архив: «Мы маленькие дети» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Елена Шуенкова и детский хор Большого театра",
        title: "Крылатые качели",
        sources: [
          {
            id: "electronica-tv-premiere-1980-05-02-winged-swings",
            label: "«Приключения Электроника»: телевизионная премьера 02.05.1980; музыкальный телефильм стал культовым",
            url: electronicaPremiereUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "electronica-songs-catalog-winged-swings",
            label: "Каталог советских пластинок: «Крылатые качели» на релизе песен из телефильма",
            url: electronicaSongsCatalogUrl,
            kind: "каталог саундтрека",
          },
          {
            id: "krugozor-1980-08-winged-swings",
            label: "«Кругозор» № 8 за август 1980 года: «Крылатые качели» в подборке песен Евгения Крылатова",
            url: krugozorAugust1980CatalogUrl,
            kind: "датированная повторная публикация",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-06-15",
    dateLabel: "июнь 1980",
    archiveYear: 1980,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Жанна Рождественская и группа «Фестиваль»",
        title: "Гадалка",
        sources: [
          {
            id: "krugozor-1980-06-gadalka-catalog",
            label: "Каталог советских пластинок: «Гадалка» в «Кругозоре» № 6 · 1980.06",
            url: krugozorJune1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1980-06-gadalka-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1980 года",
            url: krugozorJune1980ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1980-gadalka",
            label: "Годовой слушательский архив: «Гадалка» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Валерий Леонтьев",
        title: "Кружатся диски",
        sources: [
          {
            id: "krugozor-1980-06-spinning-discs-catalog",
            label: "Каталог советских пластинок: «Кружатся диски» в «Кругозоре» № 6 · 1980.06",
            url: krugozorJune1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1980-06-spinning-discs-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1980 года",
            url: krugozorJune1980ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1980-spinning-discs",
            label: "Годовой слушательский архив: «Кружатся диски» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-07-15",
    dateLabel: "июль—август 1980",
    archiveYear: 1980,
    programLabel: "летние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Верасы»",
        title: "Малиновка",
        sources: [
          {
            id: "verasy-1980-07-08-malinovka-catalog-july",
            label: "Каталог советских пластинок: «Малиновки заслыша голосок» на миньоне ВИА «Верасы» · 1980.07/08",
            url: verasyJulyAugust1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-malinovka-july",
            label: "Годовой слушательский архив: «Малиновка» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "song-1980-malinovka-july",
            label: "«Песня-80»: «Малиновка» вошла в телевизионный финал песен года",
            url: song1980Url,
            kind: "телевизионный фестиваль",
          },
        ],
      },
      {
        artist: "Елена Камбурова",
        title: "Мы — маленькие дети",
        sources: [
          {
            id: "electronica-songs-release-1980-07-08-little-children",
            label: "Каталог советских пластинок: «Мы — маленькие дети» на миньоне песен из телефильма · 1980.07/08",
            url: electronicaSongsCatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-little-children-july",
            label: "Годовой слушательский архив: «Мы маленькие дети» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
          {
            id: "electronica-tv-premiere-little-children-july-check",
            label: "Дополнительная проверка: песня прозвучала в культовом телефильме, вышедшем в эфир 02.05.1980",
            url: electronicaPremiereUrl,
            kind: "датированная телепремьера",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-08-03",
    dateLabel: "03.08.1980",
    archiveYear: 1980,
    programLabel: "церемония закрытия Олимпиады-80",
    candidates: [
      {
        artist: "Лев Лещенко и Татьяна Анциферова",
        title: "До свидания, Москва",
        sources: [
          {
            id: "olympics-closing-1980-08-03-goodbye-moscow",
            label: "Гостелерадиофонд: «До свидания, Москва» в церемонии закрытия Олимпиады 03.08.1980",
            url: olympicsClosing1980Url,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "olympics-closing-history-goodbye-moscow",
            label: "История церемонии: Олимпийский Мишка улетел под «До свидания, Москва»",
            url: olympicsClosingHistoryUrl,
            kind: "история массового события",
          },
          {
            id: "music-press-1980-goodbye-moscow",
            label: "Годовой слушательский архив: «До свидания, Москва!» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-08-15",
    dateLabel: "август 1980",
    archiveYear: 1980,
    programLabel: "«Кругозор» № 8",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Вахтанг Кикабидзе",
        title: "Мои года",
        sources: [
          {
            id: "krugozor-1980-08-my-years-catalog",
            label: "Каталог советских пластинок: «Мои года» в «Кругозоре» № 8 под кратким названием «Годы» · 1980.08",
            url: krugozorAugust1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1980-08-my-years-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 8 за август 1980 года",
            url: krugozorAugust1980ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1980-my-years-august",
            label: "Годовой слушательский архив: «Мои года» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Елена Камбурова",
        title: "Мы — маленькие дети",
        sources: [
          {
            id: "krugozor-1980-08-little-children-catalog",
            label: "Каталог советских пластинок: «Мы — маленькие дети» в «Кругозоре» № 8 · 1980.08",
            url: krugozorAugust1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1980-08-little-children-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 8 за август 1980 года",
            url: krugozorAugust1980ScanUrl,
            kind: "скан первоисточника",
          },
          {
            id: "music-press-1980-little-children-august",
            label: "Годовой слушательский архив: «Мы маленькие дети» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-09-15",
    dateLabel: "август—сентябрь 1980",
    archiveYear: 1980,
    programLabel: "миньон ВИА «Здравствуй, песня»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА «Здравствуй, песня»",
        title: "Вокруг любви",
        sources: [
          {
            id: "hello-song-1980-08-09-around-love-catalog",
            label: "Каталог советских пластинок: «Вокруг любви» на миньоне ВИА «Здравствуй, песня» · 1980.08/09",
            url: helloSongAugustSeptember1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-around-love-september",
            label: "Годовой слушательский архив: «Вокруг любви» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "ВИА «Здравствуй, песня»",
        title: "Не оставляй меня одну",
        sources: [
          {
            id: "hello-song-1980-08-09-do-not-leave-me-catalog",
            label: "Каталог советских пластинок: «Не оставляй меня одну» на миньоне · 1980.08/09",
            url: helloSongAugustSeptember1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-do-not-leave-me-september",
            label: "Годовой слушательский архив: «Не оставляй меня одну» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-10-15",
    dateLabel: "сентябрь—октябрь 1980",
    archiveYear: 1980,
    programLabel: "осенние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Вахтанг Кикабидзе",
        title: "Вот и весь разговор",
        sources: [
          {
            id: "kikabidze-1980-09-10-whole-conversation-catalog",
            label: "Каталог советских пластинок: «Вот и весь разговор» на миньоне Вахтанга Кикабидзе · 1980.09/10",
            url: kikabidzeSeptemberOctober1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-whole-conversation-october",
            label: "Годовой слушательский архив: «Вот и весь разговор» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
      {
        artist: "Феликс Красиловский",
        title: "Колесо судьбы",
        sources: [
          {
            id: "krasilovsky-1980-09-10-wheel-of-fate-catalog",
            label: "Каталог советских пластинок: «Колесо судьбы» на миньоне Феликса Красиловского · 1980.09/10",
            url: krasilovskySeptemberOctober1980CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "music-press-1980-wheel-of-fate-october",
            label: "Годовой слушательский архив: «Колесо судьбы» в списке популярных песен 1980 года",
            url: archive1980Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1980-11-15",
    dateLabel: "ноябрь 1980",
    archiveYear: 1980,
    programLabel: "«Звуковая дорожка» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Машина времени",
        title: "Поворот",
        sources: [
          {
            id: "sound-track-1980-11-povorot-presence",
            label: "История песни: ноябрь 1980 был тринадцатым подряд месяцем «Поворота» в хит-параде «Звуковая дорожка»",
            url: povorotHistoryUrl,
            kind: "помесячный читательский чарт",
          },
          {
            id: "ria-machine-time-povorot-november",
            label: "РИА Новости: «Поворот» вошёл в число песен, принесших «Машине времени» всесоюзную популярность",
            url: machineTimeHistoryRiaUrl,
            kind: "независимая история массового успеха",
          },
          {
            id: "music-press-1979-povorot-november-check",
            label: "Годовой слушательский архив: «Поворот» уже находился в списке популярных песен 1979 года",
            url: archive1979Url,
            kind: "годовой слушательский архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1981-01-01",
    dateLabel: "01.01.1981",
    archiveYear: 1980,
    programLabel: "«Песня-80»",
    candidates: [
      {
        artist: "София Ротару",
        title: "Ожидание",
        sources: festivalSources(1980, "01.01.1981", "ozhidanie"),
      },
      {
        artist: "ВИА «Верасы»",
        title: "Малиновка",
        sources: festivalSources(1980, "01.01.1981", "malinovka"),
      },
      {
        artist: "Николай Гнатюк",
        title: "Танец на барабане",
        sources: festivalSources(1980, "01.01.1981", "tanets-na-barabane"),
      },
      {
        artist: "Вахтанг Кикабидзе",
        title: "Мои года",
        sources: festivalSources(1980, "01.01.1981", "moi-goda"),
      },
    ],
  },
  {
    chartDate: "1981-02-15",
    dateLabel: "февраль—март 1981",
    archiveYear: 1981,
    programLabel: "миньон «Танец на барабане»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Николай Гнатюк",
        title: "Танец на барабане",
        sources: [
          {
            id: "drum-dance-release-1981-02-03-catalog",
            label: "Каталог советских пластинок: «Танец на барабане» на миньоне · 1981.02/03",
            url: drumDanceFebruaryMarch1981CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "song-1980-drum-dance-february-check",
            label: "«Песня-80»: «Танец на барабане» вошёл в телевизионный финал 01.01.1981",
            url: song1980Url,
            kind: "телевизионный фестиваль",
          },
          song1981Source(
            "drum-dance-retrospective",
            "«Песня-81»: песня снова прозвучала в сюите главных хитов предыдущего финала",
            "телевизионная ретроспектива хитов",
          ),
        ],
      },
    ],
  },
  {
    chartDate: "1981-03-23",
    dateLabel: "23.03.1981",
    archiveYear: 1981,
    programLabel: "«Вам и не снилось…»",
    anchorKind: "кинопремьера",
    candidates: [
      {
        artist: "Ирина Отиева, Вера Соколова и ансамбль «33 1/3»",
        title: "Последняя поэма",
        sources: [
          {
            id: "you-never-dreamed-premiere-1981-03-23-last-poem",
            label: "Портал «Культура.РФ»: премьера фильма 23.03.1981; более 26 млн зрителей",
            url: youNeverDreamedPremiere1981Url,
            kind: "датированная кинопремьера",
          },
          {
            id: "last-poem-mass-hit-history-1981",
            label: "«Радио Дача»: после выхода фильма песня быстро стала символом юношеской романтики",
            url: lastPoemHistory1981Url,
            kind: "история массового хита",
          },
          song1981Source(
            "last-poem-reader-chart",
            "«Звуковая дорожка» МК: «Последняя поэма» — № 3 среди лучших песен 1981 года",
          ),
          annual1981Source("last-poem", "Последняя поэма"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-04-15",
    dateLabel: "апрель—май 1981",
    archiveYear: 1981,
    programLabel: "весенние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Маэстро",
        sources: [
          {
            id: "maestro-release-1981-04-05-catalog-april",
            label: "Каталог советских пластинок: миньон Аллы Пугачёвой «Маэстро» · 1981.04/05",
            url: maestroAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "maestro-reader-chart-april",
            "«Звуковая дорожка» МК: «Маэстро» — песня № 1 по итогам 1981 года",
          ),
          annual1981Source("maestro-april", "Маэстро"),
        ],
      },
      {
        artist: "Тынис Мяги",
        title: "Я не умею танцевать",
        sources: [
          {
            id: "reznikov-release-1981-04-05-cannot-dance-april",
            label: "Каталог советских пластинок: «Я не умею танцевать» на миньоне песен Виктора Резникова · 1981.04/05",
            url: reznikovAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("cannot-dance-april", "Я не умею танцевать"),
        ],
      },
      {
        artist: "Яак Йоала",
        title: "Не беда",
        sources: [
          {
            id: "reznikov-release-1981-04-05-no-trouble-april",
            label: "Каталог советских пластинок: «Не беда» на миньоне песен Виктора Резникова · 1981.04/05",
            url: reznikovAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("no-trouble-april", "Не беда"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-05-15",
    dateLabel: "апрель—май 1981",
    archiveYear: 1981,
    programLabel: "весенние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Маэстро",
        sources: [
          {
            id: "maestro-release-1981-04-05-catalog-may",
            label: "Каталог советских пластинок: миньон Аллы Пугачёвой «Маэстро» · 1981.04/05",
            url: maestroAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "maestro-reader-chart-may",
            "«Звуковая дорожка» МК: «Маэстро» — песня № 1 по итогам 1981 года",
          ),
          annual1981Source("maestro-may", "Маэстро"),
        ],
      },
      {
        artist: "Тынис Мяги",
        title: "Я не умею танцевать",
        sources: [
          {
            id: "reznikov-release-1981-04-05-cannot-dance-may",
            label: "Каталог советских пластинок: «Я не умею танцевать» на миньоне песен Виктора Резникова · 1981.04/05",
            url: reznikovAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("cannot-dance-may", "Я не умею танцевать"),
        ],
      },
      {
        artist: "Яак Йоала",
        title: "Не беда",
        sources: [
          {
            id: "reznikov-release-1981-04-05-no-trouble-may",
            label: "Каталог советских пластинок: «Не беда» на миньоне песен Виктора Резникова · 1981.04/05",
            url: reznikovAprilMay1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("no-trouble-may", "Не беда"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-06-15",
    dateLabel: "июнь 1981",
    archiveYear: 1981,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Маэстро",
        sources: [
          {
            id: "krugozor-1981-06-maestro-catalog",
            label: "Каталог советских пластинок: «Маэстро» в «Кругозоре» № 6 · 1981.06",
            url: krugozorJune1981CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1981-06-maestro-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 6 за июнь 1981 года",
            url: krugozorJune1981ScanUrl,
            kind: "скан первоисточника",
          },
          song1981Source(
            "maestro-reader-chart-june",
            "«Звуковая дорожка» МК: «Маэстро» — песня № 1 по итогам 1981 года",
          ),
          annual1981Source("maestro-june", "Маэстро"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-07-15",
    dateLabel: "июль 1981",
    archiveYear: 1981,
    programLabel: "«Кругозор» № 7 и летние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Отиева, Вера Соколова и ансамбль «33 1/3»",
        title: "Последняя поэма",
        sources: [
          {
            id: "krugozor-1981-07-last-poem-catalog",
            label: "Каталог советских пластинок: «Последняя поэма» в «Кругозоре» № 7 · 1981.07",
            url: krugozorJuly1981CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1981-07-last-poem-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 7 за июль 1981 года",
            url: krugozorJuly1981ScanUrl,
            kind: "скан первоисточника",
          },
          song1981Source(
            "last-poem-reader-chart-july",
            "«Звуковая дорожка» МК: «Последняя поэма» — № 3 среди лучших песен 1981 года",
          ),
          annual1981Source("last-poem-july", "Последняя поэма"),
        ],
      },
      {
        artist: "ВИА «Пламя»",
        title: "Снег кружится",
        sources: [
          {
            id: "flame-release-1981-07-08-snow-july",
            label: "Каталог советских пластинок: «Снег кружится» на миньоне ВИА «Пламя» · 1981.07/08",
            url: flameJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "snow-spins-hit-july",
            "«Песня-81»: «Снег кружится» отдельно отмечена среди больших хитов года",
            "телевизионная история хита",
          ),
          annual1981Source("snow-spins-july", "Снег кружится"),
        ],
      },
      {
        artist: "ВИА «Пламя»",
        title: "Под музыку Вивальди",
        sources: [
          {
            id: "flame-release-1981-07-08-vivaldi-july",
            label: "Каталог советских пластинок: «Под музыку Вивальди» на миньоне ВИА «Пламя» · 1981.07/08",
            url: flameJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("vivaldi-july", "Под музыку Вивальди"),
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Дежурный ангел",
        sources: [
          {
            id: "pugacheva-release-1981-07-08-duty-angel-july",
            label: "Каталог советских пластинок: «Дежурный ангел» на отдельном миньоне · 1981.07/08",
            url: pugachevaJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "duty-angel-reader-chart-july",
            "«Звуковая дорожка» МК: «Дежурный ангел» — № 18 среди лучших песен 1981 года",
          ),
          annual1981Source("duty-angel-july", "Дежурный ангел"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-08-15",
    dateLabel: "июль—август 1981",
    archiveYear: 1981,
    programLabel: "летние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Дежурный ангел",
        sources: [
          {
            id: "pugacheva-release-1981-07-08-duty-angel-august",
            label: "Каталог советских пластинок: «Дежурный ангел» на отдельном миньоне · 1981.07/08",
            url: pugachevaJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "duty-angel-reader-chart-august",
            "«Звуковая дорожка» МК: «Дежурный ангел» — № 18 среди лучших песен 1981 года",
          ),
          annual1981Source("duty-angel-august", "Дежурный ангел"),
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Лестница",
        sources: [
          {
            id: "pugacheva-release-1981-07-08-staircase-august",
            label: "Каталог советских пластинок: «Лестница» на отдельном миньоне · 1981.07/08",
            url: pugachevaJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("staircase-august", "Лестница"),
        ],
      },
      {
        artist: "ВИА «Пламя»",
        title: "Снег кружится",
        sources: [
          {
            id: "flame-release-1981-07-08-snow-august",
            label: "Каталог советских пластинок: «Снег кружится» на миньоне ВИА «Пламя» · 1981.07/08",
            url: flameJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "snow-spins-hit-august",
            "«Песня-81»: «Снег кружится» отдельно отмечена среди больших хитов года",
            "телевизионная история хита",
          ),
          annual1981Source("snow-spins-august", "Снег кружится"),
        ],
      },
      {
        artist: "ВИА «Пламя»",
        title: "Под музыку Вивальди",
        sources: [
          {
            id: "flame-release-1981-07-08-vivaldi-august",
            label: "Каталог советских пластинок: «Под музыку Вивальди» на миньоне ВИА «Пламя» · 1981.07/08",
            url: flameJulyAugust1981CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("vivaldi-august", "Под музыку Вивальди"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-09-15",
    dateLabel: "сентябрь 1981",
    archiveYear: 1981,
    programLabel: "«Кругозор» № 9",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лев Лещенко и группа «Спектр»",
        title: "Родительский дом",
        sources: [
          {
            id: "krugozor-1981-09-parental-home-catalog",
            label: "Каталог советских пластинок: «Родительский дом» в «Кругозоре» № 9 · 1981.09",
            url: krugozorSeptember1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "parental-home-finalist",
            "«Песня-81»: «Родительский дом» назван хитом и вошёл в телевизионный финал",
            "телевизионный фестиваль",
          ),
          annual1981Source("parental-home", "Родительский дом"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-10-15",
    dateLabel: "октябрь—ноябрь 1981",
    archiveYear: 1981,
    programLabel: "миньон Юрия Антонова",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Юрий Антонов",
        title: "Двадцать лет спустя",
        sources: [
          {
            id: "antonov-release-1981-10-11-twenty-years-october",
            label: "Каталог советских пластинок: «Двадцать лет спустя» на миньоне Юрия Антонова · 1981.10/11",
            url: antonovOctoberNovember1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "twenty-years-hit-october",
            "«Песня-81»: «Двадцать лет спустя» отдельно отмечена среди больших хитов года",
            "телевизионная история хита",
          ),
          annual1981Source("twenty-years-october", "Двадцать лет спустя"),
        ],
      },
      {
        artist: "Юрий Антонов",
        title: "Жизнь",
        sources: [
          {
            id: "antonov-release-1981-10-11-life-october",
            label: "Каталог советских пластинок: «Жизнь» на миньоне Юрия Антонова · 1981.10/11",
            url: antonovOctoberNovember1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "antonov-reader-poll-october",
            "«Звуковая дорожка» МК: Юрий Антонов — певец № 2 по итогам 1981 года",
          ),
          annual1981Source("life-october", "Жизнь"),
        ],
      },
    ],
  },
  {
    chartDate: "1981-11-15",
    dateLabel: "октябрь—ноябрь 1981",
    archiveYear: 1981,
    programLabel: "миньон Юрия Антонова",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Юрий Антонов",
        title: "Двадцать лет спустя",
        sources: [
          {
            id: "antonov-release-1981-10-11-twenty-years-november",
            label: "Каталог советских пластинок: «Двадцать лет спустя» на миньоне Юрия Антонова · 1981.10/11",
            url: antonovOctoberNovember1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "twenty-years-hit-november",
            "«Песня-81»: «Двадцать лет спустя» отдельно отмечена среди больших хитов года",
            "телевизионная история хита",
          ),
          annual1981Source("twenty-years-november", "Двадцать лет спустя"),
        ],
      },
      {
        artist: "Юрий Антонов",
        title: "Жизнь",
        sources: [
          {
            id: "antonov-release-1981-10-11-life-november",
            label: "Каталог советских пластинок: «Жизнь» на миньоне Юрия Антонова · 1981.10/11",
            url: antonovOctoberNovember1981CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "antonov-reader-poll-november",
            "«Звуковая дорожка» МК: Юрий Антонов — певец № 2 по итогам 1981 года",
          ),
          annual1981Source("life-november", "Жизнь"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-01-01",
    dateLabel: "01.01.1982",
    archiveYear: 1981,
    programLabel: "«Песня-81»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Маэстро",
        sources: festivalSources(1981, "01.01.1982", "maestro"),
      },
      {
        artist: "Яак Йоала",
        title: "Я тебя рисую",
        sources: festivalSources(1981, "01.01.1982", "ya-tebya-risuyu"),
      },
      {
        artist: "Николай Гнатюк",
        title: "Птица счастья",
        sources: festivalSources(1981, "01.01.1982", "ptitsa-schastya"),
      },
      {
        artist: "Михаил Боярский",
        title: "Всё пройдёт",
        sources: festivalSources(1981, "01.01.1982", "vse-proydet"),
      },
    ],
  },
  {
    chartDate: "1982-02-15",
    dateLabel: "январь—февраль 1982",
    archiveYear: 1981,
    programLabel: "миньон «Дорога к морю»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Юрий Антонов",
        title: "Дорога к морю",
        sources: [
          {
            id: "road-to-sea-release-1982-01-02-catalog",
            label: "Каталог советских пластинок: «Дорога к морю» на миньоне · 1982.01/02",
            url: roadToSeaJanuaryFebruary1982CatalogUrl,
            kind: "датированный каталог",
          },
          annual1981Source("road-to-sea-february-1982-check", "Дорога к морю"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-03-15",
    dateLabel: "март 1982",
    archiveYear: 1982,
    programLabel: "«Кругозор» № 3",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Старинные часы",
        sources: [
          {
            id: "krugozor-1982-03-old-clock-catalog",
            label: "Каталог советских пластинок: «Старинные часы» в «Кругозоре» № 3 · 1982.03",
            url: krugozorMarch1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "old-clock-reader-chart-march",
            "По Ф. Раззакову: опрос «Смены» «Звёзды-82», опубликованный в январе 1983 — «Старинные часы», № 5 за 1982 год. Оригинал газеты ещё не сверён.",
          ),
          annual1982Source("old-clock-march", "Старинные часы"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-04-15",
    dateLabel: "апрель—май 1982",
    archiveYear: 1982,
    programLabel: "миньон «Детектив»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Тынис Мяги",
        title: "Детектив",
        sources: [
          {
            id: "detective-release-1982-04-05-catalog",
            label: "Каталог советских пластинок: «Детектив» на миньоне песен Владимира Шаинского · 1982.04/05",
            url: detectiveAprilMay1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "magi-reader-poll-april",
            "«Звуковая дорожка» МК: Тынис Мяги — певец № 7 по итогам 1982 года",
          ),
          annual1982Source("detective-april", "Детектив"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-05-15",
    dateLabel: "май—июнь 1982",
    archiveYear: 1982,
    programLabel: "весенние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земляне",
        title: "Прости, Земля!",
        sources: [
          {
            id: "earthlings-release-1982-05-06-forgive-earth-may",
            label: "Каталог советских пластинок: «Прости, Земля» на миньоне группы «Земляне» · 1982.05/06",
            url: earthlingsMayJune1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "forgive-earth-reader-chart-may",
            "По Ф. Раззакову: опрос «Смены» «Звёзды-82», опубликованный в январе 1983 — «Прости, Земля!», № 1 за 1982 год. Оригинал газеты ещё не сверён.",
          ),
          annual1982Source("forgive-earth-may", "Прости, Земля!"),
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Беда",
        sources: [
          {
            id: "pugacheva-release-1982-05-06-trouble-may",
            label: "Каталог советских пластинок: «Беда» на отдельном миньоне Аллы Пугачёвой · 1982.05/06",
            url: pugachevaMayJune1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "trouble-reader-chart-may",
            "По Ф. Раззакову: опрос «Смены» «Звёзды-82», опубликованный в январе 1983 — «Беда», совместное № 7 за 1982 год. Оригинал газеты ещё не сверён.",
          ),
          annual1981Source("trouble-may-1982-check", "Беда"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-06-15",
    dateLabel: "июнь 1982",
    archiveYear: 1982,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Муравьёва",
        title: "Позвони мне, позвони",
        sources: [
          {
            id: "krugozor-1982-06-call-me-catalog",
            label: "Каталог советских пластинок: Ирина Муравьёва поёт «Позвони мне» в «Кругозоре» № 6 · 1982.06",
            url: krugozorJune1982CatalogUrl,
            kind: "датированный каталог",
          },
          annual1982Source("call-me-june", "Позвони мне, позвони"),
        ],
      },
      {
        artist: "Николай Гнатюк",
        title: "Птица счастья",
        sources: [
          {
            id: "krugozor-1982-06-bird-of-happiness-catalog",
            label: "Каталог советских пластинок: «Птица счастья» в «Кругозоре» № 6 · 1982.06",
            url: krugozorJune1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "bird-of-happiness-june-1982-check",
            "«Песня-81»: «Птица счастья» названа хитом и вошла в телевизионный финал",
            "телевизионный фестиваль",
          ),
          annual1981Source("bird-of-happiness-june-1982-check", "Птица счастья"),
        ],
      },
      {
        artist: "София Ротару",
        title: "Бессонница",
        sources: [
          {
            id: "krugozor-1982-06-insomnia-catalog",
            label: "Каталог советских пластинок: «Бессонница» в «Кругозоре» № 6 · 1982.06",
            url: krugozorJune1982CatalogUrl,
            kind: "датированный каталог",
          },
          annual1982Source("insomnia-june", "Бессонница"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-07-15",
    dateLabel: "июль 1982",
    archiveYear: 1982,
    programLabel: "«Кругозор» № 7 и летние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земляне",
        title: "Каскадёры",
        sources: [
          {
            id: "krugozor-1982-07-stuntmen-catalog",
            label: "Каталог советских пластинок: «Каскадёры» в «Кругозоре» № 7 · 1982.07",
            url: krugozorJuly1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "stuntmen-reader-chart-july-1982-check",
            "«Звуковая дорожка» МК: «Каскадёры» — № 17 среди лучших песен предыдущего года",
          ),
          annual1981Source("stuntmen-july-1982-check", "Каскадёры"),
        ],
      },
      {
        artist: "Ирина Муравьёва",
        title: "Позвони мне, позвони",
        sources: [
          {
            id: "carnival-release-1982-07-08-call-me-july",
            label: "Каталог советских пластинок: «Позвони мне, позвони» на миньоне песен из фильма «Карнавал» · 1982.07/08",
            url: carnivalJulyAugust1982CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1982-06-call-me-july-check",
            label: "Дополнительная помесячная проверка: песня уже была опубликована в «Кругозоре» № 6 · 1982.06",
            url: krugozorJune1982CatalogUrl,
            kind: "датированная повторная публикация",
          },
          annual1982Source("call-me-july", "Позвони мне, позвони"),
        ],
      },
      {
        artist: "Земляне",
        title: "Поверь в мечту",
        sources: [
          {
            id: "earthlings-release-1982-06-07-believe-dream-july",
            label: "Каталог советских пластинок: «Поверь в мечту» на миньоне группы «Земляне» · 1982.06/07",
            url: earthlingsJuneJuly1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "earthlings-group-poll-july",
            "«Звуковая дорожка» МК: «Земляне» — группа № 2 по итогам 1982 года",
          ),
          annual1982Source("believe-dream-july", "Поверь в мечту"),
        ],
      },
      {
        artist: "ВИА «Пламя»",
        title: "Двести лет",
        sources: [
          {
            id: "flame-release-1982-06-07-two-hundred-years-july",
            label: "Каталог советских пластинок: «Двести лет» на миньоне ВИА «Пламя» · 1982.06/07",
            url: flameJuneJuly1982CatalogUrl,
            kind: "датированный каталог",
          },
          annual1982Source("two-hundred-years-july", "Двести лет"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-08-15",
    dateLabel: "июль—август 1982",
    archiveYear: 1982,
    programLabel: "песни из фильмов «Карнавал» и «Душа»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Муравьёва",
        title: "Позвони мне, позвони",
        sources: [
          {
            id: "carnival-release-1982-07-08-call-me-august",
            label: "Каталог советских пластинок: «Позвони мне, позвони» на миньоне песен из фильма «Карнавал» · 1982.07/08",
            url: carnivalJulyAugust1982CatalogUrl,
            kind: "датированный каталог",
          },
          {
            id: "krugozor-1982-06-call-me-august-check",
            label: "Дополнительная проверка: песня прозвучала в «Кругозоре» № 6 за июнь 1982 года",
            url: krugozorJune1982CatalogUrl,
            kind: "датированная повторная публикация",
          },
          annual1982Source("call-me-august", "Позвони мне, позвони"),
        ],
      },
      {
        artist: "Машина времени",
        title: "За тех, кто в море",
        sources: [
          {
            id: "machine-time-release-1982-08-09-sea-august",
            label: "Каталог советских пластинок: «За тех, кто в море» на миньоне песен из фильма «Душа» · 1982.08/09",
            url: machineTimeAugustSeptember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "machine-time-group-poll-sea-august",
            "«Звуковая дорожка» МК: «Машина времени» — группа № 1 по итогам 1982 года",
          ),
          annual1982Source("sea-august", "За тех, кто в море"),
        ],
      },
      {
        artist: "Машина времени",
        title: "Путь",
        sources: [
          {
            id: "machine-time-release-1982-08-09-way-august",
            label: "Каталог советских пластинок: «Путь» на миньоне песен из фильма «Душа» · 1982.08/09",
            url: machineTimeAugustSeptember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "machine-time-group-poll-way-august",
            "«Звуковая дорожка» МК: «Машина времени» — группа № 1 по итогам 1982 года",
          ),
          annual1982Source("way-august", "Путь"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-09-15",
    dateLabel: "август—сентябрь 1982",
    archiveYear: 1982,
    programLabel: "осенние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Машина времени",
        title: "За тех, кто в море",
        sources: [
          {
            id: "machine-time-release-1982-08-09-sea-september",
            label: "Каталог советских пластинок: «За тех, кто в море» на миньоне песен из фильма «Душа» · 1982.08/09",
            url: machineTimeAugustSeptember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "machine-time-group-poll-sea-september",
            "«Звуковая дорожка» МК: «Машина времени» — группа № 1 по итогам 1982 года",
          ),
          annual1982Source("sea-september", "За тех, кто в море"),
        ],
      },
      {
        artist: "Машина времени",
        title: "Путь",
        sources: [
          {
            id: "machine-time-release-1982-08-09-way-september",
            label: "Каталог советских пластинок: «Путь» на миньоне песен из фильма «Душа» · 1982.08/09",
            url: machineTimeAugustSeptember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "machine-time-group-poll-way-september",
            "«Звуковая дорожка» МК: «Машина времени» — группа № 1 по итогам 1982 года",
          ),
          annual1982Source("way-september", "Путь"),
        ],
      },
      {
        artist: "Николай Гнатюк",
        title: "Птица счастья",
        sources: [
          {
            id: "gnatyuk-release-1982-09-10-bird-september",
            label: "Каталог советских пластинок: «Птица счастья» на миньоне Николая Гнатюка · 1982.09/10",
            url: gnatyukSeptemberOctober1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "bird-of-happiness-september-1982-check",
            "«Песня-81»: «Птица счастья» названа хитом и вошла в телевизионный финал",
            "телевизионный фестиваль",
          ),
          annual1981Source("bird-of-happiness-september-1982-check", "Птица счастья"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-10-15",
    dateLabel: "октябрь 1982",
    archiveYear: 1982,
    programLabel: "«Кругозор» № 10 и осенний миньон Николая Гнатюка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валентина Толкунова",
        title: "Если б не было войны",
        sources: [
          {
            id: "krugozor-1982-10-no-war-catalog",
            label: "Каталог советских пластинок: «Если б не было войны» в «Кругозоре» № 10 · 1982.10",
            url: krugozorOctober1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "no-war-finalist-october-1982-check",
            "«Песня-81»: песня вошла в датированный телевизионный финал 01.01.1982",
            "телевизионный фестиваль",
          ),
          annual1981Source("no-war-october-1982-check", "Когда бы не было войны"),
        ],
      },
      {
        artist: "Николай Гнатюк",
        title: "Птица счастья",
        sources: [
          {
            id: "gnatyuk-release-1982-09-10-bird-october",
            label: "Каталог советских пластинок: «Птица счастья» на миньоне Николая Гнатюка · 1982.09/10",
            url: gnatyukSeptemberOctober1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1981Source(
            "bird-of-happiness-october-1982-check",
            "«Песня-81»: «Птица счастья» названа хитом и вошла в телевизионный финал",
            "телевизионный фестиваль",
          ),
          annual1981Source("bird-of-happiness-october-1982-check", "Птица счастья"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-11-15",
    dateLabel: "ноябрь—декабрь 1982",
    archiveYear: 1982,
    programLabel: "предновогодние миньоны фирмы «Мелодия»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Миллион алых роз",
        sources: [
          {
            id: "million-roses-release-1982-11-12-november",
            label: "Каталог советских пластинок: миньон «Миллион роз» · 1982.11/12; к концу 1983 года — 6 млн экземпляров",
            url: millionRosesNovemberDecember1982CatalogUrl,
            kind: "датированный каталог и история тиража",
          },
          song1982Source(
            "million-scarlet-roses-reader-chart-november",
            "По Ф. Раззакову: опрос «Смены» «Звёзды-82», опубликованный в январе 1983 — «Миллион алых роз», № 6 за 1982 год. Оригинал газеты ещё не сверён.",
          ),
          annual1982Source("million-scarlet-roses-november", "Миллион алых роз"),
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Возвращение",
        sources: [
          {
            id: "return-release-1982-11-12-november",
            label: "Каталог советских пластинок: «Возвращение» на миньоне «Миллион роз» · 1982.11/12",
            url: millionRosesNovemberDecember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "return-reader-chart-november",
            "По Ф. Раззакову: опрос «Смены» «Звёзды-82», опубликованный в январе 1983 — «Возвращение», совместное № 7 за 1982 год. Оригинал газеты ещё не сверён.",
          ),
          annual1982Source("return-november", "Возвращение"),
        ],
      },
      {
        artist: "Юрий Антонов",
        title: "Крыша дома твоего",
        sources: [
          {
            id: "antonov-release-1982-11-12-roof-november",
            label: "Каталог советских пластинок: «Крыша дома твоего» на миньоне Юрия Антонова · 1982.11/12",
            url: antonovNovemberDecember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "antonov-reader-poll-roof-november",
            "«Звуковая дорожка» МК: Юрий Антонов — певец № 1 по итогам 1982 года",
          ),
          annual1982Source("roof-november", "Крыша дома твоего"),
        ],
      },
      {
        artist: "Валерий Леонтьев",
        title: "Разноцветные ярмарки",
        sources: [
          {
            id: "leontiev-release-1982-11-12-colorful-fairs-november",
            label: "Каталог советских пластинок: «Разноцветные ярмарки» на миньоне Валерия Леонтьева · 1982.11/12",
            url: leontievNovemberDecember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "colorful-fairs-hit-november",
            "«Песня-82»: «Разноцветные ярмарки» отдельно отмечена среди больших хитов года",
            "телевизионная история хита",
          ),
          annual1982Source("colorful-fairs-november", "Разноцветные ярмарки"),
        ],
      },
      {
        artist: "Валерий Леонтьев",
        title: "Если ты уйдёшь",
        sources: [
          {
            id: "leontiev-release-1982-11-12-if-you-leave-november",
            label: "Каталог советских пластинок: «Если ты уйдешь» на миньоне Валерия Леонтьева · 1982.11/12",
            url: leontievNovemberDecember1982CatalogUrl,
            kind: "датированный каталог",
          },
          song1982Source(
            "leontiev-reader-poll-leave-november",
            "«Звуковая дорожка» МК: Валерий Леонтьев — певец № 2 по итогам 1982 года",
          ),
          annual1982Source("if-you-leave-november", "Если ты уйдёшь"),
        ],
      },
    ],
  },
  {
    chartDate: "1982-12-30",
    dateLabel: "30 декабря 1982",
    archiveYear: 1982,
    programLabel: "Владимир Кузьмин и группа «Динамик», концерт в Кирове",
    anchorKind: "концерт",
    candidates: ["По-прежнему вдвоём", "Мама, я попал в беду", "Мячик"].map((title, index) => ({
      artist: "Владимир Кузьмин и группа «Динамик»",
      title,
      sources: [
        {
          id: `kirov-1982-12-30-official-${index}`,
          label: `Официальная дискография Кузьмина: «${title}» в записи концерта 30.12.1982. Дата выступления; переиздание 1994 года не доказывает декабрьский пик.`,
          url: "https://vladimirkuzmin.org/discography/",
          kind: "официальная концертная дискография",
        },
        {
          id: `kirov-1982-12-30-witness-${index}`,
          label: "Рустем Валиахметов, воспоминания на официальном сайте: программа двух концертов 30.12.1982. Спрос на копии описан с начала января 1983; это позднее воспоминание, не декабрьский опрос.",
          url: "https://vladimirkuzmin.org/articles/rasskaz-rustema-valiahmetova/",
          kind: "культурный след",
        },
        {
          id: `kirov-1982-retrospective-${index}`,
          label: `Сергей Курий, 2017: история «${title}» и раннего «Динамика». Ретроспективное свидетельство известности, без месяца пика и статистики прослушивания.`,
          url: "https://www.kursivom.ru/владимир-кузьмин-и-группа-динамик-1/",
          kind: "история песни",
        },
      ],
    })),
  },
  {
    chartDate: "1983-01-01",
    dateLabel: "01.01.1983",
    archiveYear: 1982,
    programLabel: "«Песня-82»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Старинные часы",
        sources: festivalSources(1982, "01.01.1983", "starinnye-chasy"),
      },
      {
        artist: "Валентина Толкунова",
        title: "Я не могу иначе",
        sources: festivalSources(1982, "01.01.1983", "ya-ne-mogu-inache"),
      },
      {
        artist: "Ялла",
        title: "Три колодца",
        sources: festivalSources(1982, "01.01.1983", "tri-kolodtsa"),
      },
    ],
  },
  {
    chartDate: "1983-01-02",
    dateLabel: "02.01.1983",
    archiveYear: 1983,
    programLabel: "телепремьера «Новогоднего аттракциона»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Миллион алых роз",
        sources: monthlyReleaseSources(
          1983,
          "pugacheva-million-roses-january",
          newYearAttraction1983SingleUrl,
          "История телешоу: «Миллион алых роз» прозвучала в премьере «Новогоднего аттракциона» 02.01.1983 и стала хитом года",
          "датированная телепремьера",
        ),
      },
      {
        artist: "Алла Пугачёва",
        title: "Канатоходка",
        sources: monthlyReleaseSources(
          1983,
          "pugacheva-kanatohodka-january-premiere",
          newYearAttraction1983SingleUrl,
          "История телешоу: «Канатоходка» прозвучала в премьере «Новогоднего аттракциона» 02.01.1983",
          "датированная телепремьера",
        ),
      },
      {
        artist: "Алла Пугачёва и Валерий Леонтьев",
        title: "Поздно",
        sources: [
          {
            id: "new-year-attraction-1983-late-duet",
            label: "История телешоу: дуэт «Поздно» прозвучал в премьере «Новогоднего аттракциона» 02.01.1983",
            url: newYearAttraction1983SingleUrl,
            kind: "датированная телепремьера",
          },
          {
            id: "soviet-tv-archive-1983-late-duet",
            label: "Архив Гостелерадиофонда: Алла Пугачёва и Валерий Леонтьев исполняют «Поздно» в «Новогоднем аттракционе»",
            url: lateDuetArchive1983Url,
            kind: "архив телепрограммы",
          },
          {
            id: "discoclub-9-1983-late-duet",
            label: "Каталог MusicBrainz: дуэтная запись «Поздно» включена в советский сборник «Дискоклуб-9» 1983 года",
            url: discoclub9MusicBrainzUrl,
            kind: "каталог фонограммы",
          },
        ],
      },
    ],
  },
  {
    // Второй номер «Кругозора» задаёт только месяц публикации.
    chartDate: "1983-02-15",
    dateLabel: "февраль 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 2 / серия «Новогодний аттракцион»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Канатоходка",
        sources: monthlyReleaseSources(
          1983,
          "pugacheva-kanatohodka-february",
          newYearAttraction1983SingleUrl,
          "История релиза: «Канатоходка» опубликована в «Кругозоре» № 2 за февраль 1983 года",
          "датированный выпуск журнала",
        ),
      },
    ],
  },
  {
    chartDate: "1983-03-15",
    dateLabel: "март 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 3",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Михаил Боярский",
        title: "Всё пройдёт",
        sources: krugozorIssueSources(1983, 3, 228, "boyarsky-everything-will-pass", "https://tunnel.ru/post-1983-03", "Всё пройдёт"),
      },
    ],
  },
  {
    // «Кругозор» датирует материал только номером за апрель; 15-е число —
    // технический центр месяца и не показывается как точный день релиза.
    chartDate: "1983-04-15",
    dateLabel: "апрель 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 4",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Полёт на дельтаплане",
        sources: monthlyReleaseSources(
          1983,
          "polet-na-deltaplane-april",
          krugozorApril1983CatalogUrl,
          "Каталог советских пластинок: «Полёт на дельтаплане» в звуковом приложении «Кругозора» № 4 · апрель 1983",
          "датированный выпуск журнала",
        ),
      },
      {
        artist: "Елена Камбурова",
        title: "Любовь и разлука",
        sources: [
          {
            id: "not-church-film-premiere-1983-04-18",
            label: "Кинопремьера фильма «Нас венчали не в церкви» состоялась 18.04.1983",
            url: notChurchPremiere1983Url,
            kind: "датированная кинопремьера",
          },
          {
            id: "kamburova-love-and-separation-film-version",
            label: "Архив фильма: «Любовь и разлука» звучит в исполнении Елены Камбуровой",
            url: kamburovaLoveFilmArchiveUrl,
            kind: "архив фильма и точная версия",
          },
          {
            id: "love-and-separation-song-history",
            label: "История романса: песня была написана для фильма и получила самостоятельную культурную жизнь",
            url: kamburovaLoveHistoryUrl,
            kind: "независимая история песни",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1983-05-15",
    dateLabel: "май 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 5",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "София Ротару",
        title: "Нежная мелодия",
        sources: krugozorIssueSources(1983, 5, 230, "rotaru-tender-melody", "https://tunnel.ru/post-1983-05", "Нежная мелодия"),
      },
    ],
  },
  {
    // Номер журнала подтверждает именно июнь, поэтому используем центр месяца,
    // а не выдумываем точный день публикации.
    chartDate: "1983-06-15",
    dateLabel: "июнь 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 6: Юрий Антонов",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Юрий Антонов",
        title: "Крыша дома твоего",
        sources: [
          {
            id: "krugozor-1983-06-antonov-roof-catalog",
            label: "Каталог советских пластинок: «Крыша дома твоего» в звуковом приложении «Кругозора» № 6 · июнь 1983",
            url: krugozorJune1983CatalogUrl,
            kind: "датированный выпуск журнала",
          },
          {
            id: "song-1983-antonov-roof-finalist",
            label: "«Песня-83»: Юрий Антонов с «Крышей дома твоего» среди финалистов года",
            url: song1983Url,
            kind: "телефестиваль и точная версия",
          },
          {
            id: "namedni-1983-antonov-roof-superhit",
            label: "«Намедни-1983»: «Крыша дома твоего» названа суперхитом и пиком популярности Юрия Антонова",
            url: antonovNamedni1983Url,
            kind: "независимая история популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1983-07-15",
    dateLabel: "июль 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 7",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Отиева",
        title: "Песня о моём крае",
        sources: krugozorIssueSources(1983, 7, 232, "otieva-song-about-my-land", "https://tunnel.ru/post-1983-07", "Песня о моём крае"),
      },
    ],
  },
  {
    // Номер журнала подтверждает именно август, поэтому используем центр месяца,
    // а не выдумываем точный день публикации.
    chartDate: "1983-08-15",
    dateLabel: "август 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 8: Евгений Мартынов",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Евгений Мартынов",
        title: "Мамины глаза",
        sources: [
          {
            id: "krugozor-1983-08-mothers-eyes-catalog",
            label: "Каталог советских пластинок: «Мамины глаза» в звуковом приложении «Кругозора» № 8 · август 1983",
            url: krugozorAugust1983CatalogUrl,
            kind: "датированный выпуск журнала",
          },
          {
            id: "krugozor-1983-08-mothers-eyes-issue",
            label: "Архив «Кругозора»: звуковая страница Евгения Мартынова с песней «Мамины глаза» в № 8 за 1983 год",
            url: krugozorAugust1983ArticleUrl,
            kind: "архив выпуска и точная фонограмма",
          },
          {
            id: "martynov-mothers-eyes-cultural-history",
            label: "Биография Евгения Мартынова: «Мамины глаза» среди широко известных песен композитора и исполнителя",
            url: martynovBiographyUrl,
            kind: "независимая история популярности",
          },
        ],
      },
    ],
  },
  {
    // Номер журнала подтверждает месяц, но не конкретный день выхода.
    chartDate: "1983-09-15",
    dateLabel: "сентябрь 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 9: Алла Пугачёва",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "А знаешь, всё ещё будет",
        sources: monthlyReleaseSources(
          1983,
          "pugacheva-everything-will-be-september",
          krugozorSeptember1983Url,
          "Архив «Кругозора» № 9: Алла Пугачёва — «А знаешь, всё ещё будет» · сентябрь 1983",
          "датированный выпуск журнала",
        ),
      },
    ],
  },
  {
    // Номер журнала подтверждает октябрь, но не конкретный день публикации.
    chartDate: "1983-10-15",
    dateLabel: "октябрь 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 10",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Верасы",
        title: "Белый снег",
        sources: [
          {
            id: "krugozor-1983-10-verasy-white-snow-issue",
            label: "Архив «Кругозора» № 10: «Верасы» — «Белый снег» · октябрь 1983",
            url: krugozorOctober1983Url,
            kind: "датированный выпуск журнала",
          },
          {
            id: "krugozor-1983-10-verasy-white-snow-catalog",
            label: "Каталог советских пластинок: «Белый снег» на звуковой странице № 12 «Кругозора» № 10 · 1983.10",
            url: krugozorOctober1983CatalogUrl,
            kind: "каталог фонограммы",
          },
        ],
      },
    ],
  },
  {
    // Номер журнала подтверждает ноябрь, но не конкретный день публикации.
    chartDate: "1983-11-15",
    dateLabel: "ноябрь 1983",
    archiveYear: 1983,
    programLabel: "«Кругозор» № 11",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валентина Толкунова",
        title: "Я не могу иначе",
        sources: [
          {
            id: "krugozor-1983-11-tolkunova-cannot-otherwise-issue",
            label: "Архив «Кругозора» № 11: Валентина Толкунова — «Я не могу иначе» · ноябрь 1983",
            url: krugozorNovember1983Url,
            kind: "датированный выпуск журнала",
          },
          {
            id: "krugozor-1983-11-tolkunova-cannot-otherwise-catalog",
            label: "Каталог советских пластинок: «Я не могу иначе» на звуковой странице № 8 «Кругозора» № 11 · 1983.11",
            url: krugozorNovember1983CatalogUrl,
            kind: "каталог фонограммы",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1983-12-30",
    dateLabel: "30.12.1983",
    archiveYear: 1983,
    programLabel: "«Песня-83»",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Полёт на дельтаплане",
        sources: festivalSources(1983, "30.12.1983", "polet-na-deltaplane"),
      },
      {
        artist: "Земляне",
        title: "Трава у дома",
        sources: festivalSources(1983, "30.12.1983", "trava-u-doma"),
      },
      {
        artist: "Квартет «Сердца четырёх»",
        title: "Три белых коня",
        sources: festivalSources(1983, "30.12.1983", "tri-belykh-konya"),
      },
      {
        artist: "София Ротару",
        title: "А музыка звучит",
        sources: festivalSources(1983, "30.12.1983", "a-muzyka-zvuchit"),
      },
    ],
  },
  {
    chartDate: "1984-01-08",
    dateLabel: "08.01.1984",
    archiveYear: 1984,
    programLabel: "телепремьера фильма «Мэри Поппинс, до свидания!»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Татьяна Воронина и Павел Смеян",
        title: "Ветер перемен",
        sources: monthlyReleaseSources(
          1984,
          "mary-poppins-wind-of-change-january",
          maryPoppinsPremiere1984Url,
          "Официальная хроника: телепремьера фильма «Мэри Поппинс, до свидания!» с песней «Ветер перемен» состоялась 08.01.1984",
          "датированная телепремьера",
        ),
      },
    ],
  },
  {
    // Архив «Кругозора» подтверждает выпуск за февраль, но не день публикации.
    // 15-е число — технический центр месяца для выбора ближайшего результата.
    chartDate: "1984-02-15",
    dateLabel: "февраль 1984",
    archiveYear: 1984,
    programLabel: "«Кругозор» № 2",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земляне",
        title: "Трава у дома",
        sources: monthlyReleaseSources(
          1984,
          "trava-u-doma-february",
          krugozorFebruary1984Url,
          "Звуковая страница «Кругозора» № 2: «Земляне» — «Трава у дома» · февраль 1984",
          "датированный выпуск журнала",
        ),
      },
      {
        artist: "София Ротару",
        title: "А музыка звучит",
        sources: monthlyReleaseSources(
          1984,
          "a-muzyka-zvuchit-february",
          krugozorFebruary1984Url,
          "Звуковая страница «Кругозора» № 2: София Ротару — «А музыка звучит» · февраль 1984",
          "датированный выпуск журнала",
        ),
      },
    ],
  },
  {
    // Номер журнала задаёт месяц, но не день публикации.
    chartDate: "1984-03-15",
    dateLabel: "март 1984",
    archiveYear: 1984,
    programLabel: "«Кругозор» № 3",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Айсберг",
        sources: monthlyReleaseSources(
          1984,
          "aysberg-march",
          krugozorMarch1984Url,
          "Звуковая страница «Кругозора» № 3: Алла Пугачёва — «Айсберг» · март 1984",
          "датированный выпуск журнала",
        ),
      },
    ],
  },
  {
    chartDate: "1984-05-19",
    dateLabel: "18–20.05.1984",
    archiveYear: 1984,
    programLabel: "II фестиваль Ленинградского рок-клуба",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Зоопарк",
        title: "Буги-вуги каждый день",
        sources: monthlyReleaseSources(
          1984,
          "zoopark-boogie-woogie-may",
          leningradRockFestival1984Url,
          "Архив фестиваля: «Зоопарк» исполнил «Буги-вуги каждый день» на II фестивале Ленинградского рок-клуба 18–20.05.1984",
          "датированный фестивальный архив",
        ),
      },
    ],
  },
  {
    // Номер журнала подтверждает июнь, но не конкретный день публикации.
    chartDate: "1984-06-15",
    dateLabel: "июнь 1984",
    archiveYear: 1984,
    programLabel: "«Кругозор» № 6",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Александр Серов",
        title: "Эхо первой любви",
        sources: [
          {
            id: "krugozor-1984-06-serov-echo-first-love-issue",
            label: "Архив «Кругозора» № 6: Александр Серов — «Эхо первой любви» · июнь 1984",
            url: krugozorJune1984Url,
            kind: "датированный выпуск журнала",
          },
          {
            id: "krugozor-1984-06-serov-echo-first-love-catalog",
            label: "Каталог советских пластинок: «Эхо первой любви» на звуковой странице № 9 «Кругозора» № 6 · 1984.06",
            url: krugozorJune1984CatalogUrl,
            kind: "каталог фонограммы",
          },
          {
            id: "serov-echo-first-love-1984-compilation",
            label: "Каталог «Мелодии»: песня вошла в сборник «Для вас, женщины! Эхо первой любви» 1984 года",
            url: echoFirstLove1984CompilationUrl,
            kind: "независимый каталог релиза",
          },
        ],
      },
    ],
  },
  {
    // Номер журнала подтверждает июль, но не конкретный день публикации.
    chartDate: "1984-07-15",
    dateLabel: "июль 1984",
    archiveYear: 1984,
    programLabel: "«Кругозор» № 7",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Затменье сердца",
        sources: monthlyReleaseSources(
          1984,
          "leontiev-eclipse-of-heart-july",
          krugozorJuly1984Url,
          "Архив «Кругозора» № 7: Валерий Леонтьев — «Затменье сердца» · июль 1984",
          "датированный выпуск журнала",
        ),
      },
    ],
  },
  {
    // Номер журнала подтверждает август, но не конкретный день публикации.
    chartDate: "1984-08-15",
    dateLabel: "август 1984",
    archiveYear: 1984,
    programLabel: "«Кругозор» № 8: музыка из фильма «Жестокий романс»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валентина Пономарёва",
        title: "Романс о романсе",
        sources: [
          {
            id: "krugozor-1984-08-ponomaryova-romance-issue",
            label: "Архив «Кругозора» № 8: Валентина Пономарёва — «Романс о романсе» · август 1984",
            url: krugozorAugust1984Url,
            kind: "датированный выпуск журнала",
          },
          {
            id: "krugozor-1984-08-ponomaryova-romance-catalog",
            label: "Каталог советских пластинок: «Романс о романсе» на звуковой странице № 9 «Кругозора» № 8 · 1984.08",
            url: krugozorAugust1984CatalogUrl,
            kind: "каталог фонограммы",
          },
          {
            id: "cruel-romance-soundtrack-recording-1984",
            label: "Каталог саундтрека «Жестокого романса»: запись фонограммы фильма датирована 1984 годом",
            url: cruelRomanceSoundtrackUrl,
            kind: "независимый каталог саундтрека",
          },
        ],
      },
    ],
  },
  {
    // Официальная история группы датирует сентябрём первый большой концерт,
    // после которого песни «Форума» начали расходиться по стране.
    chartDate: "1984-09-15",
    dateLabel: "сентябрь 1984",
    archiveYear: 1984,
    programLabel: "дебютный концерт группы «Форум»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Форум",
        title: "Белая ночь",
        sources: monthlyReleaseSources(
          1984,
          "forum-white-night-september",
          forumOfficialHistoryUrl,
          "Официальная история «Форума»: дебютный концерт состоялся в сентябре 1984 года, вскоре песни группы разошлись по стране",
          "официальная история группы",
        ),
      },
    ],
  },
  {
    chartDate: "1984-11-07",
    dateLabel: "07.11.1984",
    archiveYear: 1984,
    programLabel: "премьера «Аиста на крыше» в «Голубом огоньке»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "София Ротару",
        title: "Аист на крыше",
        sources: monthlyReleaseSources(
          1984,
          "aist-na-kryshe-november",
          aistPremiere1984Url,
          "История песни: телевизионная премьера «Аиста на крыше» состоялась 07.11.1984",
          "датированная телепремьера",
        ),
      },
    ],
  },
  {
    chartDate: "1984-12-30",
    dateLabel: "30.12.1984",
    archiveYear: 1984,
    programLabel: "«Песня-84»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Расскажите, птицы",
        sources: festivalSources(1984, "30.12.1984", "rasskazhite-ptitsy"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Без меня",
        sources: festivalSources(1984, "30.12.1984", "bez-menya"),
      },
      {
        artist: "Юрий Антонов",
        title: "Снегири",
        sources: festivalSources(1984, "30.12.1984", "snegiri"),
      },
      {
        artist: "Мирдза Зивере и Имант Ванзович",
        title: "Надо подумать",
        sources: festivalSources(1984, "30.12.1984", "nado-podumat"),
      },
    ],
  },
  {
    chartDate: "1985-01-15",
    dateLabel: "январь 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 1",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ансамбль «Живая вода»",
        title: "Свет, моя улица",
        sources: krugozorIssueSources(1985, 1, 250, "zhivaya-voda-my-street-light", "https://tunnel.ru/post-1985-01", "Свет, моя улица"),
      },
    ],
  },
  {
    // «Кругозор» фиксирует месяц публикации, но не точный день.
    chartDate: "1985-02-15",
    dateLabel: "февраль 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 2: Ксения Георгиади",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Ксения Георгиади",
        title: "Остановись, постой!",
        sources: [
          {
            id: "krugozor-1985-02-georgiadi-stop",
            label: "Архив «Кругозора»: Ксения Георгиади — «Остановись, постой!» в № 2 за февраль 1985 года",
            url: krugozorFebruary1985Url,
            kind: "датированный выпуск и точная запись",
          },
          {
            id: "records-1985-georgiadi-stop",
            label: "Каталог советских грампластинок: «Остановись, постой!» — Ксения Георгиади, 1985",
            url: georgiadiStopRecords1985Url,
            kind: "каталог точной записи",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-03-25",
    dateLabel: "25–29.03.1985",
    archiveYear: 1985,
    programLabel: "телепремьера «Гостьи из будущего»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Татьяна Дасковская",
        title: "Прекрасное далёко",
        sources: [
          {
            id: "guest-from-future-tv-premiere-1985-03-25",
            label: "Официальный сайт Москвы: телепремьера «Гостьи из будущего» началась 25.03.1985",
            url: guestFuturePremiere1985Url,
            kind: "датированная телепремьера",
          },
          {
            id: "beautiful-far-away-film-performance-1985",
            label: "История песни: в фильме «Прекрасное далёко» исполнила Татьяна Дасковская",
            url: beautifulFarAwayHistoryUrl,
            kind: "связь песни с фильмом и исполнителем",
          },
          {
            id: "music-press-1985-beautiful-far-away",
            label: "Архив музыкальной прессы: «Прекрасное далёко» в списке 1985 года",
            url: archive1985Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-04-15",
    dateLabel: "апрель 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 4: Михаил Боярский",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Михаил Боярский",
        title: "Старый альбом",
        sources: [
          {
            id: "krugozor-1985-04-boyarsky-old-album",
            label: "Архив «Кругозора»: Михаил Боярский — «Старый альбом» в № 4 за апрель 1985 года",
            url: krugozorApril1985Url,
            kind: "датированный выпуск и точная запись",
          },
          {
            id: "records-1985-boyarsky-old-album",
            label: "Каталог «Мелодии»: «Старый альбом» на пластинке Михаила Боярского 1985 года",
            url: boyarskyOldAlbum1985Url,
            kind: "каталог точной записи",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-05-15",
    dateLabel: "май 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 5",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Лев Лещенко",
        title: "День Победы",
        sources: [
          ...krugozorIssueSources(1985, 5, 254, "leschenko-victory-day", "https://tunnel.ru/post-1985-05", "День Победы"),
          {
            id: "song-1985-leschenko-victory-day-finalist",
            label: "«Песня-85»: Лев Лещенко с песней «День Победы» среди финалистов года",
            url: song1985Url,
            kind: "телефестиваль и годовая популярность",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-06-15",
    dateLabel: "июнь 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 6: группа «Земляне»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Земляне",
        title: "Путь домой",
        sources: [
          {
            id: "krugozor-1985-06-zemlyane-way-home",
            label: "Архив «Кругозора»: «Земляне» — «Путь домой» в № 6 за июнь 1985 года",
            url: krugozorJune1985Url,
            kind: "датированный выпуск и точная запись",
          },
          {
            id: "zemlyane-discography-1985-way-home",
            label: "Дискография группы: «Путь домой» издана в приложении к «Кругозору» № 6 за 1985 год",
            url: zemlyaneHistoryUrl,
            kind: "независимая сверка дискографии",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-07-15",
    dateLabel: "июль 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 7",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "По лестнице",
        sources: krugozorIssueSources(1985, 7, 256, "leontiev-up-the-stairs", "https://tunnel.ru/post-1985-07", "По лестнице"),
      },
    ],
  },
  {
    chartDate: "1985-08-15",
    dateLabel: "август 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 8: Валерий Леонтьев",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Сеньорита Грация",
        sources: [
          {
            id: "krugozor-1985-08-leontiev-grace",
            label: "Архив «Кругозора»: Валерий Леонтьев — «Грация» в № 8 за август 1985 года",
            url: krugozorAugust1985Url,
            kind: "датированный выпуск и точная запись",
          },
          {
            id: "records-1985-leontiev-senorita-grace",
            label: "Каталог записи: полное название «Сеньорита Грация», запись Валерия Леонтьева 1985 года",
            url: leontievGrace1985Url,
            kind: "каталог точной записи",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» датирует публикацию октябрём; точный день не приписываем.
    chartDate: "1985-10-15",
    dateLabel: "октябрь 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 10: София Ротару",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "София Ротару",
        title: "Аист на крыше",
        sources: [
          {
            id: "krugozor-1985-10-rotaru-aist-na-kryshe",
            label: "Архив «Кругозора»: София Ротару, «Аист на крыше» в № 10 за октябрь 1985 года",
            url: krugozorOctober1985Url,
            kind: "датированный выпуск и точная запись",
          },
          {
            id: "song-1985-rotaru-aist-na-kryshe-finalist",
            label: "«Песня-85»: «Аист на крыше» Софии Ротару — финалист года",
            url: song1985Url,
            kind: "телефестиваль и годовая популярность",
          },
          {
            id: "music-press-1985-rotaru-aist-na-kryshe",
            label: "Архив музыкальной прессы: «Аист на крыше» в списке 1985 года",
            url: archive1985Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    // «Кругозор» датирует публикацию ноябрём; точный день не приписываем.
    chartDate: "1985-11-15",
    dateLabel: "ноябрь 1985",
    archiveYear: 1985,
    programLabel: "«Кругозор» № 11: Игорь Скляр",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Игорь Скляр",
        title: "Комарово",
        sources: [
          {
            id: "krugozor-1985-11-sklyar-komarovo",
            label: "Архив «Кругозора»: Игорь Скляр, «Я уеду в Комарово» в № 11 за ноябрь 1985 года",
            url: krugozorNovember1985Url,
            kind: "датированный выпуск и точная версия",
          },
          {
            id: "song-1985-sklyar-komarovo-finalist",
            label: "«Песня-85»: «Комарово» Игоря Скляра — финалист года",
            url: song1985Url,
            kind: "телефестиваль и годовая популярность",
          },
          {
            id: "music-press-1985-sklyar-komarovo",
            label: "Архив музыкальной прессы: «Комарово» в списке 1985 года",
            url: archive1985Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1985-12-29",
    dateLabel: "29.12.1985",
    archiveYear: 1985,
    programLabel: "«Песня-85»",
    candidates: [
      {
        artist: "Трио «Меридиан»",
        title: "Прекрасное далёко",
        sources: festivalSources(1985, "29.12.1985", "prekrasnoe-daleko"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Паромщик",
        sources: festivalSources(1985, "29.12.1985", "paromshchik"),
      },
      {
        artist: "Игорь Скляр",
        title: "Комарово",
        sources: festivalSources(1985, "29.12.1985", "komarovo"),
      },
      {
        artist: "Ярослав Евдокимов",
        title: "Майский вальс",
        sources: festivalSources(1985, "29.12.1985", "mayskiy-vals"),
      },
    ],
  },
  {
    chartDate: "1986-08-24",
    dateLabel: "24.08.1986",
    archiveYear: 1986,
    programLabel: "«Утренняя почта»",
    candidates: [
      {
        artist: "Ирина Понаровская",
        title: "Знаю — любил…",
        sources: sources(1986, "24.08.1986", "znayu-lyubil"),
      },
      {
        artist: "ВИА «Самоцветы»",
        title: "Али-баба",
        sources: sources(1986, "24.08.1986", "ali-baba"),
      },
    ],
  },
  {
    chartDate: "1986-11-23",
    dateLabel: "23.11.1986",
    archiveYear: 1986,
    programLabel: "«Утренняя почта»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Балалайка",
        sources: sources(1986, "23.11.1986", "balalaika"),
      },
    ],
  },
  {
    chartDate: "1987-01-01",
    dateLabel: "01.01.1987",
    archiveYear: 1986,
    programLabel: "«Песня-86»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Прости, поверь",
        sources: festivalSources(1986, "01.01.1987", "prosti-pover"),
      },
      {
        artist: "Алла Пугачёва и Владимир Кузьмин",
        title: "Две звезды",
        sources: festivalSources(1986, "01.01.1987", "dve-zvezdy"),
      },
      {
        artist: "София Ротару",
        title: "Луна, луна",
        sources: festivalSources(1986, "01.01.1987", "luna-luna"),
      },
      {
        artist: "София Ротару",
        title: "Лаванда",
        sources: festivalSources(1986, "01.01.1987", "lavanda"),
      },
    ],
  },
  {
    chartDate: "1987-02-22",
    dateLabel: "22.02.1987",
    archiveYear: 1987,
    programLabel: "«Утренняя почта»",
    candidates: [
      {
        artist: "София Ротару",
        title: "Было, но прошло",
        sources: sources(1987, "22.02.1987", "bylo-no-proshlo"),
      },
    ],
  },
  {
    chartDate: "1987-04-18",
    dateLabel: "18.04.1987",
    archiveYear: 1987,
    programLabel: "«Утренняя почта»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Алло",
        sources: sources(1987, "18.04.1987", "allo"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Королева",
        sources: sources(1987, "18.04.1987", "koroleva"),
      },
    ],
  },
  {
    chartDate: "1988-01-01",
    dateLabel: "01.01.1988",
    archiveYear: 1987,
    programLabel: "«Песня-87»",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Белая ворона",
        sources: festivalSources(1987, "01.01.1988", "belaya-vorona"),
      },
      {
        artist: "Валентина Легкоступова",
        title: "Ягода-малина",
        sources: festivalSources(1987, "01.01.1988", "yagoda-malina"),
      },
      {
        artist: "Ольга Зарубина",
        title: "На теплоходе музыка играет",
        sources: festivalSources(1987, "01.01.1988", "na-teplohode"),
      },
      {
        artist: "Игорь Тальков",
        title: "Чистые пруды",
        sources: festivalSources(1987, "01.01.1988", "chistye-prudy"),
      },
    ],
  },
  {
    chartDate: "1989-01-01",
    dateLabel: "01.01.1989",
    archiveYear: 1988,
    programLabel: "«Песня-88»",
    candidates: [
      {
        artist: "Игорь Саруханов",
        title: "Дорогие мои старики",
        sources: festivalSources(1988, "01.01.1989", "dorogie-moi-stariki"),
      },
      {
        artist: "Олег и Родион Газмановы",
        title: "Люси",
        sources: festivalSources(1988, "01.01.1989", "lyusi"),
      },
      {
        artist: "Михаил Муромов",
        title: "Яблоки на снегу",
        sources: festivalSources(1988, "01.01.1989", "yabloki-na-snegu"),
      },
      {
        artist: "Вячеслав Добрынин",
        title: "Синий туман",
        sources: festivalSources(1988, "01.01.1989", "siniy-tuman"),
      },
    ],
  },
  {
    chartDate: "1990-01-01",
    dateLabel: "01.01.1990",
    archiveYear: 1989,
    programLabel: "«Песня-89»",
    candidates: [
      {
        artist: "Игорь Тальков",
        title: "Россия",
        sources: festivalSources(1989, "01.01.1990", "rossiya"),
      },
      {
        artist: "Вячеслав Добрынин",
        title: "Не сыпь мне соль на рану",
        sources: festivalSources(1989, "01.01.1990", "ne-syp-sol"),
      },
      {
        artist: "Александр Малинин",
        title: "Забава",
        sources: festivalSources(1989, "01.01.1990", "zabava"),
      },
      {
        artist: "Мираж",
        title: "Музыка нас связала",
        sources: festivalSources(1989, "01.01.1990", "muzyka-nas-svyazala"),
      },
    ],
  },
  {
    chartDate: "1991-01-01",
    dateLabel: "01.01.1991",
    archiveYear: 1990,
    programLabel: "«Песня-90»",
    candidates: [
      {
        artist: "Наташа Королёва",
        title: "Жёлтые тюльпаны",
        sources: festivalSources(1990, "01.01.1991", "zheltye-tyulpany"),
      },
      {
        artist: "Ирина Шведова",
        title: "Белый вальс",
        sources: festivalSources(1990, "01.01.1991", "belyy-vals"),
      },
      {
        artist: "Игорь Корнелюк",
        title: "Дожди",
        sources: festivalSources(1990, "01.01.1991", "dozhdi"),
      },
      {
        artist: "Любэ",
        title: "Атас",
        sources: festivalSources(1990, "01.01.1991", "atas"),
      },
    ],
  },
  {
    chartDate: "1991-03-15",
    dateLabel: "март 1991",
    archiveYear: 1991,
    programLabel: "«Кругозор» № 3: песни группы «Сталкер»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Андрей Державин и группа «Сталкер»",
        title: "Не плачь, Алиса",
        sources: [
          {
            id: "krugozor-1991-03-derzhavin-catalog",
            label: "Каталог советских пластинок: «Не плачь, Алиса» в мартовском выпуске «Кругозора» 1991 года",
            url: "https://records.su/tag/%D0%A1%D1%82%D0%B0%D0%BB%D0%BA%D0%B5%D1%80",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1991-03-derzhavin-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 3 за март 1991 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201991,%20%b903(324).pdf",
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1991-ne-plach-alisa",
            label: "Архив музыкальной прессы: сверка с популярными песнями 1991 года",
            url: archive1990And1991Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1991-05-28",
    dateLabel: "май 1991 · эфир 28.05.1991",
    archiveYear: 1991,
    programLabel: "телефестиваль «Шлягер-91»",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Лика Стар",
        title: "Я диджей",
        sources: [
          {
            id: "shlyager-1991-lika-star-ya-didzhey-result",
            label: "Биография Лики Стар: «Я диджей» заняла второе место на фестивале «Шлягер-91» в мае 1991 года",
            url: likaStarBiographyUrl,
            kind: "результат телефестиваля",
            rank: 2,
          },
          {
            id: "shlyager-1991-tv-schedule-may-28",
            label: "Телепрограмма: «Шлягер-91» в эфире Ленинградской программы · 28.05.1991",
            url: shlyager1991TvScheduleUrl,
            kind: "датированная телепрограмма",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1991-09-15",
    dateLabel: "сентябрь 1991",
    archiveYear: 1991,
    programLabel: "«Кругозор» № 9: рок-пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ДДТ",
        title: "Пластун",
        sources: [
          {
            id: "krugozor-1991-09-ddt-catalog",
            label: "Каталог выпуска: ДДТ — «Пластун» в «Кругозоре» № 9 за сентябрь 1991 года",
            url: "https://records.su/tag/%D0%94%D0%94%D0%A2",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1991-09-ddt-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 9 за сентябрь 1991 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201991,%20%b909(330).pdf",
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1991-ddt-plastun",
            label: "Архив музыкальной прессы: сверка с песенным контекстом 1991 года",
            url: archive1990And1991Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1991-11-15",
    dateLabel: "ноябрь 1991",
    archiveYear: 1991,
    programLabel: "«Кругозор» № 11: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Филипп Киркоров",
        title: "Небо и земля",
        sources: [
          {
            id: "krugozor-1991-11-kirkorov-catalog",
            label: "Каталог выпуска: Филипп Киркоров — «Небо и земля» в «Кругозоре» № 11 за ноябрь 1991 года",
            url: "https://records.su/image/comment/17423",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1991-11-kirkorov-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 11 за ноябрь 1991 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201991,%20%b911(332).pdf",
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1991-kirkorov-nebo-i-zemlya",
            label: "Архив музыкальной прессы: сверка с популярными песнями 1991 года",
            url: archive1990And1991Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1991-12-15",
    dateLabel: "декабрь 1991",
    archiveYear: 1991,
    programLabel: "«Кругозор» № 12: песенная пластинка",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Марина Хлебникова",
        title: "Рай в шалаше",
        sources: [
          {
            id: "krugozor-1991-12-khlebnikova-catalog",
            label: "Каталог выпуска: Марина Хлебникова — «Рай в шалаше» в «Кругозоре» № 12 за декабрь 1991 года",
            url: "https://records.su/image/comment/17422",
            kind: "месячная звуковая публикация",
          },
          {
            id: "krugozor-1991-12-khlebnikova-scan",
            label: "Независимый библиотечный архив: скан «Кругозора» № 12 за декабрь 1991 года",
            url: "https://publ.lib.ru/ARCHIVES/K/%27%27Krugozor%27%27_%28jurnal%29/%ca%f0%f3%e3%ee%e7%ee%f0,%201991,%20%b912(333).pdf",
            kind: "скан исходного выпуска",
          },
          {
            id: "music-press-1991-khlebnikova-ray-v-shalashe",
            label: "Архив музыкальной прессы: сверка с популярными песнями 1991 года",
            url: archive1990And1991Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1992-01-01",
    dateLabel: "01.01.1992",
    archiveYear: 1991,
    programLabel: "«Песня-91»",
    candidates: [
      {
        artist: "Русские",
        title: "Ну и что",
        sources: festivalSources(1991, "01.01.1992", "nu-i-chto"),
      },
      {
        artist: "Игорь Тальков",
        title: "Я вернусь",
        sources: festivalSources(1991, "01.01.1992", "ya-vernus"),
      },
    ],
  },
  {
    chartDate: "1992-01-04",
    dateLabel: "04.01.1992",
    archiveYear: 1992,
    programLabel: "концерт к 60-летию ГАЗа в Нижнем Новгороде",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "София Ротару",
        title: "Хуторянка",
        sources: monthlyReleaseSources(
          1992,
          "rotaru-khutoryanka-january",
          rotaru1992ChronicleUrl,
          "Концертная хроника Софии Ротару: премьера «Хуторянки» · 04.01.1992",
          "датированная концертная премьера",
        ),
      },
    ],
  },
  {
    chartDate: "1992-02-13",
    dateLabel: "февраль 1992 · опубликовано 13.02.1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Алёна Апина",
        title: "Ксюша",
        sources: precise1992Sources(
          "apina-ksyusha-february",
          apinaDiscography1992Url,
          "«Звуковая дорожка» МК: «Ксюша» в Top 20 Hits за февраль · выпуск 13.02.1992",
          "читательский месячный чарт",
        ),
      },
    ],
  },
  {
    chartDate: "1992-03-06",
    dateLabel: "05–07.03.1992",
    archiveYear: 1992,
    programLabel: "премьера программы «Дельфин и Русалка» в СК «Олимпийский»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Игорь Николаев и Наташа Королёва",
        title: "Такси",
        sources: [
          {
            id: "nikolaev-taxi-program-1992-dates",
            label: "Официальная хроника Игоря Николаева: премьера программы 5–7 марта 1992 года",
            url: nikolaevOfficialChronicleUrl,
            kind: "официальная концертная хроника",
          },
          {
            id: "nikolaev-taxi-program-1992-song",
            label: "Архив Игоря Николаева: «Такси» в программе «Дельфин и Русалка» в СК «Олимпийский»",
            url: nikolaevTaxiProgramUrl,
            kind: "архив выступления",
          },
          {
            id: "annual-popularity-1992-nikolaev-taxi-march",
            label: "Архив музыкальной прессы: песня в списке 1992 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1992-04-15",
    dateLabel: "апрель 1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Богдан Титомир",
        title: "Делай как я",
        sources: precise1992Sources(
          "titomir-do-as-i-do-april",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #1 в Top 20 Hits за апрель 1992",
          "читательский месячный чарт",
          1,
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Девочка в красном",
        sources: precise1992Sources(
          "titomir-girl-in-red-april",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #2 в Top 20 Hits за апрель 1992",
          "читательский месячный чарт",
          2,
        ),
      },
    ],
  },
  {
    chartDate: "1992-05-17",
    dateLabel: "май 1992",
    archiveYear: 1992,
    programLabel: "альбом Алёны Апиной «Улица любви»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алёна Апина",
        title: "Ксюша",
        sources: monthlyReleaseSources(
          1992,
          "apina-ksyusha-may",
          apinaStreetOfLove1992Url,
          "Apple Music: альбом «Улица любви» с песней «Ксюша» · 17.05.1992",
        ),
      },
    ],
  },
  {
    chartDate: "1992-06-15",
    dateLabel: "июнь 1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Богдан Титомир",
        title: "Делай как я",
        sources: precise1992Sources(
          "titomir-do-as-i-do-june",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #2 в Top 20 Hits за июнь 1992",
          "читательский месячный чарт",
          2,
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Девочка в красном",
        sources: precise1992Sources(
          "titomir-girl-in-red-june",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #7 в Top 20 Hits за июнь 1992",
          "читательский месячный чарт",
          7,
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Запорожец",
        sources: precise1992Sources(
          "titomir-zaporozhets-june",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #12 в Top 20 Hits за июнь 1992",
          "читательский месячный чарт",
          12,
        ),
      },
    ],
  },
  {
    chartDate: "1992-07-15",
    dateLabel: "июль 1992",
    archiveYear: 1992,
    programLabel: "альбом Богдана Титомира «Высокая энергия» на виниле и кассетах",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Богдан Титомир",
        title: "Делай как я",
        sources: precise1992Sources(
          "titomir-do-as-i-do-july",
          titomirHighEnergy1992Url,
          "Дискография «Высокой энергии»: винил и кассета с песней вышли в июле 1992",
          "датированный каталог релиза",
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Девочка в красном",
        sources: precise1992Sources(
          "titomir-girl-in-red-july",
          titomirHighEnergy1992Url,
          "Дискография «Высокой энергии»: винил и кассета с песней вышли в июле 1992",
          "датированный каталог релиза",
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Запорожец",
        sources: precise1992Sources(
          "titomir-zaporozhets-july",
          titomirHighEnergy1992Url,
          "Дискография «Высокой энергии»: винил с песней вышел в июле 1992",
          "датированный каталог релиза",
        ),
      },
    ],
  },
  {
    chartDate: "1992-08-15",
    dateLabel: "август 1992",
    archiveYear: 1992,
    programLabel: "магнитоальбом «Мальчишника» «Поговорим о сексе»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Мальчишник",
        title: "Секс без перерыва",
        sources: precise1992Sources(
          "malchishnik-sex-without-break-august",
          malchishnikTalkSex1992Url,
          "Каталог альбома: «Поговорим о сексе» с песней вышел у студии «Звук» в августе 1992",
          "датированный каталог релиза",
        ),
      },
      {
        artist: "Мальчишник",
        title: "Танцы",
        sources: precise1992Sources(
          "malchishnik-dances-august",
          malchishnikTalkSex1992Url,
          "Каталог альбома: «Поговорим о сексе» с песней вышел у студии «Звук» в августе 1992",
          "датированный каталог релиза",
        ),
      },
    ],
  },
  {
    chartDate: "1992-09-25",
    dateLabel: "сентябрь 1992 · опубликовано 25.09.1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Комбинация",
        title: "Два кусочека колбаски",
        sources: precise1992Sources(
          "kombinatsiya-two-slices-september",
          combinationSausage1992Url,
          "«Звуковая дорожка» МК: #1 в Top 20 Hits за сентябрь · выпуск 25.09.1992",
          "читательский месячный чарт",
          1,
        ),
      },
    ],
  },
  {
    chartDate: "1992-10-15",
    dateLabel: "октябрь 1992",
    archiveYear: 1992,
    programLabel: "московский фестиваль кино- и видеоклипов Generation-92",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Наталья Ветлицкая",
        title: "Посмотри в глаза",
        sources: precise1992Sources(
          "vetlitskaya-look-in-eyes-october",
          vetlitskayaLook1992Url,
          "Generation-92: клип «Посмотри в глаза» получил главный приз в октябре 1992",
          "фестивальная награда",
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Запорожец",
        sources: precise1992Sources(
          "titomir-zaporozhets-october",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #4 в Top 20 Hits за октябрь 1992",
          "читательский месячный чарт",
          4,
        ),
      },
    ],
  },
  {
    chartDate: "1992-11-15",
    dateLabel: "ноябрь 1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Богдан Титомир",
        title: "Запорожец",
        sources: precise1992Sources(
          "titomir-zaporozhets-november",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #8 в Top 20 Hits за ноябрь 1992",
          "читательский месячный чарт",
          8,
        ),
      },
      {
        artist: "Богдан Титомир",
        title: "Девочка в красном",
        sources: precise1992Sources(
          "titomir-girl-in-red-november",
          titomirHighEnergy1992Url,
          "«Звуковая дорожка» МК: #19 в Top 20 Hits за ноябрь 1992",
          "читательский месячный чарт",
          19,
        ),
      },
    ],
  },
  {
    chartDate: "1992-12-18",
    dateLabel: "декабрь 1992 · опубликовано 18.12.1992",
    archiveYear: 1992,
    programLabel: "Top 20 Hits «Звуковой дорожки» МК",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Алёна Апина",
        title: "Лёха",
        sources: precise1992Sources(
          "apina-lyokha-december",
          apinaDiscography1992Url,
          "«Звуковая дорожка» МК: «Лёха» в Top 20 Hits за декабрь · выпуск 18.12.1992",
          "читательский месячный чарт",
        ),
      },
    ],
  },
  {
    chartDate: "1993-01-01",
    dateLabel: "01.01.1993",
    archiveYear: 1992,
    programLabel: "«Хит-парад Останкино»",
    candidates: [
      {
        artist: "Филипп Киркоров",
        title: "Атлантида",
        sources: festivalSources(1992, "01.01.1993", "atlantida"),
      },
      {
        artist: "Олег Газманов",
        title: "Офицеры",
        sources: festivalSources(1992, "01.01.1993", "ofitsery"),
      },
      {
        artist: "София Ротару",
        title: "Хуторянка",
        sources: festivalSources(1992, "01.01.1993", "khutoryanka"),
      },
      {
        artist: "Игорь Николаев и Наташа Королёва",
        title: "Такси",
        sources: festivalSources(1992, "01.01.1993", "taksi"),
      },
    ],
  },
  {
    chartDate: "1993-02-21",
    dateLabel: "21.02.1993",
    archiveYear: 1993,
    programLabel: "«Утренняя звезда в ночном эфире»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Игорь Корнелюк",
        title: "Ничего не поделать",
        sources: [
          {
            id: "morning-star-1993-02-21-korneluk-nothing-to-do",
            label: "«Старый телевизор»: Игорь Корнелюк — «Ничего не поделать» в эфире 21.02.1993",
            url: "https://staroetv.su/video/57146-utrennyaya-zvezda-v-nochnom-efire-1--",
            kind: "датированный видеоархив",
          },
          {
            id: "korneluk-official-nothing-to-do-song-93",
            label: "Официальный сайт Игоря Корнелюка: песня звучала в выпусках «Песни-93»",
            url: "https://igorkorneluk.com/portfolio-item/ya-ne-mogu-tak-zhit",
            kind: "официальная дискография",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1993-03-08",
    dateLabel: "08.03.1993",
    archiveYear: 1993,
    programLabel: "«Счастливый случай»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Леонид Агутин",
        title: "Босоногий мальчик",
        sources: monthlyReleaseSources(
          1993,
          "agutin-barefoot-boy-march",
          agutinBarefootBoy1993TvUrl,
          "Телеархив: Леонид Агутин исполнил «Босоногого мальчика» в программе «Счастливый случай» 08.03.1993",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1993-04-15",
    dateLabel: "апрель 1993",
    archiveYear: 1993,
    programLabel: "«Музыкальный Олимп» ТАСС: продажи магнитоальбомов",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Мальчишник",
        title: "Секс без перерыва",
        sources: monthlyReleaseSources(
          1993,
          "malchishnik-sex-without-break-april",
          malchishnikTalkSex1992Url,
          "«Музыкальный Олимп» ТАСС: альбом «Поговорим о сексе» — № 2 по продажам магнитоальбомов в апреле 1993 года",
          "месячный чарт продаж",
        ),
      },
    ],
  },
  {
    chartDate: "1993-05-04",
    dateLabel: "04.05.1993",
    archiveYear: 1993,
    programLabel: "10-летие Nautilus Pompilius в ДК Горбунова",
    anchorKind: "концертная запись",
    candidates: [
      {
        artist: "Nautilus Pompilius",
        title: "Прогулки по воде",
        sources: [
          {
            id: "nautilus-1993-05-04-walks-concert",
            label: "Архив концерта: «Прогулки по воде» в программе 10-летия Nautilus Pompilius 04.05.1993",
            url: nautilusAnniversary1993Url,
            kind: "датированный концертный трек-лист",
          },
          {
            id: "nautilus-1993-05-04-walks-video",
            label: "Видеоархив группы: концертная запись «Прогулок по воде» с Юрием Шевчуком сделана 04.05.1993",
            url: nautilusVideoArchive1993Url,
            kind: "архив точной концертной версии",
          },
          {
            id: "nautilus-walks-1993-year-list",
            label: "Архив музыкальной прессы: «Прогулки по воде» в списке популярных песен 1993 года",
            url: archive1992To2000Url,
            kind: "годовой архив популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1993-06-29",
    dateLabel: "29.06.1993",
    archiveYear: 1993,
    programLabel: "альбом «Библиотека Вавилона»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Аквариум",
        title: "Меня зовут Смерть",
        sources: [
          {
            id: "aquarium-babylon-library-1993-06-29-apple",
            label: "Apple Music: «Меня зовут Смерть» на альбоме от 29.06.1993",
            url: "https://music.apple.com/ru/song/1804941019",
            kind: "датированный каталог релиза",
          },
          {
            id: "aquarium-babylon-library-1993-06-29-official",
            label: "Архив «Аквариума»: альбом выпущен 29.06.1993, песня указана в трек-листе",
            url: "https://bg-aquarium.com/ru/album/biblioteka-vavilona-istoriya-akvariuma-tom-iv",
            kind: "архив группы и точный трек-лист",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1993-07-26",
    dateLabel: "июль 1993",
    archiveYear: 1993,
    programLabel: "альбом «Агаты Кристи» «Позорная звезда»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Агата Кристи",
        title: "Как на войне",
        sources: monthlyReleaseSources(
          1993,
          "agatha-kak-na-voyne-july",
          agathaPozornayaZvezda1993Url,
          "Apple Music: альбом «Позорная звезда» с песней «Как на войне» · 26.07.1993",
        ),
      },
    ],
  },
  {
    chartDate: "1993-08-12",
    dateLabel: "12.08.1993",
    archiveYear: 1993,
    programLabel: "«Акустический концерт '93»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Игры",
        title: "Солнце встаёт!",
        sources: [
          {
            id: "igry-acoustic-1993-08-12-apple",
            label: "Apple Music: концертная запись «Солнце встаёт!» от 12.08.1993",
            url: "https://music.apple.com/ru/song/1767549209",
            kind: "датированный каталог концертной записи",
          },
          {
            id: "igry-acoustic-1993-08-12-amazon",
            label: "Amazon Music: альбом от 12.08.1993 и точный трек-лист концерта",
            url: "https://music.amazon.co.uk/albums/B0DGL72KZD",
            kind: "независимый каталог концертной записи",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1993-09-15",
    dateLabel: "15.09.1993",
    archiveYear: 1993,
    programLabel: "альбом «Мальчик мой»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Светлана Владимирская",
        title: "Мальчик мой",
        sources: [
          {
            id: "vladimirskaya-my-boy-1993-09-15-apple",
            label: "Apple Music: альбом «Мальчик мой» от 15.09.1993",
            url: "https://music.apple.com/us/song/1881378264",
            kind: "датированный каталог релиза",
          },
          {
            id: "vladimirskaya-my-boy-1993-09-15-amazon",
            label: "Amazon Music: альбом от 15.09.1993 и заглавная песня в трек-листе",
            url: "https://music.amazon.com.au/albums/B0GP1VTCQG",
            kind: "независимый каталог релиза",
          },
          {
            id: "vladimirskaya-my-boy-hit-history",
            label: "Maschina Records: заглавная композиция стала суперхитом и возглавляла чарты",
            url: "https://maschinarecords.com/collection/svetlana-vladimirskaya",
            kind: "история популярности",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1993-10-15",
    dateLabel: "октябрь 1993",
    archiveYear: 1993,
    programLabel: "«Музыкальный Олимп» ТАСС: продажи CD",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Владимир Пресняков",
        title: "Замок из дождя",
        sources: monthlyReleaseSources(
          1993,
          "presnyakov-rain-castle-october",
          presnyakovBiography1993Url,
          "«Музыкальный Олимп» ТАСС: сборник «Стюардесса по имени…» с песней — № 1 по продажам CD в октябре 1993 года",
          "месячный чарт продаж",
        ),
      },
    ],
  },
  {
    chartDate: "1993-11-26",
    dateLabel: "26–28.11.1993",
    archiveYear: 1993,
    programLabel: "презентация альбома Алёны Апиной «Танцевать до утра»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Алёна Апина",
        title: "Всё так не просто",
        sources: monthlyReleaseSources(
          1993,
          "apina-not-so-simple-november",
          apinaDancingUntilMorning1993Url,
          "История альбома: концертная презентация прошла 26–28.11.1993; песня входит в трек-лист и стала лауреатом «Песни-93»",
          "датированная концертная презентация",
        ),
      },
    ],
  },
  {
    chartDate: "1993-12-25",
    dateLabel: "25.12.1993",
    archiveYear: 1993,
    programLabel: "финальный концерт «Песня-93» в Кремлёвском дворце",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Анжелика Варум",
        title: "Ля-ля-фа",
        sources: monthlyReleaseSources(
          1993,
          "varum-lya-lya-fa-december",
          song1993FinalUrl,
          "«Песня-93»: «Ля-ля-фа» в программе концерта 25.12.1993",
          "датированный фестивальный концерт",
        ),
      },
      {
        artist: "Лада Дэнс",
        title: "Ночь",
        sources: monthlyReleaseSources(
          1993,
          "lada-dance-noch-december",
          song1993FinalUrl,
          "«Песня-93»: «Ночь» в программе концерта 25.12.1993",
          "датированный фестивальный концерт",
        ),
      },
      {
        artist: "Алёна Свиридова",
        title: "Просто кончилась зима",
        sources: monthlyReleaseSources(
          1993,
          "sviridova-zima-december",
          song1993FinalUrl,
          "«Песня-93»: «Просто кончилась зима» в программе концерта 25.12.1993",
          "датированный фестивальный концерт",
        ),
      },
      {
        artist: "Алла Пугачёва",
        title: "Осенний поцелуй",
        sources: monthlyReleaseSources(
          1993,
          "pugacheva-osenniy-potseluy-december",
          song1993FinalUrl,
          "«Песня-93»: «Осенний поцелуй» в программе концерта 25.12.1993",
          "датированный фестивальный концерт",
        ),
      },
    ],
  },
  {
    chartDate: "1994-01-01",
    dateLabel: "01.01.1994",
    archiveYear: 1993,
    programLabel: "«Песня-93»",
    candidates: [
      {
        artist: "Анжелика Варум",
        title: "Ля-ля-фа",
        sources: festivalSources(1993, "01.01.1994", "lya-lya-fa"),
      },
      {
        artist: "Лада Дэнс",
        title: "Ночь",
        sources: festivalSources(1993, "01.01.1994", "noch"),
      },
      {
        artist: "Алёна Свиридова",
        title: "Просто кончилась зима",
        sources: festivalSources(1993, "01.01.1994", "prosto-konchilas-zima"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Осенний поцелуй",
        sources: festivalSources(1993, "01.01.1994", "osenniy-potseluy"),
      },
    ],
  },
  {
    chartDate: "1994-02-09",
    dateLabel: "09.02.1994",
    archiveYear: 1994,
    programLabel: "отборочный эфир «Песни-94»",
    candidates: [
      {
        artist: "Алёна Апина",
        title: "Дружочек",
        sources: monthlyReleaseSources(
          1994,
          "apina-druzhochek-february",
          apinaDruzhochek1994TvUrl,
          "Архив выступления: Алёна Апина — «Дружочек», эфир «Песни года» 09.02.1994",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1994-03-15",
    dateLabel: "15.03.1994",
    archiveYear: 1994,
    programLabel: "мартовский выпуск «Песни-94»",
    anchorKind: "телевизионный эфир",
    candidates: [
      {
        artist: "Леонид Агутин",
        title: "Хоп-хей, ла-ла-лей",
        sources: song1994IntermediateSources(
          "agutin-hop-hey-march",
          "Леонид Агутин — «Хоп-хей, ла-ла-лей»",
          "мартовском выпуске 1994 года",
          song1994MarchArchiveUrl,
        ),
      },
      {
        artist: "Анжелика Варум",
        title: "Городок",
        sources: song1994IntermediateSources(
          "varum-gorodok-march",
          "Анжелика Варум — «Городок»",
          "мартовском выпуске 1994 года",
          song1994MarchArchiveUrl,
        ),
      },
      {
        artist: "Лев Лещенко",
        title: "Сердце не камень",
        sources: song1994IntermediateSources(
          "leshchenko-heart-march",
          "Лев Лещенко — «Сердце не камень»",
          "мартовском выпуске 1994 года",
          song1994MarchArchiveUrl,
        ),
      },
      {
        artist: "Наташа Королёва",
        title: "Поклонник",
        sources: song1994IntermediateSources(
          "koroleva-admirer-march",
          "Наташа Королёва — «Поклонник»",
          "мартовском выпуске 1994 года",
          song1994MarchArchiveUrl,
        ),
      },
    ],
  },
  {
    chartDate: "1994-04-28",
    dateLabel: "апрель 1994",
    archiveYear: 1994,
    programLabel: "альбом Nautilus Pompilius «Титаник»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Nautilus Pompilius",
        title: "Тутанхамон",
        sources: monthlyReleaseSources(
          1994,
          "nautilus-tutankhamun-april",
          nautilusTitanic1994Url,
          "История альбома: «Титаник» с песней «Тутанхамон» издан 28.04.1994",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1994-05-17",
    dateLabel: "май 1994",
    archiveYear: 1994,
    programLabel: "майский выпуск «Песни-94»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Наталья Сенчукова",
        title: "Колокольчик",
        sources: [
          {
            id: "song-1994-05-senchukova-bell-broadcast",
            label: "Видеоархив майского выпуска «Песни-94» с Натальей Сенчуковой · 17.05.1994",
            url: song1994MayArchiveUrl,
            kind: "датированный телеэфир",
          },
          {
            id: "song-1994-05-senchukova-bell-program",
            label: "Архив программы: «Колокольчик» указан в майском выпуске «Песни-94»",
            url: song1994IntermediateEpisodesUrl,
            kind: "архив программы",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1994-06-01",
    dateLabel: "июнь 1994",
    archiveYear: 1994,
    programLabel: "альбом группы «Пикник» «Немного огня»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Пикник",
        title: "Немного огня",
        sources: monthlyReleaseSources(1994, "piknik-nemnogo-ognya-june", "https://music.apple.com/us/album/%D0%BD%D0%B5%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D0%B3%D0%BD%D1%8F/1794646968", "Apple Music: альбом «Немного огня» · 01.06.1994"),
      },
    ],
  },
  {
    chartDate: "1994-07-09",
    dateLabel: "июль 1994",
    archiveYear: 1994,
    programLabel: "«Утренняя почта»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Наташа Королёва",
        title: "Поклонник",
        sources: [
          { id: "morning-mail-1994-07-09-koroleva", label: "«Старый телевизор»: Наташа Королёва в выпуске «Утренней почты» от 09.07.1994", url: "https://staroetv.su/video/13216-utrennyaya-pochta-1-y-kanal-09-07-1994", kind: "датированный телевизионный эфир" },
          { id: "song-1994-final-koroleva-admirer-july", label: "Телеканал «Время»: «Поклонник» Наташи Королёвой в итоговой программе «Песни-94»", url: song1994OfficialProgramUrl, kind: "архив итоговой телепрограммы" },
          { id: "annual-popularity-1994-koroleva-admirer-july", label: "Архив музыкальной прессы: песня в списке популярных композиций 1994 года", url: archive1992To2000Url, kind: "годовой архив популярности" },
        ],
      },
    ],
  },
  {
    chartDate: "1994-08-27",
    dateLabel: "27.08.1994",
    archiveYear: 1994,
    programLabel: "«Утренняя почта»",
    candidates: [
      {
        artist: "Любэ",
        title: "Дорога",
        sources: [
          {
            id: "morning-mail-1994-08-27-lyube",
            label: "Видеоархив «Утренней почты»: выпуск с группой «Любэ» · 27.08.1994",
            url: lyubeMorningMail1994ArchiveUrl,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "morning-mail-1994-doroga-video",
            label: "Архив выступления: «Любэ» — «Дорога» в «Утренней почте» 1994 года",
            url: lyubeDoroga1994VideoUrl,
            kind: "архив выступления",
          },
          {
            id: "annual-popularity-1994-lyube-doroga-august",
            label: "Архив музыкальной прессы: песня в списке 1994 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1994-09-15",
    dateLabel: "сентябрь 1994",
    archiveYear: 1994,
    programLabel: "сентябрьский отборочный эфир «Песни-94»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Татьяна Буланова",
        title: "Колыбельная",
        sources: monthlyReleaseSources(
          1994,
          "bulanova-kolybelnaya-september",
          bulanovaLullabySeptember1994Url,
          "Видеоархив: Татьяна Буланова — «Колыбельная», сентябрьский выпуск «Песни-94»",
          "архив телевизионного эфира",
        ),
      },
    ],
  },
  {
    // Архив фиксирует месяц выпуска, но не точный день: 15-е число —
    // технический центр месяца и не показывается пользователю как день эфира.
    chartDate: "1994-10-15",
    dateLabel: "октябрь 1994",
    archiveYear: 1994,
    programLabel: "октябрьский выпуск «Песни-94»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Вадим Казаченко",
        title: "На летящем коне",
        sources: song1994IntermediateSources(
          "kazachenko-flying-horse-october",
          "Вадим Казаченко — «На летящем коне»",
          "октябрьском выпуске 1994 года",
        ),
      },
      {
        artist: "София Ротару",
        title: "Мотылёк",
        sources: song1994IntermediateSources(
          "rotaru-moth-october",
          "София Ротару — «Мотылёк»",
          "октябрьском выпуске 1994 года",
        ),
      },
    ],
  },
  {
    // Архив фиксирует ноябрьский выпуск, но не точный день: 15-е число —
    // технический центр месяца и не показывается пользователю как дата эфира.
    chartDate: "1994-11-15",
    dateLabel: "ноябрь 1994",
    archiveYear: 1994,
    programLabel: "ноябрьский выпуск «Песни-94»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Наталья Ветлицкая",
        title: "Магадан",
        sources: [
          {
            id: "song-1994-11-vetlitskaya-magadan-program",
            label: "Архив программы: «Магадан» указан в ноябрьском выпуске «Песни-94»",
            url: song1994IntermediateEpisodesUrl,
            kind: "архив программы",
          },
          {
            id: "song-1994-vetlitskaya-magadan-video",
            label: "Видеоархив выступления: Наталья Ветлицкая — «Магадан» в «Песне-94»",
            url: vetlitskayaMagadan1994VideoUrl,
            kind: "архив выступления",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1994-12-06",
    dateLabel: "декабрь 1994",
    archiveYear: 1994,
    programLabel: "декабрьский выпуск «Песни-94»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Татьяна Овсиенко",
        title: "Давай оставим всё как есть",
        sources: [
          { id: "song-1994-12-06-ovsienko-davay", label: "Видеоархив: Татьяна Овсиенко — «Давай оставим всё как есть», «Песня-94» · 06.12.1994", url: "https://m.ok.ru/video/321741590921", kind: "датированный телевизионный эфир" },
          { id: "song-1994-12-06-staroetv-cast", label: "«Старый телевизор»: выпуск «Песни-94» от 06.12.1994 с Татьяной Овсиенко", url: "https://staroetv.su/video/programs?category=music&month=12&sort=older&year=1994", kind: "датированный видеоархив" },
        ],
      },
    ],
  },
  {
    chartDate: "1995-01-01",
    dateLabel: "01.01.1995",
    archiveYear: 1994,
    programLabel: "«Песня-94»",
    candidates: [
      {
        artist: "Любэ",
        title: "Дорога",
        sources: festivalSources(1994, "01.01.1995", "doroga"),
      },
      {
        artist: "Анжелика Варум",
        title: "Городок",
        sources: festivalSources(1994, "01.01.1995", "gorodok"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Любовь, похожая на сон",
        sources: festivalSources(1994, "01.01.1995", "lyubov-pokhozhaya-na-son"),
      },
      {
        artist: "Алёна Апина",
        title: "Дружочек",
        sources: festivalSources(1994, "01.01.1995", "druzhochek"),
      },
    ],
  },
  {
    chartDate: "1995-01-23",
    dateLabel: "январь 1995",
    archiveYear: 1995,
    programLabel: "альбом «Агаты Кристи» «Опиум»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Агата Кристи",
        title: "Опиум для никого",
        sources: monthlyReleaseSources(
          1995,
          "agatha-opium-for-nobody-january",
          agathaOpium1995Url,
          "История альбома: «Опиум» выпущен 23.01.1995; «Опиум для никого» — одна из его главных песен",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1995-02-01",
    dateLabel: "февраль 1995",
    archiveYear: 1995,
    programLabel: "запись и клип «Серые глаза»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Салтыкова",
        title: "Серые глаза",
        sources: monthlyReleaseSources(
          1995,
          "saltykova-grey-eyes-february",
          saltykovaBiographyUrl,
          "Биография Ирины Салтыковой: песня и клип «Серые глаза» записаны 01.02.1995, через две недели клип вошёл в телеэфир",
          "датированная запись и телепремьера",
        ),
      },
    ],
  },
  {
    chartDate: "1995-03-12",
    dateLabel: "12.03.1995",
    archiveYear: 1995,
    programLabel: "альбом Валерия Меладзе «Сэра»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Меладзе",
        title: "Сэра",
        sources: monthlyReleaseSources(
          1995,
          "meladze-sera-march",
          meladzeSera1995Url,
          "Дискография: альбом «Сэра» с заглавной песней вышел 12.03.1995",
          "датированный релиз альбома",
        ),
      },
      {
        artist: "Валерий Меладзе",
        title: "Ночь накануне Рождества",
        sources: monthlyReleaseSources(
          1995,
          "meladze-christmas-eve-march",
          meladzeSera1995Url,
          "Дискография: «Ночь накануне Рождества» вошла в альбом «Сэра», выпущенный 12.03.1995",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1995-04-05",
    dateLabel: "05.04.1995",
    archiveYear: 1995,
    programLabel: "промежуточный выпуск «Песни-95»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Наталья Ветлицкая",
        title: "Лунный кот",
        sources: monthlyReleaseSources(
          1995,
          "vetlitskaya-lunny-kot-april",
          "https://staroetv.su/video/6311",
          "Видеоархив: Наталья Ветлицкая среди участников выпуска «Песни-95» от 05.04.1995",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1995-05-07",
    dateLabel: "май 1995",
    archiveYear: 1995,
    programLabel: "радиопремьера песни «Комбат»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Любэ",
        title: "Комбат",
        sources: monthlyReleaseSources(
          1995,
          "lyube-kombat-may",
          lyubeKombatPremiere1995Url,
          "История группы «Любэ»: «Комбат» записан и впервые прозвучал в эфире 07.05.1995",
          "датированная радиопремьера",
        ),
      },
    ],
  },
  {
    chartDate: "1995-05-18",
    dateLabel: "13–21.05.1995",
    archiveYear: 1995,
    programLabel: "недельные хит-парады InterMedia / «Музыкальная правда»",
    anchorKind: "недельный чарт",
    periodStart: "1995-05-13",
    periodEnd: "1995-05-21",
    candidates: [
      {
        artist: "Владимир Пресняков",
        title: "Маша",
        sources: [
          {
            id: "intermedia-delovaya-volna-1995-05-masha",
            label: "«Деловая волна»: #4 по звонкам слушателей · 13–19.05.1995",
            url: "https://www.newlookmedia.ru/?p=13169",
            kind: "звонки слушателей",
            rank: 4,
          },
          {
            id: "muzoboz-readers-1995-podruzhka-masha",
            label: "Читательский хит-парад «МузОБОЗа»: #1, зима–весна 1995",
            url: "https://www.newlookmedia.ru/?p=12943",
            kind: "читательский хит-парад",
            rank: 1,
          },
        ],
      },
      {
        artist: "Браво",
        title: "Дорога в облака",
        sources: [
          {
            id: "intermedia-radio-rocks-1995-05-doroga-v-oblaka",
            label: "Радио Рокс: #4 по звонкам слушателей · 15–21.05.1995",
            url: "https://www.newlookmedia.ru/?p=13169",
            kind: "звонки слушателей",
            rank: 4,
          },
          {
            id: "muzoboz-readers-1995-doroga-v-oblaka",
            label: "Читательский хит-парад «МузОБОЗа»: #3, зима–весна 1995",
            url: "https://www.newlookmedia.ru/?p=12943",
            kind: "читательский хит-парад",
            rank: 3,
          },
        ],
      },
      {
        artist: "Алёна Апина",
        title: "Узелки",
        sources: [
          {
            id: "intermedia-delovaya-volna-1995-05-uzelki",
            label: "«Деловая волна»: #6 по звонкам слушателей · 13–19.05.1995",
            url: "https://www.newlookmedia.ru/?p=13169",
            kind: "звонки слушателей",
            rank: 6,
          },
          {
            id: "muzoboz-readers-1995-uzelki",
            label: "Читательский хит-парад «МузОБОЗа»: #7, зима–весна 1995",
            url: "https://www.newlookmedia.ru/?p=12943",
            kind: "читательский хит-парад",
            rank: 7,
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Любовь, похожая на сон",
        sources: [
          {
            id: "intermedia-delovaya-volna-1995-05-lyubov",
            label: "«Деловая волна»: #3 по звонкам слушателей · 13–19.05.1995",
            url: "https://www.newlookmedia.ru/?p=13169",
            kind: "звонки слушателей",
            rank: 3,
          },
          {
            id: "pesnya-94-lyubov-pokhozhaya-na-son",
            label: "Финал «Песни-94»: песня вошла в телевизионную программу года",
            url: archive1992To2000Url,
            kind: "годовой телеархив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1995-06-25",
    dateLabel: "25.06.1995",
    archiveYear: 1995,
    programLabel: "концерт ДДТ на стадионе «Петровский»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "ДДТ",
        title: "Это всё",
        sources: monthlyReleaseSources(
          1995,
          "ddt-eto-vsyo-petrovskiy-june",
          "https://www.ernu.ro/rock-in-urss/ddt/",
          "История группы: 25.06.1995 ДДТ дала многотысячный сольный концерт на стадионе «Петровский»",
          "датированный концерт",
        ),
      },
    ],
  },
  {
    chartDate: "1995-07-12",
    dateLabel: "12.07.1995",
    archiveYear: 1995,
    programLabel: "симфонический концерт Nautilus Pompilius",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Наутилус Помпилиус",
        title: "Крылья",
        sources: monthlyReleaseSources(
          1995,
          "nautilus-krylya-july",
          nautilusKrylyaConcert1995Url,
          "История альбома: «Крылья» исполнена с Санкт-Петербургским симфоническим оркестром 12.07.1995",
          "датированный концерт",
        ),
      },
    ],
  },
  {
    chartDate: "1995-08-15",
    dateLabel: "август 1995",
    archiveYear: 1995,
    programLabel: "радиорелиз сингла «Крылья»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Наутилус Помпилиус",
        title: "Крылья",
        sources: monthlyReleaseSources(
          1995,
          "nautilus-krylya-radio-single-august",
          nautilusKrylyaConcert1995Url,
          "История альбома: одноимённый сингл выпущен для ротации на «Европе Плюс» в августе 1995 года",
          "месячный радиорелиз",
        ),
      },
    ],
  },
  {
    chartDate: "1995-09-17",
    dateLabel: "сентябрь 1995",
    archiveYear: 1995,
    programLabel: "телепремьера клипа «Круг от руки» в «Горячей десятке»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Линда",
        title: "Круг от руки",
        sources: [
          {
            id: "linda-freehand-circle-tv-premiere-1995-09-17",
            label: "История песни: клип впервые показан на РТР в «Горячей десятке» 17.09.1995",
            url: lindaFreehandCircle1995Url,
            kind: "датированная телепремьера",
          },
          {
            id: "linda-freehand-circle-awards-1995",
            label: "История альбома «Ворона»: первый сингл получил несколько российских музыкальных наград",
            url: lindaCrowAlbumUrl,
            kind: "независимая проверка популярности",
          },
          {
            id: "music-press-1995-linda-freehand-circle",
            label: "Архив музыкальной прессы: сверка с итогами 1995 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1995-10-15",
    dateLabel: "октябрь 1995",
    archiveYear: 1995,
    programLabel: "московская презентация альбома «Крылья»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Наутилус Помпилиус",
        title: "Крылья",
        sources: monthlyReleaseSources(
          1995,
          "nautilus-krylya-october",
          nautilusKrylyaConcert1995Url,
          "История альбома: московская презентация «Крыльев» была назначена на конец октября 1995 года",
          "датированная презентация альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1995-11-19",
    dateLabel: "19.11.1995",
    archiveYear: 1995,
    programLabel: "промежуточный выпуск «Песни-95»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Мэри",
        sources: monthlyReleaseSources(
          1995,
          "pugacheva-mary-november",
          "https://staroetv.su/video/programs?category=music&sort=newer&year=1995",
          "Видеоархив: Алла Пугачёва среди участников выпуска «Песни-95» от 19.11.1995",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1995-12-15",
    dateLabel: "декабрь 1995",
    archiveYear: 1995,
    programLabel: "«Горячая десятка» РТР",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Валерий Меладзе",
        title: "Ночь накануне Рождества",
        sources: [
          {
            id: "hot-ten-1995-12-meladze-christmas-eve",
            label: "«Горячая десятка» РТР: Валерий Меладзе — «Ночь накануне Рождества», № 1 за декабрь 1995 года",
            url: hotTenDecember1995Url,
            kind: "месячный телевизионный хит-парад",
            rank: 1,
          },
          {
            id: "music-press-1995-meladze-christmas-eve",
            label: "Архив музыкальной прессы: песня в списке популярных записей 1995 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1996-01-01",
    dateLabel: "01.01.1996",
    archiveYear: 1995,
    programLabel: "«Песня-95»",
    candidates: [
      {
        artist: "Валерий Меладзе",
        title: "Сэра",
        sources: festivalSources(1995, "01.01.1996", "sera"),
      },
      {
        artist: "Андрей Губин",
        title: "Мальчик-бродяга",
        sources: festivalSources(1995, "01.01.1996", "malchik-brodyaga"),
      },
      {
        artist: "A’Studio",
        title: "Нелюбимая",
        sources: festivalSources(1995, "01.01.1996", "nelyubimaya"),
      },
      {
        artist: "Игорь Николаев",
        title: "Выпьем за любовь",
        sources: festivalSources(1995, "01.01.1996", "vypem-za-lyubov"),
      },
    ],
  },
  {
    chartDate: "1996-02-07",
    dateLabel: "04–10.02.1996",
    archiveYear: 1996,
    programLabel: "недельные хит-парады радиостанций / «Музыкальная правда»",
    anchorKind: "недельный чарт",
    periodStart: "1996-02-04",
    periodEnd: "1996-02-10",
    candidates: [
      {
        artist: "Наутилус Помпилиус",
        title: "Дыхание",
        sources: [
          {
            id: "europa-plus-1996-02-dykhanie",
            label: "«Европа Плюс», «Большой парад»: #1 по звонкам слушателей",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "звонки слушателей",
            rank: 1,
          },
        ],
      },
      {
        artist: "Браво",
        title: "Этот город",
        sources: [
          {
            id: "europa-plus-1996-02-etot-gorod",
            label: "«Европа Плюс», «Большой парад»: #7 по звонкам слушателей",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "звонки слушателей",
            rank: 7,
          },
          {
            id: "unimax-1996-02-etot-gorod",
            label: "Радио Unimax, Воронеж: #2 · 04–10.02.1996",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "региональный хит-парад",
            rank: 2,
          },
        ],
      },
      {
        artist: "Надежда Кадышева и ансамбль «Золотое кольцо»",
        title: "Течёт ручей",
        sources: [
          {
            id: "unimax-1996-02-techet-ruchey",
            label: "Радио Unimax, Воронеж: #1 · 04–10.02.1996",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "региональный хит-парад",
            rank: 1,
          },
          {
            id: "golden-gramophone-1996-techet-ruchey",
            label: "«Золотой граммофон — 1996»: лауреат года",
            url: archive1992To2000Url,
            kind: "годовая премия",
          },
        ],
      },
      {
        artist: "Алла Пугачёва",
        title: "Мэри",
        sources: [
          {
            id: "europa-plus-1996-02-mary",
            label: "«Европа Плюс», «Большой парад»: #6 по звонкам слушателей",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "звонки слушателей",
            rank: 6,
          },
          {
            id: "unimax-1996-02-mary",
            label: "Радио Unimax, Воронеж: #9 · 04–10.02.1996",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "региональный хит-парад",
            rank: 9,
          },
        ],
      },
      {
        artist: "Агата Кристи",
        title: "Дворник",
        sources: [
          {
            id: "maximum-1996-02-dvornik",
            label: "Радио Maximum: #6 по звонкам слушателей",
            url: "https://www.newlookmedia.ru/?p=3452",
            kind: "звонки слушателей",
            rank: 6,
          },
        ],
      },
    ],
  },
  {
    chartDate: "1996-03-30",
    dateLabel: "март 1996",
    archiveYear: 1996,
    programLabel: "альбом Ирины Аллегровой «Я тучи разведу руками…»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Ирина Аллегрова",
        title: "Я тучи разведу руками",
        sources: monthlyReleaseSources(1996, "allegrova-clouds-march", "https://music.apple.com/us/album/%D1%8F-%D1%82%D1%83%D1%87%D0%B8-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D0%B4%D1%83-%D1%80%D1%83%D0%BA%D0%B0%D0%BC%D0%B8/1559027684", "Apple Music: альбом «Я тучи разведу руками…» · 30.03.1996"),
      },
    ],
  },
  {
    chartDate: "1996-04-16",
    dateLabel: "апрель 1996",
    archiveYear: 1996,
    programLabel: "музыкальный эфир ОРТ",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Наташа Королёва",
        title: "Маленькая страна",
        sources: monthlyReleaseSources(1996, "koroleva-little-country-april", "https://staroetv.su/video/programs?category=music&month=4&year=1996", "«Старый телевизор»: «Маленькая страна» в эфире ОРТ · 16.04.1996", "датированный телевизионный эфир"),
      },
    ],
  },
  {
    chartDate: "1996-05-23",
    dateLabel: "май 1996",
    archiveYear: 1996,
    programLabel: "альбом «Иванушек International» «Конечно он»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Иванушки International",
        title: "Где-то",
        sources: monthlyReleaseSources(
          1996,
          "ivanushki-gde-to-may",
          ivanushkiKonechnoOn1996Url,
          "Apple Music: альбом «Конечно он» с песней «Где-то» · 23.05.1996",
        ),
      },
    ],
  },
  {
    chartDate: "1996-06-09",
    dateLabel: "09.06.1996",
    archiveYear: 1996,
    programLabel: "«Песня-96»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Надежда Бабкина и ансамбль «Русская песня»",
        title: "Конь вороной",
        sources: [
          {
            id: "song-1996-babkina-black-horse-june-09",
            label: "Видеоархив ОРТ: Надежда Бабкина, «Конь вороной» в выпуске «Песни-96» от 09.06.1996",
            url: song1996BabkinaJuneUrl,
            kind: "датированный телеэфир и точная версия",
          },
          {
            id: "song-1996-babkina-black-horse-finalist",
            label: "«Песня-96»: «Конь вороной» Надежды Бабкиной среди лауреатов года",
            url: song1996Url,
            kind: "телефестиваль и годовая популярность",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1996-07-19",
    dateLabel: "18–19.07.1996",
    archiveYear: 1996,
    programLabel: "съёмки клипа «Ясный мой свет»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Татьяна Буланова",
        title: "Ясный мой свет",
        sources: monthlyReleaseSources(
          1996,
          "bulanova-yasnyy-moy-svet-july",
          bulanovaClearLightJuly1996Url,
          "«Музыкальная правда»: клип «Ясный мой свет» снимали 18–19.07.1996",
          "современная музыкальная пресса",
        ),
      },
    ],
  },
  {
    // Архивная карточка даёт только месяц чарта; 15-е — технический центр.
    chartDate: "1996-08-15",
    dateLabel: "август 1996",
    archiveYear: 1996,
    programLabel: "«Горячая десятка» РТР",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Алёна Свиридова",
        title: "Бедная овечка",
        sources: [
          {
            id: "hot-ten-1996-08-sviridova-poor-sheep",
            label: "«Горячая десятка» РТР: Алёна Свиридова, «Овечка» — № 1 за август 1996 года",
            url: hotTenSviridovaAugust1996Url,
            kind: "месячный телевизионный хит-парад",
            rank: 1,
          },
          {
            id: "song-1996-sviridova-poor-sheep-finalist",
            label: "«Песня-96»: «Бедная овечка» Алёны Свиридовой среди лауреатов года",
            url: song1996Url,
            kind: "телефестиваль и годовая популярность",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1996-09-15",
    dateLabel: "сентябрь 1996",
    archiveYear: 1996,
    programLabel: "«По вашим письмам» РТР",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Nautilus Pompilius",
        title: "Кто ещё",
        sources: monthlyReleaseSources(1996, "nautilus-who-else-september", "https://www.staroetv.su/programs/1126?year=1996", "«Старый телевизор»: Nautilus Pompilius — «Кто ещё», РТР · сентябрь 1996", "месячный телевизионный эфир"),
      },
    ],
  },
  {
    chartDate: "1996-10-07",
    dateLabel: "октябрь 1996",
    archiveYear: 1996,
    programLabel: "альбом Валерия Меладзе «Последний романтик»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерий Меладзе",
        title: "Вера",
        sources: monthlyReleaseSources(
          1996,
          "meladze-vera-october",
          meladzeDiscographyUrl,
          "Дискография: альбом «Последний романтик» с песней «Вера» вышел 07.10.1996",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1996-11-25",
    dateLabel: "ноябрь 1996 · в продаже с 25.11.1996",
    archiveYear: 1996,
    programLabel: "альбом Анжелики Варум «Зимняя вишня»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Анжелика Варум",
        title: "Зимняя вишня",
        sources: monthlyReleaseSources(
          1996,
          "varum-zimnyaya-vishnya-november",
          varumWinterCherryNovember1996Url,
          "«Музыкальная правда» от 22.11.1996: кассета «Зимняя вишня» поступает в продажу с ближайшего понедельника",
          "современная музыкальная пресса",
        ),
      },
    ],
  },
  {
    chartDate: "1996-12-14",
    dateLabel: "14.12.1996",
    archiveYear: 1996,
    programLabel: "«Золотой граммофон — 1996»",
    candidates: [
      {
        artist: "Надежда Кадышева и ансамбль «Золотое кольцо»",
        title: "Течёт ручей",
        sources: awardSources(1996, "14.12.1996", "techet-ruchey"),
      },
      {
        artist: "Татьяна Буланова",
        title: "Ясный мой свет",
        sources: awardSources(1996, "14.12.1996", "yasnyy-moy-svet"),
      },
      {
        artist: "Анжелика Варум",
        title: "Зимняя вишня",
        sources: awardSources(1996, "14.12.1996", "zimnyaya-vishnya"),
      },
      {
        artist: "Олег Газманов",
        title: "Бродяга",
        sources: awardSources(1996, "14.12.1996", "brodyaga"),
      },
    ],
  },
  {
    chartDate: "1997-01-01",
    dateLabel: "01.01.1997",
    archiveYear: 1996,
    programLabel: "«Песня-96»",
    candidates: [
      {
        artist: "Иванушки International",
        title: "Тучи",
        sources: festivalSources(1996, "01.01.1997", "tuchi"),
      },
      {
        artist: "Валерий Сюткин",
        title: "Радио ночных дорог",
        sources: festivalSources(1996, "01.01.1997", "radio-nochnykh-dorog"),
      },
      {
        artist: "Лариса Долина",
        title: "Погода в доме",
        sources: festivalSources(1996, "01.01.1997", "pogoda-v-dome"),
      },
      {
        artist: "Любэ",
        title: "Самоволочка",
        sources: festivalSources(1996, "01.01.1997", "samovolochka"),
      },
    ],
  },
  {
    chartDate: "1997-02-16",
    dateLabel: "16.02.1997",
    archiveYear: 1997,
    programLabel: "«Песня-97»",
    candidates: [
      {
        artist: "Алиса Мон",
        title: "Алмаз",
        sources: [
          {
            id: "song-97-tv-1997-02-16-alisa-mon-almaz",
            label: "«Старый телевизор»: Алиса Мон — «Алмаз» в выпуске «Песни-97» от 16.02.1997",
            url: song1997FebruaryTvUrl,
            kind: "датированный видеоархив",
          },
          {
            id: "song-97-final-alisa-mon-almaz",
            label: "«Песня-97»: «Алмаз» Алисы Мон — финалист года",
            url: song1997Url,
            kind: "телефестиваль и годовая популярность",
          },
          {
            id: "music-press-1997-alisa-mon-almaz",
            label: "Архив музыкальной прессы: песня в списке 1997 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1997-03-10",
    dateLabel: "10.03.1997",
    archiveYear: 1997,
    programLabel: "альбом «Агаты Кристи» «Ураган»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Агата Кристи",
        title: "Моряк",
        sources: monthlyReleaseSources(
          1997,
          "agatha-sailor-march",
          agathaHurricane1997Url,
          "История альбома: «Ураган» с песней «Моряк» вышел 10.03.1997",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1997-04-24",
    dateLabel: "апрель 1997",
    archiveYear: 1997,
    programLabel: "альбом «Мумий Тролля» «Морская»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Мумий Тролль",
        title: "Утекай",
        sources: [
          {
            id: "mumiy-troll-morskaya-release-1997-04-24",
            label: "Официальная история группы: альбом «Морская» вышел 24.04.1997",
            url: mumiyMorskayaReleaseUrl,
            kind: "официальная дата релиза",
          },
          {
            id: "mumiy-troll-utekay-song-of-1997",
            label: "Официальный сайт «Мумий Тролля»: «Утекай» названа лучшей песней 1997 года",
            url: mumiyUtekayFactsUrl,
            kind: "официальная история песни",
          },
          {
            id: "music-press-1997-mumiy-troll-utekay",
            label: "Архив музыкальной прессы: песня в списке 1997 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1997-05-13",
    dateLabel: "май 1997",
    archiveYear: 1997,
    programLabel: "радиопремьера песни «Позови меня с собой»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Позови меня с собой",
        sources: monthlyReleaseSources(
          1997,
          "pugacheva-pozovi-menya-s-soboy-may",
          pugachevaCallMe1997Url,
          "Архив «Песни-97»: радиопремьера «Позови меня с собой» состоялась 13.05.1997",
          "датированная радиопремьера",
        ),
      },
    ],
  },
  {
    chartDate: "1997-06-07",
    dateLabel: "июнь 1997",
    archiveYear: 1997,
    programLabel: "«Утренняя почта»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Руки Вверх!",
        title: "Студент",
        sources: [
          { id: "morning-mail-1997-06-07-ruki-vverh", label: "«Старый телевизор»: группа «Руки Вверх!» в «Утренней почте» · 07.06.1997", url: "https://staroetv.su/video/13099", kind: "датированный телевизионный эфир" },
          { id: "ruki-vverh-student-1997-official-history", label: "Официальная биография: «Студент» был лидером «Русской горки» весной, летом и осенью 1997 года", url: "https://rukivverh.ru/biography/", kind: "официальная история чарта" },
          { id: "ruki-vverh-student-1997-apple", label: "Apple Music: «Студент» в альбоме «Дышите равномерно» · 15.05.1997", url: "https://music.apple.com/us/song/1069838639", kind: "датированный каталог релиза" },
        ],
      },
    ],
  },
  {
    chartDate: "1997-07-27",
    dateLabel: "июль 1997 · опубликовано 27.07.1997",
    archiveYear: 1997,
    programLabel: "летняя афиша «Музыкальной правды»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Мурат Насыров",
        title: "Мальчик хочет в Тамбов",
        sources: monthlyReleaseSources(
          1997,
          "nasyrov-tambov-july",
          nasyrovTambovJuly1997Url,
          "«Музыкальная правда» от 27.07.1997: Мурат Насыров заявлен с песней «Мальчик хочет в Тамбов»",
          "датированная концертная афиша",
        ),
      },
    ],
  },
  {
    chartDate: "1997-08-15",
    dateLabel: "август 1997",
    archiveYear: 1997,
    programLabel: "радиохит-парад «Русская горка»",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Руки Вверх!",
        title: "Малыш",
        sources: [
          { id: "ruki-vverh-baby-1997-official-history", label: "Официальная биография: «Малыш» лидировал в «Русской горке» весной, летом и осенью 1997 года", url: "https://rukivverh.ru/biography/", kind: "официальная история чарта", rank: 1 },
          { id: "ruki-vverh-baby-1997-apple", label: "Apple Music: «Малыш» в альбоме «Дышите равномерно» · 15.05.1997", url: "https://music.apple.com/me/song/1069838649", kind: "датированный каталог релиза" },
        ],
      },
    ],
  },
  {
    chartDate: "1997-09-30",
    dateLabel: "сентябрь 1997 · опубликовано 30.09.1997",
    archiveYear: 1997,
    programLabel: "читательский хит-парад «Музыкальной правды»",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Максим Леонидов",
        title: "Видение",
        sources: [
          {
            id: "music-truth-1997-09-leonidov-vision",
            label: "«Музыкальная правда» от 30.09.1997: «Девочка-видение» — № 3 в читательском опросе",
            url: leonidovVisionSeptember1997Url,
            kind: "читательский месячный хит-парад",
            rank: 3,
          },
          {
            id: "music-press-1997-leonidov-vision",
            label: "Архив музыкальной прессы: песня Максима Леонидова в списке 1997 года",
            url: archive1992To2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1997-10-11",
    dateLabel: "октябрь 1997",
    archiveYear: 1997,
    programLabel: "«Утренняя почта»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Мурат Насыров",
        title: "Кто-то простит",
        sources: [
          { id: "morning-mail-1997-10-11-nasyrov", label: "«Старый телевизор»: Мурат Насыров в «Утренней почте» · 11.10.1997", url: "https://www.staroetv.su/programs/utrennyaya-pochta?month=10&year=1997", kind: "датированный телевизионный эфир" },
          { id: "music-press-1997-nasyrov-someone-forgives-october", label: "Архив музыкальной прессы: песня Мурата Насырова в списке 1997 года", url: archive1992To2000Url, kind: "годовой архив" },
        ],
      },
    ],
  },
  {
    chartDate: "1997-11-15",
    dateLabel: "15.11.1997",
    archiveYear: 1997,
    programLabel: "«Золотой граммофон — 1997»",
    candidates: [
      {
        artist: "Иванушки International",
        title: "Кукла",
        sources: awardSources(1997, "15.11.1997", "kukla"),
      },
      {
        artist: "Несчастный случай",
        title: "Что ты имела в виду?",
        sources: awardSources(1997, "15.11.1997", "chto-ty-imela-v-vidu"),
      },
      {
        artist: "Татьяна Овсиенко",
        title: "Колечко",
        sources: awardSources(1997, "15.11.1997", "kolechko"),
      },
    ],
  },
  {
    chartDate: "1997-12-05",
    dateLabel: "декабрь 1997",
    archiveYear: 1997,
    programLabel: "альбом «Любэ» «Песни о людях»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Любэ",
        title: "Ребята с нашего двора",
        sources: monthlyReleaseSources(
          1997,
          "lyube-rebyata-december",
          lyubeSongsAboutPeople1997Url,
          "Дискография «Любэ»: альбом «Песни о людях» с песней «Ребята с нашего двора» вышел 05.12.1997",
        ),
      },
    ],
  },
  {
    chartDate: "1998-01-01",
    dateLabel: "01.01.1998",
    archiveYear: 1997,
    programLabel: "«Песня-97»",
    candidates: [
      {
        artist: "Алла Пугачёва",
        title: "Позови меня с собой",
        sources: festivalSources(1997, "01.01.1998", "pozovi-menya-s-soboy"),
      },
      {
        artist: "Валерий Меладзе",
        title: "Самба белого мотылька",
        sources: festivalSources(1997, "01.01.1998", "samba-belogo-motylka"),
      },
      {
        artist: "Леонид Агутин и Анжелика Варум",
        title: "Королева",
        sources: festivalSources(1997, "01.01.1998", "koroleva"),
      },
      {
        artist: "Ирина Аллегрова и Игорь Крутой",
        title: "Незаконченный роман",
        sources: festivalSources(1997, "01.01.1998", "nezakonchennyy-roman"),
      },
    ],
  },
  {
    chartDate: "1998-01-15",
    dateLabel: "январь 1998",
    archiveYear: 1998,
    programLabel: "первый радиоэфир песни группы «Високосный год»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Високосный год",
        title: "Лучшая песня о любви",
        sources: monthlyReleaseSources(
          1998,
          "visokosnyy-god-best-love-january",
          leapYearBestLove1998Url,
          "История группы: «Лучшая песня о любви» впервые прозвучала в радиоэфире в январе 1998 года",
          "датированный радиоэфир",
        ),
      },
    ],
  },
  {
    chartDate: "1998-02-17",
    dateLabel: "февраль 1998",
    archiveYear: 1998,
    programLabel: "альбом «Руки Вверх!» «Сделай ещё громче»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Руки Вверх!",
        title: "Крошка моя",
        sources: monthlyReleaseSources(
          1998,
          "ruki-vverkh-kroshka-february",
          handsUpLouder1998Url,
          "Apple Music: альбом «Сделай ещё громче» с песней «Крошка моя» · 17.02.1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-03-08",
    dateLabel: "08.03.1998",
    archiveYear: 1998,
    programLabel: "альбом Филиппа Киркорова «С любовью к Единственной»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Филипп Киркоров",
        title: "Медсестра",
        sources: monthlyReleaseSources(
          1998,
          "kirkorov-medsestra-march",
          kirkorovOnlyLove1998Url,
          "История альбома: «С любовью к Единственной» с песней «Медсестра» вышел 08.03.1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-04-01",
    dateLabel: "01.04.1998",
    archiveYear: 1998,
    programLabel: "«Гранатовый альбом» группы «Сплин»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Сплин",
        title: "Выхода нет",
        sources: monthlyReleaseSources(
          1998,
          "splean-vykhoda-net-april",
          spleanPomegranate1998Url,
          "Дискография «Сплина»: «Гранатовый альбом» с песней «Выхода нет» вышел 01.04.1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-05-15",
    dateLabel: "май 1998",
    archiveYear: 1998,
    programLabel: "альбом группы «Браво» «Хиты про любовь»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Браво",
        title: "Тише, послушай",
        sources: monthlyReleaseSources(
          1998,
          "bravo-tishe-poslushay-may",
          bravoLoveHits1998Url,
          "Discogs: российское издание альбома «Хиты про любовь» с песней «Тише, послушай» · май 1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-06-01",
    dateLabel: "июнь 1998",
    archiveYear: 1998,
    programLabel: "альбом группы «Стрелки» «Идут вперёд»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Стрелки",
        title: "На вечеринке",
        sources: monthlyReleaseSources(
          1998,
          "strelki-na-vecherinke-june",
          strelkiGoAhead1998Url,
          "Apple Music: альбом «Идут вперёд» с песней «На вечеринке» · 01.06.1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-07-15",
    dateLabel: "июль 1998",
    archiveYear: 1998,
    programLabel: "альбом группы «Маша и Медведи» «Солнцеклёш»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Маша и Медведи",
        title: "Любочка",
        sources: monthlyReleaseSources(
          1998,
          "masha-medvedi-lyubochka-july",
          mashaSunKlesh1998Url,
          "Дискография группы: альбом «Солнцеклёш» с песней «Любочка» вышел в июле 1998 года",
        ),
      },
    ],
  },
  {
    chartDate: "1998-08-05",
    dateLabel: "05.08.1998",
    archiveYear: 1998,
    programLabel: "«Акустический альбом» группы «Король и Шут»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Король и Шут",
        title: "Кукла колдуна",
        sources: monthlyReleaseSources(
          1998,
          "korol-shut-kukla-kolduna-august",
          kingJesterAcoustic1998Url,
          "Звук: «Акустический альбом» с песней «Кукла колдуна» вышел 05.08.1998",
        ),
      },
    ],
  },
  {
    chartDate: "1998-11-21",
    dateLabel: "21.11.1998",
    archiveYear: 1998,
    programLabel: "«Золотой граммофон — 1998»",
    candidates: [
      {
        artist: "Борис Моисеев и Николай Трубач",
        title: "Голубая луна",
        sources: awardSources(1998, "21.11.1998", "golubaya-luna"),
      },
      {
        artist: "Шура",
        title: "Ты не верь слезам",
        sources: awardSources(1998, "21.11.1998", "ty-ne-ver-slezam"),
      },
      {
        artist: "Руки Вверх!",
        title: "Крошка моя",
        sources: awardSources(1998, "21.11.1998", "kroshka-moya"),
      },
      {
        artist: "Иванушки International",
        title: "Тополиный пух",
        sources: awardSources(1998, "21.11.1998", "topolinyy-pukh"),
      },
    ],
  },
  {
    chartDate: "1998-12-15",
    dateLabel: "декабрь 1998",
    archiveYear: 1998,
    programLabel: "альбом группы «Агата Кристи» «Чудеса»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Агата Кристи",
        title: "Ковёр-вертолёт",
        sources: monthlyReleaseSources(
          1998,
          "agatha-kover-vertolet-december",
          agathaMiracles1998Url,
          "История альбома: «Чудеса» с песней «Ковёр-вертолёт» вышел в декабре 1998 года",
        ),
      },
    ],
  },
  {
    chartDate: "1999-01-04",
    dateLabel: "04.01.1999",
    archiveYear: 1999,
    programLabel: "новогодний музыкальный эфир РТР",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Сплин",
        title: "Катись, колесо",
        sources: monthlyReleaseSources(
          1999,
          "splin-katis-koleso-january",
          "https://staroetv.su/video/programs?category=music&month=1&year=1999",
          "Видеоархив РТР: «Сплин» — «Катись, колесо» · 04.01.1999",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1999-02-17",
    dateLabel: "17.02.1999",
    archiveYear: 1999,
    programLabel: "дебютный альбом Hi-Fi «Первый контакт»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Hi-Fi",
        title: "Беспризорник",
        sources: monthlyReleaseSources(
          1999,
          "hi-fi-besprizornik-february",
          hiFiFirstContact1999Url,
          "История группы: альбом «Первый контакт» с песней «Беспризорник» вышел 17.02.1999; клип вошёл в чарт MTV 26 февраля",
          "датированный релиз и телевизионный чарт",
        ),
      },
    ],
  },
  {
    chartDate: "1999-03-25",
    dateLabel: "март 1999",
    archiveYear: 1999,
    programLabel: "альбом ДДТ «Мир номер ноль»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ДДТ",
        title: "Метель",
        sources: monthlyReleaseSources(
          1999,
          "ddt-metel",
          "https://music.apple.com/us/album/%D0%BC%D0%B8%D1%80-%D0%BD%D0%BE%D0%BC%D0%B5%D1%80-%D0%BD%D0%BE%D0%BB%D1%8C/1739748431",
          "Apple Music: «Мир номер ноль» с песней «Метель» · 25.03.1999",
        ),
      },
    ],
  },
  {
    chartDate: "1999-04-15",
    dateLabel: "апрель 1999",
    archiveYear: 1999,
    programLabel: "промежуточный выпуск «Песни-99»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Ирина Аллегрова",
        title: "Двое",
        sources: monthlyReleaseSources(
          1999,
          "allegrova-dvoe-april",
          "https://staroetv.su/forum/0-127898",
          "Архивная сверка: выпуск «Песни-99» за апрель 1999 года — Ирина Аллегрова, «Двое»",
          "месячный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1999-05-10",
    dateLabel: "май 1999",
    archiveYear: 1999,
    programLabel: "дебютный альбом Земфиры",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земфира",
        title: "Ромашки",
        sources: monthlyReleaseSources(
          1999,
          "zemfira-romashki",
          "https://music.apple.com/us/album/%D0%B7%D0%B5%D0%BC%D1%84%D0%B8%D1%80%D0%B0/1589963307",
          "Apple Music: альбом «земфира» с песней «Ромашки» · 10.05.1999",
        ),
      },
    ],
  },
  {
    chartDate: "1999-05-25",
    dateLabel: "25.05.1999",
    archiveYear: 1999,
    programLabel: "альбом «Михея и Джуманджи» «Сука любовь»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Михей и Джуманджи feat. Инна Стил",
        title: "Туда",
        sources: monthlyReleaseSources(
          1999,
          "mikhey-tuda-may",
          mikheyLove1999Url,
          "История альбома: «Сука любовь» с песней «Туда» вышел 25.05.1999; песня стала хитом и вошла в годовую «Русскую десятку» MTV",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1999-06-16",
    dateLabel: "16.06.1999",
    archiveYear: 1999,
    programLabel: "концерт «Короля и Шута» в клубе «Спартак»",
    anchorKind: "концерт",
    candidates: [
      {
        artist: "Король и Шут",
        title: "Прыгну со скалы",
        sources: monthlyReleaseSources(
          1999,
          "king-jester-jump-from-cliff-june",
          kingJesterLive1999Url,
          "Архив концертного альбома: «Прыгну со скалы» исполнена и записана в клубе «Спартак» 16.06.1999",
          "датированный концертный архив",
        ),
      },
    ],
  },
  {
    chartDate: "1999-07-04",
    dateLabel: "04–10.07.1999",
    archiveYear: 1999,
    programLabel: "первый выпуск «Чартовой дюжины»",
    anchorKind: "недельный чарт",
    periodStart: "1999-07-04",
    periodEnd: "1999-07-10",
    candidates: [
      {
        artist: "Михей и Джуманджи feat. Инна Стил",
        title: "Туда",
        sources: [
          {
            id: "chart-dozen-1999-07-04-tuda-official",
            label: "НАШЕ Радио: «Туда» — № 6 в первом выпуске «Чартовой дюжины» · 04.07.1999",
            url: nasheFirstChartDozen1999Url,
            kind: "официальный недельный чарт",
            rank: 6,
          },
          {
            id: "chart-dozen-1999-07-04-audio-archive",
            label: "Аудиоархив первого выпуска «Чартовой дюжины» · 04.07.1999",
            url: chartDozenFirstArchive1999Url,
            kind: "датированный радиоэфир",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1999-08-06",
    dateLabel: "06.08.1999",
    archiveYear: 1999,
    programLabel: "промежуточный выпуск «Песни-99»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Блестящие",
        title: "Чао, бамбино",
        sources: monthlyReleaseSources(
          1999,
          "blestyashchie-chao-bambino-august",
          "https://staroetv.su/video/calendar/1999/8",
          "Видеоархив: «Блестящие» среди участников выпуска «Песни-99» от 06.08.1999",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "1999-09-23",
    dateLabel: "23.09.1999",
    archiveYear: 1999,
    programLabel: "альбом Дельфина «Глубина резкости»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Дельфин",
        title: "Любовь",
        sources: monthlyReleaseSources(
          1999,
          "dolphin-love-september",
          dolphinDepth1999Url,
          "История альбома: «Глубина резкости» с песней «Любовь» вышел 23.09.1999",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "1999-10-01",
    dateLabel: "октябрь 1999",
    archiveYear: 1999,
    programLabel: "альбом «Альтависта» группы «Сплин»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Сплин",
        title: "Пил-курил",
        sources: monthlyReleaseSources(
          1999,
          "splin-pil-kuril",
          "https://music.apple.com/us/song/1345370905",
          "Apple Music: «Пил-курил» на альбоме «Альтависта» · 01.10.1999",
        ),
      },
    ],
  },
  {
    chartDate: "1999-11-15",
    dateLabel: "ноябрь 1999",
    archiveYear: 1999,
    programLabel: "«Горячая десятка» РТР",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Татьяна Овсиенко",
        title: "Река любви",
        sources: [
          {
            id: "hot-ten-1999-11-ovsienko-river-of-love",
            label: "«Горячая десятка» РТР: Татьяна Овсиенко — «Река любви», № 4 за ноябрь 1999 года",
            url: "https://staroetv.su/programs/hot-10?month=11&year=1999",
            kind: "месячный телевизионный хит-парад",
            rank: 4,
          },
          {
            id: "music-press-1999-ovsienko-river-of-love",
            label: "Архив музыкальной прессы: сверка с песнями 1999 года",
            url: archive1999Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "1999-12-24",
    dateLabel: "24.12.1999",
    archiveYear: 1999,
    programLabel: "«Золотой граммофон — 1999»",
    candidates: [
      {
        artist: "Демо",
        title: "Солнышко",
        sources: awardSources(1999, "24.12.1999", "solnyshko"),
      },
      {
        artist: "Наталья Власова",
        title: "Я у твоих ног",
        sources: awardSources(1999, "24.12.1999", "ya-u-tvoikh-nog"),
      },
      {
        artist: "Чайф",
        title: "Аргентина-Ямайка 5:0",
        sources: awardSources(1999, "24.12.1999", "argentina-yamayka"),
      },
      {
        artist: "Отпетые мошенники",
        title: "Люби меня, люби",
        sources: awardSources(1999, "24.12.1999", "lyubi-menya-lyubi"),
      },
    ],
  },
  {
    // Источник лейбла подтверждает январь, но не день. 15-е число —
    // технический центр месяца и не показывается как дата релиза.
    chartDate: "2000-01-15",
    dateLabel: "январь 2000",
    archiveYear: 2000,
    programLabel: "альбом Найка Борзова «Супермен»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Найк Борзов",
        title: "Верхом на звезде",
        sources: monthlyReleaseSources(
          2000,
          "naik-borzov-verkhom-na-zvezde",
          "https://snegiri.ru/naikborzov",
          "Snegiri Music: альбом «Супермен» выпущен в январе 2000 года",
        ),
      },
    ],
  },
  {
    chartDate: "2000-02-05",
    dateLabel: "февраль 2000",
    archiveYear: 2000,
    programLabel: "альбом группы «Мумий Тролль» «Точно ртуть алоэ»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Мумий Тролль",
        title: "Без обмана",
        sources: monthlyReleaseSources(
          2000,
          "mumiy-troll-bez-obmana-february",
          mumiyMercuryAloe2000Url,
          "Официальная хроника группы: альбом «Точно ртуть алоэ» вышел в начале февраля 2000 года",
        ),
      },
    ],
  },
  {
    // Альбом вышел 28 марта; метод всё равно честно сообщает месячную,
    // а не дневную точность, потому что это релизный, а не чартовый якорь.
    chartDate: "2000-03-28",
    dateLabel: "март 2000",
    archiveYear: 2000,
    programLabel: "альбом Земфиры «Прости меня моя любовь»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земфира",
        title: "Искала",
        sources: monthlyReleaseSources(
          2000,
          "zemfira-iskala-march",
          zemfiraIskala2000Url,
          "История песни: «Искала» вышла на альбоме «Прости меня моя любовь» 28.03.2000",
          "датированный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "2000-04-15",
    dateLabel: "апрель 2000",
    archiveYear: 2000,
    programLabel: "MTV News Блок: съёмки клипа",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Легальный Бизне$$",
        title: "Мелодия моей души",
        sources: monthlyReleaseSources(
          2000,
          "legal-business-melodiya-dushi-april",
          "https://staroetv.su/video/programs?month=4&year=2000",
          "Видеоархив MTV за апрель 2000 года: съёмки клипа «Мелодия моей души»",
          "месячная телевизионная хроника",
        ),
      },
    ],
  },
  {
    chartDate: "2000-05-08",
    dateLabel: "май 2000",
    archiveYear: 2000,
    programLabel: "альбом «Би-2»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Би-2",
        title: "Полковнику никто не пишет",
        sources: monthlyReleaseSources(
          2000,
          "bi2-polkovniku-nikto-ne-pishet",
          "https://music.apple.com/us/album/%D0%B1%D0%B8-2/1458962126",
          "Apple Music: альбом «Би-2» с песней «Полковнику никто не пишет» · 08.05.2000",
        ),
      },
    ],
  },
  {
    chartDate: "2000-06-21",
    dateLabel: "21.06.2000",
    archiveYear: 2000,
    programLabel: "интервью группы «Сектор Газа»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Сектор Газа",
        title: "Демобилизация",
        sources: monthlyReleaseSources(
          2000,
          "sektor-gaza-demobilizatsiya-june",
          "https://staroetv.su/video/other?page=139&sort=older",
          "Видеоархив: интервью группы «Сектор Газа» в эфире ТК «Воронеж» · 21.06.2000",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "2000-07-07",
    dateLabel: "июль 2000",
    archiveYear: 2000,
    programLabel: "альбом «Здравствуй, это я…» группы «Руки Вверх!»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Руки Вверх!",
        title: "Алёшка",
        sources: [
          ...monthlyReleaseSources(
            2000,
            "hands-up-alyoshka-july",
            handsUpHello2000PressUrl,
            "«Музыкальная правда» от 07.07.2000: альбом «Здравствуй, это я…» только что вышел",
            "современная музыкальная пресса",
          ),
          {
            id: "hands-up-alyoshka-hello-album-tracklist",
            label: "Каталог Amazon Music: «Алёшка» входит в трек-лист альбома «Здравствуй, это я…»",
            url: handsUpHello2000CatalogUrl,
            kind: "каталог релиза",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2000-08-20",
    dateLabel: "20.08.2000",
    archiveYear: 2000,
    programLabel: "фестиваль «Нашествие-2000»",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Би-2",
        title: "Полковнику никто не пишет",
        sources: [
          {
            id: "nashestvie-2000-bi2-performance",
            label: "Архив НАШЕ: выступление «Би-2» на фестивале «Нашествие-2000»",
            url: nashestvie2000Bi2VideoUrl,
            kind: "архив фестивального выступления",
          },
          {
            id: "nashestvie-2000-bi2-date",
            label: "История фестиваля: «Би-2» выступили на «Нашествии» 20.08.2000",
            url: nashestvieHistoryUrl,
            kind: "датированная программа фестиваля",
          },
          {
            id: "music-press-2000-polkovniku-festival",
            label: "Архив музыкальной прессы: «Полковнику никто не пишет» в списке хитов 2000 года",
            url: archive2000Url,
            kind: "годовой архив",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2000-09-15",
    dateLabel: "15.09.2000",
    archiveYear: 2000,
    programLabel: "промежуточный выпуск «Песни-2000»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Татьяна Буланова",
        title: "Мой сон",
        sources: monthlyReleaseSources(
          2000,
          "bulanova-moy-son-september",
          "https://staroetv.su/video/calendar/2000/9",
          "Видеоархив: Татьяна Буланова среди участников выпуска «Песни-2000» от 15.09.2000",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "2000-10-17",
    dateLabel: "17.10.2000",
    archiveYear: 2000,
    programLabel: "сборник «КИНОпробы. Tribute Виктор Цой — 1»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Мумий Тролль",
        title: "Восьмиклассница",
        sources: monthlyReleaseSources(
          2000,
          "mumiy-troll-vosmiklassnitsa-october",
          mumiyKinoproby2000Url,
          "Официальная хроника группы: сборник «КИНОпробы» с песней «Восьмиклассница» вышел 17.10.2000",
        ),
      },
    ],
  },
  {
    chartDate: "2000-11-18",
    dateLabel: "18.11.2000",
    archiveYear: 2000,
    programLabel: "«Золотой граммофон — 2000»",
    candidates: [
      {
        artist: "Гости из будущего",
        title: "Ты где-то",
        sources: awardSources(2000, "18.11.2000", "ty-gde-to"),
      },
      {
        artist: "Алла Пугачёва",
        title: "Мадам Брошкина",
        sources: awardSources(2000, "18.11.2000", "madam-broshkina"),
      },
      {
        artist: "Би-2",
        title: "Полковнику никто не пишет",
        sources: awardSources(2000, "18.11.2000", "polkovniku-nikto-ne-pishet"),
      },
      {
        artist: "Танцы Минус",
        title: "Цветы",
        sources: awardSources(2000, "18.11.2000", "tsvety"),
      },
    ],
  },
  {
    chartDate: "2000-12-29",
    dateLabel: "29.12.2000",
    archiveYear: 2000,
    programLabel: "эфир MTV Россия",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Дискотека Авария",
        title: "Новогодняя",
        sources: monthlyReleaseSources(
          2000,
          "diskoteka-avariya-novogodnyaya-december",
          "https://staroetv.su/video/programs?category=music&sort=newer&year=2000",
          "Видеоархив MTV: «Дискотека Авария» — «Новогодняя» · 29.12.2000",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    // Каталог сообщает 1 января, но здесь дата используется только как
    // технический якорь января: интерфейс честно показывает точность «месяц».
    chartDate: "2001-01-01",
    dateLabel: "январь 2001",
    archiveYear: 2001,
    programLabel: "EP Витаса «Опера #2»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Витас",
        title: "Опера № 2",
        sources: monthlyReleaseSources(
          2001,
          "vitas-opera-2-january",
          "https://music.apple.com/us/album/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0-2-ep/1178719436",
          "Apple Music: EP «Опера #2» · январь 2001",
        ),
      },
    ],
  },
  {
    chartDate: "2001-02-08",
    dateLabel: "08.02.2001",
    archiveYear: 2001,
    programLabel: "«Диск-канал Промо» ТВ-6",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Витас",
        title: "Опера № 2",
        sources: monthlyReleaseSources(
          2001,
          "vitas-opera-2-february-airplay",
          "https://staroetv.su/video/programs?category=music&month=2&sort=newer&year=2001",
          "Видеоархив ТВ-6: Витас в выпуске «Диск-канал Промо» от 08.02.2001",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "2001-03-25",
    dateLabel: "март 2001",
    archiveYear: 2001,
    programLabel: "альбом «25-й кадр» группы «Сплин»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Сплин",
        title: "Моё сердце",
        sources: monthlyReleaseSources(
          2001,
          "splin-moe-serdtse",
          "https://music.apple.com/us/album/25-%D0%B9-%D0%BA%D0%B0%D0%B4%D1%80/1212111998",
          "Apple Music: альбом «25-й кадр» с песней «Моё сердце» · 25.03.2001",
        ),
      },
    ],
  },
  {
    chartDate: "2001-04-01",
    dateLabel: "апрель 2001",
    archiveYear: 2001,
    programLabel: "альбом «Маньяки» группы «Дискотека Авария»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Дискотека Авария",
        title: "Заколебал ты",
        sources: monthlyReleaseSources(
          2001,
          "diskoteka-avariya-zakolebal-ty",
          "https://music.apple.com/au/song/1139777820",
          "Apple Music: «Заколебал ты» на альбоме «Маньяки» · 01.04.2001",
        ),
      },
    ],
  },
  {
    chartDate: "2001-05-21",
    dateLabel: "май 2001",
    archiveYear: 2001,
    programLabel: "альбом «200 по встречной» группы «Тату»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Тату",
        title: "Нас не догонят",
        sources: monthlyReleaseSources(
          2001,
          "tatu-nas-ne-dogonyat",
          "https://music.apple.com/us/song/1887888434",
          "Apple Music: «Нас не догонят» на альбоме «200 по встречной» · 21.05.2001",
        ),
      },
    ],
  },
  {
    chartDate: "2001-06-21",
    dateLabel: "21.06.2001",
    archiveYear: 2001,
    programLabel: "презентация клипа «Горошины»",
    anchorKind: "презентация клипа",
    candidates: [
      {
        artist: "Катя Лель",
        title: "Горошины",
        sources: monthlyReleaseSources(
          2001,
          "katya-lel-goroshiny-june",
          katyaLelGoroshiny2001Url,
          "InterMedia: клип «Горошины» представлен 21.06.2001; песня к этому времени стала хитом нескольких радиостанций",
          "датированная презентация и независимое свидетельство популярности",
        ),
      },
    ],
  },
  {
    chartDate: "2001-07-28",
    dateLabel: "28.07.2001",
    archiveYear: 2001,
    programLabel: "промежуточный выпуск «Песни-2001»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Жасмин",
        title: "Не говори мне",
        sources: monthlyReleaseSources(
          2001,
          "jasmin-ne-govori-mne-july",
          "https://staroetv.su/video/programs?category=music&page=5&sort=added&year=2001",
          "Видеоархив: Жасмин среди участников выпуска «Песни-2001» от 28.07.2001",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "2001-08-29",
    dateLabel: "29.08.2001",
    archiveYear: 2001,
    programLabel: "концерт Филиппа Киркорова в Улан-Баторе",
    anchorKind: "концертное исполнение",
    candidates: [
      {
        artist: "Филипп Киркоров",
        title: "Ты поверишь",
        sources: monthlyReleaseSources(
          2001,
          "kirkorov-you-will-believe-august",
          kirkorovMongolia2001Url,
          "InterMedia: «Ты поверишь» исполнена на концерте 29.08.2001 перед 35 тысячами зрителей",
          "датированный концерт и независимое свидетельство аудитории",
        ),
      },
    ],
  },
  {
    chartDate: "2001-09-27",
    dateLabel: "27.09.2001",
    archiveYear: 2001,
    programLabel: "дебютный альбом группы «ВИА Гра» «Попытка № 5»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА Гра",
        title: "Попытка № 5",
        sources: monthlyReleaseSources(
          2001,
          "via-gra-popytka-5-september",
          viaGraAttempt2001Url,
          "Дискография «ВИА Гры»: альбом «Попытка № 5» вышел 27.09.2001",
        ),
      },
    ],
  },
  {
    chartDate: "2001-10-20",
    dateLabel: "20.10.2001",
    archiveYear: 2001,
    programLabel: "промежуточный выпуск «Песни-2001»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Би-2",
        title: "Серебро",
        sources: monthlyReleaseSources(
          2001,
          "bi2-serebro-october",
          "https://staroetv.su/video/programs?category=music&page=5&sort=added&year=2001",
          "Видеоархив: «Би-2» среди участников выпуска «Песни-2001» от 20.10.2001",
          "датированный телевизионный эфир",
        ),
      },
    ],
  },
  {
    chartDate: "2001-11-17",
    dateLabel: "17.11.2001",
    archiveYear: 2001,
    programLabel: "«Золотой граммофон — 2001»",
    candidates: [
      {
        artist: "Витас",
        title: "Опера № 2",
        sources: awardSources(2001, "17.11.2001", "opera-2"),
      },
      {
        artist: "Сплин",
        title: "Моё сердце",
        sources: awardSources(2001, "17.11.2001", "moe-serdtse"),
      },
      {
        artist: "Тату",
        title: "Нас не догонят",
        sources: awardSources(2001, "17.11.2001", "nas-ne-dogonyat"),
      },
      {
        artist: "Руки Вверх!",
        title: "18 мне уже",
        sources: awardSources(2001, "17.11.2001", "18-mne-uzhe"),
      },
    ],
  },
  {
    chartDate: "2001-12-15",
    dateLabel: "декабрь 2001",
    archiveYear: 2001,
    programLabel: "эфир MTV Россия",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Филипп Киркоров",
        title: "Я за тебя умру",
        sources: monthlyReleaseSources(
          2001,
          "kirkorov-ya-za-tebya-umru-december",
          "https://staroetv.su/video/programs?category=music&month=12&sort=older&year=2001",
          "Видеоархив MTV: Филипп Киркоров — «Я за тебя умру» · декабрь 2001 года",
          "месячный телевизионный эфир",
        ),
      },
      {
        artist: "Дискотека Авария",
        title: "На острие атаки",
        sources: monthlyReleaseSources(
          2001,
          "diskoteka-avariya-na-ostrie-ataki-december",
          "https://staroetv.su/programs/hot-10?sort=newer&year=2001",
          "«Горячая десятка» РТР: «Дискотека Авария» — «На острие атаки» · декабрь 2001 года",
          "месячный телевизионный хит-парад",
        ),
      },
    ],
  },
  {
    // Первое число в каталоге — достаточное подтверждение календарного месяца,
    // но не повод заявлять точность до конкретного дня.
    chartDate: "2002-01-01",
    dateLabel: "январь 2002",
    archiveYear: 2002,
    programLabel: "альбом группы «7Б» «Молодые ветра»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "7Б",
        title: "Некрещёная луна",
        sources: monthlyReleaseSources(
          2002,
          "7b-nekreshchennaya-luna-january",
          "https://music.apple.com/us/song/1103320279",
          "Apple Music: «Некрещёная луна» на альбоме «Молодые ветра» · январь 2002",
        ),
      },
    ],
  },
  {
    chartDate: "2002-03-20",
    dateLabel: "20.03.2002",
    archiveYear: 2002,
    programLabel: "релиз песни «За четыре моря»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Блестящие",
        title: "За четыре моря",
        sources: monthlyReleaseSources(
          2002,
          "blestyashchie-four-seas-march",
          "https://music.apple.com/us/song/1216625664",
          "Apple Music: песня «За четыре моря» · 20.03.2002",
        ),
      },
    ],
  },
  {
    chartDate: "2002-04-01",
    dateLabel: "апрель 2002",
    archiveYear: 2002,
    programLabel: "альбом Земфиры «Четырнадцать недель тишины»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Земфира",
        title: "Бесконечность",
        sources: monthlyReleaseSources(
          2002,
          "zemfira-beskonechnost",
          "https://music.apple.com/ru/song/1589963206",
          "Apple Music: «Бесконечность» на альбоме «Четырнадцать недель тишины» · 01.04.2002",
        ),
      },
    ],
  },
  {
    chartDate: "2002-05-30",
    dateLabel: "30.05.2002",
    archiveYear: 2002,
    programLabel: "презентация клипа «Простые движения»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Тату",
        title: "Простые движения",
        sources: monthlyReleaseSources(
          2002,
          "tatu-simple-moves-may",
          "https://ru.wikipedia.org/wiki/Простые_движения",
          "История песни: клип «Простые движения» представлен 30.05.2002",
          "датированная презентация клипа",
        ),
      },
    ],
  },
  {
    chartDate: "2002-07-31",
    dateLabel: "конец июля 2002",
    archiveYear: 2002,
    programLabel: "дебютный сингл группы «Сети» «Смайл»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Сети",
        title: "Смайл",
        sources: monthlyReleaseSources(
          2002,
          "seti-smile-july",
          setiSmile2002Url,
          "InterMedia от 02.08.2002: дебютный сингл «Смайл» поступил в продажу в конце июля",
          "современная музыкальная пресса",
        ),
      },
    ],
  },
  {
    chartDate: "2002-08-10",
    dateLabel: "10.08.2002",
    archiveYear: 2002,
    programLabel: "фестиваль «Нашествие-2002»",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "Би-2 и Чичерина",
        title: "Мой рок-н-ролл",
        sources: [
          {
            id: "nashestvie-2002-bi2-rock-performance",
            label: "Архив НАШЕ: «Би-2 — Мой рок-н-ролл» на «Нашествии-2002»",
            url: nashestvie2002RockVideoUrl,
            kind: "архив фестивального выступления",
          },
          {
            id: "nashestvie-2002-bi2-date",
            label: "История фестиваля: «Би-2» и Чичерина в программе 10.08.2002",
            url: nashestvieHistoryUrl,
            kind: "датированная программа фестиваля",
          },
          {
            id: "mk-2002-moy-rok-n-roll-festival",
            label: "«Звуковая дорожка» МК: #2 в итоговом чарте 2002 года",
            url: mkTop2002Url,
            kind: "читательский годовой чарт",
            rank: 2,
          },
        ],
      },
    ],
  },
  {
    chartDate: "2002-11-15",
    dateLabel: "15.11.2002",
    archiveYear: 2002,
    programLabel: "«Золотой граммофон — 2002»",
    candidates: [
      {
        artist: "Би-2 и Чичерина",
        title: "Мой рок-н-ролл",
        sources: awardSources(2002, "15.11.2002", "moy-rok-n-roll"),
      },
      {
        artist: "Блестящие",
        title: "За четыре моря",
        sources: awardSources(2002, "15.11.2002", "za-chetyre-morya"),
      },
      {
        artist: "Вячеслав Петкун, Александр Голубев и Антон Макарский",
        title: "Belle",
        sources: awardSources(2002, "15.11.2002", "belle"),
      },
      {
        artist: "Руки Вверх!",
        title: "Он тебя целует",
        sources: awardSources(2002, "15.11.2002", "on-tebya-tseluet"),
      },
    ],
  },
  {
    chartDate: "2003-01-23",
    dateLabel: "январь 2003",
    archiveYear: 2003,
    programLabel: "альбом Алсу «19»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Алсу",
        title: "Вчера",
        sources: monthlyReleaseSources(
          2003,
          "alsou-vchera",
          "https://music.apple.com/us/album/19/1657200710",
          "Apple Music: альбом «19» с песней «Вчера» · 23.01.2003",
        ),
      },
    ],
  },
  {
    chartDate: "2003-02-15",
    dateLabel: "февраль 2003",
    archiveYear: 2003,
    programLabel: "премьера сингла ВИА Гры",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА Гра",
        title: "Не оставляй меня, любимый!",
        sources: monthlyReleaseSources(2003, "via-gra-ne-ostavlyay-february", "https://ru.ruwiki.ru/wiki/%D0%9D%D0%B5_%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B9_%D0%BC%D0%B5%D0%BD%D1%8F%2C_%D0%BB%D1%8E%D0%B1%D0%B8%D0%BC%D1%8B%D0%B9%21", "История сингла: «Не оставляй меня, любимый!» выпущен в феврале 2003 года", "месячная история релиза"),
      },
    ],
  },
  {
    chartDate: "2003-03-13",
    dateLabel: "март 2003",
    archiveYear: 2003,
    programLabel: "альбом группы «Фабрика» «Девушки фабричные»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Фабрика",
        title: "Про любовь",
        sources: monthlyReleaseSources(2003, "fabrika-pro-love-march", "https://music.apple.com/us/album/%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D1%84%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D1%8B%D0%B5/1602701206", "Apple Music: альбом «Девушки фабричные» с песней «Про любовь» · 13.03.2003"),
      },
    ],
  },
  {
    chartDate: "2003-04-14",
    dateLabel: "апрель 2003",
    archiveYear: 2003,
    programLabel: "альбом ВИА Гра «Стоп! Снято!»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА Гра",
        title: "Не оставляй меня, любимый!",
        sources: monthlyReleaseSources(
          2003,
          "via-gra-ne-ostavlyay-menya",
          "https://music.apple.com/us/album/%D1%81%D1%82%D0%BE%D0%BF-%D1%81%D0%BD%D1%8F%D1%82%D0%BE/1142162338",
          "Apple Music: альбом «Стоп! Снято!» с песней «Не оставляй меня, любимый!» · 14.04.2003",
        ),
      },
    ],
  },
  {
    chartDate: "2003-05-27",
    dateLabel: "май 2003",
    archiveYear: 2003,
    programLabel: "альбом Глюк’oZa «Глюкоза Nostra»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Глюк’oZa",
        title: "Невеста",
        sources: monthlyReleaseSources(
          2003,
          "glukoza-nevesta",
          "https://music.apple.com/kg/album/%D0%B3%D0%BB%D1%8E%D0%BA%D0%BE%D0%B7%D0%B0-%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0/598933092",
          "Apple Music: альбом «Глюкоза Nostra» с песней «Невеста» · 27.05.2003",
        ),
      },
    ],
  },
  {
    chartDate: "2003-06-15",
    dateLabel: "июнь 2003",
    archiveYear: 2003,
    programLabel: "альбом Маши Распутиной «Роза чайная»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Маша Распутина и Филипп Киркоров",
        title: "Роза чайная",
        sources: monthlyReleaseSources(
          2003,
          "rasputina-kirkorov-tea-rose-june",
          teaRoseAlbum2003Url,
          "История альбома: «Роза чайная» вышла в июне 2003 года; заглавная песня стала его главным хитом",
          "месячный релиз альбома",
        ),
      },
    ],
  },
  {
    chartDate: "2003-07-15",
    dateLabel: "июль 2003",
    archiveYear: 2003,
    programLabel: "месячный хит-парад «Коммерсанта»",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Дискотека Авария",
        title: "Небо",
        sources: [
          { id: "kommersant-chart-2003-07-diskoteka-avariya-sky", label: "«Коммерсантъ»: «Небо» названо самой популярной песней июля 2003 года", url: "https://www.kommersant.ru/doc/399914", kind: "месячный хит-парад", rank: 1 },
          { id: "golden-gramophone-2003-diskoteka-avariya-sky", label: "«Русское Радио»: «Небо» среди народных лауреатов 2003 года", url: officialGramophone2003Url, kind: "первичный репортаж" },
        ],
      },
    ],
  },
  {
    chartDate: "2003-08-24",
    dateLabel: "18–24.08.2003",
    archiveYear: 2003,
    programLabel: "недельный радиочарт «Русского Радио»",
    anchorKind: "недельный чарт",
    periodStart: "2003-08-18",
    periodEnd: "2003-08-24",
    candidates: [
      {
        artist: "Чай вдвоём",
        title: "Желанная",
        sources: [
          {
            id: "golden-gramophone-chart-2003-08-24-zhelannaya",
            label: "Архив «Золотого граммофона»: «Желанная» — лидер недели 18–24.08.2003",
            url: goldenGramophoneAugust2003Url,
            kind: "недельный радиочарт",
            rank: 1,
          },
          {
            id: "golden-gramophone-award-2003-zhelannaya",
            label: "«Русское Радио»: «Желанная» среди народных лауреатов 2003 года",
            url: officialGramophone2003Url,
            kind: "первичный репортаж",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2003-09-04",
    dateLabel: "04.09.2003",
    archiveYear: 2003,
    programLabel: "«Стопудовый хит — 2003»",
    anchorKind: "фестиваль",
    candidates: [
      {
        artist: "ВИА Гра и Валерий Меладзе",
        title: "Океан и три реки",
        sources: [
          {
            id: "stopudovyy-hit-2003-ocean-three-rivers-premiere",
            label: "История песни: премьера «Океана и трёх рек» состоялась на фестивале 04.09.2003",
            url: oceanThreeRivers2003Url,
            kind: "датированная фестивальная премьера",
          },
          {
            id: "via-gra-history-2003-ocean-three-rivers",
            label: "История группы: совместная песня представлена на «Стопудовом хите — 2003»",
            url: viaGraHistoryUrl,
            kind: "архив истории группы",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2003-10-08",
    dateLabel: "октябрь 2003",
    archiveYear: 2003,
    programLabel: "альбом Валерии «Страна любви»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Валерия",
        title: "Часики",
        sources: monthlyReleaseSources(
          2003,
          "valeriya-chasiki",
          "https://music.apple.com/us/album/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B0-%D0%BB%D1%8E%D0%B1%D0%B2%D0%B8/1005698088",
          "Apple Music: альбом «Страна любви» с песней «Часики» · 08.10.2003",
        ),
      },
    ],
  },
  {
    chartDate: "2003-11-12",
    dateLabel: "ноябрь 2003",
    archiveYear: 2003,
    programLabel: "альбом ВИА Гры «Биология»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "ВИА Гра",
        title: "Биология",
        sources: [
          {
            id: "via-gra-biology-apple-2003-11-12",
            label: "Apple Music: песня «Биология» · 12.11.2003",
            url: viaGraBiologyAppleUrl,
            kind: "датированный каталог релиза",
          },
          {
            id: "via-gra-biology-petershop-2003-11-12",
            label: "Petershop: альбом «Биология» представлен 12.11.2003; заглавная песня входит в треклист",
            url: viaGraBiologyPetershopUrl,
            kind: "независимый каталог релиза",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2003-12-06",
    dateLabel: "06.12.2003",
    archiveYear: 2003,
    programLabel: "«Золотой граммофон — 2003»",
    candidates: [
      {
        artist: "Глюк’oZa",
        title: "Невеста",
        sources: awardSources(2003, "06.12.2003", "nevesta"),
      },
      {
        artist: "Катя Лель",
        title: "Мой мармеладный",
        sources: awardSources(2003, "06.12.2003", "moy-marmeladnyy"),
      },
      {
        artist: "Юлия Савичева",
        title: "Высоко",
        sources: awardSources(2003, "06.12.2003", "vysoko"),
      },
      {
        artist: "ВИА Гра",
        title: "Не оставляй меня, любимый!",
        sources: awardSources(2003, "06.12.2003", "ne-ostavlyay-menya"),
      },
    ],
  },
  {
    chartDate: "2004-01-01",
    dateLabel: "01.01.2004",
    archiveYear: 2004,
    programLabel: "телеверсия финала «Песня-2003»",
    anchorKind: "телепремьера",
    candidates: [
      {
        artist: "Иванушки International",
        title: "Билетик в кино",
        sources: [
          {
            id: "song-2003-tv-2004-01-01-first-part",
            label: "«Старый телевизор»: первое отделение финала «Песни-2003» в эфире 01.01.2004",
            url: "https://staroetv.su/video/10144-pesnya-2003-pervyy-kanal-01-01-2004",
            kind: "датированный видеоархив",
          },
          {
            id: "ivanushki-ticket-to-cinema-song-2003-final",
            label: "Архив группы: «Билетик в кино» указан как финалист «Песни-2003»",
            url: "https://ru.wikipedia.org/wiki/Иванушки_International",
            kind: "сверка состава финала",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-02-15",
    dateLabel: "февраль 2004",
    archiveYear: 2004,
    programLabel: "телехит-парад «Золотой граммофон»",
    anchorKind: "месячный чарт",
    candidates: [
      {
        artist: "Корни",
        title: "Плакала берёза",
        sources: [
          {
            id: "golden-gramophone-2004-02-korni-weeping-birch",
            label: "«Старый телевизор»: «Плакала берёза» в выпуске «Золотого граммофона» за февраль 2004",
            url: "https://staroetv.su/video/546-zolotoy-grammofon-pervyy-kanal-2004--",
            kind: "архив месячного телеэфира",
          },
          {
            id: "factory-stars-korni-tour-2004-02-weeping-birch",
            label: "Архив «Фабрики звёзд»: февральский тур 2004 и активная ротация клипа «Плакала берёза»",
            url: "https://www.fabricazvezd.ru/index.php?mod=albom",
            kind: "архив исполнителя и ротации",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-03-16",
    dateLabel: "16.03.2004",
    archiveYear: 2004,
    programLabel: "«Тотальное шоу» на MTV Россия",
    candidates: [
      {
        artist: "Корни",
        title: "Ты узнаешь её",
        sources: [
          {
            id: "mtv-total-show-2004-03-16-korni-ty-uznaesh-ee",
            label: "«Старый телевизор»: «Ты узнаешь её» в выпуске «Тотального шоу» от 16.03.2004",
            url: totalShowMarch2004Url,
            kind: "датированный видеоархив",
          },
          {
            id: "russian-radio-2004-korni-ty-uznaesh-ee",
            label: "Русское радио: «Ты узнаешь её» в итоговом чарте 2004 года",
            url: russianRadio2004Url,
            kind: "годовой радиочарт",
            rank: 36,
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-04-20",
    dateLabel: "20.04.2004",
    archiveYear: 2004,
    programLabel: "дебютный альбом «Возрождение»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Аркона",
        title: "К дому Сварога",
        sources: [
          {
            id: "arkona-vozrozhdenie-2004-04-20-apple",
            label: "Apple Music: «К дому Сварога» на альбоме от 20.04.2004",
            url: "https://music.apple.com/ru/song/1735491338",
            kind: "датированный каталог релиза",
          },
          {
            id: "arkona-vozrozhdenie-2004-04-20-discography",
            label: "Дискография «Арконы»: релиз 20.04.2004 и точный трек-лист альбома",
            url: "https://folk-metal.narod.ru/Arkona/disks.html",
            kind: "дискография и точный трек-лист",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-05-29",
    dateLabel: "29.05.2004",
    archiveYear: 2004,
    programLabel: "«Песня-2004»",
    candidates: [
      {
        artist: "Валерий Леонтьев",
        title: "Нарисуй помадой",
        sources: [
          {
            id: "song-2004-tv-2004-05-29-leontiev-narisuy-pomadoy",
            label: "«Старый телевизор»: «Нарисуй помадой» в выпуске «Песни-2004» от 29.05.2004",
            url: leontievLipstickSong2004TvUrl,
            kind: "датированный видеоархив",
          },
          {
            id: "leontiev-night-call-2004-narisuy-pomadoy",
            label: "Звуки.Ру: «Нарисуй помадой» в трек-листе альбома «Ночной звонок» 2004 года",
            url: leontievNightCall2004Url,
            kind: "каталог релиза и точная запись",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-06-04",
    dateLabel: "04.06.2004",
    archiveYear: 2004,
    programLabel: "церемония Премии МУЗ-ТВ 2004",
    candidates: [
      {
        artist: "Дискотека Авария",
        title: "Небо",
        sources: [
          {
            id: "muz-tv-awards-2004-06-04-diskoteka-avariya-nebo",
            label: "МУЗ-ТВ: 04.06.2004 «Небо» группы «Дискотека Авария» признано песней года",
            url: muzTvAwardsHistoryUrl,
            kind: "официальный архив премии",
          },
          {
            id: "muz-tv-2004-diskoteka-avariya-nebo",
            label: "Архив Премии МУЗ-ТВ 2004: «Небо» — победитель в номинации «Лучшая песня»",
            url: muzTv2004Url,
            kind: "итоги музыкальной премии",
          },
        ],
      },
    ],
  },
  {
    chartDate: "2004-07-18",
    dateLabel: "18.07.2004",
    archiveYear: 2004,
    programLabel: "«Золотой граммофон» Русского Радио",
    anchorKind: "недельный чарт",
    periodStart: "2004-07-12",
    periodEnd: "2004-07-18",
    candidates: [
      {
        artist: "Ирина Дубцова",
        title: "О нём",
        sources: [
          {
            id: "golden-gramophone-2004-07-18-dubtsova-about-him",
            label: "Архив чарта от 18.07.2004: «О нём» — № 1, седьмая неделя в хит-параде",
            url: "https://chartoteka.com/charts/zolotoy-gramofon/2004-07-18",
            kind: "недельный радиочарт",
            rank: 1,
          },
          {
            id: "russian-radio-dubtsova-about-him-2004-hit",
            label: "«Русское Радио»: песня «О нём» вышла в 2004 году и стала дебютным сольным хитом",
            url: "https://www.zal.rusradio.ru/dubcova",
            kind: "официальный архив радиостанции",
          },
        ],
      },
    ],
  },
  // BETA 62: monthly issue-level anchors close the remaining broad annual
  // fallbacks in seven weak years. The issue contents and library scans are
  // kept as separate evidence links for every Soviet-era publication.
  krugozorMonthlyBroadcast(1971, 1, 82, "Майя Кристалинская", "Ненаглядный мой", "kristalinskaya-nenaglyadny-moy"),
  krugozorMonthlyBroadcast(1971, 5, 86, "Жанна Горощеня", "Любовь, как песня", "goroshchenya-lyubov-kak-pesnya"),
  krugozorMonthlyBroadcast(1977, 2, 155, "Песняры", "Вологда", "pesnyary-vologda"),
  krugozorMonthlyBroadcast(1977, 3, 156, "Надежда Чепрага", "Струны гитары", "chepraga-struny-gitary"),
  krugozorMonthlyBroadcast(1977, 11, 164, "Алла Пугачёва", "Женщина, которая поёт", "pugacheva-zhenshchina-kotoraya-poyot"),
  krugozorMonthlyBroadcast(1978, 3, 168, "Михаил Боярский", "Вступительная песня из телефильма «Собака на сене»", "boyarsky-sobaka-na-sene"),
  krugozorMonthlyBroadcast(1978, 6, 171, "Самоцветы", "Я люблю этот мир", "samotsvety-ya-lyublyu-etot-mir"),
  krugozorMonthlyBroadcast(1978, 7, 172, "Геннадий Трофимов", "И это всё о нём", "trofimov-i-eto-vsyo-o-nyom"),
  krugozorMonthlyBroadcast(1978, 8, 173, "Жанна Рождественская", "Дай мне сил, земля", "rozhdestvenskaya-day-mne-sil-zemlya"),
  krugozorMonthlyBroadcast(1978, 9, 174, "Яак Йоала", "Солнечные часы", "yoala-solnechnye-chasy"),
  krugozorMonthlyBroadcast(1978, 10, 175, "Евгений Дога", "Вальс из фильма «Мой ласковый и нежный зверь»", "doga-vals"),
  krugozorMonthlyBroadcast(1978, 12, 177, "Эдита Пьеха", "Придёт и к вам любовь", "piekha-pridyot-i-k-vam-lyubov"),
  krugozorMonthlyBroadcast(1980, 4, 193, "Галина Беседина и Сергей Тараненко", "Маленький принц", "besedina-taranenko-malenkiy-prints"),
  krugozorMonthlyBroadcast(1980, 12, 201, "Верасы", "Малиновка", "verasy-malinovka"),
  krugozorMonthlyBroadcast(1984, 4, 241, "Татьяна Анциферова", "Закат-рассвет", "antsiferova-zakat-rassvet"),
  krugozorMonthlyBroadcast(1984, 10, 247, "Иван Бобул", "Если любишь — люби", "bobul-esli-lyubish"),
  krugozorMonthlyBroadcast(1990, 4, 313, "Екатерина Бочарова", "Красный закат", "bocharova-krasny-zakat"),
  krugozorMonthlyBroadcast(1990, 7, 316, "Кино", "Звезда по имени Солнце", "kino-zvezda-po-imeni-solntse"),
  {
    chartDate: "2002-02-15",
    dateLabel: "февраль 2002",
    archiveYear: 2002,
    programLabel: "расширенное издание альбома «200 по встречной»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "Тату",
        title: "Нас не догонят",
        sources: monthlyReleaseSources(
          2002,
          "tatu-nas-ne-dogonyat-february",
          "https://music.apple.com/us/album/200-%D0%BF%D0%BE-%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%BD%D0%BE%D0%B9/1887888421",
          "Apple Music: расширенное издание «200 по встречной» с песней «Нас не догонят» · 15.02.2002",
        ),
      },
    ],
  },
  {
    chartDate: "2002-06-01",
    dateLabel: "июнь 2002",
    archiveYear: 2002,
    programLabel: "альбом REFLEX «Я тебя всегда буду ждать»",
    anchorKind: "месячный релиз",
    candidates: [
      {
        artist: "REFLEX",
        title: "Первый раз",
        sources: monthlyReleaseSources(
          2002,
          "reflex-perviy-raz-june",
          "https://music.apple.com/us/album/%D1%8F-%D1%82%D0%B5%D0%B1%D1%8F-%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-%D0%B1%D1%83%D0%B4%D1%83-%D0%B6%D0%B4%D0%B0%D1%82%D1%8C/880615344",
          "Apple Music: альбом «Я тебя всегда буду ждать» с песней «Первый раз» · 01.06.2002",
        ),
      },
    ],
  },
  {
    chartDate: "2002-12-22",
    dateLabel: "декабрь 2002 · телеэфир 22.12.2002",
    archiveYear: 2002,
    programLabel: "телеверсия «Золотого граммофона — 2002»",
    anchorKind: "месячный эфир",
    candidates: [
      {
        artist: "Би-2 и Чичерина",
        title: "Мой рок-н-ролл",
        sources: [
          {
            id: "golden-gramophone-2002-december-broadcast",
            label: "Архив премии: телеверсия церемонии вышла 22.12.2002; «Мой рок-н-ролл» — среди лауреатов",
            url: goldenGramophoneUrl,
            kind: "датированный телевизионный эфир",
          },
          {
            id: "mk-2002-moy-rok-n-roll-december",
            label: "«Звуковая дорожка» МК: «Мой рок-н-ролл» — № 2 в итоговом Top 30 hits-02",
            url: mkTop2002Url,
            kind: "читательский годовой чарт",
            rank: 2,
          },
        ],
      },
    ],
  },
];

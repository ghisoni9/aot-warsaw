/* Language switcher for Astronomy on Tap Warsaw.
   The pages are written in English; this file swaps the text for Polish or
   Italian in the browser. Names, addresses, e-mails and talk titles stay as
   they are. The choice is remembered and can be shared as ?lang=pl / ?lang=it. */
(() => {
  const DICT = {
    pl: {
      "Open in Google Maps": "Otwórz w Mapach Google",
      "Warsaw": "Warszawa",
      "Home": "Start",
      "Events": "Wydarzenia",
      "Team": "Zespół",
      "Get involved": "Dołącz",
      "Partners": "Partnerzy",
      "History": "Historia",
      "Part of the worldwide": "Część światowej sieci",
      "network.": ".",
      "Chat with": "Pogadaj z",
      "astronomers": "astronomami",
      "over beers": "przy piwie",
      "Free popular science talks in Warsaw pubs. Real astronomers explain what they actually do, you ask whatever you like, and a quiz with prizes keeps everyone on their toes. All ages, all backgrounds.": "Darmowe spotkania popularnonaukowe w warszawskich pubach. Astronomowie z krwi i kości opowiadają, czym naprawdę się zajmują, ty pytasz, o co chcesz, a między wykładami gramy w quiz z nagrodami. Dla każdego, bez względu na wiek i wykształcenie.",
      "See the events": "Zobacz wydarzenia",
      "Give a talk": "Wygłoś wykład",
      "Always free": "Zawsze za darmo",
      "No ticket, no registration. Just turn up.": "Bez biletów i zapisów. Po prostu przyjdź.",
      "Next event": "Najbliższe spotkanie",
      "#7 — Monday 9 November 2026": "#7 — poniedziałek, 9 listopada 2026",
      "Free entry": "Wstęp wolny",
      "Speakers and poster to be announced.": "Prelegentów i plakat ogłosimy wkrótce.",
      "Past events & speakers": "Minione spotkania i prelegenci",
      "What happens on the night": "Jak wygląda taki wieczór",
      "Two talks": "Dwa wykłady",
      "Two researchers, about 10 minutes each. Popular science, pitched so that anyone can follow it.": "Dwoje naukowców, każde po jakieś 10 minut. Popularnonaukowo — tak, żeby każdy dał radę nadążyć.",
      "A quiz": "Quiz",
      "A quiz between the talks, played on your phone, with astronomical prizes.": "Między wykładami quiz na telefonach, z astronomicznymi nagrodami.",
      "The astronomers are all yours": "Astronomowie są do twojej dyspozycji",
      "After the talks the speakers and the crew stay for a drink, and they are happy to be asked anything. No question is too simple or too strange — that is exactly why we are here.": "Po wykładach prelegenci i ekipa zostają na piwo i chętnie odpowiadają na pytania. Żadne pytanie nie jest zbyt proste ani zbyt dziwne — właśnie po to tu jesteśmy.",
      "Come along": "Wpadnij",
      "Entry is free and everything is in English. Follow us so you know when the next one is announced.": "Wstęp wolny, wszystko po angielsku. Obserwuj nas, żeby nie przegapić kolejnego spotkania.",
      "Every event is free to attend, and always in English.": "Każde spotkanie jest bezpłatne i zawsze po angielsku.",
      "Poster": "Plakat",
      "coming soon": "wkrótce",
      "#7 · next event": "#7 · najbliższe spotkanie",
      "Monday 9 November 2026": "poniedziałek, 9 listopada 2026",
      "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Host: Nicola Principi Cavaterra": "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "The Taps · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps · Henryka Sienkiewicza 4 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "Speakers to be announced": "Prelegentów ogłosimy wkrótce",
      "Follow us on": "Obserwuj nas na",
      "or": "lub",
      "to hear them first.": ", żeby dowiedzieć się pierwszy.",
      "12 October 2026": "12 października 2026",
      "10 June 2026": "10 czerwca 2026",
      "21 April 2026": "21 kwietnia 2026",
      "10 March 2026": "10 marca 2026",
      "5 February 2026": "5 lutego 2026",
      "9 December 2025": "9 grudnia 2025",
      "#1 — the first one": "#1 — ten pierwszy",
      "The team": "Zespół",
      "Astronomy on Tap Warsaw is run entirely by volunteers.": "Astronomy on Tap Warsaw opiera się wyłącznie na wolontariuszach.",
      "Direction": "Kierownictwo",
      "Lead, Artistic Director & Host": "Lider, dyrektor artystyczny i prowadzący",
      "Science Director & Crew Chief": "Dyrektorka naukowa i szefowa ekipy",
      "Event Director & Crew Chief": "Dyrektor ds. wydarzeń i szef ekipy",
      "Social Media Director": "Dyrektorka ds. social mediów",
      "Senior advisors": "Doradcy",
      "Graphic design": "Grafika",
      "Volunteer crew": "Ekipa wolontariuszy",
      "The people who make the evenings happen.": "Ludzie, dzięki którym te wieczory w ogóle się odbywają.",
      "Website & field": "Strona i pomoc na miejscu",
      "Field": "Pomoc na miejscu",
      "Undergraduate student relations": "Kontakt ze studentami",
      "Sound": "Dźwięk",
      "Facebook events & field": "Wydarzenia na Facebooku i pomoc na miejscu",
      "Want to join us?": "Chcesz dołączyć?",
      "Would you like to become part of the team? See": "Chcesz dołączyć do zespołu? Zobacz",
      "Astronomy on Tap Warsaw is free and non-profit, which means it runs on volunteers and on the people and institutions who support us. Here are three ways to be part of it.": "Astronomy on Tap Warsaw jest bezpłatne i non-profit — trzyma się dzięki wolontariuszom oraz ludziom i instytucjom, które nas wspierają. Oto trzy sposoby, żeby się włączyć.",
      "Are you a researcher? An amateur astronomer? A sci-fi expert? You can give a talk at an AoT event! Talks are about 10 minutes, in English, for an audience with no background. No equations, lots of pictures and a story worth telling.": "Zajmujesz się nauką? Jesteś miłośnikiem astronomii? Znawcą science fiction? Możesz wystąpić na AoT! Wykłady trwają około 10 minut, po angielsku, przed publicznością bez przygotowania. Bez wzorów, dużo zdjęć i historia, którą warto opowiedzieć.",
      "We run a rehearsal with every speaker beforehand, so first-time speakers are welcome too.": "Z każdym prelegentem robimy wcześniej próbę, więc debiutanci też są mile widziani.",
      "Propose a talk": "Zgłoś wykład",
      "Social Media": "Social media",
      "Join our social media team! We are looking for writers of scientific content, content creators, video editors, photographers, meme creators and graphic designers. Students, researchers and enthusiasts are all welcome, and for most of these roles you do not even need to be in Warsaw.": "Dołącz do naszego zespołu social mediów! Szukamy osób, które piszą o nauce, twórców contentu, montażystów wideo, fotografów, twórców memów i grafików. Studenci, naukowcy i pasjonaci — każdy jest mile widziany, a przy większości tych ról nie musisz nawet być w Warszawie.",
      "Apply to the team": "Aplikuj do zespołu",
      "Become a sponsor": "Zostań sponsorem",
      "Is your institute, company or venue interested in supporting public astronomy? Sponsors help us with prizes, printing, equipment and travel for speakers, and reach a large, curious audience in return. Every event is free thanks to them.": "Twoja instytucja, firma albo lokal chce wesprzeć popularyzację astronomii? Sponsorzy pomagają nam z nagrodami, drukiem, sprzętem i dojazdem prelegentów, a w zamian docierają do licznej i ciekawej świata publiczności. To dzięki nim wstęp jest zawsze wolny.",
      "We are happy to discuss what works for you, from a one-night partnership to supporting a whole season. See": "Chętnie ustalimy formułę, która pasuje tobie — od jednego wieczoru po cały sezon. Zobacz",
      "for who already supports us.": "kto już nas wspiera.",
      "Talk to us about sponsoring": "Porozmawiajmy o sponsoringu",
      "Free events need a stage, a projector and people who believe in them. Thank you to everyone below.": "Darmowe wydarzenia potrzebują sceny, projektora i ludzi, którzy w nie wierzą. Dziękujemy wszystkim poniżej.",
      "Venues": "Nasze lokale",
      "Henryka Sienkiewicza 4, Warsaw. Our home for events #1 to #5, from December 2025 to June 2026.": "Henryka Sienkiewicza 4, Warszawa. Nasz dom od pierwszego do piątego spotkania, od grudnia 2025 do czerwca 2026.",
      "Aleja Armii Ludowej 14, Warsaw. Live venue, record store and bookstore, and the home of event #6.": "Aleja Armii Ludowej 14, Warszawa. Klub z muzyką na żywo, sklep płytowy i księgarnia — gospodarz szóstego spotkania.",
      "Under the patronage of": "Pod patronatem",
      "Polish Astronomical Society": "Polskie Towarzystwo Astronomiczne",
      "Astronomy on Tap Warsaw is held under the patronage of Polskie Towarzystwo Astronomiczne (PTA), the society of professional astronomers in Poland.": "Astronomy on Tap Warsaw odbywa się pod patronatem Polskiego Towarzystwa Astronomicznego (PTA), zrzeszającego zawodowych astronomów w Polsce.",
      "Become a partner": "Zostań partnerem",
      "We are looking for support with prizes, printing and travel for speakers. If your institute or company would like to help, see": "Szukamy wsparcia przy nagrodach, druku i dojazdach prelegentów. Jeśli twoja instytucja albo firma chciałaby pomóc, zobacz",
      "A global network, and how it reached the Polish capital.": "Światowa sieć i jak dotarła do stolicy Polski.",
      "Where it began": "Gdzie się zaczęło",
      "Astronomy on Tap started in New York in April 2013, when the astronomers Meg Schwamb and Emily Rice held the first event at the Way Station, a bar in Brooklyn. The format was simple: take researchers out of the lecture hall, put them in front of people with a drink in their hand, and let the audience ask whatever it likes.": "Astronomy on Tap zaczęło się w Nowym Jorku w kwietniu 2013 roku, kiedy astronomki Meg Schwamb i Emily Rice zorganizowały pierwszy wieczór w Way Station, barze na Brooklynie. Pomysł był prosty: wyciągnąć naukowców z sal wykładowych, postawić ich przed ludźmi z drinkiem w ręku i pozwolić publiczności pytać o wszystko.",
      "It spread quickly. Within a couple of years there were events on several continents, and today the network covers cities all over the world, each chapter run by local volunteers. Everything is free, and nobody gets paid. See": "Pomysł szybko się rozszedł. W ciągu kilku lat spotkania odbywały się na kilku kontynentach, a dziś sieć obejmuje miasta na całym świecie — każdy oddział prowadzą lokalni wolontariusze. Wszystko jest bezpłatne i nikt nie dostaje za to wynagrodzenia. Pełna sieć na",
      "for the full network.": ".",
      "Warsaw's first Astronomy on Tap was started in 2019 by Milena Ratajczak. It ran for only a few nights: the pandemic closed the pubs in 2020, and the series stopped before it had really begun.": "Pierwsze warszawskie Astronomy on Tap stworzyła w 2019 roku Milena Ratajczak. Odbyło się tylko kilka wieczorów: w 2020 pandemia zamknęła puby i wszystko zatrzymało się, zanim na dobre się zaczęło.",
      "It came back in December 2025, at The Taps, a pub on Henryka Sienkiewicza. The first evening brought together two researchers working in the city, a room that filled up faster than anyone expected, and the quiz that has been part of every event since. Milena has since returned to the stage as a speaker, talking about exoplanets in February 2026.": "Wróciliśmy w grudniu 2025 roku, do pubu The Taps przy Sienkiewicza. Pierwszego wieczoru wystąpiło dwoje naukowców pracujących w Warszawie, sala zapełniła się szybciej, niż ktokolwiek się spodziewał, a quiz od tamtej pory jest częścią każdego spotkania. Milena wróciła później na scenę jako prelegentka — w lutym 2026 opowiadała o egzoplanetach.",
      "Six events later, the relaunched series has hosted researchers from Polish institutes and from abroad, on everything from meteorites and interstellar comets to dark energy, hidden black holes and machine learning. The talks are in English, the entry is free, and the audience ranges from astronomy students to people who came for a beer and stayed for the stars.": "Sześć spotkań później gościliśmy naukowców z polskich instytutów i z zagranicy — od meteorytów i komet międzygwiezdnych po ciemną energię, ukryte czarne dziury i uczenie maszynowe. Wykłady są po angielsku, wstęp wolny, a na widowni siedzą zarówno studenci astronomii, jak i ludzie, którzy przyszli na piwo i zostali dla gwiazd.",
      "Our events so far": "Nasze dotychczasowe spotkania",
      "9 Dec 2025": "9 gru 2025",
      "5 Feb 2026": "5 lut 2026",
      "10 Mar 2026": "10 mar 2026",
      "21 Apr 2026": "21 kwi 2026",
      "10 Jun 2026": "10 cze 2026",
      "12 Oct 2026": "12 paź 2026",
      "Anna Durkalec on barely visible galaxies; Fraser Gillan on comets and interstellar rocks.": "Anna Durkalec o ledwo widocznych galaktykach; Fraser Gillan o kometach i skałach międzygwiezdnych.",
      "Milena Ratajczak on exoplanets; Nandini Hazra on how large telescopes can be.": "Milena Ratajczak o egzoplanetach; Nandini Hazra o tym, jak wielkie potrafią być teleskopy.",
      "Wojciech Hellwing on the crisis in cosmology; Priscila Pessi on stellar deaths.": "Wojciech Hellwing o kryzysie w kosmologii; Priscila Pessi o tym, jak umierają gwiazdy.",
      "Denis Burgarella on how we are built by the Universe; Krzysztof Lisiecki on stones from the sky.": "Denis Burgarella o tym, jak zbudował nas Wszechświat; Krzysztof Lisiecki o kamieniach spadających z nieba.",
      "Łukasz Wyrzykowski on hidden black holes; Giuliano Lorenzon on the universe in a grain of dust.": "Łukasz Wyrzykowski o ukrytych czarnych dziurach; Giuliano Lorenzon o wszechświecie w ziarnku pyłu.",
      "Tom Sedgwick on cosmic discovery with AI; Pratik Dabhade on the invisible universe.": "Tom Sedgwick o kosmicznych odkryciach z pomocą AI; Pratik Dabhade o niewidzialnym wszechświecie."
    },

    it: {
      "Open in Google Maps": "Apri in Google Maps",
      "Warsaw": "Varsavia",
      "Home": "Home",
      "Events": "Eventi",
      "Team": "Il team",
      "Get involved": "Partecipa",
      "Partners": "Partner",
      "History": "Storia",
      "Part of the worldwide": "Parte della rete mondiale",
      "network.": ".",
      "Chat with": "Parla con",
      "astronomers": "gli astronomi",
      "over beers": "davanti a una birra",
      "Free popular science talks in Warsaw pubs. Real astronomers explain what they actually do, you ask whatever you like, and a quiz with prizes keeps everyone on their toes. All ages, all backgrounds.": "Divulgazione scientifica gratuita nei pub di Varsavia. Astronomi in carne e ossa raccontano di cosa si occupano davvero, tu chiedi quello che vuoi e tra un intervento e l'altro c'è un quiz a premi. Per tutte le età, senza bisogno di basi scientifiche.",
      "See the events": "Guarda gli eventi",
      "Give a talk": "Proponi un intervento",
      "Always free": "Sempre gratis",
      "No ticket, no registration. Just turn up.": "Niente biglietti né iscrizioni: basta presentarsi.",
      "Next event": "Prossimo evento",
      "#7 — Monday 9 November 2026": "#7 — lunedì 9 novembre 2026",
      "Free entry": "Ingresso libero",
      "Speakers and poster to be announced.": "Relatori e locandina saranno annunciati a breve.",
      "Past events & speakers": "Eventi passati e relatori",
      "What happens on the night": "Com'è la serata",
      "Two talks": "Due interventi",
      "Two researchers, about 10 minutes each. Popular science, pitched so that anyone can follow it.": "Due ricercatori, una decina di minuti a testa. Divulgazione pensata perché possa seguirla chiunque.",
      "A quiz": "Un quiz",
      "A quiz between the talks, played on your phone, with astronomical prizes.": "Tra un intervento e l'altro, un quiz da giocare col telefono, con premi astronomici.",
      "The astronomers are all yours": "Gli astronomi sono a tua disposizione",
      "After the talks the speakers and the crew stay for a drink, and they are happy to be asked anything. No question is too simple or too strange — that is exactly why we are here.": "Dopo gli interventi i relatori e la squadra restano a bere qualcosa e sono ben contenti di rispondere a qualsiasi domanda. Nessuna domanda è troppo semplice o troppo strana: siamo qui proprio per questo.",
      "Come along": "Passa a trovarci",
      "Entry is free and everything is in English. Follow us so you know when the next one is announced.": "L'ingresso è libero e si parla in inglese. Seguici per non perderti il prossimo appuntamento.",
      "Every event is free to attend, and always in English.": "Tutti gli eventi sono gratuiti e sempre in inglese.",
      "Poster": "Locandina",
      "coming soon": "in arrivo",
      "#7 · next event": "#7 · prossimo evento",
      "Monday 9 November 2026": "lunedì 9 novembre 2026",
      "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Host: Nicola Principi Cavaterra": "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Conduce: Nicola Principi Cavaterra",
      "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Conduce: Nicola Principi Cavaterra",
      "The Taps · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps · Henryka Sienkiewicza 4 · 19:00 · Conduce: Nicola Principi Cavaterra",
      "Speakers to be announced": "Relatori da annunciare",
      "Follow us on": "Seguici su",
      "or": "o",
      "to hear them first.": "per scoprirli per primo.",
      "12 October 2026": "12 ottobre 2026",
      "10 June 2026": "10 giugno 2026",
      "21 April 2026": "21 aprile 2026",
      "10 March 2026": "10 marzo 2026",
      "5 February 2026": "5 febbraio 2026",
      "9 December 2025": "9 dicembre 2025",
      "#1 — the first one": "#1 — il primo di sempre",
      "The team": "Il team",
      "Astronomy on Tap Warsaw is run entirely by volunteers.": "Astronomy on Tap Warsaw va avanti solo grazie ai volontari.",
      "Direction": "Direzione",
      "Lead, Artistic Director & Host": "Capo progetto, direttore artistico e conduttore",
      "Science Director & Crew Chief": "Direttrice scientifica e responsabile della squadra",
      "Event Director & Crew Chief": "Direttore eventi e responsabile della squadra",
      "Social Media Director": "Responsabile social",
      "Senior advisors": "Consulenti",
      "Graphic design": "Grafica",
      "Volunteer crew": "I volontari",
      "The people who make the evenings happen.": "Le persone che tengono in piedi le serate.",
      "Website & field": "Sito e supporto in sala",
      "Field": "Supporto in sala",
      "Undergraduate student relations": "Contatti con gli studenti",
      "Sound": "Audio",
      "Facebook events & field": "Eventi Facebook e supporto in sala",
      "Want to join us?": "Vuoi unirti a noi?",
      "Would you like to become part of the team? See": "Ti va di entrare nel team? Vedi",
      "Astronomy on Tap Warsaw is free and non-profit, which means it runs on volunteers and on the people and institutions who support us. Here are three ways to be part of it.": "Astronomy on Tap Warsaw è gratuita e senza scopo di lucro: esiste grazie ai volontari e a chi ci sostiene, persone e istituzioni. Ecco tre modi per darci una mano.",
      "Are you a researcher? An amateur astronomer? A sci-fi expert? You can give a talk at an AoT event! Talks are about 10 minutes, in English, for an audience with no background. No equations, lots of pictures and a story worth telling.": "Fai ricerca? Sei un astrofilo? Un esperto di fantascienza? Puoi salire sul palco di AoT! Gli interventi durano una decina di minuti, in inglese, davanti a un pubblico senza basi scientifiche. Niente formule, tante immagini e una storia che valga la pena raccontare.",
      "We run a rehearsal with every speaker beforehand, so first-time speakers are welcome too.": "Con ogni relatore facciamo una prova prima della serata, quindi va benissimo anche se non hai mai parlato in pubblico.",
      "Propose a talk": "Proponi un intervento",
      "Social Media": "Social",
      "Join our social media team! We are looking for writers of scientific content, content creators, video editors, photographers, meme creators and graphic designers. Students, researchers and enthusiasts are all welcome, and for most of these roles you do not even need to be in Warsaw.": "Entra nel nostro team social! Cerchiamo chi scrive contenuti scientifici, content creator, chi monta video, fotografi, chi crea meme e grafici. Studenti, ricercatori e semplici appassionati sono tutti benvenuti e per quasi tutti questi ruoli non serve nemmeno essere a Varsavia.",
      "Apply to the team": "Candidati al team",
      "Become a sponsor": "Diventa sponsor",
      "Is your institute, company or venue interested in supporting public astronomy? Sponsors help us with prizes, printing, equipment and travel for speakers, and reach a large, curious audience in return. Every event is free thanks to them.": "Il tuo istituto, la tua azienda o il tuo locale vuole sostenere la divulgazione astronomica? Gli sponsor ci aiutano con premi, stampe, attrezzatura e viaggi dei relatori; in cambio arrivano a un pubblico numeroso e curioso. È grazie a loro che ogni serata resta gratuita.",
      "We are happy to discuss what works for you, from a one-night partnership to supporting a whole season. See": "Troviamo volentieri la formula giusta: una singola serata oppure un'intera stagione. Guarda",
      "for who already supports us.": "chi ci sostiene già.",
      "Talk to us about sponsoring": "Parliamo di sponsorizzazioni",
      "Free events need a stage, a projector and people who believe in them. Thank you to everyone below.": "Un evento gratuito ha bisogno di un palco, di un proiettore e di qualcuno che ci creda. Grazie a tutti quelli qui sotto.",
      "Venues": "I locali",
      "Henryka Sienkiewicza 4, Warsaw. Our home for events #1 to #5, from December 2025 to June 2026.": "Henryka Sienkiewicza 4, Varsavia. La nostra casa dal primo al quinto evento, da dicembre 2025 a giugno 2026.",
      "Aleja Armii Ludowej 14, Warsaw. Live venue, record store and bookstore, and the home of event #6.": "Aleja Armii Ludowej 14, Varsavia. Locale con musica dal vivo, negozio di dischi e libreria: la casa del sesto evento.",
      "Under the patronage of": "Con il patrocinio di",
      "Polish Astronomical Society": "Società Astronomica Polacca",
      "Astronomy on Tap Warsaw is held under the patronage of Polskie Towarzystwo Astronomiczne (PTA), the society of professional astronomers in Poland.": "Astronomy on Tap Warsaw si svolge con il patrocinio della Società Astronomica Polacca (Polskie Towarzystwo Astronomiczne, PTA), che riunisce gli astronomi professionisti del Paese.",
      "Become a partner": "Diventa partner",
      "We are looking for support with prizes, printing and travel for speakers. If your institute or company would like to help, see": "Cerchiamo una mano per premi, stampe e viaggi dei relatori. Se il tuo istituto o la tua azienda vuole contribuire, guarda",
      "A global network, and how it reached the Polish capital.": "Una rete mondiale e come è arrivata nella capitale polacca.",
      "Where it began": "Dove tutto è cominciato",
      "Astronomy on Tap started in New York in April 2013, when the astronomers Meg Schwamb and Emily Rice held the first event at the Way Station, a bar in Brooklyn. The format was simple: take researchers out of the lecture hall, put them in front of people with a drink in their hand, and let the audience ask whatever it likes.": "Astronomy on Tap è nata a New York nell'aprile del 2013, quando le astronome Meg Schwamb ed Emily Rice hanno organizzato la prima serata al Way Station, un bar di Brooklyn. La formula era semplice: portare i ricercatori fuori dall'aula, metterli davanti a gente con un bicchiere in mano e lasciare che il pubblico chieda quello che vuole.",
      "It spread quickly. Within a couple of years there were events on several continents, and today the network covers cities all over the world, each chapter run by local volunteers. Everything is free, and nobody gets paid. See": "L'idea ha preso piede in fretta: nel giro di un paio d'anni si organizzavano serate in diversi continenti e oggi la rete tocca città di tutto il mondo, ognuna portata avanti da volontari del posto. Tutto è gratuito e nessuno viene pagato. La rete completa su",
      "for the full network.": ".",
      "Warsaw's first Astronomy on Tap was started in 2019 by Milena Ratajczak. It ran for only a few nights: the pandemic closed the pubs in 2020, and the series stopped before it had really begun.": "La prima Astronomy on Tap di Varsavia l'ha messa in piedi Milena Ratajczak nel 2019. Durò solo poche serate: nel 2020 la pandemia chiuse i pub e tutto si fermò prima ancora di cominciare sul serio.",
      "It came back in December 2025, at The Taps, a pub on Henryka Sienkiewicza. The first evening brought together two researchers working in the city, a room that filled up faster than anyone expected, and the quiz that has been part of every event since. Milena has since returned to the stage as a speaker, talking about exoplanets in February 2026.": "È ripartita a dicembre 2025 al The Taps, un pub in via Henryka Sienkiewicza. Quella prima sera c'erano due ricercatori che lavorano in città, una sala che si è riempita molto più in fretta del previsto e il quiz che da allora non è più mancato. Milena è poi tornata sul palco da relatrice, per parlare di esopianeti, a febbraio 2026.",
      "Six events later, the relaunched series has hosted researchers from Polish institutes and from abroad, on everything from meteorites and interstellar comets to dark energy, hidden black holes and machine learning. The talks are in English, the entry is free, and the audience ranges from astronomy students to people who came for a beer and stayed for the stars.": "Sei serate più tardi, la rassegna ha ospitato ricercatori di istituti polacchi e stranieri, parlando di tutto: meteoriti, comete interstellari, energia oscura, buchi neri nascosti, machine learning. Si parla in inglese, si entra gratis e il pubblico va dagli studenti di astronomia a chi era entrato per una birra ed è rimasto per le stelle.",
      "Our events so far": "Le serate fatte finora",
      "9 Dec 2025": "9 dic 2025",
      "5 Feb 2026": "5 feb 2026",
      "10 Mar 2026": "10 mar 2026",
      "21 Apr 2026": "21 apr 2026",
      "10 Jun 2026": "10 giu 2026",
      "12 Oct 2026": "12 ott 2026",
      "Anna Durkalec on barely visible galaxies; Fraser Gillan on comets and interstellar rocks.": "Anna Durkalec sulle galassie quasi invisibili; Fraser Gillan su comete e rocce interstellari.",
      "Milena Ratajczak on exoplanets; Nandini Hazra on how large telescopes can be.": "Milena Ratajczak sugli esopianeti; Nandini Hazra su quanto possono diventare grandi i telescopi.",
      "Wojciech Hellwing on the crisis in cosmology; Priscila Pessi on stellar deaths.": "Wojciech Hellwing sulla crisi della cosmologia; Priscila Pessi su come muoiono le stelle.",
      "Denis Burgarella on how we are built by the Universe; Krzysztof Lisiecki on stones from the sky.": "Denis Burgarella su come l'Universo ci ha costruiti; Krzysztof Lisiecki sulle pietre cadute dal cielo.",
      "Łukasz Wyrzykowski on hidden black holes; Giuliano Lorenzon on the universe in a grain of dust.": "Łukasz Wyrzykowski sui buchi neri nascosti; Giuliano Lorenzon sull'universo in un granello di polvere.",
      "Tom Sedgwick on cosmic discovery with AI; Pratik Dabhade on the invisible universe.": "Tom Sedgwick sulle scoperte cosmiche con l'IA; Pratik Dabhade sull'universo invisibile."
    },

    ca: {
      "Open in Google Maps": "Obre a Google Maps",
      "Warsaw": "Varsòvia",
      "Home": "Inici",
      "Events": "Esdeveniments",
      "Team": "L'equip",
      "Get involved": "Participa",
      "Partners": "Col·laboradors",
      "History": "Història",
      "Part of the worldwide": "Part de la xarxa mundial",
      "network.": ".",
      "Chat with": "Xerra amb",
      "astronomers": "els astrònoms",
      "over beers": "fent una cervesa",
      "Free popular science talks in Warsaw pubs. Real astronomers explain what they actually do, you ask whatever you like, and a quiz with prizes keeps everyone on their toes. All ages, all backgrounds.": "Divulgació científica gratuïta als pubs de Varsòvia. Astrònoms de debò expliquen de què s'ocupen realment, tu preguntes el que vulguis i entre xerrada i xerrada hi ha un concurs amb premis. Per a totes les edats i sense necessitat de base científica.",
      "See the events": "Mira els esdeveniments",
      "Give a talk": "Fes una xerrada",
      "Always free": "Sempre gratuït",
      "No ticket, no registration. Just turn up.": "Sense entrades ni inscripcions: només cal venir.",
      "Next event": "Pròxima nit",
      "#7 — Monday 9 November 2026": "#7 — dilluns 9 de novembre de 2026",
      "Free entry": "Entrada lliure",
      "Speakers and poster to be announced.": "Els ponents i el cartell s'anunciaran aviat.",
      "Past events & speakers": "Esdeveniments anteriors i ponents",
      "What happens on the night": "Com va la nit",
      "Two talks": "Dues xerrades",
      "Two researchers, about 10 minutes each. Popular science, pitched so that anyone can follow it.": "Dos investigadors, uns deu minuts cadascun. Divulgació pensada perquè la pugui seguir tothom.",
      "A quiz": "Un concurs",
      "A quiz between the talks, played on your phone, with astronomical prizes.": "Entre xerrada i xerrada, un concurs per jugar amb el mòbil i premis astronòmics.",
      "The astronomers are all yours": "Els astrònoms són a la teva disposició",
      "After the talks the speakers and the crew stay for a drink, and they are happy to be asked anything. No question is too simple or too strange — that is exactly why we are here.": "Després de les xerrades, els ponents i l'equip es queden a fer una cervesa i responen de gust el que els preguntis. Cap pregunta és massa senzilla ni massa estranya: som aquí precisament per això.",
      "Come along": "Vine a veure'ns",
      "Entry is free and everything is in English. Follow us so you know when the next one is announced.": "L'entrada és lliure i tot es fa en anglès. Segueix-nos per no perdre't la pròxima.",
      "Every event is free to attend, and always in English.": "Tots els esdeveniments són gratuïts i sempre en anglès.",
      "Poster": "Cartell",
      "coming soon": "aviat",
      "#7 · next event": "#7 · pròxima nit",
      "Monday 9 November 2026": "dilluns 9 de novembre de 2026",
      "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Host: Nicola Principi Cavaterra": "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Presenta: Nicola Principi Cavaterra",
      "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Presenta: Nicola Principi Cavaterra",
      "The Taps · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra": "The Taps · Henryka Sienkiewicza 4 · 19:00 · Presenta: Nicola Principi Cavaterra",
      "Speakers to be announced": "Ponents per anunciar",
      "Follow us on": "Segueix-nos a",
      "or": "o",
      "to hear them first.": "per saber-ho abans que ningú.",
      "12 October 2026": "12 d'octubre de 2026",
      "10 June 2026": "10 de juny de 2026",
      "21 April 2026": "21 d'abril de 2026",
      "10 March 2026": "10 de març de 2026",
      "5 February 2026": "5 de febrer de 2026",
      "9 December 2025": "9 de desembre de 2025",
      "#1 — the first one": "#1 — el primer de tots",
      "The team": "L'equip",
      "Astronomy on Tap Warsaw is run entirely by volunteers.": "Astronomy on Tap Warsaw tira endavant només gràcies als voluntaris.",
      "Direction": "Direcció",
      "Lead, Artistic Director & Host": "Cap de projecte, director artístic i presentador",
      "Science Director & Crew Chief": "Directora científica i cap d'equip",
      "Event Director & Crew Chief": "Director d'esdeveniments i cap d'equip",
      "Social Media Director": "Responsable de xarxes",
      "Senior advisors": "Assessors",
      "Graphic design": "Disseny gràfic",
      "Volunteer crew": "Equip de voluntaris",
      "The people who make the evenings happen.": "La gent que fa possibles aquestes nits.",
      "Website & field": "Web i suport a la sala",
      "Field": "Suport a la sala",
      "Undergraduate student relations": "Relacions amb els estudiants",
      "Sound": "So",
      "Facebook events & field": "Esdeveniments de Facebook i suport a la sala",
      "Want to join us?": "Vols unir-t'hi?",
      "Would you like to become part of the team? See": "Vols formar part de l'equip? Mira",
      "Astronomy on Tap Warsaw is free and non-profit, which means it runs on volunteers and on the people and institutions who support us. Here are three ways to be part of it.": "Astronomy on Tap Warsaw és gratuïta i sense ànim de lucre: tira endavant gràcies als voluntaris i a les persones i institucions que ens donen suport. Aquí tens tres maneres de participar-hi.",
      "Are you a researcher? An amateur astronomer? A sci-fi expert? You can give a talk at an AoT event! Talks are about 10 minutes, in English, for an audience with no background. No equations, lots of pictures and a story worth telling.": "Et dediques a la recerca? Ets aficionat a l'astronomia? Expert en ciència-ficció? Pots fer una xerrada a l'AoT! Les xerrades duren uns deu minuts, en anglès, davant d'un públic sense base científica. Sense fórmules, moltes imatges i una història que valgui la pena explicar.",
      "We run a rehearsal with every speaker beforehand, so first-time speakers are welcome too.": "Amb cada ponent fem un assaig abans de la nit, així que si no has parlat mai en públic també hi ets benvingut.",
      "Propose a talk": "Proposa una xerrada",
      "Social Media": "Xarxes socials",
      "Join our social media team! We are looking for writers of scientific content, content creators, video editors, photographers, meme creators and graphic designers. Students, researchers and enthusiasts are all welcome, and for most of these roles you do not even need to be in Warsaw.": "Uneix-te al nostre equip de xarxes! Busquem qui escrigui continguts científics, creadors de contingut, editors de vídeo, fotògrafs, creadors de memes i dissenyadors gràfics. Estudiants, investigadors i aficionats hi són tots benvinguts i, per a gairebé tots aquests papers, ni tan sols cal ser a Varsòvia.",
      "Apply to the team": "Presenta la candidatura",
      "Become a sponsor": "Fes-te patrocinador",
      "Is your institute, company or venue interested in supporting public astronomy? Sponsors help us with prizes, printing, equipment and travel for speakers, and reach a large, curious audience in return. Every event is free thanks to them.": "El teu institut, la teva empresa o el teu local vol donar suport a la divulgació astronòmica? Els patrocinadors ens ajuden amb premis, impressió, equipament i desplaçaments dels ponents i, a canvi, arriben a un públic nombrós i curiós. És gràcies a ells que cada nit és gratuïta.",
      "We are happy to discuss what works for you, from a one-night partnership to supporting a whole season. See": "Trobarem de gust la fórmula que et vagi bé: una sola nit o tota una temporada. Mira",
      "for who already supports us.": "qui ja ens dona suport.",
      "Talk to us about sponsoring": "Parlem de patrocini",
      "Free events need a stage, a projector and people who believe in them. Thank you to everyone below.": "Un esdeveniment gratuït necessita un escenari, un projector i gent que hi cregui. Gràcies a tothom que hi ha aquí sota.",
      "Venues": "Els locals",
      "Henryka Sienkiewicza 4, Warsaw. Our home for events #1 to #5, from December 2025 to June 2026.": "Henryka Sienkiewicza 4, Varsòvia. La nostra casa del primer al cinquè esdeveniment, del desembre del 2025 al juny del 2026.",
      "Aleja Armii Ludowej 14, Warsaw. Live venue, record store and bookstore, and the home of event #6.": "Aleja Armii Ludowej 14, Varsòvia. Sala de concerts, botiga de discos i llibreria: la casa del sisè esdeveniment.",
      "Under the patronage of": "Sota el patrocini de",
      "Polish Astronomical Society": "Societat Astronòmica Polonesa",
      "Astronomy on Tap Warsaw is held under the patronage of Polskie Towarzystwo Astronomiczne (PTA), the society of professional astronomers in Poland.": "Astronomy on Tap Warsaw se celebra sota el patrocini de la Societat Astronòmica Polonesa (Polskie Towarzystwo Astronomiczne, PTA), que aplega els astrònoms professionals del país.",
      "Become a partner": "Fes-te col·laborador",
      "We are looking for support with prizes, printing and travel for speakers. If your institute or company would like to help, see": "Busquem ajuda per a premis, impressió i desplaçaments dels ponents. Si el teu institut o la teva empresa hi vol col·laborar, mira",
      "A global network, and how it reached the Polish capital.": "Una xarxa mundial i com va arribar a la capital polonesa.",
      "Where it began": "On va començar tot",
      "Astronomy on Tap started in New York in April 2013, when the astronomers Meg Schwamb and Emily Rice held the first event at the Way Station, a bar in Brooklyn. The format was simple: take researchers out of the lecture hall, put them in front of people with a drink in their hand, and let the audience ask whatever it likes.": "Astronomy on Tap va néixer a Nova York l'abril del 2013, quan les astrònomes Meg Schwamb i Emily Rice van organitzar la primera nit al Way Station, un bar de Brooklyn. La fórmula era senzilla: treure els investigadors de l'aula, posar-los davant de gent amb un got a la mà i deixar que el públic pregunti el que vulgui.",
      "It spread quickly. Within a couple of years there were events on several continents, and today the network covers cities all over the world, each chapter run by local volunteers. Everything is free, and nobody gets paid. See": "La idea va arrelar de pressa: en un parell d'anys ja hi havia nits a diversos continents i avui la xarxa arriba a ciutats de tot el món, cadascuna tirada endavant per voluntaris locals. Tot és gratuït i ningú no hi cobra. La xarxa sencera a",
      "for the full network.": ".",
      "Warsaw's first Astronomy on Tap was started in 2019 by Milena Ratajczak. It ran for only a few nights: the pandemic closed the pubs in 2020, and the series stopped before it had really begun.": "La primera Astronomy on Tap de Varsòvia la va engegar Milena Ratajczak el 2019. Només van ser unes quantes nits: el 2020 la pandèmia va tancar els pubs i tot es va aturar abans de començar de debò.",
      "It came back in December 2025, at The Taps, a pub on Henryka Sienkiewicza. The first evening brought together two researchers working in the city, a room that filled up faster than anyone expected, and the quiz that has been part of every event since. Milena has since returned to the stage as a speaker, talking about exoplanets in February 2026.": "Va tornar el desembre del 2025, al pub The Taps, al carrer Henryka Sienkiewicza. Aquella primera nit hi van parlar dos investigadors que treballen a la ciutat, la sala es va omplir molt més de pressa del que ningú esperava i el concurs, des d'aleshores, no hi ha faltat mai. Milena va tornar després a l'escenari com a ponent, per parlar d'exoplanetes, el febrer del 2026.",
      "Six events later, the relaunched series has hosted researchers from Polish institutes and from abroad, on everything from meteorites and interstellar comets to dark energy, hidden black holes and machine learning. The talks are in English, the entry is free, and the audience ranges from astronomy students to people who came for a beer and stayed for the stars.": "Sis nits més tard, el cicle ha portat investigadors d'instituts polonesos i estrangers, parlant de tot: meteorits, cometes interestel·lars, energia fosca, forats negres amagats, aprenentatge automàtic. Es parla en anglès, s'hi entra de franc i el públic va d'estudiants d'astronomia a gent que havia entrat per una cervesa i s'hi ha quedat per les estrelles.",
      "Our events so far": "Les nits que hem fet fins ara",
      "9 Dec 2025": "9 des. 2025",
      "5 Feb 2026": "5 febr. 2026",
      "10 Mar 2026": "10 març 2026",
      "21 Apr 2026": "21 abr. 2026",
      "10 Jun 2026": "10 juny 2026",
      "12 Oct 2026": "12 oct. 2026",
      "Anna Durkalec on barely visible galaxies; Fraser Gillan on comets and interstellar rocks.": "Anna Durkalec sobre les galàxies gairebé invisibles; Fraser Gillan sobre cometes i roques interestel·lars.",
      "Milena Ratajczak on exoplanets; Nandini Hazra on how large telescopes can be.": "Milena Ratajczak sobre exoplanetes; Nandini Hazra sobre fins a quin punt poden ser grans els telescopis.",
      "Wojciech Hellwing on the crisis in cosmology; Priscila Pessi on stellar deaths.": "Wojciech Hellwing sobre la crisi de la cosmologia; Priscila Pessi sobre com moren les estrelles.",
      "Denis Burgarella on how we are built by the Universe; Krzysztof Lisiecki on stones from the sky.": "Denis Burgarella sobre com ens ha construït l'Univers; Krzysztof Lisiecki sobre les pedres caigudes del cel.",
      "Łukasz Wyrzykowski on hidden black holes; Giuliano Lorenzon on the universe in a grain of dust.": "Łukasz Wyrzykowski sobre els forats negres amagats; Giuliano Lorenzon sobre l'univers en un gra de pols.",
      "Tom Sedgwick on cosmic discovery with AI; Pratik Dabhade on the invisible universe.": "Tom Sedgwick sobre els descobriments còsmics amb IA; Pratik Dabhade sobre l'univers invisible."
    }
  };

  const LANGS = ["en", "pl", "it", "ca"];
  const KEY = "aot-lang";
  const originals = new WeakMap();   // text node -> its English text

  const textNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const tag = n.parentElement && n.parentElement.tagName;
        if (!tag || tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const out = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) out.push(n);
    return out;
  };

  const apply = (lang) => {
    const dict = DICT[lang];
    for (const node of textNodes()) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const key = original.replace(/\s+/g, " ").trim();
      if (!dict) { node.nodeValue = original; continue; }
      const translated = dict[key];
      if (translated === undefined) { node.nodeValue = original; continue; }
      // keep the original leading/trailing whitespace so the layout does not shift
      let lead = original.match(/^\s*/)[0];
      const tail = original.match(/\s*$/)[0];
      // a translation that is only punctuation must hug the previous word
      if (/^[.,;:!?]/.test(translated)) lead = "";
      node.nodeValue = lead + translated + tail;
    }
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(b => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  };

  const setLang = (lang, remember = true) => {
    if (!LANGS.includes(lang)) lang = "en";
    apply(lang);
    if (remember) {
      try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
      const url = new URL(location.href);
      if (lang === "en") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    }
  };

  const start = () => {
    document.querySelectorAll(".lang-btn").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
    const fromUrl = new URLSearchParams(location.search).get("lang");
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    const lang = LANGS.includes(fromUrl) ? fromUrl : (LANGS.includes(saved) ? saved : "en");
    if (lang !== "en") setLang(lang, false);
    apply(lang);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

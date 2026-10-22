/* Language switcher for Astronomy on Tap Warsaw.
   The pages are written in English; this file swaps the text for Polish or
   Italian in the browser. Names, addresses, e-mails and talk titles stay as
   they are. The choice is remembered and can be shared as ?lang=pl / ?lang=it. */
(() => {
  const DICT = {
    pl: {
      // navigation and shell
      "Warsaw": "Warszawa",
      "Home": "Start", "Events": "Wydarzenia", "Team": "Zespół",
      "Get involved": "Dołącz", "Partners": "Partnerzy", "History": "Historia",
      "Part of the worldwide": "Część światowej sieci", "network.": ".",

      // home
      "Chat with": "Porozmawiaj z", "astronomers": "astronomami", "over beers": "przy piwie",
      "Free popular science talks in Warsaw pubs. Real astronomers explain what they actually do, you ask whatever you like, and a quiz with prizes keeps everyone on their toes. All ages, all backgrounds.":
        "Darmowe wykłady popularnonaukowe w warszawskich pubach. Prawdziwi astronomowie opowiadają, czym naprawdę się zajmują, ty pytasz o co chcesz, a quiz z nagrodami trzyma wszystkich w napięciu. Bez względu na wiek i wykształcenie.",
      "See the events": "Zobacz wydarzenia", "Give a talk": "Wygłoś wykład",
      "Always free": "Zawsze za darmo",
      "No ticket, no registration. Just turn up.": "Bez biletów i zapisów. Po prostu przyjdź.",
      "Next event": "Następne wydarzenie",
      "#7 — Monday 9 November 2026": "#7 — poniedziałek, 9 listopada 2026",
      "Free entry": "Wstęp wolny",
      "Speakers and poster to be announced.": "Prelegenci i plakat wkrótce.",
      "Past events & speakers": "Poprzednie wydarzenia i prelegenci",
      "What happens on the night": "Jak wygląda wieczór",
      "Two talks": "Dwa wykłady",
      "Two researchers, about 10 minutes each. Popular science, pitched so that anyone can follow it.":
        "Dwoje naukowców, po około 10 minut. Popularnonaukowo, tak żeby każdy mógł nadążyć.",
      "A quiz": "Quiz",
      "A quiz between the talks, played on your phone, with astronomical prizes.":
        "Quiz między wykładami, grany na telefonie, z astronomicznymi nagrodami.",
      "Questions, all night": "Pytania przez cały wieczór",
      "The speakers and the staff stay for a drink afterwards. If you have ever wanted to corner an astronomer and ask about aliens, this is the place.":
        "Prelegenci i ekipa zostają potem na piwo. Jeśli zawsze chciałeś przyprzeć astronoma do muru i zapytać o kosmitów, to jest to miejsce.",
      "Come along": "Wpadnij",
      "Entry is free and everything is in English. Follow us so you know when the next one is announced.":
        "Wstęp jest wolny, a wszystko odbywa się po angielsku. Obserwuj nas, żeby nie przegapić kolejnego spotkania.",

      // events
      "Every event is free to attend, and always in English.":
        "Każde wydarzenie jest bezpłatne i zawsze po angielsku.",
      "Poster": "Plakat", "coming soon": "wkrótce",
      "#7 · next event": "#7 · następne wydarzenie",
      "Monday 9 November 2026": "poniedziałek, 9 listopada 2026",
      "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Host: Nicola Principi Cavaterra":
        "Pardon, To Tu · Aleja Armii Ludowej 14 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra":
        "The Taps Pub · Henryka Sienkiewicza 4 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "The Taps · Henryka Sienkiewicza 4 · 19:00 · Host: Nicola Principi Cavaterra":
        "The Taps · Henryka Sienkiewicza 4 · 19:00 · Prowadzi: Nicola Principi Cavaterra",
      "Speakers to be announced": "Prelegenci wkrótce",
      "Follow us on": "Obserwuj nas na", "or": "lub", "to hear them first.": "żeby dowiedzieć się pierwszy.",
      "12 October 2026": "12 października 2026", "10 June 2026": "10 czerwca 2026",
      "21 April 2026": "21 kwietnia 2026", "10 March 2026": "10 marca 2026",
      "5 February 2026": "5 lutego 2026", "9 December 2025": "9 grudnia 2025",
      "#1 — the first one": "#1 — pierwszy raz",

      // team
      "The team": "Zespół",
      "Astronomy on Tap Warsaw is run entirely by volunteers.":
        "Astronomy on Tap Warsaw działa wyłącznie dzięki wolontariuszom.",
      "Direction": "Kierownictwo",
      "Lead, Artistic Director & Host": "Lider, dyrektor artystyczny i prowadzący",
      "Science Director & Crew Chief": "Dyrektorka naukowa i szefowa ekipy",
      "Event Director & Crew Chief": "Dyrektor ds. wydarzeń i szef ekipy",
      "Social Media Director": "Dyrektorka ds. mediów społecznościowych",
      "Senior advisors": "Doradcy", "Graphic design": "Grafika",
      "Volunteer crew": "Ekipa wolontariuszy",
      "The people who make the evenings happen.": "Ludzie, dzięki którym te wieczory się dzieją.",
      "Website & field": "Strona i ekipa", "Field": "Ekipa",
      "Undergraduate student relations": "Kontakt ze studentami",
      "Sound": "Dźwięk", "Facebook events & field": "Wydarzenia na Facebooku i ekipa",
      "Want to join us?": "Chcesz dołączyć?",
      "Would you like to become part of the team? See": "Chcesz dołączyć do zespołu? Zobacz",

      // get involved
      "Astronomy on Tap Warsaw is free and non-profit, which means it runs on volunteers and on the people and institutions who support us. Here are three ways to be part of it.":
        "Astronomy on Tap Warsaw jest bezpłatne i non-profit, więc działa dzięki wolontariuszom oraz ludziom i instytucjom, które nas wspierają. Oto trzy sposoby, żeby być częścią tego.",
      "Are you a researcher? An amateur astronomer? A sci-fi expert? You can give a talk at an AoT event! Talks are about 10 minutes, in English, for an audience with no background. No equations, lots of pictures and a story worth telling.":
        "Jesteś naukowcem? Astronomem amatorem? Ekspertem od science fiction? Możesz wystąpić na AoT! Wykłady trwają około 10 minut, po angielsku, dla publiczności bez przygotowania. Bez równań, dużo obrazów i historia warta opowiedzenia.",
      "We run a rehearsal with every speaker beforehand, so first-time speakers are welcome too.":
        "Z każdym prelegentem robimy wcześniej próbę, więc debiutanci też są mile widziani.",
      "Propose a talk": "Zgłoś wykład",
      "Social Media": "Media społecznościowe",
      "Join our social media team! We are looking for writers of scientific content, content creators, video editors, photographers, meme creators and graphic designers. Students, researchers and enthusiasts are all welcome, and for most of these roles you do not even need to be in Warsaw.":
        "Dołącz do naszego zespołu social media! Szukamy autorów treści naukowych, twórców contentu, montażystów wideo, fotografów, twórców memów i grafików. Studenci, naukowcy i pasjonaci są mile widziani, a przy większości tych ról nie musisz nawet być w Warszawie.",
      "Apply to the team": "Aplikuj do zespołu",
      "Become a sponsor": "Zostań sponsorem",
      "Is your institute, company or venue interested in supporting public astronomy? Sponsors help us with prizes, printing, equipment and travel for speakers, and reach a large, curious audience in return. Every event is free thanks to them.":
        "Twoja instytucja, firma lub lokal chce wspierać popularyzację astronomii? Sponsorzy pomagają nam z nagrodami, drukiem, sprzętem i podróżami prelegentów, a w zamian docierają do licznej i ciekawej świata publiczności. Dzięki nim każde wydarzenie jest bezpłatne.",
      "We are happy to discuss what works for you, from a one-night partnership to supporting a whole season. See":
        "Chętnie porozmawiamy o tym, co pasuje tobie — od wsparcia jednego wieczoru po cały sezon. Zobacz",
      "for who already supports us.": "kto już nas wspiera.",
      "Talk to us about sponsoring": "Porozmawiajmy o sponsoringu",

      // partners
      "Free events need a stage, a projector and people who believe in them. Thank you to everyone below.":
        "Darmowe wydarzenia potrzebują sceny, projektora i ludzi, którzy w nie wierzą. Dziękujemy wszystkim poniżej.",
      "Venues": "Miejsca",
      "Henryka Sienkiewicza 4, Warsaw. Our home for events #1 to #5, from December 2025 to June 2026.":
        "Henryka Sienkiewicza 4, Warszawa. Nasz dom od wydarzenia #1 do #5, od grudnia 2025 do czerwca 2026.",
      "Aleja Armii Ludowej 14, Warsaw. Live venue, record store and bookstore, and the home of event #6.":
        "Aleja Armii Ludowej 14, Warszawa. Klub z muzyką na żywo, sklep płytowy i księgarnia — dom wydarzenia #6.",
      "Under the patronage of": "Pod patronatem",
      "Polish Astronomical Society": "Polskie Towarzystwo Astronomiczne",
      "Astronomy on Tap Warsaw is held under the patronage of Polskie Towarzystwo Astronomiczne (PTA), the society of professional astronomers in Poland.":
        "Astronomy on Tap Warsaw odbywa się pod patronatem Polskiego Towarzystwa Astronomicznego (PTA), towarzystwa zawodowych astronomów w Polsce.",
      "Become a partner": "Zostań partnerem",
      "We are looking for support with prizes, printing and travel for speakers. If your institute or company would like to help, see":
        "Szukamy wsparcia przy nagrodach, druku i podróżach prelegentów. Jeśli twoja instytucja lub firma chciałaby pomóc, zobacz",

      // history
      "A global network, and how it reached the Polish capital.":
        "Światowa sieć i jak dotarła do stolicy Polski.",
      "Where it began": "Jak się zaczęło",
      "Astronomy on Tap started in New York in April 2013, when the astronomers Meg Schwamb and Emily Rice held the first event at the Way Station, a bar in Brooklyn. The format was simple: take researchers out of the lecture hall, put them in front of people with a drink in their hand, and let the audience ask whatever it likes.":
        "Astronomy on Tap zaczęło się w Nowym Jorku w kwietniu 2013 roku, kiedy astronomki Meg Schwamb i Emily Rice zorganizowały pierwsze spotkanie w Way Station, barze na Brooklynie. Pomysł był prosty: wyprowadzić naukowców z sal wykładowych, postawić ich przed ludźmi z drinkiem w ręku i pozwolić publiczności pytać o cokolwiek.",
      "It spread quickly. Within a couple of years there were events on several continents, and today the network covers cities all over the world, each chapter run by local volunteers. Everything is free, and nobody gets paid. See":
        "Rozeszło się szybko. W ciągu kilku lat wydarzenia odbywały się na kilku kontynentach, a dziś sieć obejmuje miasta na całym świecie, a każdy oddział prowadzą lokalni wolontariusze. Wszystko jest bezpłatne i nikt nie dostaje wynagrodzenia. Pełna sieć na",
      "for the full network.": ".",
      "Warsaw's first Astronomy on Tap was started in 2019 by Milena Ratajczak. It ran for only a few nights: the pandemic closed the pubs in 2020, and the series stopped before it had really begun.":
        "Pierwsze warszawskie Astronomy on Tap stworzyła w 2019 roku Milena Ratajczak. Odbyło się tylko kilka wieczorów: w 2020 pandemia zamknęła puby i seria zatrzymała się, zanim na dobre się zaczęła.",
      "It came back in December 2025, at The Taps, a pub on Henryka Sienkiewicza. The first evening brought together two researchers working in the city, a room that filled up faster than anyone expected, and the quiz that has been part of every event since. Milena has since returned to the stage as a speaker, talking about exoplanets in February 2026.":
        "Wróciło w grudniu 2025 roku, w The Taps, pubie przy Henryka Sienkiewicza. Pierwszy wieczór połączył dwoje naukowców pracujących w mieście, salę, która zapełniła się szybciej, niż ktokolwiek się spodziewał, i quiz, który od tamtej pory jest częścią każdego spotkania. Milena wróciła później na scenę jako prelegentka, opowiadając o egzoplanetach w lutym 2026.",
      "Six events later, the relaunched series has hosted researchers from Polish institutes and from abroad, on everything from meteorites and interstellar comets to dark energy, hidden black holes and machine learning. The talks are in English, the entry is free, and the audience ranges from astronomy students to people who came for a beer and stayed for the stars.":
        "Sześć wydarzeń później wznowiona seria gościła naukowców z polskich instytutów i z zagranicy — od meteorytów i komet międzygwiezdnych po ciemną energię, ukryte czarne dziury i uczenie maszynowe. Wykłady są po angielsku, wstęp jest wolny, a publiczność sięga od studentów astronomii po ludzi, którzy przyszli na piwo i zostali dla gwiazd.",
      "Our events so far": "Nasze dotychczasowe wydarzenia",
      "9 Dec 2025": "9 gru 2025", "5 Feb 2026": "5 lut 2026", "10 Mar 2026": "10 mar 2026",
      "21 Apr 2026": "21 kwi 2026", "10 Jun 2026": "10 cze 2026", "12 Oct 2026": "12 paź 2026",
      "Anna Durkalec on barely visible galaxies; Fraser Gillan on comets and interstellar rocks.":
        "Anna Durkalec o ledwo widocznych galaktykach; Fraser Gillan o kometach i skałach międzygwiezdnych.",
      "Milena Ratajczak on exoplanets; Nandini Hazra on how large telescopes can be.":
        "Milena Ratajczak o egzoplanetach; Nandini Hazra o tym, jak duże mogą być teleskopy.",
      "Wojciech Hellwing on the crisis in cosmology; Priscila Pessi on stellar deaths.":
        "Wojciech Hellwing o kryzysie w kosmologii; Priscila Pessi o śmierci gwiazd.",
      "Denis Burgarella on how we are built by the Universe; Krzysztof Lisiecki on stones from the sky.":
        "Denis Burgarella o tym, jak zbudował nas Wszechświat; Krzysztof Lisiecki o kamieniach z nieba.",
      "Łukasz Wyrzykowski on hidden black holes; Giuliano Lorenzon on the universe in a grain of dust.":
        "Łukasz Wyrzykowski o ukrytych czarnych dziurach; Giuliano Lorenzon o wszechświecie w ziarnku pyłu.",
      "Tom Sedgwick on cosmic discovery with AI; Pratik Dabhade on the invisible universe.":
        "Tom Sedgwick o kosmicznych odkryciach z AI; Pratik Dabhade o niewidzialnym wszechświecie."
    },

    it: {
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
      "Questions, all night": "Domande fino a tardi",
      "The speakers and the staff stay for a drink afterwards. If you have ever wanted to corner an astronomer and ask about aliens, this is the place.": "Dopo gli interventi i relatori e lo staff restano a bere qualcosa. Se hai sempre voluto mettere alle strette un astronomo e chiedergli degli alieni, questo è il posto giusto.",
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
      "Lead, Artistic Director & Host": "Responsabile, direttore artistico e conduttore",
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
    }
  };

  const LANGS = ["en", "pl", "it"];
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

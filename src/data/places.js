// Lokacije na mapi. type: 'history' = istorijsko mesto, 'symbol' = simboli na fasadi
// Koordinate su približne – proverite ih pre objave.
export const places = [
  {
    id: 'tvrdjava',
    lat: 44.8233,
    lng: 20.4495,
    type: 'history',
    name: { sr: 'Beogradska tvrđava', it: 'Fortezza di Belgrado' },
    address: { sr: 'Kalemegdan', it: 'Kalemegdan' },
    text: {
      sr: [
        'Prema Regularnoj Velikoj loži Srbije, u Beogradu je od 1790. radila tursko-srpska loža čije ime nije sačuvano. Veruje se da se okupljala u samoj tvrđavi.',
        'Pola veka kasnije, 1842, u Beogradu deluje loža „Ali Koč", koja je 1851. imala 204 člana i okupljala Turke, Srbe i Jevreje.',
      ],
      it: [
        'Secondo la Gran Loggia Regolare di Serbia, dal 1790 a Belgrado lavorava una loggia turco-serba il cui nome non ci è pervenuto. Si ritiene che si riunisse proprio dentro la fortezza.',
        'Mezzo secolo dopo, nel 1842, a Belgrado opera la loggia «Ali Koč», che nel 1851 contava 204 membri e riuniva Turchi, Serbi ed Ebrei.',
      ],
    },
  },
  {
    id: 'prirodnjacki',
    lat: 44.8238,
    lng: 20.453,
    type: 'symbol',
    name: { sr: 'Galerija Prirodnjačkog muzeja', it: 'Galleria del Museo di Storia Naturale' },
    address: { sr: 'Mali Kalemegdan 5', it: 'Mali Kalemegdan 5' },
    text: {
      sr: [
        'Jedna od beogradskih zgrada na čijim se fasadama, prema BBC-ju na srpskom, nalaze masonski simboli: šestar, uglomer, piramida i svevideće oko.',
        'Savet za šetnju: pogledajte gore, iznad ulaza i ispod krovnog venca.',
      ],
      it: [
        'Uno degli edifici belgradesi sulle cui facciate, secondo la BBC in serbo, si trovano simboli massonici: compasso, squadra, piramide e occhio onniveggente.',
        'Consiglio per la passeggiata: alzate lo sguardo, sopra l’ingresso e sotto il cornicione.',
      ],
    },
  },
  {
    id: 'licej',
    lat: 44.8213,
    lng: 20.4566,
    type: 'history',
    name: { sr: 'Dositejev licej', it: 'Liceo di Dositej' },
    address: {
      sr: 'Gospodar Jevremova 22 · Muzej Vuka i Dositeja',
      it: 'Gospodar Jevremova 22 · Museo di Vuk e Dositej',
    },
    text: {
      sr: [
        'Dositej Obradović, prosvetitelj i prvi srpski ministar prosvete, ubraja se među najpoznatije srpske slobodne zidare.',
        'U ovoj zgradi danas je Muzej Vuka i Dositeja. I Vuk Karadžić se navodi među najvažnijim srpskim masonima na izložbi „Masonerija u Srbiji 1785–2014" u Etnografskom muzeju.',
      ],
      it: [
        'Dositej Obradović, illuminista e primo ministro serbo dell’istruzione, è annoverato tra i più noti Liberi Muratori serbi.',
        'Oggi l’edificio ospita il Museo di Vuk e Dositej. Anche Vuk Karadžić figura tra i più importanti massoni serbi nella mostra «La Massoneria in Serbia 1785–2014» al Museo Etnografico.',
      ],
    },
  },
  {
    id: 'narodna-banka',
    lat: 44.8187,
    lng: 20.4553,
    type: 'history',
    name: { sr: 'Narodna banka', it: 'Banca Nazionale' },
    address: { sr: 'Kralja Petra 12', it: 'Kralja Petra 12' },
    text: {
      sr: [
        'Đorđe Vajfert, industrijalac, vlasnik pivare i rudnika, dva puta je bio guverner Narodne banke.',
        'Od 1919. do 1933. bio je veliki majstor Velike lože Srba, Hrvata i Slovenaca „Jugoslavija". Prema predanju, 1926. je izborio da se međunarodni masonski kongres održi baš u Beogradu.',
      ],
      it: [
        'Đorđe Vajfert (Georg Weifert), industriale, proprietario di birrerie e miniere, fu due volte governatore della Banca Nazionale.',
        'Dal 1919 al 1933 fu Gran Maestro della Gran Loggia dei Serbi, Croati e Sloveni «Jugoslavia». Secondo la tradizione, nel 1926 ottenne che il congresso massonico internazionale si tenesse proprio a Belgrado.',
      ],
    },
  },
  {
    id: 'kapetan-misa',
    lat: 44.8183,
    lng: 20.459,
    type: 'history',
    name: { sr: 'Kapetan Mišino zdanje', it: 'Palazzo del Capitano Miša' },
    address: { sr: 'Studentski trg 1', it: 'Studentski trg 1' },
    text: {
      sr: [
        'Sedište Velike škole, preteče Beogradskog univerziteta.',
        'Mnogi članovi lože „Svetlost Balkana" bili su profesori Velike škole. Odavde je „svetlost" iz 1876. išla ka učionicama i institucijama mlade države.',
      ],
      it: [
        'Sede della Grande Scuola, antenata dell’Università di Belgrado.',
        'Molti membri della loggia «Luce dei Balcani» erano professori della Grande Scuola. Da qui la «luce» del 1876 raggiunse le aule e le istituzioni del giovane Stato.',
      ],
    },
  },
  {
    id: 'postanski',
    lat: 44.8127,
    lng: 20.4682,
    type: 'symbol',
    name: { sr: 'Poštanski muzej', it: 'Museo delle Poste' },
    address: { sr: 'Majke Jevrosime 13', it: 'Majke Jevrosime 13' },
    text: {
      sr: [
        'Još jedna zgrada koju BBC na srpskom navodi kao mesto sa masonskim simbolima na fasadi.',
        'Za vodič: fotografija detalja i kratko tumačenje svakog simbola.',
      ],
      it: [
        'Un altro edificio che la BBC in serbo indica tra quelli con simboli massonici in facciata.',
        'Per la guida: fotografia dei dettagli e breve spiegazione di ogni simbolo.',
      ],
    },
  },
  {
    id: 'radio',
    lat: 44.811,
    lng: 20.4712,
    type: 'symbol',
    name: { sr: 'Radio Beograd', it: 'Radio Belgrado' },
    address: { sr: 'Hilandarska 2', it: 'Hilandarska 2' },
    text: {
      sr: ['Zgrada Radio Beograda je na spisku beogradskih građevina sa masonskim simbolima koji se mogu videti sa ulice.'],
      it: ['L’edificio di Radio Belgrado è nell’elenco delle costruzioni belgradesi con simboli massonici visibili dalla strada.'],
    },
  },
  {
    id: 'tehnicki',
    lat: 44.8055,
    lng: 20.4765,
    type: 'symbol',
    name: { sr: 'Tehnički fakultet', it: 'Facoltà Tecnica' },
    address: { sr: 'Bulevar kralja Aleksandra 73', it: 'Bulevar kralja Aleksandra 73' },
    text: {
      sr: [
        'Monumentalna zgrada tehničkih fakulteta, takođe među mestima sa masonskim simbolima na fasadi.',
        'Šestar i uglomer, oruđa graditelja, ovde imaju i doslovno i simbolično značenje.',
      ],
      it: [
        'Il monumentale edificio delle facoltà tecniche, anch’esso tra i luoghi con simboli massonici in facciata.',
        'Compasso e squadra, strumenti del costruttore, qui hanno un significato sia letterale sia simbolico.',
      ],
    },
  },
  {
    id: 'avala',
    lat: 44.6897,
    lng: 20.515,
    type: 'history',
    name: { sr: 'Avala · Neznani junak', it: 'Avala · Milite Ignoto' },
    address: { sr: 'Planina Avala, oko 16 km južno', it: 'Monte Avala, circa 16 km a sud' },
    text: {
      sr: [
        'Za vreme kongresa 1926, masoni iz Čehoslovačke položili su venac na grob Neznanog junaka na Avali, sa natpisom: „Neznanom junaku – poznatom junaštvu".',
        'Današnji Meštrovićev spomenik podignut je kasnije, 1938. Oko njega se i danas vode rasprave o mogućim masonskim značenjima.',
      ],
      it: [
        'Durante il congresso del 1926, i massoni cecoslovacchi deposero una corona sulla tomba del Milite Ignoto sull’Avala, con la scritta: «All’eroe ignoto – all’eroismo noto».',
        'L’attuale monumento di Meštrović fu eretto più tardi, nel 1938. Ancora oggi si discute dei suoi possibili significati massonici.',
      ],
    },
  },
]

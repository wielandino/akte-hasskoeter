import james from '../assets/portraits/James.png'
import ottilie from '../assets/portraits/Ottilia.png'
import rudi from '../assets/portraits/Rudi.png'

export const characters = [
  {
    id: 'ottilie',
    name: 'Ottilie von Hassköter',
    alter: 'Mitte 50',
    merkmal: 'Goldener Rollstuhl',
    rolle: 'verdaechtig',
    portrait: ottilie,
    beschreibung: [
      'Ottilie von Hassköter, geb. Kesselstein, Mitte 50, ist der lebende Beweis dafür, dass Trauer sich hervorragend mit Diamanten kombinieren lässt. Kaum war ihr Gatte kalt, ließ sie sich bereits ein neues Trauerkleid schneidern - tiefschwarz, doch mit so viel Rüschenbesatz, Perlenstickerei und einem derart gewagten Ausschnitt, dass selbst der Pfarrer bei der Beerdigung kurz ins Stocken geriet. An jedem Finger mindestens ein Ring, sodass ihre Hände bei jeder Geste klimpern wie eine kleine Schmuckfabrik. Ihr Haar ist stets zu einer Frisur getürmt, die eher an ein Kunstwerk als an angemessene Trauer erinnert, ihr Parfüm füllt jeden Raum, den sie betritt, noch bevor sie selbst hereinkommt.',
      'Ihr goldverzierter Rollstuhl - ein Einzelstück, versteht sich, mit eingravierten Initialen - begleitet sie treu durchs Anwesen, außer natürlich, wenn im Erdgeschoss frische Kekse warten oder ein besonders glänzendes Schmuckstück nicht in Reichweite liegt. Dann erhebt sie sich mit bemerkenswerter Behändigkeit, um sich Sekunden später wieder elegant in die Kissen sinken zu lassen, sobald Publikum den Raum betritt. Sie spricht gerne in der dritten Person von sich selbst („Ottilie hat heute solchen Kummer“) und lässt keine Gelegenheit aus, ungefragt zu erwähnen, wie unwiderstehlich attraktiv sie doch eigentlich sei - meist direkt gefolgt von einem tiefen, dramatischen Seufzer über die Ungerechtigkeit des Lebens.',
      'In ihrer Handtasche: ein leeres Medaillon, das angeblich ein Bild ihres „wahren Herzens“ enthält, tatsächlich aber schlicht leer ist, seit sie vergessen hat, wessen Bild eigentlich hineingehörte.',
    ],
  },
  {
    id: 'ludwig',
    name: 'Ludwig Kesselring',
    alter: 'unbekannt',
    merkmal: 'Zwei fehlende Finger',
    rolle: 'verdaechtig',
    portrait: null,
    beschreibung: [
      'Ludwig Kesselring hat genau ein Lebensziel: sichtbar erfolgreicher wirken als Oskar von Hassköter es je war - tot oder lebendig. Sein Glänzendes Haar ist quer über die zunehmend kahler werdende Kopfmitte gekämmt und unter einem Zylinder versteckt, der mindestens eine Nummer zu groß ist. Sein Monokel braucht er nicht im Geringsten, trägt er aber trotzdem, weil es - seiner Meinung nach - „Kompetenz signalisiert“. An der rechten Hand fehlen ihm zwei Finger, angeblich Folge eines „heroischen Zwischenfalls“ in einer seiner Dampfmaschinenfabriken, dessen Geschichte sich bei jeder Erzählung dramatisch weiterentwickelt - vom simplen Arbeitsunfall zur Errettung dreier Arbeiter aus den Flammen, je nach Tagesform und Anzahl der bereits konsumierten Zigarren.',
      'Apropos Zigarren: Er raucht sie ununterbrochen, in einer Qualität, die selbst hartgesottene Fabrikarbeiter husten lässt. Steht hat er einen Gehstock bei sich, der einzig und allein als edles Accessoires dienen soll. Besonders stolz ist er auf seine mechanischen Taschenuhr, die er alle paar Minuten demonstrativ hervorholt, obwohl niemand nach der Uhrzeit gefragt hat. Er erwähnt seine Patente in praktisch jedem Satz, meist eingeleitet mit „Wissen Sie, das habe ICH erfunden“ - ohne zu bemerken, wie verdächtig das im Kontext eines Mordermittlungsgesprächs eigentlich klingt.',
    ],
  },
  {
    id: 'klara',
    name: 'Klara von Hassköter',
    alter: '11',
    merkmal: 'Notizbuch voller Geschichten',
    rolle: 'verdaechtig',
    portrait: null,
    beschreibung: [
      'Klara, elf Jahre alt, sieht aus, als sei sie einem Porzellanladen entsprungen: blasse Haut, akkurate Ringellocken, eine riesige schwarze Schleife im Haar und ein makellos weißes Kleid - abgesehen von einem dunklen Fleck am Saum, den sie jedem, der fragt, freundlich lächelnd als „Kirschsaft“ erklärt. Ihre Stimme ist ungewöhnlich formell für ihr Alter, fast altmodisch höflich, was in Kombination mit ihrem Dauerlächeln und dem Umstand, dass sie so gut wie nie blinzelt, bei Erwachsenen regelmäßig für unangenehmes Schweigen sorgt.',
      'Sie trägt stets ein kleines, ledergebundenes Notizbuch bei sich, in das sie mit erstaunlich sauberer Handschrift Geschichten schreibt, die deutlich zu blutig für ihr Alter sind - niemand im Haus hat es je gewagt, mehr als eine Seite zu lesen. Ihre Lieblingspuppe, Bertha, fehlt seit einiger Zeit ein Auge und ein Arm; auf Nachfrage erklärt Klara ruhig, Bertha habe „einen Unfall gehabt“, ohne dass jemals jemand nach den Details gefragt hätte. Sie summt gerne leise vor sich hin, eigene kleine Melodien, deren Text man lieber nicht zu genau versteht.',
      'Der Tod ihres Vaters scheint sie kaum zu berühren - sie hat lediglich angemerkt, das Ganze sei „interessanter gewesen, als sie erwartet hatte“.',
    ],
  },
  {
    id: 'james',
    name: 'James',
    alter: 'unbekannt',
    merkmal: 'Gestohlenes Taschentuch „O.v.H.“',
    rolle: 'verdaechtig',
    portrait: james,
    beschreibung: [
      'James - ja, wirklich, James, ein Name, den seine Eltern mit bemerkenswert wenig Fantasie gewählt haben müssen - ist ein Berg von einem Mann. Seine Muskeln drücken sichtbar gegen die Nähte seiner tadellosen Dienstuniform, seine Glatze glänzt selbst bei schwachem Kerzenlicht, sein Schnauzbart ist so akkurat gestutzt, dass er glatt als lebendige Werbung für eine Kartoffelchips-Marke durchgehen könnte. Er spricht in vollständigen, förmlichen Sätzen, verbeugt sich bei jeder Gelegenheit einen Hauch zu tief und poliert Türklinken mit einer Hingabe, die weit über normale Dienstpflicht hinausgeht.',
      'Was niemand ahnt: Unter dieser Fassade aus preußischer Disziplin verbirgt sich ein zutiefst romantisches Herz. In ruhigen Momenten trägt er stets ein Taschentuch bei sich, das eindeutig nicht ihm gehört - gestickte Initialen „O.v.H.“, fein säuberlich in der Innentasche verwahrt. Seine sonst unerschütterliche Fassade bricht unvorhersehbar zusammen, wenn scheinbar belanglose Dinge ihn an vergangene, gemeinsame Momente erinnern (ein bestimmter Kaffeeduft, eine bestimmte Melodie), was das restliche Personal stets nur mit einem verständnisvollen „Ach, James eben, so pflichtbewusst“ kommentiert.',
    ],
  },
  {
    id: 'friedhelm',
    name: 'Dr. Friedhelm Habicht',
    alter: 'unbekannt',
    merkmal: 'Glas mit Blutegeln',
    rolle: 'verdaechtig',
    portrait: null,
    beschreibung: [
      'Dr. Habicht trägt eine Nickelbrille, die permanent auf der Nasenspitze zu balancieren scheint, und spricht mit einer so übertrieben sanften, einlullenden Stimme, dass sie eher beunruhigend als beruhigend wirkt. Seine Hände - ausgerechnet die eines Chirurgen - zittern bei jeder Gelegenheit leicht, was er stets mit einem „nur der Kaffee, meine Liebe“ herunterspielt. Er führt eine ledernde Arzttasche mit sich, die bei jeder Bewegung verdächtig klirrt - randvoll mit Fläschchen, deren Etiketten längst verblasst sind, und einem Glas mit medizinischen Blutegeln, die er trotz eindeutig fortschrittlicherer Behandlungsmethoden nach wie vor für praktisch jedes Leiden empfiehlt.',
      'Obwohl er ständig anderen Ratschläge zu ihrer Gesundheit erteilt, ist er selbst der ausgeprägteste Hypochonder im gesamten Anwesen - checkt alle paar Minuten unauffällig seinen eigenen Puls und trägt mindestens drei verschiedene „vorsorgliche“ Tinkturen in seiner Westentasche. Seine Nähe zur Familie Hassköter erklärt er stets rein beruflich, wird dabei aber auffällig rot um die Ohren, sobald Ottilies Name fällt.',
    ],
  },
  {
    id: 'rudi',
    name: 'Rudi Rotzmüller',
    alter: '37',
    merkmal: 'Handpuppe „Anton“',
    rolle: 'ermittler',
    portrait: rudi,
    beschreibung: [
      'Rudi Rotzmüller ist nicht nur der bekannteste Privatdetektiv in Berlin, sondern auch in ganz Deutschland. Wenn ein Fall unbedingt gelöst werden muss, ist Rudi zur Stelle. Sollte er dabei die einzige und letzte Wahl für diesen Fall sein, empfiehlt es sich allerdings, vorher noch einmal gründlich über die eigenen Lebensentscheidungen nachzudenken.',
      'Niemand weiß, wie er zu seiner Lizenz gekommen ist. Manch einer hegt den verwegenen Gedanken, dass Rudi ein ausgesprochen guter Privatdetektiv war. Was aus ihm geworden ist, bleibt bis heute ungeklärt. Ebenso ungeklärt ist, warum seine Mutter jeden Abend beim Leiter der Detektei vorbeischaut. Man sollte meinen, beides hätte miteinander zu tun. Aber das wäre natürlich reine Spekulation.',
      'Parfüms und Zeitschriften versuchen seit jeher, der Bevölkerung ein bestimmtes Bild von Männlichkeit zu vermitteln. Doch niemand kommt an die unerschütterliche Männlichkeit von Rudi Rotzmüller nur im Ansatz heran.',
      'Sein Kopf schmückt eine Cap mit der Aufschrift „FKER“, die deutlich suggerieren soll, dass er dem Akt des Geschlechtsverkehr nie weit fern ist. Manch einer spekuliert, dass gerade deswegen die fettigen, zersausten Haare aus der Cap sprühen, um Weibchen mit seinen Pheromonen anzulocken. Gepaart mit einer undichten, braunen Raupe an seiner Lippe, die er als Oberlippenbart bezeichnet, ist er allseits bereit.',
      'Doch Rudi ist weit mehr als nur ein attraktiver Mann. Er ist ein Spezialist, wenn es darum geht, Feinheiten und Details zu erkennen. Seine Augen verstecken sich hinter dermaßen dicken Brillengläsern, dass man nur bei genauem Hinsehen gerade noch ihre Farbe erahnen kann. Sein Lächeln verwegen und charmant, doch da er beim Lächeln und Reden gelegentlich zum Sabbern neigt, trägt er zur Sicherheit ein Lätzchen mit Kuschelbärmotiv.',
      'Auch in Sachen Kleidung beweist Rudi ein bemerkenswertes Gespür für Professionalität. Aus Pflichtbewusstsein im Umgang mit Geld greift er auf eine Polizeiuniform aus dem Halloween-Laden zurück, ergänzt um eine ebenso originalgetreue wie aus Plastik gefertigte Polizeimarke - ebenfalls ein Fund aus besagtem Laden. Seine graue Jogginghose, gezeichnet von diversen Urinflecken, verrät den waschechten Sportler in ihm, was durch den permanenten, eindringlichen Schweißgeruch nur unterstrichen wird. An den Füßen: Klettverschluss-Sportschuhe, ein echter Hingucker.',
      'Sein wahres Markenzeichen aber ist Anton, seine treue Handpuppe, die er niemals aus den Augen - beziehungsweise von der Hand - lässt. Anton ist die eigentliche Stimme der Vernunft im Duo: Wenn Rudi mal wieder komplett den Faden verloren hat oder ein offensichtliches Detail übersieht, springt Anton ein, kommentiert, unterhält sich mit Zeugen und Opfern und hält so notdürftig zusammen, was Rudi allein längst hätte scheitern lassen.',
    ],
  },
]

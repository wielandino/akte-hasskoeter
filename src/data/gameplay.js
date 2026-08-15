export const loopSteps = [
  {
    id: 1,
    title: 'Erkunden',
    text: 'Frei durch die neun Räume der Villa bewegen, in eigenem Tempo.',
  },
  {
    id: 2,
    title: 'Rätsel lösen',
    text: 'Punktuelle P&C-Rätsel schalten Zugang zu Räumen oder Objekten frei.',
  },
  {
    id: 3,
    title: 'Hinweis erhalten',
    text: 'Ein neuer Eintrag erscheint im Notizbuch - automatisch der passenden Person zugeordnet.',
  },
  {
    id: 4,
    title: 'Vorlegen',
    text: 'Ein noch ungenutzter Hinweis wird ausgewählt und der betreffenden Person vorgelegt.',
  },
  {
    id: 5,
    title: 'Reaktion',
    text: 'Ausflucht, Nervosität, Abwiegeln - gelegentlich mit einem neuen Hinweis als Folge.',
  },
  {
    id: 6,
    title: 'Zurück zu 1',
    text: 'Der Loop beginnt erneut, solange weiter ermittelt werden möchte.',
  },
]

export const loopClosing =
  'Der Loop endet nie durch eine Spielmechanik, sondern durch die Entscheidung des Spielers, genug gesehen zu haben und eine Anklage zu erheben.'

export const notebookTabs = [
  { name: 'Ottilie', total: 6 },
  { name: 'James', total: 5 },
  { name: 'Oskar', note: 'Hintergrund', total: 4 },
  { name: 'Kesselring', total: 4 },
  { name: 'Dr. Habicht', total: 4 },
  { name: 'Klara', total: 3 },
  { name: 'Der Fall', note: 'allgemein', total: 3 },
]

export const notebookTotal = notebookTabs.reduce((sum, tab) => sum + tab.total, 0)

export const vorlegenText =
  'Anders als in klaren Aha-Moment-Systemen führt das Vorlegen eines korrekten Hinweises bei Rudi nicht zu sauberer Erkenntnis: Er legt den richtigen Hinweis vor, zieht daraus aber oft die falsche Schlussfolgerung. Anton kommentiert im Hintergrund - meist erfolglos. Der Spieler versteht dadurch mehr, als die Figur, die er steuert, je verstehen wird.'

export const openingTutorial =
  'Direkt nach Spielstart versammelt Ottilie alle Verdächtigen - auch die, die nicht im Haus wohnen - zu einer Trauerzusammenkunft am Tatort. Jedes Pflichtgespräch ist bewusst kurz und erzeugt genau einen Basis-Eintrag im Notizbuch. Erst danach schaltet sich die freie Erkundung frei.'

export const clueLayers = {
  visible: {
    title: 'Die auffällige Ebene',
    tagline: 'Dramatisch, leicht auffindbar - führt in die Irre',
    items: [
      "Der Ritualraum hinter James' Zimmer",
      'Kesselrings Drohbrief im Kontor',
      'Hinweise auf Dr. Habichts nächtliche Besuche',
      'Klaras verstörende Notizbücher',
    ],
  },
  hidden: {
    title: 'Die stille Ebene',
    tagline: 'Unscheinbar, leicht zu übersehen - führt zur Wahrheit',
    items: [
      'Inventurdifferenz beim Rattengift in der Speisekammer',
      'Ausgelaufene Schuhe in Ottilies Zimmer',
      'Ein Brief in Oskars Zimmer über sein geplantes Coming-out',
    ],
  },
}

export const endingNote =
  'Der Spieler kann jederzeit - auch ganz ohne gesammelte Beweise - eine Anklage gegen eine der fünf Personen erheben. Unabhängig davon, wer angeklagt wird, streiten alle die Tat ab; das Spiel bestätigt zu keinem Zeitpunkt, wer tatsächlich schuldig ist. Jede angeklagte Figur erhält ein eigenes Nachspiel, ohne je ein „richtig" oder „falsch" auszusprechen. Die Wahrheit bleibt für immer Eigentum derer, die genau genug hingesehen haben.'

# ISACA Implementierungsleitfaden ISO/IEC 27001:2022 Extrakt

> Quelle: ISACA Germany Chapter e.V., Implementierungsleitfaden ISO/IEC 27001:2022, Stand November 2022 (Final).
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch (ae/oe/ue). Bei Zweifeln gilt das Original.
> PDFs bleiben als Originale erhalten (Audit-Nachweis).
> Citation Key: ISACA22

## Ueberblick

Praxisleitfaden fuer Implementierung eines ISMS nach ISO/IEC 27001:2022. Geht ueber rein normative Anforderungen hinaus — nicht jeder Hinweis ist fuer jede Organisation gleich geeignet.

**Drei Sichten eines ISMS:**

| Sicht | Fokus | Kapitelverweise |
|---|---|---|
| Governance (G) | Steuerung: Unternehmensziele → IS-Ziele, Rollen, Monitoring | 3.2, 3.3, 3.4, 3.5, 3.7, 3.9 |
| Risiko (R) | Risikoexposition, Entscheidungsfindung, Priorisierung | 3.6 |
| Compliance (C) | Externe/interne Vorgaben, Umsetzungskontrolle, Audits | 3.7, 3.8, 3.10, 3.12, 3.14 |

**14 Bausteine eines ISMS** (Kap. 3): Context, Leadership, IS Objectives, IS Policy, Roles/Responsibilities/Competencies, Risk Management, Performance/Risk/Compliance Monitoring, Documentation, Communication, Awareness, Supplier Relationships, Internal Audit, Incident Management, Continual Improvement.

**Kapitelstruktur je Baustein:** 1) Erfolgsfaktoren aus der Praxis, 2) Anforderungen an die Dokumentation, 3) Referenzen.

## 3.1 Context of the Organization

**Festlegung des Geltungsbereichs (Scope):**
- Scope beschreibt Umfang des ISMS: welche Assets (Prozesse, Bereiche, Standorte, Anwendungen) innerhalb/ausserhalb
- Scope-Dokument ist fuer Stakeholder bestimmt — bei Anfragen bereitstellen
- SoA (Statement of Applicability) dokumentiert begruendete Entscheidungen zu Annex-A-Controls
- IS-Leitlinie umreisst Scope grob; Leitlinie und SoA sind i.d.R. interne Dokumente

**Umfeldanalyse:**
- Einordnung ISMS in Gesamtumfeld: branchentypische/standorttypische Gegebenheiten
- Innenverhaeltnis: andere Managementsysteme (ISO 9001, ISO 22301), Schnittstellen zu Risikomanagement, Personal, Datenschutz, Facility, Revision, Recht
- Aussenverhaeltnis: Lieferanten, Dienstleister, strategische Partner

**Anforderungsanalyse:**
- Interessengruppen und deren Anforderungen identifizieren
- Quellen: gesetzliche Vorgaben (EU-DSGVO, UWG, TMG), vertragliche Verpflichtungen, Regulierungsbehoerden, uebergeordnete Organisation

**Erfolgsfaktoren:**
- ISO 31000:2018 Abschnitt 5.4.1 bietet Vollstaendigkeitslisten
- Detaillierungsgrad ergibt sich aus internen/externen Anforderungen
- Interessengruppen sorgfaeltig identifizieren: Eigentuemer, Anteilseigner, Aufsichtsrat, Betriebsrat, Regulierer, Kunden, Lieferanten, Dienstleister, Angestellte
- Basis: Business-Plaene, Vertraege, Aufsichtsvorgaben — Compliance-/IT-Compliance-Funktion kann unterstuetzen

**Dokumentation (normativ):**
- Geltungsbereich ISMS (Abschnitt 4.3)
- SoA (Abschnitt 6.1.3 d)
- Uebersicht relevanter gesetzlicher/regulatorischer/vertraglicher Anforderungen (Abschnitt 18.1)
- Uebersicht relevanter Stakeholder

**Dokumentation (Praxis):**
- Schnittstellenvereinbarungen zwischen ISMS-Geltungsbereich und internen Bereichen

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 4.3, 6.1.3 | ISO/IEC TR 27023:2015 | ISO 22301:2019 | ISO 31000:2018 | ISO 9001:2015

## 3.2 Leadership and Commitment

**Kernaussage:** Erfolgreiches ISMS erfordert Top-down-Ansatz. Topmanagement = Leitungsebene, die fuer die durch ISMS zu schuetzende Organisation verantwortlich ist und ueber Ressourceneinsatz entscheidet.

> NOTE: Bei grossen Unternehmen ist Topmanagement nicht zwingend der Konzernvorstand — kann auch lokale GF oder Bereichsleitung sein (abhaengig vom ISMS-Geltungsbereich). Bei Zertifizierungsaudits ggf. dennoch Einbeziehung der obersten Leitungsebene gefordert — vorab mit Zertifizierungsstelle klaeren.

**Aufgaben Topmanagement:**
1. Uebernahme der Gesamtverantwortung fuer IS
2. Definition IS-Strategie und IS-Ziele (→ 3.3)
3. Definition Entscheidungskriterien/Grundsaetze zur Risikobeurteilung (→ 3.6)
4. Integration IS-Anforderungen in Geschaeftsprozesse und Projektmanagement (→ 3.6)
5. Regelmaessige ISMS-(Top-)Managementreviews (→ 3.14)
6. Bereitstellung personeller und finanzieller Ressourcen
7. Sichtbarkeit in Awareness-Veranstaltungen (z.B. Leitvideo-Botschaft)

**Verpflichtungen Topmanagement:**
- Vorbildliche Einhaltung der IS-Anforderungen
- Hinreichende Ressourcenbereitstellung
- Vorbildfunktion bei weiteren Leitungsebenen
- Konsequente Behandlung von Nichtkonformitaeten
- Selbstverpflichtung zur kontinuierlichen Verbesserung

**Dokumentation (normativ):**
- Managementreview-Dokumentation (Abschnitt 9.3): Entscheidungen zu Veraenderungen/Verbesserungen
- Ergebnisse (Entscheidungen zu fortlaufender Verbesserung) als dokumentierte Information aufbewahren

**Dokumentation (Praxis):**
- Ableitung/Bewertung aktueller Risiken aus Abweichungen (idealerweise Risikobehandlungsplan)
- Nachweise Berichterstattung an Topmanagement (Praesentationen, Protokolle, Reports)
- Reporting Umsetzungsstand inkl. Wirksamkeitskontrolle (Audits, Risikobehandlung, Incidents, KVP)

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 5.1, 9.1, 9.3, 5.36

## 3.3 IS Objectives

**Kernaussage:** IS-Ziele aus Geschaeftszielen ableiten. Verfehlen der IS-Ziele kann direkt Geschaeftsziele gefaehrden.

**Erfolgsfaktoren:**
- IS-Ziele muessen im Einklang mit CIA und IS-Leitlinie stehen
- An uebergeordneten Unternehmenszielen ausrichten, regelmaessig auf Aktualitaet pruefen
- Ergebnisse aus Risikobetrachtungen (→ 3.6) als weitere Basis
- Bei Planung festlegen: Taetigkeiten, Ressourcen, Verantwortlichkeiten, Zeitrahmen, Evaluierungsvorgehen
- Nicht-funktionale Anforderungen (= Sicherheitsanforderungen) von Beginn an in Projekte, Produkte, Systeme, Weiterbildung integrieren
- Nur echte, langfristige Ziele beschreiben — keine operativen Massnahmen
- SMART-Ziele formulieren (spezifisch, messbar, akzeptiert, realistisch, terminiert)
- Messbarkeit ueber KPIs; Unterstuetzung: ISACA-Praxisleitfaden "Bewertung der Leistung eines ISMS durch Schluesselindikatoren", COBIT 2019
- "If practicable" (Abschnitt 6.2 b) — Praktikabilitaet bei Messungen immer miteinbeziehen
- Zu Beginn wenige, sinnvolle, ausgewogene IS-Ziele definieren

**Dokumentation (normativ):**
- Dokumentation der IS-Ziele

**Dokumentation (Praxis):**
- IS-Ziele als Teil der IS-Leitlinie oder IS-Strategie
- Umsetzungsplan (IS-Ziele → konkrete Projekte)
- Umsetzungsgrad durch Kennzahlen (→ 3.7)

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 6.2 | COBIT 2019 Focus Area: Information Security | ISACA Praxisleitfaden Schluesselindikatoren

## 3.4 IS Policy

**Kernaussage:** IS-Leitlinie = strategische Entscheidung der Organisation zur ISMS-Einfuehrung. Beinhaltet Verpflichtung zur Anforderungseinhaltung und Selbstverpflichtung zur laufenden Verbesserung.

**Erfolgsfaktoren:**
- Leitlinie ist Kommunikationswerkzeug fuer Management: Bedeutung ISMS + Einhaltung ISMS-Anforderungen
- Strategische und taktische Ziele verankern
- Von hoechster Leitungsebene verabschiedet, Aufsichtsgremien zur Verfuegung stellen
- Als dokumentierte Information verfuegbar, nachvollziehbare Dokumentenlenkung
- Sprache: Gepflogenheiten des Unternehmens, Stellenwert herausstellen
- Allen betroffenen Mitarbeitern kommunizieren, bei Bedarf Stakeholdern bereitstellen
- Nicht mit Sicherheitskonzepten/Handbuechern vermischen — Durchgaengigkeit der Vorgabenkette durch Verweise
- Entweder umfassendes Gesamtdokument ODER Anker/Startpunkt + Detaildokumente
- Bei Aufteilung: Leitlinie → Topmanagement, Detaildokumente → ISB/Fachbereiche
- Individuell erstellen statt Vorlagen uebernehmen — Bezug zur Organisation muss erkennbar sein

**Dokumentation (normativ):**
- Informationssicherheitsleitlinie (Abschnitt 5.2 e)

**Dokumentation (Praxis):**
- Themenspezifische IS-Richtlinien (Annex 5.1)
- Begleitende Dokumente/Organigramme zur Aufbauorganisation

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 5.2

## 3.5 Roles, Responsibilities and Competencies

**Kernaussage:** Rollen, Verantwortlichkeiten, Zustaendigkeiten und Befugnisse definieren, zuweisen, kommunizieren. RACI- oder SoD-Matrix nutzen.

**Mindest-Rollen:**
- ISB/CISO (Informationssicherheitsbeauftragter/Chief Information Security Officer)
- Risikoeigentuemer (risk owner)
- Vermoegenswerteeigentuemer (asset owner, vgl. Abschnitt 6.1.2 c, Control A.5.9)
- Weitere: Sicherheitsadministratoren, interne Auditoren

**Erfolgsfaktoren:**
- CISO-Rollenbeschreibung inkl. Kompetenzen (Erfahrung, Ausbildung, Schulungen, Sozialkompetenz)
- Stellenbeschreibung oder Benennungsschreiben mit zugewiesenen Aufgaben

**Interessenkonflikte vermeiden:**
- ISB/CISO ≠ IT-Leiter/CIO
- DSB ≠ IT-Leiter/CIO
- Interner ISMS-Auditor ≠ IT-Administrator
- ISB + DSB Personalunion moeglich, aber Konfliktpotenzial: DSB hat gesetzlichen Schutz + Schweigepflicht, nicht automatisch auf CISO uebertragbar. Ausfuehrlich analysieren und abwaegen.

**CISO-Eigenschaften:**
- Faehigkeit zwischen Unternehmenszielen/Compliance und IS-Risiken/-Massnahmen zu "uebersetzen"
- Fuehrungskompetenzen, Sozialkompetenz, Ueberzeugungsfaehigkeit, Konfliktmanagement
- Im Unternehmen Fuehrungskraefte-Status
- Mitarbeiter mit intrinsischer Motivation fuer IS auswaehlen

**Kompetenzen (Abschnitt 7.2):**
- Angemessene Ausbildung, Schulung oder Erfahrung
- Nachweis: Weiterbildungszertifikate in Personalakte (Bildungshistorie)

**Dokumentation (normativ):**
- Nachweis der Kompetenz (Abschnitt 7.2 d)

**Dokumentation (Praxis):**
- Rollenbeschreibungen inkl. Reporting an Topmanagement (Abschnitt 5.3 b)
- Stellenprofile/Benennungsschreiben
- Strategische/operative Zusammenarbeit DSB, QMB, CISO

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 5.3, 7.1, 7.2 | COBIT 2019 Focus Area: Information Security | BSI-Standard 200-2

## 3.6 Risk Management

**Kernaussage:** IS-Risikomanagement = uebergreifender Prozess zur systematischen Erfassung, Bewertung und transparenten Darstellung von IS-Risiken. Ziel: nicht tolerierbaren Schaden abwenden/reduzieren auf akzeptables Mass.

**Risikoquellen:**
- Datenaustausch intern/extern
- Organisationsanpassungen
- Bestandssysteme ohne Update-Moeglichkeit
- Externe Partner/Dienstleister
- Fernzugriffe
- Naturphaenomene/Katastrophen
- Sabotage/Wirtschaftskriminalitaet
- Faktor Mensch (Social Engineering)
- Neue Technologien (Cloud, mobile Geraete)
- Neue Maerkte (geografisch/produktbezogen)

**Risikobeurteilungsprozess festlegen (vor konkreter Identifizierung):**
1. Methoden zur Risikoidentifikation
2. Kriterien zur Beurteilung von Risiken
3. Risikoakzeptanzkriterien

**Methoden zur Risikoidentifikation:**
- Interviews, Szenarioanalysen, Brainstorming, BIA, Checklisten, Delphi-Methode, STRIDE Threat Model

**Kriterien zur Beurteilung:**
- Fuer moeglichst grosse Variation von Risikotypen nutzbar
- Punktemodell oder qualitative Parameter
- Klassische Kriterien (Schutzbedarf V/I/A, unterstuetzte Prozesse, Benutzeranzahl) + geschaeftsspezifische Fragen
- Eintrittswahrscheinlichkeit: "Blick zurueck" (Erfahrungswerte, Statistiken) UND "Blick nach vorne" (neue Technologien, geaenderte Gefaehrdungen)

**Risikoakzeptanzkriterien:**
- Akzeptanzstufen (Non-Compliance, finanzieller Schaden, Reputationsschaden, Aufgabenbeeintraechtigung)
- Schwellwerte an Hierarchie-/Managementebenen binden
- Bei KMU: vereinfachtes Modell starten, iterativ weiterentwickeln
- Umsicht: Risikoappetit angemessen abbilden (weder zu hoch noch zu gering)

**4 Schritte Risikomanagementprozess (nach ISO 31000):**

1. **Risikoidentifikation** (Abschnitt 6.1.2 c)
   - Quellen: Risikoanalysen, Audits, operativer Betrieb, Sicherheitsvorfaelle
   - Risikoanalysen als Pflichtelement im Projektmanagement
   - Auch bei umfangreichen Aenderungen (Change Management)
   - Nichtkonformitaeten/Schwachstellen aus Monitoring → Risikomanagement bewerten

2. **Risikoanalyse**
   - Wahrscheinlichkeit + moegliche Folgen klar herausarbeiten
   - Konsequenzen: Geschaeftsprozesse/Geschaeftstaetigkeit statt technischer Details
   - Bewertungsmatrizen: gerade Spaltenanzahl bevorzugen (z.B. 4x4) — bei ungerader (3x3, 5x5) Tendenz zur Mitte

3. **Risikoevaluierung/-bewertung**
   - Finale Entscheidung beim Risikoeigentuemer (traegt Auswirkungen, verantwortet betroffene Prozesse)
   - Risikoeigentuemer = Prozesseigentuemer oder hoeheres Management (je nach Impact)

4. **Risikobehandlung** (nach ISO/IEC 27005)
   - 4 Optionen: Risk Reduction | Risk Retention | Risk Avoidance | Risk Transfer → Residual Risks
   - Massnahmen aus allen Quellen, aber Abstimmung mit Annex A und SoA
   - Risiken den Risikoeigentuemern zuordnen
   - Auch IT-Risiken: Risikoeigentuemerschaft bei betroffenen Fachbereichen (accountability), Behandlung bei IT (responsibility)
   - Formale Risikoueernahme bei fehlenden Massnahmen/Risikoakzeptanz dokumentieren

**Dokumentation und Reporting:**
- Zentrales Risikoregister empfohlen (keine Normforderung, aber logische Konsequenz aus Abschnitt 6.1.2 b)
- Rechte- und Rollenkonzept fuer Registerzugriff

**Erfolgsfaktoren:**
- IS-Risikomanagement in uebergeordnetes Risikomanagement integrieren (z.B. operationelles RM)
- Prozessorientiert statt assetorientiert → Risiken prozessorientiert formulieren, Schadensauswirkungen zutreffend ermitteln
- Spezialisten-Know-how des Prozesseigentuemers einbeziehen (Interviews, Workshops, Frageboegen/Self-Assessments)
- BSI-Standard 200-3 fuer Risikoanalyse auf Basis IT-Grundschutz

**Dokumentation (normativ):**
- Risikobeurteilungsprozess (Abschnitt 6.1.2)
- Risikobehandlungsprozess (Abschnitt 6.1.3)
- Aufzeichnungen/Ergebnisse Risk Assessments (Abschnitt 8.2)
- Aufzeichnungen/Ergebnisse Risikobehandlungen (Abschnitt 8.3)

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 6.1, 8.2, 8.3 | ISO/IEC 27005:2022 | ISO 31000:2018 | COBIT 2019 | BSI-Standards 200-2, 200-3

## 3.7 Performance/Risk/Compliance Monitoring

**Drei Dimensionen:**
- **Performance-Monitoring:** Wirksamkeit ISMS bzgl. Sicherheitsziele und ISO-Anforderungen
- **Risikomonitoring:** Bewertung/Ueberwachung Sicherheitsrisiken (→ 3.6)
- **Compliance-Monitoring:** Einhaltung rechtlicher, regulatorischer, interner Vorgaben

**Schluesselindikatoren (KxIs):**

| Typ | Misst | Beispiel |
|---|---|---|
| KPI (Key Performance) | Erfolg der Zielerreichung (Effizienz) | Benoetigte vs. geplante Zeit/Budget Awareness-Kampagne |
| KRI (Key Risk) | Veraenderungen im Risikoprofil | % Mitarbeiter die Phishing-Link klicken; % Systeme mit offenen Schwachstellen; % Systeme ohne Herstellersupport |
| KCI (Key Control) | Effektivitaet von Massnahmen (Soll-Ist) | Verhaeltnis geschulter zu planmaessig zu schulender Mitarbeiter; Bestandene Lernkontrollen |

**Qualitaetskriterien fuer KxIs:**
- Messbar, wiederholbar, vergleichbar (zeitlich + branchenuebergreifend)
- Systematisch aufgebaut, zuverlaessige statistische Grundlagen
- Zeitgerecht/aktuell
- Relevant fuer IS-Ziele, steuernde Eingriffe ermoeglichen
- Risikobasierte Auswahl, Wirtschaftlichkeit der Datenerhebung
- ISMS als Ganzes bewerten (nicht nur Teilaspekte)
- Auch fuer Dienstleistersteuerung/SLA nutzbar

> NOTE: SMART-Kriterien fuer alle Ziele, deren Erreichung ueber Kennzahlen gemessen wird.

**Quellen fuer KxIs:** COBIT 2019 for Information Security | CIS Security Metrics | NIST SP 800-55 | ISACA Praxisleitfaden Schluesselindikatoren

**Dokumentation (normativ):**
- Messstruktur: Was gemessen/bewertet? Welche Methoden? Wann/durch wen gemessen? Wann/durch wen analysiert/bewertet?
- Ergebnisse und abgeleitete Managementberichte

**Dokumentation (Praxis):**
- Alle Aufzeichnungen/Nachweise fuer Wirksamkeitsueberwachung

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 9.1 | ISO/IEC 27004:2009 Abschnitte 5-10, Annex A | COBIT 2019

## 3.8 Documentation

**Zentrale Anforderungen:**
- Erstellung, Aktualisierung, Genehmigung, Kommunikation nach definiertem Workflow
- Eindeutige Kennzeichnung: Titel, Datum, Autor, Version, Ablage + Eignungspruefung + Freigabe
- Klassifizierung bzgl. Vertraulichkeit
- Ausreichende Aufzeichnungen fuer Nachvollziehbarkeit
- Fortlaufende Kontrolle: Verfuegbarkeit/Eignung + angemessener Schutz (Vertraulichkeit, Integritaet)

**Begriffsverwendung:** ISO/IEC 27001:2022 nutzt "documented information" — beliebige Formate erlaubt.

**Erfolgsfaktoren:**
- Dokumentenrichtlinie als Grundlage
- Entscheidend: Guete, Akzeptanz, Verfuegbarkeit, effiziente Dokumentenlenkung (nicht Quantitaet)
- Praxisfragen zur Qualitaetsbewertung: Kommunikation an Mitarbeiter? Inhalte gelebt? Ablageorte bekannt? Zielgruppenorientiert? Neue Mitarbeiter — Verstaendlichkeit? Regelmaessige Aktualisierung? Dedizierte Dokumenteigentuemer?
- ISMS-Prozesse (RM, Incident, KVP) ueber Prozessdarstellungen visualisieren (z.B. EPK)

**Dokumentation (normativ) — vollstaendige Auflistung (Abschnitte 4-10):**

| Dokument | Abschnitt |
|---|---|
| Geltungsbereich ISMS | 4.3 |
| IS-Leitlinie | 5.2 e |
| Risikobeurteilungsprozess | 6.1.2 |
| Risikobehandlungsprozess | 6.1.3 |
| SoA | 6.1.3 d |
| Risikobehandlungsplan | 6.1.3 e |
| Sicherheitsziele | 6.2 |
| Monitoring Sicherheitsziele | 6.2 d, 6.2 g |
| Kompetenznachweise | 7.2 d |
| Nachweise korrekte Ausfuehrung/Aenderungen ISMS-Prozesse | 8.1 d, 6.3 |
| Ergebnisse Risikobeurteilung | 8.2 |
| Ergebnisse Risikobehandlungen | 8.3 |
| Nachweis Kontrolle/Leistungsmessung ISMS | 9.1 |
| Nachweis Auditprogramm(e) und Auditergebnisse | 9.2 |
| Nachweis Ergebnisse Managementreviews | 9.3 |
| Festgestellte Abweichungen + Behebungsmassnahmen | 10.1 f |
| Resultate Korrekturmassnahmen | 10.1 g |

> NOTE: Organisation muss zusaetzlich festlegen, welche Dokumentation/Aufzeichnungen noetig sind fuer "ausreichendes Vertrauen, dass Prozesse wie geplant durchgefuehrt wurden" (Abschnitt 8.1).

**Referenzen:** ISO/IEC 27001:2022

## 3.9 Communication

**Kernaussage:** Bedarf an interner und externer Kommunikation bestimmen und beschreiben.

**5 Schritte Kommunikationsplan:**
1. Kommunikationsziele definieren
2. Zielgruppenanalyse + geeignete Medien ermitteln
3. Wichtigste Kommunikationsbotschaften identifizieren
4. Rollen und Aufgaben zuweisen
5. Detaillierten Kommunikationsplan ausarbeiten

**Kommunikationsmatrix (intern) — Beispiel:**

| Grund | Initiator | Empfaenger | Haeufigkeit | Medium |
|---|---|---|---|---|
| Managementreview | CISO | Topmanagement | jaehrlich | Bericht + Praesentation |
| Reporting | CISO | Topmanagement | quartalsweise | KPI-Bericht |
| Awareness-Training | CISO | Alle MA im Scope | jaehrlich | Schulung |
| IS-Newsletter | CISO | Alle MA im Scope | quartalsweise | E-Mail |
| Risikomanagement | CISO | Topmanagement | quartalsweise + fallbezogen | Balanced-Scorecard |
| Sicherheitsvorfall | Support | CISO | fallbezogen | Eskalation gemaess SIRP |
| Vorfall mit PII | CISO | Topmanagement + DSB | fallbezogen | E-Mail/telefonisch |
| Vorfall Compliance | CISO | Justiziariat | fallbezogen | E-Mail/telefonisch |

**Kommunikationsmatrix (extern) — Beispiel:**

| Grund | Initiator | Empfaenger | Haeufigkeit | Medium |
|---|---|---|---|---|
| Report Betriebsdienstleister | Dienstleister | CISO | quartalsweise | SLA-Report |
| CERT/Vulnerability Analysis | CERT | CISO/IT-Leiter | woechentlich/fallbezogen | Report |
| Sicherheitsvorfall | CISO/Topmanagement | Betroffene Kunden/Partner | fallbezogen | gemaess SIRP |
| Vorfall strafrechtlich | CISO | Ermittlungsbehoerden | fallbezogen | gemaess SIRP |

**Erfolgsfaktoren:**
- Bestehende Schnittstellen identifizieren, IS-Kommunikationsplan ggf. in uebergreifenden Plan integrieren
- Plattform bereitstellen (Intranet, Confluence, Wiki) fuer verschiedene Zielgruppen
- Prozessschnittstellen eindeutig definieren: wer liefert was wann an wen (z.B. Change/Incident Management)

**Dokumentation (normativ):** Keine normativen Dokumentationsanforderungen.

**Dokumentation (Praxis):**
- Verfahren interne/externe Kommunikation
- Kommunikationsmatrix
- Kommunikationsplan

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 7.4

## 3.10 Awareness

**Kernaussage:** Sicherheitssensibilisierung ist kein Selbstlaeufer — muss aktiv gefoerdert und gefordert werden (Abschnitt 7.3).

**3 Pflichtaspekte (Abschnitt 7.3):**
1. Kenntnis der IS-Leitlinie/Anwenderrichtlinie/relevanter IS-Richtlinien
2. Beitrag jedes Mitarbeiters gemaess Anwenderrichtlinie — erfolgreiche Vermittlung durch Tests nachweisen
3. Auswirkungen/Sanktionen bei Nichteinhaltung kommunizieren — Meldung eigenen Fehlverhaltens i.d.R. nicht sanktionieren

**5-Phasen-Modell Security-Awareness-Kampagne:**

**Phase 1: Bedarfsermittlung**
- Zielgruppe und Bedarf kennen
- Nur der tatsaechlichen Gefaehrdung und Zielgruppe entsprechende Inhalte
- Kenntnis von Sicherheitsvorgaben z.B. durch aktive Beteiligung + Teilnehmerprotokolle nachweisen

**Phase 2: Konfrontation**
- Aufmerksamkeit wecken, Betroffenheit erzeugen, Akzeptanz foerdern
- Simulierte Angriffe: Social-Engineering (Fake-Anrufe, Phishing-Mails), praeparierte USB-Sticks, Dumpster Diving
- Alternativ passiv: Live-Hacking, Passwortstärke-Pruefung, Rollenspiele
- Wichtig: positiver Einstieg, auf Augenhoehe, Abstimmung mit Betriebsrat

**Phase 3: Sensibilisierung**
- Mix: Wissensvermittlung + Demonstration + aktive Beteiligung
- Themengebiete: Physische Sicherheit/Arbeitsplatz, Datenschutz, IT-Sicherheit, Telefonie, Meldung Sicherheitsvorfaelle
- Besonders gefaehrdete Zielgruppen beruecksichtigen: IT-Admins, FK mit weitreichenden Rechten, mobile MA, Callcenter
- Awareness-Materialien: Broschueren, Newsletter, Poster, Aufkleber, Plakate, Flyer, Videos
- Leitvideo des Topmanagements

**Phase 4: Nachhaltigkeit**
- Einmalige Massnahmen nicht ausreichend — regelmaessige Wiederholung
- Regelmaessige simulierte Phishing-Mails
- Aktuelle News (Intranet, Mitarbeiterzeitung)
- Online-Quiz (ggf. mit Incentivierung)
- Bildschirmschoner mit Sicherheitsbotschaften
- Jaehrlicher Cyber-Sicherheits-Monat

**Phase 5: Evaluation der Wirksamkeit**
- KPIs: Sicherheitsvorfaelle durch Fehlverhalten / alle Vorfaelle
- Klickraten/Kennworteingaben auf simulierte Phishing-Mails
- Ergebnisse Quiz/Tests
- Net Promoter Score (NPS) bei Schulungsinhalten

**Dokumentation (normativ):**
- Kompetenznachweise MA im Geltungsbereich (Abschnitt 7.2)

**Dokumentation (Praxis):**
- Awareness-/Schulungskonzept (Themen, Methoden, Vermittlung IS-Richtlinie)
- Awareness-/Schulungsprogramm (Zeitplan, regelmaessige Updates)
- Schulungsunterlagen (knapp, praegnant, Gefahren/Schwachstellen)
- Teilnahmenachweise (Namen, Inhalte, Datum)

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 7.2, 7.3

## 3.11 Supplier Relationships

**Kernaussage:** Starke Vernetzung erfordert umfassendes Lieferantenmanagement. "Supplier" umfasst: IT-Dienstleister, Softwarehersteller, Outsourcing-Partner, Cloud Service Provider, Logistik, Facility, Reinigung u.v.m.

**Einteilung (nach ISO/IEC 27036-1):**
1. Lieferantenbeziehungen fuer Produkte
2. Lieferantenbeziehungen fuer Services
3. Lieferkette fuer IT
4. Cloud Computing

**Anforderungen ISO/IEC 27001:2022:**
- Prozesse und Verfahren festlegen (Abschnitt 5.19)
- Vertragliche Regelungen mit Lieferanten (Abschnitt 5.20): Protokollierung, CERT-Anbindung, Meldewege, Identity Management
- Risiken aus ITK-Infrastruktur, Lieferketten, Weiterverlagerungen (Abschnitt 5.21)
- Ueberwachung/Aenderung Dienstleistungserbringung (Abschnitt 5.22)
- Cloud-Dienste: themenspezifische Richtlinie + Prozesse fuer gesamten Lebenszyklus (Abschnitt 5.23)

**Erfolgsfaktoren:**
- Alle ausgelagerten Prozesse klar festlegen und nachhaltig steuern (Abschnitt 8.1)
- Software (eigene + Produkte): Frameworks/Bibliotheken als Lieferantenrisiko — Identifikation/Kontrolle von Komponenten
- Recht auf Auditierung grundsaetzlich in jedem Vertrag vorsehen
- Cloud-Anbieter: Alternativen pruefen (externe Auditberichte, Zertifikate + Geltungsbereiche)
- Relevante Zertifizierungen: ISO/IEC 27001, IT-Grundschutz, ISO/IEC 27018, ISAE 3402, TISAX
- Fuer kritische Lieferanten: SOC Type II Report gemaess ISAE 3402 einfordern
- Bei personenbezogenen Daten: Einsatz ausserhalb EWR kritisch pruefen (Art. 28 EU-DSGVO)

**Kennzahlen:**
- Anteil fristgerecht gelieferter Dienstleister-Reports
- Durchschnittliche Zeit Entdeckung → Meldung Sicherheitsvorfall
- Anteil Dienstleister mit vertraglich zugesicherten IS-Massnahmen
- Anzahl Sicherheitsvorfaelle bei Dienstleistern

**Dokumentation (normativ):**
- Geltungsbereich unter Beruecksichtigung externer Abhaengigkeiten (Abschnitt 4.3)

**Dokumentation (Praxis):**
- Prozesse/Verfahren Dienstleisterbeziehungen (Abschnitte 5.19-5.22)
- Vereinbarungen IS-Anforderungen mit Lieferanten (nach Kategorien)
- Themenspezifische Richtlinie Cloud-Services (Abschnitt 5.23)
- Branchenspezifische Anforderungen (z.B. BDEW-Whitepaper Energiesektor)

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 4.3, 8.1, 5.19-5.23 | ISO/IEC 27036-1:2021 | BDEW-Whitepaper

## 3.12 Internal Audit

**Kernaussage:** Primaere Ziele: 1) Konformitaetskontrolle (ISMS vs. eigene Anforderungen + ISO 27001), 2) Umsetzungs- und Wirksamkeitskontrolle ergriffener Massnahmen.

**Alle Geschaeftsprozesse im Scope muessen mindestens einmal in 3 Jahren auditiert werden.**

**Zwei Bereiche:**

**1. Auditprogramm (organisatorischer Ueberbau):**

Zyklus: Planung → Festlegung → Implementierung → Monitoring → Review/Verbesserung

- **Planung:** Risikoorientiert, Wichtigkeit Geschaeftsprozesse, Geltungsbereich abdecken
- **Festlegung:** Gesamtes Auditprogramm festlegen, Risiken auf Programm bewerten, Prozesse/Ressourcen bestimmen, Methoden/Werkzeuge festlegen, Auditoren auswaehlen, Dokumentation aktuell halten
- **Implementierung:** Bereiche so waehlen, dass einzeln und ueberschaubar auditierbar. Faktoren: Kritikalitaet, tolerabler Zeitraum zwischen Audits
- **Monitoring:** Auditprogramm selbst ueberwachen: Am Geltungsbereich ausgerichtet? Ressourcen angemessen? Richtige Bereiche? Prueftiefe geeignet? Aufwand je Audit dokumentieren. Qualitaet Auditergebnisse (Sachlichkeit, Uebersichtlichkeit, Nachvollziehbarkeit)
- **Review/Verbesserung:** Erwartungen Stakeholder pruefen, KPIs einfuehren (z.B. "Anteil akzeptierter Massnahmen" statt nur Zeitaussagen)

**2. Auditaktivitaeten (operative Durchfuehrung):**
- Ohne dedizierten Auditauftrag kein Audit
- Auditierten Bereich aktiv einbeziehen (Scope, Zeitplanung, Ansprechpartner)
- Im Audit moeglichst Sofortmassnahmen ableiten — formale Abstimmung mit Risikoeigentuemern
- Bisher unbekannte Risiken → zentrales Risikoinventar
- Auditergebnisse regelmaessig an Leitungsebene melden
- Eindeutig vermerken: welche Systeme/Dokumente geprueft
- Offene Kommunikation ueber gesamte Auditdauer (Vorbehalte abbauen)
- Abschlussmeeting: Ergebnisse gemeinsam durchsprechen, formale Abnahme anstreben
- Auditberichte vertraulich behandeln

**Kompetenz Auditoren:**
- Objektivitaet, Expertise, Unparteilichkeit sicherstellen
- Kompetenzen beschreiben (Rollen-/Stellenbeschreibung)
- Auditoren auf Basis Ziele/Inhalte des jeweiligen Audits auswaehlen

**Abgrenzung zu Zertifizierungsaudits:** Interne Audits ≠ Zertifizierungsaudits (externe Auditoren im Auftrag der Zertifizierungsstelle, Basis ISO/IEC 27006:2015 + ISO/IEC 17021-1:2015).

**Abgrenzung zu IKS:**
- IKS = uebergreifendes Steuerungs-/Ueberwachungsinstrument
- 3 Verteidigungslinien: 1) Prozessintegrierte Kontrollen (direkte Leitung), 2) ISMS/Compliance prozessunabhaengig, 3) Interne Revision
- Schnittstellen zu IKS/Interner Revision empfehlenswert

**Dokumentation (normativ):**
- Auditprogramm(e) (Abschnitt 9.2 g)
- Auditergebnisse (Abschnitt 9.2 g)

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 9.2 | ISO/IEC 19011:2018 | ISO/IEC 27006:2015 | ISO/IEC 27007:2020 | ISO/IEC 17021-1:2015

## 3.13 Incident Management

**Kernaussage:** Management von IS-Vorfaellen = elementarer Baustein. Ziel: koordiniertes, zielgerichtetes, effizientes Handeln bei Sicherheitsverletzungen/Cyberangriffen.

> NOTE: Fuer ganzheitliche Notfallvorsorge → ISO 22301:2019. Dieses Kapitel adressiert nur IS-Vorfaelle.

**Phasenmodell (angelehnt an ISO/IEC 27035-1:2023):**

**Phase 1: Planen und Vorbereiten**
- Incident Response Plan (IRP) entwickeln (Annex 5.24)
- Incident Response Team (IRT) etablieren
- Massnahmen fuer relevante denkbare IS-Vorfaelle definieren
- Melde-/Kontaktlisten pflegen, veroeffentlichen, Awareness schaffen
- Eskalationswege definieren
- **"Im Notfall funktioniert nur, was zuvor kommuniziert und mehrfach geuebt wurde"**

**Phase 2: Erkennen und Annehmen**
- Zentrale Meldestelle fuer alle Vorfaelle (unabhaengig vom Eingangskanal)
- Allen relevanten Gruppen eindeutigen Meldeweg anbieten (MA, Lieferanten, Kunden, Partner)
- Verhaltensregeln bei Unregelmaessigkeiten bereitstellen

**Phase 3: Klassifizieren und Entscheiden**
- Meldestelle entscheidet: Sicherheitsereignis / Known Error / Notfall
- Im Zweifelsfall Eskalation (ggf. Manager on Duty)
- Mindestens dokumentieren: ID-Nummer, Datum, Meldende/Betroffene, Beschreibung, Sofortmassnahmen
- Klassifizierungsschema (Stoerungen, Vorfaelle, Notfaelle, Krisen) → Prioritaet → vorab definierte Sofortmassnahmen
- Monitoring dokumentierter Vorfaelle (auch niedrig klassifizierte bearbeiten)

**Phase 4: Incident Response**
1. **Eindaemmung + initiale Beweissicherung:** Analyse Ausdehnung, Eindaemmung, Forensik (Control 5.28)
   - Lokale Massnahmen: Konten sperren, Dienste abschalten, Malware-Tools, Netzwerk-Isolation/Quarantaene, Protokolle/IPs sperren
2. **Beseitigung + Wiederherstellung:** Sollzustand wiederherstellen (Restore Backup auf neuen Systemen, Schwachstellen schliessen, Updates/Patches)
3. **Ursachenfindung + erweiterte Beweissicherung:** Root Cause, weitergehende Forensik

**Phase 5: Lessons Learned / Nachbereitung**
- Nachvollziehbarkeit zu jeder Zeit: Status, Bearbeiter, geplante Massnahmen, Umsetzungstermine
- Pruefung: Optimierung IRP oder Organisations-Aenderungen moeglich?
- Dokumentation: Wie Vorfaelle kuenftig vermeiden/minimieren → ggf. weitere Massnahmen in Regelbetrieb

**Dokumentation (normativ):** Keine Mindestanforderungen.

**Dokumentation (Praxis):**
- Incident Response Plan (IRP) inkl. Kontaktlisten und Eskalationsplaene
- Verhaltensregeln bei Unregelmaessigkeiten
- Prozessbeschreibungen/Arbeitsanweisungen Beweissicherung
- IS-Vorfallsberichte

**Referenzen:** ISO/IEC 27001:2022 Abschnitte 5.24-5.28, 6.8 | ISO/IEC 27035-1:2023 | ISO/IEC 27035-2:2023 | ISO 22301:2019

## 3.14 Continual Improvement

**Kernaussage:** Organisationen muessen aus Nichtkonformitaeten Verbesserungspotenziale ableiten und ISMS stetig verbessern (KVP). Durchfuehrung und Ergebnisse ueberwachen und dokumentieren.

**PDCA-Zyklus:**

**Plan:**
- IS-Ziele + Verantwortlichkeiten etablieren
- Sicherheitsmassnahmen + operative Prozessverantwortliche festlegen
- Leistungsindikatoren definieren (Messung gegen IS-Ziele) + Monitoring-Massnahmen
- Messpunkte, Berechnungsmethode, Norm-/Toleranzbereiche festlegen
- Korrekturmassnahmen definieren

**Do:**
- Kontinuierliche Messung IS-Zielerreichung
- Korrekturen bei Maengeln/Nichtkonformitaeten einleiten

**Check:**
- Massnahmenindikatoren ueberwachen, Leistung vs. IS-Ziele vergleichen
- Eingeleitete Massnahmen: Umsetzung + Effektivitaet ueberwachen
- Sicherheitsberichte mit KPIs fuer Management erstellen (inkl. Handlungsoptionen)

**Act:**
- Managemententscheidungen treffen, Effektivitaet wiederherstellen
- Entscheidungen mit Begruendungen dokumentieren (Security Controlling)

**Quellen fuer Abweichungen/Verbesserungsvorschlaege:**
- KPI-Analysen/Messungen
- Nachbereitung Sicherheitsvorfaelle
- Ergebnisse (interner) Audits
- Managementreview/Steuerung durch Leitung
- Betriebliches Vorschlagswesen
- Abgeleitete Massnahmen aus Risikobehandlung

**Erfolgsfaktoren:**
- Massnahmen aus KVP in uebergreifenden Umsetzungsplan aufnehmen (zentrale konsolidierte Liste)
- Regelmaessige Risikoanalysen = wesentlicher Verbesserungsbestandteil
- Umsetzungsplan erleichtert Monitoring (Status, Faelligkeit, Wirksamkeitspruefung)
- **Korrektur vs. Korrekturmassnahme:** Korrektur = nichtkonforme Situation bereinigen (10.1 a, b). Korrekturmassnahme = nachhaltige Ursachenforschung + Wiederholung verhindern (10.1 c-g)

**Dokumentation (normativ):**
- Nachweise Nichtkonformitaeten + umgesetzte Massnahmen (Abschnitt 10.1 f)
- Nachweise Wirksamkeit Massnahmenumsetzung (Abschnitt 10.1 d)
- Nachweise Resultate korrigierender Massnahmen (Abschnitt 10.1 g)

**Dokumentation (Praxis):**
- Verfahren fuer Korrekturmassnahmen (ab Abschnitt 10.1 c)
- Beschreibung Incident-Management + Verfolgung Korrekturmassnahmen
- Dokumentations-Tool fuer Umsetzungsstatus + Wirksamkeitspruefung

**Referenzen:** ISO/IEC 27001:2022 Abschnitt 10 | Annex SL

## 4. Integration und Operationalisierung

**Problem:** Mehrfachpflege gleicher Massnahmen in verschiedenen Managementsystemen (ISMS, IKS, Datenschutz, QMS) → Mehraufwand, Unverstaendnis bei Fachbereichen.

**Loesung 1: Corporate-Control-Datenbank**
- Harmonisiert Regeln ueber verschiedene Vorgaben/Richtlinien hinweg
- Metaebene ordnet Normen zu → konsolidierte Massnahmen fuer gesamte Organisation
- Vorteil: Antworten zu vorher nicht betrachteten Standards werden sichtbar
- Qualitaet waechst mit jeder neuen Bewertung

**Loesung 2: Ausrichtung an Domaenen**
- Steuerungsaspekte in Domaenen gruppieren (thematisch klare Zuordnung/Verantwortlichkeit)
- Domaenen z.B. aus ISO/IEC 27002 (Cybersecurity Concepts), BSI-Kompendium, NIST SP 800-53
- Domaenenverantwortlicher loest Neuerungen/Anforderungskonflikte zentral
- Frameworks waehlbar: TISAX (Automobil), CCM/CSA (SaaS), BSI (Behoerden)

**Harmonized Structure (Annex SL):**
- ISO 27001, ISO 27701, ISO 22301, ISO 9001, ISO 14001 — integrationstauglich
- Synergien: Dokumentenlenkung, integrative Risk Assessments

## 8.1 Mapping Annex ISO/IEC 27001:2022 vs. 2013

### 2022 → 2013

| 2022 | 2013 |
|---|---|
| 5.1 | A.5.1.1, A.5.1.2 |
| 5.2 | A.6.1.1 |
| 5.3 | A.6.1.2 |
| 5.4 | A.7.2.1 |
| 5.5 | A.6.1.3 |
| 5.6 | A.6.1.4 |
| 5.7 | Neu |
| 5.8 | A.6.1.5, A.14.1.1 |
| 5.9 | A.8.1.1, A.8.1.2 |
| 5.10 | A.8.1.3, A.8.2.3 |
| 5.11 | A.8.1.4 |
| 5.12 | A.8.2.1 |
| 5.13 | A.8.2.2 |
| 5.14 | A.13.2.1, A.13.2.2, A.13.2.3 |
| 5.15 | A.9.1.1, A.9.1.2 |
| 5.16 | A.9.2.1 |
| 5.17 | A.9.2.4, A.9.3.1, A.9.4.3 |
| 5.18 | A.9.2.2, A.9.2.5, A.9.2.6 |
| 5.19 | A.15.1.1 |
| 5.20 | A.15.1.2 |
| 5.21 | A.15.1.3 |
| 5.22 | A.15.2.1, A.15.2.2 |
| 5.23 | Neu |
| 5.24 | A.16.1.1 |
| 5.25 | A.16.1.4 |
| 5.26 | A.16.1.5 |
| 5.27 | A.16.1.6 |
| 5.28 | A.16.1.7 |
| 5.29 | A.17.1.1, A.17.1.2, A.17.1.3 |
| 5.30 | Neu |
| 5.31 | A.18.1.1, A.18.1.5 |
| 5.32 | A.18.1.2 |
| 5.33 | A.18.1.3 |
| 5.34 | A.18.1.4 |
| 5.35 | A.18.2.1 |
| 5.36 | A.18.2.2, A.18.2.3 |
| 5.37 | A.12.1.1 |
| 6.1 | A.7.1.1 |
| 6.2 | A.7.1.2 |
| 6.3 | A.7.2.2 |
| 6.4 | A.7.2.3 |
| 6.5 | A.7.3.1 |
| 6.6 | A.13.2.4 |
| 6.7 | A.6.2.2 |
| 6.8 | A.16.1.2, A.16.1.3 |
| 7.1 | A.11.1.1 |
| 7.2 | A.11.1.2, A.11.1.6 |
| 7.3 | A.11.1.3 |
| 7.4 | Neu |
| 7.5 | A.11.1.4 |
| 7.6 | A.11.1.5 |
| 7.7 | A.11.2.9 |
| 7.8 | A.11.2.1 |
| 7.9 | A.11.2.6 |
| 7.10 | A.8.3.1, A.8.3.2, A.8.3.3, A.11.2.5 |
| 7.11 | A.11.2.2 |
| 7.12 | A.11.2.3 |
| 7.13 | A.11.2.4 |
| 7.14 | A.11.2.7 |
| 8.1 | A.6.2.1, A.11.2.8 |
| 8.2 | A.9.2.3 |
| 8.3 | A.9.4.1 |
| 8.4 | A.9.4.5 |
| 8.5 | A.9.4.2 |
| 8.6 | A.12.1.3 |
| 8.7 | A.12.2.1 |
| 8.8 | A.12.6.1, A.18.2.3 |
| 8.9 | Neu |
| 8.10 | Neu |
| 8.11 | Neu |
| 8.12 | Neu |
| 8.13 | A.12.3.1 |
| 8.14 | A.17.2.1 |
| 8.15 | A.12.4.1, A.12.4.2, A.12.4.3 |
| 8.16 | Neu |
| 8.17 | A.12.4.4 |
| 8.18 | A.9.4.4 |
| 8.19 | A.12.5.1, A.12.6.2 |
| 8.20 | A.13.1.1 |
| 8.21 | A.13.1.2 |
| 8.22 | A.13.1.3 |
| 8.23 | Neu |
| 8.24 | A.10.1.1, A.10.1.2 |
| 8.25 | A.14.2.1 |
| 8.26 | A.14.1.2, A.14.1.3 |
| 8.27 | A.14.2.5 |
| 8.28 | Neu |
| 8.29 | A.14.2.8, A.14.2.9 |
| 8.30 | A.14.2.7 |
| 8.31 | A.12.1.4, A.14.2.6 |
| 8.32 | A.12.1.2, A.14.2.2, A.14.2.3, A.14.2.4 |
| 8.33 | A.14.3.1 |
| 8.34 | A.12.7.1 |

**11 neue Controls (2022):** 5.7, 5.23, 5.30, 7.4, 8.9, 8.10, 8.11, 8.12, 8.16, 8.23, 8.28

## 8.2 Versionsvergleich — Wesentliche Aenderungen

### ISO/IEC 27001:2022 vs. 2013

| Kapitel | Aenderung |
|---|---|
| 4 (Context) | Zusaetzlich definieren, welche Stakeholder-Anforderungen im ISMS adressiert werden (4.2 c) |
| 6 (Planning) | 6.2: IS-Ziele muessen auch ueberwacht werden. Neuer Abschnitt 6.3: Geplante Aenderungen am ISMS |
| 8 (Operation) | Explizit Kriterien fuer Umsetzung der Prozesse aus Kap. 6 etablieren |
| 9 (Performance) | 9.2/9.3 in Unterabschnitte aufgeteilt (inhaltlich identisch). 9.3: Managementreviews muessen Aenderungen an Stakeholder-Beduerfnissen erfassen |
| 10 (Improvement) | Neuordnung: Eignung/Angemessenheit/Wirksamkeit vor Nichtkonformitaet (Verbesserungen vor Korrekturen foerdern) |
| Annex A | Vollstaendiger Ersatz mit ISO/IEC 27002:2022 Controls. Annex nutzt "shall" (obligatorisch), ISO 27002 nutzt "should" (Empfehlung) |

> NOTE: Annex-A-Controls erheben keinen Anspruch auf Vollstaendigkeit. Andere Quellen (NIST, BSI, ISF) erlaubt — dann Mapping in SoA erstellen.

### ISO/IEC 27002:2022 vs. 2013

| Aspekt | 2013 | 2022 |
|---|---|---|
| Umfang | 80 Seiten, 27 Normverweise | 131 Seiten, 56 Quellverweise |
| Struktur | 14 Security Control Clauses | 4 Themen (Organizational, People, Physical, Technological) |
| Controls | 114 | 93 (11 neu, 1 aufgeteilt, 57→24 zusammengefasst, 58 umformuliert) |
| Neu | — | Begriffe/Glossar, Attribute (5 Kategorien), Purpose je Control |

**5 Attribut-Kategorien (neu):**
1. Control types: preventive, detective, corrective
2. IS properties: confidentiality, integrity, availability
3. Cybersecurity concepts: identify, protect, detect, respond, recover (= NIST CSF)
4. Operational capabilities: z.B. physical security, governance
5. Security domains: z.B. protection, defence

**Uebergangsfrist:** Bis 31.10.2025 bestehende ISMS an neue Version anpassen (IAF MD 26:2022).

## 8.3 Business Criticality Scorecard (BCS)

**Zweck:** Vor-Filter fuer Risikomanagement. Szenarienbasierte Einstufung des Risiko-Levels je Prozess/Applikation.

**Vorgehen:**
1. Fuer jeden Hauptprozess + Applikation: Kritikalitaet und Schutzbedarf durch Prozesseigner bewerten
2. Szenarien fuer V/I/A bewerten (Risiko: Wahrscheinlichkeit + Schadenshoehe)
3. Basierend auf Ergebnis → Aufwand Sicherheitsanalyse festlegen

**Entscheidungsstufen:**

| Stufe | Aufwand |
|---|---|
| 0 | Keine weitere Analyse |
| 1 | GAP-Analyse auf Standardmassnahmen oder IT-Bestaetigung |
| 2 | Erweiterte Schwachstellenanalyse (z.B. STRIDE) |
| 3 | Penetrationstest / Quellcodeanalyse durch unabhaengige dritte Partei |

**Vorteile:**
- Systematische "weakest link"-Absicherung
- Nur aufwaendige Analysen bei hoher Kritikalitaet
- Erweiterbar um weitere Aspekte: Compliance, Betriebsprozesse, Patch-Management, Logging, Datensicherung, Berechtigungskonzepte
- Auch Anforderungen anderer Managementsysteme (Datenschutz, QM) integrierbar

## 8.4 Interne ISMS-Audits — Mapping

| Teilprozess | ISO/IEC 27001:2022 | ISO/IEC 19011:2018 / 27007:2020 |
|---|---|---|
| Planung Auditprogramm | 9.2 a | 5.1, 5.2 |
| Festlegung | 9.2 c | A.5.4 |
| Implementierung | 9.2 c | A.5.5 |
| Monitoring | 9.2 c | A.5.6 |
| Review/Verbesserung | 9.2 c | A.5.7 |
| Kompetenz/Auswahl Auditoren | 9.2 e | 7 |
| Dokumentation/Nachweise | 9.2 g | A.5.5.7 |
| Auditkriterien/-umfang | 9.2 d | A.5.5.2 |
| Durchfuehrung | 9.2 e | 6 |
| Reporting | 9.2 f | A.5.5.6 |

## Abkuerzungen

| Kuerzel | Bedeutung |
|---|---|
| ADV | Auftragsdatenverarbeitung |
| APT | Advanced Persistent Threat |
| BCMS | Business Continuity Management System |
| BCS | Business Criticality Scorecard |
| BIA | Business Impact Analysis |
| BSI | Bundesamt fuer Sicherheit in der Informationstechnik |
| CCM | Cloud Control Matrix |
| CERT | Computer Emergency Response Team |
| CIA | Confidentiality, Integrity, Availability |
| CIO | Chief Information Officer |
| CISO | Chief Information Security Officer |
| COBIT | Control Objectives for Information and Related Technology |
| COSO | Committee of Sponsoring Organizations |
| CSA | Cloud Security Alliance |
| DSB | Datenschutzbeauftragter |
| EPK | Ereignisgesteuerte Prozesskette |
| EU-DSGVO | EU-Datenschutz-Grundverordnung |
| EWR | Europaeischer Wirtschaftsraum |
| GRC | Governance, Risk and Compliance |
| ICT | Information and Communications Technology |
| IKS | Internes Kontrollsystem |
| IRP | Incident Response Plan |
| IRT | Incident Response Team |
| IS | Informationssicherheit |
| ISAE | International Standard on Assurance Engagements |
| ISB | Informationssicherheitsbeauftragter |
| ISMS | Information Security Management System |
| KCI | Key-Control-Indikator |
| KPI | Key-Performance-Indikator |
| KRI | Key-Risk-Indikator |
| KVP | Kontinuierlicher Verbesserungsprozess |
| KxI | Schluesselindikator (KPI/KRI/KCI) |
| MaRisk | Mindestanforderungen an das Risikomanagement |
| NPS | Net Promoter Score |
| PDCA | Plan-Do-Check-Act |
| QMB | Qualitaetsmanagementbeauftragter |
| RACI | Responsible, Accountable, Consulted, Informed |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SoA | Statement of Applicability |
| SoD | Segregation of Duties |
| SIRP | Security Incident Response Process |
| SLA | Service Level Agreement |
| SMART | Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert |
| TISAX | Trusted Information Security Assessment Exchange |

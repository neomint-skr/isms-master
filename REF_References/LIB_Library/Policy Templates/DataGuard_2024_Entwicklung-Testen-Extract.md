# Handbuch zur Sicherheit in Projekten, Entwicklung und beim Testen Extrakt

> Quelle: DataGuard Policy Template "DataGuard_2024_Entwicklung-Testen.pdf", Version 1.0 (26.09.2024).
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch.
> Template-Charakter: Enthaelt Platzhalter zur organisationsspezifischen Anpassung.
> Citation Key: DG24-ET

---

## 1. Einleitung

Dieses Handbuch zur Sicherheit in Projekten, in der Softwareentwicklung und waehrend Testprozessen dient als konsolidierter Rahmen, der die Strategie fuer die wirksame Verwaltung und Sicherung von Projektentwicklungs- und Testprozessen umreisst. Es dient als umfassender Leitfaden, in dem detailliert beschrieben wird, wie verschiedene Sicherheitsherausforderungen im Zusammenhang mit den genannten Themen angegangen werden. Darueber hinaus dient es als uebergeordnetes Dokument, das den Ansatz in Bezug auf die Sicherheit in Projekten sowie bei der Entwicklung und dem Testen umreisst.

### 1.1 Zweck und Umfang

Das Hauptziel dieser Sammlung von Richtlinien in einem Handbuch besteht darin, einen strukturierten Ansatz fuer die Sicherheit bei der Systementwicklung und dem Testen sowie im Management von Projekten festzulegen, um sensible Informationen, Vermoegenswerte und den Ruf der Organisation zu schuetzen. Durch die Einhaltung dieser Richtlinien soll die Widerstandsfaehigkeit gegen Sicherheitsverletzungen erhoeht und das Risiko von Unterbrechungen oder Kompromittierungen innerhalb der Projektentwicklungs- und Testprozesse minimiert werden.

Die in der Organisation fuer Projekte verantwortlichen Personen haben die Aufgabe, in Zusammenarbeit mit den entsprechenden Abteilungen die Umsetzung, Aufrechterhaltung und kontinuierliche Verbesserung der in diesem Handbuch beschriebenen Verfahren zu ueberwachen.

### 1.2 Anwendbarkeit

Diese Richtlinien gelten fuer alle Mitarbeiter, Auftragnehmer, Drittanbieter und Interessengruppen, die in der Organisation an der Projektentwicklung oder am Testen beteiligt sind. Sie umfasst alle Aspekte der Projektentwicklung, der Testprozesse und der damit verbundenen Sicherheitsmassnahmen, unabhaengig von der Art oder dem Ort der Projektaktivitaeten.

---

## 2. Prozessmanagement

### 2.1 Betriebsverfahren fuer Informationsverarbeitungsanlagen

**ISO 27001 Referenz:** A.5.37

#### 2.1.1 Richtlinie

Die Organisation muss die Betriebsverfahren fuer Informationsverarbeitungsanlagen dokumentieren und relevanten Abteilungen bzw. Personen, die diese fuer ihre Arbeit benoetigen, zur Verfuegung stellen.

#### 2.1.2 Verfahren

Die in der Richtlinie genannten Betriebsverfahren fuer Informationsverarbeitende Anlagen muessen identifiziert werden und z.B. im Assetmanagement unter anderem zur Bewertung der Kritikalitaet in Bezug auf Schutzbedarf (Vertraulichkeit, Verfuegbarkeit und Integritaet) klassifiziert werden.

**Als kritisch sollten Betriebsverfahren klassifiziert und durch die Asset-Eigentuemer (Fachabteilungen) dokumentiert werden:**

| # | Kriterium |
|---|---|
| 1 | Wenn die Taetigkeit von vielen Menschen auf dieselbe Weise ausgefuehrt werden soll |
| 2 | Wenn die Taetigkeit selten ausgefuehrt wird und das Verfahren bei der naechsten Ausfuehrung wahrscheinlich vergessen wurde |
| 3 | Wenn die Taetigkeit neu ist und bei unsachgemaesser Durchfuehrung ein Risiko darstellt |
| 4 | Vor der Uebergabe der Taetigkeit an neues Personal |

**Spezifikationen in Betriebsablaeufen**

In Betriebsablaeufen sollen die folgenden Aspekte festgelegt werden:

| # | Aspekt |
|---|---|
| 1 | Die verantwortlichen Personen |
| 2 | Sichere Installation und Konfiguration von Systemen |
| 3 | Behandlung und Verarbeitung von Informationen, sowohl automatisiert als auch manuell |
| 4 | Sicherung und Ausfallsicherheit |
| 5 | Zeit- und Aufgabenplanung, einschliesslich der Abhaengigkeiten von anderen Bedingungen bzw. Systemen |
| 6 | Anweisungen zur Behebung von Fehlern oder anderen aussergewoehnlichen Bedingungen (z.B. Einschraenkungen bei Versorgungsausfaellen), die waehrend der Auftragsausfuehrung auftreten koennen |
| 7 | Support- und Eskalationskontakte, einschliesslich externer Supportkontakte fuer den Fall unerwarteter betrieblicher oder technischer Schwierigkeiten |
| 8 | Hinweise zur Handhabung von Speichermedien |
| 9 | Verfahren zum Neustart und zur Wiederherstellung des Systems im Falle eines Systemausfalls |
| 10 | Management von Auditberichten und Systemprotokollinformationen und Videoueberwachungssystemen |
| 11 | Ueberwachungsverfahren wie Kapazitaet, Leistung und Sicherheit |
| 12 | Anweisungen zur Wartung |

---

## 3. Projekt- und Aenderungsmanagement

### 3.1 Informationssicherheit in Projekten

**ISO 27001 Referenz:** A.5.8

#### 3.1.1 Richtlinie

Die Informationssicherheit muss in alle Phasen des Projektmanagements einbezogen werden, um sicherzustellen, dass alle potenziellen Risiken beruecksichtigt werden.

#### 3.1.2 Verfahren

Die Beruecksichtigung von Informationssicherheit in Projekten ist ein wichtiges Instrument, um in Fruehstadien von Entwicklungen, Veraenderungen und Produktionsvorhaben Prozesse und Anwendungen sicherer zu gestalten und das Risiko von Sicherheitsvorfaellen oder Datenverlusten zu minimieren.

**Informationssicherheit kann in Projekten durch die folgenden Massnahmen beruecksichtigt werden:**

**Identifikation von Projekten mit Bezug zur Informationssicherheit:**

Die Organisation muss dem Informationssicherheits-(Security-)Team einen Ueberblick ueber Projekte mit relevantem Bezug zur Informationssicherheit ermoeglichen. Als relevant ist ein Projekt einzustufen, wenn im Projekt sensible oder vertrauliche Informationen verarbeitet, gespeichert oder uebertragen werden. Dies kann personenbezogene Daten, geistiges Eigentum, finanzielle Informationen oder andere geschaeftskritische Daten umfassen. Zudem sind Projekte als relevant zu klassifizieren, wenn Prozesse oder Anwendungen betroffen sind, die fuer die Geschaeftskontinuitaet erforderlich sind.

> **[Template-Hinweis]:** Bitte erstellen Sie – wenn nicht bereits vorhanden – ein Verzeichnis der relevanten Projekte in Ihrer Organisation. Hierbei sind sowohl Projekte mit Absatz- bzw. Kundenbezug zu beruecksichtigen als auch Gestaltungs- und Infrastrukturprojekte Ihrer Organisation bzw. Projekte mit Lieferantenbezug.

**Eindeutigkeit der Projektverantwortung:**

Innerhalb von Projekten muessen eindeutige persoenliche Verantwortlichkeiten festgelegt sein, damit sichergestellt werden kann, dass die Interessen der Informationssicherheit in Projekten adressiert werden koennen und Beruecksichtigung finden. Im Falle einer Nicht-Beruecksichtigung muessen diese Projektverantwortlichen zur Rechenschaft gezogen werden koennen.

**Risikoanalyse und -bewertung:**

Das Informationssicherheitsteam hat die Aufgabe, mit dem Projekt-Team eine umfassende Risikoanalyse durchzufuehren, um potenzielle Sicherheitsrisiken im Zusammenhang mit dem Projekt zu identifizieren. Dabei muessen unter anderem alle Aspekte von der Datenspeicherung und -uebertragung bis hin zur Systemintegration beruecksichtigt werden.

**Einbeziehung von Sicherheitsanforderungen:**

In Anlehnung an die Anforderung an die Informationssicherheit in Systemanwendungen und Lieferantenbeziehungen muessen klare Sicherheitsanforderungen fuer das Projekt definiert und diese in die Projektziele, Spezifikationen und Anforderungen einbezogen werden. Dies kann die Anforderungen an den Datenschutz, Zugriffskontrollen, Verschluesselung und andere Sicherheitsaspekte umfassen. Das Informationssicherheitsteam bzw. der ISB muss in die Festlegung von Sicherheitsanforderungen involviert werden.

**Mandantentrennung in Kundenprojekten:**

Eine Mandantentrennung in Kundenprojekten bezieht sich auf die Isolierung von Daten, Ressourcen und Funktionen, um sicherzustellen, dass Informationen verschiedener Kunden sicher voneinander getrennt sind. Das umfasst Massnahmen zur Isolation von Daten auf Datenbankebene, eine grundsaetzliche physische und/oder logische mandantenfaehige Architektur, Authentifizierung und Autorisierung, Verschluesselung und Mitarbeitersensibilisierung.

**Sicherheitsbewusstsein schaffen:**

Projektmitarbeiter muessen in Bezug auf bewaehrte Verfahren zur Informationssicherheit geschult und fuer die Bedeutung der Sicherheit in ihren jeweiligen Aufgabenbereichen sensibilisiert werden. Hierzu gehoert auch die Registrierung und Meldung von Anomalien und Informationssicherheitsereignissen im Projektgeschehen.

**Sicherheitskontrollen implementieren:**

Es muessen geeignete Sicherheitskontrollen und -massnahmen gemaess den identifizierten Risiken und Sicherheitsanforderungen implementiert werden. Dies kann die Implementierung von Zugriffskontrollen, Verschluesselung, Firewalls, Intrusion Detection Systems (IDS) und anderen Sicherheitsmassnahmen umfassen.

**Regelmaessige Sicherheitspruefungen:**

Waehrend relevanten Projekten muessen regelmaessige Sicherheitspruefungen und -tests durchgefuehrt werden, um sicherzustellen, dass die implementierten Sicherheitsmassnahmen wirksam sind und den Anforderungen entsprechen.

**Sicherheitsdokumentation:**

Alle Sicherheitsaspekte des Projekts, einschliesslich der identifizierten Risiken, implementierten Sicherheitsmassnahmen und durchgefuehrten Sicherheitspruefungen sollen dokumentiert werden. Dies ermoeglicht eine lueckenlose Nachverfolgbarkeit und Transparenz bezueglich der Informationssicherheit im Projekt.

### 3.2 Aenderungsmanagement

**ISO 27001 Referenz:** A.8.32

#### 3.2.1 Richtlinie

Ein Aenderungsmanagement muss an Informationsverarbeitungsanlagen durchgefuehrt werden, um die Informationssicherheit und Integritaet waehrend der Durchfuehrung von Aenderungen und Modifikationen zu wahren.

#### 3.2.2 Verfahren

> **[Template-Hinweis]:** Bitte aendern Sie diesen Abschnitt, wenn Sie ein anderes Verfahren in Ihrer Organisation praktizieren. Beachten Sie, dass ein Auditor nach dokumentierten Nachweisen fuer den beschriebenen Prozess verlangen wird. Seien Sie daher fuer ein Audit entsprechend vorbereitet und in der Lage, dokumentierte Nachweise fuer einen exemplarischen Aenderungsprozess in einem Audit vorzuzeigen.

**Rollen und Zustaendigkeiten:**

> **[Template-Hinweis]:** Aendern Sie diese, wenn Sie andere Rollen oder Zustaendigkeiten haben.

| # | Rolle | Verantwortung |
|---|---|---|
| 1 | Antragsteller einer Aenderung | Jede Person oder jedes Team, die/der eine Aenderung an Einrichtungen oder Systemen zur Informationsverarbeitung vorschlaegt |
| 2 | Eigentuemer der Aenderung | Verantwortlich fuer die Beaufsichtigung des Aenderungsprozesses, die Einholung von Genehmigungen und die Sicherstellung der Einhaltung der Vorschriften |
| 3 | Aenderungspruefungsausschuss (Change Advisory Board = CAB) | Eine benannte Gruppe, die fuer die Ueberpruefung und Genehmigung von Aenderungsvorschlaegen zustaendig ist. Dies kann z.B. auch das Informationssicherheits-(Security-)Team in Zusammenarbeit mit der Gruppe der betroffenen Asset- & Risikoeigentuemern sein |
| 4 | Umsetzungsteam | Verantwortlich fuer die kontrollierte Durchfuehrung der genehmigten Aenderungen |
| 5 | Koordinator der Aenderung | Erleichtert die Kommunikation und Koordination zwischen den Beteiligten waehrend des gesamten Veraenderungsprozesses |

**Einreichung von Aenderungsantraegen:**

- Der Antragsteller reicht ein formelles Aenderungsantragsformular ein, in dem er die vorgeschlagene Aenderung, die Gruende und die moeglichen Auswirkungen darlegt.
- Das Aenderungs-Anfrageformular wird vom Eigentuemer der Aenderung auf Vollstaendigkeit und Richtigkeit geprueft.

**Ueberpruefung und Genehmigung von Aenderungen:**

- Der Aenderungseigentuemer legt den Aenderungsantrag dem Aenderungspruefungsausschuss zur Bewertung vor.
- Der Aenderungspruefungsausschuss bewertet die vorgeschlagene Aenderung und beruecksichtigt dabei Faktoren wie potenzielle Risiken, Abhaengigkeiten und die Uebereinstimmung mit den Organisationszielen.
- Falls erforderlich, kann der Aenderungspruefungsausschuss zusaetzliche Informationen oder Klarstellungen vom Initiator der Aenderung verlangen.
- Auf der Grundlage der Ueberpruefung genehmigt der Aenderungspruefungsausschuss den Aenderungsantrag entweder, lehnt ihn ab oder verschiebt ihn.
- Genehmigte Aenderungen werden mit einer Aenderungs-ID versehen und durchlaufen die naechste Stufe des Aenderungsmanagementprozesses.

**Planung und Bewertung von Aenderungen:**

- Der Eigentuemer der Aenderung entwickelt einen detaillierten Plan fuer die Implementierung der genehmigten Aenderung, einschliesslich Zeitplan, Ressourcenbedarf und Testverfahren.
- Potenzielle Auswirkungen der Aenderung werden unter Beruecksichtigung von Abhaengigkeiten, Systemzusammenhaengen und Beduerfnissen der Beteiligten bewertet.

**Pruefung und Validierung:**

- Aenderungen werden in einer kontrollierten Umgebung gruendlich getestet, um die Funktionalitaet, Leistung und Sicherheit zu ueberpruefen.
- Die Auditergebnisse werden dokumentiert und ueberprueft, um die Einhaltung der Abnahmekriterien sicherzustellen.

**Durchfuehrung:**

- Das Umsetzungsteam fuehrt die genehmigten Aenderungen gemaess dem festgelegten Plan und Zeitplan durch.
- Die Umsetzungsaktivitaeten werden genau ueberwacht, um etwaige Probleme oder Abweichungen vom Plan zu erkennen und zu beheben.

**Kommunikation und Einbeziehung von Interessengruppen:**

- Waehrend des gesamten Veraenderungsprozesses werden die Beteiligten ueber Fortschritte, moegliche Auswirkungen und notwendige Massnahmen informiert.
- Es werden klare Kommunikationskanaele eingerichtet, um die Zusammenarbeit zu erleichtern und Bedenken auszuraeumen.

**Dokumentation und Aufzeichnungen:**

- Umfassende Aufzeichnungen ueber alle aenderungsbezogenen Aktivitaeten, einschliesslich Genehmigungen, Testergebnissen und Implementierungsdetails, werden in einem zentralen Repository aufbewahrt.
- Die Dokumentation wird bei Bedarf aktualisiert, um Aenderungen an den Informationsverarbeitungseinrichtungen und -systemen zu beruecksichtigen.

---

## 4. Sichere Entwicklung & Programmierung

### 4.1 Der Lebenszyklus einer sicheren Entwicklung

**ISO 27001 Referenz:** A.8.25

> **[Template-Hinweis]:** Bitte aendern Sie diesen Abschnitt, wenn Sie ein anderes Verfahren in Ihrer Organisation praktizieren. Beachten Sie, dass ein Auditor nach dokumentierten Nachweisen fuer den beschriebenen Prozess verlangen wird. Seien Sie daher fuer ein Audit entsprechend vorbereitet und in der Lage, dokumentierte Nachweise fuer einen exemplarischen durchgefuehrten Prozess in einem Audit vorzuzeigen.

#### 4.1.1 Richtlinie

Der sichere Entwicklungszyklus (Software Development Lifecycle = SDLC) von Software und Systemen muss so gestaltet werden, dass die Informationssicherheit in den Lebenszyklus der Entwicklung integriert wird.

#### 4.1.2 Verfahren

**Rollen & Zustaendigkeiten:**

> **[Template-Hinweis]:** Aendern Sie diese, wenn Sie andere Rollen oder Zustaendigkeiten haben.

| # | Rolle | Verantwortung |
|---|---|---|
| 1 | Abteilung fuer IT-Sicherheit | Verantwortlich fuer die Beaufsichtigung der Umsetzung sicherer Entwicklungspraktiken. Durchfuehrung regelmaessiger IT-Sicherheitsaudits und Bewertungen, um die Einhaltung der Richtlinie zu gewaehrleisten. Beratung und Unterstuetzung der Entwicklungsteams bei bewaehrten Sicherheitsverfahren. |
| 2 | Entwicklungsteams | Verantwortlich fuer die Einhaltung der in diesem Verfahren dargelegten sicheren Entwicklungspraktiken. Zusammenarbeit mit der IT-Sicherheitsabteilung, um etwaige Sicherheitsbedenken waehrend des Entwicklungslebenszyklus zu beseitigen. |

**Verfahren:**

> **[Template-Hinweis]:** Dies ist ein Standardverfahren fuer einen SDLC. Passen Sie ihn ggf. an ihre Organisation an.

| # | Massnahme | Beschreibung |
|---|---|---|
| a | Trennung der Umgebungen | Betrieb von getrennten Entwicklungs-, Test- und Produktionsumgebungen, um unbefugten Zugriff zu verhindern und die Integritaet der Produktionssysteme zu gewaehrleisten. Implementierung von Zugangskontrollen und Aufgabentrennung, um den Zugang zu Produktionsumgebungen zu beschraenken. |
| b | Integration der Sicherheit in den SDLC | Integration der Sicherheit in jede Phase des Softwareentwicklungszyklus (SDLC), einschliesslich Anforderungserfassung, Entwurf, Kodierung, Tests, Bereitstellung und Wartung. Einbeziehung von Richtlinien zur sicheren Kodierung und bewaehrten Verfahren fuer jede bei der Entwicklung verwendete Programmiersprache. |
| c | Sicherheitsanforderungen und Kontrollpunkte | Definition von Sicherheitsanforderungen waehrend der Spezifikations- und Entwurfsphase der Software- und Systementwicklung. Einrichtung von Sicherheitskontrollpunkten (z.B. in Form von Milestones) waehrend der Projekte, um die Einhaltung der Sicherheitsstandards und -richtlinien zu ueberpruefen und zu bestaetigen. |
| d | System- und Sicherheitstests | Durchfuehrung umfassender System- und Sicherheitstests, einschliesslich Regressionstests, Code-Scans und Penetrationstests, um Schwachstellen zu erkennen und zu beseitigen. Dokumentation und Priorisierung der festgestellten Sicherheitsprobleme zur Behebung. |
| e | Sichere Quellcode- und Konfigurationsrepositories | Nutzung von sicheren Repositories fuer die Speicherung von Quellcode und Konfigurationsdateien und implementierung von Zugriffskontrollen, Verschluesselung und Versionskontrolle. Regelmaessige Ueberpruefung von Zugriffsberechtigungen und Repository-Aktivitaeten, um unbefugte Zugriffe oder Aenderungen zu erkennen. |
| f | Sicherheit der Versionierung | Implementierung von Sicherheitsmassnahmen in Versionierungssystemen, um Aenderungen zu verfolgen, Zugriffsregelungen durchzusetzen und die Integritaet von Code-Repositories zu gewaehrleisten. Durchsetzung von Code-Review-Prozessen zur Validierung von Aenderungen vor dem Zusammenfuehren in den Hauptcode. |
| g | Kenntnisse und Schulungen zur Anwendungssicherheit | Schulung von Entwicklern zu den Grundsaetzen der Anwendungssicherheit, zu sicheren Codierungsverfahren und zu neuen Bedrohungen. Foerderung der kontinuierlichen Weiterbildung und des Ausbaus von Faehigkeiten, um ueber Sicherheitstrends und bewaehrte Verfahren auf dem Laufenden zu bleiben. |
| h | Entwicklerfaehigkeiten fuer das Schwachstellenmanagement | Ausstattung von Entwicklern mit Tools und Ressourcen fuer das Schwachstellenmanagement, einschliesslich Codeanalysetools, Sicherheitsbibliotheken und Verfahren zur Reaktion auf Vorfaelle. Foerderung einer Kultur des proaktiven Schwachstellenmanagements, die Entwickler dazu ermutigt, Sicherheitsprobleme umgehend zu melden und zu beheben. |
| i | Lizensierungsanforderungen und Alternativen | Bewertung von Software- und Systemkomponenten im Hinblick auf Lizenzanforderungen und Pruefung kostenguenstiger Alternativen, um die Einhaltung der Vorschriften zu gewaehrleisten. Dokumentieren Sie Lizenzvereinbarungen und stellen Sie sicher, dass alle in der Entwicklung verwendeten Softwarekomponenten ordnungsgemaess lizenziert sind. Das betrifft bezahlte, sowie open-source Lizenzen. |
| j | Ausgelagerte Entwicklung | **[Template-Hinweis]:** Bitte verweisen Sie hier auf Ihr entsprechendes Kapitel in der Richtlinie zum Lieferantenmanagement. Wenn die Entwicklung ausgelagert wird, muss sichergestellt werden, dass der Drittanbieter die Anforderungen der Organisation an eine sichere Entwicklung erfuellt, und es muss bei Bedarf eine Ueberwachung stattfinden. |
| k | Dokumentation und Berichterstattung | Pflege der Dokumentation von sicheren Entwicklungsaktivitaeten, einschliesslich Sicherheitsanforderungen, Testergebnissen und Abhilfemassnahmen. Erstellung regelmaessiger Berichte ueber die Sicherheitslage, Schwachstellen und den Stand der Einhaltung der Vorschriften zur Ueberpruefung durch das Management. |

### 4.2 Sichere Systemarchitektur und technische Grundsaetze

**ISO 27001 Referenz:** A.8.27

> **[Template-Hinweis]:** Bitte aendern Sie diesen Abschnitt, wenn Sie ein anderes Verfahren in Ihrer Organisation praktizieren. Beachten Sie, dass ein Auditor nach dokumentierten Nachweisen fuer den beschriebenen Prozess verlangen wird. Seien Sie daher fuer ein Audit entsprechend vorbereitet und in der Lage, dokumentierte Nachweise fuer einen exemplarischen durchgefuehrten Prozess in einem Audit vorzuzeigen.

#### 4.2.1 Richtlinie

Eine sichere Systemarchitektur muss waehrend des Lebenszyklus der Entwicklung eines Informationssystems erstellt, dokumentiert, gepflegt und angewendet werden.

#### 4.2.2 Verfahren

**Rollen & Zustaendigkeiten:**

> **[Template-Hinweis]:** Aendern Sie diese, wenn Sie andere Rollen oder Zustaendigkeiten haben.

| # | Rolle | Verantwortung |
|---|---|---|
| 1 | Spezialist fuer Informationssicherheit | Durchfuehrung von Risikobewertungen und Bereitstellung von Fachwissen zur Festlegung von Grundsaetzen der Sicherheitstechnik. Zusammenarbeit mit den Entwicklungsteams, um die Einhaltung der Sicherheitsgrundsaetze waehrend des gesamten Entwicklungszyklus zu gewaehrleisten. |
| 2 | Entwicklungsteams | Anwendung von Grundsaetzen der IT-Sicherheit beim Entwurf, der Entwicklung und dem Einsatz von Informationssystemen. Mitteilung aller Herausforderungen oder Abweichungen von den Sicherheitsgrundsaetzen an den Spezialisten fuer Informationssicherheit. |

**Verfahren:**

> **[Template-Hinweis]:** Im Folgenden werden alle verschiedenen Systemarchitektur- und Konstruktionsprinzipien in der Organisation aufgelistet; ueberpruefen Sie, ob alles richtig ist und aendern Sie es entsprechend.

| # | Massnahme | Beschreibung |
|---|---|---|
| a | Einrichtung einer Sicherheitssystemarchitektur | Definition und Dokumentation von Prinzipien der Sicherheitstechnik auf der Grundlage von Industriestandards, organisatorischen Anforderungen und bewaehrten Verfahren. Sicherstellen, dass die Sicherheitsgrundsaetze alle Architekturebenen abdecken, einschliesslich Unternehmen, Daten, Anwendungen und Technologien. |
| b | Risikoanalyse und Bedrohungsmodellierung | Durchfuehrung von Risikobewertungen zur Ermittlung potenzieller Sicherheitsbedrohungen und Schwachstellen im Zusammenhang mit der Entwicklung von Informationssystemen. Durchfuehrung von Bedrohungsmodellierungsuebungen, um Angriffsmuster und potenzielle Sicherheitsschwaechen zu verstehen. |
| c | Integration von "Security by Design" | Umsetzung von Grundsaetzen der "Security by Design", einschliesslich "Defense in Depth", "Security by Default" und "Least Privilege", in der Architektur- und Entwurfsphase. Sicherstellen, dass die Sicherheitskontrollen auf jeder Ebene des Informationssystems integriert sind. |
| d | Anwendung der Zero-Trust-Prinzipien | Anwendung von Zero-Trust-Prinzipien wie "Vertrauen, aber ueberpruefen" und dynamische Zugangskontrolle, um den Zugang zu Informationssystemen zu authentifizieren und zu autorisieren. Implementieren Sie Verschluesselungs- und starke Authentifizierungsmechanismen, um die Sicherheit zu erhoehen. |
| e | Sicherheitsueberpruefung und Dokumentation | Durchfuehrung sicherheitsorientierter Entwurfspruefungen zur Ermittlung und Behebung von Sicherheitsschwachstellen und zur Gewaehrleistung der Einhaltung von Sicherheitsgrundsaetzen. Dokumentieren Sie die Sicherheitskontrollen, einschliesslich aller Abweichungen oder Ausnahmen, und holen Sie die formale Bestaetigung der relevanten Beteiligten ein. |
| f | Ausgelagerte Ueberwachung der Entwicklung | Sicherstellung, dass ausgelagerte Entwicklungstaetigkeiten durch vertragliche Vereinbarungen die festgelegten Grundsaetze der Sicherheitstechnik einhalten. Ueberpruefung und Ueberwachung der Sicherheitspraktiken der Lieferanten, um die Uebereinstimmung mit den Unternehmensstandards zu gewaehrleisten. |
| g | Regelmaessige Ueberpruefung und Aktualisierung | Regelmaessige Ueberpruefung der sicherheitstechnischen Grundsaetze, um Aktualisierungen auf der Grundlage neuer Bedrohungen, technologischer Fortschritte und organisatorischer Erfordernisse einzubeziehen. Aktualisierung der Sicherheitsverfahren und -leitlinien zur Beruecksichtigung von Aenderungen in der Sicherheitstechnik. |

### 4.3 Sichere Programmierung

**ISO 27001 Referenz:** A.8.28

#### 4.3.1 Richtlinie

Bei der Softwareentwicklung muessen die Grundsaetze der sicheren Kodierung eingehalten werden, um die Zahl der potenziellen Sicherheitsluecken in der Software zu verringern.

#### 4.3.2 Verfahren

**Rollen & Zustaendigkeiten:**

> **[Template-Hinweis]:** Aendern Sie diese, wenn Sie andere Rollen oder Zustaendigkeiten haben.

| # | Rolle | Verantwortung |
|---|---|---|
| 1 | Entwicklungsteam | Verantwortlich fuer die Umsetzung sicherer Programmierungspraktiken bei der Entwicklung von Software. Zusammenarbeit mit dem Informationssicherheits-(Security-)Team, um die Einhaltung der Grundsaetze der sicheren Programmierung zu gewaehrleisten. |
| 2 | Spezialist fuer IT-Sicherheit | Beratung und Unterstuetzung von Entwicklungsteams in Bezug auf sichere Programmierverfahren. Durchfuehrung regelmaessiger Ueberpruefungen, um die Einhaltung der Standards fuer sichere Programmierung zu gewaehrleisten. |

**Verfahren:**

| # | Massnahme | Beschreibung |
|---|---|---|
| a | Sichere Programmierungsprozesse einrichten | Definition von organisationsweiten Prozessen fuer die Steuerung der sicheren Programmierung, einschliesslich der Festlegung eines Mindestmasses an Sicherheit. Vermittlung von Standards fuer sichere Programmierung und Erwartungen an alle Entwicklungsteams. |
| b | Schulung und Sensibilisierung | Durchfuehrung von Schulungen fuer Entwickler zu den Grundsaetzen der sicheren Programmierung, bewaehrten Verfahren und Techniken. Sicherstellen, dass die Entwickler mit den organisationsspezifischen Standards fuer sichere Programmierung vertraut sind. |
| c | Planung und Voraussetzungen | Bevor mit der Programmierung begonnen wird, sollen Sie die unternehmensspezifischen Grundsaetze der sicheren Programmierung und die anerkannten Standards pruefen und verstehen. Konfigurieren der Entwicklungswerkzeuge wie IDEs so, dass sichere Programmierungspraktiken durchgesetzt werden. Sicherstellen, dass die Entwickler fuer das Schreiben von sicherem Code qualifiziert sind und Zugang zu den erforderlichen Ressourcen und Tools haben. |
| d | Waehrend der Programmierung | Implementierung sicherer Programmierungspraktiken, die fuer die verwendeten Programmiersprachen und -techniken spezifisch sind. Sichere Programmiertechniken wie Pair Programming, Peer Review und testgetriebene Entwicklung anwenden. Sorgfaeltige Dokumentation des Codes und umgehende Behebung von festgestellten Programmierfehlern. |
| e | Pruefung und Bewertung | Durchfuehrung von Tests waehrend des gesamten Entwicklungsprozesses, einschliesslich statischer Anwendungssicherheitstests (SAST), um Sicherheitsschwachstellen zu ermitteln und zu beseitigen. Bewertung von Angriffspotenzial und Sicherstellung, dass das Prinzip der geringsten Privilegien (least privilidge) angewendet wird, bevor die Software bereitgestellt wird. |
| f | Ueberpruefung und Wartung | Sicheres "Containern" und Verteilen von Software-Updates, um sicherzustellen, dass alle gemeldeten Sicherheitsluecken umgehend behoben werden. Protokollierung von Fehlern und vermuteten Angriffen, regelmaessige Ueberpruefung der Protokolle, um notwendige Anpassungen des Codes vorzunehmen. Schutz des Quellcodes vor unbefugtem Zugriff und Manipulation durch Versionskontrolle und Zugriffskontrollmechanismen. |
| g | Verwendung von externen Tools und Bibliotheken | Effiziente Verwaltung externer Bibliotheken, Gewaehrleistung regelmaessiger Aktualisierungen und Fuehrung eines Inventars der verwendeten Bibliotheken und Versionen. Sorgfaeltige Pruefung externer Komponenten und Beruecksichtigung von Faktoren wie Lizenz, Sicherheit und Historie, bevor diese in Software integriert werden. |
| h | Modifizierung von Softwarepaketen | Bewertung des Risikos und der Auswirkungen von Aenderungen an Softwarepaketen, ggf. Einholung der erforderlichen Genehmigungen und Zustimmung der Anbieter. Sicherstellung der Kompatibilitaet mit bestehenden Systemen und Beruecksichtigung auch von langfristigen Auswirkungen auf die Wartung, bevor Aenderungen vorgenommen werden. |

---

## 5. Testen der Entwicklung

### 5.1 Sicherheitstests in Entwicklung und Abnahme

**ISO 27001 Referenz:** A.8.29

> **[Template-Hinweis]:** Bitte aendern Sie diesen Abschnitt, wenn Sie ein anderes Verfahren in Ihrer Organisation praktizieren. Beachten Sie, dass ein Auditor nach dokumentierten Nachweisen fuer den beschriebenen Prozess verlangen wird. Seien Sie daher fuer ein Audit entsprechend vorbereitet und in der Lage, dokumentierte Nachweise fuer einen exemplarischen durchgefuehrten Prozess in einem Audit vorzuzeigen.

#### 5.1.1 Richtlinie

Sicherheitstests muessen waehrend des gesamten Entwicklungszyklus von Softwareanwendungen durchgefuehrt werden, um die Einhaltung der IT-Sicherheitsanforderungen zu ueberpruefen und potenziell ausnutzbare Anwendungsschwachstellen zu reduzieren.

#### 5.1.2 Verfahren

> **[Template-Hinweis]:** Dies ist ein Standardverfahren fuer die Sicherheitspruefung von Systemen. Bitte vergewissern Sie sich, dass dieses Ihrem tatsaechlichen Prozess entspricht und passen sie es ggf. an Ihre Organisation an.

**1. Integration von Sicherheitstests:**

Sicherstellen, dass Sicherheitstests in den gesamten Testprozess fuer alle Softwaresysteme, Upgrades und neue Versionen waehrend des Entwicklungslebenszyklus und des Projektmanagements integriert werden.

**2. Umfang der Sicherheitstests:**

| # | Bereich |
|---|---|
| a | Pruefung von Sicherheitsfunktionen wie Benutzerauthentifizierung, Zugangsbeschraenkung und Kryptographie |
| b | Pruefung sicherer Programmierverfahren |
| c | Pruefung der Konfigurationen von Betriebssystemen, Firewalls und anderen Sicherheitskomponenten |

**3. Testen:**

| # | Aspekt |
|---|---|
| a | Faktoren, die die Bedeutung des Systems, die Art der Aenderungen und die moeglichen Auswirkungen betreffen |
| b | Jeder Test soll Folgendes umfassen: 1) Zeitplan fuer Aktivitaeten und Tests; 2) Erwartete Inputs und Outputs unter verschiedenen Bedingungen; 3) Kriterien fuer die Bewertung der Testergebnisse; 4) Massnahmen zur Abhilfe |

**3.a Waehrend der Entwicklung:**

> **[Template-Hinweis]:** Bitte beschreiben Sie ihre anzuwendenden Verfahren.

| # | Testmethode | Beschreibung |
|---|---|---|
| 1 | Statische Pruefung der Anwendungssicherheit (SAST) | Hierbei wird der Quellcode einer Anwendung auf Sicherheitsschwachstellen untersucht. Sie werden in der Regel zu Beginn des Entwicklungsprozesses durchgefuehrt. |
| 2 | Dynamische Pruefung der Anwendungssicherheit (DAST) | Hierbei handelt es sich um eine Art von Black-Box-Sicherheitstests, bei denen die Anwendung von aussen nach innen auf Schwachstellen geprueft wird, die ein Angreifer ausnutzen koennte. |
| 3 | Interaktives Pruefen der Anwendungssicherheit (IAST) | Hierbei werden Elemente von SAST und DAST kombiniert, um Schwachstellen in einer Anwendung zu ermitteln. |
| 4 | Software Composition Analyse (SCA) | Hierbei werden Open-Source-Komponenten in Ihrer Codebasis identifiziert und auf bekannte Schwachstellen ueberprueft. |

**3.b Akzeptanzpruefung:**

> **[Template-Hinweis]:** Umzusetzen sobald das System erstellt wurde, aber bevor es fuer die Benutzer in den Produktionsbetrieb ueberfuehrt wird (dies soll auch in bestimmten Abstaenden nach der Ueberfuehrung in den Produktionsbetrieb geschehen).

| # | Testmethode | Beschreibung |
|---|---|---|
| 1 | Penetrationstests | Hierbei wird ein realer Angriff auf ein System simuliert, um Schwachstellen zu ermitteln, die von Angreifern ausgenutzt werden koennten. Er wird normalerweise gegen Ende des Entwicklungszyklus durchgefuehrt. |
| 2 | Sicherheitspruefung | Hierbei handelt es sich um eine gruendliche Pruefung des Systems, um sicherzustellen, dass es den Sicherheitsstandards und -vorschriften entspricht. |
| 3 | Risikobewertung | Dabei werden die Risiken fuer das System identifiziert, bewertet und nach Prioritaeten geordnet. |

**3.c Sicherheitsakzeptanz:**

- Integration der Sicherheitsakzeptanz in die Phasen des Projektmanagements.
- Einbeziehung in das Genehmigungsverfahren fuer die Projektphase.

> **[Template-Hinweis]:** Nachfolgend finden Sie eine Liste von Testmethoden. Bitte ueberpruefen Sie, ob diese Methoden in Ihrer Organisation fuer das Testen der Systementwicklung verwendet werden und passen Sie diese ggf. entsprechend an. Es gilt als "Best Practice" fuer Organisationen, diese Schritte als Minimum zu befolgen.

**3.d Automatisierte Werkzeuge:**

- Einsatz automatisierter Tools wie Code-Analyse-Tools und Schwachstellen-Scanner zur Unterstuetzung der Sicherheitstests.
- Sicherstellung, dass festgestellte sicherheitsrelevante Maengel behoben und ueberprueft werden.

**3.e Durchfuehrung von internen Entwicklungstests:**

- Die ersten Sicherheitstests sollen vom Entwicklungsteam durchgefuehrt werden.
- Durchfuehrung von Code-Review-Aktivitaeten, Schwachstellen-Scans und Penetrationstests als Teil der internen Tests.
- Durchfuehrung unabhaengiger Abnahmetests, um zu bestaetigen, dass das System wie erwartet funktioniert und die Sicherheitsanforderungen erfuellt.

**3.f Verwaltung der ausgelagerten Entwicklung und Beschaffung:**

- Befolgung der Prozesse fuer die ausgelagerte Entwicklung und Beschaffung von Komponenten.
- Sicherstellung, dass die Vertraege mit den Zulieferern die ermittelten Sicherheitsanforderungen beruecksichtigen.
- Bewertung von Produkten/Dienstleistungen anhand von Sicherheitskriterien vor dem Erwerb.

**3.g Anpassen der Testumgebung:**

- Fuehren Sie die Tests in einer Testumgebung durch, die der Produktionsumgebung sehr aehnlich ist, um Zuverlaessigkeit zu gewaehrleisten und die Einfuehrung von Schwachstellen zu verhindern.
- Einrichtung mehrerer Testumgebungen fuer verschiedene Arten von Tests, einschliesslich Funktions- und Leistungstests.

**3.h Sicherstellung von Tests und Ueberwachung:**

- Implementierung effektiver Tests und Ueberwachung von Testumgebungen, Tools und Technologien.
- Ueberwachung der Ueberwachungssysteme, die in Entwicklungs-, Test- und Produktionsumgebungen eingesetzt werden, um deren Wirksamkeit sicherzustellen.

**3.i Dokumentation und Berichterstattung:**

- Dokumentation aller Sicherheitstests, einschliesslich Testplaenen, Ergebnissen und Abhilfemassnahmen.
- Meldung aller festgestellten Sicherheitsschwachstellen und des Stands ihrer Behebung an die zustaendigen Stellen.

### 5.2 Trennung von Entwicklungs-, Test- und Produktionsumgebung

**ISO 27001 Referenz:** A.8.31

#### 5.2.1 Richtlinie

Die Trennung und Sicherheit von Entwicklungs-, Test- und Produktionsumgebungen muss umgesetzt werden, um die Produktionsumgebung und -daten vor Kompromissen und Datenverschmutzung durch Entwicklungs- und Testaktivitaeten zu schuetzen.

#### 5.2.2 Verfahren

> **[Template-Hinweis]:** Bei diesem Verfahren geht es darum, wie Sie Ihre verschiedenen Entwicklungsumgebungen aufteilen. Dieses Verfahren ist ein Standardverfahren. Bitte vergewissern Sie sich, dass dieses Ihrem tatsaechlichen Prozess entspricht und passen sie es ggf. an Ihre Organisation an.

**Umgebungstrennung:**

- Trennung von Entwicklungs-, Test- und Produktionsumgebungen je nach den Beduerfnissen des Unternehmens.
- Einrichtung von separaten physischen oder virtuellen Umgebungen fuer Entwicklungs-, Test- und Produktionssysteme und Sicherstellung, dass diese voneinander isoliert sind.

**Regeln fuer die Bereitstellung:**

- Definition und Dokumentation von Regeln und Genehmigungsverfahren fuer die Bereitstellung von Software aus der Entwicklungsumgebung in der Produktionsumgebung.
- Implementierung eines Aenderungsmanagementprozesses zur Ueberpruefung und Genehmigung von Softwareeinfuehrungen in der Produktionsumgebung.

**Pruefung und Inszenierung:**

- Durchfuehrung von gruendlichen Tests von Softwareaenderungen in einer Test- oder Staging-Umgebung, bevor diese in der Produktionsumgebung eingesetzt werden.
- Sicherstellung, dass alle Aenderungen strengen Tests unterzogen werden, um moegliche Probleme oder Schwachstellen zu ermitteln und zu beheben.

**Zugangskontrolle:**

- Beschraenkung des Zugangs zu Entwicklungs- und Testumgebungen auf befugtes Personal.
- Sicherstellung, dass Entwicklungstools und Dienstprogramme nicht von Produktionssystemen aus zugaenglich sind, um unbefugten Zugriff oder Aenderungen zu verhindern.
- Implementierung von Zugangskontrollen und Authentifizierungsmechanismen, um sicherzustellen, dass nur autorisierte Personen Aenderungen an den Produktionssystemen vornehmen koennen.

**Schutz der Umgebungen:**

- Regelmaessige Patches und Updates fuer Entwicklungs-, Test- und Produktionssysteme, um Sicherheitsluecken zu schliessen und sicherzustellen, dass sie auf dem neuesten Stand sind.
- Implementierung sicherer Konfigurationen fuer alle Systeme und Softwarekomponenten, um das Risiko eines Missbrauchs zu minimieren.
- Ueberwachung von Aenderungen an der Umgebung und dem darin gespeicherten Code, um unbefugte Aenderungen oder Zugriffe zu erkennen.
- Durchfuehrung regelmaessiger Backups von Entwicklungs-, Test- und Produktionsumgebungen, um die Integritaet und Verfuegbarkeit der Daten zu gewaehrleisten.

**Trennung der Zustaendigkeiten:**

- Einfuehrung von Kontrollen, die sicherstellen, dass die fuer die Entwicklungstaetigkeiten zustaendigen Personen nicht in der Lage sind, ohne entsprechende Genehmigung Aenderungen an den Produktionssystemen vorzunehmen.
- Ueberwachung und Ueberpruefung von Zugriffsprotokollen und Pruefpfaden, um unbefugte Aenderungen oder unbefugten Zugriff auf Produktionssysteme zu erkennen und zu verhindern.

### 5.3 Testinformationen

**ISO 27001 Referenz:** A.8.33

#### 5.3.1 Richtlinie

Sensible betriebliche Informationen (einschliesslich personenbezogener Daten) muessen geschuetzt werden und duerfen daher nicht zu Testzwecken verwendet werden.

#### 5.3.2 Verfahren

> **[Template-Hinweis]:** Testinformationen sind alle Daten, die zum Testen der von Ihnen entwickelten Systeme verwendet werden; das nachstehende Verfahren gibt Ihnen ein Verfahren fuer die Verwaltung solcher Daten. Bitte vergewissern Sie sich, dass dieses Ihrem tatsaechlichen Prozess entspricht und passen sie es ggf. an Ihre Organisation an.

**Auswahl der Testinformationen:**

- Die Auswahl der Testinformationen erfolgt auf der Grundlage ihrer Relevanz fuer die Testziele und ihrer Faehigkeit, betriebliche Szenarien genau darzustellen.
- Bevor betriebliche Informationen in Testumgebungen kopiert werden, muss eine gruendliche Bewertung durchgefuehrt werden, um die Notwendigkeit und Eignung der Daten fuer Testzwecke festzustellen.
- Sensible Informationen, einschliesslich personenbezogener Daten (PII), duerfen nicht in Testumgebungen verwendet werden. Wenn sie fuer den Test unerlasslich sind, muessen sie anonymisiert werden, um unbefugten Zugang oder Offenlegung zu verhindern.

**Schutz von Testumgebungen:**

- Es muessen Zugangskontrollen implementiert werden, um den Zugang zu Testumgebungen zu beschraenken und sicherzustellen, dass nur befugtes Personal die Erlaubnis hat, Testinformationen einzusehen oder zu manipulieren.
- Jedes Kopieren betrieblicher Informationen in eine Testumgebung bedarf der ausdruecklichen Genehmigung durch die Asset-Eigentuemer. Es sind Aufzeichnungen ueber solche Aktivitaeten zu Pruefzwecken zu fuehren.
- Sensible Informationen, die fuer Tests verwendet werden, muessen in geeigneter Weise maskiert oder anonymisiert werden, um eine unbefugte Offenlegung zu verhindern und gleichzeitig die Integritaet des Testprozesses zu wahren.

**Einhaltung und Ueberwachung:**

- Es werden regelmaessige Audits und Bewertungen durchgefuehrt, um die Einhaltung der Verfahren zur Verwaltung von Testinformationen zu ueberpruefen und etwaige Verstoesse zu ermitteln.
- Es sollen Ueberwachungsinstrumente und -techniken eingesetzt werden, um den Zugang zu Testumgebungen zu verfolgen und unbefugte Aktivitaeten oder Sicherheitsverstoesse aufzudecken.
- Alle Abweichungen von den festgelegten Verfahren oder bewusste Verstoesse muessen unverzueglich untersucht, dokumentiert und erforderlichenfalls behoben werden.

### 5.4 Schutz der Informationssysteme waehrend eines Audits

**ISO 27001 Referenz:** A.8.34

#### 5.4.1 Richtlinie

Audit-Tests und andere Ueberpruefungstaetigkeiten, die eine Bewertung der operativen Systeme beinhalten, sollen konzeptionell geplant und zwischen dem Auditor und der zustaendigen Geschaeftsleitung abgestimmt werden.

#### 5.4.2 Verfahren

> **[Template-Hinweis]:** In diesem Verfahren geht es um die Auditierung Ihrer Systeme; die nachstehenden Schritte erlaeutern, wie Sie diese Audits planen und durchfuehren sollen; diese Schritte sind eine gute Praxis und sollen als Minimum fuer diese Massnahme verstanden werden.

**Planung und Vereinbarung:**

- Vor der Einleitung von Audit-Tests oder Ueberpruefungsaktivitaeten muss der der Auditor mit der zustaendigen Geschaeftsleitung den Umfang, die Ziele und die moeglichen Auswirkungen der vorgeschlagenen Aktivitaeten abstimmen.
- Zwischen dem Auditor und der Geschaeftsleitung ist eine foermliche Vereinbarung ueber den Zeitplan, die Ressourcen und die Zugangsberechtigungen fuer die Durchfuehrung der Audit-Tests zu treffen.

**Umfang und Grenzen:**

- Der Auditor muss den Umfang der technischen Audits festlegen und dabei sicherstellen, dass sie sich auf Bereiche konzentrieren, die fuer die Sicherheitslage der Organisation und die Einhaltung der Anforderungen relevant sind.
- Beschraenkungen und Einschraenkungen im Zusammenhang mit den Audit-Tests, wie z.B. Zugriffsbeschraenkungen und Systemabhaengigkeiten, sind zu ermitteln und zu dokumentieren, um unbeabsichtigte Folgen zu vermeiden.

**Zugangskontrolle und Sicherheitsanforderungen:**

- Antraege auf Zugang fuer Pruefungszwecke sind unter Angabe des Zwecks und der Dauer des gewuenschten Zugangs der zustaendigen Leitung zur Genehmigung vorzulegen.
- Vor der Gewaehrung des Zugangs prueft das IT-Sicherheitsteam die Sicherheitslage der fuer den Zugang zu den operativen Systemen verwendeten Geraete und stellt sicher, dass die festgelegten Sicherheitsanforderungen eingehalten werden.

**Testdurchfuehrung und -ueberwachung:**

- Die Audit-Tests muessen gemaess dem vereinbarten Plan durchgefuehrt werden, wobei sorgfaeltig darauf geachtet werden muss, dass die betrieblichen Systeme und Geschaeftsprozesse so wenig wie moeglich gestoert werden.
- Waehrend der Durchfuehrung von Audit-Tests muessen die Zugriffsaktivitaeten und Systeminteraktionen kontinuierlich ueberwacht und protokolliert werden, um die Transparenz und Rechenschaftspflicht aufrechtzuerhalten.

**Zeitplan und Koordinierung:**

- Audit-Tests, die sich auf die Systemverfuegbarkeit oder -leistung auswirken koennen, sind so zu planen und mit den Beteiligten abzustimmen, dass der normale Betrieb moeglichst wenig gestoert wird.
- Die Koordinierung umfasst auch die Unterrichtung der Systemadministratoren und anderer zustaendiger Mitarbeiter ueber den Zeitplan und die Art der Audit-Aktivitaeten, um die Zusammenarbeit und Unterstuetzung sicherzustellen.

---

## 6. Norm-Referenzen

### 6.1 Normreferenzen zu ISO 27001:2022

| Kapitel in diesem Dokument | Normkapitel (ISO 27001:2022) |
|---|---|
| 2.1 Betriebsverfahren fuer Informationsverarbeitungsanlagen | A.5.37 |
| 3.1 Informationssicherheit in Projekten | A.5.8 |
| 3.2 Aenderungsmanagement | A.8.32 |
| 4.1 Der Lebenszyklus einer sicheren Entwicklung | A.8.25 |
| 4.2 Sichere Systemarchitektur und technische Grundsaetze | A.8.27 |
| 4.3 Sichere Programmierung | A.8.28 |
| 5.1 Sicherheitstests in Entwicklung und Abnahme | A.8.29 |
| 5.2 Trennung von Entwicklungs-, Test- und Produktumgebung | A.8.31 |
| 5.3 Testinformationen | A.8.33 |
| 5.4 Schutz der Informationssysteme waehrend eines Audits | A.8.34 |

### 6.2 Referenzen zu TISAX-ISA 6.0

| Kapitel in diesem Dokument | Normkapitel (ISA-TISAX 6.0) |
|---|---|
| 2.1 Betriebsverfahren fuer Informationsverarbeitungsanlagen | 1.5.1 |
| 3.1 Informationssicherheit in Projekten | 1.2.3; 1.4.1; 5.3.1 |
| 3.2 Aenderungsmanagement | 5.2.1; 5.3.1 |
| 4.1 Der Lebenszyklus einer sicheren Entwicklung | 5.3.1 |
| 4.2 Sichere Systemarchitektur und technische Grundsaetze | 5.3.1 |
| 4.3 Sichere Programmierung | 5.3.1 |
| 5.1 Sicherheitstests in Entwicklung und Abnahme | 5.3.1 |
| 5.2 Trennung von Entwicklungs-, Test- und Produktumgebung | 5.2.2 |
| 5.3 Testinformationen | 5.3.1 |
| 5.4 Schutz der Informationssysteme waehrend eines Audits | 5.2.6 |

---

## Abkuerzungen

| Kuerzel | Bedeutung |
|---|---|
| CAB | Change Advisory Board (Aenderungspruefungsausschuss) |
| DAST | Dynamic Application Security Testing |
| IAST | Interactive Application Security Testing |
| IDE | Integrated Development Environment |
| IDS | Intrusion Detection System |
| ISB | Informationssicherheitsbeauftragter |
| ISA | Information Security Assessment |
| PII | Personally Identifiable Information (personenbezogene Daten) |
| SAST | Static Application Security Testing |
| SCA | Software Composition Analysis |
| SDLC | Software Development Lifecycle (Softwareentwicklungslebenszyklus) |
| TISAX | Trusted Information Security Assessment Exchange |

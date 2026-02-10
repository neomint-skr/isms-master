# Handbuch zur Sicherheit von Anbietern und Lieferketten Extrakt

> Quelle: DataGuard Policy Template "DataGuard_2024_Lieferanten-Lieferkette.pdf", Version 0.91 (26.09.2024).
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch.
> Template-Charakter: Enthaelt Platzhalter zur organisationsspezifischen Anpassung.
> Citation Key: DG24-LK

## 1 Einleitung

Dieses Handbuch dient als konsolidierter Rahmen fuer die effektive Verwaltung und Sicherung von Lieferantenbeziehungen und Lieferkettenaktivitaeten. Es beschreibt, wie eine Organisation verschiedene Sicherheitsherausforderungen im Zusammenhang mit der Sicherheit von Lieferanten und der Lieferkette angeht.

### 1.1 Zweck und Umfang

**Hauptziel:** Strukturierter Ansatz fuer die Sicherheit von Lieferanten und Lieferketten, um sensible Informationen, Vermoegenswerte und Reputation der Organisation zu schuetzen. Durch Einhaltung dieser Richtlinie soll Widerstandsfaehigkeit gegen Sicherheitsverletzungen erhoeht und das Risiko von Unterbrechungen oder Kompromittierungen minimiert werden.

**Geltungsbereich:** Alle Mitarbeiter, Auftragnehmer, Drittanbieter und Interessengruppen, die in Lieferantenmanagement oder Lieferkette eingebunden sind. Umfasst alle Aspekte der Lieferantenbeziehungen, Lieferkettenprozesse und damit verbundene Sicherheitsmassnahmen, unabhaengig von Art oder Ort der Lieferkettenaktivitaeten.

### 1.2 Anwendbarkeit

Gilt fuer alle Mitarbeiter und Beteiligten. Die fuer Beschaffung bzw. Beauftragung verantwortlichen Personen haben in Zusammenarbeit mit zustaendigen Abteilungen die Aufgabe, Umsetzung, Aufrechterhaltung und kontinuierliche Verbesserung der beschriebenen Verfahren zu ueberwachen.

## 2 Anforderungen an gekaufte Software-Anwendungen und Cloud-Services

### 2.1 Informationssicherheit bei der Nutzung von Cloud-Diensten

#### 2.1.1 Richtlinie

Die fuer Beschaffung und Einfuehrung von Cloud-Diensten verantwortlichen Bereiche muessen fuer sichere und vorschriftsmaessige Nutzung sorgen, um sensible Informationen zu schuetzen und betriebliche Ausfallsicherheit zu gewaehrleisten.

**Grundregeln:**

| # | Grundregel | Anforderung |
|---|---|---|
| 1 | Datenverschluesselung | Alle Daten zu/von Cloud-Diensten muessen verschluesselt werden |
| 2 | Zugangskontrolle | Zugang auf befugtes Personal beschraenken, Multi-Faktor-Authentifizierung einfuehren |
| 3 | Regelmaessige Audits | Cloud-Anbieter routinemaessig pruefen (Compliance, Sicherheitsstandards) |
| 4 | Datenaufenthalt | Einhaltung der Vorschriften zu Datenaufenthalt und Datenschutz pruefen |
| 5 | Reaktion auf Vorfaelle | Klare Verfahren fuer Sicherheitsvorfaelle im Zusammenhang mit Cloud-Diensten |

#### 2.1.2 Verfahren

> NOTE: Template-Hinweis im Original: Verfahren an organisatorische Bedingungen anpassen.

Prozesse fuer Erwerb, Nutzung, Verwaltung und Ausstieg aus Cloud-Diensten in Uebereinstimmung mit Informationssicherheitsanforderungen:

| # | Verfahrensschritt | Beschreibung |
|---|---|---|
| 1 | Ueberpruefung von Cloud-Service-Vereinbarungen | Organisation prueft Vereinbarungen mit Cloud-Service-Anbieter(n) auf Beruecksichtigung der Anforderungen bzgl. Vertraulichkeit, Integritaet, Verfuegbarkeit und Informationsverarbeitung. |
| | | > NOTE: Anforderungskatalog (z.B. Fragebogen) erstellen zur Beantwortung durch Anbieter. |
| 2 | Risikobewertungen | Organisation fuehrt Risikobewertungen durch, um Risiken zu ermitteln. Restrisiken eindeutig ermitteln und von zustaendiger Unternehmensleitung akzeptieren lassen. |
| | | > NOTE: DataGuard empfiehlt Dokumentation von Risiken in Risikomanagement-Plattform oder separatem Lieferanten-Management. |
| 3 | Schutz der Daten und Verfuegbarkeit der Dienste | Vereinbarung muss Bestimmungen zu Datenschutz und Dienstverfuegbarkeit enthalten: branchenweit anerkannte Standards fuer Architektur/Infrastruktur, Zugangskontrollen, Malware-Schutz, Verarbeitung/Speicherung sensibler Daten an zugelassenen Standorten. |
| | | > NOTE: Vereinbarungen (z.B. SLA) als dokumentierter Nachweis in Lieferantenverwaltung sammeln. |
| 4 | Unterstuetzung im Falle eines Zwischenfalls | Vereinbarung muss Information und speziellen Support bei IS-Vorfaellen in Cloud-Umgebung vorsehen. |
| 5 | Unterauftragsvergabe | Vereinbarung soll sicherstellen, dass IS-Anforderungen auch bei Weitervergabe an weitere externe Anbieter erfuellt werden. |
| 6 | Digitale Beweise | Vereinbarung regelt Unterstuetzung bei Sammlung digitaler Beweise unter Beruecksichtigung von Gesetzen/Vorschriften (insb. Datenschutz). |
| 7 | Beenden des Cloud-Dienstes | Vereinbarung muss angemessene Unterstuetzung und Verfuegbarkeit fuer angemessenen Zeitraum beim Ausstieg vorsehen. |
| 8 | Sicherung der Daten | Vertrag muss Sicherung von Daten/Konfigurationsinformationen sowie sichere Verwaltung von Sicherungskopien vorsehen. |
| 9 | Rueckgabe von Informationen | Vereinbarung muss Verfuegbarstellung/Rueckgabe von Konfigurationsdateien, Quellcode, Daten (Eigentum des Unternehmens) waehrend Leistungserbringung oder bei Beendigung vorsehen. |
| 10 | Vorankuendigung | Organisation prueft, ob Anbieter verpflichtet wird, wesentliche Aenderungen der Diensterbringung vorab mitzuteilen. |
| 11 | Halten von engem Kontakt | Organisation haelt engen Kontakt zu Cloud-Diensteanbietern fuer gegenseitigen Informationsaustausch ueber IS. |
| 12 | Bewertung der Sicherheit von Daten und des Datenschutzes | Bewertung der Datensicherheit (Verschluesselung im Ruhezustand/bei Uebertragung, Schluesselspeicherung). Verarbeitung personenbezogener Daten gemaess DSGVO dokumentieren. |
| | | > NOTE: Verarbeitungsvereinbarungen abschliessen und in Lieferantenmanagement ablegen. |

### 2.2 Anforderungen an die Anwendungssicherheit

#### 2.2.1 Richtlinie

Anforderungen an IS von Anwendungen muessen waehrend Entwicklung oder Erwerb ermittelt, spezifiziert und genehmigt werden, um Informationswerte der Organisation zu schuetzen.

#### 2.2.2 Verfahren

**1. Zustaendigkeiten im Verfahren:**

**Zustaendigkeit des Fachexperten fuer IT-Sicherheit (Risiko-Eigentuemer):**
- Durchfuehrung von Risikobewertungen, Bereitstellung von Fachwissen bei Ermittlung/Spezifizierung von Anwendungssicherheitsanforderungen
- Zusammenarbeit mit Entwicklungsteams/Interessengruppen fuer Uebereinstimmung mit Sicherheitsrichtlinien/-standards

**Zustaendigkeit des Entwicklungsteams:**
- Umsetzung der spezifizierten Sicherheitsanforderungen bei Entwicklung/Beschaffung
- Mitteilung aller Probleme/Unstimmigkeiten bei Erfuellung der Sicherheitsanforderungen an IS-Spezialisten

**2. Verfahren:**

| Schritt | Aktivitaet | Beschreibung |
|---|---|---|
| Risikobewertung und Bedarfsermittlung | Risikobewertung durchfuehren | Risiko-Eigentuemer ermittelt Bedrohungen/Schwachstellen der Anwendung |
| | Zusammenarbeit | Risiko-Eigentuemer arbeitet fruehzeitig mit IS-Team bei Festlegung spezifischer Sicherheitsanforderungen auf Basis Risikobewertung |
| Spezifikation der Sicherheitsanforderungen | Dokumentation | Sicherheitsanforderungen auf Basis ermittelter Risiken und Unternehmensrichtlinien dokumentieren (Pflichtenheft) |
| | Vollstaendigkeit sicherstellen | Sicherheitsanforderungen decken alle relevanten Aspekte ab: Authentifizierung, Datenvertraulichkeit, Integritaet, Zugangskontrolle, rechtliche/regulatorische Anforderungen |
| Genehmigung der Sicherheitsanforderungen | Vorlage | Dokumentierte Sicherheitsanforderungen bei Beteiligten vorlegen (Geschaeftsleitung, zustaendige Abteilungen) |
| | Genehmigung einholen | Vor Entwicklung/Erwerb neuer Anwendungen Genehmigung fuer Sicherheitsanforderungen einholen |
| Integration von Sicherheitsanforderungen | Von Anfang an integrieren | Genehmigte Sicherheitsanforderungen von Anfang an in Entwicklungs-/Beschaffungsprozess integrieren |
| | Security by Design | Zusammenarbeit von Entwicklern, Architekten, Beteiligten unterstuetzen, um Sicherheitsmassnahmen in Entwurf/Architektur/Funktionalitaet einzubinden |
| Pruefung und Validierung | Gruendliche Tests | Anwendung testen, ob Sicherheitsanforderungen ordnungsgemaess umgesetzt |
| | Sicherheitstests | Schwachstellenanalysen und Penetrationstests zur Ermittlung/Behebung von Sicherheitsluecken |

## 3 Externe Entwicklung und IKT-Dienstleistungen

### 3.1 Management der Informationssicherheit in der IKT-Lieferkette

#### 3.1.1 Richtlinie

Um mit der Lieferkette von IKT-Produkten und -Dienstleistungen verbundene IS-Risiken wirksam zu mindern, muss Organisation soliden Rahmen fuer Sicherheit der IT-Lieferkette schaffen, der gewaehrleistet, dass beteiligte Parteien einschlaegige IS-Anforderungen erfuellen.

#### 3.1.2 Verfahren

> NOTE: Template-Hinweis: Verfahren an organisatorische Bedingungen anpassen.

| Anforderungsbereich | Beschreibung |
|---|---|
| Sicherheitsanforderungen | Anforderungen an IS bei Beschaffung von IT-Produkten/-Dienstleistungen sind definiert und werden bei Beschaffung beruecksichtigt. |
| | > NOTE: Sicherheitsanforderungen an neue IT-/Kommunikationssysteme beschreiben (z.B. biometrische Erkennung, Fernloeschung) oder auf bestehende Beschaffungsrichtlinien verweisen. Fuer Software-Anforderungen kann auf Kap. 2 verwiesen werden. Organisatorische Sicherstellung der Anwendung beschreiben. |
| Weitergabe der Anforderungen in der Lieferkette | Anbieter von IT-Dienstleistungen muessen Sicherheitsanforderungen in gesamter Lieferkette weitergeben, wenn Teile der IT-Dienstleistung an Unterauftragnehmer vergeben werden. Konkrete Umsetzung in Kap. 2 beschrieben. |
| Sicherheitspraktiken | Lieferanten von IT-Produkten muessen fuer angemessene Sicherheitspraktiken in gesamter Lieferkette sorgen, wenn Produkte Komponenten von anderen Lieferanten/Stellen enthalten. Entsprechende Verpflichtungen in Vereinbarungen integrieren. |
| Informationen ueber Softwarekomponenten | Lieferanten von IT-Produkten muessen Informationen ueber verwendete Softwarekomponenten bereitstellen. |
| Informationen ueber Sicherheitsfunktionen | Lieferanten muessen Informationen zu implementierten Sicherheitsfunktionen und erforderlicher Konfiguration fuer sicheren Betrieb bereitstellen. |
| | > NOTE: Dokumentierter Nachweis kann durch Lieferanten-/Produkt-Assessment erfolgen. |
| Ueberwachungsprozess | Ueberwachungsprozess und annehmbare Methoden zur Validierung der Uebereinstimmung gelieferter IT-Produkte/-Dienste mit Sicherheitsanforderungen implementieren. |
| | > NOTE: Lieferantenueberpruefungen in regelmaessigen Abstaenden in ISMS-Aufgabenmanagement einplanen. |
| Identifizierung von kritischen Komponenten | Verfahren zur Identifizierung/Dokumentation von Produkt-/Dienstkomponenten einfuehren, die fuer Aufrechterhaltung der Funktionalitaet kritisch sind. |
| | > NOTE: Asset-Verzeichnis ist geeigneter Ort zur Klassifizierung der Kritikalitaet. Klassifizierungsschema festlegen. Business-Impact-Analyse kann Transparenz verschaffen. |
| Sicherstellung der Rueckverfolgbarkeit | Kritische Komponenten und ihre Herkunft muessen ueber gesamte Lieferkette hinweg rueckverfolgbar sein. |
| Sicherstellung der Funktionalitaet | Gelieferte IT-Produkte funktionieren wie erwartet ohne unerwartete/unerwuenschte Merkmale. |
| | > NOTE: Nachweise durch Systemtests. |
| Echtheit der Bestandteile | Verfahren einfuehren, die sicherstellen, dass gelieferte Komponenten echt sind und nicht von Spezifikation abweichen. |
| Zusicherung von Sicherheitsstufen | Gewissheit, dass IT-Produkte geforderte Sicherheitsniveaus erreichen, z.B. durch formale Zertifizierung oder Evaluierungssystem (Common Criteria Recognition Arrangement). |
| Regeln fuer den Informationsaustausch | Regeln fuer Austausch von Informationen ueber Lieferkette und moegliche Probleme/Kompromisse zwischen Unternehmen und Lieferanten festlegen. |
| Verwaltung des Lebenszyklus von IT-Komponenten | Spezifische Verfahren fuer Verwaltung des Lebenszyklus/Verfuegbarkeit von IT-Komponenten und damit verbundener Sicherheitsrisiken einfuehren. |

### 3.2 Ausgelagerte Systementwicklung

#### 3.2.1 Richtlinie

Ausgelagerte Systementwicklung muss Anforderungen des Unternehmens an IS, Ueberwachung und Ueberpruefung der effektiven Umsetzung der IS-Massnahmen erfuellen.

#### 3.2.2 Verfahren

> NOTE: Template-Hinweis: Verfahren durchfuehren, wenn neue ausgelagerte Taetigkeit hinzukommt oder bestehende sich aendert. Ausgelagerte Taetigkeit koennte Drittunternehmen sein, das Software erstellt.

**Vorbereitungen zur Auslagerung:**

| # | Schritt | Beschreibung |
|---|---|---|
| 1 | Anforderungen ermitteln | Klare Anforderungen/Erwartungen an ausgelagertes Systementwicklungsprojekt definieren, einschliesslich Sicherheit/Datenschutz |
| 2 | Auswahl der Zulieferer | Lieferanten auf Basis ihrer Faehigkeit auswaehlen, Anforderungen zu erfuellen (Erfahrung, Fachwissen, Einhaltung von Sicherheitsstandards) |
| 3 | Vertragliche Vereinbarungen | Umfassende Vertraege mit Klauseln zu sicherem Design, Coding, Testverfahren, Rechten an geistigem Eigentum, Eigentum am Code, Einhaltung geltender Gesetze/Vorschriften |
| 4 | Festlegen von Sicherheitsprotokollen | Sicherheitsprotokolle fuer Entwicklungsumgebung definieren, Sicherheitswerkzeuge/-massnahmen fuer Entwicklungsprozess festlegen |

**Ueberwachung und Ueberpruefung von ausgelagerten Aktivitaeten:**

| # | Schritt | Beschreibung |
|---|---|---|
| 1 | Regelmaessige Kommunikation | Regelmaessige Kommunikation mit externem Lieferanten zur Gewaehrleistung der Uebereinstimmung mit Projektzielen/Einhaltung von Sicherheitsanforderungen |
| 2 | Ueberpruefung der Evaluationsberichte | Evaluationsberichte an wichtigen Meilensteinen pruefen (Uebereinstimmung mit spezifizierten Anforderungen/Sicherheitsstandards) |
| 3 | Durchfuehrung von Audits | Vertragliches Recht nutzen, Entwicklungsprozesse/-massnahmen des Lieferanten regelmaessig zu pruefen (Einhaltung Sicherheitsanforderungen) |
| 4 | Pruefung und Validierung | Gruendliche Pruefung/Validierung der Entwicklungsergebnisse (frei von Sicherheitsluecken, boesartigen Inhalten, entsprechen Qualitaetsstandards) |
| 5 | Escrow-Vereinbarungen | Treuhandvereinbarungen fuer Software-Quellcode sicherstellen, um Risiken bei Ausfall/Kuendigung von Lieferanten zu mindern |
| 6 | Dokumentation | Dokumentation aller Mitteilungen, Ueberpruefungen, Audits, Testergebnisse fuer zukuenftige Referenz/Konformitaet aufbewahren |

> NOTE: In der Praxis geht dieses Verfahren einher mit "Request for Information" (RFI)-Prozess — Vorgehen innerhalb des Einkaufs, das Gesamtprozess der Beschaffung vorangeht. RFI-Prozess der Organisation ggf. beschreiben.

## 4 Lieferantenmanagement

> NOTE: In Organisationen mit starker digitaler Wertschoepfung haben Kapitel 2-4 oft starke Ueberschneidungen. In solchen Faellen kann Zusammenziehen sinnvoll sein.

### 4.1 Informationssicherheit in Lieferantenbeziehungen

#### 4.1.1 Richtlinie

Bei Lieferantenbeziehungen und gemeinsamer Nutzung von Daten durch Dritte ist IS von groesster Bedeutung. Alle Parteien muessen sich an strenge Vertraulichkeitsmassnahmen, Datenverschluesselungsprotokolle und Zugangskontrollverfahren halten, um sensible Informationen zu schuetzen. Regelmaessige Sicherheitsbeurteilungen und Einhaltung von Vorschriften gewaehrleisten Integritaet der Datenverarbeitungspraktiken.

Fuer kritische Lieferanten muessen Notfallplaene vorhanden sein, um Kontinuitaet der Informationsverarbeitung zu gewaehrleisten, falls ein Lieferant seine Produkte/Dienstleistungen nicht liefern kann.

#### 4.1.2 Verfahren

> NOTE: Template-Hinweis: Verfahren an organisatorische Bedingungen anpassen. Auditor fragt nach Nachweisen fuer dieses Verfahren und Einsicht in Dokumente zur Verwaltung von Lieferantenbeziehungen.

**Bewertung der IS in Lieferantenbeziehungen/Drittparteien — wichtigste Schritte:**

| # | Schritt | Beschreibung |
|---|---|---|
| 1 | Lieferantenebenen definieren | Ebenen auf Basis Klassifizierung gemeinsam genutzter Daten und Kritikalitaet von Prozessen definieren, um IS-Risiken zu bestimmen. |
| | | > NOTE: Beispiel-Struktur: Stufe 1 — Kritische Lieferanten (GDPR, PCI, Gesundheitsdaten, Finanztransfers), Stufe 2 — Wichtig (begrenzte PII, Kundendienst, Betrieb), Stufe 3 — Alle anderen. |
| 2 | IS-Massnahmen der Lieferanten identifizieren | IS-Massnahmen fuer jede Stufe identifizieren. Ggf. Kopien relevanter IS-Richtlinien von Lieferanten anfordern. |
| 3 | Sicherheitsfrageboegen einfuehren | Informationen ueber aktuellen Stand der Sicherheit bei Lieferant sammeln. |
| 4 | Lieferantenbewertung ins Risikomanagement integrieren | Bewertung in Risikomanagement einbinden. |
| 5 | Ueberwachung, Ueberpruefung, Audits | Bei Lieferanten ueberwachen/pruefen/auditieren, ob festgelegte IS-Anforderungen eingehalten werden. |

### 4.2 Beruecksichtigung der Informationssicherheit in Lieferantenvereinbarungen

#### 4.2.1 Richtlinie

IS-Anforderungen in Lieferantenvereinbarungen muessen umgesetzt werden, um vereinbartes Niveau an IS in Lieferantenbeziehungen aufrechtzuerhalten.

Diese Punkte bilden Grundlage fuer solide Lieferantenvereinbarung, die sicherstellt, dass beide Parteien relevante IS-Anforderungen erfuellen.

#### 4.2.2 Verfahren

Zur Aufrechterhaltung eines mit Lieferant vereinbarten IS-Niveaus sind folgende Punkte zu beruecksichtigen:

| # | Punkt | Beschreibung |
|---|---|---|
| 1 | Beschreibung der Informationen | Bereitzustellende/abzurufende Informationen und Methoden der Bereitstellung/Zugriffs klar beschreiben |
| 2 | Klassifizierung von Informationen | Informationen gemaess Klassifizierungsschema des Unternehmens klassifizieren |
| 3 | Zuordnung von Klassifizierungsschemata | Mapping zwischen unternehmenseigenem Klassifizierungsschema und Klassifizierungsschema des Lieferanten |
| 4 | Rechtliche Anforderungen | Rechtliche, gesetzliche, behoerdliche, vertragliche Anforderungen erfuellen (Datenschutz, PII, geistiges Eigentum, Urheberrecht) |
| 5 | Durchfuehrung von Kontrollen | Jede Vertragspartei fuehrt vereinbarte Kontrollen durch (Zugangskontrolle, Leistungsueberpruefung, Ueberwachung, Berichterstattung, Rechnungspruefung) |
| 6 | Regeln fuer die Nutzung | Regeln fuer zulaessige Nutzung von Informationen/zugehoerigen Ressourcen aufstellen |
| 7 | Genehmigungsverfahren | Verfahren/Bedingungen fuer Genehmigung/Entzug der Genehmigung fuer Nutzung der Informationen/Vermoegenwerte durch Lieferanten-Personal |
| 8 | IT-Infrastruktur | Anforderungen an IS der IT-Infrastruktur des Lieferanten festlegen |
| 9 | Entschaedigungen und Abhilfemassnahmen | Entschaedigungen/Abhilfemassnahmen fuer Nichterf uellung der Anforderungen durch Auftragnehmer beruecksichtigen |
| 10 | Management von Zwischenfaellen | Anforderungen/Verfahren fuer Management von Zwischenfaellen festlegen |
| 11 | Schulung und Sensibilisierung | Schulungs-/Sensibilisierungsmassnahmen fuer spezifische Verfahren/IS-Anforderungen |
| 12 | Bestimmungen fuer Unterauftragsvergabe | Einschlaegige Bestimmungen fuer Vergabe von Unterauftraegen beruecksichtigen |
| 13 | Kontaktinformationen | Einschlaegige Kontakte angeben, einschliesslich Kontaktperson fuer IS-Fragen |
| 14 | Ueberpruefungsanforderungen | Anforderungen an Ueberpruefung des Personals des Lieferanten festlegen |

> NOTE: Optionale zusaetzliche Punkte im Template: 1) Alternative Lieferanten identifizieren, 2) Diversifizierung der Lieferantenbasis, 3) Aufrechterhaltung enger Beziehung zu Lieferanten, 4) Regelmaessige Ueberpruefung/Aktualisierung von Notfallplaenen, 5) In Technologie investieren, 6) Versicherung.

### 4.3 Ueberwachung, Ueberpruefung und Aenderungsmanagement von Lieferanten-Dienstleistungen

#### 4.3.1 Richtlinie

Grundsaetze fuer Ueberwachung, Ueberpruefung und Aenderungsmanagement von Lieferanten-Dienstleistungen:

| # | Grundsatz | Beschreibung |
|---|---|---|
| 1 | Kontinuierliche Ueberwachung | Regelmaessige Bewertungen/Ueberwachung der Dienste kritischer Zulieferer, um potenzielle Probleme, Leistungsluecken, Sicherheitsbedenken proaktiv zu ermitteln |
| 2 | Gruendliche Ueberpruefungen | Regelmaessige Ueberpruefungen der Dienstleistungsvereinbarungen/Leistung kritischer Lieferanten zur Gewaehrleistung der Uebereinstimmung mit Unternehmenszielen/Qualitaetsstandards |
| 3 | Protokolle zum Aenderungsmanagement | Robuste Verfahren fuer Aenderungsmanagement eingefuehrt, um nahtlose Uebergaenge zu erleichtern und Unterbrechungen zu minimieren |
| 4 | Kommunikation und Kollaboration | Klare Kommunikationskanaele mit Zulieferern unterhalten fuer effektives Aenderungsmanagement und Adressierung von Herausforderungen |

#### 4.3.2 Verfahren

Ueberwachung der Einhaltung der Vereinbarung, einschliesslich Erfuellung der IS-Anforderungen. Eskalation von Maengeln an Risikomanagement.

Regelmaessige Ueberwachung, Ueberpruefung, Bewertung und Steuerung von Aenderungen in IS-Praktiken und Leistungserbringung der Lieferanten:

> NOTE: Template-Hinweis: Dies sollte Liste von Pruefkriterien/Kennzahlen sein. Sicherstellen, dass alle Punkte der Organisation entsprechen — Auditor wird Einhaltung bestaetigen wollen.

| # | Aktivitaet | Beschreibung |
|---|---|---|
| 1 | Serviceleistung ueberwachen | Einhaltung der Vereinbarungen durch Ueberwachung des Leistungsniveaus pruefen |
| 2 | Von Lieferanten vorgenommene Aenderungen ueberwachen | Verfolgung von: Erweiterungen des Dienstleistungsangebots, neue Anwendungen/Systeme, Aenderungen/Aktualisierungen von Richtlinien/Verfahren des Anbieters, neue/geaenderte Kontrollen zur Behebung von IS-Vorfaellen/Verbesserung der IS |
| 3 | Aenderungen bei Dienstleistungen ueberwachen | Ueberwachung von: Aenderungen/Erweiterungen von Netzen, neue Technologien, neue Produkte/Versionen/Releases, neue Entwicklungswerkzeuge/-umgebungen, Aenderungen des Standorts von Serviceeinrichtungen, Wechsel von Unterlieferanten, Vergabe von Unterauftraegen an andere Lieferanten |
| 4 | Serviceberichte ueberpruefen | Von Lieferanten erstellte Leistungsberichte pruefen, regelmaessige Fortschrittsbesprechungen organisieren (wie in Vereinbarungen vorgesehen) |
| 5 | Audits durchfuehren | Audits bei Lieferanten/Unterlieferanten durchfuehren in Verbindung mit Ueberpruefung von Berichten unabhaengiger Pruefer (falls vorhanden), festgestellte Probleme weiterverfolgen |
| 6 | Informationen ueber Vorfaelle bereitstellen | Informationen ueber IS-Vorfaelle bereitstellen/ueberpruefen (wie in Vereinbarungen/zugehoerigen Leitlinien/Verfahren vorgesehen) |
| 7 | Auditaktivitaeten und Aufzeichnungen ueberpruefen | Auditplaene/Aufzeichnungen des Anbieters ueber IS-Ereignisse, betriebliche Probleme, Ausfaelle, Rueckverfolgung von Fehlern, Unterbrechungen im Zusammenhang mit erbrachtem Dienst pruefen |
| 8 | Reaktion auf Vorfaelle und Verwaltung | Auf festgestellte IS-Ereignisse/Vorfaelle reagieren und betreuen |
| 9 | Schwachstellen erkennen und verwalten | Schwachstellen in IS erkennen und beheben |
| 10 | Lieferantenbeziehungen ueberpruefen | IS-Aspekte in Beziehungen des Lieferanten zu seinen eigenen Lieferanten pruefen |
| 11 | Diensttauglichkeit sicherstellen | Sicherstellen, dass Anbieter ueber ausreichende Servicekapazitaeten/praktikable Plaene verfuegt, um vereinbarte Servicekontinuitaetsniveaus nach groesseren Serviceausfaellen/Katastrophen aufrechtzuerhalten |
| 12 | Einhaltung sicherstellen | Sicherstellen, dass Lieferanten Verantwortlichkeiten fuer Ueberpruefung der Einhaltung/Durchsetzung der Anforderungen der Vereinbarungen zuweisen |
| 13 | Sicherheitsstufen bewerten | Regelmaessige Bewertung der Lieferanten zur Aufrechterhaltung angemessenen IS-Niveaus |
| | | > NOTE: Lieferantenueberpruefungen in regelmaessigen Abstaenden in ISMS-Aufgabenmanagement einplanen. |

## 5 Norm-Referenzen

### 5.1 Normreferenzen zu ISO 27001:2022

| Kapitel in diesem Dokument | Normkapitel (ISO 27001:2022) |
|---|---|
| 1. Einleitung | — |
| 2. Anforderungen an gekaufte Software-Anwendungen und Cloud-Services | A 5.23, A 8.26 |
| 3. Externe Entwicklung und IKT-Dienstleistungen | A 5.21, A 8.30 |
| 4. Lieferantenmanagement | A 5.19, A 5.20, A 5.21, A 5.22 |

### 5.2 Referenzen zu TISAX-ISA 6.0

| Kapitel in diesem Dokument | Normkapitel (ISA-TISAX 6.0) |
|---|---|
| 1. Einleitung | — |
| 2. Anforderungen an gekaufte Software-Anwendungen und Cloud-Services | 1.3.3, 5.3.1, 5.3.3, 5.3.4 |
| 3. Externe Entwicklung und IKT-Dienstleistungen | 1.2.4, 6.1.1 |
| 4. Lieferantenmanagement | 1.2.4, 1.3.4, 6.1.1, 6.1.2 |

## Abkuerzungen

| Kuerzel | Bedeutung |
|---|---|
| DSGVO | Datenschutz-Grundverordnung |
| GDPR | General Data Protection Regulation |
| IKT | Informations- und Kommunikationstechnik |
| IS | Informationssicherheit |
| ISA | Information Security Assessment |
| ISMS | Information Security Management System |
| PCI | Payment Card Industry |
| PII | Personally Identifiable Information (persoenlich identifizierbare Informationen) |
| RFI | Request for Information |
| SLA | Service Level Agreement |
| TISAX | Trusted Information Security Assessment Exchange |

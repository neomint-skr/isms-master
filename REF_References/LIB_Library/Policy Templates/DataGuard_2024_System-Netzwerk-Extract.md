# Handbuch zur Sicherheit in System- und Netzwerkkonfiguration Extrakt

> Quelle: DataGuard Policy Template "DataGuard_2024_System-Netzwerk.pdf", Version 0.92 (17.12.2024).
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch.
> Template-Charakter: Enthaelt Platzhalter zur organisationsspezifischen Anpassung.
> Citation Key: DG24-SN

## Hinweise zur Verwendung der Vorlage

**Vorlage als Ausgangspunkt:** Sorgfaeltig recherchiert, kein Anspruch auf Passgenauigkeit und Vollstaendigkeit. Individuelle Gegebenheiten koennen abweichen.

**Grundsatz der Effektivitaet:** Richtlinie soll erforderlich, angemessen, passend, aufklaerend und unterstuetzend fuer den individuellen Unternehmenszweck wirken.

**Vollstaendiges Verstaendnis erforderlich:** Alle Anweisungen und Verfahren muessen vollstaendig verstanden sein. Bei Unklarheiten weitere Informationen einholen (DataGuard-Experten, rechtliche Berater, Fachexperten).

**Individuelle Anpassung erforderlich:** Beschriebene Anweisungen sind pauschale Beispiele ohne tiefere Beruecksichtigung des Unternehmenskontextes. Inhalt an tatsaechliche Gegebenheiten anpassen.

**Keine ungeprufte Uebernahme:** Keine Texte oder Anweisungen uebernehmen, wenn sie nicht den spezifischen Anforderungen entsprechen.

**Verantwortung der Geschaeftsfuehrung:** Endgueltige Verantwortung fuer Gestaltung und Umsetzung liegt bei der obersten Leitung.

> NOTE: Gelb hinterlegte Hilfstexte in eckigen Klammern nach Kenntnisnahme eliminieren oder inhaltlich anpassen.

## 1 Einleitung

Das Handbuch zur Sicherheit in System- und Netzwerkkonfiguration stellt einen konsolidierten Rahmen dar, der die Strategie fuer effektive Konfiguration und Schutz von Systemkonfigurationen und Daten umreisst. Es dient als umfassender Leitfaden fuer verschiedene Sicherheitsherausforderungen im Zusammenhang mit Systemkonfiguration und Datensicherheit.

### 1.1 Zweck und Umfang

Hauptziel dieser Richtlinie: Strukturierter Ansatz fuer Systemkonfiguration und Datensicherheit zum Schutz sensibler Informationen, Vermoegenswerte und des Unternehmensrufs. Widerstandsfaehigkeit gegen Sicherheitsverletzungen erhoehen, Risiko von Datenkompromittierungen oder unbefugtem Zugriff minimieren.

### 1.2 Anwendbarkeit

Gilt fuer alle Mitarbeiter und Beteiligten. IT-Sicherheitsabteilung in Zusammenarbeit mit zustaendigen Abteilungen verantwortlich fuer Ueberwachung der Umsetzung, Pflege und kontinuierliche Verbesserung.

## 2 Systemkonfiguration und deren Schutz

### 2.1 Schutz vor Malware

**Richtlinie:** Organisation muss zum Schutz der Unternehmensdaten vor Malware-Bedrohungen entsprechende Systeme implementieren.

**Verfahren:**

**Auswahl und Einsatz von Tools zum Schutz vor Malware:**

1. Bewerten und waehlen geeigneter Software zur Erkennung und Reparatur von Malware (Industriestandards, Zuverlaessigkeit, Kompatibilitaet). Werkzeuge muessen KI, ML und Angriffsvektorquellen umfassen.
2. Verteilen der Tools auf alle relevanten Endgeraete und Server.
3. Konfigurieren der Tools entsprechend bewaehrter Verfahren und empfohlener Einstellungen.

**Durchfuehrung von Praeventivkontrollen:**

1. Massnahmen implementieren, um Verwendung nicht zugelassener Software zu verhindern (z.B. Einstellungen fuer Anwendungsrisiko, automatische Blockierung bekannter Schadsoftware).
2. Kontrollen einrichten, um Zugriff auf bekannte/mutmasslich boesartige Websites mit Blocklisting-Techniken zu blockieren.
3. Software und Systeme regelmaessig aktualisieren und patchen, um Schwachstellen zu beseitigen (z.B. automatische Updates oder Cloud-Signatur-Tools wie MDR/XDR).

**Reaktion auf Zwischenfaelle und Wiederherstellung:**

1. Nach Erkennen einer Malware-Infektion entsprechende Massnahmen einleiten (z.B. Neu-Imaging von Systemen bei Kompromittierung).
2. Daten aus sauberen Backups wiederherstellen, um betroffene Systeme in sicheren Zustand zu versetzen.

### 2.2 Handhabung von technischen Schwachstellen

**Richtlinie:** Identifizierung, Bewertung und Behebung technischer Schwachstellen muss umgehend erfolgen, um Ausnutzung zu verhindern und Risiken zu verringern.

**Verfahren:**

**Identifizierung von technischen Schwachstellen:**

1. **Bestandsaufnahme der Anlagen:** Aktuelles Inventar aller Informationssysteme, Software und Komponenten fuehren (Herstellerangaben, Versionsnummern, zustaendiges Personal).
2. **Nutzung von Informationsressourcen:** Regelmaessig Informationsquellen ueberwachen (Herstellerhinweise, Sicherheitsbulletins, Schwachstellendatenbanken).
3. **Schwachstellen-Scan-Tools verwenden:** Automatisierte Tools implementieren, um Netzwerkinfrastruktur, Systeme und Anwendungen regelmaessig zu pruefen. DataGuard bietet in Level-2 Plan entsprechende Loesungen.
4. **Einbindung von Lieferanten:** Mit Lieferanten/Anbietern zusammenarbeiten, um zeitnahe Meldung, Behandlung und Offenlegung von Schwachstellen sicherzustellen.

**Berichterstattung und Aufdeckung:**

a) **Meldung:** Nach Erhalt von Schwachstellenmeldungen (intern/extern) Informationen dokumentieren und bewerten (z.B. Ticket eroeffnen zur Relevanz- und Risikountersuchung).

b) **Oeffentliche Anlaufstelle:** Spezielle E-Mail-Adresse oder Online-Meldeformular verwenden (z.B. abuse-sec@company.cc).

c) **Bug Bounty-Programme:** Einfuehrung von Bug Bounty-Programmen erwaegen, um Forschern Anreiz zu geben, Schwachstellen zu melden.

**Bewertung der technischen Schwachstellen:**

a) **Ueberpruefung und Analyse:** Schwachstellenberichte ueberpruefen/analysieren, um Schweregrad, Auswirkungen und potenzielles Risiko zu bewerten.

b) **Penetrationstests:** Geplante/kontrollierte Penetrationstests durch kompetente Personen/Teams durchfuehren, um Schwachstellen zu identifizieren, die automatische Scanning-Tools nicht erkennen.

**Behebung technischer Schwachstellen:**

a) **Patch-Verwaltung:** Patch-Management-Prozess implementieren, um genehmigte Patches/Updates rechtzeitig zu priorisieren, testen und verteilen.

b) **Testen von Updates:** Patches/Updates gruendlich in kontrollierter Umgebung testen, um Wirksamkeit sicherzustellen und unerwinschte Nebeneffekte auszuschliessen.

c) **Alternative Kontrollen:** Wenn Patches nicht sofort anwendbar/verfuegbar: Alternative Kontrollen einfuehren (Netzwerksegmentierung, Zugriffsbeschraenkungen, vorlaeufige Umgehungsloesungen).

d) **Verifizierung:** Authentizitaet und Wirksamkeit der Abhilfemassnahmen durch Validierungstests und Systemberwachung ueberpruefen.

### 2.3 Konfigurationsmanagement

**Richtlinie:** Hardware, Software, Dienste und Netzwerke muessen mit gehaerteten Sicherheitseinstellungen konfiguriert werden, um Risiken zu minimieren und Schutzwirksamkeit zu gewaehrleisten.

**Verfahren:**

Um sicherzustellen, dass Hardware, Software, Dienste und Netzwerke sicher und konsistent konfiguriert sind, ist ein systematischer Prozess zur Dokumentation, Implementierung, Ueberwachung und Ueberpruefung einzurichten.

**Technische Sicherheitsstandards:**

1. Standardvorlagen fuer sichere Konfiguration entwickeln (auf Grundlage bewaehrter Branchenverfahren und organisatorischer Anforderungen, z.B. CIS-Zentrum).
2. Parameter umfassen: Benutzerzugriffsrechte, Dienstkonfigurationen, Netzwerkeinstellungen, Sicherheitskontrollen.
3. Sicherstellen, dass Vorlagen regelmaessig ueberprueft/aktualisiert werden (neue Bedrohungen, Schwachstellen, technologische Veraenderungen).
4. Zentrales Repository fuer Konfigurationsdokumentation einfuehren (Konfigurationsvorlagen, Aufzeichnungen ueber Aenderungen). Referenz auf Konfigurationsdokumentation und ST7 Prozessmanagement.

**Umsetzungsprozess:**

1. Konfigurationen auf neu eingerichteten Systemen/System-Upgrades nach genehmigten Vorlagen implementieren.
2. Aenderungsmanagement-Verfahren befolgen, um Konfigurationsaenderungen anzufordern, pruefen und genehmigen.
3. Alle Konfigurationsaenderungen dokumentieren (Grund, Genehmigungsstatus, Implementierungsdetails).

**Ueberwachung und Ueberpruefung:**

1. Regelmaessige Ueberwachung der Konfigurationen mit Systemmanagement-Tools, um Einhaltung festgelegter Vorlagen zu gewaehrleisten.
2. Regelmaessige Ueberpruefung der Konfigurationseinstellungen anhand Zielvorlagen, um Abweichungen/Nichteinhaltung zu ermitteln.
3. Unstimmigkeiten durch automatische Durchsetzung oder manuelle Korrekturmassnahmen untersuchen und beseitigen.

**Integration und Automatisierung:**

1. Konfigurationsmanagementprozesse mit Asset-Management-Systemen und anderen relevanten Tools integrieren.
2. Automatisierungsoptionen pruefen (z.B. Infrastruktur als Code), um Bereitstellung und Durchsetzung zu automatisieren.

### 2.4 Synchronisierung der Systemuhrzeit

**Richtlinie:** Uhren von Informationsverarbeitungssystemen muessen mit zugelassenen Zeitquellen synchronisiert werden, um Korrelation/Analyse von sicherheitsrelevanten Ereignissen und Unterstuetzung von Vorfalluntersuchungen zu ermoeglichen.

**Verfahren:**

**Wichtigkeit der Uhrensynchronisation:**

- Gewaehrleistet genaue Zeitstempel fuer Authentifizierung, Protokollierung, Sitzungsverwaltung
- Verhindert Replay-Angriffe durch konsistente Zeit zwischen kommunizierenden Parteien
- Hilft bei forensischer Analyse und Untersuchung von Sicherheitsvorfaellen
- Inkonsistente Uhren fuehren zu Schwachstellen bei kryptografischen Operationen
- Synchronisierung entscheidend fuer Koordinierung und Datenkonsistenz in verteilten Systemen

**Rollen & Zustaendigkeiten:**

1. **IT-Administrationsteam:** Verantwortlich fuer Ueberwachung der Implementierung und Wartung der Zeitsynchronisation.
2. **Systemadministratoren:** Verantwortlich fuer Konfiguration einzelner Systeme zur Synchronisierung mit zugelassenen Zeitquellen.
3. **IT-Sicherheitsteam:** Verantwortlich fuer Ueberwachung/Ueberpruefung der Einhaltung der Zeitsynchronisationsanforderungen.

**Verfahren:**

**Identifizierung der genehmigten Zeitquellen:**

IT-Administrationsteam identifiziert und genehmigt zuverlaessige Zeitquellen (nationale Atomuhren, GPS-Zeituebertragungen, massgebliche Zeitserver). Beispiele: Google NTP, Cloudflare NTP, Microsoft NTP, Apple NTP.

**Konfiguration der Referenzuhr:**

- Uhr, die mit genehmigter Zeitquelle verbunden ist, wird als Referenzuhr fuer Protokollierungssysteme bezeichnet.
- Referenzuhr so konfigurieren, dass sie Zeitaktualisierungen von zugelassener Zeitquelle ueber NTP oder PTP empfaengt.

**Synchronisierung von Informationsverarbeitungssystemen:**

- Systemadministratoren konfigurieren einzelne Systeme, sodass ihre Uhren mit Referenzuhr synchronisiert werden.
- NTP/PTP-Einstellungen auf jedem System konfigurieren fuer genaue Zeitsynchronisation.
- Synchronisierungshaeufigkeit und Abfrageintervalle auf Grundlage organisatorischer Anforderungen und bewaehrter Verfahren festlegen.

**Ueberwachung und Verifizierung:**

- Sicherheitsteam fuehrt regelmaessige Kontrollen durch, um zu ueberpruefen, ob alle Systeme mit genehmigten Zeitquellen synchronisiert sind.
- Automatisierte Tools koennen Zeitsynchronisationsstatus in gesamter Infrastruktur ueberwachen.
- Abweichungen/Unstimmigkeiten umgehend untersuchen und beheben.

### 2.5 Verwendung von Hilfsprogrammen mit privilegierten Rechten

**Richtlinie:** Zugriff auf Hilfsprogramme, mit denen System- und Anwendungsschutzmassnahmen ausser Kraft gesetzt werden koennen, darf nur befugten Personen gewaehrt werden, die im Rahmen ihrer beruflichen Taetigkeit legitimen Bedarf haben.

**Verfahren:**

**Identifizierung von Hilfsprogrammen:**

1. Alle Systeme/Anwendungen ueberpruefen, um Hilfsprogramme zu identifizieren, die System-/Anwendungssteuerungen ausser Kraft setzen koennen.
2. Liste der identifizierten Hilfsprogramme mit deren Faehigkeiten dokumentieren.

**Autorisierung und Zugriffskontrolle:**

1. Mindestanzahl autorisierter Benutzer bestimmen, die aufgrund Aufgaben/Zustaendigkeiten Zugriff benoetigen.
2. Verfahren zur Benutzeridentifizierung, Authentifizierung und Autorisierung fuer Zugriff auf Versorgungsprogramme implementieren.
3. Jedem Benutzer eindeutige Identitaeten zuweisen.
4. Berechtigungsstufen definieren/dokumentieren, die festlegen, wer zugreifen/nutzen darf.
5. Genehmigungen der Geschaeftsfuehrung fuer Ad-hoc-Nutzung einholen.

**Abtrennung und Abschaffung unnoetiger Programme:**

1. Dienstprogramme von Anwendungssoftware trennen, um Stoerungen des normalen Systembetriebs zu vermeiden.
2. Alle unnoetigen Hilfsprogramme von Systemen entfernen/deaktivieren, um potenzielle Angriffsflaeche zu minimieren.

**Protokollierung und Ueberwachung:**

1. Protokollierungsmechanismen zur Aufzeichnung gesamter Nutzung implementieren (Benutzeridentifikation, durchgefuehrte Aktionen).
2. Protokolle regelmaessig ueberwachen, um unbefugte/verdaechtige Nutzung zu erkennen.

**Begrenzte Verfuegbarkeit und Dauer:**

1. Verfuegbarkeit von Hilfsprogrammen auf autorisierte Benutzer beschraenken.
2. Zugang nur fuer Dauer genehmigter Aenderungen/Wartungsarbeiten gewaehren.

**Schulung und Sensibilisierung:**

1. Schulungen autorisierter Benutzer in ordnungsgemaesser Verwendung und Einhaltung von Unternehmensrichtlinien veranlassen.
2. Benutzer fuer Bedeutung eingeschraenkter/kontrollierter Nutzung fuer Informationssicherheit sensibilisieren.

**Regelmaessige Ueberpruefung und Aktualisierung:**

1. Regelmaessige Ueberpruefung/Aktualisierung der Liste autorisierter Benutzer/Dienstprogramme auf Grundlage organisatorischer Aenderungen.
2. Regelmaessige Audits durchfuehren, um Einhaltung sicherzustellen und verbesserungswuerdige Bereiche zu ermitteln (in Management von Informationssicherheitsaufgaben beruecksichtigen).

### 2.6 Installation von Software auf betrieblichen Systemen

**Richtlinie:** Um Integritaet operativer Systeme zu gewaehrleisten und Ausnutzung technischer Schwachstellen zu verhindern, muss Unternehmen Softwareinstallation kontrollieren und verwalten.

**Verfahren:**

**Autorisierung und Personalschulung:**

1. Nur IT-Administratoren mit entsprechender Berechtigung duerfen Softwareinstallationen/-aktualisierungen auf operativen Systemen durchfuehren.
2. Geschaeftsleitung muss bestimmte Mitarbeiter aufgrund Ausbildung/Erfahrung autorisieren.

**Genehmigungsverfahren:**

1. Vor jeder Softwareinstallation/-aktualisierung muessen Administratoren Genehmigung des zustaendigen Verwaltungspersonals einholen.
2. Foermliches Genehmigungsverfahren einfuehren, das erforderliche Schritte zur Beantragung/Genehmigung festlegt.

**Pruefung und Validierung:**

1. Software-Installationen/-Updates muessen umfangreiche Tests/Validierungen durchlaufen (Kompatibilitaet, Funktionalitaet, Sicherheit).
2. Testumgebungen muessen Produktionssysteme so genau wie moeglich widerspiegeln, um Auswirkungen von Softwareaenderungen genau beurteilen zu koennen.

**Identifizierung von genehmigtem ausfuehrbarem Code:**

1. Liste von genehmigtem ausfuehrbarem Code fuehren, der zur Installation auf operativen Systemen zugelassen ist.
2. Nur Software aus vertrauenswuerdigen/ueberprueften Quellen in Liste aufnehmen.

**Konfigurationskontrolle:**

1. Konfigurationskontrollsystem zur Verwaltung/Verfolgung aller Softwareinstallationen/-aktualisierungen auf operativen Systemen verwenden.
2. System muss Aufzeichnung vorgenommener Aenderungen mit Versionsnummern, Datum und Gruenden fuehren.

**Rollback-Strategie:**

1. Rollback-Strategie entwickeln, um bei fehlgeschlagener Softwareinstallation/-aktualisierung vorherigen Zustand wiederherzustellen.
2. Rollback-Verfahren dokumentieren und sicherstellen, dass Administratoren darin geschult sind.

**Audit-Protokollierung:**

1. Protokollierung aller Software-Installations-/Aktualisierungsaktivitaeten auf operativen Systemen aktivieren.
2. Protokolleintraege muessen Details enthalten: Datum/Uhrzeit, installierte/aktualisierte Software, zustaendiger Administrator.

**Alte Versionen archivieren:**

1. Repository alter Softwareversionen mit entsprechender Dokumentation/Konfigurationsdetails fuehren.
2. Archivierte Versionen solange aufbewahren, wie fuer Referenzzwecke/Einhaltung von Vorschriften benoetigt.

**Unterstuetzung von Anbietern und Open-Source-Wartung:**

1. Regelmaessig pruefen, ob von Softwareherstellern Updates/Patches fuer unterstuetzte Versionen zur Verfuegung stehen.
2. Wartungsstatus von Open-Source-Software in operativen Systemen ueberwachen, bei Bedarf auf neueste Version aktualisieren.

**Ueberwachung extern bereitgestellter Software:**

1. Extern bereitgestellte Software/Pakete auf nicht autorisierte Aenderungen ueberwachen, die Sicherheitsluecken verursachen koennten.
2. Regelmaessig Integritaet extern gelieferter Software ueberpruefen, um Uebereinstimmung mit Sicherheitsstandards sicherzustellen.

**Zugang und Ueberwachung von Lieferanten:**

1. Lieferanten nur bei Erfordernis und entsprechender Genehmigung Zugang zur Installation/Aktualisierung gewaehren.
2. Aktivitaeten der Zulieferer bei Softwareaenderungen ueberwachen, um Einhaltung der Unternehmensrichtlinien zu gewaehrleisten.

**Regeln fuer Installation von Anwendersoftware:**

1. Strenge Regeln fuer vom Benutzer installierte Software auf operativen Systemen durchsetzen.
2. Nutzern klare Richtlinien geben, welche Softwareinstallationen erlaubt/verboten sind.

**Grundsatz der geringsten Privilegierung (least Privilege):**

1. Prinzip der geringsten Rechte bei Vergabe von Berechtigungen fuer Software-Installationen anwenden.
2. Installationsrechte auf erforderliche Rechte beschraenken, damit Benutzer ihre Aufgaben effektiv erfuellen koennen.

## 3 Netzwerke und Informationsuebertragung

### 3.1 Informationsuebertragung

**Richtlinie:** Alle Informationen muessen sicher uebertragen werden, um wirksame Verwaltung, Ueberwachung und Schutz von Informationsbestaenden zu ermoeglichen. Personal muss verschiedene Arten von Informationen gemaess Richtlinie unter Beachtung der Regeln, Verfahren und Vereinbarungen fuer Datenklassifizierung behandeln.

**Uebertragungsvereinbarungen:** Uebertragungsvereinbarungen (einschliesslich Authentifizierung des Empfaengers) zum Schutz von Informationen bei Uebermittlung zwischen Unternehmen und Dritten erstellen und aufrechterhalten.

**Verfahren:**

Grundlegende Ueberlegungen zur Uebermittlung von Informationen durch elektronische Mittel, physische Speichermedien und muendliche Kommunikation.

**Elektronischer Transfer:**

- **Schutz vor Malware:** Erkennung/Schutz vor Malware, die durch elektronische Kommunikation uebertragen wird.
- **Pfaendungsschutz:** Schutz sensibler elektronischer Informationen in Anhaengen.
- **Ueberpruefung der Adresse:** Verhindern des Versands von Dokumenten/Nachrichten an falsche Adresse/Nummer.
- **Genehmigung fuer externe Dienstleistungen:** Genehmigungen einholen, bevor externe oeffentliche Dienste genutzt werden (Instant Messaging, soziale Netzwerke, Dateifreigabe, Cloud-Speicher).
- **Authentifizierung:** Staerkere Authentifizierungsstufen fuer Uebertragungen ueber oeffentlich zugaengliche Netze einfuehren.
- **Beschraenkungen der Kommunikation:** Beschraenkungen fuer elektronische Kommunikationseinrichtungen festlegen (z.B. automatische Weiterleitung von E-Mails an externe Adressen verhindern).
- **Hinweise zu SMS und Instant Messages:** Personal darauf hinweisen, keine kritischen Informationen ueber SMS/Sofortnachrichten zu versenden (koennen an oeffentlichen Orten gelesen/in unzureichend geschuetzten Geraeten gespeichert werden).
- **Bedenken gegen Faxgeraete:** Personal ueber Probleme bei Nutzung von Faxgeraeten/-diensten informieren (unbefugter Zugriff auf Nachrichtenspeicher, absichtliche/versehentliche Programmierung von Geraeten).

**Uebertragung physischer Speichermedien:**

- **Zustaendigkeiten:** Zustaendigkeiten fuer Kontrolle/Benachrichtigung von Uebermittlung, Versand und Empfang festlegen.
- **Adressierung und Transport:** Korrekte Adressierung/Befoerderung von Nachrichten sicherstellen.
- **Verpackung:** Verpackungen verwenden, die Inhalt vor physischen Schaeden waehrend Transport schuetzen.
- **Identifizierung des Kuriers:** Standards fuer Identifizierung von Kurieren festlegen.
- **Manipulationssichere Uebertragungsmassnahmen:** Je nach Geheimhaltungsgrad manipulationssichere Uebertragungsmassnahmen verwenden.
- **Zugelassene Drittparteien:** Genehmigte Liste von Dienstleistern fuehren, die Transport-/Kurierdienste durchfuehren duerfen.
- **Protokolle:** Protokolle fuehren (Inhalt der Speichermedien, angewandter Schutz, autorisierte Empfaenger, Uebertragungszeiten).

**Muendliche Uebertragung:**

- **Oeffentliche Konversationen:** Personal darauf hinweisen, keine vertraulichen Gespraeche an oeffentlichen Orten/ueber unsichere Kommunikationskanaele zu fuehren.
- **Sprachnachrichten:** Keine Nachrichten mit vertraulichen Informationen auf Anrufbeantwortern/Sprachnachrichten hinterlassen.
- **Screening:** Sicherstellen, dass Personen auf fuer Anhoeren des Gespraechs geeignete Stufe ueberprueft werden.
- **Zimmerkontrollen:** Geeignete Raumkontrollen durchfuehren (Schalldaemmung, geschlossene Tueren).
- **Haftungsausschluesse:** Vor Beginn sensibler Gespraeche Beteiligte auf Sicherheitsmassnahmen/Vertraulichkeit hinweisen. Stellt sicher, dass alle Teilnehmer Vertraulichkeit bewusst sind und wissen, wie erhaltene Informationen zu behandeln sind.

### 3.2 Sicherheit der Netze

**Richtlinie:** Netze muessen unter Beruecksichtigung der Sicherheit konzipiert werden, einschliesslich Einsatz von Firewalls, Systemen zur Erkennung von Eindringlingen, sicherer Verwaltung und Konfigurationen fuer alle Netzgeraete.

**Verfahren:**

**Klassifizierung von Informationen:**

1. Art/Empfindlichkeitsgrad der Informationen identifizieren/klassifizieren, die Netzwerk durchlaufen.
2. Festlegung geeigneter Sicherheitsmassnahmen auf Grundlage der Klassifizierung.

**Festlegung von Zustaendigkeiten und Verfahren:**

1. Verantwortliche Personen/Teams fuer Verwaltung der Netzwerkausruestung/-geraete benennen.
2. Verfahren fuer Konfiguration, Ueberwachung und Wartung von Netzsicherheitskontrollen entwickeln/dokumentieren.

**Dokumentation und Wartung:**

1. Aktuelle Dokumentation fuehren (Netzwerkdiagramme, Inventar von Netzwerkgeraeten, Konfigurationsdateien).
2. Regelmaessig Netzdokumentation ueberpruefen/aktualisieren, um Aenderungen der Konfigurationen/Netztopologie zu beruecksichtigen. Auf Konfigurationsdokumentation referenzieren.

**Durchfuehrung von Sicherheitsmassnahmen:**

1. Sicherheitsmassnahmen zum Schutz von Vertraulichkeit, Integritaet und Verfuegbarkeit der ueber Netz uebertragenen Daten einsetzen.
2. Firewalls, Intrusion Detection/Prevention-Systeme und Zugriffskontrolllisten (ACLs) konfigurieren, um unbefugten Zugriff auf Netzwerkressourcen zu beschraenken.
3. Vorhandensein geeigneter Authentifizierungsmechanismen sicherstellen, um Identitaet von Systemen zu ueberpruefen, die sich mit Netz verbinden.

**Protokollierung und Ueberwachung:**

1. Protokollierungs-/Ueberwachungsfunktionen auf Netzwerkgeraeten aktivieren, um Netzwerkverkehr, Systemaktivitaeten und Sicherheitsereignisse aufzuzeichnen.
2. Zentralisierte Protokollierungsloesung implementieren, um Protokolle aus gesamter Netzwerkinfrastruktur zu sammeln/analysieren.

**Netzsegmentierung und -isolierung:**

1. Netz in logische Zonen auf Grundlage von Sicherheitsanforderungen/Zugangskontrollen segmentieren.
2. Kritische Teilnetze/sensible Systeme isolieren, um unbefugten Zugriff/seitliche Bewegungen von Angreifern zu verhindern.

**Schwachstellen-Management:**

1. Netzwerk regelmaessig auf Schwachstellen mit automatischen Tools/manuellen Bewertungen scannen.
2. Rechtzeitige Behebung von Schwachstellen, die bei Scans festgestellt wurden, um Risiko eines Missbrauchs zu verringern.

### 3.3 Sicherheit der Netzdienste

**Richtlinie:** Sichere Nutzung von Netzdiensten innerhalb der Organisation muss durch Ermittlung, Umsetzung und Ueberwachung geeigneter Sicherheitsmechanismen, Dienstgueteklassen und Dienstanforderungen gewaehrleistet werden.

**Verfahren:**

**Identifizierung von Sicherheitswerten:**

1. Sicherheitsanforderungen fuer jeden in Organisation genutzten Netzdienst bewerten.
2. Erforderliche Sicherheitsmerkmale, Service-Levels und Serviceanforderungen auf Grundlage der Sensibilitaet/Kritikalitaet bestimmen.
3. Ermittelte Sicherheitsmassnahmen fuer jeden Netzdienst detailliert dokumentieren.

**Durchfuehrung von Sicherheitsmassnahmen:**

1. Mit internen/externen Netzdienstleistern zusammenarbeiten, um Umsetzung ermittelter Sicherheitsmassnahmen zu gewaehrleisten.
2. Klare Anweisungen/Anforderungen an Dienstleister weitergeben (Sicherheitsmerkmale, Servicelevel, Serviceanforderungen).
3. Implementierungsprozess ueberwachen, um Einhaltung vereinbarter Sicherheitsmassnahmen zu gewaehrleisten.

**Formulierung von Regeln fuer Nutzung von Netzen und Diensten:**

1. Regeln/Richtlinien fuer Nutzung von Netzen/Netzdiensten entwickeln.
2. Richtlinien fuer Authentifizierung, Autorisierung, Netzwerkmanagement und Zugangskontrollen definieren.
3. Zulaessige Mittel fuer Zugriff auf Netzwerke/Dienste festlegen (VPN-Nutzung, drahtlose Netzwerkverbindungen).
4. Verfahren zur Ueberwachung der Nutzung/Durchsetzung der Einhaltung von Nutzungsrichtlinien festlegen.

**Integration von Sicherheitsfunktionen in Netzwerkdienste:**

1. Mit Netzwerkadministratoren/Dienstanbietern koordinieren, um Sicherheitsfunktionen effektiv zu integrieren.
2. Sicherstellen, dass Authentifizierungsmechanismen, Verschluesselungsprotokolle und Zugriffskontrollen ordnungsgemaess konfiguriert/durchgesetzt werden.
3. Netzwerkverbindungsverfahren/Caching-Parameter entsprechend Sicherheitsanforderungen konfigurieren.
4. Verfahren zur Beschraenkung des Zugangs zu sensiblen Netzdiensten/Anwendungen auf Grundlage vordefinierter Kriterien implementieren.

**Ueberwachung und Bewertung:**

1. Regelmaessig Leistung/Sicherheit der Netzdienste ueberwachen, um Abweichungen von festgelegten Sicherheitsmassnahmen festzustellen.
2. Regelmaessige Ueberpruefungen/Audits durchfuehren, um Einhaltung der Sicherheitsrichtlinien/-vorschriften zu gewaehrleisten.
3. Wirksamkeit eingefuehrter Sicherheitsmassnahmen bewerten, gegebenenfalls an neue Bedrohungen/Schwachstellen anpassen.

**Dokumentation und Berichterstattung:**

1. Fuer jeden Netzdienst implementierte Sicherheitsmassnahmen detailliert dokumentieren (Konfigurationseinstellungen, Zugangskontrollen).
2. Regelmaessige Berichte ueber Sicherheitsstatus von Netzdiensten erstellen (Einhaltung der Sicherheitsrichtlinien, festgestellte Risiken/Vorfaelle).
3. Zugang zu Sicherheitsdokumenten/-berichten fuer relevante Interessengruppen, um Transparenz/Rechenschaftspflicht zu gewaehrleisten.

### 3.4 Trennung von Netzen

**Richtlinie:** Um Sicherheit zu erhoehen, Datenverkehr entsprechend geschaeftlichen Erfordernissen zu steuern und sensible Informationen zu schuetzen, muss Netzwerktrennung vorgenommen werden.

**Verfahren:**

**Zustaendigkeiten:**

**IT-Abteilung:**

- Verantwortlich fuer Umsetzung/Aufrechterhaltung von Massnahmen zur Netztrennung.
- Regelmaessige Audits/Bewertungen durchfuehren, um Einhaltung der Richtlinie zu gewaehrleisten.
- Technische Unterstuetzung/Hilfe bei Umsetzung der Netzwerktrennung bereitstellen.

**Abteilungsleiter/Manager:**

- Mit IT-Abteilung bei Festlegung von Netzwerkdomaenen auf Grundlage von Geschaeftsanforderungen zusammenarbeiten.
- Sicherstellen, dass IT-Abteilung ueber Zugangsanforderungen/Sicherheitsaspekte informiert wird.

**Verfahren:**

**Identifizieren von Netzwerkdomaenen:**

- Mit Abteilungsleitern/Managern zusammenarbeiten, um Netzwerkdomaenen auf Grundlage von Geschaeftsbereichen, Sensibilitaet, Kritikalitaet oder anderen relevanten Faktoren zu ermitteln.
- Ermittelte Netzwerkdomaenen und damit verbundene Anforderungen dokumentieren.

**Definieren der Begrenzungen fuer jeden Bereich:**

- Mit IT-Abteilung zusammenarbeiten, um Grenzen fuer jede Netzwerkdomaene festzulegen.
- Zugangskontrollmechanismen bestimmen (Firewalls, Filterrouter), die an Peripherie implementiert werden sollen.

**Trennen von WLAN-Netzwerken:**

- Drahtlose Netzinfrastruktur bewerten, geeignete Trennungsmassnahmen festlegen (z.B. internes/Gaeste-WLAN).
- Funkabdeckung anpassen, um WLAN-Netzwerke abzutrennen und Zugangskontrollen einzurichten.
- WLAN-Verbindungen als externe Verbindung behandeln, solange sie kein Gateway in Uebereinstimmung mit Netzwerkschutzmassnahmen passiert haben.

**Durchfuehrung von Schutzmassnahmen:**

- Bereitstellung erforderlicher Hardware-/Softwareloesungen zur Umsetzung der Netzwerktrennungsmassnahmen.
- Firewalls, Router und andere Sicherheitsgeraete konfigurieren, um Zugriffskontrollrichtlinien zwischen Netzwerkdomaenen durchzusetzen.
- Sicherstellen, dass Massnahmen zur Trennung von drahtlosen Netzen ordnungsgemaess konfiguriert/getestet sind.

**Schulung und Sensibilisierung:**

- Mitarbeiter fuer Bedeutung der Netztrennung und Auswirkungen auf Sicherheit schulen/sensibilisieren.
- Mitarbeiter ueber Aufgaben/Verantwortlichkeiten bei Aufrechterhaltung der Netzsicherheit aufklaeren.

**Ueberwachung und Wartung:**

- Ueberwachungsmechanismen zur kontinuierlichen Beobachtung des Netzwerkverkehrs und Identifizierung unberechtigter Zugriffsversuche einrichten.
- Regelmaessige Wartung der Netzwerktrennungskontrollen, um deren Wirksamkeit zu gewaehrleisten.
- Festgestellte Probleme/Schwachstellen unverzueglich beheben.

**Dokumentation und Berichterstattung:**

- Massnahmen zur Netztrennung dokumentieren (Konfigurationen, Richtlinien, Verfahren).
- Regelmaessige Berichte ueber Einhaltung der Netzwerktrennung/Sicherheitsvorfaelle zur Ueberpruefung durch Management erstellen.

## 4 Protokollierung, Ueberwachung und Web-Filterung

### 4.1 Verhinderung von Datenverlusten

**Richtlinie:** Zum Schutz sensibler Daten muessen Massnahmen zur Aufdeckung und Verhinderung der unbefugten Offenlegung und Extraktion sensibler Informationen ergriffen werden.

**Verfahren:**

**Identifizierung und Klassifizierung von sensiblen Informationen:**

1. Geschaeftsleitung/benannte Asset-Eigentuemer sind fuer Identifizierung/Klassifizierung sensibler Informationen auf Grundlage ihrer Art/potenziellen Auswirkungen ihrer Weitergabe verantwortlich.
2. Durchfuehrung wiederkehrender Datenklassifizierungsverfahren mit Asset-Eigentuemernsicherstellen.
3. Vergewissern, dass Klassifizierung im Asset-Verzeichnis korrekt hinzugefuegt wurde.

**Ueberwachung von Anzeichen von Datenlecks:**

1. Mechanismen zur Ueberwachung des Datenflusses in verschiedenen Kanaelen implementieren (E-Mail, Dateitransfer, mobile Geraete, mobile Speichermedien).
2. Tools zur Verhinderung von Datenlecks zur kontinuierlichen Ueberwachung von Datenuebertraguns-/Zugriffmustern einsetzen, um potenzielle Datenlecks zu erkennen.
3. Warnungen/Benachrichtigungen einrichten, um Administratoren umgehend ueber verdaechtige Aktivitaeten/unbefugte Versuche zu informieren.

**Praeventionsmassnahmen:**

1. DLP-Tools (Data Leakage Prevention) zur proaktiven Erkennung einsetzen, unbefugte Versuche zum Zugriff/Uebertragen/Offenlegen blockieren.
2. DLP-Loesungen konfigurieren, um Richtlinien durchzusetzen, die Datenverluste ueber E-Mail, File-Sharing-Plattformen, Messaging-Apps und andere Kommunikationskanaele verhindern.
3. Massnahmen implementieren, um E-Mails/Dateien/Nachrichten mit sensiblen Informationen unter Quarantaene zu stellen/zu blockieren, bevor sie Netzwerk verlassen.

**Benutzerbeschraenkungen und Rechenschaftspflicht:**

1. Rollen/Zustaendigkeiten der Benutzer bewerten, um Grad des Zugriffs/Berechtigungen zu bestimmen, der fuer Ausfuehrung der Arbeitsfunktionen erforderlich ist.
2. Moeglichkeiten der Benutzer zum Kopieren/Einfuegen/Uebertragen sensibler Informationen auf externe Geraete/Cloud-Dienste entsprechend beruflichen Anforderungen/Sicherheitsfreigabe einschraenken.
3. Mechanismen zur Benutzerauthentifizierung und Pruefprotokolle implementieren, um Benutzeraktionen zu verfolgen und Personen fuer unbefugten Datenzugriff/-weitergabe zur Verantwortung zu ziehen.

**Steuerungen fuer Bildschirmaufnahmen und Fotografie:**

1. Mitarbeitern verbieten, Screenshots/Fotos von sensiblen Informationen ohne entsprechende Genehmigung anzufertigen.
2. Mitarbeiter ueber Risiken informieren, die mit Erfassung sensibler Daten verbunden sind, und ueber Folgen eines Verstosses gegen Richtlinien.
3. Benutzeraktivitaeten/Bildschirmaufnahmen ueberwachen, um Richtlinienstoesse/Sicherheitsverletzungen zu erkennen/untersuchen.

**Schutz von Sicherungsdaten:**

1. Sicherstellen, dass Sicherungssysteme/Speichermedien, die sensible Informationen enthalten, angemessen vor unbefugtem Zugriff/Manipulation geschuetzt sind.
2. Sicherungsdaten verschluesseln, um unbefugte Offenlegung zu verhindern und Einhaltung von Sicherheit von Datenbestimmungen zu gewaehrleisten.
3. Regelmaessig Sicherungs-/Wiederherstellungsverfahren testen, um Integritaet/Sicherheit gespeicherter Daten zu ueberpruefen.

### 4.2 Protokollierung

**Richtlinie:** Effektive Verwaltung von Protokollen, die Aktivitaeten, Ausnahmen, Fehler und andere relevante Ereignisse in Informationssystemen/Netzwerken aufzeichnen, muss erstellt, gespeichert und analysiert werden.

**Verfahren:**

**Anforderungen an die Protokollierung:**

1. Zweck bestimmen, fuer den Protokolle erstellt werden, zu erfassende/protokollierende Daten sowie protokollspezifische Anforderungen angeben.
2. Ereignisse bestimmen, die protokolliert werden muessen (erfolgreiche/abgewiesene Zugriffsversuche, Aenderungen der Systemkonfiguration, Verwendung von Berechtigungen, Dateizugriffsaktivitaeten).
3. Details dokumentieren, die in jedem Protokollereignis enthalten sein sollen (Benutzer-IDs, Systemaktivitaeten, Datum, Uhrzeit, Geraeteidentitaet, Netzwerkadressen).

**Erstellung und Sammlung von Protokollen:**

1. Informationssysteme/Netzwerkgeraete so konfigurieren, dass sie Protokolle entsprechend festgelegten Protokollierungsanforderungen erstellen.
2. Sicherstellen, dass fuer alle relevanten Ereignisse Protokolle erstellt werden.
3. Mechanismen zum Sammeln von Protokollen von verschiedenen Systemen/Geraeten in zentralem Protokollspeicher implementieren.

**Log-Schutz:**

1. Zugriffskontrollen implementieren, um unbefugten Zugriff auf Protokolldaten zu verhindern, nur autorisiertes Personal hat Berechtigung, Protokolle einzusehen/zu aendern.
2. Mechanismen zum Schutz von Protokollen vor Manipulationen/unbefugten Aenderungen aktivieren (kryptografisches Hashing, Nur-Anhang-Dateien, Nur-Lese-Berechtigungen).
3. Regelmaessig Zugriffsprotokolle ueberpruefen, um unbefugte Zugriffsversuche auf Protokolldaten zu erkennen/beseitigen.

**Log-Analyse:**

1. Zeitplan fuer regelmaessige Analyse der Protokolle erstellen, um ungewoehnliche Aktivitaeten/anormales Verhalten zu erkennen.
2. Qualifiziertes Personal mit Analyse von Protokollen beauftragen unter Verwendung geeigneter Tools/Techniken (vorgegebene Regeln, Verhaltensmuster, Trendanalysen, Bedrohungsdaten).
3. Ergebnisse der Protokollanalyse dokumentieren (festgestellte Sicherheitsvorfaelle/potenzielle Bedrohungen).

**Reaktion auf Vorfaelle:**

1. Angemessene Reaktion auf Sicherheitsvorfaelle festlegen, die durch Warnungen aus Protokollanalyse erkannt wurden (Eskalationspfade, Massnahmen zur Risikominderung).
2. Protokolldaten als Beweismittel fuer Untersuchung von Sicherheitsvorfaellen verwenden, Integritaet der Protokolldaten waehrend gesamten Untersuchungsprozesses gewaehrleisten.

**Tools und Technologien zur Protokollverwaltung:**

1. Geeignete Tools fuer Protokollverwaltung einsetzen (Dienstprogramme, Audit-Tools, SIEM-Systeme), um Protokollanalyse/-berichterstattung zu erleichtern.
2. Entsprechende Konfiguration/Wartung von SIEM-Systemen gemaess Best Practices einrichten (Identifizierung geeigneter Protokollquellen, Abstimmung von Regeln, Entwicklung von Anwendungsfaellen).

**Ueberlegungen zur Cloud-Umgebung:**

1. Alle Protokollierungsaktivitaeten muessen gemaess Empfehlungen/bewaehrten Verfahren des Cloud-Anbieters aktiviert werden.
2. Bereitgestellte Analysedienste zur Ueberwachung/Optimierung des Cloud-Betriebs nutzen (z.B. AWS CloudWatch Logs Insights und Azure Monitor Log Analytics).
3. Protokolle aller Cloud-Dienste in Produktion ueberpruefen.

### 4.3 Ueberwachungsaktivitaeten

**Richtlinie:** Unternehmen muss Richtlinien fuer Ueberwachung von Netzwerken, Systemen und Anwendungen aufstellen, um anomales Verhalten und potenzielle Informationssicherheitsvorfaelle zu erkennen. Diese Richtlinie gilt fuer alle Mitarbeiter, Auftragnehmer und Drittnutzer, die Zugang zu Netzen, Systemen und Anwendungen haben. Sie umfasst Ueberwachung des ein-/ausgehenden Netzwerkverkehrs, Zugriffs auf Systeme/Anwendungen, Systemkonfigurationen, Protokolle der Sicherheitstools, Ereignisprotokolle, Ressourcennutzung und Benutzerverhaltens.

**Verfahren:**

**Festlegung der Grundlinie:**

1. Wichtige Leistungsindikatoren (KPIs)/Metriken ermitteln, um Grundlage fuer normales Verhalten von Netzwerken, Systemen und Anwendungen zu schaffen.
2. Historische Daten sammeln (Netzwerkverkehr, Systemauslastung, Benutzerverhalten, Sicherheitsereignisse), um normale Muster zu analysieren/bestimmen.
3. Ermittelte Basislinie als Referenz fuer Ueberwachungsaktivitaeten dokumentieren.

**Ueberwachung der Konfiguration:**

1. Ueberwachungssysteme konfigurieren, um ein-/ausgehenden Netzwerkverkehr, Systemprotokolle, Ereignisprotokolle und Benutzeraktivitaeten zu erfassen/analysieren.
2. Tools fuer kontinuierliche Ueberwachung implementieren, die grosse Datenmengen verarbeiten/Warnmeldungen in Echtzeit liefern koennen.
3. Automatische Generierung von Warnmeldungen auf Grundlage vordefinierter Schwellenwerte einrichten, System so einstellen, dass Fehlalarme minimiert werden.
4. Eskalationsverfahren fuer Warnmeldungen definieren, die sofortige Aufmerksamkeit erfordern, Redundanz bei Warnmeldemechanismen gewaehrleisten.

**Erkennung von Anomalien:**

1. Netzwerkverkehr auf ungewoehnliche Muster ueberwachen (Spitzen im Datenuebertragungsvolumen, Verbindungen zu verdaechtigen IP-Adressen).
2. System-/Anwendungsprotokolle auf unbefugte Zugriffsversuche, Aenderungen an Systemkonfiguration und abnormales Benutzerverhalten ueberwachen.
3. Leistungsmetriken analysieren, um Abweichungen von normaler Ressourcennutzung festzustellen und moegliche Engpaesse/Ueberlastungen zu ermitteln.
4. Spezielle Tools/Techniken zur Erkennung von Malware-Aktivitaeten nutzen (Intrusion Detection Systems (IDS), Antivirus-Loesungen).

**Behandlung und Reaktion auf Alarme:**

1. Mitarbeiter benennen, die fuer Ueberwachung von Warnmeldungen und Untersuchung potenzieller Sicherheitsvorfaelle zustaendig sind.
2. Umgehend auf Warnmeldungen reagieren, indem Art des Vorfalls ueberprueft, Schweregrad eingeschaetzt und geeignete Verfahren zur Reaktion eingeleitet werden.
3. Alle Massnahmen dokumentieren, die waehrend Reaktion auf Vorfall ergriffen wurden (Abhilfemassnahmen, Eskalation an hoehere Stellen).
4. Ergebnisse/Empfehlungen an relevante Interessengruppen kommunizieren (IT-Personal, Sicherheitsteams, Management).

**Fehlalarm-Management:**

1. Verfahren zur Erkennung/Behebung von Fehlalarmen entwickeln, die von Ueberwachungssystemen erzeugt werden.
2. Regelmaessig Warnschwellenwerte/Erkennungsregeln ueberpruefen/verfeinern, um Fehlalarme zu minimieren, ohne Erkennungsfunktionen zu beeintraechtigen.
3. Falsch-positive Vorfaelle dokumentieren, Ursachen analysieren, um Wirksamkeit der Ueberwachungsinstrumente/-prozesse zu verbessern.

**Schulung und Sensibilisierung:**

1. Mit Sicherheitsueberwachung betrautes Personal in Verwendung von Ueberwachungsinstrumenten, Interpretation von Warnmeldungen und Verfahren zur Reaktion auf Zwischenfaelle schulen.
2. Regelmaessig Sensibilisierungsveranstaltungen durchfuehren, um alle Mitarbeiter ueber Bedeutung der Sicherheitsueberwachung und ihre Rolle bei Meldung verdaechtiger Aktivitaeten zu unterrichten.

**Dokumentation und Berichterstattung:**

1. Umfassende Aufzeichnungen ueber alle Ueberwachungsaktivitaeten fuehren (Erstellung von Basisdaten, Erkennung von Anomalien, Behandlung von Warnungen, Reaktion auf Vorfaelle).
2. Regelmaessige Berichte mit Zusammenfassung der Ueberwachungsergebnisse erstellen (bemerkenswerte Ereignisse, Trends, Empfehlungen fuer Verbesserungen).
3. Ueberwachungsdaten in Uebereinstimmung mit Organisationsrichtlinien/rechtlichen Anforderungen fuer Audits/forensische Analysen aufbewahren.

**Ueberpruefung und kontinuierliche Verbesserung:**

1. Regelmaessig Ueberwachungsverfahren, -instrumente und -effektivitaet ueberpruefen, um verbesserungswuerdige Bereiche zu ermitteln.
2. Rueckmeldungen aus Untersuchungen von Vorfaellen, Sicherheitsbewertungen und Audits zur Verbesserung der Ueberwachungsmoeglichkeiten/Reaktionsstrategien einbeziehen.
3. Ueberwachungsunterlagen/-verfahren bei Bedarf aktualisieren, um Aenderungen in Technologie, Bedrohungen oder organisatorischen Anforderungen Rechnung zu tragen.

### 4.4 Web-Filterung

**Richtlinie:** Filterung von Websites mit potenziell boesartigen Inhalten muss implementiert werden, um Angreifbarkeit durch boesartige Inhalte zu verringern, Systeme vor Malware zu schuetzen und Datenabfluss zu verhindern.

**Verfahren:**

**Rollen & Zustaendigkeiten:**

**IT-Abteilung:**

- Verantwortlich fuer Einfuehrung/Aufrechterhaltung von Massnahmen zur Ueberpruefung/Filterung des Webzugriffs.
- Regelmaessige Audits/Bewertungen durchfuehren, um Einhaltung der Richtlinie zu gewaehrleisten.
- Technische Unterstuetzung/Hilfe bei Implementierung der Web-Zugangskontrolle bereitstellen.

**Abteilung Human Resources:**

- Unterstuetzung bei Entwicklung/Verbreitung von Schulungsmaterial im Zusammenhang mit Web-Zugangskontrollrichtlinie.
- Unterstuetzung von Personalschulungsinitiativen zur sicheren/angemessenen Nutzung von Online-Ressourcen.

**Verfahren:**

**Identifizierung der zu blockierenden Website-Kategorien:**

- Mit relevanten Interessengruppen zusammenarbeiten, um Arten von Websites zu ermitteln, die aufgrund organisatorischer Anforderungen/Sicherheitsueberlegunen zu sperren sind.
- Liste bekannter/vermuteter boesartiger Websites, Command-and-Control-Server und Websites mit illegalen Inhalten erstellen.

**Festlegung von Regeln fuer Webzugang:**

- Regeln fuer sichere/angemessene Nutzung von Online-Ressourcen entwickeln (Beschraenkungen fuer Zugriff auf unerwinschte/ungeeignete Websites/webbasierte Anwendungen).
- Regeln dokumentieren, sicherstellen, dass sie gesamtem Personal wirksam vermittelt werden.

**Konfiguration von Web-Filter-Tools:**

- Webfilter-Tools konfigurieren, um Zugriff auf bestimmte Kategorien von Websites zu blockieren (solche mit Funktionen zum Hochladen von Informationen, bekannte boesartige Websites, Plattformen zum Austausch illegaler Inhalte).
- Sicherstellen, dass Web-Filter-Tools regelmaessig aktualisiert werden, um neueste Bedrohungsdaten zu beruecksichtigen.

## 5 Kryptographische Verschluesselung

### 5.1 Einsatz von Kryptographie

**Richtlinie:** Zum Schutz der Vertraulichkeit, Authentizitaet und Integritaet von Informationen ueber sensible Daten muessen Kryptographie und sichere Schluesselverwaltung eingesetzt werden.

**Verfahren:**

**Rollen & Zustaendigkeiten:**

**Abteilung IT-Sicherheit:**

- Verantwortlich fuer Beaufsichtigung der Umsetzung von Massnahmen zur Nutzung von Kryptographie/Schluesselverwaltung.
- Regelmaessige Audits/Bewertungen durchfuehren, um Einhaltung der Richtlinie zu gewaehrleisten.
- Technische Unterstuetzung/Hilfe bei kryptografischen Fragen bereitstellen.

**Beauftragter fuer Schluessel-Management:**

- Organisation muss Person benennen, die fuer Verwaltung kryptografischer Schluessel und damit zusammenhaengender Prozesse zustaendig ist.
- Implementierung einer Schluesselverwaltung gewaehrleisten (Erzeugung, Verteilung, Speicherung, Verwendung, Ersetzung, Vernichtung von kryptografischen Schluesseln).

**Verfahren:**

**Einhaltung der themenspezifischen Kryptographie-Richtlinie:**

- Einhaltung der themenspezifischen Kryptographierichtlinien sicherstellen (Grundsaetze fuer Informationsschutz).
- In Richtlinie beschriebene Anforderungen ueberpruefen/umsetzen.

**Identifizierung der kryptographischen Anforderungen:**

- Erforderliche Schutzniveaus/Klassifizierung von Informationen bestimmen, um geeignete kryptografische Algorithmen auszuwaehlen.
- Anwendungsfaelle identifizieren, in denen Kryptographie benoetigt wird, um Ziele der Informationssicherheit zu erreichen (Vertraulichkeit, Integritaet, Authentifizierung).

**Durchfuehrung von Kryptographiemassnahmen:**

- Kryptografische Loesungen zum Schutz sensibler/kritischer Informationen einsetzen, unabhaengig davon, ob gespeichert/uebertragen.
- Verschluesselung, digitale Signaturen oder Nachrichtenauthentifizierungscodes auf Grundlage ermittelter Anforderungen konfigurieren.
- Einhaltung genehmigter kryptographischer Algorithmen, Verschluesselungsstaerken und Verwendungspraktiken feststellen.

**Ueberwachung und Einhaltung:**

- Regelmaessige Audits von kryptografischen Implementierungen/Schluesselverwaltungspraktiken durchfuehren, um Einhaltung von Richtlinien/Standards zu gewaehrleisten.
- Aktivitaeten der Schluesselverwaltung ueberwachen (Schluesselerzeugung, -verteilung, -verwendung), um Anomalien/Sicherheitsvorfaelle zu erkennen.

**Dokumentation und Berichterstattung:**

- Kryptografische Massnahmen dokumentieren (Konfigurationen, Schluesselverwaltungsverfahren, Pruefprotokolle).
- Regelmaessige Berichte ueber Verwendung von Kryptographie, Schluesselverwaltung und Stand der Einhaltung zur Ueberpruefung durch Management erstellen.

## 6 Datenmaskierung

### 6.1 Datenmaskierung

**Richtlinie:** Datenmaskierungstechniken muessen eingesetzt werden, um Offenlegung sensibler Daten, einschliesslich personenbezogener Informationen, zu begrenzen.

**Verfahren:**

**Identifizierung von sensiblen Daten:**

1. Dateneigentuemer/relevante Stakeholder muessen sensible Daten in Systemen, Datenbanken und Anwendungen im Asset Management identifizieren, mit entsprechenden Kennzeichnungen versehen.
2. Arten von sensiblen Daten bestimmen, die aufgrund Sensibilitaet/potenziellen Auswirkungen einer Offenlegung maskiert werden muessen.

**Auswahl der Datenmaskierungstechniken:**

1. Geeignete Datenmaskierungstechniken auswaehlen (Anonymisierung, Pseudonymisierung, Verschluesselung, Hashing) auf Grundlage ermittelter Anforderungen.
2. Sicherstellen, dass gewaehlte Techniken mit rechtlichen, regulatorischen und vertraglichen Verpflichtungen uebereinstimmen.

**Implementierung der Datenmaskierung:**

1. Datenmaskierungstechniken nur gemaess festgelegten Grundsaetzen/Leitlinien anwenden.
2. Tools/Technologien zur Maskierung sensibler Daten in Datenbanken, Dateien oder anderen Speichersystemen verwenden.

**Pruefung und Validierung:**

1. Tests durchfuehren, um sicherzustellen, dass Datenmaskierungstechniken effektiv angewandt werden und sensible Daten angemessen geschuetzt sind.
2. Maskierungsprozess validieren, um sicherzustellen, dass Originaldaten nicht rekonstruiert/mit Hilfe maskierter Daten neu identifiziert werden koennen.

## 7 Norm-Referenzen

### 7.1 Normreferenzen zu ISO27001:2022

| Kapitel in diesem Dokument | Normkapitel (ISO27001:2022) |
|---|---|
| 1. Einleitung | |
| 2. Systemkonfiguration und deren Schutz | |
| 2.1 Schutz vor Malware | A 8.7 |
| 2.2 Handhabung von technischen Schwachstellen | A 8.8 |
| 2.3 Konfigurationsmanagement | A 8.9 |
| 2.4 Synchronisierung der Systemuhrzeit | A 8.17 |
| 2.5 Verwendung von Hilfsprogramme mit privilegierten Rechten | A 8.18 |
| 2.6 Installation von Software auf betrieblichen Systemen | A 8.19 |
| 3. Netzwerke und Informationsuebertragung | |
| 3.1 Informationsuebertragung | A 5.14 |
| 3.2 Sicherheit der Netze | A 8.20 |
| 3.3 Sicherheit der Netzdienste | A 8.21 |
| 3.4 Trennung von Netzen | A 8.22 |
| 4. Protokollierung, Ueberwachung und Web-Filterung | |
| 4.1 Verhinderung von Datenverlusten | A 8.12 |
| 4.2 Protokollierung | A 8.15 |
| 4.3 Ueberwachungsaktivitaeten | A 8.16 |
| 4.4 Web-Filterung | A 8.23 |
| 5. Kryptographische Verschluesselung | |
| 5.1 Einsatz von Kryptographie | A 8.24 |
| 6. Datenmaskierung | |
| 6.1 Datenmaskierung | A 8.11 |

### 7.2 Referenzen zu TISAX-ISA 6.0

| Kapitel in diesem Dokument | Normkapitel (ISA-TISAX 6.0) |
|---|---|
| 1. Einleitung | |
| 2. Systemkonfiguration und deren Schutz | |
| 2.1 Schutz vor Malware | 5.2.3 |
| 2.2 Handhabung von technischen Schwachstellen | 5.2.5; 5.2.6 |
| 2.2 Konfigurationsmanagement | 1.2.4; 4.1.3; 4.2.1; 5.2.3 |
| 2.3 Synchronisierung der Systemuhrzeit | 5.2.5 |
| 2.4 Verwendung von Hilfsprogramme mit privilegierten Rechten | 4.2.1 |
| 2.5 Installation von Software auf betrieblichen Systemen | 5.2.5 |
| 3. Netzwerke und Informationsuebertragung | |
| 3.1 Informationsuebertragung | 5.1.2 |
| 3.2 Sicherheit der Netze | 5.2.7 |
| 3.3 Sicherheit der Netzdienste | 3.1.1; 5.3.2 |
| 3.4 Trennung von Netzen | 5.2.7 |
| 4. Protokollierung, Ueberwachung und Web-Filterung | |
| 4.1 Verhinderung von Datenverlusten | 5.1.2 |
| 4.2 Protokollierung | 5.2.4; 5.3.2 |
| 4.3 Ueberwachungsaktivitaeten | 5.2.4 |
| 4.4 Web-Filterung | 1.3.3; 1.3.4 |
| 5. Kryptographische Verschluesselung | |
| 5.1 Einsatz von Kryptographie | 5.1.1 |
| 6. Datenmaskierung | |
| 6.1 Datenmaskierung | 5.3.1 |

---

**Extrakt-Ende**

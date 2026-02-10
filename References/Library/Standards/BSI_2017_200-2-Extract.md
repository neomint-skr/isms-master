# BSI-Standard 200-2: IT-Grundschutz-Methodik Extrakt

> Quelle: BSI-Standard 200-2 IT-Grundschutz-Methodik, Version 1.0, Oktober 2017.
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch. Bei Zweifeln gilt das Original.
> PDFs bleiben als Originale erhalten (Audit-Nachweis).
> Citation Key: BSI17

## 1 Einleitung

### 1.1 Versionshistorie

| Stand | Version | Aenderungen |
|---|---|---|
| Maerz 2017 | CD 1.0 | Neukonzeption basierend auf BSI-Standard 100-2 |
| Oktober 2017 | Version 1.0 | - Im Rahmen der Modernisierung des IT-Grundschutzes wurden neben der Standard-Absicherung die Vorgehensweisen zur Basis-Absicherung und Kern-Absicherung eingefuegt<br>- Erweiterung um Virtualisierung, Cloud-, ICS- und IoT-Absicherung<br>- Klarstellung der Rollen und Aufgaben von IT-SiBe und ISB<br>- Anpassungen an Fortschreibung der ISO-Standards<br>- Informationsklassifizierung staerker herausgearbeitet<br>- Informationsfluss im Informationssicherheitsprozess ueberarbeitet, Angleichung mit 100-4<br>- Beispiel BoV durch RECPLAST ausgetauscht<br>- Einarbeitung von Anwenderkommentaren<br>- im Wesentlichen sprachliche Praezisierungen<br>- Aenderung des Begriffs "Aktiva" in "Assets" |

### 1.2 Zielsetzung

BSI-Standard 200-2 stellt eine Methodik fuer effektives Management von Informationssicherheit zur Verfuegung, anpassbar an Institutionen verschiedenster Art und Groesse. Realisierung ueber drei Vorgehensweisen: **Standard-Absicherung**, **Basis-Absicherung** und **Kern-Absicherung**.

Die Methodik baut auf BSI-Standard 200-1 (Managementsysteme fuer Informationssicherheit, ISMS) und ISO 27001 auf. Sie zeigt, wie der im BSI-Standard 200-1 vorgestellte Rahmen fuer ein ISMS durch IT-Grundschutz konkretisiert wird.

**IT-Grundschutz** ist ein etablierter Standard zum Aufbau und zur Aufrechterhaltung eines angemessenen Schutzes aller Informationen einer Institution. Die Methodik bietet:
- Anleitungen fuer den Aufbau eines ISMS
- Umfassende Basis fuer die Risikoanalyse
- Ueberpruefung des vorhandenen Sicherheitsniveaus
- Implementierung eines angemessenen Grades an Informationssicherheit

**Ziele:** Aufwand im Informationssicherheitsprozess reduzieren durch Buendelung bekannter Ansaetze und Methoden. Das IT-Grundschutz-Kompendium veroeffentlicht Bausteine mit konkreten Sicherheitsanforderungen fuer typische Geschaeftsprozesse, Anwendungen, Systeme, Kommunikationsverbindungen und Raeume.

IT-Grundschutz betrachtet alle Bereiche einer Institution, einschliesslich Produktion und Fertigung mit Industrial Control Systems (ICS) sowie Komponenten aus dem Internet of Things (IoT).

**Sicherheitsniveaus:**
- **Standard-Absicherung:** Erreicht ein Sicherheitsniveau fuer normalen Schutzbedarf, angemessen und ausreichend zum Schutz geschaeftsrelevanter Informationen
- **Basis-Absicherung:** Liegt deutlich unter Standard-Absicherung, bietet aber gute Grundlage fuer ISMS-Einsteiger
- **Kern-Absicherung:** Ermoeglicht vorrangige Absicherung besonders schuetzenswerter Informationen und Geschaeftsprozesse

Die Methodik wird regelmaessig erweitert und an aktuelle Entwicklungen angepasst (neue Prozesse, Normen, Regularien, Digitalisierung). Enger Erfahrungsaustausch mit Anwendern des IT-Grundschutzes sorgt fuer stetige Integration neuer Anforderungen und Aspekte.

### 1.3 Adressatenkreis

BSI-Standard 200-2 richtet sich primär an:
- Sicherheitsverantwortliche, -beauftragte, -experten, -berater
- Alle mit Management von Informationssicherheit Betrauten
- IT- und ICS-Verantwortliche
- Fuehrungskraefte und Projektmanager

IT-Grundschutz bietet Institutionen jeder Groesse und Sparte eine kosteneffektive und zielfuehrende Methode zum Aufbau und zur Umsetzung der angemessenen Informationssicherheit. "Institution" bezeichnet Unternehmen, Behoerden und sonstige oeffentliche oder private Organisationen.

**Voraussetzungen:** Informations- und Kommunikationstechnik sowie vorhandene industrielle Steuerungs- und Automatisierungstechnik werden von Fachpersonal administriert (IT-Betrieb mit klar definierten Rollen). Spektrum: einzelner Administrator bis hin zu einer oder mehreren IT-Abteilungen.

> NOTE: Alle Empfehlungen sollten im Kontext der jeweiligen Institution betrachtet und an die jeweiligen Rahmenbedingungen angepasst werden.

### 1.4 Anwendungsweise

BSI-Standard 200-1 beschreibt Methoden zur generellen Initiierung und Steuerung von Informationssicherheit. BSI-Standard 200-2 bietet konkrete Hilfestellungen zur schrittweisen Einfuehrung eines ISMS: Fokus auf einzelne Phasen des Prozesses sowie bewaehrte Best-Practice-Loesungen.

Die IT-Grundschutz-Methodik bietet ein umfangreiches Geruest fuer ein ISMS und ist auf die individuellen Rahmenbedingungen einer Institution anzupassen. IT-Grundschutz-Methodik und IT-Grundschutz-Kompendium liefern zentrale Hinweise und praktische Umsetzungshilfen.

**Zertifizierung:** Institutionen koennen Umsetzung von IT-Grundschutz und Qualitaet des eigenen ISMS mittels ISO 27001-Zertifikat auf Basis von IT-Grundschutz nachweisen. Zertifikat dient anderen Institutionen als Kriterium zur Information ueber den Reifegrad eines ISMS. Kann auch als Sicherheitsanforderung fuer Kooperationspartner verwendet werden.

Auch bei Anwendung einer anderen Methodik als Grundlage fuer das ISMS ist es moeglich, vom IT-Grundschutz zu profitieren (Loesungsansaetze fuer einzelne Aufgabenstellungen, Konzepterstellung, Revisionen, Zertifizierungen). Einzelne Bausteine, Umsetzungshinweise oder Hilfsmittel bilden hilfreiche Grundlagen fuer Sicherheitsmanagement.

### 1.5 Aufbau des BSI-Standards 200-2

| Kapitel | Inhalt |
|---|---|
| 2 | Wichtigste Schritte fuer Einfuehrung eines ISMS und Erstellung einer Sicherheitskonzeption |
| 3 | Initiierung des Informationssicherheitsprozesses, Hintergrundinformationen fuer Entscheidung ueber geeignete Vorgehensweise, Erstellung einer Leitlinie zur Informationssicherheit |
| 4 | Aufbau geeigneter Organisationsstrukturen, Einrichtung funktionierenden Sicherheitsmanagements |
| 5 | Erstellung von Dokumentationen im Sicherheitsprozess |
| 6 | Vorgehensweise Basis-Absicherung: Ziel ist breite, grundlegende Erst-Absicherung ueber alle Geschaeftsprozesse/Fachverfahren. Festlegung Geltungsbereich, Auswahl und Zuordnung IT-Grundschutz-Bausteine, Reihenfolge der Anwendung, IT-Grundschutz-Check, Ableitung konkreter Massnahmen, Umsetzung, Auswahl nachfolgender Vorgehensweise |
| 7 | Vorgehensweise Kern-Absicherung: Vorgezogener Schutz der essenziellen Assets. Orientierung an Schritten der Standard-Absicherung |
| 8 | Vorgehensweise Standard-Absicherung: Erhebung Grundinformationen ueber Informationsverbund, Gruppenbildung, Schutzbedarfsfeststellung ausgehend von Geschaeftsprozessen, Modellierung nach IT-Grundschutz (Auswahl Bausteine/Anforderungen), Ableitung Sicherheitsmassnahmen, Integration vorhandener und zusaetzlicher Massnahmen (z.B. aus Risikoanalyse nach BSI-Standard 200-3) |
| 9 | Umsetzung der identifizierten und konsolidierten Sicherheitsmassnahmen |
| 10 | Aufrechterhaltung der Informationssicherheit (Kernaufgabe ISMS) |
| 11 | Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz |
| 12 Anhang | Schadensszenarien, Literaturverzeichnis |

---

## 2 Informationssicherheitsmanagement mit IT-Grundschutz

### 2.1 Ganzheitliches Konzept

IT-Grundschutz verfolgt einen ganzheitlichen Ansatz zur Gewaehrleistung von Informationssicherheit. Sicherheit wird nicht isoliert fuer einzelne IT-Systeme betrachtet, sondern im Gesamtkontext der Geschaeftsprozesse und Fachaufgaben einer Institution.

### 2.2 Managementsystem fuer die Informationssicherheit

Ein Managementsystem fuer Informationssicherheit (ISMS) ist das geplante und organisierte Vorgehen, um ein angemessenes Sicherheitsniveau fuer Informationssicherheit zu erzielen und aufrechtzuerhalten.

Ein ISMS umfasst:
- Organisationsstrukturen
- Regelungen
- Prozesse
- Ressourcen

Ziel ist die systematische Planung, Steuerung, Kontrolle und Verbesserung der Informationssicherheit.

BSI-Standard 200-1 definiert Anforderungen an ein ISMS und orientiert sich dabei eng an ISO 27001. BSI-Standard 200-2 konkretisiert diese Anforderungen durch die IT-Grundschutz-Methodik.

### 2.3 Verantwortung fuer die Informationssicherheit

Informationssicherheit ist Managementaufgabe. Die Leitungsebene muss:
- Verantwortung uebernehmen
- Ressourcen bereitstellen
- Rahmenbedingungen schaffen
- Sicherheitsprozess initiieren und aufrechterhalten

Informationssicherheitsbeauftragte(r) (ISB) koordiniert den Sicherheitsprozess und berichtet der Leitungsebene. Alle Mitarbeiter tragen Verantwortung in ihrem Aufgabenbereich.

### 2.4 Elemente des IT-Grundschutzes

IT-Grundschutz besteht aus mehreren Elementen, die zusammen ein umfassendes Rahmenwerk bilden:

**BSI-Standards zur IT-Grundschutz-Methodik:**
- **BSI-Standard 200-1:** Managementsysteme fuer Informationssicherheit (ISMS) — Grundlagen eines ISMS, orientiert an ISO 27001
- **BSI-Standard 200-2:** IT-Grundschutz-Methodik — Detaillierte Beschreibung der Vorgehensweise zur Einfuehrung und Aufrechterhaltung eines ISMS mit IT-Grundschutz
- **BSI-Standard 200-3:** Risikoanalyse auf Basis von IT-Grundschutz — Methodik zur Durchfuehrung einer Risikoanalyse fuer Bereiche mit erhoehtem Schutzbedarf oder nicht durch IT-Grundschutz abgedeckte Bereiche

**IT-Grundschutz-Kompendium:**
Enthaelt Bausteine mit Sicherheitsanforderungen fuer typische Geschaeftsprozesse, Anwendungen, IT-Systeme, ICS-Komponenten, Netzkomponenten und Raeume. Bausteine sind in Schichten organisiert:

| Schicht | Kuerzel | Inhalt |
|---|---|---|
| ISMS | ISMS | Uebergreifende Aspekte des Informationssicherheitsmanagements |
| Organisation und Personal | ORP | Organisatorische und personalrelevante Aspekte |
| Konzeption und Vorgehensweisen | CON | Konzepte, Strategien, Leitlinien, Compliance |
| Betrieb | OPS | Betriebsaspekte wie Patch- und Change-Management, Datensicherung |
| Detektion und Reaktion | DER | Incident Management, Forensik, Revision |
| Infrastruktur | INF | Bauliche, technische und organisatorische Infrastruktur (Gebaeude, Raeume, Verkabelung) |
| Netze und Kommunikation | NET | Netzkomponenten und Kommunikationsverbindungen |
| IT-Systeme | SYS | Server, Clients, Virtualisierung, Container |
| Anwendungen | APP | Software-Anwendungen (E-Mail, Webanwendungen, Datenbanken) |
| Industrielle IT | IND | Industrial Control Systems (ICS), Operational Technology (OT) |

**IT-Grundschutz-Profile:**
Vorkonfigurierte Zusammenstellungen von Bausteinen fuer spezifische Einsatzszenarien oder Branchen.

**Hilfsmittel und Tools:**
- Gefaehrdungskataloge (historisch, in aktuellen Bausteinen integriert)
- GSTOOL: Software-Tool zur Unterstuetzung bei der Umsetzung von IT-Grundschutz
- Checklisten und Mustervorlagen

### 2.5 Thematische Abgrenzung

IT-Grundschutz deckt ein breites Spektrum von Sicherheitsaspekten ab, fokussiert jedoch auf Informationssicherheit. Angrenzende Bereiche:
- **Datenschutz:** IT-Grundschutz beruecksichtigt datenschutzrelevante Anforderungen, ersetzt jedoch keine Datenschutzkonzeption
- **Notfallmanagement:** IT-Grundschutz enthaelt Anforderungen zur Notfallvorsorge, BSI-Standard 200-4 behandelt Notfallmanagement umfassend
- **Business Continuity Management (BCM):** Ueberschneidungen mit IT-Grundschutz, jedoch breiterer Fokus auf Geschaeftskontinuitaet

IT-Grundschutz sollte mit diesen Bereichen koordiniert werden.

### 2.6 Uebersicht ueber den Informationssicherheitsprozess

Der Informationssicherheitsprozess nach IT-Grundschutz folgt dem PDCA-Zyklus (Plan-Do-Check-Act) und besteht aus folgenden Hauptphasen:

**1. Initiierung des Sicherheitsprozesses (Kapitel 3):**
- Uebernahme von Verantwortung durch Leitungsebene
- Konzeption und Planung des Sicherheitsprozesses
- Ermittlung von Rahmenbedingungen
- Formulierung von Informationssicherheitszielen
- Bestimmung des angemessenen Sicherheitsniveaus
- Ersterfassung der Prozesse, Anwendungen und IT-Systeme
- Entscheidung fuer Vorgehensweise (Basis-, Kern- oder Standard-Absicherung)
- Festlegung des Geltungsbereichs
- Erstellung einer Leitlinie zur Informationssicherheit

**2. Organisation des Sicherheitsprozesses (Kapitel 4):**
- Integration der Informationssicherheit in organisationsweite Ablaeufe
- Aufbau der Informationssicherheitsorganisation
- Definition von Aufgaben, Verantwortungen und Kompetenzen
- Benennung eines Informationssicherheitsbeauftragten (ISB)
- Bildung eines IS-Management-Teams
- Einbindung weiterer Rollen (Bereichs-ISB, ICS-ISB, Datenschutzbeauftragter)

**3. Erstellung einer Sicherheitskonzeption:**

Je nach gewaehlter Vorgehensweise:

*Basis-Absicherung (Kapitel 6):*
1. Festlegung Geltungsbereich
2. Auswahl und Priorisierung: Modellierung nach IT-Grundschutz, Zuordnung von Bausteinen, Ermittlung konkreter Massnahmen aus Basis-Anforderungen
3. IT-Grundschutz-Check fuer Basis-Absicherung
4. Realisierung
5. Auswahl einer folgenden Vorgehensweise

*Kern-Absicherung (Kapitel 7):*
1. Festlegung Geltungsbereich
2. Identifikation und Festlegung der kritischen Assets ("Kronjuwelen")
3. Strukturanalyse
4. Schutzbedarfsfeststellung
5. Modellierung: Auswahl und Anpassung von Anforderungen
6. IT-Grundschutz-Check
7. Risikoanalyse und weiterfuehrende Sicherheitsmassnahmen
8. Umsetzung und weitere Schritte

*Standard-Absicherung (Kapitel 8):*
1. Strukturanalyse: Erfassung Geschaeftsprozesse, Anwendungen, IT-Systeme, ICS-Systeme, Netzkomponenten, Raeume
2. Schutzbedarfsfeststellung: Definition Schutzbedarfskategorien, Feststellung fuer alle erfassten Assets
3. Modellierung: Auswahl IT-Grundschutz-Bausteine, Zuordnung zu Zielobjekten, Anpassung der Anforderungen
4. IT-Grundschutz-Check: Soll-Ist-Vergleich
5. Risikoanalyse: Fuer Bereiche mit erhoehtem Schutzbedarf oder nicht abgedeckte Komponenten (nach BSI-Standard 200-3)

**4. Umsetzung der Sicherheitskonzeption (Kapitel 9):**
- Sichtung der Untersuchungsergebnisse
- Kosten- und Aufwandsschaetzung
- Festlegung der Umsetzungsreihenfolge
- Festlegung von Aufgaben und Verantwortung
- Realisierungsbegleitende Massnahmen

**5. Aufrechterhaltung und kontinuierliche Verbesserung (Kapitel 10):**
- Ueberpruefung des Informationssicherheitsprozesses auf allen Ebenen
- Ueberpruefung anhand von Kennzahlen
- Bewertung des ISMS mittels Reifegradmodell
- Ueberpruefung der Umsetzung der Sicherheitsmassnahmen
- Pruefung der Eignung der Informationssicherheitsstrategie
- Uebernahme der Ergebnisse in den Informationssicherheitsprozess

**6. Zertifizierung (Kapitel 11, optional):**
- ISO 27001-Zertifizierung auf Basis von IT-Grundschutz

> NOTE: Der Prozess ist iterativ. Nach Umsetzung und Aufrechterhaltung beginnt der Zyklus erneut (kontinuierlicher Verbesserungsprozess).

### 2.7 Anwendung des IT-Grundschutz-Kompendiums

Das IT-Grundschutz-Kompendium ist zentrale Quelle fuer Sicherheitsanforderungen. Es enthaelt Bausteine, die auf Zielobjekte (Geschaeftsprozesse, Anwendungen, IT-Systeme, Netze, Raeume) angewendet werden.

**Struktur eines Bausteins:**
- **Beschreibung:** Einfuehrung in das Thema, Erlaeuterung des Geltungsbereichs
- **Gefaehrdungslage:** Typische Gefaehrdungen fuer das Zielobjekt
- **Anforderungen:** Konkrete Sicherheitsanforderungen in drei Priorisierungsstufen:
  - **Basis-Anforderungen:** Muessen in jedem Fall umgesetzt werden (Mindestschutz)
  - **Standard-Anforderungen:** Sollten umgesetzt werden (angemessenes Schutzniveau)
  - **Anforderungen bei erhoehtem Schutzbedarf:** Fuer Assets mit hohem oder sehr hohem Schutzbedarf

**Anwendung:**
1. Zielobjekte identifizieren (Geschaeftsprozesse, Anwendungen, Systeme, Netze, Raeume)
2. Passende Bausteine auswaehlen (Modellierung)
3. Bausteine auf Zielobjekte zuordnen
4. Anforderungen an spezifische Rahmenbedingungen anpassen
5. Aus Anforderungen konkrete Massnahmen ableiten
6. Massnahmen umsetzen und dokumentieren

**Priorisierung bei Vorgehensweisen:**
- **Basis-Absicherung:** Nur Basis-Anforderungen
- **Standard-Absicherung:** Basis- und Standard-Anforderungen
- **Kern-Absicherung:** Je nach Schutzbedarf der kritischen Assets Basis-, Standard- oder Anforderungen bei erhoehtem Schutzbedarf

> NOTE: Bausteine sind als Best-Practice-Empfehlungen zu verstehen. Anpassungen an spezifische Rahmenbedingungen sind moeglich und notwendig. Abweichungen muessen begruendet und dokumentiert werden.

---

## 3 Initiierung des Sicherheitsprozesses

### 3.1 Uebernahme von Verantwortung durch die Leitungsebene

Informationssicherheit ist Managementaufgabe. Die Leitungsebene (Geschaeftsfuehrung, Vorstand, Behoerdenleitung) traegt die Gesamtverantwortung fuer die Informationssicherheit.

**Aufgaben der Leitungsebene:**
- Initiierung des Sicherheitsprozesses
- Bereitstellung notwendiger Ressourcen (Personal, Budget, Zeit)
- Verabschiedung der Leitlinie zur Informationssicherheit
- Benennung eines Informationssicherheitsbeauftragten (ISB)
- Regelmaessige Information ueber den Stand der Informationssicherheit
- Treffen grundsaetzlicher Entscheidungen zu Sicherheitsfragen
- Vorbildfunktion bei Einhaltung von Sicherheitsvorgaben

Die Leitungsebene muss den Sicherheitsprozess aktiv unterstuetzen und die Bedeutung von Informationssicherheit fuer die Erreichung der Geschaeftsziele kommunizieren.

> NOTE: Ohne Rueckhalt der Leitungsebene kann ein ISMS nicht erfolgreich sein. Commitment der Leitungsebene ist kritischer Erfolgsfaktor.

### 3.2 Konzeption und Planung des Sicherheitsprozesses

Vor Beginn der eigentlichen Sicherheitsarbeit muss der Sicherheitsprozess konzipiert und geplant werden.

#### 3.2.1 Ermittlung von Rahmenbedingungen

Folgende Rahmenbedingungen muessen ermittelt und analysiert werden:

**Geschaeftliche Rahmenbedingungen:**
- Geschaeftsziele und Geschaeftsstrategie
- Geschaeftsprozesse und deren Kritikalitaet
- Abhaengigkeiten zwischen Geschaeftsprozessen
- Schnittstellen zu Partnern, Kunden, Dienstleistern

**Organisatorische Rahmenbedingungen:**
- Organisationsstruktur
- Standorte
- Bestehende Organisationseinheiten mit Sicherheitsbezug (Datenschutz, Compliance, Revision)
- Vorhandene Managementsysteme (Qualitaet, Umwelt, BCM)

**Technische Rahmenbedingungen:**
- IT-Infrastruktur (Systeme, Netze, Anwendungen)
- ICS/OT-Umgebung
- Cloud-Nutzung
- Mobile Arbeitsplaetze
- Technologie-Roadmap

**Rechtliche und regulatorische Rahmenbedingungen:**
- Gesetzliche Anforderungen (z.B. DSGVO, IT-Sicherheitsgesetz, branchenspezifische Vorgaben)
- Vertragliche Verpflichtungen
- Normative Vorgaben (z.B. ISO 27001, branchenspezifische Standards)

**Personelle Rahmenbedingungen:**
- Anzahl Mitarbeiter
- Qualifikationen und Sicherheitsbewusstsein
- Verfuegbarkeit von Fachpersonal
- Fluktuation

**Finanzielle Rahmenbedingungen:**
- Verfuegbares Budget fuer Informationssicherheit
- Investitionsmoeglichkeiten
- Betriebskosten

Die Ermittlung der Rahmenbedingungen dient als Basis fuer realistische Planung und Zielsetzung.

#### 3.2.2 Formulierung von allgemeinen Informationssicherheitszielen

Basierend auf den Rahmenbedingungen muessen allgemeine Informationssicherheitsziele formuliert werden. Diese:
- Leiten sich aus Geschaeftszielen ab
- Sind messbar oder ueberpruefbar
- Sind realistisch und erreichbar
- Sind zeitlich terminiert
- Sind von der Leitungsebene verabschiedet

**Beispiele fuer Informationssicherheitsziele:**
- "Schutz der Vertraulichkeit, Integritaet und Verfuegbarkeit geschaeftskritischer Informationen"
- "Einhaltung gesetzlicher und vertraglicher Anforderungen an Informationssicherheit"
- "Minimierung von Sicherheitsvorfaellen um X% innerhalb von Y Monaten"
- "Aufbau eines ISMS nach ISO 27001 bis [Datum]"
- "Erreichung eines Basis-Schutzniveaus nach IT-Grundschutz fuer alle Geschaeftsprozesse bis [Datum]"

Informationssicherheitsziele werden in der Leitlinie zur Informationssicherheit verankert und muessen regelmaessig ueberprueft und aktualisiert werden.

#### 3.2.3 Bestimmung des angemessenen Sicherheitsniveaus der Geschaeftsprozesse

Das angemessene Sicherheitsniveau haengt ab von:
- **Kritikalitaet der Geschaeftsprozesse:** Welche Auswirkungen hat ein Ausfall oder eine Kompromittierung?
- **Schutzbedarf der verarbeiteten Informationen:** Vertraulichkeit, Integritaet, Verfuegbarkeit
- **Rechtlichen Anforderungen:** Gesetzliche oder vertragliche Vorgaben
- **Risikobereitschaft der Institution:** Welche Risiken sind akzeptabel?

**Vorgehensweise:**
1. Identifikation aller Geschaeftsprozesse
2. Bewertung der Kritikalitaet jedes Prozesses
3. Bewertung des Schutzbedarfs der verarbeiteten Informationen (siehe 8.2)
4. Ableitung des erforderlichen Sicherheitsniveaus

Das Sicherheitsniveau kann prozessspezifisch unterschiedlich sein. Bei der Wahl der Vorgehensweise (Basis-, Kern-, Standard-Absicherung) sollte das durchschnittliche erforderliche Sicherheitsniveau beruecksichtigt werden.

> NOTE: Eine detaillierte Schutzbedarfsfeststellung erfolgt spaeter im Rahmen der Kern- oder Standard-Absicherung. Hier geht es um eine initiale grobe Einschaetzung zur Planung des Sicherheitsprozesses.

#### 3.2.4 Ersterfassung der Prozesse, Anwendungen und IT-Systeme

Fuer die Planung des Sicherheitsprozesses ist eine erste Uebersicht ueber den zu schuetzenden Informationsverbund notwendig:

**Zu erfassen:**
- **Geschaeftsprozesse:** Kernprozesse, Unterstuetzungsprozesse, Managementprozesse
- **Anwendungen:** Fachverfahren, Standard-Software, Individualsoftware
- **IT-Systeme:** Server, Clients, mobile Geraete, virtualisierte Systeme
- **ICS/OT-Komponenten:** Steuerungssysteme, Sensoren, Aktoren
- **Netzkomponenten:** Router, Switches, Firewalls, WLAN-Access-Points
- **Standorte und Raeume:** Rechenzentren, Serverraeume, Bueros

Die Ersterfassung muss nicht vollstaendig oder detailliert sein. Ziel ist ein Gesamtueberblick zur:
- Abschaetzung des Aufwands fuer den Sicherheitsprozess
- Festlegung des Geltungsbereichs
- Entscheidung ueber die Vorgehensweise

Eine detaillierte Strukturanalyse erfolgt spaeter bei Standard- oder Kern-Absicherung (siehe Kapitel 7.4 bzw. 8.1).

**Hilfsmittel:**
- Vorhandene IT-Inventarlisten
- Netzplaene
- Prozessdokumentation
- Anwendungsverzeichnisse
- Interviews mit Fachverantwortlichen

Die Ersterfassung sollte dokumentiert werden und Basis fuer die weitere Planung sein.

### 3.3 Entscheidung fuer Vorgehensweise

Nach Ermittlung der Rahmenbedingungen, Formulierung der Sicherheitsziele und Ersterfassung muss die Leitungsebene eine Entscheidung ueber die Vorgehensweise treffen.

IT-Grundschutz bietet drei Vorgehensweisen:

#### 3.3.1 Basis-Absicherung

**Ziel:** Breite, grundlegende Erst-Absicherung ueber alle Geschaeftsprozesse/Fachverfahren

**Eignung:**
- ISMS-Einsteiger
- Institutionen mit begrenzten Ressourcen
- Als erster Schritt vor Standard-Absicherung
- Wenn schnell ein Mindestschutzniveau erreicht werden soll

**Vorgehen:**
- Anwendung nur der Basis-Anforderungen aus IT-Grundschutz-Bausteinen
- Keine detaillierte Strukturanalyse oder Schutzbedarfsfeststellung erforderlich
- Fokus auf schnelle Umsetzung wesentlicher Anforderungen

**Ergebnis:**
- Mindestschutzniveau
- Grundlage fuer weitere Absicherung

> NOTE: Basis-Absicherung erreicht bewusst NICHT das angemessene Schutzniveau der Standard-Absicherung. Sie sollte als Einstieg verstanden werden, dem weitere Schritte folgen.

#### 3.3.2 Kern-Absicherung

**Ziel:** Vorgezogener Schutz der essenziellen Assets ("Kronjuwelen")

**Eignung:**
- Institutionen mit klar identifizierbaren kritischen Assets
- Wenn schnell ein hohes Schutzniveau fuer besonders wichtige Bereiche erreicht werden soll
- Als Ergaenzung zur Basis-Absicherung
- Bei begrenzten Ressourcen, die fokussiert eingesetzt werden sollen

**Vorgehen:**
- Identifikation der kritischen Assets (Kronjuwelen)
- Strukturanalyse und Schutzbedarfsfeststellung fuer diese Assets
- Anwendung aller relevanten Anforderungen (Basis, Standard, ggf. erhoeht) fuer kritische Assets
- Basisabsicherung fuer restliche Bereiche

**Ergebnis:**
- Hohes Schutzniveau fuer kritische Assets
- Fokussierter Ressourceneinsatz

#### 3.3.3 Standard-Absicherung

**Ziel:** Angemessenes Schutzniveau fuer normalen Schutzbedarf

**Eignung:**
- Institutionen, die ein umfassendes ISMS aufbauen wollen
- Wenn ISO 27001-Zertifizierung angestrebt wird
- Bei ausreichenden Ressourcen
- Fuer alle Geschaeftsprozesse mit normalem oder erhoehtem Schutzbedarf

**Vorgehen:**
- Vollstaendige Strukturanalyse
- Detaillierte Schutzbedarfsfeststellung
- Modellierung nach IT-Grundschutz (Basis- und Standard-Anforderungen)
- IT-Grundschutz-Check
- Risikoanalyse fuer Bereiche mit erhoehtem Schutzbedarf

**Ergebnis:**
- Angemessenes, umfassendes Schutzniveau
- Zertifizierungsfaehiges ISMS

#### 3.3.4 Festlegung des Geltungsbereichs

Der Geltungsbereich (Scope) definiert, welche Bereiche der Institution vom Sicherheitsprozess erfasst werden.

**Zu beruecksichtigen:**
- **Organisatorische Grenzen:** Welche Organisationseinheiten, Standorte, Abteilungen?
- **Fachliche Grenzen:** Welche Geschaeftsprozesse, Fachverfahren?
- **Technische Grenzen:** Welche IT-Systeme, Netze, Anwendungen?
- **Raeumliche Grenzen:** Welche Gebaeude, Standorte?

**Empfehlungen:**
- Geltungsbereich sollte sinnvoll abgrenzbar sein
- Bei Erstumsetzung: Begrenzter Geltungsbereich, spaeter Erweiterung
- Bei Zertifizierung: Geltungsbereich muss alle Bereiche umfassen, die fuer das Zertifikat relevant sind
- Geltungsbereich muss eindeutig dokumentiert werden
- Ausschluesse muessen begruendet werden

Der Geltungsbereich wird in der Leitlinie zur Informationssicherheit festgelegt und ist Teil der Managemententscheidung.

> NOTE: Der Geltungsbereich sollte pragmatisch festgelegt werden. Ein zu grosser Geltungsbereich kann die Umsetzung erschweren. Eine schrittweise Erweiterung ist moeglich und sinnvoll.

#### 3.3.5 Managemententscheidung

Die Leitungsebene muss folgende Entscheidungen treffen und dokumentieren:

| Entscheidung | Inhalt |
|---|---|
| Vorgehensweise | Basis-, Kern- oder Standard-Absicherung |
| Geltungsbereich | Welche Bereiche werden erfasst? |
| Ressourcen | Personal, Budget, Zeit |
| Zeitplan | Meilensteine und Zieltermine |
| Verantwortlichkeiten | Wer ist verantwortlich? (ISB benennen) |
| Rahmenbedingungen | Besondere Vorgaben oder Einschraenkungen |

Die Managemententscheidung sollte schriftlich dokumentiert werden (z.B. als Managementbeschluss oder Teil der Leitlinie zur Informationssicherheit).

### 3.4 Erstellung einer Leitlinie zur Informationssicherheit

Die Leitlinie zur Informationssicherheit (auch Sicherheitsleitlinie oder IS-Leitlinie) ist das zentrale Dokument zur Verankerung der Informationssicherheit in der Institution. Sie wird von der Leitungsebene verabschiedet und ist fuer alle Mitarbeiter verbindlich.

#### 3.4.1 Verantwortung der Behoerden- bzw. Unternehmensleitung fuer die Sicherheitsleitlinie

Die Leitungsebene:
- Traegt die Verantwortung fuer Erstellung und Verabschiedung
- Muss den Inhalt kennen und mittragen
- Kommuniziert die Bedeutung der Leitlinie
- Ist Vorbild bei der Einhaltung

Die Leitlinie darf nicht als rein formales Dokument verstanden werden, sondern muss gelebte Praxis sein.

#### 3.4.2 Einberufung einer Entwicklungsgruppe fuer die Sicherheitsleitlinie

Fuer die Erstellung sollte eine Arbeitsgruppe einberufen werden:
- Informationssicherheitsbeauftragter (Koordination)
- Vertreter der Leitungsebene
- Vertreter relevanter Fachbereiche
- Ggf. Datenschutzbeauftragter, Compliance, Revision, Personalvertretung

Die Gruppe entwickelt einen Entwurf, der der Leitungsebene zur Verabschiedung vorgelegt wird.

#### 3.4.3 Festlegung des Geltungsbereichs und Inhalt der Sicherheitsleitlinie

Die Leitlinie sollte folgende Inhalte umfassen:

**Pflichtinhalte:**
- **Geltungsbereich:** Welche Bereiche der Institution sind erfasst?
- **Informationssicherheitsziele:** Allgemeine Ziele (siehe 3.2.2)
- **Bedeutung der Informationssicherheit:** Begruendung, warum IS wichtig ist
- **Verantwortung der Leitungsebene:** Commitment der Leitungsebene
- **Organisationsstruktur:** IS-Organisation, Rollen (ISB etc.)
- **Vorgehensweise:** Welche Methodik (IT-Grundschutz, welche Vorgehensweise)?
- **Verantwortung der Mitarbeiter:** Pflichten aller Mitarbeiter
- **Umgang mit Sicherheitsvorfaellen:** Meldewege
- **Sanktionen bei Verstoessen:** Konsequenzen bei Nichteinhaltung

**Optionale Inhalte:**
- Bezug zu anderen Managementsystemen (Qualitaet, BCM)
- Bezug zu rechtlichen/regulatorischen Anforderungen
- Schnittstellen zu Datenschutz
- Verweise auf weitere Dokumente (Policies, Richtlinien)

**Eigenschaften der Leitlinie:**
- Kompakt (idealerweise 2-5 Seiten)
- Verstaendlich fuer alle Mitarbeiter
- Langfristig gueltig (nicht zu detailliert)
- Regelmaessig zu ueberpruefen

#### 3.4.4 Bekanntgabe der Sicherheitsleitlinie

Nach Verabschiedung durch die Leitungsebene muss die Leitlinie allen Mitarbeitern bekannt gemacht werden:
- Veroeffentlichung im Intranet
- Information in Mitarbeiterversammlungen
- Integration in Onboarding neuer Mitarbeiter
- Regelmaessige Erinnerung (z.B. in Security Awareness)

Mitarbeiter sollten bestaetigen, dass sie die Leitlinie zur Kenntnis genommen haben.

#### 3.4.5 Aktualisierung der Sicherheitsleitlinie

Die Leitlinie muss regelmaessig ueberprueft und bei Bedarf aktualisiert werden:
- **Regelmaessige Ueberpruefung:** Mindestens alle 2-3 Jahre
- **Anlass-bezogene Aktualisierung:** Bei wesentlichen Aenderungen (Strategie, Organisation, rechtliche Anforderungen, Geschaeftsmodell)

Aenderungen muessen von der Leitungsebene verabschiedet und den Mitarbeitern kommuniziert werden.

> NOTE: Die Leitlinie ist ein lebendes Dokument. Sie sollte die tatsaechlichen Verhaeltnisse widerspiegeln und aktuell gehalten werden.

---

## 4 Organisation des Sicherheitsprozesses

Das angestrebte Sicherheitsniveau kann nur erreicht werden, wenn der IS-Prozess fuer den gesamten Geltungsbereich umgesetzt wird. Dies erfordert klare Rollen, Aufgaben und Verantwortlichkeiten.

### 4.1 Integration der Informationssicherheit in organisationsweite Ablaeufe und Prozesse

| Anforderung | Beschreibung |
|---|---|
| Vernetzung | IS-Management muss in bestehende Organisationsstrukturen integriert werden |
| Fruehe Beteiligung | IS-Organisation muss bei allen relevanten Projekten rechtzeitig beteiligt werden |
| Strategische Entscheidungen | Sicherheitsaspekte muessen bei allen strategischen Entscheidungen beruecksichtigt werden (Outsourcing, neue Vertriebskanaele, Raeumlichkeiten) |
| Risikomanagement | IS-Risiken mit bestehendem Risikomanagementsystem abstimmen |

### 4.2 Aufbau der Informationssicherheitsorganisation

Der Aufbau der IS-Organisation haengt von der Institutionsgroesse ab:

| Institutionsgroesse | Struktur |
|---|---|
| Gross | Ausdifferenzierte IS-Organisation mit IS-Management-Team, ISB, Bereichs-/Projekt-/ICS-ISB |
| Mittel | IS-Management-Team und ISB zusammengefasst |
| Klein | Alle Aufgaben beim ISB konzentriert |

**Grundregeln bei Rollendefinition:**
1. Gesamtverantwortung verbleibt bei der Leitungsebene
2. Mind. eine Person (ISB) benennen, die den IS-Prozess foerdert und koordiniert
3. Jeder Mitarbeiter ist fuer IS an seinem Arbeitsplatz verantwortlich

**Ressourcenplanung:** Muss so erfolgen, dass beschlossenes Sicherheitsniveau erreicht werden kann. Rollen muessen nicht zwingend von verschiedenen Personen wahrgenommen werden.

### 4.3 Aufgaben, Verantwortungen und Kompetenzen in der IS-Organisation

| Element | Anforderung |
|---|---|
| Definition | Klar definierte Aufgaben, Verantwortungsbereiche, Kompetenzen durch Leitungsebene |
| Beteiligung | ISB und IS-Management-Team muessen an allen relevanten Verfahren/Entscheidungen beteiligt werden |
| Kommunikation | Geregelt: Wer kommuniziert wann mit wem worueber; welche Kanaele; wie werden diese geschuetzt |

### 4.4 Der Informationssicherheitsbeauftragte (ISB)

#### Bezeichnung und Rolle

- **Alternative Titel:** Chief Information Security Officer (CISO), Informationssicherheitsmanager (ISM)
- **Hinweis:** "Sicherheitsbeauftragter" wird oft fuer Arbeitsschutz/Betriebssicherheit/Werkschutz verwendet
- **IT-Grundschutz:** Begriff "Informationssicherheitsbeauftragter" (ISB) ersetzt "IT-Sicherheitsbeauftragter" (IT-SiBe), um den ganzheitlichen Schutz von Informationen (nicht nur IT) zu betonen

#### Zustaendigkeiten und Aufgaben

Der ISB ist zustaendig fuer alle Belange der Informationssicherheit. Hauptaufgabe: Leitungsebene beraten und bei Umsetzung unterstuetzen.

| Aufgabenbereich | Taetigkeit |
|---|---|
| Prozesssteuerung | IS-Prozess steuern, an allen Aufgaben mitwirken |
| Leitlinien | Leitungsebene bei Erstellung der Sicherheitsleitlinie unterstuetzen |
| Konzepte | Erstellung von Sicherheitskonzept, Notfallvorsorgekonzept, Teilkonzepten koordinieren |
| Richtlinien | Richtlinien zur Informationssicherheit erlassen |
| Massnahmen | Realisierung von Sicherheitsmassnahmen initiieren und ueberpruefen |
| Reporting | Leitungsebene und IS-Management-Team ueber Status quo berichten |
| Projekte | Sicherheitsrelevante Projekte koordinieren |
| Vorfaelle | Sicherheitsvorfaelle untersuchen |
| Schulung | Sensibilisierungs-/Schulungsmassnahmen initiieren und koordinieren |
| Projektbeteiligung | Bei groesseren Projekten mit Auswirkungen auf Informationsverarbeitung beteiligt werden |

#### Anforderungsprofil

| Bereich | Anforderungen |
|---|---|
| Fachlich | Wissen/Erfahrung in IS und IT; Kenntnisse der Geschaeftsprozesse; Projektmanagement-Erfahrung; Risikoanalyse-Kenntnisse |
| Persoenlich | Identifikation mit IS-Zielen; Kooperations- und Teamfaehigkeit; Durchsetzungsvermoegen; Kommunikationsstaerke |
| Lernbereitschaft | Bereitschaft zur Einarbeitung in neue Gebiete; Verfolgung von IT-Entwicklungen; kontinuierliche Aus-/Fortbildung |

#### Kooperation und Kommunikation

- Mitarbeiter muessen von Notwendigkeit der Sicherheitsmassnahmen ueberzeugt werden
- Vertrauensvolle Befragung zu sicherheitskritischen Vorkommnissen ohne negative Konsequenzen
- Faehigkeit, fachliche Meinung gegenueber Leitungsebene zu vertreten, auch Einspruch einzulegen

**Besondere Herausforderung:** Verschiedene "Sprachwelten" verstehen (z.B. ICS vs. IT-Bereiche)

#### Unabhaengigkeit

| Anforderung | Begruendung |
|---|---|
| Stabsstelle | Organisatorisch direkt der Leitungsebene zugeordnet (empfohlen) |
| Vorspracherecht | Direktes und jederzeitiges Vorspracherecht bei Leitungsebene |
| Information | Umfassende und fruehzeitige Unterrichtung ueber relevante Vorgaenge |
| Nicht IT-Abteilung | **Wichtig:** ISB sollte nicht der IT-Abteilung zugeordnet sein (Rollenkonflikte, Verengung auf IT-Absicherung statt ganzheitlichen Informationsschutz) |

**Interessenkonflikt vermeiden:** ISB sollte nicht gleichzeitig aktiver Administrator sein (Konflikt zwischen Kontrolle und operativem Betrieb)

#### Personalunion mit Datenschutzbeauftragtem

Grundsaetzlich moeglich, aber:
- Schnittstellen klar definieren und dokumentieren
- Direkte Berichtswege zur Leitungsebene auf beiden Seiten
- Konflikttraechtige Themen ggf. zusaetzlich an Revision
- Ausreichende Ressourcen fuer beide Rollen sicherstellen
- Qualifizierter Vertreter fuer ISB erforderlich

### 4.5 Das IS-Management-Team

Unterstuetzt den ISB durch Koordination uebergreifender Massnahmen, Informationszusammentragung, Kontrolle.

**Zusammensetzung:** Haengt von Institutionsgroesse, Sicherheitsniveau, Ressourcen ab. Im Extremfall: ISB + Stellvertreter.

| Aufgabe | Beschreibung |
|---|---|
| Strategie | IS-Ziele und -Strategien bestimmen; Sicherheitsleitlinie entwickeln |
| Ueberwachung | Umsetzung der Sicherheitsleitlinie ueberpruefen |
| Prozesssteuerung | Sicherheitsprozess initiieren, steuern, kontrollieren |
| Konzeption | Bei Erstellung des Sicherheitskonzepts mitwirken |
| Massnahmen-Check | Pruefen ob geplante Massnahmen wie beabsichtigt funktionieren und wirksam sind |
| Schulung | Schulungs-/Sensibilisierungsprogramme konzipieren |
| Beratung | Fachverantwortliche, IT-Betrieb, Bereichs-ISBs, ICS-ISB, Leitungsebene beraten |

**Empfohlene Zusammensetzung (grosse Institutionen):**
- Kenntnisse in IS und Technik (IT/ICS/IoT)
- Erfahrung mit Organisation/Verwaltung
- Kenntnis der Aufgabenbereiche/Geschaeftsprozesse
- Vertreter verschiedener Fachbereiche (bringen Expertise ein, werden Ansprechpartner fuer Sicherheitsfragen)

### 4.6 Bereichs- und Projekt-Sicherheitsbeauftragte bzw. Beauftragter fuer IT-Sicherheit

#### Bereichs-Sicherheitsbeauftragter

Zustaendig fuer alle Sicherheitsbelange in seinem Bereich (Abteilung, Aussenstelle). Muss Aufgaben, Gegebenheiten, Arbeitsablaeufe im Bereich gut kennen.

#### Beauftragter fuer IT-Sicherheit

In grossen Institutionen: Sorgt fuer technische Umsetzung der vom ISB erstellten Sicherheitsziele/-vorgaben. Typischerweise im IT-Betrieb taetig, waehrend ISB unmittelbar der Leitungsebene zuarbeitet.

#### Projekt-Sicherheitsbeauftragter

Fuer grosse Projekte: Klaert Sicherheitsbedarf innerhalb des Projekts und sichere Einbindung der Projektergebnisse. Kann Projektmitarbeiter oder Mitglied des IS-Management-Teams sein. Verantwortung liegt beim Projektleiter/Leitungsebene.

#### Aufgaben

| Aufgabe | Beschreibung |
|---|---|
| Vorgaben umsetzen | Vorgaben des ISB umsetzen |
| Spezifische Leitlinien | Massnahmen gemaess IT-System-Sicherheitsleitlinie oder anderer spezifischer Leitlinien |
| Informationsfluss | Projekt-/IT-systemspezifische Informationen an ISB weiterleiten |
| Ansprechpartner | Als Ansprechpartner vor Ort dienen |
| Massnahmen-Auswahl | Bei Auswahl der Massnahmen zur Umsetzung spezifischer Leitlinien mitwirken |
| Schulungsbedarf | Schulungs-/Sensibilisierungsbedarf ermitteln |
| Kontrolle | Protokolldateien regelmaessig kontrollieren/auswerten |
| Meldung | Sicherheitsrelevante Zwischenfaelle an ISB melden |

**Qualifikationen:** Detaillierte IT-Kenntnisse; Projektmanagement-Kenntnisse

### 4.7 Der ICS-Informationssicherheitsbeauftragte (ICS-ISB)

Institutionen mit industriellen Steuerungskomponenten (ICS) sollten einen Verantwortlichen fuer IS im ICS-Bereich benennen.

**Besonderheiten ICS:**
- Grundlegend andere Sicherheitsanforderungen als Buero-IT
- Sehr lange Lebenszyklen (oft >10 Jahre)
- Auch Buero-IT-Anwendungen werden laenger verwendet

**Einbindung:**
- ICS-ISB sollte Mitglied im IS-Management-Team sein
- Sollte im IS-Koordinierungsausschuss vertreten sein
- Enge Kooperation zwischen ICS-ISB und ISB erforderlich
- Verstaendnis fuer Kultur/Sprache des jeweils anderen Bereichs notwendig

#### Aufgaben des ICS-ISB

| Aufgabe | Beschreibung |
|---|---|
| Vorgaben umsetzen | Allgemeingueltige Vorgaben der IS-Leitlinie im ICS-Bereich umsetzen |
| Gemeinsame Ziele | Ziele aus ICS-Bereich und Gesamt-ISMS verfolgen, Projekte unterstuetzen |
| Risikoanalysen | Fuer ICS-Bereich Risikoanalysen durchfuehren (nach Vorgaben Risikomanagement) |
| ICS-Richtlinien | Sicherheitsrichtlinien/Konzepte fuer ICS unter Einbeziehung von Safety und Security erstellen/schulen |
| Kooperation | Eng mit ISB kooperieren |
| Ansprechpartner | Fuer ICS-Sicherheit in gesamter Institution |
| Massnahmen | ICS-Sicherheitsmassnahmen erstellen, bei Umsetzung mitwirken |
| Dokumentation | Notwendige Dokumente zur ICS-Sicherheit erstellen/kommunizieren |
| Schulungsbedarf | Schulungs-/Sensibilisierungsbedarf ermitteln, Aktivitaeten initiieren |
| Vorfaelle | Sicherheitsvorfaelle im ICS-Bereich zusammen mit ISB bearbeiten |

#### Qualifikationen ICS-ISB

- Spezielle Kenntnisse zu Prozessen und industrieller Steuerung
- Ausreichende IT-Kenntnisse fuer umfassende Beantwortung von Fragen
- Kenntnisse zu Bedrohungen/Schwachstellen in industrieller Steuerung
- Kenntnisse zu Gefaehrdungen fuer Buero-IT im ICS-Bereich
- Projektmanagement-Kenntnisse
- Kenntnisse zu Change Management und Notfallmanagement

### 4.8 IS-Koordinierungsausschuss

Keine Dauereinrichtung, wird bei Bedarf einberufen (z.B. Planung groesserer Projekte).

**Aufgabe:** Koordination des Zusammenspiels zwischen IS-Management-Team, Fachverantwortlichen, Sicherheitsbeauftragtem, Leitungsebene.

**Empfehlung:** Mit IT-Koordinierungsausschuss zusammenarbeiten lassen, personell weitgehend identisch besetzen.

#### Zusammensetzung

Mindestens:
- IT-Verantwortlicher
- Informationssicherheitsbeauftragter
- Vertreter der Anwender
- Datenschutzbeauftragter
- ICS-Informationssicherheitsbeauftragter (falls vorhanden)

### 4.9 Der Datenschutzbeauftragte

#### Bedeutung

- Basiert auf gesetzlichen Vorschriften
- Verletzungen koennen empfindliche Geldbussen/Freiheitsstrafen nach sich ziehen
- Sollte nicht in Personalunion mit Rollen, die Interessenkollision erzeugen (z.B. Leiter IT)
- Weisungsunabhaengig, berichtet direkt der Leitungsebene
- Gehoert zum IS-Koordinierungsausschuss
- Arbeitet eng mit ISB zusammen

**Positive Effekte:** Foerdert Arbeitsablaeufe (vermeidet Sammlung zu vieler personenbezogener Daten, reduziert Verwaltungsaufwand/Mehrkosten), buerger-/kundenfreundliches Verhalten.

#### Anforderungsprofil

| Bereich | Anforderung |
|---|---|
| Fachkunde | Technische, organisatorische, rechtliche Kenntnisse |
| Methodik | Anwendung Standard-Datenschutzmodell [SDM] empfohlen |
| Rechtsnormen | BDSG, EU-DSGVO, bereichsspezifische Regelungen, Spezialvorschriften |
| Organisation | Gute Kenntnisse der Organisation |
| IT | Vertiefte IT-Kenntnisse |
| Weiterbildung | Gelegenheit zur Weiterbildung in Teilbereichen |

**Personalunion:** Mit ISB moeglich (siehe 4.4). Auf Interessenkonflikte/Abhaengigkeiten achten.

#### Einbeziehungspflicht

- Direktes und jederzeitiges Vortragsrecht bei Leitungsebene
- Umfassende und fruehzeitige Unterrichtung ueber relevante Vorgaenge
- Beteiligung an datenschutzrelevanten Vorgaengen
- Planungen zum Umgang mit personenbezogenen Daten bekannt geben
- Bei Bedarf Unterstuetzung durch Mitarbeiter mit weitergehenden Kenntnissen

#### Zustaendigkeiten und Aufgaben

| Aufgabe | Beschreibung |
|---|---|
| Ueberwachung | Einhaltung der Datenschutzvorschriften in allen Bereichen |
| Beratung | Vorrangige Aufgabe; Ansprechpartner fuer alle Datenschutzfragen |
| Konstruktive Loesungen | Bei Schwachstellen/Versaeumnissen gemeinsam mit Beteiligten Loesungen suchen |
| Leitungsebene | Hilft bei Wahrnehmung der Verantwortung fuer Persoenlichkeitsschutz |
| Kontakt | Personal-/Betriebsrat (wichtig wegen Sensibilitaet der Personaldatenverarbeitung) |

### 4.10 Zusammenspiel mit anderen Organisationseinheiten und Managementdisziplinen

Viele Bereiche nehmen Aufgaben im Bereich IS wahr oder haben vergleichbare Aufgaben. Koordiniertes Vorgehen/Schnittstellenabstimmung sinnvoll.

**Beispiele:** Datenschutz, Objektschutz, Personenschutz, Geheimschutz, Notfallmanagement, Risikomanagement, Produkt-/Anlagensicherheit (Produktionsbereich)

#### Zusammenarbeit mit IT-Betrieb

- ISB erstellt Vorgaben fuer sicheren Betrieb
- IT-Betrieb setzt diese um
- Enge Zusammenarbeit/regelmaessige Abstimmung erforderlich
- Austausch ueber Vorgehensweisen, Gefaehrdungen, neue Anforderungen
- In grossen Institutionen: Beauftragter fuer IT-Sicherheit als Ansprechpartner des ISB im IT-Betrieb

#### Rollenkonflikte vermeiden

Bei Ausgestaltung der Rollen pruefen: Welche Aufgaben koennen in Personalunion wahrgenommen werden?

**Aspekte bei Uebernahme weiterer Aufgaben:**
- Schnittstellen zwischen Rollen klar definieren/dokumentieren
- Instanz fuer Klaerung konflikttraechtiger Themen benennen (z.B. Innenrevision)
- Ausreichende Qualifikation/Ressourcen sicherstellen

**Unvereinbare Rollen:** Revisor/Auditor (Kontrolliert sollte nicht selbst konzeptioniert haben)

### 4.11 Einbindung externer Sicherheitsexperten

Einsatz externer Sicherheitsexperten kann erforderlich sein:
- Wenn wesentliche Rollen (ISB) nicht durch interne Mitarbeiter wahrgenommen werden koennen
- In kleinen Unternehmen/Behoerden (Dienstleistung externer ISB)
- Wenn internen Experten Zeit/Grundlagen fehlen (z.B. gesetzliche Anforderungen, technische Fragen)

**DokI-Pflicht:** Interne Sicherheitsexperten muessen Bedarf an externen Experten dokumentieren, damit Leitungsebene erforderliche Ressourcen bereitstellt.

---

## 5 Dokumentation im Sicherheitsprozess

Vor und waehrend des Sicherheitsprozesses wird eine Vielzahl verschiedener Dokumente erstellt. Der Aufwand muss in angemessenem Rahmen bleiben. Dokumentation sollte so aussagekraeftig sein, dass spaeter nachvollziehbar ist, was zu frueheren Zeitpunkten entschieden und umgesetzt wurde.

**Anpassung:** Abhaengig von IT-Grundschutz-Vorgehensweise und Rahmenbedingungen. Bei Basis-Absicherung sollte Dokumentation moeglichst einfach und zweckmaessig sein.

**Zertifizierung:** Wenn angestrebt, muessen einige Dokumente zwingend erstellt werden (siehe Kap. 11). Sonst Dokumentationsaufwand minimieren. "Dokumentiert" heisst nicht immer eigene Dokumente – oft reichen Wiki-Eintraege, Notizen in vorhandenen Texten/Tabellen.

### 5.1 Klassifikation von Informationen

Um Informationen angemessen schuetzen zu koennen, muss deren Bedeutung klar sein.

#### Klassifikationsschema

**Zweck:** Einfacher Austausch ueber Wertigkeit von Informationen (intern und extern)

**Anforderung:** Nicht zu kompliziert, einfach verstaendlich, leicht anwendbar

**Basis:** Grundwerte der Informationssicherheit (Vertraulichkeit, Integritaet, Verfuegbarkeit)

| Grundwert | Beispiel-Klassifikation |
|---|---|
| Vertraulichkeit | Offen – Intern – Vertraulich – Streng vertraulich |
| Verfuegbarkeit | Tolerierbare Ausfallzeit: 1 Std – 1 Tag – 1 Woche – 1 Monat |
| Integritaet | Essenziell – Wichtig – Normal (Kriterien: Auswirkungen bei Integritaetsverlust, Aufwand zur Sicherstellung) |

**Einfache Faelle (Basis-Absicherung):** Zweistufige Klassifikation kann ausreichen (z.B. "intern" vs. "oeffentlich"). Nur zur Veroeffentlichung vorgesehene Informationen als "offen" klassifizieren.

#### Kennzeichnung

**Ideal:** Alle Informationen bereits bei Generierung kennzeichnen, um waehrend gesamtem Lebenszyklus schuetzen zu koennen.

**Herausforderung:** Einfach aufzubauen, aber schwierig im laufenden Betrieb konsequent/einheitlich anzuwenden. Klassifikation kann sich im Lebenszyklus aendern.

**Positiver Nebeneffekt:** Beim Klassifizieren faellt auf, welche Daten ueberfluessig/veraltet/ungenutzt sind. Hilft Datenmuell zu reduzieren.

#### Rollen im Klassifikationsprozess

Geeignete Rollen einrichten, Aufgaben festlegen. Mindestens: Verantwortlicher fuer Klassifikationsprozess + diejenigen, die Prozess umsetzen.

| Rolle | Wer | Aufgaben |
|---|---|
| Data Creator (Ersteller) | Jeder Mitarbeiter | Daten erzeugen; Erst-Klassifikation |
| Data Owner (Fachverantwortlicher) | Fachverantwortlicher/Linienvorgesetzter | Regelungen konkretisieren; Einstufungsfragen klaeren; Klassifikationsprozess ueberwachen |
| Data User (Benutzer) | Jeder Mitarbeiter | Daten benutzen; Regeln beachten; Feedback zu Einstufungshoehen |
| Data Auditor (Klassifikationsverantwortlicher) | Anforderungsmanager/Compliance Manager | Institutionsweite Strategie/Vorgaben erstellen; Hilfsmittel/Erlaeuterungen bereitstellen; Einstufungsfragen klaeren; Prozess ueberwachen; Abstimmung mit Risikomanagement, ISB, Datenschutzbeauftragtem |

#### Beispiel: Geheimschutz

Klassifikation im staatlichen Geheimschutz (nur fuer Verschlusssachen – VS):
- VS – NUR FUER DEN DIENSTGEBRAUCH
- VS – VERTRAULICH
- GEHEIM
- STRENG GEHEIM

**Limitation:** Bezieht sich nur auf kleinen Bereich der VS (im oeffentlichen Interesse geheimhaltungsbeduerftige Informationen/Gegenstaende). Laesst grosse Luecken bei der Vielzahl geschaeftsrelevanter/geschaeftskritischer Informationen.

**Empfehlung:** In Institutionen mit geringem VS-Anteil eigenes Klassifikationsschema fuer geschaeftsrelevante Informationen entwickeln.

### 5.2 Informationsfluss im Informationssicherheitsprozess

Im IS-Prozess entsteht eine Vielzahl an Berichten, Konzepten, Richtlinien, Meldungen. Dokumente muessen aussagekraeftig und fuer Zielgruppe verstaendlich sein. ISB sammelt, verarbeitet und bereitet Informationen kurz/uebersichtlich fuer Leitungsebene auf.

**Hinweis:** Folgende Aspekte sind bewaehrt/empfehlenswert, muessen an Institution angepasst werden (insbes. Basis-Absicherung). Bei Zertifizierung werden sie verbindlich, sonst "Best Practices".

#### 5.2.1 Berichte an die Leitungsebene

Leitungsebene benoetigt Eckdaten zum Stand der IS fuer richtige Entscheidungen.

**Managementberichte sollten abdecken:**
- Status/Umsetzungsgrad des Sicherheitskonzepts
- Ergebnisse von Audits/Datenschutzkontrollen (DSGVO)
- Berichte ueber Sicherheitsvorfaelle
- Berichte ueber Erfolge/Probleme beim IS-Prozess
- Berichte ueber Reduzierung von Umsetzungsdefiziten/Risiken (Risikobehandlungsplan)

**Regelmaessige Information:** ISB informiert Leitungsebene in angemessener Form ueber Ergebnisse/Status. Erfolge, Probleme, Verbesserungsmoeglichkeiten aufzeigen. Leitungsebene nimmt zur Kenntnis, veranlasst notwendige Massnahmen.

**Sicherheitskonzept:** ISB erarbeitet, sorgt fuer Umsetzung/regelmaessige Aktualisierung. Freigabe durch Leitungsebene.

#### 5.2.2 Dokumentation im Informationssicherheitsprozess

Dokumentation auf allen Ebenen entscheidend fuer Erfolg. Nur durch ausreichende Dokumentation:
- Werden getroffene Entscheidungen nachvollziehbar
- Sind Prozesse wiederholbar und standardisierbar
- Koennen Schwaechen/Fehler erkannt und zukuenftig vermieden werden

**Arten von Dokumentationen:**

| Art | Zielgruppe | Beispiele | Zweck |
|---|---|---|---|
| Dokumente fuer Sicherheitsmanagement | Sicherheitsmanagement | Sicherheitskonzept mit Risikoanalyse-Berichten; Schulungs-/Sensibilisierungskonzept; Audit-/Revisionsberichte | Entscheidungen nachvollziehbar; Handlungen wiederholbar; Schwaechen erkennbar |
| Technische Dokumentation / Arbeitsablaeufe | Experten | Installations-/Konfigurationsanleitungen; Wiederanlauf-Anleitungen; Test-/Freigabeverfahren-Doku; Anweisungen fuer Stoerungen/Vorfaelle | Andere Experten koennen nachvollziehen; Administrator auf Wissen (nicht Gedaechtnis) angewiesen; Wiederherstellung moeglich |
| Anleitungen fuer Mitarbeiter | Mitarbeiter | Leitlinie zur Informationssicherheit; Richtlinien (Arbeitsablaeufe, Internet-Nutzung, Verhalten bei Vorfaellen) | Verstaendliche Umsetzung von Sicherheitsmassnahmen |
| Aufzeichnung Managemententscheidungen | Leitungsebene | Grundlegende Entscheidungen zu IS-Prozess/Sicherheitsstrategie | Nachvollziehbarkeit/Wiederholbarkeit |
| Gesetze und Regelungen | Leitungsebene | Relevante Gesetze/Regelungen/Anweisungen; konkrete Konsequenzen | Anforderungen an Geschaeftsprozesse/IT-Betrieb/IS |
| Referenzdokumente fuer Zertifizierung | Institutionen mit Zertifizierungsziel | Richtlinien (Risikoanalyse, Lenkung von Dokumenten/Aufzeichnungen, Auditierung ISMS, Korrektur-/Vorbeugungsmassnahmen) | Auditierung; Entscheidung fuer/gegen Zertifikat |
| Dokumentation ICS-Bereich | Anwender | Abgeleitete Leitlinie fuer ICS; ICS-Richtlinien/Arbeitsanweisungen | Spezielle Anforderungen industrielle Steuerung; Integration ins Gesamt-ISMS |

**Pragmatischer Ansatz bei technischer Doku:** Andere Experten muessen nachvollziehen koennen; Administrator auf Wissen (nicht Gedaechtnis) angewiesen. Qualitaet bei Sicherheitsuebungen/Vorfallbehandlung bewerten, Erkenntnisse zur Verbesserung nutzen.

**DokI-Pflicht:** Dokumentationen muessen auf aktuellem Stand gehalten werden – in Aenderungsprozess einbeziehen.

#### 5.2.3 Anforderungen an die Dokumentation

Angemessene Dokumentation sollte Anforderungen bzgl. Kennzeichnung, Detailtiefe, Aktualisierungen, Medium, Sicherheit, Datenschutz erfuellen.

**Mindestanforderung Kennzeichnung:**

Einheitlicher Aufbau (besseres Verstaendnis, einfachere Handhabung). Mindestens:
- Eindeutige Bezeichnung (aussagekraeftiger Titel)
- Ersteller / Autor / Dokumenteninhaber
- Funktion des Erstellers
- Versionsnummer
- Letzte Ueberarbeitung, naechste geplante Ueberarbeitung
- Freigegeben am / durch
- Klassifizierung (vertrauliche Inhalte klassifiziert/gekennzeichnet/sicher verwahrt)
- Berechtigte Rollen (Verteilerkreis)

Optional:
- Quellenangaben
- Aufbewahrungszeitraum
- Aenderungsuebersicht

Externe Dokumente (relevant fuer Sicherheitsmanagement) angemessen kennzeichnen/verwalten.

**Detailtiefe:**

Prinzip: "Dem Ziel und Zweck angemessen"

| Dokumenttyp | Detailtiefe |
|---|---|
| Strategiedokumente (Leitlinie) | Kurz, praegnant, aussagekraeftig |
| Konzeption | Detaillierte Informationen fuer Nachvollziehbarkeit von Entscheidungen |
| Richtlinien/Handlungsanweisungen | Klar, verstaendlich; oft Checklisten ausreichend (Ueberblick, nichts vergessen, Reihenfolge) |

**DokI-Pflicht:** Alle Entscheidungen sowie Informationen, auf denen Entscheidungen basieren, dokumentieren.

**Aenderungsmanagement:**

Regelmaessige Aktualisierung. Aenderungsmanagement-Verfahren aufsetzen:
- Alle Aenderungen erfassen, bewerten, freigeben, nachverfolgen
- Klare schriftliche Anweisungen fuer alle Dokumente
- Anwender koennen Aenderungsvorschlaege einbringen
- Integration ins uebergreifende Aenderungsmanagement der Institution
- Intervalle vorgeben (bewaehrt: jaehrliche Ueberpruefung)
- Mechanismen in entsprechende Prozesse integrieren (Personalverwaltung, Hausverwaltung, Inventarisierung)
- ISB steuert; Dokumenteneigentuemer verantwortlich fuer Aktualisierungen/Durchfuehrung

**Dokumentationsmedium:**

Nicht immer Papierform. Auch lokale/internetbasierte Software Tools moeglich (speichern Infos, von verschiedenen Standorten/kollaborativ nutzbar).

**Auswahl:** Je nach Bedarf, Phase (Planung, Umsetzung, Pruefung), Teilaufgabe. Zielpersonen/deren Vertrautheit mit Medien beruecksichtigen.

**Sicherheit und Datenschutz:**

Dokumente enthalten sensitive Daten und personenbezogene Daten → IS und Datenschutz gewaehrleisten.

| Anforderung | Umsetzung |
|---|---|
| Verfuegbarkeit, Integritaet, Vertraulichkeit | Garantieren |
| Klassifizierung | Dokumente bzgl. Vertraulichkeit einstufen, kennzeichnen, durch geeignete Massnahmen schuetzen |
| Berechtigte Empfaenger | In Dokumenten nennen |
| Zugriffsbeschraenkung | Need-to-know-Prinzip (nur wer Info fuer Taetigkeit benoetigt) |
| Modularisierung | Sinnvoll fuer empfaengerausgerichtete Verteilung |
| Ueberblick | Anzahl klassifizierter Dokumente, Art, Verteilung; korrekte/vollstaendige Aktualisierung/Vernichtung/Ruecknahme |

#### 5.2.4 Informationsfluss und Meldewege

Alle Betroffenen muessen zeitnah informiert werden. Aber: Detailinformationen nicht beliebig streuen.

**Klaeren:**
- Welche Personen kommunizieren mit welchen Stellen wann ueber welche Details
- Welche Kommunikationskanaele fuer jeweilige Ansprechpartner
- Wie werden Kanaele geschuetzt

**Pflege:** Zeitnahe Aktualisierung von Meldewegen/Festlegungen fuer Informationsfluss elementar. Ergebnisse aus Uebungen/Tests/Audits als Grundlage fuer Verbesserung nutzen.

**Richtlinie:** Grundsaetzliche Festlegungen zu Informationsfluss/Meldewegen in Richtlinie dokumentieren, von Leitungsebene verabschieden. Insbes. kritische Informationsfluesse regeln. Zwischen Hol-/Bringschuld unterscheiden.

**Nutzung von Synergieeffekten:**

Viele Institutionen haben bereits Prozesse fuer Dienstleistungen/IT-Betrieb definiert. Synergieeffekte nutzen, IS-Aspekte in bestehende Prozesse eingliedern:
- Meldewege fuer IT-Sicherheitsvorfaelle in IT-Betrieb integrieren
- Kapazitaetsplanung um Notfallvorsorge-Aspekte erweitern
- Sicherheitsrelevante Informationen auch fuer andere Zwecke nutzen (z.B. Informationseigentuemer, Einstufung, Abhaengigkeiten Geschaeftsprozesse <-> IT/ICS)
- Positive Nebeneffekte: Prozessoptimierung, exakte Zuordnung von IT-Kosten

---

> NOTE: Kapitel 4 und 5 enthalten umfassende organisatorische Anforderungen und Dokumentationspflichten, die fuer ein zertifizierungsreifes ISMS essentiell sind. Die Rollenkonzepte und Dokumentationsstandards sind direkt auf ISO 27001 Clause 5 (Fuehrung), Clause 7 (Unterstuetzung) und Clause 7.5 (Dokumentierte Information) abgestimmt.
## 6 Erstellung einer Sicherheitskonzeption nach Basis-Absicherung

### Voraussetzungen

Die Basis-Absicherung ist die Einstiegs-Vorgehensweise, wenn folgende Voraussetzungen erfuellt sind:

- Informationssicherheitsprozess wurde initiiert
- Sicherheitsleitlinie und Informationssicherheitsorganisation wurden definiert
- Uebersicht der vorhandenen Assets der Institution wurde erstellt
- Basis-Absicherung wurde als IT-Grundschutz-Vorgehensweise ausgewaehlt

Organisatorische, personelle, infrastrukturelle und technische Anforderungen aus dem IT-Grundschutz-Kompendium werden in modularen Bausteinen erfuellt.

### Aktionsfelder der Basis-Absicherung

| Aktionsfeld | Beschreibung |
|---|---|
| Festlegung des Geltungsbereichs | Informationsverbund festlegen, fuer den die Sicherheitskonzeption erstellt/umgesetzt wird |
| Auswahl und Priorisierung | Informationsverbund mit Bausteinen aus IT-Grundschutz-Kompendium nachbilden |
| IT-Grundschutz-Check | Pruefen, ob Basis-Anforderungen bereits umgesetzt sind, fehlende Massnahmen identifizieren |
| Realisierung | Geeignete Sicherheitsmassnahmen fuer nicht erfuellte Basis-Anforderungen festlegen/umsetzen |
| Auswahl folgender Vorgehensweise | Festlegen, wann und mit welcher Vorgehensweise das Sicherheitsniveau angehoben wird |

> NOTE: Im Unterschied zur Standard-Absicherung ist Basis-Absicherung kein geschlossener Zyklus, sondern eine Einstiegsvorgehensweise, die mit Standard-Absicherung (eventuell ueber Kern-Absicherung als Zwischenschritt) fortgefuehrt wird.

### 6.1 Festlegung des Geltungsbereichs

**Geltungsbereich:** Bereich der Institution, den die Sicherheitskonzeption abdecken soll. Kann gesamte Institution oder einzelne Bereiche umfassen.

**Anforderungen an Geltungsbereich:**
- Klar abgegrenzt
- Sinnvoll in sich abgeschlossen
- Wenige, eindeutig definierte Schnittstellen

**Informationsverbund:** Geltungsbereich fuer Sicherheitskonzeption. Umfasst die Gesamtheit von infrastrukturellen, organisatorischen, personellen und technischen Komponenten zur Aufgabenerfuellung in einem Anwendungsbereich der Informationsverarbeitung.

Moegliche Abgrenzungen:
- Organisatorische/technische Strukturen (z.B. Abteilungsnetz)
- Gemeinsame Geschaeftsprozesse/Anwendungen (z.B. Personalinformationssystem)

Auf Grundlage der Ersterfassung (Kap. 3.2.4) werden relevante Bestandteile des Informationsverbunds identifiziert.

> NOTE: Vertiefende Informationen zur Abgrenzung in Kapitel 3.4.3 Festlegung des Geltungsbereichs und Inhalt der Sicherheitsleitlinie.

### 6.2 Auswahl und Priorisierung

**Ziel:** IT-Grundschutz-Modell des Informationsverbunds erstellen durch Nachbildung mit Bausteinen aus IT-Grundschutz-Kompendium.

**Ergebnis:** Modell aus verschiedenen (ggf. mehrfach verwendeten) Bausteinen, das sicherheitsrelevante Aspekte des Informationsverbunds beinhaltet.

#### 6.2.1 Modellierung nach IT-Grundschutz

**Vorgehen:**
- Passende Bausteine des IT-Grundschutz-Kompendiums auswaehlen
- Bausteine sind unterteilt in prozess- und systemorientierte Bausteine
- Fuer jede Schicht entscheiden, ob/wie Bausteine zur Abbildung herangezogen werden

**Zielobjekte koennen sein:**
- Einzelne Geschaeftsprozesse oder Komponenten
- Gruppen von Komponenten
- Gebaeude, Liegenschaften
- Organisationseinheiten

Falls Zielobjekte nicht unmittelbar mit vorhandenen Bausteinen abgebildet werden koennen, muessen aehnliche, verallgemeinerte Bausteine beruecksichtigt werden.

> NOTE: Ueberblick ueber Struktur des IT-Grundschutz-Kompendiums mit System- und Prozessbausteinen in Kapitel 8.3.1.

#### 6.2.2 Reihenfolge der Baustein-Umsetzung

Um grundlegende Risiken abzudecken und ganzheitliche Informationssicherheit aufzubauen, muessen essenzielle Sicherheitsanforderungen fruehzeitig erfuellt werden.

**IT-Grundschutz-Kompendium:**
- Beschreibt im Kapitel "Schichtenmodell und Modellierung", wann ein Baustein eingesetzt werden soll
- Kennzeichnung: vor- oder nachrangig umzusetzen
- Kennzeichnung zeigt nur zeitliche Reihenfolge, keine Gewichtung
- Grundsaetzlich muessen alle relevanten Bausteine umgesetzt werden
- Kennzeichnung ist Empfehlung, Institution kann abweichende Reihenfolge festlegen

#### 6.2.3 Zuordnung von Bausteinen

Zuordnung von Bausteinen zu Zielobjekten in Tabellenform dokumentieren:

| Spalte | Inhalt |
|---|---|
| Vollstaendiger Titel | z.B. SYS.3.1 Laptop |
| Zielobjekt | Identifikationsnummer einer Komponente/Gruppe, Name eines Gebaeudes/Organisationseinheit |
| Ansprechpartner | Platzhalter, wird erst beim IT-Grundschutz-Check ermittelt |
| Reihenfolge | Umsetzungsreihenfolge (R1, R2, R3) |
| Hinweise | Randinformationen und Begruendungen fuer Modellierung |

#### 6.2.4 Ermittlung konkreter Massnahmen aus Anforderungen

Nach der Modellierung sind die Bausteine ausgewaehlt, die fuer Zielobjekte umzusetzen sind. In den Bausteinen werden Anforderungen aufgefuehrt, die typischerweise geeignet und angemessen sind.

**Naechster Schritt:** Einzelne Anforderungen bearbeiten und geeignete Sicherheitsmassnahmen formulieren.

Unterstuetzung durch:
- Umsetzungshinweise zu den Bausteinen
- Vertiefende Informationen in Kapitel 8.3.6 Anpassung der Baustein-Anforderungen

### 6.3 IT-Grundschutz-Check fuer Basis-Absicherung

**Grundlage:** Erstaufnahme (Kap. 3.2.4) mit geschaeftskritischen Informationen, Kernprozessen, betroffenen Anwendungen, IT-Systemen, Netzen, Raeumen.

**Pruefobjekt:** Informationsverbund, der mit IT-Grundschutz-Bausteinen nachgebildet wurde.

**Zweck:** Soll-Ist-Vergleich zur Identifikation ausreichend/unzureichend erfuellter Basis-Anforderungen.

**Abgrenzung:** Bei Basis-Absicherung nur Basis-Anforderungen pruefen. Fuer Standard-/Kern-Absicherung separater IT-Grundschutz-Check mit Standard-Anforderungen.

> NOTE: Ergebnisse sollten so aufbereitet sein, dass sie in Standard-/Kern-Absicherung integrierbar sind (Synergien/Mehraufwaende vermeiden).

#### Drei Schritte des IT-Grundschutz-Checks

| Schritt | Taetigkeiten |
|---|---|
| 1. Organisatorische Vorbereitungen | Relevante Ansprechpartner fuer Soll-Ist-Vergleich auswaehlen |
| 2. Soll-Ist-Vergleich | Interviews und Stichproben durchfuehren |
| 3. Dokumentation | Ergebnisse inkl. Begruendungen dokumentieren |

#### Organisatorische Vorarbeiten

**Vorbereitung:**
1. Hausinterne Papiere sichten, die sicherheitsrelevante Ablaeufe regeln
2. Interviewpartner identifizieren: Fuer jeden Baustein einen Hauptansprechpartner festlegen (Rollen sind in Baustein-Anforderungen genannt)
3. Pruefen, ob externe Stellen beteiligt werden muessen (z.B. bei outgesourcten Dienstleistungen)
4. Terminplan fuer Interviews erstellen, Ausweichtermine abstimmen

#### Durchfuehrung des Soll-Ist-Vergleichs

Sicherheitsanforderungen des jeweiligen Bausteins der Reihe nach durcharbeiten.

**Umsetzungsstatus je Anforderung:**

| Status | Bedeutung |
|---|---|
| entbehrlich | Anforderung im Informationsverbund nicht relevant (z.B. Dienste nicht aktiviert) |
| ja | Geeignete Massnahmen vollstaendig, wirksam und angemessen umgesetzt |
| teilweise | Anforderung nur teilweise umgesetzt |
| nein | Anforderung noch nicht erfuellt, Massnahmen groesstenteils nicht umgesetzt |

**Interview-Vorgehen:**
- Bausteintexte, Umsetzungshinweise und ergaenzende Materialien griffbereit haben
- Zweck des IT-Grundschutz-Checks vorstellen
- Anforderungsueberschriften durchgehen, Anforderung erlaeutern
- Gespraechspartner kann auf umgesetzte Anforderungen/Massnahmen eingehen, offene Punkte besprechen
- Zum Abschluss jedes Bausteins: Ergebnis mitteilen und erlaeutern

#### Dokumentation der Ergebnisse

**Anforderungen an Dokumentation:**
- Fuer alle Beteiligten nachvollziehbar
- Als Grundlage fuer Umsetzungsplanung defizitaerer Anforderungen/Massnahmen nutzbar
- Geeignete Hilfsmittel verwenden (IT-Grundschutz-Tools, Tabellen, Formulare von IT-Grundschutz-Website)

**Tabellarische Erfassung je Anforderung:**

| Information | Inhalt |
|---|---|
| Umsetzungsgrad | entbehrlich / ja / teilweise / nein |
| Verantwortliche | Welche Mitarbeiter? Bis wann? |
| Bemerkungen | Bei "entbehrlich": Begruendung. Bei "teilweise"/"nein": Welche Massnahmen noch umzusetzen? Weitere Hinweise zur Defizitbeseitigung |
| Defizite/Kostenschaetzung | Risikobewertung. Finanzieller und personeller Aufwand zur Defizitbeseitigung schaetzen |

> NOTE: Details in Kapitel 8.4 IT-Grundschutz-Check.

### 6.4 Realisierung

**Ausgangslage:** Ergebnisse des IT-Grundschutz-Checks (Soll-Ist-Vergleich) liegen vor.

**Ziel:** Alle identifizierten Basis-Anforderungen erfuellen. Effiziente Erfuellung bei beschraenkten Ressourcen (Geld/Personal).

**Realisierungsschritte:**

| Schritt | Beschreibung |
|---|---|
| Sichtung der Untersuchungsergebnisse | Fehlende/teilweise erfuellte Basis-Anforderungen in Gesamtsicht auswerten |
| Konsolidierung | Noch zu erfuellende Basis-Anforderungen konsolidieren |
| Kosten-/Aufwandsschaetzung | Investitionskosten und Personalaufwand je Basis-Anforderung festhalten |
| Umsetzungsreihenfolge | Falls Budget/Personal nicht fuer sofortige Umsetzung ausreicht: Reihenfolge festlegen |
| Aufgaben/Verantwortung | Festlegen, wer bis wann welche Basis-Anforderungen erfuellen muss |
| Realisierungsbegleitende Anforderungen | Schulungen und andere begleitende Basis-Anforderungen rechtzeitig konzipieren und einplanen |

> NOTE: Vollstaendige Beschreibung fuer alle IT-Grundschutz-Vorgehensweisen in Kapitel 9 "Umsetzung der Sicherheitskonzeption".

### 6.5 Auswahl einer folgenden Vorgehensweise

Informationssicherheit muss gelebt werden. Erforderlich ist:
- Sicherheitsmassnahmen umsetzen und fortlaufend aktualisieren
- Gesamten Informationssicherheitsprozess regelmaessig auf Wirksamkeit/Effizienz ueberpruefen

**Basis-Absicherung als Einstieg:**
- Einstiegs-Vorgehensweise fuer zeitnahe Identifikation und Umsetzung wichtigster Sicherheitsempfehlungen
- Ziel: Mittelfristig vollstaendiges Sicherheitskonzept gemaess Standard-Absicherung
- Moeglicher Zwischenschritt: Kern-Absicherung

**Entscheidung nach Basis-Absicherung:**
- Zeitnah entscheiden, wann Verbesserungsprozess beginnt
- Abhaengig von Sicherheitsanspruechen und verfuegbaren Ressourcen: Naechster Schritt Standard- oder Kern-Absicherung

> NOTE: Informationen zur Auswahl in Kapitel 3.3 Entscheidung fuer Vorgehensweise.

---

## 7 Erstellung einer Sicherheitskonzeption nach Kern-Absicherung

### Zweck und Anwendungsfall

IT-Grundschutz bietet ganzheitlichen Schutz aller geschaeftsrelevanten Informationen. Fuer Institutionen mit grossem Handlungsbedarf kann es zielfuehrend sein:
- Anfangs nur essenzielle Assets absichern (Kern-Absicherung)
- Nachfolgend breites Sicherheitskonzept umsetzen (Standard-Absicherung)

**Voraussetzungen:**
- Informationssicherheitsprozess initiiert
- Wesentliche Rahmenbedingungen definiert
- Zu schuetzende Prozesse, Anwendungen, IT-Systeme identifiziert
- Vorgehensweise Kern-Absicherung ausgewaehlt

Organisatorische, personelle, infrastrukturelle und technische Standardsicherheitsanforderungen aus IT-Grundschutz-Kompendium sind in modularen Bausteinen strukturiert.

### Bereiche der Kern-Absicherung

| Bereich | Beschreibung |
|---|---|
| Festlegung Geltungsbereich | Abgrenzung des Informationsverbunds fuer Kern-Absicherung |
| Identifikation kritischer Assets | Festlegung der Kronjuwelen |
| Strukturanalyse | Erfassung der Komponenten im Informationsverbund |
| Schutzbedarfsfeststellung | Ermittlung des Schutzbedarfs (hoch/sehr hoch) |
| Modellierung | Auswahl und Anpassung von Anforderungen |
| IT-Grundschutz-Check | Soll-Ist-Vergleich |
| Risikoanalyse | Weiterfuehrende Sicherheitsmassnahmen bei erhoehtem Schutzbedarf |
| Umsetzung | Realisierung und weitere Schritte |

### 7.1 Die Methodik der Kern-Absicherung

**Fokus:** Schutz von besonders schuetzenswerten Assets ("Kronjuwelen").

**Vorgehen:** Soll-Ist-Vergleich zwischen IT-Grundschutz-Anforderungen und bereits erfuellten Anforderungen fuer Kronjuwelen-Absicherung. Defizite werden durch Massnahmen behoben.

**Ergebnis:** Sicherheitskonzept als Basis fuer umfangreicheres Sicherheitskonzept (Standard-Absicherung).

**Anforderungen bei Kern-Absicherung:**
- Grundsaetzlich erhoehter Schutzbedarf
- Basis- UND Standard-Anforderungen komplett umsetzen
- Bei erhoehtem Schutzbedarf: Risikoanalyse unter Beruecksichtigung von Kosten/Wirksamkeit
- Relevante Risiken im Bereich Kronjuwelen ganzheitlich behandeln
- Anforderungen fuer erhoehten Schutzbedarf (in Bausteinen exemplarisch aufgefuehrt) als Grundlage fuer individuelle Massnahmen

> NOTE: BSI-Standard 200-3 "Risikoanalyse auf Basis von IT-Grundschutz" beschreibt einfachere Vorgehensweise im Vergleich zu traditionellen Risikoanalyse-Methoden.

**Kern-Absicherung im Sicherheitsprozess:**
- Kein alleinstehendes Projekt, sondern Teil des Sicherheitsprozesses
- Nur als Projekt betrachtbar, wenn anschliessend in Standard-Absicherung integriert
- Solange keine Integration: Regelmaessige Ueberpruefung und Verbesserung des Kern-Absicherungs-Prozesses

### 7.2 Festlegung des Geltungsbereichs

**Strategie:** Viele kleine Schritte und langfristiger, kontinuierlicher Verbesserungsprozess ohne hohe Investitionskosten zu Beginn.

**Fokus:** Besonders schuetzenswerte Assets und Ressourcen. Von dort ausgehend kontinuierliche Verbesserung der Sicherheit in der gesamten Institution.

**Geltungsbereich (Informationsverbund) umfasst:**
- (Teil-)Geschaeftsprozesse fuer kritische Informationen
- Anwendungen fuer kritische Geschaeftsprozesse
- IT-Systeme, Infrastrukturen (ggf. ICS-Systeme)
- Alle Komponenten zur Bearbeitung besonders kritischer Geschaeftsprozesse/Informationen

**Besonderheit bei Kern-Absicherung:**
- Informationsverbund bewusst eingeschraenkt
- Informationsverbund klar abgrenzen UND moeglichst klein halten
- Jedes weitere Zielobjekt erhoeht Komplexitaet der Absicherung

**Empfehlung:**
- In Zweifelfaellen kritische Objekte in kleinen, ueberschaubaren, abgeschotteten Bereichen betreiben
- Getrennte IT-Umgebungen fuer geschaeftskritische Informationen (mit Unbequemlichkeiten)
- Besser als Verknuepfung hochschutzbeduerftiger Geschaeftsprozesse mit vielen Bueroanwendungen (wuerde alle vernetzten Komponenten auf hohes Sicherheitsniveau heben)

### 7.3 Identifikation und Festlegung der kritischen Assets (Kronjuwelen)

**Definition Kronjuwelen:** Geschaeftsprozesse und Informationen, die am wichtigsten fuer den Erhalt der Institution sind.

**Ziel:** Menge schuetzenswerter Daten gezielt eingrenzen.

#### Kritische Assets - Typische Merkmale

**Zu kritischen Assets gehoeren:**
- Informationen, wesentlich fuer Durchfuehrung essenzieller Geschaeftsprozesse
- Informationen/Geschaeftsprozesse mit deutlich erhoehtem Gefaehrdungspotenzial bzgl. Vertraulichkeit, Integritaet, Verfuegbarkeit
- Informationen/Geschaeftsprozesse, deren Diebstahl/Zerstoerung/Kompromittierung/Beeintraechtigung existenzbedrohenden Schaden bedeutet

#### Charakteristika zur Identifikation von Kronjuwelen

| Charakteristikum | Beschreibung |
|---|---|
| Art der Assets | Informationen oder Geschaeftsprozesse, NICHT Dienstleistungen, Anwendungen, IT-Systeme |
| Menge | Ueberschaubar, nur kleiner Anteil aller Geschaeftsprozesse. Wenige Assets ragen deutlich heraus |
| Erscheinungsformen | Einzelne Dateien, Datensammlungen, strukturierte/unstrukturierte Informationen, handschriftliche Notizen, Gespraeche, Wissen/Faehigkeiten einzelner Mitarbeiter |
| Klassifikation | Haeufig Assets, fuer die Erweiterung des Klassifikationsschemas um hoehere Kategorien wuenschenswert |
| Schutzbedarf | Mindestens "hoch", oft auch verknuepfte Ressourcen |
| Zeitliche Veraenderung | Schutzbedarf kann sich aendern (z.B. Produktneuerungen, Jahresabschlussberichte) |
| Besitzer/Verantwortung | Unterschiedliche Rollen: Zustaendigkeit (Responsibility) vs. Rechenschaftspflicht (Accountability) |
| Zugriffsbeschraenkung | Schutzbedarf kann so hoch sein, dass selbst Sicherheitsbeauftragte keine Einsichtsberechtigung haben (aber Schutzauftrag) |
| Gefaehrdungen | Alle elementaren Gefaehrdungen relevant (haeufig Fokus auf Angreifer), aber auch Umwelteinfluesse, menschliche Fehlhandlungen |

#### Festlegungsprozess

**Entscheidungstraeger:** Leitungsebene legt fest, welche Assets Kronjuwelen sind.

**Konsequenz:** Einstufung als Kronjuwel fuehrt zu adaequaten (umfangreichen, aufwendigen, teuren) Sicherheitsmassnahmen.

**Einbindung:** Fachverantwortliche, Sicherheitsbeauftragte und andere Instanzen koennen vorschlagen, Entscheidung liegt bei Leitungsebene.

**Empfehlung:** Jede Institution sollte individuelle Beispiele fuer Kronjuwelen UND Abgrenzungsbeispiele zu wichtigen (aber nicht kritischen) Informationen erarbeiten.

#### Typische Praxisbeispiele fuer Kronjuwelen

- Details ueber anstehende geschaeftliche Entscheidungen (Strategiepapiere fuer Firmenaufkaufe, Finanzierungsplaene)
- Details ueber Produktentwicklungen (Hintergrundmaterial zu Patentantraegen, Designentwuerfen)
- Informationen ueber Standorte geschuetzter Pflanzen, gefaehrdeter Personen, geheimer Anlagen
- Administrative Zugriffsdaten fuer Server (ohne Auffindbarkeit kein schneller Zugriff)
- Kryptomaterial (z.B. Masterschluessel fuer institutionsweit eingesetzte kryptografische Verfahren)
- Baupläne oder Rezepturen fuer Produkte

**Beispiel Koffeinbrause-Rezept:**
- Offenbarung (Verlust Vertraulichkeit): Grosser Pressewirbel, aber keine Existenzgefaehrdung (evtl. Produktwerbung). Manche Kronjuwelen zu "heiss", um fuer Angreifer/Konkurrent wertvoll zu sein.
- Unbemerkte Aenderung (Verlust Integritaet): Schwerer Imageschaden.
- Vollstaendiger Verlust (Verlust Verfuegbarkeit): Produktionsstillstand, schwerwiegendstes Problem.

#### Kumulative Kronjuwelen

Kronjuwelen koennen durch Kumulation wichtiger geschaeftskritischer Werte entstehen (nicht nur einzelner Prozess/Objekt im Fokus).

**Beispiel Buchverlag:**
- Streng vertraulicher Entwurf letzter Band Erfolgsreihe an Oeffentlichkeit: Schwerwiegender Sicherheitsvorfall
- ALLE Daten geplanter Bestseller fuer Geschaeftsjahr vernichtet, Veroeffentlichung verhindert: Wirtschaftliche Katastrophe

**Verfuegbarkeit von Ketten:**
- Nicht einzelner Prozess/Objekt hoechste Verfuegbarkeit, sondern Produktionskette oder Schutzeinrichtungen selbst
- Beispiel: Prozesse zur Energieerzeugung in Kernkraftwerk

### 7.4 Strukturanalyse

**Zweck:** Zusammenspiel von Geschaeftsprozessen, Anwendungen, Informationstechnik analysieren und dokumentieren.

**Ausgangsbasis:** Netztopologieplan (aufgrund starker Vernetzung von IT-Systemen).

**Zu beruecksichtigende Aspekte:**

| Aspekt | Inhalt |
|---|---|
| Anwendungen/Geschaeftsprozesse | Im eingeschraenkten Informationsverbund betriebene Anwendungen und dadurch gestuetzte Geschaeftsprozesse |
| Rahmenbedingungen | Organisatorische und personelle Rahmenbedingungen |
| IT-Systeme | Vernetzte und nicht vernetzte IT-Systeme |
| Kommunikation | Kommunikationsverbindungen zwischen IT-Systemen und nach aussen |
| Infrastruktur | Vorhandene Infrastruktur |

> NOTE: Detaillierte Handlungsanweisung in Kapitel 8.1.

### 7.5 Schutzbedarfsfeststellung

**Zweck:** Ermitteln, welcher Schutz fuer Geschaeftsprozesse, verarbeitete Informationen und eingesetzte Informationstechnik ausreichend und angemessen ist.

**Vorgehen:**
- Fuer jede Anwendung und verarbeitete Information: Zu erwartende Schaeden bei Beeintraechtigung von Vertraulichkeit, Integritaet, Verfuegbarkeit betrachten
- Moegliche Folgeschaeden realistisch einschaetzen

**Schutzbedarfskategorien:** "normal", "hoch", "sehr hoch".

**Bei Kern-Absicherung:**
- Grundsaetzlich Schutzbedarf "hoch" oder "sehr hoch"
- Trotzdem dedizierte Einschaetzung der wenigen, besonders geschaeftskritischen Assets erforderlich

**Verhaeltnis Kronjuwelen zu anderen Assets:**
Neben Kronjuwelen gibt es typischerweise weitere Assets mit hohem/sehr hohem Schutzbedarf, die angemessen zu schuetzen sind.

> NOTE: Details in Kapitel 8.2. Bei Kern-Absicherung liegt Fokus auf hohem und sehr hohem Schutzbedarf.

### 7.6 Modellierung: Auswahl und Anpassung von Anforderungen

**Voraussetzung:** Detaillierte Unterlagen ueber Struktur des Informationsverbunds und Schutzbedarf der Zielobjekte (aus vorherigen Arbeitsschritten).

**Ziel:** Geeignete Sicherheitsmassnahmen identifizieren durch Abbildung der IT-Grundschutz-Bausteine auf Zielobjekte und Teilbereiche.

> NOTE: Detaillierte Eroerterung in Kapitel 8.3.

### 7.7 IT-Grundschutz-Check

**Zweck:** Organisationsinstrument fuer schnellen Ueberblick ueber vorhandenes Sicherheitsniveau.

**Methode:** Interviews zur Ermittlung des Status quo eines nach IT-Grundschutz modellierten Informationsverbunds bzgl. Erfuellungsgrad der Sicherheitsanforderungen.

**Ergebnis:** Katalog mit Erfuellungsstatus je relevanter Anforderung:

| Status | Bedeutung |
|---|---|
| ja | Anforderung erfuellt |
| teilweise | Anforderung teilweise erfuellt |
| nein | Anforderung nicht erfuellt |
| entbehrlich | Mit Begruendung (nicht moeglich bei Basis-Anforderungen) |

**Nutzen:** Identifikation nicht/teilweise erfuellter Anforderungen zeigt Verbesserungsmoeglichkeiten fuer Sicherheit von Geschaeftsprozessen und Informationstechnik.

> NOTE: Aktionsplan in Kapitel 8.4 (organisatorische Aspekte und fachliche Anforderungen bei Projektdurchfuehrung).

### 7.8 Risikoanalyse und weiterfuehrende Sicherheitsmassnahmen

**Normalfall:** Erfuellung der Standard-Anforderungen nach IT-Grundschutz bietet angemessenen und ausreichenden Schutz.

**Bei Kern-Absicherung (hoher/sehr hoher Schutzbedarf):** Pruefen, ob zusaetzliche Sicherheitsanforderungen und damit zusaetzliche/ersatzweise hoeherwertige Sicherheitsmassnahmen erforderlich sind.

**Risikoanalyse durchfuehren bei:**
- Hohem/sehr hohem Schutzbedarf (regelmaessig bei Kern-Absicherung)
- Besonderen Einsatzbedingungen
- Komponenten, die nicht mit existierenden IT-Grundschutz-Bausteinen abbildbar sind

**Methode:** BSI-Standard 200-3 "Risikoanalyse auf Basis von IT-Grundschutz" (ueberblicksartig in Kapitel 8.5).

**Erfolgsfaktor:** Fachkenntnisse des Projektteams. Haeufig sinnvoll: Fachkundiges externes Personal hinzuziehen.

### 7.9 Umsetzung und weitere Schritte

**Umsetzung:** Identifizierte und konsolidierte Sicherheitsmassnahmen fuer Kern-Absicherung muessen umgesetzt werden.

> NOTE: Ausfuehrliche Diskussion in Kapitel 9 "Umsetzung der Sicherheitskonzeption".

**Aufgaben eines ISMS:**
- Informationssicherheit im Informationsverbund aufrechterhalten
- Fortlaufend verbessern (siehe Kapitel 10)

**Fuer Kern-Absicherung bedeutet dies:**
- Regelmaessig pruefen, ob Sicherheitsvorkehrungen aktueller Gefaehrdungslage entsprechen
- Ueberlegen, ob nach erfolgreicher Kronjuwelen-Absicherung weitere Bereiche geschuetzt werden sollten (Basis-/Standard-Absicherung auf weitere Bereiche oder Erweiterung des Kern-Absicherungs-Informationsverbunds)

**Zertifizierung:**
Erfolgreiche Umsetzung der Kern-Absicherung in abgegrenztem Informationsverbund kann ueber Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz nach innen/aussen demonstriert werden.

> NOTE: Notwendige Schritte und Bedingungen in Kapitel 11 "Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz".
## 8 Erstellung einer Sicherheitskonzeption nach Standard-Absicherung

### 8.1 Strukturanalyse

Die Strukturanalyse erfasst den Ist-Zustand des Informationsverbunds und bildet die Grundlage für Schutzbedarfsfeststellung und Modellierung.

#### 8.1.1 Komplexitätsreduktion durch Gruppenbildung

Gleichartige Objekte sollten zu Gruppen zusammengefasst werden, wenn sie:
- ähnlich konfiguriert sind
- ähnlich in das Netz eingebunden sind
- ähnlichen administrativen und infrastrukturellen Rahmenbedingungen unterliegen
- ähnliche Anwendungen bedienen
- den gleichen Schutzbedarf aufweisen

Typische Gruppen: Clients, Server (bei Redundanz/Durchsatz), virtuelle Maschinen, ICS-Geräte, Räume.

Bei Virtualisierung und Cloud Computing ist Gruppenbildung zwingend erforderlich. VMs können auch über verschiedene physische Hosts hinweg gruppiert werden, wenn sie ähnliche Aufgaben erfüllen und denselben Schutzbedarf aufweisen.

**Aktionspunkte:**
- Bei allen Teilaufgaben der Strukturanalyse gleichartige Objekte zu Gruppen zusammenfassen
- Typ und Anzahl der zusammengefassten Objekte vermerken

#### 8.1.2 Erfassung der Geschäftsprozesse und der zugehörigen Informationen

Ziel: Transparenz über Informationssicherheitsrisiken für die Leitungsebene schaffen. Erfassung der zentralen Geschäftsprozesse/Fachaufgaben im Informationsverbund mit sinnvoller Granularität (Hauptprozess + wichtigste Subprozesse, keine zu detaillierte Auflistung).

**Zu erfassen pro Prozess:**
- Eindeutiger Bezeichner
- Name
- Prozessverantwortlicher/Fachabteilung
- Kurze Beschreibung des Prozesses und der verarbeiteten Informationen
- Wichtige benötigte Anwendung(en)

Quellen: Prozesslandkarten, Geschäftsverteilungspläne, Aufgabenbeschreibungen, Verfahrensverzeichnis des Datenschutzbeauftragten.

Im ICS-Bereich: Neben Kernprozess der Produktion auch Nebenprozesse (Logistik, Instandhaltung) berücksichtigen.

**Aktionspunkte:**
- Überblick über Geschäftsprozesse erstellen
- Geschäftsprozesse mit eindeutigen Nummern/Kürzeln kennzeichnen
- Zusammenhang zwischen Geschäftsprozessen und Anwendungen darstellen

#### 8.1.3 Erfassung der Anwendungen und der zugehörigen Informationen

Ausgehend von Geschäftsprozessen werden die damit zusammenhängenden Anwendungen und verarbeiteten Informationen identifiziert. Granularität individuell wählen für optimale Transparenz und Effizienz.

Fokus auf Anwendungen/Informationen mit Mindestanforderungen an:
- Geheimhaltung (Vertraulichkeit)
- Korrektheit und Unverfälschtheit (Integrität)
- Verfügbarkeit

Erfassung erfolgt durch Befragung der Verantwortlichen und Benutzer. Bei komplexen Anwendungen: gemeinsame Sitzung von Fachabteilung, Anwendungsverantwortlichen und IT-Abteilung.

**Zu erfassen:**
Anwendungen, zugehörige Geschäftsprozesse, Verantwortliche, Benutzer.

**Sonderfall Datenträger und Dokumente:**
Sofern nicht fest mit Anwendung/IT-System verknüpft, gesondert erfassen (z.B. Archiv-/Backup-Datenträger, Austausch-Datenträger, USB-Sticks, externe Festplatten, Notfallhandbücher in Papierform, Mikrofilme, wichtige Verträge).

Virtualisierte Anwendungen nicht vergessen.

**Beispiel RECPLAST GmbH:**
Fiktive Institution mit ca. 500 Mitarbeitern, 130 Bildschirmarbeitsplätzen, 2 Standorte Bonn + 3 Vertriebsstandorte. Vollständiges Beispiel in den BSI-Hilfsmitteln zum IT-Grundschutz verfügbar. Auszugstabellen zeigen Geschäftsprozesse (GP001-GP005: Produktion, Angebotswesen, Auftragsabwicklung, Einkauf, Disposition) und Anwendungen (A003: Office-Produkt, A004: Chat, A008: Active Directory) mit Zuordnungen.

**Aktionspunkte:**
- Unter Einbeziehung der Verantwortlichen/Nutzer herausfinden, welche Anwendungen für Geschäftsprozesse erforderlich sind
- Übersicht über Anwendungen erstellen und mit eindeutigen Nummern/Kürzeln kennzeichnen

#### 8.1.4 Netzplanerhebung

Netzplan = grafische Übersicht über eingesetzte IKT-Komponenten und deren Vernetzung.

**Mindestinhalte:**
- IT-Systeme (Client-/Server-Computer, aktive Netzkomponenten, Netzdrucker, TK-Anlagen, Smartphones, virtuelle IT-Systeme)
- ICS-/IoT-Komponenten mit Netzanschluss (Clients, Handscanner, Industriedrucker, SPS, Schaltschränke)
- Netzverbindungen (LAN, WLAN, Backbone)
- Außenverbindungen (Einwahlzugänge ISDN/Modem, Internet, Funkstrecken, Mietleitungen)

**Zu jedem Objekt erfassen:**
- Eindeutige Bezeichnung (Hostname/ID-Nummer)
- Typ und Funktion
- Plattform (Hardware/Betriebssystem)
- Standort (Gebäude/Raum)
- Zuständiger Administrator
- Kommunikationsschnittstellen (Internet, Bluetooth, WLAN)
- Art der Netzanbindung und Netzadresse

Bei Außenanbindungen/drahtlosen Verbindungen: Details zum externen Netz (Internet, Geschäftspartner, Provider, Leitungsart).

Virtuelle IT-Systeme und virtuelle Netzverbindungen (VLANs, VPNs) ebenfalls darstellen. Zuordnung virtueller zu physischen Host-Systemen nachvollziehbar machen. Bei großen Netzen: Aufteilung in Teilnetzpläne.

Cloud-Infrastruktur: Netzmanagement-Tools sollten automatische Erzeugung von Netzplänen unterstützen (physische + virtuelle Komponenten).

ICS-Bereich: Schnittstellen erfassen (erlaubte/gesperrte), Internetanbindung aus ICS-Bereich, Trennung Office/ICS-Netz darstellen.

Bereiche mit unterschiedlichem Schutzbedarf kennzeichnen.

**Aktualisierung:**
Netzplan mit IT-Struktur abgleichen, IT-Verantwortliche/Administratoren konsultieren. Automatische Erkennungstools prüfen (Netzverkehr, Vollständigkeit beachten). ICS-Bereich: Haustechnik einbeziehen.

Bereinigter Netzplan dient auch der Darstellung für Dritte und Zertifizierung.

**Beispiel RECPLAST:** Detaillierte Netzpläne mit Tool verwaltet, bereinigte Version für Übersichtlichkeit. Auszug im Original verfügbar.

**Aktionspunkte:**
- Existierende Netztopologiepläne sichten
- Netzpläne aktualisieren oder neu erstellen
- Zusatzinformationen über IT-/ICS-/IoT-Systeme sichten, aktualisieren, vervollständigen
- Zusatzinformationen über Kommunikationsverbindungen sichten, aktualisieren, vervollständigen

#### 8.1.5 Erhebung der IT-Systeme

Liste der vorhandenen und geplanten IT-Systeme in tabellarischer Form. IT-System = Computer, IoT-/ICS-Geräte, aktive Netzkomponenten, Netzdrucker, TK-Anlagen, Smartphones, virtuelle IT-Systeme. Fokus: technische Realisierung (z.B. Apple MacBook, Client unter Windows, Linux-Server, TK-Anlage).

**Hinweis:** Vollständige Erfassung für ordnungsgemäßen IT-Betrieb notwendig. Für Sicherheitskonzept reicht Überblick über gruppierte IT-Systeme.

Erfassung: vernetzte + nicht vernetzte IT-Systeme (auch solche nicht im Netzplan). Gruppierung prüfen (z.B. nicht vernetzte Einzelplatz-PCs).

**Zu erfassen:**
- Eindeutige Bezeichnung (bei Gruppen: Anzahl vermerken)
- Beschreibung (Funktion, Typ)
- Plattform (Hardware-Architektur/Betriebssystem)
- Aufstellungsort (Ort, Gebäude, Raum)
- Status (in Betrieb, im Test, in Planung)
- Benutzer/Administratoren

Anschließend: Zuordnung der Anwendungen zu IT-Systemen (Ausführung, Datentransfer).

**Beispiel RECPLAST:** Auszugstabelle zeigt N001 (Router Internetanbindung), N002 (Firewall), N003 (Switch), N004 (Router Bonn-Beuel), S008 (Print-Server), S020 (Virtueller Server), S033 (Server Produktion).

**Aktionspunkte:**
- Prüfen, ob existierende Datenbanken/Übersichten als Ausgangsbasis geeignet sind
- Liste der vernetzten und nicht vernetzten IT-Systeme, IoT-/ICS-Geräte erstellen/aktualisieren/vervollständigen
- IT-/ICS-/IoT-Systeme bzw. Systemgruppen mit eindeutigen Nummern/Kürzeln kennzeichnen
- Anwendungen den IT-/ICS-/IoT-Systemen zuordnen

#### 8.1.6 Erhebung der ICS-Systeme

In Institutionen mit Produktion/Fertigung: Erfassung der industriellen Steuerungssysteme (ICS).

Neben IT-Systemen weitere ICS-Geräte: Arbeitsplatz-PCs (oft mit gleichen Anwendungen wie Büroumgebung + spezielle Anwendungen), Drucker, periphere Endgeräte (z.B. Handscanner, mit Kommunikationsverbindungen wie Bluetooth).

Weitere Endgeräte für industrielle Steuerung: SPS-Geräte, WLAN-Module für Industriemaschinen, selbstfahrende Gabelstapler.

**Zu erfassen:**
- Eindeutige Bezeichnung (bei Gruppen: Anzahl vermerken)
- Beschreibung (Typ, Funktion)
- Plattform (Betriebssystem, Art der Netzanbindung)
- Aufstellungsort (Gebäude, Halle, Raum)
- Status (in Betrieb, im Test, in Planung)
- Verantwortliche für Betrieb

**Beispiel RECPLAST:** Auszug zeigt S100 (SPS), S101 (SCADA), S103 (Server für Betriebsdatenerfassung).

#### 8.1.7 Erfassung sonstiger Geräte

Je nach Branche werden unterschiedlichste Geräte eingesetzt, die die Informationssicherheit beeinträchtigen können, z.B. IoT-Geräte.

Auch Geräte ohne direkte IT-Unterstützung können Informationssicherheit beeinträchtigen (z.B. Klimaanlagen, Gefahrenmeldeanlagen, Kaffeemaschinen durch Kabelbrand oder wenn ins IT-Netz integriert).

Für IT-Grundschutz-Modellierung: Geräte mit IoT-Funktionalität erfassen, die vernetzt sind (auch solche nicht im Netzplan). Zu Gruppen zusammenfassen.

**Zu erfassen:**
- Eindeutige Bezeichnung (bei Gruppen: Anzahl vermerken)
- Beschreibung (Typ, Funktion)
- Plattform (Betriebssystem, Art der Netzanbindung)
- Aufstellungsort
- Status (in Betrieb, im Test, in Planung)
- Verantwortliche für Betrieb

**Internet of Things (IoT):**
IoT-Geräte oft übersehen wegen überschaubarer Größe, geringem Preis, unauffälliger Internetfunktionalität.

Wichtig: Überblick verschaffen welche IoT-Geräte eingesetzt werden und wer die Akteure sind.

Ansatz: In Räumlichkeiten gehen, überlegen welche Komponenten Strom benötigen und vernetzt sein könnten (IT-Verkabelung, WLAN, Mobilfunk, freie WLANs, Bluetooth). Mit Haustechnik und Geräteverantwortlichen sprechen. Regelmäßige Netzscans nach nicht zuzuordnenden Geräten.

**Beispiele für IoT-Geräte:**
- Private Geräte von Mitarbeitern/Externen (Smartwatches, digitale Bilderrahmen, Wetterstationen, Fitnessarmbänder, Gadgets)
- Von Institution beschaffte Geräte (Brand-/Gas-/Warnmelder, Kaffeemaschinen, Gebäudesteuerung, Übergänge zu ICS fließend)
- Versteckte IoT-Funktionalität (z.B. Komfortmöbel für Smart Workplaces)

**Beispiel RECPLAST:** Auszug zeigt S200 (Alarmanlage BG), S201 (Alarmanlage Beuel), S202 (Video-Überwachung), S203 (Kühlschrank IT-Abteilung).

#### 8.1.8 Erfassung der Räume

Geschäftsprozesse/Fachaufgaben werden innerhalb der räumlichen Infrastruktur betrieben.

In Sicherheitskonzept einbeziehen: alle Liegenschaften (Betriebsgelände, Gebäude, Etagen, Räume, Wegstrecken dazwischen). Kommunikationsverbindungen über für Dritte zugängliche Gelände = Außenverbindungen. Auch drahtlose Verbindungen falls Dritte zugreifen können.

Nicht vergessen: außerhalb offizieller Liegenschaften genutzte Räumlichkeiten (Telearbeitsplätze, temporär angemietete Arbeitsplätze/Lagerflächen).

Übersicht über Liegenschaften/Räume erstellen, in denen IT-/ICS-/IoT-Systeme aufgestellt/betrieben werden:
- Räume ausschließlich für IT-Betrieb (Serverräume, Datenträgerarchive)
- Räume mit IT-/ICS-/IoT-Systemen (Büroräume, Werkhallen)
- Wegstrecken für Kommunikationsverbindungen
- Schutzschränke (als Raum erfassen)

Zusätzlich: Räume wo schutzbedürftige Informationen aufbewahrt werden (auch nicht elektronische: Aktenordner, Mikrofilme).

**Beispiel RECPLAST:** Auszugstabelle zeigt R001 (Büroraum), R002 (Besprechungsräume), R003 (Häuslicher Arbeitsplatz), R004 (Mobiler Arbeitsplatz).

**Aktionspunkte:**
- Liste aller bei Erfassung der IT-/ICS-/IoT-Systeme notierten Liegenschaften, Gebäude, Räume erstellen
- Weitere Räume ergänzen, in denen schutzbedürftige Informationen aufbewahrt/verarbeitet werden

### 8.2 Schutzbedarfsfeststellung

Ziel: Für erfasste Objekte im Informationsverbund entscheiden, welchen Schutzbedarf sie bezüglich Vertraulichkeit, Integrität und Verfügbarkeit besitzen. Schutzbedarf orientiert sich an möglichen Schäden bei Beeinträchtigung der Anwendungen/Geschäftsprozesse.

**Schritte:**
1. Definition der Schutzbedarfskategorien
2. Schutzbedarfsfeststellung für Geschäftsprozesse und Anwendungen
3. Schutzbedarfsfeststellung für IT-Systeme, IoT-/ICS-Geräte
4. Schutzbedarfsfeststellung für Gebäude, Räume, Werkhallen
5. Schutzbedarfsfeststellung für Kommunikationsverbindungen
6. Schlussfolgerungen aus Ergebnissen

#### 8.2.1 Definition der Schutzbedarfskategorien

IT-Grundschutz unterteilt Schutzbedarf qualitativ in drei Kategorien:

| Kategorie | Schadensauswirkungen |
|---|---|
| normal | begrenzt und überschaubar |
| hoch | können beträchtlich sein |
| sehr hoch | können existenziell bedrohlich, katastrophal sein |

**Hinweis:** Weitere Kategorien möglich (z.B. "unkritisch" nach unten). Mehr als 5 Kategorien erschweren klare Unterscheidung und erhöhen Aufwand.

Unterschiedliche Kategorien für verschiedene Grundwerte möglich (z.B. Vertraulichkeit: offen/intern/vertraulich/geheim, Integrität/Verfügbarkeit: normal/kritisch).

Bei mehr als 3 Kategorien: Zuordnung zu "hoch"/"sehr hoch" festlegen (für Risikoanalyse-Entscheidung).

**Schadensszenarien zur Zuordnung:**
- Verstoß gegen Gesetze/Vorschriften/Verträge
- Beeinträchtigung des informationellen Selbstbestimmungsrechts
- Beeinträchtigung der persönlichen Unversehrtheit
- Beeinträchtigung der Aufgabenerfüllung
- Negative Innen- oder Außenwirkung
- Finanzielle Auswirkungen

Häufig treffen mehrere Schadensszenarien zu.

**Hinweis:** Art und Anzahl der Szenarien individuell anpassbar je nach Schwerpunkten der Institution. Szenario "informationelles Selbstbestimmungsrecht" kann entfallen wenn Datenschutzmanagement dies bereits betrachtet. "Persönliche Unversehrtheit" kann wegfallen außer bei Gesundheitswesen/Produktionsbereichen.

Zusätzliche Szenarien möglich: Einschränkung der Dienstleistungen für Dritte, Auswirkungen auf weitere Infrastrukturen außerhalb des Informationsverbunds.

**Schutzbedarfskategorie "normal":**

| Szenario | Beschreibung |
|---|---|
| Verstoß gegen Gesetze/Vorschriften/Verträge | Verstöße mit geringfügigen Konsequenzen; geringfügige Vertragsverletzungen mit maximal geringen Konventionalstrafen |
| Beeinträchtigung informationelles Selbstbestimmungsrecht | Personenbezogene Daten, durch deren Verarbeitung Betroffener in gesellschaftlicher Stellung/wirtschaftlichen Verhältnissen beeinträchtigt werden kann |
| Beeinträchtigung persönliche Unversehrtheit | Beeinträchtigung erscheint nicht möglich |
| Beeinträchtigung Aufgabenerfüllung | Beeinträchtigung würde als tolerabel eingeschätzt; max. tolerierbare Ausfallzeit 24-72 Stunden |
| Negative Innen-/Außenwirkung | Geringe bzw. nur interne Ansehens-/Vertrauensbeeinträchtigung |
| Finanzielle Auswirkungen | Finanzieller Schaden bleibt tolerabel |

**Schutzbedarfskategorie "hoch":**

| Szenario | Beschreibung |
|---|---|
| Verstoß gegen Gesetze/Vorschriften/Verträge | Verstöße mit erheblichen Konsequenzen; Vertragsverletzungen mit hohen Konventionalstrafen |
| Beeinträchtigung informationelles Selbstbestimmungsrecht | Personenbezogene Daten, bei deren Verarbeitung Betroffener in gesellschaftlicher Stellung/wirtschaftlichen Verhältnissen erheblich beeinträchtigt werden kann |
| Beeinträchtigung persönliche Unversehrtheit | Beeinträchtigung kann nicht absolut ausgeschlossen werden |
| Beeinträchtigung Aufgabenerfüllung | Beeinträchtigung würde von einzelnen Betroffenen als nicht tolerabel eingeschätzt; max. tolerierbare Ausfallzeit 1-24 Stunden |
| Negative Innen-/Außenwirkung | Breite Ansehens-/Vertrauensbeeinträchtigung |
| Finanzielle Auswirkungen | Schaden bewirkt beachtliche finanzielle Verluste, aber nicht existenzbedrohend |

**Schutzbedarfskategorie "sehr hoch":**

| Szenario | Beschreibung |
|---|---|
| Verstoß gegen Gesetze/Vorschriften/Verträge | Fundamentaler Verstoß; Vertragsverletzungen mit ruinösen Haftungsschäden |
| Beeinträchtigung informationelles Selbstbestimmungsrecht | Personenbezogene Daten, bei deren Verarbeitung Gefahr für Leib/Leben oder persönliche Freiheit gegeben ist |
| Beeinträchtigung persönliche Unversehrtheit | Gravierende Beeinträchtigungen möglich; Gefahr für Leib und Leben |
| Beeinträchtigung Aufgabenerfüllung | Beeinträchtigung würde von allen Betroffenen als nicht tolerabel eingeschätzt; max. tolerierbare Ausfallzeit < 1 Stunde |
| Negative Innen-/Außenwirkung | Landesweite Ansehens-/Vertrauensbeeinträchtigung, eventuell existenzgefährdend |
| Finanzielle Auswirkungen | Finanzieller Schaden ist existenzbedrohend |

Grenzen individuell an Institution anpassen (z.B. prozentuale Größen am Gesamtumsatz/Gewinn orientiert). Verfügbarkeitsanforderungen: Häufung von Ausfällen kann in Summe nicht tolerierbar sein.

ICS-Bereich: Schutzbedarfskategorien ggf. separat festlegen (z.B. kürzere Ausfallzeiten), aber auf restlichen Informationsverbund abstimmen.

Datenschutz: Standard-Datenschutzmodell (SDM) bietet Kriterien für Risiko-Einstufung und Hilfestellung bei Abweichungen zwischen IS- und Datenschutz-Schutzbedarf.

Grenze zwischen "normal" und "hoch": Berücksichtigen, dass für normalen Schutzbedarf Basis-/Standard-Anforderungen des IT-Grundschutzes ausreichen sollten.

Festlegungen im Sicherheitskonzept dokumentieren (Folgekosten beachten).

**Aktionspunkte:**
- Typische Schadensszenarien für Definition von Schutzbedarfskategorien betrachten
- Schutzbedarfskategorien "normal", "hoch", "sehr hoch" definieren bzw. an Institution anpassen

#### 8.2.2 Vorgehen bei der Schutzbedarfsfeststellung

Schutzbedarf der Geschäftsprozesse/Anwendungen bestimmen, daraus Schutzbedarf der einzelnen Objekte (IT-Systeme, Räume, Kommunikationsverbindungen) ableiten.

**Vererbung:** Schutzbedarf der Geschäftsprozesse/Informationen vererbt sich auf genutzte Objekte (Anwendungen, IT-Systeme, ICS-/sonstige Geräte, Räume, Kommunikationsverbindungen).

**Maximumprinzip:** Schaden bzw. Summe der Schäden mit schwerwiegendsten Auswirkungen bestimmt Schutzbedarf eines Objekts.

**Beachtung von Abhängigkeiten:** Weniger bedeutende Anwendung A kann wichtig werden, wenn wichtige Anwendung B auf ihre Ergebnisse angewiesen ist. Schutzbedarfsanforderungen können zwischen IT-Systemen übertragen werden.

**Kumulationseffekt:** Kumulation mehrerer kleinerer Schäden auf einem Objekt kann insgesamt höheren Gesamtschaden verursachen. Schutzbedarf erhöht sich entsprechend.

Beispiel: Netzserver mit allen Kundendatenerfassungs-Anwendungen. Ausfall einer Anwendung = gering, Ausfall aller = deutlich höher.

**Verteilungseffekt:** Anwendung mit hohem Schutzbedarf überträgt ihn nicht auf IT-System, wenn dort nur unwesentliche Teilbereiche laufen. Schutzbedarf ist zu relativieren.

Verteilungseffekt tritt hauptsächlich bei Verfügbarkeit auf (redundante Auslegung). Auch bei Vertraulichkeit möglich (Client nur unkritische Daten einer hochvertraulichen Datenbank).

Verteilungseffekt tritt häufig auf, wenn bei Einrichtung/Aufbau bereits durch Redundanzen Anforderungen an hohen Schutzbedarf Rechnung getragen wurde (Vorgriff auf Risikoanalyse, sorgfältig dokumentieren).

Schutzbedarfsfeststellung ist iterativer Prozess. Nach Risikoanalysen erneut prüfen, ob Anpassung nötig (neue Erkenntnisse).

#### 8.2.3 Schutzbedarfsfeststellung für Geschäftsprozesse und Anwendungen

Schutzbedarf der Geschäftsprozesse/zugehörigen Informationen ermitteln, daraus Schutzbedarf von Anwendungen, IT-Systemen, ICS-/sonstigen Geräten, Räumen, Kommunikationsverbindungen ableiten.

Bedeutung der Geschäftsprozesse beleuchten, Abhängigkeiten zu Anwendungen hinterfragen, Risiken entschärfen. Bewährt: "Was wäre, wenn...?" mit Anwendern diskutieren, realistische Schadensszenarien beschreiben, materielle/ideelle Schäden bewerten. Deckt oft kritische Abhängigkeiten auf.

Aus Schutzbedarf der Geschäftsprozesse ergibt sich Schutzbedarf der Anwendungen.

**Hinweis:** Geeignete Ansprechpartner suchen, nicht größere Benutzergruppen befragen. Für zentrale Dienste (DNS, E-Mail): Schutzbedarf durch IT-Abteilung/Provider-Management festlegen lassen, in Institution kommunizieren. Höherwertiger Schutzbedarf durch Fachabteilungen: Lösungen mit Fachabteilung, Sicherheitsmanagement, Betreiber/Anbieter erörtern. IT-Dienstleister bietet Services mit festgelegter Schutzbedarfseignung an. Informationseigentümer muss entscheiden, ob diese ausreicht oder zusätzliche Maßnahmen nötig.

Gruppen von Datenträgern/Dokumenten aus Strukturanalyse einbeziehen.

Fragestellungen zur Ermittlung möglicher Schäden im Anhang des Standards (nicht vollständig, Orientierung, an Institution anpassen).

Festlegung des Schutzbedarfs = Risikomanagement-Entscheidung mit weitreichenden Auswirkungen. Bei komplexen Geschäftsprozessen (hoher/sehr hoher Schutzbedarf): Zerlegung in Teilprozesse erwägen. Vorteil: hoher/sehr hoher Schutzbedarf auf wenige Teilprozesse/Objekte eingrenzen.

Ergebnisse und Begründungen gut dokumentieren für spätere Nachvollziehbarkeit und Überprüfung.

**Beispiel RECPLAST:** Auszugstabelle zeigt Anwendungen (A003 Office-Produkt, A007 Lotus Notes, C002 Laptop Verwaltung), Gebäude (G003 Vertrieb Berlin), Kommunikationsverbindungen (K001 Internet Bonn BG), Räume (R003 Häuslicher Arbeitsplatz), Netzkomponenten (N001 Router), Server (S020 Virtueller Server) mit jeweiligem Schutzbedarf (Vertraulichkeit/Integrität/Verfügbarkeit) und Begründungen.

Optional: Bedeutung der Anwendung für Geschäftsprozess/Fachaufgabe klassifizieren:
- normal: Geschäftsprozess kann mit tolerierbarem Mehraufwand mit anderen Mitteln durchgeführt werden
- hoch: Geschäftsprozess nur mit deutlichem Mehraufwand mit anderen Mitteln durchführbar
- sehr hoch: Geschäftsprozess ohne Anwendung überhaupt nicht durchführbar

Vorteil: Leitungsebene als Regulativ, kann Einschätzung nach oben korrigieren.

**Aktionspunkt:**
- Schutzbedarf der Geschäftsprozesse/Anwendungen anhand von Schadensszenarien und Fragenkatalogen ermitteln
- Schutzbedarf und Begründungen tabellarisch dokumentieren

#### 8.2.4 Schutzbedarfsfeststellung für IT-Systeme

Anwendungen betrachten, die in direktem Zusammenhang mit IT-System stehen. Übersicht aus Strukturanalyse. Schutzbedarf der Geschäftsprozesse/Anwendungen fließt in Schutzbedarfsfeststellung für IT-Systeme ein.

Nicht nur IT-Systeme mit installierter Anwendung berücksichtigen, auch Datenfluss beachten (Schutzbedarf vererbt sich auf dazwischenliegende Netzkomponenten).

Mögliche Schäden der relevanten Anwendungen in Gesamtheit betrachten. Ergebnisse in Tabelle: Schutzbedarf für Vertraulichkeit, Integrität, Verfügbarkeit. Gesamtschutzbedarf = Maximum der drei Grundwerte. IT-System hochschutzbedürftig wenn ein oder mehrere Grundwerte "hoch".

Schutzbedarf für alle drei Grundwerte einzeln dokumentieren (verschiedene Arten von Sicherheitsmaßnahmen).

Beispiel: Gesamtschutzbedarf "hoch" aus Vertraulichkeit "hoch", Integrität/Verfügbarkeit "normal". Integrität/Verfügbarkeit müssen nicht angehoben werden.

Festlegungen begründen (Nachvollziehbarkeit). Rückverweis auf Schutzbedarfsfeststellung der Anwendungen möglich.

**Beispiel RECPLAST:** Auszugstabelle zeigt IT-Systeme (N001 Router Internetanbindung, N002 Firewall, N003 Switch, N004 Router Bonn-Beuel, S008 Print-Server, S020 Virtueller Server, S033 Server Produktion) mit Schutzbedarf und Begründungen.

**Schutzbedarfsfeststellung bei virtualisierten Infrastrukturen:**

Prinzip bleibt gleich. Mehrere IT-Systeme auf Virtualisierungsserver. Schutzbedarf der Anwendungen vererbt sich auf virtuelle IT-Systeme, diese vererben auf Virtualisierungsserver.

**Vertraulichkeit:** Schutzbedarf vererbt sich auf Virtualisierungsserver. Kumulationseffekt prüfen (mehrere kleinere Schäden → höherer Gesamtschaden).

**Integrität:** Wie Vertraulichkeit behandeln.

**Verfügbarkeit:** Schutzbedarf "normal" führt meist zu Erhöhung durch Kumulationseffekt. Virtualisierung bietet Redundanzen (Cold-/Warm-/Hot-Standby). Bei umgesetzten Maßnahmen sinkt Schutzbedarf durch Verteilungseffekt. Beispiele:
- VMs "normal" → Kumulation "hoch" → Verteilung "normal" (Warm-Standby)
- VMs "hoch" → Kumulation "sehr hoch" → Verteilung "hoch" (Hot-Standby)

**Schutzbedarfsfeststellung beim Cloud-Computing (IaaS Compute):**

Wenig Änderung gegenüber obiger Vorgehensweise. Bei IaaS Compute: virtuelle Maschinen über Webschnittstelle. Schutzbedarf des Virtualisierungsservers durch Schutzbedarf der darauf betriebenen VMs beeinflusst.

Live Migration/vMotion/XenMotion: VMs zwischen Virtualisierungsservern verschieben, Hostsysteme bei geringer Last in Stand-by/herunterfahren (Stromersparnis). Vorteil unbestritten, aber Live Migration erschwert Schutzbedarfsfeststellung.

Empfehlung: Cloud-Computing-Plattform für unterschiedliche Bereiche (Virtualisierungscluster) nach Schutzbedarf ("normal"/"hoch"). Anwendungen mit gleichem Schutzbedarf auf vorgesehenem Cluster. Bereiche physisch getrennt, VMs nicht bereichsübergreifend verschiebbar.

Auf gesonderte Schutzbedarfsfeststellung für virtuelle IT-Systeme und Virtualisierungsserver kann verzichtet werden.

**Hinweis:** Meist nur normale Schutzbedarfsanwendungen auf IT-System, wenige hochschutzbedürftig: Auslagerung der hochschutzbedürftigen auf isoliertes IT-System erwägen (gezielter absichern, oft kostengünstiger). Alternative dem Management zur Entscheidung vorlegen.

**Aktionspunkte:**
- Schutzbedarf der IT-/ICS-Systeme/sonstigen Geräte anhand Schutzbedarf der Geschäftsprozesse/Anwendungen ermitteln
- Abhängigkeiten, Maximumprinzip, ggf. Kumulations-/Verteilungseffekt berücksichtigen
- Pro System(-Gruppe) Ergebnisse für Vertraulichkeit, Integrität, Verfügbarkeit sowie Begründungen dokumentieren

#### 8.2.5 Schutzbedarfsfeststellung für ICS-Systeme

Schutzbedarf aller ICS-Systeme feststellen (erfasst in 8.1.6).

Nicht per se alle Objekte sehr hohem Schutzbedarf. Enge Abstimmung mit Verantwortlichen der ICS-Systeme (wissen welche Anforderungen an V/I/V). Schutzbedarf leitet sich aus Anwendungszweck ab.

ICS-Systeme für verschiedene Aufgaben verwendbar (z.B. Produktionsstraße wechselnd umsatzstarkes/weniger umsatzstarkes Produkt). Abhängigkeiten beachten (Maximumprinzip).

Schutzbedarfsdefinition: Klassifikationen für weitere Schutzbedarfsfeststellungen übernehmen oder anpassen.

**Beispiel RECPLAST:** IT-System Büroumgebung: Ausfallzeit bis 30 Stunden = normal. Für ICS-Systeme ggf. Reduzierung auf 12-24 Stunden.

Schutzbedarf für V/I/V ermitteln. Gesamtschutzbedarf nach Maximumprinzip. Festlegungen begründen (Nachvollziehbarkeit).

**Beispiel RECPLAST:** Auszugstabelle zeigt ICS-Systeme (S100 SPS, S101 SCADA, S103/S104 Server für Betriebsdatenerfassung) mit Schutzbedarf und Begründungen.

#### 8.2.6 Schutzbedarfsfeststellung für sonstige Geräte

Schutzbedarf sonstiger Geräte: Bestimmen für welche Geschäftsprozesse/Anwendungen eingesetzt, wie Schutzbedarf vererbt (Info aus 8.1.7). Datenfluss beachten (Vererbung auf dazwischenliegende Netzkomponenten).

Mögliche Schäden der relevanten Geschäftsprozesse in Gesamtheit betrachten. Ergebnisse in Tabelle falls Einfluss auf Informationssicherheit. Nur Geräte betrachten, die Informationssicherheit nennenswert beeinträchtigen könnten. Zu Gruppen zusammenfassen.

Schutzbedarf für V/I/V vermerken. Gesamtschutzbedarf = Maximum der drei Grundwerte.

Festlegungen begründen (Nachvollziehbarkeit). Rückverweis auf Schutzbedarfsfeststellung Geschäftsprozesse/Anwendungen.

Je nach Branche unterschiedlichste Geräte. Neben IT-Systemen auch andere Geräte mit Einfluss auf Informationssicherheit (z.B. IoT-Funktionalitäten).

**Beispiel RECPLAST:** Auszugstabelle zeigt sonstige/IoT-Geräte (S200 Alarmanlage BG, S201 Alarmanlage Beuel, S202 Video-Überwachung, S203 Kühlschrank IT-Abteilung) mit Schutzbedarf und Begründungen.

#### 8.2.7 Schutzbedarfsfeststellung für Räume

Aus Ergebnissen der Schutzbedarfsfeststellung Geschäftsprozesse/Anwendungen sowie IT-Systeme/ICS-/sonstige Geräte ableiten, welcher Schutzbedarf für Liegenschaften/Räume resultiert.

Schutzbedarf leitet sich nach Maximumprinzip ab aus:
- Im Raum installierten Objekten
- Verarbeiteten Informationen
- Datenträgern, die gelagert/benutzt werden

Eventuelle Abhängigkeiten und Kumulationseffekt berücksichtigen (größere Anzahl IT-Systeme/ICS-Geräte/Datenträger wie bei Serverräumen, Rechenzentren, Werkhallen, Datenträgerarchiven).

Für jede Schutzbedarfseinschätzung Begründung dokumentieren.

Tabellarische Erfassung aufbauend auf bereits erstellter Übersicht über erfasste Räume.

**Beispiel RECPLAST:** Auszugstabelle zeigt Räume (R001 Büroräume, R002 Besprechungsräume, R003 Häuslicher Arbeitsplatz, R004 Mobiler Arbeitsplatz) mit Schutzbedarf und Begründungen.

**Aktionspunkte:**
- Schutzbedarf der Räume aus Schutzbedarf der Geschäftsprozesse, Anwendungen, IT-Systeme, ICS-/sonstigen Geräte ableiten
- Abhängigkeiten, Maximumprinzip, ggf. Kumulationseffekt berücksichtigen
- Ergebnisse und Begründungen nachvollziehbar dokumentieren

#### 8.2.8 Schutzbedarfsfeststellung für Kommunikationsverbindungen

Nach Abschluss der Schutzbedarfsfeststellung für Geschäftsprozesse, Anwendungen, IT-Systeme, ICS-/sonstige Geräte, Räume: Schutzbedarf der Vernetzungsstruktur erarbeiten.

Grundlage: Netzplan aus 8.1.4.

Entscheidungen vorbereiten: Wo kryptografische Sicherheitsmaßnahmen, wo redundante Auslegung, über welche Verbindungen Angriffe durch Innen-/Außentäter erwarten.

**Kritische Kommunikationsverbindungen:**

- **Außenverbindungen:** In/über unkontrollierte Bereiche (Internet, öffentliches Gelände). Auch drahtlose Verbindungen (schwierig Zugriff von öffentlichem Gelände zu verhindern). Gefahr: Penetrationsversuche, Schadprogramme durch externe Angreifer, Innentäter vertrauliche Informationen nach außen. Verfügbarkeit oft besonders gefährdet. Fernadministrations-Außenverbindungen nicht vergessen.

- **Hochschutzbedürftige Informationen:** Verbindungen über die hochschutzbedürftige Informationen übertragen werden (hohe Vertraulichkeit/Integrität/Verfügbarkeit). Angriffsziel vorsätzlichen Abhörens/Manipulation. Ausfall kann Funktionsfähigkeit wesentlicher Teile beeinträchtigen.

- **Produzierender Bereich:** Kommunikationsverbindungen im produzierenden Bereich (z.B. bei Netztrennung Verbindungen zwischen Netzen).

**Vorgehensweise:**
1. Sämtliche "Außenverbindungen" als kritisch identifizieren/erfassen
2. Sämtliche Verbindungen von IT-System/Gruppe mit hohem/sehr hohem Schutzbedarf untersuchen: diejenigen identifizieren über die hochschutzbedürftige Informationen übertragen werden
3. Verbindungen untersuchen über die hochschutzbedürftige Daten weitergeleitet werden
4. Kommunikationsverbindungen identifizieren über die derlei Informationen nicht übertragen werden dürfen

**Zu erfassen:**
- Verbindungsstrecke
- Ob Außenverbindung
- Ob hochschutzbedürftige Informationen übertragen, ob Schutzbedarf aus V/I/V resultiert

Entscheidungen tabellarisch dokumentieren oder grafisch im Netzplan hervorheben.

**Beispiel RECPLAST:** Auszugstabellen zeigen Strukturanalyse Kommunikationsverbindungen (K001 Internet Bonn BG, K002 Standleitung Bonn BG-Beuel, K003 Verbindungen zwischen Netzkomponenten, K004 Verbindungen Netzkomponenten zu Servern, K005 zu ICS-/IoT-/sonstigen Geräten, K006 zu Arbeitsplätzen) und Schutzbedarfsfeststellung mit Begründungen.

**Aktionspunkte:**
- Außenverbindungen erfassen und in tabellarischer/grafischer Form dokumentieren
- Verbindungen über die kritische Informationen übertragen identifizieren
- Alle kritischen Kommunikationsverbindungen in tabellarischer/grafischer Form dokumentieren

#### 8.2.9 Schlussfolgerungen aus den Ergebnissen der Schutzbedarfsfeststellung

Ergebnisse bieten Anhaltspunkt für weitere Vorgehensweise der Sicherheitskonzeption.

**Schutzwirkung von Sicherheitsanforderungen nach IT-Grundschutz:**

| Schutzbedarfskategorie | Schutzwirkung |
|---|---|
| normal | Sicherheitsanforderungen nach IT-Grundschutz im Allgemeinen ausreichend und angemessen |
| hoch | Sicherheitsanforderungen liefern Standard-Absicherung, aber unter Umständen alleine nicht ausreichend. Weitergehende Maßnahmen auf Basis Risikoanalyse ermitteln |
| sehr hoch | Sicherheitsanforderungen liefern Standard-Absicherung, reichen aber alleine im Allgemeinen nicht aus. Erforderliche zusätzliche Maßnahmen individuell auf Grundlage Risikoanalyse ermitteln |

Risikoanalyse auch bei hohem/sehr hohem Schutzbedarf durchführen wenn Objekte:
- Mit existierenden IT-Grundschutz-Bausteinen nicht hinreichend modelliert werden können
- In Einsatzszenarien betrieben werden, die im IT-Grundschutz nicht vorgesehen sind

Ausführliche Informationen zur Risikoanalyse in Kapitel 8.5.

**Bereiche mit unterschiedlichem Schutzbedarf:**

Häufig Bereiche mit hohem/sehr hohem Schutzbedarf. Starke Vernetzung/Kopplung führt schnell zu Übertragung des höheren Schutzbedarfs nach Maximumprinzip.

Um Risiken/Kosten einzudämmen: Sicherheitszonen zur Trennung von Bereichen mit unterschiedlichem Schutzbedarf einrichten (räumlich, technisch, personell).

**Beispiele:**

- **Räumliche Sicherheitszonen:** Zonen mit starkem Besucherverkehr von hochschutzbedürftigen Bereichen trennen. Besprechungs-/Schulungs-/Veranstaltungsräume, Kantine nahe Gebäudeeingang. Zugang zu Büros durch Pförtner überwacht. Besonders sensitive Bereiche (Entwicklungsabteilung) mit zusätzlicher Zugangskontrolle (Chipkarten).

- **Technische Sicherheitszonen:** Vertrauliche Daten auf bestimmte LAN-Bereiche begrenzen, Störungen/Angriffe auf Funktionsfähigkeit minimieren: LAN in Teilnetze aufteilen (siehe Baustein NET.1.1 Netzarchitektur und -design).

- **Personelle Sicherheitszonen:** Nur so viele Rechte vergeben wie für Aufgabe erforderlich. Rollen nicht gleichzeitig wahrnehmen (Revisor nicht in Buchhaltung und IT-Administration). Personengruppen mit unvereinbaren Funktionen in getrennten Gruppen/Abteilungen.

- **Zonenkonzept bei virtualisierten Infrastrukturen:** Im technischen Zonenkonzept berücksichtigen. Virtualisierung = Konsolidierung (mehrere Server virtuell auf physischem Host). Server können unterschiedlichem Schutzbedarf unterliegen. Vor Virtualisierung festlegen: welche Dienste/Anwendungen zusammen in virtueller Umgebung, welche separiert. Segmentierung alle Bereiche erfassen (Server, Netze, Storage, Management). Entscheidungskriterien: Server organisatorisch/sicherheitstechnisch sinnvoll in Zonen gruppieren; Zonen nicht mit Sicherheitskomponente für Separierung zusammen virtualisieren; welche Komponenten zusammen auf gemeinsamer Hardware abhängig von Schutzbedarf/Bedarfsträger. Bedarfsträger = unterschiedliche Mandanten (Hosting), Organisationseinheiten, Verfahren. Herausforderung: gleiches Verständnis der Schutzbedarfskategorien.

- **Zonenkonzept beim Cloud Computing:** Cloud-Computing-Plattformen mandantenfähig, verlässliche durchgängige Trennung über kompletten Cloud-Computing-Stack (Server, Netze, Storage, Management). Neben gängigen Sicherheitsmaßnahmen (Schadprogramm-/Spamschutz, IDS, IPS) auf Netzebene geeignete Segmentierung: Sicherheitszonen nach Schutzbedarf definieren/einrichten. Beispiele: Sicherheitszone für Management der Cloud, für Live Migration, für Storage-Netz, für virtuelle Maschinen. Empfehlung: unterschiedliche Zonen für Server-Hardware nach Schutzbedarf, untereinander mit Sicherheitsgateways trennen.

Bei Planung neuer Geschäftsprozesse/Fachaufgaben/Anwendungen: frühzeitig prüfen ob Sicherheitszonen zweckmäßig. Spart Arbeit in nachfolgenden Phasen bis Revision.

**Aktionspunkte:**
- Prüfen, ob Objekte mit erhöhten Sicherheitsanforderungen in Sicherheitszonen konzentriert werden können
- Objekte mit erhöhten Sicherheitsanforderungen für Risikoanalyse vormerken

### 8.3 Modellierung eines Informationsverbunds

Nach Strukturanalyse und Schutzbedarfsfeststellung: Informationsverbund mithilfe IT-Grundschutz-Kompendium-Bausteine nachbilden.

Ergebnis: IT-Grundschutz-Modell des Informationsverbunds aus verschiedenen, ggf. mehrfach verwendeten Bausteinen. Beinhaltet durch Verwendung der Bausteine sicherheitsrelevante Aspekte.

#### 8.3.1 Das IT-Grundschutz-Kompendium

IT-Grundschutz-Kompendium in aktueller Fassung vom BSI-Webserver herunterladbar oder beim Bundesanzeiger Verlag.

**IT-Grundschutz-Bausteine:**

Kompendium enthält für Vorgehensweisen, Komponenten, IT-Systeme: Gefährdungslage, Sicherheitsanforderungen, weiterführende Informationen (jeweils in Baustein zusammengefasst).

Modular aufgebaut (Bausteinstruktur) um Innovationsschübe/Versionswechsel zu berücksichtigen. Konzentriert auf wesentliche Sicherheitsanforderungen. Leicht erweiter-/aktualisierbar.

Bausteine in prozess-/systemorientierte Bausteine aufgeteilt, nach zusammengehörigen Themen in Schichtenmodell einsortiert.

**Prozessorientierte Bausteine:**
- ISMS (Managementsysteme für Informationssicherheit)
- ORP (Organisation und Personal)
- CON (Konzepte und Vorgehensweisen)
- OPS (Betrieb)
- DER (Detektion und Reaktion)

**Systemorientierte Bausteine:**
- INF (Infrastruktur)
- NET (Netze und Kommunikation)
- SYS (IT-Systeme)
- APP (Anwendungen)
- IND (Industrielle IT)

**Gefährdungen:**

In jedem Baustein spezifische Gefährdungslage beschrieben. Im separaten Anhang: Auflistung elementarer Gefährdungen, die bei Erstellung berücksichtigt wurden. Gefährdungsliste = Teil erster Stufe vereinfachter Risikoanalyse für typische Umgebungen. Bildet Grundlage für BSI-Anforderungszusammenstellung, um angemessenes Niveau zu gewährleisten.

Vorteil: Bei typischen Anwendungsfällen keine aufwändigen/weiterführenden Analysen für normalen Schutzbedarf. Ausreichend: relevante Bausteine identifizieren, Anforderungen konsequent/vollständig erfüllen.

Bei besonderen Komponenten/Einsatzumgebungen, die im IT-Grundschutz nicht hinreichend behandelt: Kompendium dennoch wertvolle Arbeitshilfe. Notwendige Risikoanalyse kann sich auf elementare Gefährdungen dieser Komponenten/Rahmenbedingungen konzentrieren.

**Sicherheitsanforderungen:**

In jedem Baustein: Sicherheitsanforderungen für Schutz des betrachteten Gegenstands. Beschreiben was zu tun ist. In drei Kategorien:

- **Basis-Anforderungen:** Vorrangig erfüllen (geringer Aufwand, größtmöglicher Nutzen). Uneingeschränkte Anforderungen. Grundlage für "Basis-Absicherung".

- **Standard-Anforderungen:** Bauen auf Basis-Anforderungen auf, adressieren normalen Schutzbedarf. Grundsätzlich erfüllen, aber nicht vorrangig. Ziele müssen erreicht werden für Standard-Absicherung. Rahmenbedingungen können Gründe ergeben, warum nicht wie beschrieben umgesetzt, sondern Sicherheitsziele auf andere Weise erreicht. Auswirkungen sorgfältig abwägen, dokumentieren.

- **Anforderungen bei erhöhtem Schutzbedarf:** Auswahl von Vorschlägen für weiterführende Absicherung bei erhöhten Sicherheitsanforderungen/bestimmten Rahmenbedingungen. Grundlage für Erarbeitung geeigneter Anforderungen/Maßnahmen.

Bausteine wenden sich an Sicherheitsbeauftragte/Sicherheitsverantwortliche.

**Umsetzungshinweise:**

Zusätzlich zu Bausteinen: Umsetzungshinweise. Beschreiben wie Anforderungen umgesetzt werden können, enthalten passende Sicherheitsmaßnahmen mit detaillierter Beschreibung. Als Grundlage für Sicherheitskonzeptionen verwendbar, ggf. an Rahmenbedingungen anpassen.

Adressieren Personengruppen für Umsetzung (z.B. IT-Betrieb, Haustechnik). Werden für ausgewählte, stark nachgefragte Themen bereitgestellt.

#### 8.3.2 Modellierung eines Informationsverbunds: Auswahl von Bausteinen

IT-Grundschutz-Modell unabhängig davon ob Informationsverbund bereits im Einsatz oder ganz/teilweise im Planungsstadium. Kann unterschiedlich verwendet werden:

- **Bereits realisierter Informationsverbund:** Modell identifiziert über Bausteine relevante Sicherheitsanforderungen. Als Prüfplan für Soll-Ist-Vergleich nutzbar.

- **Geplanter Informationsverbund:** Modell = Entwicklungskonzept. Beschreibt über Bausteine welche Sicherheitsanforderungen bei Realisierung erfüllt werden müssen.

Typisch: Informationsverbund umfasst realisierte + in Planung befindliche Anteile. Modell beinhaltet Prüfplan + Anteile Entwicklungskonzept. Alle vorgesehenen Sicherheitsanforderungen bilden Basis für Sicherheitskonzept (bereits erfüllte + unzureichend/nicht erfüllte + für geplante Anteile).

Zur Modellierung: passende Bausteine aus IT-Grundschutz-Kompendium auswählen/umsetzen. Bausteine in prozess-/systemorientierte aufgeteilt, jeweils in Schichten untergliedert.

**Schichtenmodell:**

**Prozessorientierte Bausteine:**
- **ISMS:** Baustein Sicherheitsmanagement als Grundlage für alle weiteren Aktivitäten
- **ORP:** Bausteine für organisatorische/personelle Sicherheitsaspekte (z.B. Organisation, Personal)
- **CON:** Bausteine für Konzepte/Vorgehensweisen (z.B. Kryptokonzept, Datenschutz)
- **OPS:** Sicherheitsaspekte betrieblicher Art, operativer IT-Betrieb (im Haus/durch Dritte, für Dritte). Beispiele: Schutz vor Schadprogrammen, Outsourcing für Kunden
- **DER:** Bausteine für Überprüfung umgesetzter Sicherheitsmaßnahmen, Detektion Sicherheitsvorfälle, Reaktionen (z.B. Behandlung Sicherheitsvorfälle, Forensik)

**Systemorientierte Bausteine:**
- **APP:** Absicherung von Anwendungen/Diensten (Kommunikation, Verzeichnisdienste, netzbasierte Dienste, Business-/Client-Anwendungen). Beispiele: Groupware, Office-Produkte, Webserver, Browser
- **SYS:** Einzelne IT-Systeme (ggf. gruppiert). Sicherheitsaspekte Server, Desktop-Systeme, Mobile Devices, sonstige IT-Systeme (Drucker, TK-Anlagen). Beispiele: konkrete Betriebssysteme, Smartphones/Tablets, Drucker/Kopierer/Multifunktionsgeräte
- **NET:** Vernetzungsaspekte (nicht IT-Systeme, sondern Netzverbindungen/Kommunikation). Beispiele: Netzmanagement, Firewall, WLAN-Betrieb
- **INF:** Baulich-technische Gegebenheiten, infrastrukturelle Sicherheit (z.B. Gebäude, Rechenzentrum)
- **IND:** Sicherheitsaspekte industrieller IT (z.B. Maschine, Sensoren, SPS)

**Vorteile der Schichteneinteilung:**
- Komplexitätsreduktion durch sinnvolle Aufteilung
- Vermeidung von Redundanzen (übergeordnete Aspekte/gemeinsame infrastrukturelle Fragestellungen nur einmal bearbeiten)
- Zuständigkeiten gebündelt (ISMS/ORP = Grundsatzfragen, INF = Haustechnik, SYS = IT-Systeme, NET = Netzadministratoren, APP = Anwendungsverantwortliche/Betreiber)
- Einzelaspekte in Sicherheitskonzepten leichter aktualisierbar/erweiterbar ohne andere Schichten umfangreich zu tangieren

Modellierung nach IT-Grundschutz: Für Bausteine jeder Schicht entscheiden ob/wie sie zur Abbildung des Informationsverbunds herangezogen werden. Zielobjekte unterschiedlicher Art je nach Baustein (Geschäftsprozesse, Komponenten, Gruppen, Gebäude, Liegenschaften, Organisationseinheiten).

#### 8.3.3 Reihenfolge der Baustein-Umsetzung

Um grundlegende Risiken abzudecken, ganzheitliche Informationssicherheit aufzubauen: essenzielle Sicherheitsanforderungen frühzeitig erfüllen, Maßnahmen umsetzen. IT-Grundschutz schlägt Reihenfolge vor.

Im IT-Grundschutz-Kompendium Kapitel "Schichtenmodell und Modellierung": wann einzelner Baustein sinnvoll eingesetzt, auf welche Zielobjekte angewendet. Bausteine nach vor-/nachrangiger Umsetzung gekennzeichnet:

- **R1:** Vorrangig umsetzen (Grundlage für effektiven Sicherheitsprozess)
- **R2:** Als Nächstes umsetzen (in wesentlichen Teilen des Informationsverbunds für nachhaltige Sicherheit erforderlich)
- **R3:** Zur Erreichung angestrebten Sicherheitsniveaus ebenfalls benötigt, Empfehlung: erst nach anderen Bausteinen betrachten

R1 = Bausteine für grundlegendes Sicherheitsgerüst:
- ISMS Managementsysteme für Informationssicherheit
- ORP Organisation und Personal
- OPS.1.1 Kern-IT-Betrieb

R2 und R3 = alle anderen Schichten.

Kennzeichnung zeigt nur sinnvolle zeitliche Reihenfolge, keine Gewichtung. Grundsätzlich müssen alle für Informationsverbund relevanten Bausteine umgesetzt werden.

Kennzeichnung = Empfehlung. Jede Institution kann abweichende, für sich sinnvolle Reihenfolge festlegen.

#### 8.3.4 Zuordnung von Bausteinen

IT-Grundschutz-Modellierung (Zuordnung Bausteine zu Zielobjekten) in Tabellenform dokumentieren:

| Spalte | Inhalt |
|---|---|
| Nummer und Titel des Bausteins | - |
| Relevanz | Entscheidung ob Baustein für Informationsverbund relevant. Schneller Überblick, kein Baustein vergessen |
| Zielobjekt | Wenn relevant: Zuordnung zum Zielobjekt/Zielobjektgruppe |
| Begründung | Randinformationen, Begründungen für Modellierung. Nicht relevante Bausteine: explizit begründen |
| Ansprechpartner | Nicht im Rahmen der Modellierung, sondern bei Planung Soll-Ist-Vergleich im IT-Grundschutz-Check. Basierend auf Rollen/Verantwortlichen in Bausteinen kann Vorarbeit geleistet werden |

**Beispiel RECPLAST:** Auszugstabelle zeigt Bausteine (APP.5.2 Microsoft Exchange nein, APP 3.6 DNS-Server ja S019, Benutzerdef.BS.1 PC für Industriesteuerung ja C005, CON.7 Informationssicherheit auf Auslandsreisen nein, INF.1 Allgemeines Gebäude ja G001, INF.7 Datenträgerarchiv nein, INF.4 IT-Verkabelung ja Informationsverbund, ISMS.1 ja Informationsverbund, NET.1.1 Netz-Architektur ja Informationsverbund, NET.3.1 Router/Switches ja S033, OPS.1.1.2 Ordnungsgemäße IT-Administration nein, OPS.2.4 Fernwartung ja Informationsverbund, SYS.1.3 Server unter Unix ja S020, SYS.4.1 Drucker/Kopierer/Multifunktionsgeräte ja S048).

Detaillierte Beschreibung der Vorgehensweise im IT-Grundschutz-Kompendium Kapitel "Schichtenmodell und Modellierung".

#### 8.3.5 Modellierung bei Virtualisierung und Cloud-Systemen

Modellierung virtueller IT-Systeme nach gleichen Regeln wie eigenständige physische IT-Systeme (Hinweise in Kapitel 2 IT-Grundschutz-Kompendium beachten). Zuordnung IT-Grundschutz-Bausteine nach Funktion (Server, Client), Betriebssystem (Linux, Windows), darauf betriebenen Applikationen (Datenbank, Webserver).

Bei Virtualisierungssoftware: Produkte mit unterliegendem Betriebssystem (hostbasiert) und ohne (Bare Metal). Falls Betriebssystem unterhalb Virtualisierungsschicht: passender Baustein ebenfalls zuordnen (z.B. SYS.1.2 Windows-Server), unabhängig von virtuellen IT-Systemen.

Hypervisor direkt auf physischer Hardware (Bare Metal): Zielobjekt nicht im IT-Grundschutz-Kompendium enthalten (sehr speziell). Risikoanalyse für Zielobjekt durchführen, Ergebnisse mit Anforderungen SYS.1.5 Virtualisierung konsolidieren.

**Beispielszenario:** Physischer Server S1 mit Virtualisierungssoftware, drei virtuelle Server VM1/VM2/VM3. Basis-Betriebssystem S1 = Linux. Virtualisierungsschicht = Software unter Linux (hostbasiert Typ 2). VM1/VM2 = Windows 2012, VM3 = Linux. Applikationen auf virtuellen Servern oder direkt auf Basis-Betriebssystem.

Zuordnung Bausteine zu Zielobjekten:
- SYS.1.1 Allgemeiner Server → S1
- SYS.1.1 Allgemeiner Server → VM3
- SYS.1.1 Allgemeiner Server → Gruppe VM1+VM2
- SYS.1.3 Server unter Unix → S1
- SYS.1.3 Server unter Unix → VM3
- SYS.1.2.2 Windows Server 2012 → Gruppe VM1+VM2

**Modellierung beim Cloud-Computing:**

Um angemessene Gesamtsicherheit für IT-Betrieb von Cloud-Diensten: alle Cloud-Dienste (mit zugeordneten virtuellen IT-Systemen, Netzen, weiteren Cloud-Komponenten) systematisch in Sicherheitskonzeption berücksichtigen. Alle über Cloud-Dienste bereitgestellten IT-Systeme, Netze, Anwendungen in Betriebsverantwortung und Geltungsbereich ISMS des Cloud-Diensteanbieters in Modellierung gemäß IT-Grundschutz-Vorgehensweise.

Geltungsbereich des Informationsverbunds = Grenze der Verantwortlichkeit. An Grenze endet Verantwortung Cloud-Diensteanbieter, beginnt Verantwortung Cloud-Anwender. Umfang unterscheidet sich je nach Servicemodell.

**Modellierung IaaS-Angebote:**

Bei IaaS (Infrastructure as a Service): Cloud-Diensteanbieter verantwortlich für Verwaltungsserver für Cloud und Virtualisierungsserver. Bei IaaS aus Schichten APP/SYS nur Verwaltungs-/Virtualisierungssoftware als Zielobjekte. Zugehörige Bausteine auswählen = Bausteine für IT-Systeme als Server (SYS.1).

Für Cloud-Verwaltungsserver: Bausteine SYS 1.5 Virtualisierung und OPS.3.2 Cloud-Anbieter umsetzen.

IaaS: Cloud-Diensteanbieter stellt virtuelle "Hülle" über virtuelles Netz bereit. Absicherung Netz nach IT-Grundschutz verantwortet Cloud-Diensteanbieter, IT-Systeme des Cloud-Angebotes verantworten Cloud-Anwender. Für Netz passende Bausteine aus Schicht Netze/Kommunikation modellieren (z.B. NET.1.1 Netzarchitektur und -design). Virtueller Server erhält Speicherkontingent aus Speichernetz: Baustein SYS.1.8 Speicherlösungen/Cloud Storage ebenfalls vom Cloud-Diensteanbieter umsetzen.

Virtueller Server per IaaS: durch Cloud-Anwender konfiguriert. Umsetzungsverantwortung für Sicherheitsmaßnahmen bei Cloud-Anwender. Virtueller Server außerhalb Informationsverbund des Cloud-Diensteanbieters.

Schnittstelle zur Bereitstellung IaaS-Cloud-Dienste (Self-Service-Portal): durch geeignete Mechanismen zur Netztrennung (Netze, virtuelle Firewalls, Routing) vom Cloud-Diensteanbieter absichern, ggf. Baustein APP.3.1 Webanwendungen umsetzen.

Modellierung der IaaS-Server als IT-Systeme im Sicherheitskonzept Cloud-Diensteanbieter möglich, aber nicht notwendig (Cloud-Anwender verwalten diese IT-Systeme).

**Modellierung PaaS-Angebote:**

Bei PaaS (Platform as a Service): Cloud-Diensteanbieter zusätzlich zu IaaS verantwortlich für sichere Bereitstellung virtueller Server und angebotener Plattform (z.B. Datenbank, Webserver).

PaaS: Cloud-Diensteanbieter muss wie bei IaaS Cloud-Verwaltungsserver/Verwaltungssoftware modellieren. Dort zentral Zuordnung Baustein OPS.3.2 Cloud-Anbieter.

Zusätzlich: IT-System mit entsprechendem Betriebssystem modellieren. Zu IT-System je nach Cloud-Dienst auf Anwendungsschicht Datenbank/Webserver modellieren.

PaaS-IT-System mit verbundenen Cloud-Anwendungen: für jeden Cloud-Mandanten modellieren. Mandanten mit gleichen Plattformen, Anwendungen, Schutzbedarf gemäß 8.1.1 in Gruppe zusammenfassen.

Praxis: Cloud-Dienste PaaS über virtuelle Profile für mehrere Cloud-Anwender/Mandanten. Empfehlung IT-Grundschutz-Modellierung: Kombinationen als Musterserver modellieren, pro Mandant verknüpfen/vervielfachen.

**Modellierung SaaS-Angebote:**

Bei SaaS (Software as a Service): zunächst für unterliegende Cloud-Infrastruktur relevante Zielobjekte wie bei IaaS/PaaS identifizieren, entsprechenden Bausteinen zuordnen.

Vergleich zu PaaS: bei SaaS weitere Anwendungen auf Cloud-IT-Systemen modelliert (z.B. Webservice, Webanwendung, SAP-System). Bei SaaS Cloud-Diensteanbieter praktisch für gesamten Cloud-Computing-Stack verantwortlich (Server, Netze, Storage, Management, Anwendungen). SaaS-Anwendungen in seinem Verantwortungsbereich, müssen in seinem Informationsverbund modelliert werden. Mehrfache Ausprägungen derselben SaaS-Anwendung oder Gruppen von SaaS-Anwendungen gemäß 8.1.1 zusammenfassbar wenn Voraussetzungen erfüllt.

#### 8.3.6 Anpassung der Baustein-Anforderungen

Über Modellierung: Bausteine für Zielobjekte des Informationsverbunds ausgewählt. In Bausteinen: Sicherheitsanforderungen aufgeführt, die typischerweise geeignet/angemessen.

Für Sicherheitskonzept/Audit: einzelne Anforderungen bearbeiten, darauf aufbauend geeignete Sicherheitsmaßnahmen formulieren.

Anforderungen knapp/präzise. Geben Teilziele vor für Umsetzung Bausteinziele. Müssen in Handlungsvorgaben für Akteure im Sicherheitsprozess umgewandelt werden. Auf Basis Anforderungen Sicherheitsmaßnahmen ausarbeiten, die:
- An Rahmenbedingungen/Sprachgebrauch Institution angepasst
- Ausreichend konkret für vorliegenden Informationsverbund (z.B. technische Details)

Generell: Anforderungen IT-Grundschutz-Bausteine sinngemäß umsetzen. Alle Änderungen gegenüber IT-Grundschutz-Kompendium dokumentieren (Gründe später nachvollziehbar).

Zu vielen Bausteinen: Umsetzungshinweise mit detaillierteren Maßnahmen. Maßnahmen allgemein formuliert (in vielen Umgebungen anwendbar) und ausführlich (als Umsetzungshilfe). Auch Umsetzungshinweise-Maßnahmen an Rahmenbedingungen anpassen. Sinnvoll:
- Maßnahmen weiter konkretisieren (technische Details ergänzen)
- Sprachgebrauch Institution anpassen (andere Rollenbezeichnungen)
- Nicht relevante Empfehlungen streichen

Sämtliche Texte, Bausteine, Umsetzungshinweise, Tabellen, Hilfsmittel auch in elektronischer Form verfügbar. Bei Sicherheitskonzept-Erstellung/Maßnahmen-Realisierung weiterverwendbar.

Bei Sichtung Sicherheitsanforderungen: einzelne Anforderungen unter konkreten Rahmenbedingungen ggf. nicht umsetzbar. Falls Anforderungen in betrachteter Umgebung nicht relevant (z.B. Dienste nicht aktiviert). Selten auch bei uneingeschränkt notwendigen Basis-Anforderungen, wenn Umsetzung essenzielle Schwierigkeiten in anderen Bereichen bringt (z.B. Brand-/Einbruchschutz nicht vereinbar). Andere Lösungen finden, nachvollziehbar dokumentieren.

Sicherheitsanforderungen zusätzlich aufgenommen/geändert: im Sicherheitskonzept dokumentieren (erleichtert IT-Grundschutz-Check).

Bei Auswahl/Anpassung Sicherheitsmaßnahmen auf Basis Anforderungen: immer angemessen. Angemessen bedeutet:

- **Wirksamkeit (Effektivität):** Vor möglichen Gefährdungen wirksam schützen, identifizierten Schutzbedarf abdecken
- **Eignung:** In Praxis tatsächlich umsetzbar, Organisationsabläufe nicht zu stark behindern, andere Sicherheitsmaßnahmen nicht aushebeln
- **Praktikabilität:** Leicht verständlich, einfach anzuwenden, wenig fehleranfällig
- **Akzeptanz:** Für alle Benutzer anwendbar (barrierefrei), niemanden diskriminieren/beeinträchtigen
- **Wirtschaftlichkeit:** Mit eingesetzten Mitteln möglichst gutes Ergebnis. Maßnahmen Risiko bestmöglich minimieren, in geeignetem Verhältnis zu schützenden Werten

#### 8.3.7 Einbindung externer Dienstleister

Viele Institutionen setzen externe/interne Dienstleister ein (Geschäftsprozesse ganz/teilweise durchführen lassen). Einbindung auf viele Arten (Personal temporär, Auslagerungen IT-Systeme).

Bereits im Vorfeld: Aufgaben im Bereich Informationssicherheit abgrenzen, Schnittstellen genau festlegen. Aufgaben auslagern möglich, Verantwortung für Informationssicherheit verbleibt bei auslagernder Institution.

Klären: welche sicherheitsrelevanten Aufgaben durch externen Dienstleister, welche durch eigenes Sicherheitsmanagement.

**Fragen vor Einbindung:**
- Welche Geschäftsprozesse/IT-Systeme/Dienstleistungen an externen Dienstleister auslagern?
- Welchen Schutzbedarf haben Zielobjekte, die durch externen Dienstleister/im Outsourcing verarbeitet werden?
- Auf welche Zielobjekte/Informationen hat externer Dienstleister Zugriff? (Fokus Dienstleistungserbringung + möglicher Zugriff z.B. Reinigungskräfte auf Informationen in Büroräumen)

Sofern Entscheidung für Einbindung externer Dienstleister: neben vertraglichen Rahmenbedingungen Voraussetzungen für Umsetzung IT-Grundschutz-Anforderungen erfüllen. Generell: Modellierung Bausteine getrennt für eigene Institution und jeden externen Dienstleister. Vorgehensweise Modellierung wie in 8.3.4.

Auch bei Einbindung externer Dienstleister: zu jedem Zeitpunkt für auslagernde Institution möglich Risiken im Bereich Informationssicherheit zu identifizieren/kontrollieren. Informationen/Geschäftsprozesse immer auf vergleichbarem Niveau gemäß Sicherheitszielen Institution geschützt (auch wenn externe Dienstleister/deren Dienstleister ganz/in Teilen verarbeiten). Hohe Ereignistransparenz erforderlich: Mechanismen gewährleisten, dass Gefährdungen/Risiken mit Auswirkungen auf Dienstleistungen erkannt, kommuniziert werden.

Erforderlich: Sicherheitsanforderungen sowie regelmäßige Überwachung ihrer Einhaltung in Verträgen aufnehmen.

Bei Einbindung externer Dienstleister: möglich dass Dienstleister bereits Zertifikat für eingebundene Dienstleistung vorweist. Immer berücksichtigen: ob Geltungsbereich ausgestellten Zertifikates Dienstleistung tatsächlich umfasst.

**Aktionspunkte:**
- Kapitel Schichtenmodell/Modellierung aus IT-Grundschutz-Kompendium systematisch durcharbeiten
- Für jeden Baustein ermitteln, auf welche Zielobjekte er im Informationsverbund anzuwenden ist
- Zuordnung Bausteine zu Zielobjekten ("IT-Grundschutz-Modell") sowie Ansprechpartner dokumentieren
- Zielobjekte, die nicht geeignet modelliert werden können, für Risikoanalyse vormerken
- Festlegung Reihenfolge für Umsetzung Bausteine
- Sicherheitsanforderungen aus identifizierten Bausteinen sorgfältig lesen, darauf aufbauend passende Sicherheitsmaßnahmen festlegen

### 8.4 IT-Grundschutz-Check

Voraussetzung: Für ausgewählten Informationsverbund folgende Teile Sicherheitskonzept nach IT-Grundschutz erstellt:
- Strukturanalyse: Übersicht Geschäftsprozesse, IT/Vernetzung, unterstützte Anwendungen, Räumlichkeiten
- Schutzbedarfsfeststellung: Übersicht Schutzbedarf Geschäftsprozesse, Anwendungen, IT-Systeme, Räume, Kommunikationsverbindungen
- Modellierung: Abbildung Informationsverbund auf IT-Grundschutz-Bausteine

Modellierung nach IT-Grundschutz als Prüfplan benutzen: anhand Soll-Ist-Vergleich herausfinden welche Anforderungen ausreichend/unzureichend erfüllt.

IT-Grundschutz-Check = drei Schritte:
1. Organisatorische Vorbereitungen (relevante Ansprechpartner auswählen)
2. Eigentlicher Soll-Ist-Vergleich (Interviews, stichprobenartige Kontrolle)
3. Dokumentation Ergebnisse/Begründungen

#### 8.4.1 Organisatorische Vorarbeiten für den IT-Grundschutz-Check

Für reibungslose Durchführung Vorarbeiten erforderlich:

Hausinterne Papiere sichten (Organisationsverfügungen, Arbeitshinweise, Sicherheitsanweisungen, Handbücher, "informelle" Vorgehensweisen für sicherheitsrelevante Abläufe). Dokumentation bereits umgesetzter Sicherheitsmaßnahmen. Hilfreich bei Ermittlung Umsetzungsgrad (organisatorische Regelungen). Klären wer gegenwärtig zuständig für Inhalt (später richtige Ansprechpartner).

Feststellen: ob/in welchem Umfang externe Stellen bei Ermittlung Umsetzungsstatus beteiligt werden müssen (z.B. externe Rechenzentren, vorgesetzte Behörden, Firmen mit Outsourcing-Dienstleistung, Baubehörden für infrastrukturelle Maßnahmen).

Wichtiger Schritt: Ermittlung geeigneter Interviewpartner. Für jeden Baustein (für Modellierung herangezogen) Hauptansprechpartner festlegen. In Anforderungen werden Rollen genannt, die für Umsetzung erforderlich. Hieraus geeignete Ansprechpartner identifizieren.

**Beispiele Ansprechpartner:**

- **Schicht ORP/CON/OPS:** Geeigneter Ansprechpartner ergibt sich aus Bausteinbehandlung. Beispiel ORP.2 Personal: Mitarbeiter Personalabteilung. Konzeptionelle Bausteine (CON.1 Kryptokonzept): im Idealfall Mitarbeiter für Fortschreibung Dokument zuständig, sonst Mitarbeiter mit Aufgabengebiet Fortschreibung Regelungen in Bereich.

- **Schicht INF (Infrastruktur):** Auswahl Ansprechpartner in Abstimmung mit Abteilung Innerer Dienst/Haustechnik. Je nach Größe unterschiedliche Ansprechpartner für Infrastrukturbereiche (Gebäude, Technikräume). In kleinen Institutionen oft Hausmeister. Beachten: ggf. externe Stellen beteiligen (größere Institutionen).

- **Systemorientierte Bausteine SYS/NET/IND:** Verstärkt technische Aspekte. In der Regel Administrator derjenigen Komponente/Gruppe (bei Modellierung Baustein zugeordnet) als Hauptansprechpartner.

- **Schicht APP (Anwendungen):** Betreuer/Verantwortliche einzelner Anwendungen als Hauptansprechpartner.

Terminplan für Interviews mit Systemverantwortlichen, Administratoren, sonstigen Ansprechpartnern erstellen. Besonderes Augenmerk: Terminkoordination mit Personen aus anderen Organisationseinheiten/Institutionen. Sinnvoll: vorab Ausweichtermine abstimmen.

Je nach Größe Projektgruppe: Teams mit verteilten Aufgaben bilden. Bewährt: in jeder Gruppe zwei Personen (eine stellt Fragen, andere notiert Ergebnisse/Anmerkungen).

**Beispiel RECPLAST:** Auszug IT-Grundschutz-Check zeigt Baustein Sicherheitsmanagement mit Anforderungen (ISMS.1.A1 Übernahme Gesamtverantwortung durch Leitungsebene: Status umgesetzt, Verantwortung Institutionsleitung, Umsetzung beschrieben; ISMS.1.A5 Vertragsgestaltung bei externem ISB: entbehrlich, ISB interner Mitarbeiter; ISMS.1.A7 Festlegung Sicherheitsmaßnahmen: teilweise, ISB verantwortlich, Dokumentation unzureichend, Umsetzungszeitpunkt 30.04.; ISMS.1.A11 Aufrechterhaltung Informationssicherheit: umgesetzt, ISB verantwortlich, jährliches internes Audit).

**Aktionspunkte:**
- Hausinterne Dokumente mit Verfügungen/Regelungen sichten, Zuständigkeiten klären
- Feststellen in welchem Umfang externe Stellen beteiligt werden müssen
- Hauptansprechpartner für jeden angewandten Baustein festlegen
- Terminplan für Interviews abstimmen
- Team für Interviews zusammenstellen

#### 8.4.2 Durchführung des Soll-Ist-Vergleichs

Alle Vorarbeiten erledigt: eigentliche Erhebung an festgesetzten Terminen. Sicherheitsanforderungen jeweiligen Bausteins (für den Interviewpartner zuständig) der Reihe nach durcharbeiten.

**Antworten bezüglich Umsetzungsstatus:**

| Status | Bedeutung |
|---|---|
| entbehrlich | Erfüllung in vorgeschlagener Art nicht notwendig (Anforderung im Informationsverbund nicht relevant z.B. Dienste nicht aktiviert, oder durch Alternativmaßnahmen behandelt). Bei "entbehrlich": über Kreuzreferenztabelle Baustein zugehörige elementare Gefährdungen identifizieren. Bei Alternativmaßnahmen: begründen dass Risiko von allen betreffenden elementaren Gefährdungen angemessen minimiert. Generell: bei Basis-Anforderungen Risiko nicht übernommen werden kann. Anforderungen nicht auf "entbehrlich" wenn Risiko für elementare Gefährdung pauschal akzeptiert/ausgeschlossen |
| ja | Zu Anforderung geeignete Maßnahmen vollständig, wirksam, angemessen umgesetzt |
| teilweise | Anforderung nur teilweise umgesetzt |
| nein | Anforderung noch nicht erfüllt, geeignete Maßnahmen größtenteils noch nicht umgesetzt |

Sinnvoll bei Interviews: nicht nur Bausteintexte, auch Umsetzungshinweise/ergänzende Materialien griffbereit. Befragten Zweck IT-Grundschutz-Check vorstellen. Mit Anforderungsüberschriften fortfahren, Anforderungen kurz erläutern. Gesprächspartner Möglichkeit geben auf bereits umgesetzte Anforderungen/Maßnahmen einzugehen, danach offene Punkte besprechen.

Befragungstiefe: nach Niveau Basis-/Standard-Anforderungen. Über diese hinausweisende Aspekte hochschutzbedürftiger Anwendungen erst nach Abschluss IT-Grundschutz-Check. Falls Bedarf Aussagen zu verifizieren: stichprobenartig Regelungen/Konzepte sichten, im Bereich Infrastruktur Objekte vor Ort besichtigen, Client-/Servereinstellungen an ausgewählten IT-Systemen überprüfen.

Zum Abschluss jeden Bausteins: Befragten Ergebnis (Umsetzungsstatus: entbehrlich/ja/teilweise/nein) mitteilen, Entscheidung erläutern.

**Aktionspunkte:**
- Je nach Fachgebiet vorab Checklisten erstellen
- Zielsetzung IT-Grundschutz-Check Interviewpartnern erläutern
- Umsetzungsstatus einzelner Anforderungen erfragen
- Antworten anhand Stichproben am Objekt verifizieren
- Befragten Ergebnisse mitteilen

#### 8.4.3 Dokumentation der Ergebnisse

Ergebnisse IT-Grundschutz-Check so dokumentieren dass für alle Beteiligten nachvollziehbar, als Grundlage für Umsetzungsplanung defizitärer Anforderungen/Maßnahmen nutzbar. Dokumentationsaufwand nicht unterschätzen. Geeignete Hilfsmittel nutzen (Erstellung/Aktualisierung erforderlicher Dokumente im Sicherheitsprozess).

Hilfsmittel: IT-Grundschutz-Tools (Anwendungen unterstützen gesamte IT-Grundschutz-Vorgehensweise: Stammdatenerfassung, Schutzbedarfsfeststellung, Risikoanalyse, Soll-Ist-Vergleich, Erfüllung Anforderungen). Komfortable Auswertung/Revision (Suche, Reports, Kostenauswertungen, Statistikfunktionen).

Als Hilfsmittel: Formulare zum IT-Grundschutz. Zu jedem Baustein Datei, tabellarisch für jede Anforderung Ergebnisse Soll-Ist-Vergleich erfassbar.

**Zur Dokumentation IT-Grundschutz-Check erfassen:**
- Nummer/Bezeichnung Objekt/Gruppe (bei Modellierung Baustein zugeordnet)
- Standort zugeordneter Objekte/Gruppe
- Erfassungsdatum, Name Erfasser
- Befragte Ansprechpartner

Eigentliche Ergebnisse Soll-Ist-Vergleich tabellarisch. Zu jeder Anforderung jeweiligen Bausteins:

| Information | Beschreibung |
|---|---|
| Umsetzungsgrad | entbehrlich/ja/teilweise/nein. Im Interview ermittelter Umsetzungsstatus. Für mögliche Zertifizierung: festhalten durch welche Maßnahmen Anforderungen konkret erfüllt |
| Umsetzung bis ... | Sinnvoll auch wenn während IT-Grundschutz-Check im Allgemeinen nicht ausgefüllt. Platzhalter für Realisierungsplanung: bis welchem Termin Anforderung vollständig umgesetzt |
| Verantwortliche | Falls bei Soll-Ist-Vergleich eindeutig welche Mitarbeiter für vollständige Umsetzung defizitärer Anforderung/Maßnahme verantwortlich: namentlich dokumentieren. Falls Verantwortung nicht eindeutig: Feld frei lassen, im Zuge späterer Realisierungsplanung Verantwortlichen bestimmen |
| Bemerkungen/Begründungen | Wichtig für spätere Nachvollziehbarkeit getroffener Entscheidungen (z.B. Zertifizierung). Bei "entbehrlich": Begründung nennen. Bei nicht/teilweise umgesetzt: dokumentieren welche Maßnahmen noch umgesetzt werden müssen. Alle anderen Bemerkungen die bei Beseitigung Defiziten hilfreich/im Zusammenhang mit Anforderung zu berücksichtigen |
| Defizite/Kostenschätzung | Für nicht/teilweise erfüllte Anforderungen: damit verbundenes Risiko in geeigneter Form ermitteln/dokumentieren (wichtig für Audits/Zertifizierungen). Bei solchen Maßnahmen: schätzen welchen finanziellen/personellen Aufwand Beseitigung Defizite erfordert |

**Aktionspunkte:**
- Stamminformationen über jedes Zielobjekt erfassen
- Informationen zu IT-Grundschutz-Check und Umsetzungsstatus dokumentieren
- Felder/Platzhalter für Realisierungsplanung vorsehen

### 8.5 Risikoanalyse

Risikoanalyse im Kontext Informationssicherheit: relevante Gefährdungen für Informationsverbund identifizieren, daraus möglicherweise resultierende Risiken abschätzen. Ziel: Risiken durch angemessene Gegenmaßnahmen auf akzeptables Maß reduzieren, Restrisiken transparent machen, Gesamtrisiko systematisch steuern.

**Zweistufiger Ansatz der IT-Grundschutz-Vorgehensweise:**

Bei Erstellung IT-Grundschutz-Bausteine implizit Risikobewertung für Bereiche mit normalem Schutzbedarf durchgeführt. Nur Gefährdungen betrachtet mit so hoher Eintrittswahrscheinlichkeit/einschneidenden Auswirkungen dass Sicherheitsmaßnahmen ergriffen werden müssen. Typische Gefährdungen gegen die sich jeder schützen muss: Schäden durch Feuer, Einbrecher, Schadsoftware, Hardware-Defekte.

Vorteil: Anwender IT-Grundschutz müssen für Großteil Informationsverbund keine individuelle Bedrohungs-/Schwachstellenanalyse durchführen (Bewertung vorab vorgenommen).

In bestimmten Fällen explizite Risikoanalyse erforderlich, wenn Informationsverbund Zielobjekte enthält die:
- Hohen/sehr hohen Schutzbedarf in mindestens einem der drei Grundwerte V/I/V
- Mit existierenden IT-Grundschutz-Bausteinen nicht hinreichend abgebildet (modelliert) werden können
- In Einsatzszenarien (Umgebung, Anwendung) betrieben werden, die im IT-Grundschutz nicht vorgesehen

**Fragen:**
- Welchen Gefährdungen für Informationsverarbeitung durch Umsetzung relevanter IT-Grundschutz-Bausteine noch nicht ausreichend/noch gar nicht Rechnung getragen?
- Müssen eventuell ergänzende Sicherheitsmaßnahmen über IT-Grundschutz-Modell hinaus eingeplant/umgesetzt werden?

Zur Beantwortung: BSI empfiehlt Risikoanalyse auf Basis IT-Grundschutz (BSI-Standard 200-3).

Standard zeigt wie für bestimmte Zielobjekte festgestellt werden kann ob/in welcher Hinsicht über IT-Grundschutz hinaus Handlungsbedarf besteht um Risiken für Informationsverarbeitung zu reduzieren. Risiken von elementaren Gefährdungen einschätzen, anhand Matrix bewerten. Einschätzung über zu erwartende Eintrittswahrscheinlichkeit und Schadenshöhe. Aus beiden Anteilen ergibt sich Risiko.

**Integration Risikoanalyse in IT-Grundschutz-Prozess:**

BSI-Standard 200-3 bietet sich an wenn Institutionen bereits erfolgreich mit IT-Grundschutz-Methodik arbeiten, möglichst direkt Risikoanalyse an IT-Grundschutz-Analyse anschließen.

**Zusätzliche Arbeitsschritte (Überblick):**

1. **Etablierung Risikomanagementprozess:** Risikoanalyse = wichtiger Bestandteil ISMS. Grundvoraussetzungen von Institutionsleitung vorgegeben. Grundsätzliche Vorgehensweise zur Durchführung Risikoanalysen in Richtlinie dokumentieren (BSI-Standard 200-3 Kapitel 2), durch Leitungsebene verabschieden.

2. **Erstellung Gefährdungsübersicht:** Für jedes zu analysierende Zielobjekt Liste jeweils relevanter Gefährdungen. BSI zweistufig: zunächst relevante elementare Gefährdungen identifizieren, darauf aufbauend weitere mögliche Gefährdungen (zusätzliche Gefährdungen) ermitteln über elementare Gefährdungen hinaus, aus spezifischem Einsatzszenario (gemeinsames Brainstorming).

3. **Risikoeinstufung:** Zweistufig. Für jedes Zielobjekt/jede Gefährdung Bewertung unter Annahme dass bereits Sicherheitsmaßnahmen umgesetzt/geplant (meist aus Basis-/Standard-Anforderungen IT-Grundschutz-Kompendium). An erste Bewertung schließt sich zweite an: mögliche Sicherheitsmaßnahmen zur Risikobehandlung betrachten. Vorher-Nachher-Vergleich: Wirksamkeit der Sicherheitsmaßnahmen zur Risikobehandlung prüfen.

4. **Behandlung von Risiken:** Abhängig von Risikoappetit Institution unterschiedliche Risikoakzeptanzkriterien. Risikoappetit = durch kulturelle/interne/externe/wirtschaftliche Einflüsse entstandene Neigung einer Institution wie sie Risiken bewertet/umgeht.

**Optionen zur Behandlung von Risiken:**
- Risiken vermeiden (z.B. durch Umstrukturierung Geschäftsprozesse/Informationsverbund)
- Risiken durch entsprechende Sicherheitsmaßnahmen reduzieren
- Risiken transferieren (z.B. durch Outsourcing/Versicherungen)

Institution muss Risikoakzeptanzkriterien festlegen, Behandlung Risiko darauf abbilden. Bei Entscheidung wie mit identifizierten Risiken umgehen: auf jeden Fall Leitungsebene beteiligen (unter Umständen erhebliche Schäden/zusätzliche Kosten).

Schritte Gefährdungsbewertung/Risikobehandlung so lange durchlaufen bis Risikoakzeptanzkriterien Institution erfüllt, verbleibendes Risiko ("Restrisiko") im Einklang mit Zielen/Vorgaben Institution. Verbleibendes Risiko muss Leitungsebene zur Zustimmung vorgelegt werden ("Risiko-Akzeptanz"). Damit nachvollziehbar dokumentiert dass Institution sich Restrisikos bewusst.

5. **Konsolidierung Sicherheitskonzept:** Bevor originärer IT-Grundschutz-Prozess fortgesetzt: erweitertes Sicherheitskonzept konsolidieren. Eignung, Zusammenwirken, Benutzerfreundlichkeit, Angemessenheit der Sicherheitsmaßnahmen insgesamt überprüfen.

BSI-Standard 200-3 erläutert außerdem: wie Methodik anwenden wenn Informationsverbund Zielobjekte umfasst für die im IT-Grundschutz-Kompendium bislang kein geeigneter Baustein enthalten.

Ausführliche Darstellung Methodik: BSI-Standard 200-3.

**Wichtig:** Risikoanalyse auf Basis IT-Grundschutz = Vorgehensweise um bei Bedarf Sicherheitsvorkehrungen zu ermitteln über IT-Grundschutz-Kompendium-Anforderungen hinaus. Obwohl Methodik gegenüber vielen anderen Verfahren vereinfacht, oft mit erheblichem Aufwand verbunden. Um schnellstmöglich wichtigste Sicherheitsprobleme zu beseitigen manchmal zweckmäßig: zuerst IT-Grundschutz-Anforderungen vollständig erfüllen, erst danach Risikoanalyse (abweichend von obigem Schema). Zwar insgesamt einige Schritte öfter durchlaufen, IT-Grundschutz-Anforderungen jedoch früher erfüllt.

Alternative Reihenfolge bietet sich besonders an wenn:
- Informationsverbund bereits realisiert/in Betrieb
- Vorliegende Zielobjekte mit existierenden IT-Grundschutz-Kompendium-Bausteinen hinreichend modelliert werden können

Für geplante Informationsverbünde/solche mit untypischen Techniken/Einsatzszenarien: originäre Reihenfolge empfohlen.

**Vor- und Nachteile alternativer Reihenfolgen:**

| Risikoanalyse direkt nach IT-Grundschutz-Check | Risikoanalyse erst nach vollständiger Umsetzung Sicherheitsmaßnahmen |
|---|---|
| **Vorteile:** Mehraufwand vermieden (keine Maßnahmen die im Rahmen Risikoanalyse eventuell durch stärkere Maßnahmen ersetzt); Eventuell erforderliche Hochsicherheitsmaßnahmen früher identifiziert/umgesetzt | **Vorteile:** Sicherheitsmaßnahmen früher umgesetzt (Risikoanalyse oft aufwendig); Elementare Sicherheitslücken vorrangig behandelt bevor fortgeschrittene Gefährdungen analysiert |
| **Nachteile:** Sicherheitsmaßnahmen später umgesetzt (Risikoanalyse oft aufwendig); Eventuell elementare Sicherheitslücken vernachlässigt während fortgeschrittene Gefährdungen analysiert | **Nachteile:** Mehraufwand möglich (eventuell einige Sicherheitsmaßnahmen umgesetzt die später im Rahmen Risikoanalyse durch stärkere Maßnahmen ersetzt); Eventuell erforderliche Hochsicherheitsmaßnahmen erst später identifiziert/umgesetzt |

Risikoanalyse auf Basis IT-Grundschutz häufig leichter durchzuführen wenn nacheinander auf kleine Teilaspekte Informationsverbund angewandt. Erster Schritt z.B. Analyse auf baulich-physische Infrastruktur beschränkt (Schutz vor Brand, Wasser, unbefugtem Zutritt, ordnungsgemäße Strom-/Klimaversorgung).

In vielen Behörden/Unternehmen existieren bereits Verfahren zur Risikoanalyse/Risikobehandlung. Um einheitliche Methodik zu erreichen: ggf. zweckmäßig vorhandene Verfahren auf Informationssicherheit ausdehnen, gegebenenfalls nur Teilaspekte BSI-Standard 200-3 anwenden.

International: Reihe unterschiedlicher Ansätze zur Durchführung Risikoanalysen im Bereich Informationssicherheit etabliert. Verfahren unterscheiden sich bzgl. Detaillierungsgrad, Formalisierung, thematische Schwerpunkte. Abhängig von Rahmenbedingungen Institution/Art Informationsverbund: ggf. zweckmäßig alternativ zu BSI-Standard 200-3 anderes etabliertes Verfahren/angepasste Methodik für Analyse Informationsrisiken verwenden.

**Aktionspunkte:**
- Grundsätzliche Vorgehensweise Institution zur Durchführung Risikoanalysen in Richtlinie dokumentieren, Leitungsebene zur Verabschiedung vorlegen
- Ermitteln für welche Zielobjekte/Gruppen Risikoanalyse durchgeführt werden soll
- BSI-Standard 200-3 Risikoanalyse auf Basis IT-Grundschutz systematisch durcharbeiten
- Ergebnisse Risikoanalysen in Sicherheitskonzept integrieren
## 9 Umsetzung der Sicherheitskonzeption

In diesem Kapitel werden verschiedene Aspekte vorgestellt, die bei der Planung und Realisierung von Sicherheitsmaßnahmen beachtet werden müssen. Dabei wird beschrieben, wie die Umsetzung von Sicherheitsmaßnahmen geplant, durchgeführt, begleitet und überwacht werden kann. Zu vielen Bausteinen des IT-Grundschutzes existieren Umsetzungshinweise mit beispielhaften Empfehlungen für Sicherheitsmaßnahmen, mittels derer die Anforderungen der Bausteine umgesetzt werden können. Diese basieren auf Best Practices und langjähriger Erfahrung von Experten aus dem Bereich der Informationssicherheit. Die Maßnahmen aus den Umsetzungshinweisen sind jedoch nicht als verbindlich zu betrachten, sondern können und sollten durch eigene Maßnahmen ergänzt oder ersetzt werden. Solche eigenen Maßnahmen sollten wiederum dem IT-Grundschutz-Team des BSI mitgeteilt werden, vor allem, wenn sie neue Aspekte enthalten, damit die Umsetzungshinweise entsprechend ergänzt werden können.

Bei der Erstellung der Sicherheitskonzeption sind für den untersuchten Informationsverbund die Strukturanalyse, die Schutzbedarfsfeststellung und die Modellierung erfolgt. Ebenso liegen zu diesem Zeitpunkt die Ergebnisse des IT-Grundschutz-Checks, also des daran anknüpfenden Soll-Ist-Vergleichs, vor. Sollte für ausgewählte Bereiche eine Risikoanalyse durchgeführt worden sein, so sollten die dabei erarbeiteten Maßnahmenvorschläge ebenfalls vorliegen und nachfolgend berücksichtigt werden.

Für die Realisierung der Maßnahmen stehen in der Regel nur beschränkte Ressourcen an Geld und Personal zur Verfügung. Ziel der nachfolgend beschriebenen Schritte ist daher, eine möglichst effiziente Umsetzung der vorgesehenen Sicherheitsmaßnahmen zu erreichen.

### 9.1 Sichtung der Untersuchungsergebnisse

In einer Gesamtsicht sollte ausgewertet werden, welche Anforderungen aus den IT-Grundschutz-Bausteinen nicht oder nur teilweise umgesetzt wurden. Dazu bietet es sich an, diese aus den Ergebnissen des IT-Grundschutz-Checks zu extrahieren und in einer Tabelle zusammenzufassen.

Durch Risikoanalysen könnten eventuell weitere zu erfüllende Anforderungen sowie zu realisierende Maßnahmen identifiziert worden sein. Diese sollten ebenfalls tabellarisch erfasst werden. Diese zusätzlichen Anforderungen und Maßnahmen sollten den vorher betrachteten Zielobjekten der Modellierung und den entsprechenden IT-Grundschutz-Bausteinen thematisch zugeordnet werden.

Die zu erfüllenden Anforderungen aus den IT-Grundschutz-Bausteinen müssen passend zu den organisatorischen und technischen Gegebenheiten der Institution zu Sicherheitsmaßnahmen konkretisiert werden. Die Umsetzungshinweise des IT-Grundschutzes geben dazu für viele Bausteine und Anforderungen praxisnahe Empfehlungen. Außerdem sollten alle Anforderungen und alle daraus abgeleiteten Sicherheitsmaßnahmen noch einmal daraufhin überprüft werden, ob sie auch geeignet sind: Sie müssen vor den möglichen Gefährdungen wirksam schützen, aber auch in der Praxis tatsächlich umsetzbar sein, dürfen also z. B. nicht die Organisationsabläufe behindern oder andere Sicherheitsmaßnahmen aushebeln. Des Weiteren müssen sie wirtschaftlich sein. In solchen Fällen kann es notwendig werden, bestimmte IT-Grundschutz-Anforderungen so anzupassen, dass dieselben Sicherheitsziele erreicht werden. Basis-Anforderungen sind so elementar, dass diese im Normalfall nicht ersetzt werden können.

Um auch später noch nachvollziehen zu können, wie die konkrete Maßnahmenliste erstellt und verfeinert wurde, sollte dies geeignet dokumentiert werden.

Weiterführende Hinweise zur Konsolidierung der Sicherheitsmaßnahmen finden sich außerdem im BSI-Standard 200-3 Risikoanalyse auf der Basis von IT-Grundschutz.

**Beispiele:**

- Bei einer Risikoanalyse wurde festgestellt, dass zusätzlich zu den IT-Grundschutz-Anforderungen auch eine chipkartengestützte Authentisierung und lokale Verschlüsselung der Festplatten an Clients der Personaldatenverarbeitung notwendig sind. Diese zusätzlichen Anforderungen sollten im Sicherheitskonzept ergänzt werden.
- Im Sicherheitskonzept für ein Krankenhaus wurde festgelegt, dass für alle IT-Systeme eine Authentifizierung erforderlich ist und ein Time-out nach zehn Minuten erfolgt. Beim IT-Grundschutz-Check stellt sich heraus, dass die Vorgabe zu pauschal und in dieser Form nicht praxistauglich ist. Daher wird diese jetzt im Sicherheitskonzept differenziert:
  - IT-Systeme im Verwaltungsbereich erfordern eine erneute Authentifizierung nach 15 Minuten Inaktivität.
  - Bei IT-Systemen in Bereichen, wo Patienten- und Besucherverkehr herrscht, erfolgt ein Time-out nach fünf Minuten.
  - Bei IT-Systemen in Behandlungsräumen wird die automatische Abmeldung deaktiviert. Die Mitarbeiter erhalten die Anweisung, sich nach dem Verlassen der Räume abzumelden.

### 9.2 Kosten- und Aufwandsschätzung

Da das Budget zur Umsetzung von Sicherheitsmaßnahmen praktisch immer begrenzt ist, sollte für jede zu realisierende Maßnahme festgehalten werden, welche Investitionskosten und welcher Personalaufwand dafür benötigt werden. Hierbei sollte zwischen einmaligen und wiederkehrenden Investitionskosten bzw. Personalaufwand unterschieden werden. An dieser Stelle zeigt sich häufig, dass Einsparungen bei technischen oder infrastrukturellen Sicherheitsmaßnahmen dazu führen, dass sie einen hohen fortlaufenden Personaleinsatz verursachen. Umgekehrt führen Einsparungen beim Personal schnell zu kontinuierlich immer größer werdenden Sicherheitsdefiziten.

In diesem Zusammenhang ist zu ermitteln, ob alle im ersten Zug aus den Anforderungen abgeleiteten Maßnahmen wirtschaftlich umsetzbar sind. Falls es Maßnahmen gibt, die nicht wirtschaftlich sind, sollten Überlegungen angestellt werden, durch welche Ersatzmaßnahmen die Anforderungen dennoch erfüllt werden könnten. Auch bei Informationssicherheit führen häufig viele Wege zum Ziel. Oftmals gibt es verschiedene Optionen, Anforderungen mit geeigneten Maßnahmen zu erfüllen. Falls keine angemessene Maßnahme gefunden werden kann, muss das entstehende Restrisiko sowie die Entscheidung dokumentiert werden. Basis-Anforderungen müssen im Normalfall immer erfüllt werden, die Akzeptanz eines Restrisikos ist aufgrund ihrer elementaren Natur nicht vorgesehen.

Stehen die geschätzten Ressourcen für Kosten- und Personaleinsatz zur Verfügung, muss üblicherweise noch eine Entscheidung herbeigeführt werden, wie viele Ressourcen für die Umsetzung der Sicherheitsmaßnahmen tatsächlich eingesetzt werden sollen. Hierfür bietet es sich an, der Leitungsebene die Ergebnisse der Sicherheitsuntersuchung darzustellen. Geordnet nach Schutzbedarf sollten die festgestellten Schwachstellen (nicht oder unzureichend erfüllte Sicherheitsanforderungen) zur Sensibilisierung vorgestellt werden. Auch auf die spezifischen Gefährdungen, die in den jeweiligen Bausteinen genannt werden, kann hierbei zurückgegriffen werden. Darüber hinaus bietet es sich an, die für die Realisierung der noch notwendigen Maßnahmen anfallenden Kosten und den zu erwartenden Aufwand aufzubereiten. Im Anschluss sollte eine Entscheidung über das Budget erfolgen.

Kann kein ausreichendes Budget für die Realisierung aller fehlenden Maßnahmen bereitgestellt werden, so sollte aufgezeigt werden, welches Restrisiko dadurch entsteht, dass einige Anforderungen gar nicht oder nur verzögert erfüllt werden. Zu diesem Zweck können die sogenannten Kreuzreferenztabellen aus den Hilfsmitteln zum IT-Grundschutz hinzugezogen werden. Die Kreuzreferenztabellen geben für jeden Baustein eine Übersicht darüber, welche Anforderungen gegen welche elementaren Gefährdungen wirken. Analog lässt sich anhand dieser Tabellen ebenfalls ermitteln, gegen welche elementaren Gefährdungen kein ausreichender Schutz besteht, wenn Anforderungen aus den Bausteinen nicht erfüllt werden. Das entstehende Restrisiko sollte für zufällig eintretende oder absichtlich herbeigeführte Gefährdungen transparent beschrieben und der Leitungsebene zur Entscheidung vorgelegt werden. Die weiteren Schritte können erst nach der Entscheidung der Leitungsebene, dass das Restrisiko tragbar ist, erfolgen, da die Leitungsebene letztlich auch die Verantwortung für die Konsequenzen tragen muss.

### 9.3 Festlegung der Umsetzungsreihenfolge der Maßnahmen

Kapitel 8.3.3 beschreibt eine Reihenfolge, in der die Bausteine umgesetzt werden sollten, von grundlegenden und übergreifenden Bausteinen bis hin zu solchen, die speziellere Themen abdecken und daher in der zeitlichen Reihenfolge eher nachrangig betrachtet werden können. Diese Reihenfolge der Baustein-Umsetzung ist vor allem bei der Basis-Absicherung wichtig. Sie kann aber auch allgemein bei der Festlegung der Umsetzungsreihenfolge für die einzelnen Maßnahmen eines Sicherheitskonzepts herangezogen werden.

Grundsätzlich sind als Erstes die aus den Basis-Anforderungen abgeleiteten Maßnahmen umzusetzen, dann die der Standard-Anforderungen. Die zusätzlichen Maßnahmen für den erhöhten Schutzbedarf sollten erst anschließend angepasst und realisiert werden.

Wenn das vorhandene Budget oder die personellen Ressourcen nicht ausreichen, um sämtliche noch notwendigen Maßnahmen sofort umsetzen zu können, muss hier eine Priorisierung festgelegt werden.

Die weitere Umsetzungsreihenfolge orientiert sich daran, was für die jeweilige Institution am sinnvollsten ist. Tipps dazu sind:

- Die Umsetzungsreihenfolge lässt sich daran festmachen, wann im Lebenszyklus eines Zielobjektes die jeweiligen Maßnahmen umzusetzen sind. Bei neuen Zielobjekten sind beispielsweise Maßnahmen aus den Bereichen Planung und Konzeption vor solchen umzusetzen, bei denen es um den sicheren Betrieb geht, während bei schon länger im Informationsverbund vorhandenen Zielobjekten zunächst die Absicherung des Betriebs im Vordergrund stehen sollte.
- Bei einigen Maßnahmen ergibt sich durch Abhängigkeiten und logische Zusammenhänge eine zwingende zeitliche Reihenfolge. So kann eine restriktive Rechtevergabe (Basis-Anforderung) auf einem neuen Server nur erfolgen, wenn dieser zunächst sicher installiert wurde (Standard-Anforderung). Diese Reihenfolge kann mit der Klassifikation in Basis- und Standard-Anforderungen auf den ersten Blick kollidieren. Dennoch haben Basis-Anforderungen inhaltlich stets Priorität, sofern sie bereits erfüllbar sind, im Beispiel etwa bei einem bestehenden Server.
- Manche Maßnahmen erzielen eine große Breitenwirkung, manche jedoch nur eine eingeschränkte lokale Wirkung. Oft ist es sinnvoll, zuerst auf die Breitenwirkung zu achten. Auch daher sollten bevorzugt die Basis-Anforderungen umgesetzt werden, da mit diesen die schnellste Absicherung in der Breite erreicht werden kann. Es lohnt sich aber auch durchaus, die Maßnahmen aus den verschiedenen Bereichen danach zu gewichten, wie schnell sie sich umsetzen lassen und welchen Sicherheitsgewinn sie liefern. Sogenannte "Quick Wins" lassen sich häufig im organisatorischen Bereich finden oder durch zentrale Konfigurationseinstellungen erreichen.
- Es gibt Bausteine, die auf das angestrebte Sicherheitsniveau einen größeren Einfluss haben als andere. Maßnahmen eines solchen Bausteins sollten bevorzugt behandelt werden, insbesondere wenn hierdurch Schwachstellen in hochschutzbedürftigen Bereichen beseitigt werden. So sollten immer zunächst die Server abgesichert werden (unter anderem durch Umsetzung des Bausteins SYS.1.1 Allgemeiner Server) und dann erst die angeschlossenen Clients.
- Bausteine mit auffallend vielen nicht umgesetzten Anforderungen repräsentieren Bereiche mit vielen Schwachstellen. Sie sollten ebenfalls bevorzugt behandelt werden.

Die Entscheidung, welche Sicherheitsmaßnahmen ergriffen oder zunächst verschoben werden und wo Restrisiken akzeptiert werden können, sollte auch aus juristischen Gründen sorgfältig dokumentiert werden. In Zweifelsfällen sollten hierfür weitere Meinungen eingeholt und diese ebenfalls dokumentiert werden, um in späteren Streitfällen die Einhaltung der erforderlichen Sorgfaltspflicht belegen zu können.

> **Hinweis:** Bereits einleitend wurde darauf hingewiesen, dass die Erfüllung von Anforderungen an fehlenden Ressourcen scheitern kann. Die oben angeführten Aspekte ermöglichen eine erste Priorisierung. Bei dieser Vorgehensweise werden jedoch die verbleibenden Restrisiken nicht hinreichend betrachtet. Wenn Anforderungen aus IT-Grundschutz-Bausteinen nicht erfüllt sind, ist es empfehlenswert, im Rahmen einer vereinfachten Risikoanalyse die entstandenen Defizite zu betrachten. In diesem Fall kann die in der Risikoanalyse durchzuführende Ermittlung von Gefährdungen entfallen. Dies ist bereits bei der Erstellung der Grundschutz-Bausteine geschehen. Es verbleibt somit die Bewertung des Risikos aufgrund der fehlenden Umsetzung von Anforderungen.

### 9.4 Festlegung der Aufgaben und der Verantwortung

Nachdem die Reihenfolge für die Umsetzung der Maßnahmen bestimmt wurde, muss anschließend festgelegt werden, wer bis wann welche Maßnahmen realisieren muss. Ohne eine solche verbindliche Festlegung verzögert sich die Realisierung erfahrungsgemäß erheblich bzw. unterbleibt ganz. Dabei ist darauf zu achten, dass der als verantwortlich Benannte ausreichende Fähigkeiten und Kompetenzen zur Umsetzung der Maßnahmen besitzt und dass ihm die erforderlichen Ressourcen zur Verfügung gestellt werden.

Ebenso ist festzulegen, wer für die Überwachung der Realisierung verantwortlich ist bzw. an wen der Abschluss der Realisierung der einzelnen Maßnahmen zu melden ist. Typischerweise wird die Meldung an den ISB erfolgen. Der ISB muss kontinuierlich über den Fortschritt der Realisierung und über die Ergebnisse der Umsetzung informiert werden. Der ISB wiederum muss regelmäßig die Leitungsebene über den Fortschritt und die damit verbundene Absenkung vorhandener Risiken informieren.

Der Realisierungsplan sollte mindestens folgende Informationen umfassen:

- Bezeichnung des Zielobjektes als Einsatzumfeld,
- Nummer bzw. Titel des betrachteten Bausteins,
- Titel bzw. Beschreibung der zu erfüllenden Anforderung,
- Beschreibung der umzusetzenden Maßnahme bzw. Verweis auf die Beschreibung im Sicherheitskonzept,
- Terminplanung für die Umsetzung, Budgetplanung, beispielsweise für Beschaffung und Betriebskosten von Komponenten,
- Verantwortliche für die Umsetzung der Maßnahmen.

### 9.5 Realisierungsbegleitende Maßnahmen

Überaus wichtig ist es, notwendige realisierungsbegleitende Maßnahmen rechtzeitig zu identifizieren bzw. zu konzipieren und für die Realisierung entsprechend einzuplanen. Zu diesen Maßnahmen gehören insbesondere Sensibilisierungsmaßnahmen, die darauf abzielen, die Belange der Informationssicherheit zu verdeutlichen und die von neuen Sicherheitsmaßnahmen betroffenen Mitarbeiter über die Notwendigkeit und die Konsequenzen der Maßnahmen zu unterrichten.

Darüber hinaus müssen die betroffenen Mitarbeiter geschult werden, die neuen Sicherheitsmaßnahmen korrekt um- und einzusetzen. Wird diese Schulung unterlassen, können die Maßnahmen oft nicht umgesetzt werden und verlieren ihre Wirkung, wenn sich die Mitarbeiter unzureichend informiert fühlen, was oft zu einer ablehnenden Haltung gegenüber der Informationssicherheit führt.

**Beispiel: RECPLAST GmbH**

Die obigen Schritte werden nachfolgend anhand des fiktiven Beispiels RECPLAST GmbH auszugsweise beschrieben. In der nachfolgenden Tabelle werden einige zu realisierende Maßnahmen einschließlich der Budgetplanungen dargestellt.

| Zielobjekt | Baustein | Anforderung | Umzusetzende Maßnahmen | Terminplanung | Budget | Verantwortlich für die Umsetzung |
|---|---|---|---|---|---|---|
| S008 – Printserver | SYS.1.1 Allgemeiner Server | SYS.1.1.A3 Restriktive Rechtevergabe | In der Rechtevergabe müssen die letzten Gruppenberechtigungen aufgelöst werden. | Q3 des Jahres | - | E Herr Schmidt (IT-Betrieb) |
| S008 – Printserver | SYS.1.1 Allgemeiner Server | SYS.1.1.A4 Rollentrennung | Es sind noch nicht für jeden Administrator separate Benutzer-Kennungen eingerichtet. | 31.07. des Jahres | - | E Herr Schmidt (IT-Betrieb) |
| S008 – Printserver | SYS.1.1 Allgemeiner Server | SYS.1.1.A8 Regelmäßige Datensicherung | Die Datensicherungen werden derzeit auf Bändern innerhalb des Serverraumes aufbewahrt. Geplant ist hierzu ein externes Backup-System. Ein Angebot für die Initialisierung liegt bereits vor (15.000 €). Die Betriebskosten müssen noch verhandelt werden. | Q1 Folgejahr | Anschaffung: 15.000 € Betriebskosten: noch offen | Frau Meyer (Einkauf) |

Anhand dieser Informationen kann die Umsetzung der Maßnahmen überwacht und gesteuert werden.

**Aktionspunkte zu 9 Umsetzung der Sicherheitskonzeption**

- Fehlende oder nur teilweise umgesetzte IT-Grundschutz-Anforderungen sowie ergänzende Sicherheitsmaßnahmen in einer Tabelle zusammenfassen
- Sicherheitsmaßnahmen konsolidieren, d. h. überflüssige Maßnahmen streichen, allgemeine Maßnahmen an die Gegebenheiten anpassen und alle Maßnahmen auf Eignung prüfen
- Einmalige und wiederkehrende Kosten und den Aufwand für die umzusetzenden Maßnahmen ermitteln
- Ersatzmaßnahmen für nicht finanzierbare oder nicht leistbare Maßnahmen auflisten
- Entscheidung herbeiführen, welche Ressourcen für die Umsetzung der Maßnahmen eingesetzt werden sollen
- Gegebenenfalls Restrisiko aufzeigen und Entscheidung der Leitungsebene dazu einholen
- Umsetzungsreihenfolge für die Maßnahmen festlegen, begründen und dokumentieren
- Termine für die Umsetzung festlegen und Verantwortung zuweisen
- Verlauf der Umsetzung und Einhaltung der Termine überwachen
- Betroffene Mitarbeiter schulen und sensibilisieren

## 10 Aufrechterhaltung und kontinuierliche Verbesserung der Informationssicherheit

Um den Informationssicherheitsprozess aufrechtzuerhalten und kontinuierlich verbessern zu können, müssen nicht nur angemessene Sicherheitsmaßnahmen implementiert und Dokumente fortlaufend aktualisiert werden, sondern auch der IS-Prozess selbst muss regelmäßig auf seine Wirksamkeit und Effizienz hin überprüft werden. Dabei sollte regelmäßig eine Erfolgskontrolle und Bewertung des IS-Prozesses durch die Leitungsebene stattfinden (Managementbewertung). Bei Bedarf (z. B. bei der Häufung von Sicherheitsvorfällen oder gravierenden Änderungen der Rahmenbedingungen) muss auch zwischen den Routineterminen getagt werden. Alle Ergebnisse und Beschlüsse müssen nachvollziehbar dokumentiert werden. Die Dokumente müssen aussagekräftig und für die jeweilige Zielgruppe verständlich sein, siehe auch Kapitel 5.2 Informationsfluss im Informationssicherheitsprozess. Es ist die Aufgabe des ISB, diese Informationen zu sammeln, zu verarbeiten und entsprechend kurz und übersichtlich für die Leitungsebene aufzubereiten.

### 10.1 Überprüfung des Informationssicherheitsprozesses auf allen Ebenen

Die Überprüfung des Informationssicherheitsprozesses ist unabdingbar, damit einerseits Fehler und Schwachstellen erkannt und abgestellt werden können und andererseits der IS-Prozess in Bezug auf seine Effizienz optimiert werden kann. Ziel dabei ist unter anderem die Verbesserung der Praxistauglichkeit von Strategie, Maßnahmen und organisatorischen Abläufen. Die wesentlichen Aspekte, die dabei betrachtet werden müssen, werden im Folgenden dargestellt.

Zur Effizienzprüfung und Verbesserung des Informationssicherheitsprozesses sollten Verfahren und Mechanismen eingerichtet werden, die einerseits die Realisierung der beschlossenen Maßnahmen und andererseits ihre Wirksamkeit und Effizienz überprüfen.

Die Informationssicherheitsstrategie sollte daher auch Leitaussagen zur Messung der Zielerreichung machen, dabei sollte mindestens definiert werden:

- Welche Ziele in welcher Form und sinnvoller Anzahl überwacht oder gemessen werden (WAS),
- Wer für die Überwachung oder Messung der zuvor festgelegten Punkte verantwortlich ist (WER),
- Wann und wie häufig die Ergebnisse auszuwerten sind (WANN).

Grundsätzlich sollte sich die Überprüfung des Informationssicherheitsprozesses auf eine sinnvolle Anzahl von Zielen beschränken. Beispiele für Methoden können sein:

- Definition, Dokumentation und Auswertung von Kennzahlen (z. B. Aktualität des Virenschutzes und Anzahl detektierter Schadsoftware usw.)
- Detektion, Dokumentation und Auswertung von Sicherheitsvorfällen
- Durchführung von Übungen und Tests zur Simulation von Sicherheitsvorfällen und Dokumentation der Ergebnisse (z. B. Back-up-Wiederherstellung)
- interne und externe Audits, Datenschutzkontrollen
- Zertifizierung nach festgelegten Sicherheitskriterien (z. B. ISO 27001 auf Basis von IT-Grundschutz)

Die erfolgreiche Umsetzung von Sicherheitsmaßnahmen sollte regelmäßig überprüft werden. Grundsätzlich ist dabei wichtig, dass Prüfungen und Audits nicht von denjenigen durchgeführt werden, die die jeweiligen Sicherheitsvorgaben entwickelt haben, und dass die Leitung der Institution über den aus den Audits abgeleiteten Stand der Informationssicherheit informiert wird.

Um Betriebsblindheit zu vermeiden, kann es sinnvoll sein, externe Experten mit der Durchführung solcher Prüfungsaktivitäten zu beauftragen.

Da der Aufwand bei Audits von der Komplexität und Größe des Informationsverbunds abhängt, sind die Anforderungen auch für kleine Institutionen sehr gut umzusetzen. Mithilfe von automatisiertem Monitoring und Reporting kann eine kontinuierliche Analyse der Informationssicherheit bei geringer Ressourcenbelastung ermöglicht werden. Mit einer Durchsicht vorhandener Dokumentationen, um die Aktualität zu prüfen, und einem Workshop, bei dem Probleme und Erfahrungen mit dem Sicherheitskonzept besprochen werden, kann in kleinen Institutionen bereits ein ausreichender Überblick über den Status der Informationssicherheit gewonnen werden.

#### 10.1.1 Überprüfung anhand von Kennzahlen

Kennzahlen werden in der Informationssicherheit eingesetzt, um den IS-Prozess bzw. Teilaspekte davon messbar zu machen. Sie dienen dazu, den Prozess zu optimieren und Güte, Effizienz und Effektivität der vorhandenen Sicherheitsmaßnahmen zu überprüfen.

Messungen und Kennzahlen dienen häufig der Kommunikation mit dem Management und können dem Informationssicherheitsmanagement wertvolle Argumentationshilfen liefern. Daher ist es wichtig, Messwerkzeuge so auszuwählen und durchgeführte Messungen so aufzubereiten, dass sie in das strategische Umfeld der eigenen Institution passen.

Kennzahlen zu ermitteln, bedeutet immer auch Aufwand. Dieser sollte in einer vernünftigen Relation zu den erhofften bzw. erzielten Ergebnissen stehen. Kennzahlen haben eine begrenzte Aussagekraft, da damit einzelne, meist wenige Bereiche der Informationssicherheit punktuell beleuchtet werden, nämlich meist diejenigen, in denen sich leicht Messwerte erzielen lassen. Dies betrifft im Allgemeinen die technische Sicherheit, bei der über Sensoren automatisiert Messwerte zurückgemeldet werden können, und andere, leicht quantifizierbare Aussagen, wie z. B.

- Anzahl der erkannten Schadsoftware-Muster,
- Anzahl der installierten Sicherheitspatches,
- Dauer der Systemausfälle,
- Anzahl der durchgeführten Sicherheitsschulungen.

Kennzahlen lassen sich immer unterschiedlich interpretieren, wichtig ist daher, dass im Vorfeld klar ist, welches Ziel mit Messungen verfolgt wird und wie und mit welchem Aufwand dies erreicht werden soll. Gegen dieses Ziel kann dann gemessen werden.

#### 10.1.2 Bewertung des ISMS mithilfe eines Reifegradmodells

Die Wirksamkeit des Managementsystems für Informationssicherheit einer Institution sollte regelmäßig bewertet werden. Dies kann mithilfe eines Reifegradmodells erfolgen. Ein Reifegradmodell ermöglicht, den Fortschritt des ISMS nachvollziehbar über die Jahre hinweg zu dokumentieren, ohne sich dabei in Einzelmaßnahmen zu verlieren. Es stellt eine weitere potenzielle Kennzahl zur Steuerung der Informationssicherheit in einer Institution dar. Eine beispielhafte Reifegradbewertung eines ISMS kann wie folgt aussehen:

| Reifegrad | Erläuterung |
|---|---|
| 0 | Es existiert kein ISMS und es ist auch nichts geplant. |
| 1 | ISMS ist geplant, aber nicht etabliert. |
| 2 | ISMS ist zum Teil etabliert. |
| 3 | ISMS ist voll etabliert und dokumentiert. |
| 4 | Zusätzlich zum Reifegrad 3 wird das ISMS regelmäßig auf Effektivität überprüft. |
| 5 | Zusätzlich zum Reifegrad 4 wird das ISMS regelmäßig verbessert. |

Die Bewertung des Reifegrads eines ISMS kann sich durchaus mehrdimensional anhand von Themenfeldern darstellen, beispielsweise angelehnt an das Schichtenmodell des IT-Grundschutzes:

- ISMS (Managementsysteme für Informationssicherheit)
- ORP (Organisation und Personal)
- CON (Konzepte und Vorgehensweisen)
- OPS (Betrieb)
- DER (Detektion und Reaktion)
- INF (Infrastruktur)
- NET (Netze und Kommunikation)
- SYS (IT-Systeme)
- APP (Anwendungen)
- IND (Industrielle IT)

Informationssicherheit ist eine Querschnittsfunktion, welche mit nahezu allen Bereichen einer Institution verzahnt ist. Aus diesem Grund ist es notwendig, die Informationssicherheit in bestehende Prozesse einer Institution zu integrieren. Beispiele hierfür sind:

- **Projektmanagement:** Bereits in der Planungsphase eines Projektes muss der Schutzbedarf der zukünftig als Ergebnis zu verarbeitenden Informationen bewertet werden; darauf aufbauend sollte zudem die Planung geeigneter Sicherheitsmaßnahmen erfolgen.
- **Incident-Management:** Bei Störungen des IT-Betriebs mit Auswirkungen auf die Informationssicherheit muss das Vorgehen mit dem Sicherheitsmanagement abgestimmt sein. Das Security-Incident-Management und Störungsmanagement der IT und des Facility-Managements müssen verzahnt sein.

Existieren solche Managementprozesse nicht, ist es möglich, ein ISMS aufzubauen und zu betreiben, es wird jedoch nicht effizient funktionieren. Wenn das ISMS nicht mit dem Projektmanagement verzahnt ist, kann der Schutzbedarf neuer oder geänderter Geschäftsprozesse nur durch zyklische Abfragen (jährlich, quartalsweise) ermittelt werden. Dadurch ist es deutlich schwieriger, eine vollständige und aktuelle Schutzbedarfsfeststellung aller Zielobjekte zu erhalten. Wenn kein Störungsmanagement vorhanden ist, werden Sicherheitsvorfälle nicht erkannt bzw. nicht an die korrekte Stelle gemeldet. Der Reifegrad der Informationssicherheit hängt somit auch vom Reifegrad der anderen Managementprozesse der Institution ab und ist keine selbstständige Größe.

Der Reifegrad der Informationssicherheit kann von Institution zu Institution sehr unterschiedlich sein. Allein aus der Tatsache, dass ein Sicherheitsmanagement vorhanden ist, kann nicht darauf geschlossen werden, dass die Institution Sicherheitsvorfälle gut bewältigen kann. Durch eine einheitliche und differenzierte Bewertung des Umsetzungsniveaus des ISMS einer Institution können verschiedene wichtige Ziele erreicht werden:

- Überprüfung, ob die einzelnen Aspekte des Sicherheitsmanagements vollständig bearbeitet und umgesetzt wurden,
- Erkennung von Verbesserungs- und Weiterentwicklungspotenzialen,
- Vergleichbarkeit des Umsetzungsniveaus beim Sicherheitsmanagement zwischen verschiedenen Institutionen,
- Nachweisbarkeit des erreichten Umsetzungsniveaus gegenüber Dritten.

Zusätzlich kann die Leitungsebene die Bewertungsergebnisse auch als Kennzahlen nutzen, um das Sicherheitsmanagementsystem zu steuern und weiterzuentwickeln (siehe Kapitel 5.2.1).

Wird das Umsetzungsniveau regelmäßig beurteilt, kann die kontinuierliche Weiterentwicklung des Informationssicherheitsmanagements der Institution nachvollziehbar und effizient dokumentiert werden.

#### 10.1.3 Überprüfung der Umsetzung der Sicherheitsmaßnahmen

Im Realisierungsplan ist für alle Maßnahmen des Sicherheitskonzepts enthalten, wer diese bis wann umzusetzen hat (Aufgabenliste und zeitliche Planung). Anhand dessen ist eine Auswertung möglich, inwieweit diese Planungen eingehalten wurden. Die Überprüfung des Informationssicherheitsprozesses dient zur Kontrolle der Aktivitäten im Rahmen des Sicherheitskonzepts und zur Identifizierung von Planungsfehlern.

Nach der Einführung von neuen Sicherheitsmaßnahmen sollte durch den ISB geprüft werden, ob die notwendige Akzeptanz seitens der Mitarbeiter vorhanden ist. Die Ursachen fehlender Akzeptanz sind herauszuarbeiten und abzustellen.

**Sicherheitsrevision**

Die Informationssicherheitsrevision (IS-Revision) ist ein Bestandteil eines jeden erfolgreichen Informationssicherheitsmanagements. Nur durch die regelmäßige Überprüfung der etablierten Sicherheitsmaßnahmen und des Informationssicherheitsprozesses können Aussagen über deren wirksame Umsetzung, Aktualität, Vollständigkeit und Angemessenheit und damit über den aktuellen Zustand der Informationssicherheit getroffen werden. Die IS-Revision ist somit ein Werkzeug zum Feststellen, Erreichen und Aufrechterhalten eines angemessenen Sicherheitsniveaus in einer Institution. Das BSI hat hierzu mit dem Leitfaden für die IS-Revision auf Basis von IT-Grundschutz ein Verfahren entwickelt, um den Status der Informationssicherheit in einer Institution festzustellen und Schwachstellen identifizieren zu können (siehe [BSIR]).

Die im IT-Grundschutz Kompendium enthaltenen Sicherheitsanforderungen können auch für die Revision der Informationssicherheit genutzt werden. Hierzu wird die gleiche Vorgehensweise wie beim IT-Grundschutz-Check empfohlen. Hilfreich und arbeitsökonomisch ist es, für jeden Baustein des IT-Grundschutz Kompendiums anhand der Anforderungen eine speziell auf die eigene Institution angepasste Checkliste zu erstellen. Dies erleichtert die Revision und verbessert die Reproduzierbarkeit der Ergebnisse.

**Cyber-Sicherheits-Check**

Mithilfe eines Cyber-Sicherheits-Checks können Institutionen das aktuelle Niveau der Cybersicherheit in ihrer Institution bestimmen. Der Cyber-Sicherheits-Check richtet sich an Institutionen, die sich bislang weniger intensiv mit dem Thema der Cyber-Sicherheit beschäftigt haben. Zur Durchführung eines Cyber-Sicherheits-Checks werden explizit keine obligatorischen Voraussetzungen an Dokumentenlage oder Umsetzungsstatus gestellt (siehe [CSC]).

Der Cyber-Sicherheits-Check und die zugrunde liegenden Maßnahmenziele für die Beurteilung der Cyber-Sicherheit wurden so konzipiert, dass das Risiko, einem Cyber-Angriff zum Opfer zu fallen, durch regelmäßige Durchführung eines Cyber-Sicherheits-Checks minimiert werden kann. Dabei wurde die Vorgehensweise auf Cyber-Sicherheitsbelange ausgerichtet.

Das BSI und die ISACA stellen einen praxisnahen Handlungsleitfaden zur Verfügung, der konkrete Vorgaben und Hinweise für die Durchführung eines Cyber-Sicherheits-Checks und die Berichtserstellung enthält. Ein besonders interessanter Mehrwert ist die Zuordnung der zu beurteilenden Maßnahmenziele zu den bekannten Standards der Informationssicherheit (IT-Grundschutz, ISO 27001, COBIT, PCI DSS).

#### 10.1.4 Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz

Eine Zertifizierung ist eine Methode, um die Erreichung der Sicherheitsziele und die Umsetzung der Sicherheitsmaßnahmen durch qualifizierte unabhängige Stellen zu überprüfen. Durch eine Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz erhält eine Institution nachvollziehbare, wiederholbare und vergleichbare Auditergebnisse.

### 10.2 Eignung der Informationssicherheitsstrategie

Um den Informationssicherheitsprozess erfolgreich steuern und lenken zu können, muss die Leitungsebene einen Überblick darüber haben, inwieweit die Sicherheitsziele mithilfe der eingesetzten Sicherheitsstrategie tatsächlich erreicht werden konnten.

**Aktualität von Sicherheitszielen, Rahmenbedingungen und Sicherheitskonzeption**

Bezüglich einer längeren Perspektive ist es auch notwendig, die gesetzten Sicherheitsziele und Rahmenbedingungen zu überprüfen. Gerade in schnelllebigen Branchen ist eine entsprechende Anpassung der Sicherheitsleitlinie und der Sicherheitsstrategie von elementarer Bedeutung.

Auch betriebliche Änderungen (z. B. Einsatz neuer IT-Systeme, Umzug), organisatorische Änderungen (z. B. Outsourcing) und Änderungen gesetzlicher Anforderungen müssen schon bei ihrer Planungsphase mit in die Sicherheitskonzeption einbezogen werden. Die Sicherheitskonzeption und die dazu gehörige Dokumentation muss nach jeder relevanten Änderung aktualisiert werden. Dies muss auch im Änderungsprozess der Institution berücksichtigt werden. Dafür muss der Informationssicherheitsprozess in das Änderungsmanagement der Institution integriert werden.

**Wirtschaftlichkeitsbetrachtung**

Die Wirtschaftlichkeit der Sicherheitsstrategie und die spezifischen Sicherheitsmaßnahmen sollten konstant unter Beobachtung stehen. Es ist zu prüfen, ob die tatsächlich angefallenen Kosten den ursprünglich geplanten Kosten entsprechen oder ob alternativ andere, ressourcenschonendere Sicherheitsmaßnahmen eingesetzt werden können. Ebenso ist es wichtig, regelmäßig den Nutzen der vorhandenen Sicherheitsmaßnahmen herauszuarbeiten.

**Rückmeldungen von Internen und Externen**

Rückmeldungen über Fehler und Schwachstellen in den Prozessen kommen im Allgemeinen nicht nur von der Informationssicherheitsorganisation oder der Revision, sondern auch von Mitarbeitern, Geschäftspartnern, Kunden oder Partnern. Die Institution muss daher eine wirksame Vorgehensweise festlegen, um mit Beschwerden und anderen Rückmeldungen von Internen und Externen umzugehen. Beschwerden von Kunden oder Mitarbeitern können dabei auch ein Indikator für Unzufriedenheit sein. Es sollte möglichst bereits entstehender Unzufriedenheit entgegengewirkt werden, da bei zufriedenen Mitarbeitern die Gefahr von fahrlässigen oder vorsätzlichen Handlungen, die den Betrieb stören könnten, geringer ist.

Es muss daher ein klar definiertes Verfahren und eindeutig festgelegte Kompetenzen für den Umgang mit Beschwerden und für die Rückmeldung von Problemen an die zuständige Instanz geben. So sollte auf Beschwerden schnellstmöglich geantwortet werden, damit die Hinweisgeber sich auch ernst genommen fühlen. Die gemeldeten Probleme müssen bewertet und der Handlungsbedarf eingeschätzt werden. Die Institution muss daraufhin angemessene Korrekturmaßnahmen zur Beseitigung der Ursachen von Fehlern ergreifen, um deren erneutes Auftreten zu verhindern.

**Fortentwicklung des ISMS**

Auch das ISMS muss kontinuierlich weiterentwickelt werden und an neue Erkenntnisse, die sich beispielsweise aus der Überprüfung des Informationssicherheitsprozesses ergeben haben können, angepasst werden.

**Erweiterung der gewählten Vorgehensweise**

Bei Einstieg in den Sicherheitsprozess hat die Leitung der Institution sich für eine Vorgehensweise entschieden, um auf Basis von IT-Grundschutz oder auch anderen Methoden ein bestimmtes Sicherheitsniveau für einen definierten Geltungsbereich zu erreichen. Wenn diese Vorgehensweise umgesetzt und die Phase der Aufrechterhaltung und kontinuierlichen Verbesserung der Informationssicherheit erreicht wurde, muss überlegt werden, ob

- die gewählte Vorgehensweise ergänzt werden soll (beispielsweise von Basis- auf Standard-Absicherung) und/oder
- der Geltungsbereich erweitert werden soll (beispielsweise von Kern-Absicherung eines eingegrenzten Bereiches auf einen größeren Informationsverbund).

Ziel sollte es sein, langfristig alle Bereiche der Institution auf ein ganzheitliches Sicherheitsniveau zu heben, das mindestens Standard-Absicherung umfasst.

### 10.3 Übernahme der Ergebnisse in den Informationssicherheitsprozess

Die Ergebnisse der Bewertung sind für die Verbesserung des IS-Prozesses notwendig. Es kann sich dabei herausstellen, dass eine Änderung der Sicherheitsziele, der Sicherheitsstrategie oder des Sicherheitskonzepts zu erfolgen hat und die Informationssicherheitsorganisation den Erfordernissen angepasst werden sollte. Unter Umständen ist es sinnvoll, Geschäftsprozesse, Abläufe oder die IT-Umgebung zu verändern, z. B. wenn Sicherheitsziele unter den bisherigen Rahmenbedingungen nicht oder nur umständlich (also mit hohem finanziellen oder personellen Aufwand) erreicht werden konnten.

Wenn größere Veränderungen vorgenommen und umfangreiche Verbesserungen umgesetzt werden, schließt sich der Managementkreislauf wieder und es wird erneut mit der Planungsphase begonnen.

Die Überprüfungen zu den einzelnen Themen müssen von geeigneten Personen durchgeführt werden, die die notwendige Kompetenz und Unabhängigkeit gewährleisten können. Vollständigkeits- und Plausibilitätskontrollen sollten nicht durch die Ersteller der Konzepte vollzogen werden. Durchgeführte Verbesserungen, Korrekturen und Anpassungen sollten dokumentiert werden.

Die grundsätzliche Vorgehensweise der Institution zur Überprüfung und Verbesserung des Informationssicherheitsprozesses sollte in einer entsprechenden Richtlinie dokumentiert und von der Leitungsebene verabschiedet werden. In der Richtlinie zur Überprüfung und Verbesserung des Informationssicherheitsprozesses sollte insbesondere geregelt werden, wie interne Audits im Bereich der Informationssicherheit durchzuführen sind und wie die Ergebnisse in den Änderungsprozess einfließen. Prüfergebnisse und -berichte sind im Allgemeinen als vertraulich zu betrachten und müssen daher besonders gut geschützt werden.

**Aktionspunkte zu 10 Aufrechterhaltung und kontinuierliche Verbesserung der Informationssicherheit**

- Grundsätzliche Vorgehensweise der Institution zur Überprüfung und Verbesserung des Informationssicherheitsprozesses in einer entsprechenden Richtlinie dokumentieren und der Leitungsebene zur Verabschiedung vorlegen
- Messung der Zielerreichung in die Sicherheitsstrategie integrieren
- Einhaltung des Realisierungsplans prüfen
- Realisierung der beschlossenen Maßnahmen überprüfen
- Wirksamkeit und Effizienz der beschlossenen Maßnahmen überprüfen
- Prüfen, ob die Sicherheitsmaßnahmen akzeptiert werden, und gegebenenfalls nachbessern
- Rollenkonflikt zwischen Ersteller und Prüfer beachten
- Vertraulichkeit der Untersuchungsergebnisse sicherstellen
- Eignung und Aktualität von Sicherheitszielen, -strategien und -konzeption prüfen
- Angemessenheit der bereitgestellten Ressourcen und die Wirtschaftlichkeit der Sicherheitsstrategie und der -maßnahmen überprüfen
- Ergebnisse der Überprüfungen in Form von Verbesserungen in den Informationssicherheitsprozess einfließen lassen

## 11 Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz

Um die erfolgreiche Umsetzung von IT-Grundschutz nach außen transparent machen zu können, kann sich das Unternehmen oder die Behörde nach ISO/IEC 27001 zertifizieren lassen. Das BSI hat ein Zertifizierungsschema für Informationssicherheit entwickelt, das die Anforderungen an Managementsysteme für die Informationssicherheit aus ISO/IEC 27001 berücksichtigt und als Prüfkataloge das IT-Grundschutz-Kompendium sowie die BSI-Standards 200-x zugrunde legt. Dies wird deshalb als ISO 27001-Zertifizierung auf Basis von IT-Grundschutz bezeichnet. Eine solche Zertifizierung ist für die Standard-Absicherung vorgesehen sowie für die Kern-Absicherung grundsätzlich möglich. Bei einer reinen Basis-Absicherung reichen die umgesetzten Sicherheitsmaßnahmen für eine Zertifizierung nicht aus, können aber als Einstieg für eine der anderen beiden Vorgehensweisen dienen.

Das ISO 27001-Zertifikat auf der Basis von IT-Grundschutz bietet Unternehmen und Behörden die Möglichkeit, ihre Bemühungen um Informationssicherheit transparent zu machen. Dies kann sowohl gegenüber Kunden als auch gegenüber Geschäftspartnern als Qualitätsmerkmal dienen und somit zu einem Wettbewerbsvorteil führen.

Dabei sind die Interessen an einer ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz vielfältig:

- Dienstleister möchten mithilfe dieses Zertifikats einen vertrauenswürdigen Nachweis führen, dass sie die Maßnahmen gemäß IT-Grundschutz realisiert haben.
- Kooperierende Unternehmen möchten sich darüber informieren, welchen Grad von Informationssicherheit ihre Geschäftspartner zusichern können.
- Von Institutionen, die neu an ein Netz angeschlossen werden, wird der Nachweis darüber verlangt, dass sie eine ausreichende Informationssicherheit besitzen, damit durch den Anschluss ans Netz keine untragbaren Risiken entstehen.
- Institutionen möchten dem Kunden bzw. Bürger gegenüber ihre Bemühungen um eine ausreichende Informationssicherheit deutlich machen.

Da der IT-Grundschutz mit der in diesem Dokument beschriebenen Vorgehensweise zum Sicherheitsmanagement und den im IT-Grundschutz-Kompendium enthaltenen Sicherheitsanforderungen inzwischen einen Quasi-Standard für Informationssicherheit darstellt, bietet es sich an, dies als allgemein anerkanntes Kriterienwerk für Informationssicherheit zu verwenden.

Grundlage für die Vergabe eines ISO 27001-Zertifikats auf der Basis von IT-Grundschutz ist die Durchführung eines Audits durch einen externen, beim BSI zertifizierten Auditor. Das Ergebnis des Audits ist ein Auditbericht, der der Zertifizierungsstelle vorgelegt wird, die über die Vergabe des ISO 27001-Zertifikats auf der Basis von IT-Grundschutz entscheidet. Kriterienwerke des Verfahrens sind neben der Norm ISO 27001 die in diesem Dokument beschriebene IT-Grundschutz-Vorgehensweise und das IT-Grundschutz Kompendium des BSI.

Über ein ISO 27001-Zertifikat auf der Basis von IT-Grundschutz wird zunächst nachgewiesen, dass IT-Grundschutz im betrachteten Informationsverbund erfolgreich umgesetzt worden ist. Darüber hinaus zeigt ein solches Zertifikat auch, dass in der jeweiligen Institution

- Informationssicherheit ein anerkannter Wert ist,
- ein funktionierendes IS-Management vorhanden ist und außerdem
- zu einem bestimmten Zeitpunkt ein definiertes Sicherheitsniveau erreicht wurde.

Weitere Informationen zur Zertifizierung nach ISO 27001 und zur Zertifizierung als ISO 27001-Auditor auf der Basis von IT-Grundschutz finden sich auf der Website des BSI (siehe [ZERT]).

**Aktionspunkte zu 11 Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz**

- Informationen zum Schema für die ISO 27001-Zertifizierung auf der Basis von IT-Grundschutz lesen
- Prüfen, ob die Bemühungen um Informationssicherheit anhand eines ISO 27001-Zertifikats auf der Basis von IT-Grundschutz transparent gemacht werden sollen
- Gegebenenfalls prüfen, ob das Informationssicherheitsmanagement und der Sicherheitszustand die entsprechenden Voraussetzungen erfüllen
- Gegebenenfalls den Zertifizierungsprozess initiieren

## 12 Anhang

### 12.1 Erläuterungen zu den Schadensszenarien

Im Folgenden sind für die in Kapitel 8.2.1 definierten Schadensszenarien beispielhafte Fragestellungen aufgeführt. Diese Fragen sollen als Hilfsmittel für die Schutzbedarfsfeststellung dienen, vor allem im Bereich der Anwendungen. Anhand der individuellen Anforderungen sollten die Fragen angepasst und ergänzt werden.

#### Schadensszenario "Verstoß gegen Gesetze/Vorschriften/Verträge"

Sowohl aus dem Verlust der Vertraulichkeit als auch der Integrität und ebenso der Verfügbarkeit können derlei Verstöße resultieren. Die Schwere des Schadens ist dabei oftmals abhängig davon, welche rechtlichen Konsequenzen daraus für die Institution entstehen können.

Beispiele für relevante Gesetze sind (in Deutschland): Grundgesetz, Bürgerliches Gesetzbuch, Strafgesetzbuch, Bundesdatenschutzgesetz und Datenschutzgesetze der Länder, EU-Datenschutz-Grundverordnung (DSGVO [DSGVO]), Sozialgesetzbuch, Handelsgesetzbuch, Personalvertretungsgesetz, Betriebsverfassungsgesetz, Urheberrechtsgesetz, Patentgesetz, Informations- und Kommunikationsdienstegesetz (IuKDG), Gesetz zur Kontrolle und Transparenz im Unternehmen (KonTraG).

Beispiele für relevante Vorschriften sind: Verwaltungsvorschriften, Verordnungen und Dienstvorschriften.

Beispiele für Verträge: Dienstleistungsverträge im Bereich Datenverarbeitung, Verträge zur Wahrung von Betriebsgeheimnissen.

**Fragen:**

**Verlust der Vertraulichkeit**

- Erfordern gesetzliche Auflagen die Vertraulichkeit der Informationen?
- Ist im Falle einer Veröffentlichung von Informationen mit Strafverfolgung oder Regressforderungen zu rechnen?
- Sind Verträge einzuhalten, die die Wahrung der Vertraulichkeit bestimmter Informationen beinhalten?

**Verlust der Integrität**

- Erfordern gesetzliche Auflagen die Integrität der Informationen?
- In welchem Maße wird durch einen Verlust der Integrität gegen Gesetze bzw. Vorschriften verstoßen?

**Verlust der Verfügbarkeit**

- Sind bei Ausfall der Anwendung Verstöße gegen Vorschriften oder sogar Gesetze die Folge?
- Schreiben Gesetze die dauernde Verfügbarkeit bestimmter Informationen vor?
- Gibt es Termine, die bei Einsatz der Anwendung zwingend einzuhalten sind?
- Gibt es vertragliche Bindungen für bestimmte einzuhaltende Termine?

#### Schadensszenario "Beeinträchtigung des informationellen Selbstbestimmungsrechts"

Bei der Implementation und dem Betrieb von IT-Systemen und Anwendungen besteht die Gefahr einer Verletzung des informationellen Selbstbestimmungsrechts bis hin zu einem Missbrauch personenbezogener Daten.

Beispiele für die Beeinträchtigung des informationellen Selbstbestimmungsrechts sind:

- Unzulässige Erhebung personenbezogener Daten ohne Rechtsgrundlage oder Einwilligung,
- unbefugte Kenntnisnahme bei der Datenverarbeitung bzw. der Übermittlung von personenbezogenen Daten,
- unbefugte Weitergabe personenbezogener Daten,
- Nutzung von personenbezogenen Daten zu einem anderen als dem bei der Erhebung zulässigen Zweck und
- Verfälschung von personenbezogenen Daten in IT-Systemen oder bei der Übertragung.

Die folgenden Fragen können zur Abschätzung möglicher Folgen und Schäden herangezogen werden:

**Fragen:**

**Verlust der Vertraulichkeit**

- Welche Schäden können für den Betroffenen entstehen, wenn seine personenbezogenen Daten nicht vertraulich behandelt werden?
- Werden personenbezogene Daten für unzulässige Zwecke verarbeitet?
- Ist es im Zuge einer zulässigen Verarbeitung personenbezogener Daten möglich, aus diesen Daten z. B. auf den Gesundheitszustand oder die wirtschaftliche Situation einer Person zu schließen?
- Welche Schäden können durch den Missbrauch der gespeicherten personenbezogenen Daten entstehen?

**Verlust der Integrität**

- Welche Schäden entstünden für den Betroffenen, wenn seine personenbezogenen Daten unabsichtlich verfälscht oder absichtlich manipuliert würden?
- Wann würde der Verlust der Integrität personenbezogener Daten frühestens auffallen?

**Verlust der Verfügbarkeit**

- Können bei einem Ausfall der Anwendung oder bei einer Störung der Datenübertragung personenbezogene Daten verloren gehen oder verfälscht werden, sodass der Betroffene in seiner gesellschaftlichen Stellung beeinträchtigt wird oder gar persönliche oder wirtschaftliche Nachteile zu befürchten hat?

#### Schadensszenario "Beeinträchtigung der persönlichen Unversehrtheit"

Die Fehlfunktion von IT-Systemen oder Anwendungen kann unmittelbar die Verletzung, die Invalidität oder den Tod von Personen nach sich ziehen. Die Höhe des Schadens ist am direkten persönlichen Schaden zu messen.

Beispiele für solche Anwendungen und IT-Systeme sind:

- medizinische Überwachungsrechner,
- medizinische Diagnosesysteme,
- Flugkontrollrechner und
- Verkehrsleitsysteme.

**Fragen:**

**Verlust der Vertraulichkeit**

- Kann durch das Bekanntwerden von Informationen eine Person physisch oder psychisch geschädigt werden?

**Verlust der Integrität**

- Können Menschen durch manipulierte Programmabläufe oder Daten gesundheitlich gefährdet werden?

**Verlust der Verfügbarkeit**

- Bedroht der Ausfall der Anwendung oder des IT-Systems unmittelbar die persönliche Unversehrtheit von Personen?

#### Schadensszenario "Beeinträchtigung der Aufgabenerfüllung"

Gerade der Verlust der Verfügbarkeit einer Anwendung oder der Integrität von Informationen oder Daten kann die Aufgabenerfüllung in einer Institution erheblich beeinträchtigen. Die Schwere des Schadens richtet sich hierbei nach der zeitlichen Dauer der Beeinträchtigung und nach dem Umfang der Einschränkungen der angebotenen Dienstleistungen.

Beispiele hierfür sind:

- Fristversäumnisse durch verzögerte Bearbeitung von Verwaltungsvorgängen,
- verspätete Lieferung aufgrund verzögerter Bearbeitung von Bestellungen,
- fehlerhafte Produktion aufgrund falscher Steuerungsdaten und
- unzureichende Qualitätssicherung durch Ausfall eines Testsystems.

**Fragen:**

**Verlust der Vertraulichkeit**

- Gibt es Informationen, deren Vertraulichkeit die Grundlage für die Aufgabenerfüllung ist (z. B. Strafverfolgungsinformationen, Ermittlungsergebnisse)?

**Verlust der Integrität**

- Können Veränderungen an Informationen die Aufgabenerfüllung in der Art einschränken, dass die Institution handlungsunfähig wird?
- Entstehen erhebliche Schäden, wenn die Aufgaben trotz verfälschter Informationen wahrgenommen werden? Wann werden unerlaubte Datenveränderungen frühestens erkannt?
- Können verfälschte Informationen in der betrachteten Anwendung zu Fehlern in anderen Anwendungen führen?
- Welche Folgen entstehen, wenn Daten fälschlicherweise einer Person zugeordnet werden, die diese Daten in Wirklichkeit gar nicht erzeugt hat?

**Verlust der Verfügbarkeit**

- Gibt es Informationen, bei denen eine Einschränkung der Verfügbarkeit schwerwiegende Auswirkungen auf die Institution oder deren Geschäftsprozesse hätte?
- Kann durch den Ausfall von Anwendungen die Aufgabenerfüllung der Institution so stark beeinträchtigt werden, dass die Wartezeiten für die Betroffenen nicht mehr tolerabel sind?
- Sind von dem Ausfall dieser Anwendung andere Anwendungen betroffen?
- Ist es für die Institution bedeutsam, dass der Zugriff auf Anwendungen nebst Programmen und Daten ständig gewährleistet ist?

#### Schadensszenario "Negative Innen- oder Außenwirkung"

Durch den Verlust einer der Grundwerte Vertraulichkeit, Integrität oder Verfügbarkeit in einer Anwendung können verschiedenartige negative Innen- oder Außenwirkungen entstehen, zum Beispiel:

- Ansehensverlust einer Institution,
- Vertrauensverlust gegenüber einer Institution,
- Demoralisierung der Mitarbeiter,
- Beeinträchtigung der wirtschaftlichen Beziehungen zusammenarbeitender Institutionen,
- verlorenes Vertrauen in die Arbeitsqualität einer Institution und
- Einbüßen der Konkurrenzfähigkeit.

Die Höhe des Schadens orientiert sich an der Schwere des Vertrauensverlustes oder des Verbreitungsgrades der Innen- oder Außenwirkung.

Die Ursachen für solche Schäden können vielfältiger Natur sein:

- Handlungsunfähigkeit einer Institution durch IT-Ausfall,
- fehlerhafte Veröffentlichungen durch manipulierte Daten,
- Fehlbestellungen durch mangelhafte Lagerhaltungsprogramme,
- Nichteinhaltung von Verschwiegenheitserklärungen,
- Schuldzuweisungen an die falschen Personen,
- Verhinderung der Aufgabenerfüllung einer Abteilung durch Fehler in anderen Bereichen,
- Weitergabe von Fahndungsdaten an interessierte Dritte und
- Zuspielen vertraulicher Informationen an die Presse.

**Fragen:**

**Verlust der Vertraulichkeit**

- Welche Konsequenzen ergeben sich für die Institution durch die unerlaubte Veröffentlichung von schutzbedürftigen Informationen?
- Kann der Vertraulichkeitsverlust von Informationen zu einer Schwächung der Wettbewerbsposition führen?
- Entstehen bei der Veröffentlichung von vertraulichen Informationen Zweifel an der Vertrauenswürdigkeit der Institution?
- Können Veröffentlichungen von Informationen zur politischen oder gesellschaftlichen Verunsicherung führen?
- Können Mitarbeiter durch die unzulässige Veröffentlichung von Informationen das Vertrauen in ihre Institution verlieren?

**Verlust der Integrität**

- Welche Schäden können sich durch die Verarbeitung, Verbreitung oder Übermittlung falscher oder unvollständiger Informationen ergeben?
- Wird die Verfälschung von Informationen öffentlich bekannt?
- Entstehen bei einer Veröffentlichung von verfälschten Informationen Ansehensverluste?
- Können Veröffentlichungen von verfälschten Informationen zur politischen oder gesellschaftlichen Verunsicherung führen?
- Können verfälschte Informationen zu einer verminderten Produktqualität und damit zu einem Ansehensverlust führen?

**Verlust der Verfügbarkeit**

- Schränkt der Ausfall von Anwendungen die Informationsdienstleistungen für Externe ein?
- Verhindert die Nichtverfügbarkeit von Informationen oder der Ausfall von Geschäftsprozessen die Erreichung von Geschäftszielen?
- Ab wann wird die Nichtverfügbarkeit von Informationen oder der Ausfall von Anwendungen oder Geschäftsprozessen extern bemerkt?

#### Schadensszenario "Finanzielle Auswirkungen"

Unmittelbare oder mittelbare finanzielle Schäden können durch den Verlust der Vertraulichkeit schutzbedürftiger Informationen, die Veränderung von Informationen oder den Ausfall von Anwendungen entstehen. Beispiele dafür sind:

- unerlaubte Weitergabe von Forschungs- und Entwicklungsergebnissen,
- Manipulation von finanzwirksamen Daten in einem Abrechnungssystem,
- Ausfall eines IT-gesteuerten Produktionssystems und dadurch bedingte Umsatzverluste,
- unerlaubte Einsichtnahme in Marketingstrategiepapiere oder Umsatzzahlen,
- Ausfall eines Buchungssystems einer Reisegesellschaft,
- Ausfall eines E-Commerce-Servers,
- Zusammenbruch des Zahlungsverkehrs einer Bank,
- Diebstahl oder Zerstörung von Hardware.

Die Höhe des Gesamtschadens setzt sich zusammen aus den direkt und indirekt entstehenden Kosten, etwa durch Sachschäden, Schadenersatzleistungen und Kosten für zusätzlichen Aufwand (z. B. Wiederherstellung).

**Fragen:**

**Verlust der Vertraulichkeit**

- Kann die Veröffentlichung vertraulicher Informationen Regressforderungen nach sich ziehen?
- Gibt es innerhalb von Geschäftsprozessen oder Anwendungen Informationen, aus deren Kenntnis ein Dritter (z. B. Konkurrenzunternehmen) finanzielle Vorteile ziehen kann?
- Werden mit Anwendungen Forschungsdaten gespeichert, die einen erheblichen Wert darstellen? Was passiert, wenn sie unerlaubt kopiert und weitergegeben werden?
- Können durch vorzeitige Veröffentlichung von schutzbedürftigen Informationen finanzielle Schäden entstehen?

**Verlust der Integrität**

- Können durch Datenmanipulationen finanzwirksame Daten so verändert werden, dass finanzielle Schäden entstehen?
- Kann die Veröffentlichung falscher Informationen Regressforderungen nach sich ziehen?
- Können durch verfälschte Bestelldaten finanzielle Schäden entstehen (z. B. bei Just-in-Time-Produktion)?
- Können verfälschte Informationen zu falschen Geschäftsentscheidungen führen?

**Verlust der Verfügbarkeit**

- Wird durch den Ausfall von Anwendungen oder Geschäftsprozessen die Produktion, die Lagerhaltung oder der Vertrieb beeinträchtigt?
- Ergeben sich durch den Ausfall von Anwendungen oder Geschäftsprozessen finanzielle Verluste aufgrund von verzögerten Zahlungen bzw. Zinsverlusten?
- Wie hoch sind die Reparatur- oder Wiederherstellungskosten bei Ausfall, Defekt, Zerstörung oder Diebstahl von IT-Systemen?
- Kann es durch den Ausfall von Anwendungen oder Geschäftsprozessen zu mangelnder Zahlungsfähigkeit oder zu Konventionalstrafen kommen?
- Wie viele wichtige Kunden wären von einem Ausfall der Anwendungen oder der Geschäftsprozesse betroffen?

### 12.2 Literaturverzeichnis

- **[27000]** ISO/IEC 27000:2016, International Organization for Standardization (Hrsg.), Information technology – Security techniques – Information Security management systems – Overview and vocabulary, ISO/IEC JTC 1/SC 27, 2016
- **[27001]** ISO/IEC 27001:2013, International Organization for Standardization (Hrsg.), Information technology – Security techniques – Information security management systems – Requirements, ISO/IEC JTC 1/SC 27, 2013
- **[27002]** ISO/IEC 27002:2013, International Organization for Standardization (Hrsg.), Information technology – Security techniques – Code of practice for information security controls, ISO/IEC JTC 1/SC 27, 2013
- **[27004]** ISO/IEC 27004:2016, International Organization for Standardization (Hrsg.), Information technology – Security techniques – Information security management – Monitoring, measurement, analysis and evaluation, ISO/IEC JTC 1/SC 27, 2016
- **[27005]** ISO/IEC 27005:2011, International Organization for Standardization (Hrsg.), Information technology – Security techniques – Information security risk management, ISO/IEC JTC 1/SC 27, 2011
- **[820-2]** DIN 820-2:2012, Anhang H, Gestaltung von Dokumenten – Verbformen zur Formulierung von Festlegungen, NA 173-00-02 AA, 2012
- **[BSI1]** Managementsysteme für Informationssicherheit (ISMS), BSI-Standard 200-1, Version 1.0, Oktober 2017, https://www.bsi.bund.de/grundschutz
- **[BSI3]** Risikoanalyse auf der Basis von IT-Grundschutz, BSI-Standard 200-3, Version 1.0, Oktober 2017, https://www.bsi.bund.de/grundschutz
- **[BSIR]** Informationssicherheitsrevision – Ein Leitfaden für die IS-Revision auf Basis von IT-Grundschutz, BSI, Version 2.0, März 2010, https://www.bsi.bund.de/is-revision
- **[CSC]** Leitfaden Cyber-Sicherheits-Check, BSI, ISACA, 07. 03. 2014, https://www.allianz-fuer-cybersicherheit.de
- **[DSGVO]** Verordnung (EU) 2016/679 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten, zum freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG (Datenschutz-Grundverordnung), Europäisches Parlament und der Rat der Europäischen Union, 27. April 2016
- **[GSK]** IT-Grundschutz-Kompendium, BSI, jährlich neu, https://www.bsi.bund.de/grundschutz
- **[ISF]** The Standard of Good Practice 2016, ISF – Information Security Forum, 2016, https://www.securityforum.org/tool/the-isf-standardrmation-security
- **[NIST53]** NIST Special Publication 800-53 Revision 4, Security and Privacy Controls for Federal Information Systems and Organizations, NIST, 2015, http://csrc.nist.gov/publications/PubsSPs.html
- **[RFC2119]** RFC 2119 (Key words for use in RFCs to Indicate Requirement Levels), Network Working Group, Stand 1997, https://www.ietf.org/rfc/rfc2119.txt
- **[SDM]** Standard-Datenschutzmodell (SDM), SDM-Methodik-Handbuch, Konferenz der Datenschutzbeauftragten des Bundes und der Länder, V1.0, kann von allen Webservern der deutschen Datenschutz-Aufsichtsbehörden heruntergeladen werden, z. B. https://www.datenschutz-mv.de/datenschutz/sdm/sdm.html
- **[ZERT]** Informationen zur Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz, BSI, https://www.bsi.bund.de/iso27001-zertifikate

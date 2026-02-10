# ISO/IEC 27002:2022 Extrakt

> Quelle: ISO/IEC 27002:2022 Information security, cybersecurity and privacy protection — Information security controls.
> Kompakter Lean-Extrakt fuer Agent-Verarbeitung. 93 Controls mit Attributen und Leitlinien-Kernaussagen.
> Original: Englisch. Extrakt: Deutsch (komprimiert). Bei Zweifeln gilt das Original.
> PDFs bleiben als Originale erhalten (Audit-Nachweis).
> Citation Key: ISO22-27002

## Kontext

### Scope (Clause 1)

Dieses Dokument bietet einen Referenzsatz von generischen Informationssicherheitskontrollen einschliesslich Implementierungsleitlinien. Verwendung im Kontext eines ISMS nach ISO/IEC 27001:2022 oder als eigenstaendige Referenz.

### Dokumentstruktur (Clause 4)

Jedes Control hat: Attribut-Tags, Control-Statement, Purpose, Guidance, Other Information. Unterueberschriften in Guidance wo noetig.

### 5 Attribut-Dimensionen

| Dimension | Werte |
|---|---|
| Control-Typ | Preventive (Prev), Detective (Det), Corrective (Korr) |
| IS-Eigenschaften | Confidentiality (V), Integrity (I), Availability (A) |
| Cybersecurity-Konzepte | Identify (Ident), Protect (Schuetz), Detect (Erk), Respond (Reag), Recover (Wied) |
| Operative Faehigkeiten | Gov, Asset, InfoSchutz, HR, Phys, SysNetz, App, SichKonf, IAM, TVuln, Kont, Lief, Recht, Ereignis, Assurance |
| Sicherheitsdomaenen | Governance_Ecosystem, Protection, Defence, Resilience (nicht in Tabellen) |

## A.5 Organisatorische Controls (37)

| # | Name | Zweck | Leitlinie | Typ | Eig | Konzept | Faehigkeit |
|---|---|---|---|---|---|---|---|
| 5.1 | Policies for IS | Eignung, Angemessenheit und Wirksamkeit der Managementrichtung fuer IS sicherstellen | IS-Leitlinie + themenspezifische Richtlinien definieren, genehmigen, kommunizieren, regelmaessig pruefen; bei wesentlichen Aenderungen aktualisieren | Prev | VIA | Ident | Gov |
| 5.2 | IS roles and responsibilities | Definierte Struktur fuer Implementierung und Betrieb der IS | Rollen und Verantwortlichkeiten gemaess IS-Leitlinie zuordnen; Schutz von Assets, Risikomanagement, Autorisierungsebenen dokumentieren | Prev | VIA | Ident | Gov |
| 5.3 | Segregation of duties | Risiko von Betrug, Fehlern und Umgehung von Controls reduzieren | Konfligierende Aufgaben auf verschiedene Personen aufteilen; bei kleinen Orgs kompensierende Controls (Monitoring, Audit Trails) | Prev | VIA | Schuetz | Gov IAM |
| 5.4 | Management responsibilities | Sicherstellen dass Management IS-Rolle versteht und handelt | Management muss verlangen dass alle IS-Richtlinien befolgt werden; Personal briefen, Ressourcen bereitstellen, Whistleblowing ermoeglichen | Prev | VIA | Ident | Gov |
| 5.5 | Contact with authorities | Angemessener Informationsfluss mit Behoerden | Festlegen wann und durch wen Behoerden (Strafverfolgung, Aufsicht) kontaktiert werden; Meldewege fuer Vorfaelle definieren | Prev Korr | VIA | Ident Schuetz Reag Wied | Gov |
| 5.6 | Contact with special interest groups | Aktueller IS-Informationsaustausch | Mitgliedschaft in Fachgruppen/Foren fuer Best Practices, Fruehwarnungen, Bedrohungsinformationen, Spezialistenrat | Prev Korr | VIA | Schuetz Reag Wied | Gov |
| 5.7 | Threat intelligence | Bewusstsein fuer die Bedrohungslage der Organisation | Bedrohungsinformationen sammeln, analysieren (strategisch, taktisch, operativ); relevant, verwertbar, kontextuell; mit anderen Orgs teilen | Prev Det Korr | VIA | Ident Erk Reag | TVuln |
| 5.8 | IS in project management | IS-Risiken in Projekten wirksam adressieren | IS in alle Projekttypen integrieren; Risiken frueh bewerten; IS-Anforderungen in fruehen Phasen adressieren; Fortschritt der Risikobehandlung pruefen | Prev | VIA | Ident Schuetz | Gov |
| 5.9 | Inventory of information and assets | Assets identifizieren und Eigentumsrechte zuweisen | Inventar aktuell, konsistent halten; Eigentuemer zuweisen; Klassifizierung nach 5.12; Lebenszyklus-Management; regelmaessige Reviews | Prev | VIA | Ident | Asset |
| 5.10 | Acceptable use of information and assets | Angemessener Schutz, Nutzung und Handhabung | Themenspezifische Richtlinie fuer akzeptable Nutzung erstellen; erlaubte/verbotene Nutzung, Monitoring-Aktivitaeten definieren | Prev | VIA | Schuetz | Asset InfoSchutz |
| 5.11 | Return of assets | Schutz von Org-Assets bei Personalwechsel | Formalisierter Rueckgabeprozess fuer physische und elektronische Assets; Wissenstransfer sicherstellen; Kopierschutz in Kuendigungsfrist | Prev | VIA | Schuetz | Asset |
| 5.12 | Classification of information | Schutzbedarf von Informationen identifizieren | Klassifizierungsschema etablieren (V, I, A); Eigentuemer klassifizieren; regelmaessig pruefen; konsistent in gesamter Org | Prev | VIA | Ident | InfoSchutz |
| 5.13 | Labelling of information | Kommunikation der Klassifizierung erleichtern | Kennzeichnungsverfahren fuer alle Formate; Labels leicht erkennbar; Metadata fuer digitale Informationen; Personal schulen | Prev | VIA | Schuetz | InfoSchutz |
| 5.14 | Information transfer | Sicherheit bei Informationsuebertragung wahren | Regeln/Verfahren fuer elektronische, physische und verbale Uebertragung; Schutz vor Abfangen, Modifikation; Nachvollziehbarkeit; Verschluesselung | Prev | VIA | Schuetz | Asset InfoSchutz |
| 5.15 | Access control | Autorisierten Zugang sicherstellen, unautorisierten verhindern | Regeln fuer physischen und logischen Zugang basierend auf Geschaeftsanforderungen; Need-to-know, Least Privilege; themenspezifische Richtlinie | Prev | VIA | Schuetz | IAM |
| 5.16 | Identity management | Eindeutige Identifizierung und angemessene Rechtezuweisung | Vollstaendigen Identitaets-Lebenszyklus verwalten; 1:1 Person-Identitaet; nicht benoetigte Identitaeten zeitnah deaktivieren; Ereignisse protokollieren | Prev | VIA | Schuetz | IAM |
| 5.17 | Authentication information | Ordnungsgemaesse Authentifizierung sicherstellen | Zuweisung/Verwaltung kontrolliert; temporaere Passwoerter aendern; sichere Uebertragung; starke Passwoerter; Passwort-Management-System | Prev | VIA | Schuetz | IAM |
| 5.18 | Access rights | Zugang definiert und autorisiert gemaess Geschaeftsanforderungen | Rechte vergeben, pruefen, aendern, entziehen gemaess Richtlinie; bei Wechsel/Austritt zeitnah anpassen; regelmaessige Rezertifizierung | Prev | VIA | Schuetz | IAM |
| 5.19 | IS in supplier relationships | Vereinbartes IS-Niveau mit Lieferanten aufrechterhalten | Prozesse fuer IS-Risiken bei Lieferantennutzung; Lieferantentypen identifizieren; Bewertungskriterien; Compliance-Monitoring; Cloud einbezogen | Prev | VIA | Ident | Lief |
| 5.20 | Addressing IS within supplier agreements | Vereinbartes IS-Niveau in Lieferantenbeziehungen | IS-Anforderungen vertraglich vereinbaren (a-z); Klassifizierung, Zugriffsrechte, Incident-Management, Audit-Recht, Kuendigungsklauseln | Prev | VIA | Ident | Lief |
| 5.21 | Managing IS in ICT supply chain | IS-Niveau in ICT-Lieferkette aufrechterhalten | IS-Anforderungen fuer ICT-Beschaffung; Sicherheitspraktiken entlang Lieferkette propagieren; SBOM anfordern; Komponenten-Integritaet pruefen | Prev | VIA | Ident | Lief |
| 5.22 | Monitoring, review and change mgmt of supplier services | IS und Serviceerbringung gemaess Vereinbarung | Regelmaessig ueberwachen, bewerten; Aenderungen bei Lieferanten tracken; Service-Reports pruefen; Audits durchfuehren; Verantwortliche benennen | Prev | VIA | Ident | Lief Assurance |
| 5.23 | IS for use of cloud services | IS fuer Cloud-Nutzung spezifizieren und verwalten | Cloud-Richtlinie erstellen; Shared Responsibility definieren; Cloud-Vereinbarungen pruefen; Exit-Strategie; Restrisiken akzeptieren | Prev | VIA | Schuetz | Lief |
| 5.24 | IS incident mgmt planning and preparation | Schnelle, wirksame, konsistente Vorfallreaktion | Incident-Management-Prozess etablieren; Rollen/Verantwortlichkeiten; Kategorisierung/Priorisierung; Meldeverfahren; kompetentes Personal | Korr | VIA | Reag Wied | Gov Ereignis |
| 5.25 | Assessment and decision on IS events | Wirksame Kategorisierung und Priorisierung von Ereignissen | Kategorisierungs-/Priorisierungsschema vereinbaren; Ereignisse bewerten und Entscheidung treffen; Ergebnisse detailliert dokumentieren | Det | VIA | Erk Reag | Ereignis |
| 5.26 | Response to IS incidents | Effiziente und wirksame Vorfallreaktion | Gemaess dokumentierter Verfahren reagieren; eindaemmen, Beweise sichern, eskalieren, protokollieren, kommunizieren, Root-Cause-Analyse | Korr | VIA | Reag Wied | Ereignis |
| 5.27 | Learning from IS incidents | Wahrscheinlichkeit/Auswirkungen kuenftiger Vorfaelle reduzieren | Verfahren zur Quantifizierung/Ueberwachung von Vorfalltypen; Erkenntnisse in Risikobewertung, Incident-Plan und Awareness einfliessen lassen | Prev | VIA | Ident Schuetz | Ereignis |
| 5.28 | Collection of evidence | Konsistentes Beweismanagement fuer disziplinarische/rechtliche Zwecke | Verfahren fuer Identifikation, Sammlung, Erfassung, Bewahrung von Beweisen; Unversehrtheit nachweisen; Jurisdiktionen beachten | Korr | VIA | Erk Reag | Ereignis |
| 5.29 | IS during disruption | IS bei Stoerungen aufrechterhalten | IS-Anforderungen in BCM-Prozesse einbinden; Plaene entwickeln, testen, pruefen; kompensierende Controls fuer nicht aufrechthaltbare Controls | Prev Korr | VIA | Schuetz Reag | Kont |
| 5.30 | ICT readiness for business continuity | Verfuegbarkeit von Information und Assets bei Stoerung | ICT-Kontinuitaet auf BIA basieren; RTO/RPO bestimmen; Strategien waehlen (vor/waehrend/nach Stoerung); Plaene regelmaessig testen | Korr | A | Reag | Kont |
| 5.31 | Legal, statutory, regulatory and contractual requirements | Compliance mit rechtlichen IS-Anforderungen | Rechtliche Anforderungen identifizieren, dokumentieren, aktuell halten; Kryptografie-Gesetzgebung beachten; Vertraege einbeziehen | Prev | VIA | Ident | Recht |
| 5.32 | Intellectual property rights | Compliance bei geistigem Eigentum | Verfahren zum Schutz von IP; nur Software aus vertrauenswuerdigen Quellen; Lizenz-Compliance; Nutzungsrichtlinie kommunizieren | Prev | VIA | Ident | Recht |
| 5.33 | Protection of records | Schutz vor Verlust, Faelschung, unautorisiertem Zugriff | Aufbewahrungsrichtlinien; Aufbewahrungsfristen definieren; Speichersysteme fuer zeitgerechten Abruf; kryptographische Schluessel mitarchivieren | Prev | VIA | Ident Schuetz | Recht Asset InfoSchutz |
| 5.34 | Privacy and protection of PII | Compliance bei Datenschutz und PII-Schutz | PII-Richtlinie erstellen/kommunizieren; Verfahren fuer PII-Schutz; Datenschutzbeauftragten benennen; technische und organisatorische Massnahmen | Prev | VIA | Ident Schuetz | InfoSchutz Recht |
| 5.35 | Independent review of IS | Eignung, Angemessenheit und Wirksamkeit des IS-Ansatzes | Regelmaessige unabhaengige Reviews planen; unabhaengige Personen mit Kompetenz; Ergebnisse an Management berichten; Korrekturmassnahmen | Prev Korr | VIA | Ident Schuetz | Assurance |
| 5.36 | Compliance with policies, rules and standards | IS gemaess Richtlinien implementiert und betrieben | Regelmaessig Compliance pruefen; bei Nichtkonformitaet Ursachen identifizieren, Korrektur umsetzen, Wirksamkeit pruefen; Ergebnisse dokumentieren | Prev | VIA | Ident Schuetz | Recht Assurance |
| 5.37 | Documented operating procedures | Korrekten und sicheren Betrieb sicherstellen | Betriebsverfahren fuer IS-relevante Aktivitaeten dokumentieren; Verantwortliche, Konfiguration, Backup, Fehlerbehandlung, Eskalation | Prev Korr | VIA | Schuetz Wied | Asset Phys SysNetz App SichKonf IAM TVuln Kont Ereignis |

## A.6 Personenbezogene Controls (8)

| # | Name | Zweck | Leitlinie | Typ | Eig | Konzept | Faehigkeit |
|---|---|---|---|---|---|---|---|
| 6.1 | Screening | Personal geeignet und vertrauenswuerdig fuer Rollen | Hintergrundpruefungen vor Einstellung und fortlaufend; verhaeltnismaessig zum Risiko; bei Verzoegerung kompensierende Controls | Prev | VIA | Schuetz | HR |
| 6.2 | Terms and conditions of employment | Personal versteht IS-Verantwortlichkeiten | Arbeitsvertraege muessen IS-Verantwortlichkeiten enthalten; NDA, Klassifizierung, Pflichten bei Verstoss; bei Aenderungen pruefen | Prev | VIA | Schuetz | HR |
| 6.3 | IS awareness, education and training | Personal ist sich IS-Verantwortlichkeiten bewusst und erfuellt sie | Awareness-Programm etablieren; regelmaessig und bei Neueintritt; Verstaendnis testen; rollenbasierte Schulung; technisches Training | Prev | VIA | Schuetz | HR |
| 6.4 | Disciplinary process | Konsequenzen bei IS-Richtlinienverstoessen sicherstellen | Formaler abgestufter Prozess; Schwere, Vorsatz, Wiederholung, Schulung beruecksichtigen; abschreckende Wirkung; rechtliche Anforderungen | Prev Korr | VIA | Schuetz Reag | HR |
| 6.5 | Responsibilities after termination or change | Org-Interessen bei Personalwechsel schuetzen | IS-Pflichten die nach Austritt weitergelten definieren; Vertraulichkeit, IP; Rollenwechsel = Beendigung + Neubeginn; Uebergabe | Prev | VIA | Schuetz | HR Asset |
| 6.6 | Confidentiality or non-disclosure agreements | Vertraulichkeit von zugaenglichen Informationen wahren | NDAs identifizieren, dokumentieren, regelmaessig pruefen, unterzeichnen lassen; Inhalt: Schutzgut, Dauer, Pflichten, Konsequenzen | Prev | V | Schuetz | HR InfoSchutz Lief |
| 6.7 | Remote working | IS bei Fernarbeit sicherstellen | Themenspezifische Richtlinie; physische Sicherheit, sichere Kommunikation, VPN, Endgeraeteschutz, Familienzugang, Backup, Audit | Prev | VIA | Schuetz | Asset InfoSchutz Phys SysNetz |
| 6.8 | IS event reporting | Zeitnahe, konsistente Meldung von IS-Ereignissen | Meldemechanismus bereitstellen (einfach, zugaenglich); Personal ueber Pflicht und Verfahren informieren; keine eigenstaendige Schwachstellentests | Det | VIA | Erk | Ereignis |

## A.7 Physische Controls (14)

| # | Name | Zweck | Leitlinie | Typ | Eig | Konzept | Faehigkeit |
|---|---|---|---|---|---|---|---|
| 7.1 | Physical security perimeters | Unautorisierten physischen Zugang verhindern | Sicherheitsperimeter definieren; physisch solide Gebaeude; Alarme an Brandschutztueren; keine Luecken im Perimeter | Prev | VIA | Schuetz | Phys |
| 7.2 | Physical entry | Nur autorisierten physischen Zugang ermoeglichen | Zugangskontrollen an Zugangspunkten; Besucherregistrierung; Lieferbereiche sichern; Schluesselmanagement; Badge-Pflicht | Prev | VIA | Schuetz | Phys IAM |
| 7.3 | Securing offices, rooms and facilities | Unautorisierten Zugang in Raeumen verhindern | Kritische Raeume nicht oeffentlich zugaenglich; keine sichtbaren Hinweise auf Datenverarbeitung; EM-Abschirmung wo noetig | Prev | VIA | Schuetz | Phys Asset |
| 7.4 | Physical security monitoring | Unautorisierten Zugang erkennen und abschrecken | Kontinuierliche Ueberwachung (CCTV, Alarmsysteme, Bewegungsmelder); Design vertraulich; Systeme vor unautorisiertem Zugriff schuetzen | Prev Det | VIA | Schuetz Erk | Phys |
| 7.5 | Protecting against physical and environmental threats | Folgen physischer/umweltbedingter Ereignisse verhindern/reduzieren | Risikoanalyse vor Standortbetrieb; Brandschutz, Wasserschutz, Blitzschutz, Ueberspannungsschutz; Standortwahl beachten | Prev | VIA | Schuetz | Phys |
| 7.6 | Working in secure areas | IS in Sicherheitsbereichen schuetzen | Need-to-know fuer Existenz sicherer Bereiche; keine unbeaufsichtigte Arbeit; Foto-/Aufnahmeverbot; leere Bereiche verschliessen/pruefen | Prev | VIA | Schuetz | Phys |
| 7.7 | Clear desk and clear screen | Risiko unautorisierten Zugangs auf Schreibtischen/Bildschirmen reduzieren | Richtlinie fuer Clean Desk/Screen; sensible Unterlagen einschliessen; Bildschirmsperre; Drucker-Authentifizierung; Whiteboards loeschen | Prev | V | Schuetz | Phys |
| 7.8 | Equipment siting and protection | Risiken durch physische/umweltbedingte Bedrohungen reduzieren | Geraete sicher positionieren; Sichtschutz; Schutz vor Diebstahl, Feuer, Wasser, Staub; Umgebungsbedingungen ueberwachen; Blitzschutz | Prev | VIA | Schuetz | Phys Asset |
| 7.9 | Security of assets off-premises | Verlust/Diebstahl/Kompromittierung von Off-Site-Assets verhindern | Nicht unbeaufsichtigt lassen; Herstelleranweisungen befolgen; Chain-of-Custody; Remote-Wipe; Sichtschutz in Oeffentlichkeit | Prev | VIA | Schuetz | Phys Asset |
| 7.10 | Storage media | Nur autorisierte Offenlegung/Aenderung/Entfernung/Zerstoerung | Lebenszyklus-Management (Erwerb, Nutzung, Transport, Entsorgung); Verschluesselung; sichere Wiederverwendung/Entsorgung; Protokollierung | Prev | VIA | Schuetz | Phys Asset |
| 7.11 | Supporting utilities | Unterbrechung durch Versorgungsausfaelle verhindern | Versorgungseinrichtungen gemaess Herstellerspezifikation; Kapazitaet regelmaessig pruefen; redundante Zufuehrungen; Notbeleuchtung | Prev Det | IA | Schuetz Erk | Phys |
| 7.12 | Cabling security | Verlust/Abhoeren/Beschaedigung von Kabeln verhindern | Kabel unterirdisch oder geschuetzt; Strom-/Datenkabel trennen; bei sensiblen Systemen: Panzerrohr, EM-Abschirmung, Glasfaser | Prev | VA | Schuetz | Phys |
| 7.13 | Equipment maintenance | Verlust/Beschaedigung durch fehlende Wartung verhindern | Gemaess Herstellerfrequenz warten; nur autorisiertes Personal; Wartungsprotokoll; Fernwartungszugang kontrollieren; Manipulationspruefung | Prev | VIA | Schuetz | Phys Asset |
| 7.14 | Secure disposal or re-use of equipment | Informationsleckage bei Entsorgung/Wiederverwendung verhindern | Speichermedien pruefen; sensible Daten physisch zerstoeren oder sicher ueberschreiben; Labels entfernen; Full-Disk-Encryption als Zusatzschutz | Prev | V | Schuetz | Phys Asset |

## A.8 Technologische Controls (34)

| # | Name | Zweck | Leitlinie | Typ | Eig | Konzept | Faehigkeit |
|---|---|---|---|---|---|---|---|
| 8.1 | User endpoint devices | Informationen auf Endgeraeten schuetzen | Themenspezifische Richtlinie; Registrierung, Verschluesselung, Malware-Schutz, Remote-Wipe; BYOD-Trennung; Benutzerverantwortung | Prev | VIA | Schuetz | Asset InfoSchutz |
| 8.2 | Privileged access rights | Nur autorisierte Nutzer erhalten privilegierten Zugang | Restriktiv zuweisen nach Autorisierungsprozess; zeitlich begrenzt (Break Glass); separate Admin-Identitaeten; regelmaessig pruefen; protokollieren | Prev | VIA | Schuetz | IAM |
| 8.3 | Information access restriction | Nur autorisierten Zugang zu Information ermoeglichen | Zugang gemaess Richtlinie einschraenken; kein anonymer Zugang zu sensiblen Daten; dynamische Zugangskontrolle fuer hochwertige Informationen | Prev | VIA | Schuetz | IAM |
| 8.4 | Access to source code | Unautorisierte Funktionalitaet und Aenderungen verhindern | Lese-/Schreibzugriff strikt kontrollieren; zentrale Quellcodeverwaltung; Aenderungen nur nach Autorisierung; Audit-Log | Prev | VIA | Schuetz | IAM App SichKonf |
| 8.5 | Secure authentication | Sichere Authentifizierung bei Systemzugang | Staerke passend zur Klassifizierung; MFA fuer kritische Systeme; Brute-Force-Schutz; Session-Timeout; Passwoerter nicht im Klartext uebertragen | Prev | VIA | Schuetz | IAM |
| 8.6 | Capacity management | Erforderliche Kapazitaet von IT-Ressourcen sicherstellen | Ressourcennutzung ueberwachen und anpassen; Stresstests; Prognosen fuer kuenftige Anforderungen; Cloud-Elastizitaet nutzen; Dokumentierter Plan | Prev Det | IA | Ident Schuetz Erk | Kont |
| 8.7 | Protection against malware | Information und Assets vor Malware schuetzen | Malware-Erkennung und -Reparatur; Allowlisting; Schwachstellen reduzieren; regelmaessige Scans; Defence-in-Depth; Awareness-Schulung; BC-Plaene | Prev Det Korr | VIA | Schuetz Erk | SysNetz InfoSchutz |
| 8.8 | Management of technical vulnerabilities | Ausnutzung technischer Schwachstellen verhindern | Asset-Inventar als Basis; Schwachstellen identifizieren (Scanning, Pentests); bewerten; zeitnah patchen; bei fehlendem Patch Workarounds anwenden | Prev | VIA | Ident Schuetz | TVuln |
| 8.9 | Configuration management | Korrekte Funktion mit erforderlichen Sicherheitseinstellungen | Standard-Templates fuer sichere Konfiguration; Default-Passwoerter aendern; unnoetige Dienste deaktivieren; Konfigurationen ueberwachen/protokollieren | Prev | VIA | Schuetz | SichKonf |
| 8.10 | Information deletion | Unnoetige Offenlegung sensibler Informationen verhindern | Loeschen wenn nicht mehr benoetigt; Loeschmethode gemaess Klassifizierung; Ergebnisse dokumentieren; Cloud-Loeschung pruefen; Dritte einbeziehen | Prev | V | Schuetz | InfoSchutz Recht |
| 8.11 | Data masking | Exposition sensibler Daten/PII begrenzen | Pseudonymisierung, Anonymisierung, Maskierung wo noetig; Wirksamkeit verifizieren; Staerke dem Nutzungszweck anpassen; Zugangskontrollen beachten | Prev | V | Schuetz | InfoSchutz |
| 8.12 | Data leakage prevention | Unautorisierte Offenlegung/Extraktion erkennen und verhindern | Schutzwuerdige Daten identifizieren/klassifizieren; Leakage-Kanaele ueberwachen (E-Mail, USB, Cloud); DLP-Tools einsetzen; Uploads einschraenken | Prev Det | V | Schuetz Erk | InfoSchutz |
| 8.13 | Information backup | Wiederherstellung nach Datenverlust ermoeglichen | Themenspezifische Richtlinie; RPO/RTO beruecksichtigen; Remote-Speicherung; Backup-Medien regelmaessig testen; Verschluesselung; Cloud-Backup pruefen | Korr | IA | Wied | Kont |
| 8.14 | Redundancy of information processing facilities | Kontinuierlichen Betrieb sicherstellen | Verfuegbarkeitsanforderungen bestimmen; Redundanz (Dual-ISP, gespiegelte RZ, redundante Hardware); Failover testen; gleiche Sicherheit wie Primaer | Prev | A | Schuetz | Kont Asset |
| 8.15 | Logging | Ereignisse aufzeichnen, Beweise generieren, Vorfaelle erkennen | Themenspezifische Logging-Richtlinie; Benutzer-/Systemereignisse protokollieren; Logs schuetzen (Integritaet, Zugang); Log-Analyse fuer Anomalien | Det | VIA | Erk | Ereignis |
| 8.16 | Monitoring activities | Anomales Verhalten erkennen und potenzielle Vorfaelle bewerten | Netzwerk/Systeme/Anwendungen ueberwachen; Baseline etablieren; Anomalien erkennen; Echtzeit-/periodisches Monitoring; Alerts konfigurieren | Det Korr | VIA | Erk Reag | Ereignis |
| 8.17 | Clock synchronization | Korrelation und Analyse sicherheitsrelevanter Ereignisse ermoeglichen | Systemuhren mit zugelassenen Zeitquellen synchronisieren (NTP/PTP); Referenzuhr aus atomarer/GPS-Quelle; Cloud-Zeitabweichungen ueberwachen | Det | I | Schuetz Erk | Ereignis |
| 8.18 | Use of privileged utility programs | Missbrauch von System-/Anwendungskontrollen verhindern | Nutzung einschraenken auf Minimum autorisierter Nutzer; Authentifizierung; unnoetige Utilities entfernen; zeitlich begrenzen; protokollieren | Prev | VIA | Schuetz | SysNetz SichKonf App |
| 8.19 | Installation of software on operational systems | Integritaet operativer Systeme sicherstellen | Nur durch geschulte Admins nach Autorisierung; nur genehmigte ausfuehrbare Dateien; umfassend testen; Rollback-Strategie; Audit-Log | Prev | VIA | Schuetz | SichKonf App |
| 8.20 | Networks security | Informationen in Netzwerken schuetzen | Netzwerk-Geraete sichern/verwalten; Dokumentation aktuell halten; Vertraulichkeit/Integritaet ueber oeffentliche Netze; Logging; virtualisierte Netzwerke | Prev Det | VIA | Schuetz Erk | SysNetz |
| 8.21 | Security of network services | Sicherheit bei Nutzung von Netzwerkdiensten | Sicherheitsmechanismen identifizieren/implementieren; SLAs mit Anbietern; Audit-Recht vereinbaren; Nutzungsregeln formulieren | Prev | VIA | Schuetz | SysNetz |
| 8.22 | Segregation of networks | Netzwerk in Sicherheitszonen aufteilen | Grosse Netzwerke in Domaenen (Trust-Level, Kritikalitaet); Gateway-Kontrolle (Firewall); physisch oder logisch trennen; WLAN als extern behandeln | Prev | VIA | Schuetz | SysNetz |
| 8.23 | Web filtering | Systeme vor Kompromittierung durch schaedliche Inhalte schuetzen | Zugang zu externen Websites verwalten; schaedliche/illegale Seiten blockieren; C2-Server blockieren; Schulung fuer sichere Webnutzung | Prev | VIA | Schuetz | SysNetz |
| 8.24 | Use of cryptography | Vertraulichkeit, Authentizitaet oder Integritaet kryptographisch schuetzen | Themenspezifische Richtlinie; Algorithmus/Staerke passend zur Klassifizierung; Schluesselmanagement (Erzeugung bis Zerstoerung); Rollen definieren | Prev | VIA | Schuetz | SichKonf |
| 8.25 | Secure development life cycle | IS in SDLC entwerfen und implementieren | Regeln fuer sichere Entwicklung; Umgebungstrennung (8.31); sichere Codierung (8.28); Security-Checkpoints; Pentests; sichere Repos; Lizenz-Compliance | Prev | VIA | Schuetz | App SysNetz |
| 8.26 | Application security requirements | Alle IS-Anforderungen bei Entwicklung/Beschaffung adressieren | Anforderungen per Risikobewertung bestimmen; Authentifizierung, Klassifizierung, Zugangsebenen, Resilienz, Input-Validierung, Kryptografie | Prev | VIA | Schuetz | App SysNetz |
| 8.27 | Secure system architecture and engineering principles | Systeme sicher entwerfen/implementieren/betreiben | Sichere Engineering-Prinzipien dokumentieren/anwenden; Security-by-Design, Defence-in-Depth, Zero-Trust; alle Architekturebenen; regelmaessig pruefen | Prev | VIA | Schuetz | App SysNetz |
| 8.28 | Secure coding | Schwachstellen im Softwarecode reduzieren | Org-weite Secure-Coding-Governance; Pair Programming, Code-Review; SAST; keine Hard-coded Passwords; externe Bibliotheken verwalten/aktualisieren | Prev | VIA | Schuetz | App SysNetz |
| 8.29 | Security testing in development and acceptance | IS-Anforderungen bei Deployment validieren | Security-Tests als integraler Bestandteil; Funktionstests, Konfiguration, Schwachstellenscan, Pentests; unabhaengige Abnahmetests; Test-Umgebung = Produktion-nah | Prev | VIA | Ident | App Assurance SysNetz |
| 8.30 | Outsourced development | IS-Massnahmen bei ausgelagerter Entwicklung | Anforderungen kommunizieren/vereinbaren; Lieferantenaktivitaeten ueberwachen; Lizenzen, IP, Bedrohungsmodell, Akzeptanztests, Escrow, Audit-Recht | Prev Det | VIA | Ident Schuetz Erk | SysNetz App Lief |
| 8.31 | Separation of dev, test and production environments | Produktionsumgebung vor Kompromittierung schuetzen | Dev/Test/Prod trennen (physisch/logisch); Deployment-Regeln; keine sensiblen Daten in Test-Umgebungen; keine ungepruefte Aenderung in Produktion | Prev | VIA | Schuetz | App SysNetz |
| 8.32 | Change management | IS bei Aenderungen bewahren | Formaler Prozess: Planung, Impact-Analyse, Genehmigung, Test, Implementierung, Rollback, Dokumentation; Betriebsverfahren aktualisieren | Prev | VIA | Schuetz | App SysNetz |
| 8.33 | Test information | Relevanz der Tests und Schutz operativer Daten | Testdaten sorgfaeltig auswaehlen; keine sensiblen Daten in Testumgebungen; Zugangskontrollen wie Produktion; Maskierung (8.11); nach Test loeschen | Prev | VI | Schuetz | InfoSchutz |
| 8.34 | Protection of IS during audit testing | Auswirkungen von Audit-Tests auf operative Systeme minimieren | Audit-Zugang mit Management vereinbaren; Scope kontrollieren; Read-Only bevorzugen; Geraete-Sicherheit pruefen; ausserhalb Geschaeftszeiten testen | Prev | VIA | Schuetz | SysNetz InfoSchutz |

## Abkuerzungen

| Kuerzel | Bedeutung |
|---|---|
| IS | Informationssicherheit |
| ISMS | Informationssicherheits-Managementsystem |
| PII | Personally Identifiable Information |
| BCM | Business Continuity Management |
| BIA | Business Impact Analysis |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| MFA | Multi-Factor Authentication |
| NDA | Non-Disclosure Agreement |
| SDLC | Secure Development Life Cycle |
| SAST | Static Application Security Testing |
| DLP | Data Leakage Prevention |
| SBOM | Software Bill of Materials |
| NTP | Network Time Protocol |
| VPN | Virtual Private Network |
| Prev | Preventive |
| Det | Detective |
| Korr | Corrective |
| V | Confidentiality |
| I | Integrity |
| A | Availability |
| Ident | Identify |
| Schuetz | Protect |
| Erk | Detect |
| Reag | Respond |
| Wied | Recover |
| Gov | Governance |
| Asset | Asset Management |
| InfoSchutz | Information Protection |
| HR | Human Resource Security |
| Phys | Physical Security |
| SysNetz | System and Network Security |
| App | Application Security |
| SichKonf | Secure Configuration |
| IAM | Identity and Access Management |
| TVuln | Threat and Vulnerability Management |
| Kont | Continuity |
| Lief | Supplier Relationships Security |
| Recht | Legal and Compliance |
| Ereignis | Information Security Event Management |
| Assurance | Information Security Assurance |

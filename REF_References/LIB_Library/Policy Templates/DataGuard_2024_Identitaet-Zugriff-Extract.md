# Handbuch zur Identitaets- und Zugriffssteuerung Extrakt

> Quelle: DataGuard Policy Template "DataGuard_2024_Identitaet-Zugriff.pdf", Version 0.91 (26.09.2024).
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: Deutsch. Extrakt: Deutsch.
> Template-Charakter: Enthaelt Platzhalter zur organisationsspezifischen Anpassung.
> Citation Key: DG24-IAM

## Dokumentenmetadaten

| Feld | Wert (Vorlage) |
|---|---|
| Version | 1.0 |
| Besitzer | Name eingeben |
| Genehmigt durch | Ausschuss zur Genehmigung der Richtlinie |
| Vertraulichkeitsstufe | INTERN |
| Review-Zyklus | Anzugeben |

## Nutzungshinweise zur Vorlage

Diese DataGuard-Vorlage ist als Ausgangspunkt gedacht. Organisationen muessen:

- Alle gelb hinterlegten Platzhalter `[Name der Organisation]`, `[Bitte beschreiben Sie...]` anpassen oder loeschen
- Inhalte vollstaendig verstehen und auf organisationsspezifische Gegebenheiten anpassen
- Keine Texte ungeprueft uebernehmen, die nicht den tatsaechlichen Anforderungen entsprechen
- Unklarheiten mit DataGuard-Experten, rechtlichen Beratern oder Fachexperten klaeren
- Grundsatz der Effektivitaet beachten: Richtlinien sollen erforderlich, angemessen, passend, aufklaerend und unterstuetzend sein
- Endgueltige Verantwortung liegt bei der obersten Leitung der Organisation

## 1 Einleitung

Dieses Handbuch zur Informationssicherheit in Identitaets- und Zugriffsteuerung bietet einen konsolidierten Rahmen fuer die effektive Verwaltung und Sicherung von Identitaeten und Zugriffsrechten innerhalb der Organisation. Es beschreibt detailliert, wie die Organisation verschiedene Sicherheitsherausforderungen im Zusammenhang mit dem Identitaets- und Zugriffsmanagement im gesamten Anwendungsbereich des ISMS angehen wird.

Dieses Dokument dient als uebergeordnetes Dokument, das den Ansatz der Organisation fuer das Identitaets- und Zugangsmanagement umreisst.

### 1.1 Zweck und Umfang

Zweck dieser Richtlinie ist es, einen strukturierten Ansatz fuer das Identitaets- und Zugriffsmanagement festzulegen, um die sensiblen Informationen, die Infrastruktur und den Ruf der Organisation zu schuetzen. Durch die Einhaltung dieser Richtlinie soll die Widerstandsfaehigkeit gegen unbefugten Zugriff erhoeht und das Risiko von Datenschutzverletzungen oder des Missbrauchs von Privilegien minimiert werden.

### 1.2 Anwendbarkeit

Diese Richtlinie gilt fuer alle Mitarbeiter und Beteiligten und stellt sicher, dass sie sich an die festgelegten Richtlinien fuer das Identitaets- und Zugangsmanagement halten. Das Informationssicherheitsteam hat in Zusammenarbeit mit den zustaendigen Abteilungen die Aufgabe, die Umsetzung, Pflege und kontinuierliche Verbesserung der in dieser Richtlinie beschriebenen Verfahren zu ueberwachen.

## 2 Identitaet und Authentifizierung

### 2.1 Identitaetsmanagement

#### Richtlinie

Der gesamte Lebenszyklus des Identitaetsmanagements muss die sichere Identifizierung von Personen und Systemen gewaehrleisten, die auf die Informationen des Unternehmens und andere damit verbundene Vermoegenwerte zugreifen.

#### Verfahren

Das Identitaetsmanagement der Organisation muss Folgendes sicherstellen:

**Individuelle Verantwortlichkeit:**
Jede einer Person zugewiesene Identitaet (Personalnummer, User-Name, E-Mail-Adresse, etc.) sollte fuer diese Person eindeutig sein, um sie fuer die unter dieser Identitaet durchgefuehrten Handlungen zur Rechenschaft ziehen zu koennen. Beispiele zur Erfuellung: Die gemeinsame Nutzung von Konten kann durch die Implementierung von Multi-Faktor-Authentifizierung (MFA), die an einzelne Geraete gebunden ist, reduziert werden.

**Gemeinsame Identitaeten:**
Identitaeten, die von mehreren Personen gemeinsam genutzt werden, sollten nur zugelassen werden, wenn dies aus geschaeftlichen oder betrieblichen Gruenden erforderlich ist, und muessen einer speziellen Genehmigung und Dokumentation unterliegen. Erfuellung: Genehmigungsverfahren durch den Asset-Eigentuemer.

**Nicht-menschliche Entitaeten:**
Identitaeten, die nicht-menschlichen Einheiten zugewiesen werden, sollten eine angemessen getrennte Genehmigung und eine unabhaengige laufende Aufsicht haben. Beispiel: Die Passwoerter fuer Dienste-Accounts sollten rotieren (oder automatisch verwaltet werden) und jaehrlich genehmigt werden.

**Rechtzeitige Beseitigung:**
Identitaeten sollten umgehend deaktiviert oder entfernt werden, wenn sie nicht mehr benoetigt werden (z.B. wenn die zugehoerigen Entitaeten geloescht oder nicht mehr verwendet werden oder wenn die mit einer Identitaet verbundene Person das Unternehmen verlassen oder die Rolle gewechselt hat). Wiederkehrende Ueberpruefungen muessen geplant werden. Die Loeschung von Identitaeten ist Teil des Offboardings und des Prozesses zum Wechsel von Verantwortlichkeiten.

**Einheitliche Identitaetszuordnung:**
Innerhalb eines bestimmten Bereichs sollte jede Identitaet einer einzigen Entitaet zugeordnet werden, um doppelte Identitaeten innerhalb desselben Kontexts zu vermeiden.

**Fuehrung von Aufzeichnungen:**
Fuehren Sie Aufzeichnungen ueber alle wichtigen Ereignisse bezueglich der Verwendung und Verwaltung von Benutzeridentitaeten und Authentifizierungsinformationen.

**Aenderungen von Identitaetsinformationen:**
Das Unternehmen sollte ein Verfahren fuer den Umgang mit Aenderungen von Informationen im Zusammenhang mit der Benutzeridentitaet einrichten. Dazu koennte die erneute Ueberpruefung von Ausweisdokumenten zu einer Person gehoeren.

**Drittanbieter-Identitaeten:**
Bei Identitaeten, die von Dritten zur Verfuegung gestellt oder ausgestellt werden (z.B. Anmeldeinformationen fuer soziale Medien), muss das Unternehmen sicherstellen, dass diese Drittanbieter-Identitaeten das erforderliche Vertrauensniveau bieten und die erforderliche Genehmigung besteht und dass alle damit verbundenen Risiken bekannt sind und angemessen behandelt werden. Dies kann sowohl Ueberpruefungen in Bezug auf die Anbieter, als auch Ueberpruefungen in Bezug auf die zugehoerigen Authentifizierungsinformationen umfassen.

### 2.2 Informationen zur Authentifizierung

#### Richtlinie

Die Organisation muss sicherstellen, dass alle folgenden Punkte innerhalb der Organisation beachtet werden:

1. Authentifizierungsinformationen sind ein wichtiger Aspekt der Informationssicherheit.
2. Fuer den Zugang zu sensiblen und vertraulichen Daten muessen die Nutzer starke Authentifizierungsmethoden wie die Zwei-Faktor- oder Multi-Faktor-Authentifizierung (MFA) verwenden.
3. Die Passwoerter muessen mindestens einmal jaehrlich oder bei Verdacht auf einen Sicherheitsvorfall geaendert werden.
4. Passwoerter koennen nicht wiederverwendet werden (z.B. Historie von mindestens 6 Passwoertern).
5. Passwoerter muessen mindestens 8 Zeichen lang sein, einschliesslich Zahlen, Gross- und Kleinschreibung und Sonderzeichen.
6. Haeufig verwendete Passwoerter oder mehr als 2 aufeinanderfolgende Zeichen sind nicht erlaubt.
7. Passwoerter koennen nicht in Textdateien gespeichert werden; sie duerfen nur im genehmigten Passwort-Tresor gespeichert werden.
8. Die Verschluesselung und das Hashing von Passwoertern sollte nach anerkannten kryptografischen Verfahren fuer Passwoerter in Anwendungen und Authentifizierungssystemen erfolgen.

> NOTE: Diese Beschreibung ist anzupassen, wenn strengere Passwortkriterien gelten oder andere Verfahren angewendet werden.

#### Verfahren

Das folgende Verfahren wird innerhalb der Organisation befolgt und fuer alle verbindlich gemacht.

**Passwort-Bereitstellung:**

a) Temporaere Passwoerter oder PINs duerfen nicht erraten werden, sind fuer jeden Benutzer eindeutig und werden nach der ersten Verwendung geaendert.

b) Es gibt Verfahren zur Ueberpruefung der Benutzeridentitaet, bevor neue, Ersatz- oder temporaere Authentifizierungsinformationen bereitgestellt werden.

**Alle Nutzer innerhalb der Organisation muessen jaehrlich an die folgenden Praktiken erinnert werden:**

a) Behandeln Sie geheime Authentifizierungsinformationen vertraulich und geben Sie keine persoenlichen geheimen Authentifizierungsinformationen weiter. Geheime Authentifizierungsinformationen, die mit mehreren Benutzern oder nicht-personenbezogenen Einheiten verknuepft sind, sollten nur an autorisierte Personen weitergegeben werden.

b) Aendern Sie betroffene oder kompromittierte Authentifizierungsinformationen sofort nach der Benachrichtigung oder dem Hinweis auf eine Kompromittierung.

c) Waehlen Sie sichere Passwoerter entsprechend den Empfehlungen fuer bewaehrte Verfahren.

d) Vermeiden Sie die Verwendung derselben Passwoerter fuer verschiedene Dienste und Systeme, bei denen kein Single Sign-On (SSO) verfuegbar ist.

> NOTE: Bearbeiten Sie die entsprechenden Richtlinien im Mitarbeiter-Sicherheitshandbuch, in der die Anforderungen fuer die Erstellung von Kennwoertern festgelegt sind (z.B. ist nur die Verwendung des Passwort-Management-Tools zulaessig).

### 2.3 Sichere Authentifizierung

#### Richtlinie

Die auf der Grundlage der Informationszugriffsbeschraenkungen und der themenspezifischen Richtlinie ueber die Staerke der Zugriffskontrolle ausgewaehlten Authentifizierungsmethoden muessen der Sensibilitaet der Informationen entsprechen, auf die zugegriffen wird. Fuer den Zugriff auf hochsensible Informationen muessen starke Authentifizierungsmethoden wie MFA, digitale Zertifikate, Smartcards, Token oder biometrische Mittel eingesetzt werden.

#### Verfahren

**Authentifizierungstechniken und -staerke:**
Waehlen Sie Authentifizierungsmethoden mit angemessener Authentifizierungsstaerke, wie z.B. Passwoerter, digitale Zertifikate, Smartcards, Token oder biometrische Verfahren, je nach Sensibilitaetsstufe.

**Multi-Faktor-Authentifizierung (MFA):**

a) Identifizieren Sie kritische Informationssysteme, die eine MFA benoetigen.

b) Implementieren Sie MFA-Loesungen, die mehrere Faktoren wie Passwoerter, biometrische Daten oder Token kombinieren.

c) Konfigurieren Sie die Systeme so, dass unter bestimmten Umstaenden zusaetzliche Authentifizierungsfaktoren abgefragt werden, falls erforderlich.

**Biometrische Authentifizierung** (loeschen, wenn nicht verwendet):

a) Bewerten Sie die Zuverlaessigkeit und die potenziellen Risiken der biometrischen Authentifizierung.

b) Einfuehrung biometrischer Authentifizierung neben alternativen Methoden.

c) Festlegung von Verfahren zur Ungueltigkeit-machung kompromittierter biometrischer Daten und Bereitstellung alternativer Authentifizierungsmittel.

**Sichere Log-On-Verfahren:**

a) Stellen Sie sicher, dass sensible Informationen erst nach erfolgreichem Abschluss der Anmeldung angezeigt werden.

b) Validieren Sie die Anmeldeinformationen erst, wenn alle erforderlichen Daten eingegeben wurden.

c) Implementieren Sie Massnahmen, um Brute-Force-Anmeldeversuche zu verhindern.

d) Konfigurieren Sie die Systeme so, dass sowohl erfolgreiche als auch erfolglose Anmeldeversuche protokolliert werden.

e) Richten Sie Warnmeldungen fuer potenzielle Anmeldeverletzungen und Sicherheitsereignisse ein.

f) Verschluesseln Sie Passwoerter bei der Eingabe und Uebertragung, um unbefugten Zugriff zu verhindern.

g) Automatische Beendigung inaktiver Sitzungen nach einem bestimmten Zeitraum.

h) Den Nutzern nach erfolgreicher Anmeldung Einzelheiten ueber fruehere Anmeldeversuche und Sitzungsaktivitaeten zur Verfuegung stellen.

**Compliance und Sicherheit:**

a) Durchfuehrung regelmaessiger Audits, um die Einhaltung der Authentifizierungsverfahren sicherzustellen.

b) Ueberpruefung, ob die Authentifizierungssicherheit den festgelegten Standards entspricht.

## 3 Physische und logische Zugangskontrolle

### 3.1 Zugangskontrolle

#### Richtlinie

Um sicherzustellen, dass der Zugang zu Informationen und anderen damit verbundenen Vermoegenwerten in der Organisation nur befugten Personen gewaehrt wird und um unbefugten Zugang zu verhindern, muessen die Asset-Eigentuemer die Klassifizierung der Informationsdaten und die relevanten Informationssicherheitsanforderungen in Bezug auf die Zugangskontrolle ermitteln.

#### Verfahren

Die Regeln fuer die Zugangskontrolle werden durch die Festlegung und Zuweisung der entsprechenden Zugangsrechte und -beschraenkungen in die Praxis umgesetzt. Um die Verwaltung der Zugangskontrolle zu vereinfachen, werden Gruppen von Einheiten spezifische Rollen zugewiesen.

**Definition und Implementierung von Zugangskontrollregeln:**

1. Sicherstellung der Konsistenz zwischen den Zugriffsrechten und der Informationsklassifizierung.
2. Richten Sie die Zugriffsrechte an den Sicherheitsbeduerfnissen und -anforderungen des physischen Perimeters aus.
3. Beruecksichtigen Sie alle Arten von Verbindungen in verteilten Umgebungen, um sicherzustellen, dass Einrichtungen nur Zugang zu autorisierten Informationen und zugehoerigen Ressourcen, einschliesslich Netzwerken und Netzwerkdiensten, haben.
4. Elemente oder Faktoren, die fuer die dynamische Zugangskontrolle relevant sind, angemessen widerspiegeln.

### 3.2 Zugangsrechte

#### Richtlinie

Zum Schutz der Vertraulichkeit, Integritaet und Verfuegbarkeit innerhalb der Organisation muss der Zugang zu den Informationen so verwaltet werden, dass die Geschaeftsinformationen geschuetzt werden.

Die den Nutzern gewaehrten Zugriffsrechte auf die Systeme und Ressourcen des Unternehmens muessen regelmaessig ueberprueft und widerrufen werden.

#### Verfahren

Die Organisation muss sicherstellen, dass das folgende Verfahren fuer die Zuweisung oder den Entzug von physischen und logischen Zugangsrechten eingehalten wird:

1. Einholung der Genehmigung des Asset-Eigentuemers vor der Gewaehrung von Zugriffsrechten.
2. Beruecksichtigung der geschaeftlichen Anforderungen sowie der Unternehmensrichtlinien und -regeln fuer die Zugangskontrolle.
3. Gewaehrleistung der Aufgabentrennung, einschliesslich der Trennung der Rollen fuer die Genehmigung und die Umsetzung der Zugangsrechte.
4. Entzug von Zugriffsrechten, wenn sie nicht mehr benoetigt werden, insbesondere fuer Benutzer, die das Unternehmen verlassen haben.
5. Gewaehrung von zeitlich begrenzten Zugriffsrechten fuer einen begrenzten Zeitraum und Entzug dieser Rechte zum Ablaufdatum.
6. Ueberpruefung, ob die gewaehrte Zugriffsstufe mit den Zugriffskontrollrichtlinien uebereinstimmt und mit anderen Informationssicherheitsanforderungen vereinbar ist.
7. Aktivierung der Zugriffsrechte erst nach erfolgreichem Abschluss der Autorisierungsverfahren.
8. Pflege einer zentralen Aufzeichnung der Zugriffsrechte, die einer Benutzerkennung fuer den Zugriff auf Assets gewaehrt werden.
9. Aenderung der Zugriffsrechte von Benutzern, die ihre Rolle oder ihren Arbeitsplatz gewechselt haben.
10. Entfernen oder Anpassen von physischen und logischen Zugriffsrechten, was durch Entfernen, Entziehen oder Ersetzen von Schluesseln, Authentifizierungsinformationen, Identifikationskarten oder Abonnements geschehen kann.
11. Aufzeichnung von Aenderungen an den Zugriffsrechten der Benutzer.

> NOTE: Pruefen und bestaetigen Sie, dass dieses Verfahren korrekt ist, und konkretisieren Sie es entsprechend Ihrer Organisation.

**Regelmaessige Ueberpruefung der physischen und logischen Zugangsrechte:**

1. Aenderungen der Zugriffsrechte von Nutzern nach einem Wechsel innerhalb des Unternehmens (z.B. Stellenwechsel, Befoerderung, Degradierung) oder nach Beendigung des Arbeitsverhaeltnisses.
2. Berechtigungen fuer privilegierte Zugriffsrechte.

**Aenderung oder Beendigung der Beschaeftigung:**

Die Zugriffsrechte eines Benutzers sollten vor jeder Aenderung oder Beendigung des Beschaeftigungsverhaeltnisses auf der Grundlage von Risikofaktoren bewertet werden, z.B.: Die Beendigung oder Aenderung wird vom Benutzer oder von der Geschaeftsleitung veranlasst, und der Grund fuer die Beendigung bestimmt die Dringlichkeit der Zugangsentfernung.

Der Zugang zu 3rd-Party- und Cloud-Ressourcen muss umgehend entfernt werden.

### 3.3 Privilegierte Zugriffsrechte

#### Richtlinie

Privilegierte Zugriffsrechte muessen auf kontrollierte Weise zugewiesen und verwaltet werden, um das Risiko des unbefugten Zugriffs und des Missbrauchs sensibler Informationen und Systeme zu mindern.

Privilegierte Benutzer koennen erhebliche Aenderungen an den Systemen und Daten eines Unternehmens vornehmen. Daher muss unbedingt sichergestellt werden, dass diese Konten vor unbefugter Nutzung geschuetzt sind. Wenn ein boeswilliger Akteur privilegierten Zugriff erlangt, kann er erheblichen Schaden anrichten, einschliesslich Datenverletzungen, Systemabschaltungen oder sogar die vollstaendige Uebernahme des Netzwerks.

Die Europaeische Datenschutzgrundverordnung (DSGVO) verlangt von Unternehmen, personenbezogene Daten zu schuetzen, was eine Begrenzung und Ueberwachung des privilegierten Zugriffs beinhaltet.

#### Verfahren

**Identifizierung von Benutzern, die privilegierten Zugriff benoetigen:**

1. Ueberpruefen Sie die Rollenstruktur und Zustaendigkeiten, um Benutzer zu ermitteln, die fuer bestimmte Systeme oder Prozesse privilegierten Zugang benoetigen.
2. Bestimmen Sie die funktionalen Rollen und Kompetenzen, die fuer Einzelpersonen erforderlich sind, um Aufgaben auszufuehren, die einen privilegierten Zugang erfordern.

**Genehmigungsverfahren:**

1. Ein Genehmigungsverfahren fuer die Gewaehrung von privilegierten Zugriffsrechten einleiten und die Genehmigung der zustaendigen Stelle sicherstellen.
2. Dokumentieren Sie das Genehmigungsverfahren, einschliesslich der Namen der Genehmigenden und der Gruende fuer die Gewaehrung von privilegiertem Zugang.

**Erteilung von privilegierten Zugriffsrechten:**

1. Zuteilung von privilegierten Zugriffsrechten an autorisierte Benutzer auf der Grundlage ihrer genehmigten Rollen und Verantwortlichkeiten.
2. Sicherstellung, dass privilegierte Zugriffsrechte ereignisbezogen und nach dem Grundsatz der geringsten Privilegierung gewaehrt werden.

**Bewusstsein der Benutzer:**

1. Informieren Sie die Benutzer ueber ihren privilegierten Zugriffsstatus und die mit dem Betrieb im privilegierten Modus verbundenen Verantwortlichkeiten.
2. Einfuehrung von Massnahmen, die visuell anzeigen, wenn Benutzer mit privilegiertem Zugang arbeiten.

**Anforderungen an die Authentifizierung:**

1. Einfuehrung verschaerfter Authentifizierungsmassnahmen fuer den privilegierten Zugang, einschliesslich einer erneuten Authentifizierung oder einer verstaerkten Authentifizierung, falls erforderlich.
2. Sicherstellen, dass sich die Benutzer angemessen authentifizieren, bevor sie privilegierte Aufgaben ausfuehren.

**Regelmaessige Bewertungen:**

1. Durchfuehrung regelmaessiger Ueberpruefungen, um festzustellen, ob die Benutzer weiterhin fuer privilegierte Zugangsrechte in Frage kommen.
2. Ueberpruefen Sie privilegierte Zugriffsrechte nach organisatorischen Aenderungen, wie z.B. Rollenwechsel oder Kuendigungen.

**Entmutigung von generischen IDs:**

1. Verbieten Sie die Verwendung allgemeiner Administrator-Benutzerkennungen wie "root", "Administrator", "cisco" oder "admin".
2. Schutz der Authentifizierungsinformationen fuer privilegierte Identitaeten, um unberechtigten Zugriff zu verhindern.

**Temporaerer privilegierter Zugriff:**

1. Gewaehrung eines zeitlich begrenzten privilegierten Zugriffs fuer bestimmte Aufgaben oder Aktivitaeten mit zeitlich begrenzten Rechten.
2. Verwenden Sie "Break-Glass"-Verfahren oder Technologien zur Verwaltung von Zugriffsrechten, um den voruebergehenden Zugang zu verwalten.
3. Verwenden Sie Passwort-Tresore und lange Passwoerter (15+ Zeichen, komplexe, nicht woerterbuch-artige Passwoerter).

**Protokollierung und Ueberwachung:**

1. Stellen Sie sicher, dass alle privilegierten Zugriffe auf Systeme zu Pruefungs- und Ueberwachungszwecken protokolliert werden.
2. Ueberwachen Sie privilegierte Zugriffsaktivitaeten auf Anomalien oder nicht autorisierte Aktionen.

**Identitaetsmanagement:**

1. Vermeiden Sie die gemeinsame Nutzung oder Verknuepfung privilegierter Zugriffsrechte durch mehrere Personen.
2. Weisen Sie Personen, die einen besonderen privilegierten Zugang benoetigen, separate Identitaeten zu.

**Nutzungsbeschraenkungen:**

Weisen Sie die Benutzer an, privilegierte Identitaeten nur fuer Verwaltungsaufgaben und nicht fuer Routinetaetigkeiten wie E-Mail oder Webbrowsing zu verwenden.

**Dokumentation:**

Dokumentieren Sie alle gewaehrten privilegierten Zugriffsrechte, einschliesslich der Identitaeten der Benutzer, der autorisierten Aufgaben und der Dauer des Zugriffs.

**Schulung und Sensibilisierung:**

a) Schulung der Benutzer ueber die ordnungsgemaesse Nutzung des privilegierten Zugangs und die Bedeutung der Aufrechterhaltung von Sicherheitskontrollen.

b) Regelmaessige Uebermittlung von Aktualisierungen und Erinnerungen bezueglich der Richtlinien und Verfahren fuer den privilegierten Zugang.

### 3.4 Zugang zum Quellcode

#### Richtlinie

Der Zugang zu Quellcode, Entwicklungswerkzeugen und Softwarebibliotheken muss kontrolliert werden, um die Einfuehrung nicht autorisierter Funktionen, unbeabsichtigte oder boeswillige Aenderungen zu verhindern und die Vertraulichkeit wertvollen geistigen Eigentums zu wahren.

#### Verfahren

**Zugriffsanfrage:**

1. Mitarbeiter, die Zugang zu Quellcode, Entwicklungswerkzeugen oder Softwarebibliotheken benoetigen, muessen ueber den dafuer vorgesehenen Kanal einen formellen Zugangsantrag stellen, in dem der Grund fuer den Zugang und die erforderliche Dauer angegeben sind.
2. Zugriffsantraege sollten von der zustaendigen Behoerde auf der Grundlage der Rolle, der Verantwortlichkeiten und der geschaeftlichen Anforderungen des Antragstellers genehmigt werden.

> NOTE: Pruefen und bestaetigen Sie, dass dieses Verfahren korrekt ist, und konkretisieren Sie es entsprechend Ihrer Organisation.

**Zugangsgewaehrung:**

1. Der Zugang zum Quellcode, zu Entwicklungswerkzeugen oder Softwarebibliotheken darf nur autorisierten Entwicklern durch den zustaendigen Administrator oder das Zugangskontrollteam gewaehrt werden.
2. Die Zugriffsberechtigungen werden nach dem Prinzip des geringsten Privilegs konfiguriert, so dass sichergestellt ist, dass Personen nur auf die Informationen zugreifen koennen, die sie zur Erfuellung ihrer Aufgaben benoetigen.

**Prozess des Aenderungsmanagements:**

1. Alle Aenderungen am Quellcode, an Entwicklungswerkzeugen oder Softwarebibliotheken muessen dem etablierten Aenderungsmanagement/DevOps-Prozess folgen.
2. Aenderungen sollten dokumentiert werden, wobei Einzelheiten wie der Grund fuer die Aenderung, die verantwortliche(n) Person(en), Ticketnummern, Projektcode und das Datum der Umsetzung anzugeben sind.
3. Die Genehmigung fuer Aenderungen sollte vor der Umsetzung von den entsprechenden Interessengruppen eingeholt werden.

**Ueberwachung und Protokollierung:**

1. Es sollte ein Audit-Protokoll gefuehrt werden, in dem alle Zugriffe und Aenderungen an Quellcode, Entwicklungswerkzeugen und Softwarebibliotheken festgehalten werden.
2. Das Audit-Protokoll sollte Details wie Benutzeridentitaeten, Zeitstempel, zugegriffene Ressourcen und durchgefuehrte Aktionen erfassen.
3. Die Zugriffsprotokolle sollten regelmaessig ueberwacht werden, um unbefugte Zugriffsversuche oder verdaechtige Aktivitaeten zu erkennen.

### 3.5 Beschraenkung des Informationszugangs

#### Richtlinie

Um sicherzustellen, dass der Zugang zu sensiblen Informationen eingeschraenkt wird, muss nur der rechtmaessige Zugang ausdruecklich erlaubt werden, um den unbefugten Zugang zu sensiblen Informationen und Werten zu verhindern.

#### Verfahren

**Identitaetsbasierte Zugangskontrollen:**

1. Zuweisung eindeutiger Benutzeridentitaeten oder Rollen an Einzelpersonen oder Gruppen auf der Grundlage ihrer funktionalen Aufgaben und Zustaendigkeiten.
2. Definieren Sie die den Funktionsgruppen zugeordneten Zugangsbereiche.
3. Integration der Bereitstellung und Aufhebung von physischen Zugangskontrollen in den Prozess der An- und Abmeldung von Mitarbeitern und Aenderungen.

**Physische und logische Zugangskontrollen:**

1. Fuehren Sie physische Zugangskontrollen ein, wie z.B. biometrische Authentifizierung, Zugangskarten oder Schluesselschloesser, um den physischen Zugang zu sensiblen Guetern und Einrichtungen zu beschraenken.
2. Einsatz von logischen Zugangskontrollen, einschliesslich Firewalls, Systemen zur Erkennung von Eindringlingen und Verschluesselungsprotokollen, um in digitalen Systemen und Netzwerken gespeicherte Informationen zu schuetzen.
3. Gewaehrleistung der Aufgabentrennung und der Trennung von Privilegien zur Verhinderung des unbefugten Zugriffs oder Missbrauchs von Informationsbestaenden.

**Dokumentation und Berichterstattung:**

1. Detaillierte Aufzeichnungen ueber Zugriffsberechtigungsentscheidungen, Zugriffskontrollkonfigurationen und Pruefungsergebnisse zu fuehren.
2. Erstellung regelmaessiger Berichte ueber Zugangskontrollaktivitaeten, einschliesslich Zugangsanfragen, Genehmigungen, Aenderungen und Vorfaelle.
3. Dokumentieren Sie alle Aenderungen oder Aktualisierungen von Zugriffskontrollrichtlinien, -verfahren oder -konfigurationen fuer zukuenftige Referenz- und Compliance-Zwecke.

## 4 Norm-Referenzen

### 4.1 Normreferenzen zu ISO 27001:2022

| Kapitel in diesem Dokument | Normkapitel (ISO 27001:2022) |
|---|---|
| 1 Einleitung | — |
| 2 Identitaet und Authentifizierung | — |
| 2.1 Identitaetsmanagement | A 5.16 |
| 2.2 Informationen zur Authentifizierung | A 5.17; A 8.1 |
| 2.3 Sichere Authentifizierung | A 8.5 |
| 3 Physische und logische Zugangskontrolle | — |
| 3.1 Zugangskontrolle | A 5.15 |
| 3.2 Zugangsrechte | A 5.18 |
| 3.3 Privilegierte Zugriffsrechte | A 8.2 |
| 3.4 Zugang zu Quellcode | A 8.4 |
| 3.5 Beschraenkung des Informationszugangs | A 8.3 |

### 4.2 Referenzen zu TISAX-ISA 6.0

| Kapitel in diesem Dokument | Normkapitel (ISA-TISAX 6.0) |
|---|---|
| 1 Einleitung | — |
| 2 Identitaet und Authentifizierung | — |
| 2.1 Identitaetsmanagement | 4.1.1 |
| 2.2 Informationen zur Authentifizierung | 4.1.3; 4.2.1 |
| 2.3 Sichere Authentifizierung | 4.1.2 |
| 3 Physische und logische Zugangskontrolle | — |
| 3.1 Zugangskontrolle | 3.1.1; 4.1.2 |
| 3.2 Zugangsrechte | 4.1.1; 4.1.3; 4.2.1 |
| 3.3 Privilegierte Zugriffsrechte | 4.2.1 |
| 3.4 Zugang zu Quellcode | 5.3.1 |
| 3.5 Beschraenkung des Informationszugangs | 4.1.3; 5.3.1 |

## Abkuerzungen

| Abkuerzung | Bedeutung |
|---|---|
| DSGVO | Datenschutz-Grundverordnung |
| ISMS | Information Security Management System (Informationssicherheits-Managementsystem) |
| MFA | Multi-Faktor-Authentifizierung |
| PIN | Personal Identification Number |
| SSO | Single Sign-On |
| TISAX | Trusted Information Security Assessment Exchange |

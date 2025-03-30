# Datenbanken

## TOC
- [Datenbanken](#datenbanken)
  - [TOC](#toc)
  - [Grundlagen](#grundlagen)
    - [Definition](#definition)
    - [Kernkomponenten](#kernkomponenten)
  - [Datenbankmodelle](#datenbankmodelle)
    - [Relationale Datenbanken (SQL)](#relationale-datenbanken-sql)
    - [NoSQL-Datenbanken](#nosql-datenbanken)
- [ER-Modelle](#er-modelle)
- [Primärschlüssel / Fremdschlüssel](#primärschlüssel--fremdschlüssel)
  - [Datenbanksysteme im Vergleich](#datenbanksysteme-im-vergleich)
    - [Open Source](#open-source)
    - [Kommerzielle Systeme](#kommerzielle-systeme)
  - [Auswahlkriterien](#auswahlkriterien)
  - [Aktuelle Trends](#aktuelle-trends)


## Grundlagen

### Definition
- Systematische Sammlung von Daten
- Elektronische Verwaltung großer Datenmengen
- Ermöglicht effizientes Speichern, Aktualisieren und Abfragen

### Kernkomponenten
- **DBMS** (Datenbankmanagementsystem)
- **Tabellen** mit Zeilen (Datensätze) und Spalten (Attribute)
- **Indizes** für schnellen Zugriff
- **Abfragesprachen** (SQL, NoSQL)

---

## Datenbankmodelle

### Relationale Datenbanken (SQL)
**Merkmale**:
- Tabellenbasierte Struktur
- Strikte Schema-Definition
- ACID-konform (Atomicity, Consistency, Isolation, Durability)

**Vorteile**:
- Datenintegrität
- Komplexe Abfragen möglich
- Standardisierte Sprache (SQL)

> **Einsatzbeispiele**:  
> Finanzsysteme, Lagerverwaltung, CRM

### NoSQL-Datenbanken
**Typen**:
1. **Dokumentenorientiert** (MongoDB)
   - JSON-ähnliche Dokumente
   - Schema-flexibel

2. **Key-Value** (Redis)
   - Einfache Schlüssel-Wert-Paare
   - Hohe Performance

3. **Spaltenorientiert** (Cassandra)
   - Optimiert für Analytics
   - Gute Skalierbarkeit

4. **Graphdatenbanken** (Neo4j)
   - Beziehungsorientiert
   - Ideal für Netzwerkanalysen

**Vorteile**:
- Flexible Datenmodelle
- Horizontale Skalierung
- Hohe Verfügbarkeit

> **Typische Anwendungen**:  
> Big Data, Echtzeit-Analysen, Content-Management

---
TODO:
# ER-Modelle

# Primärschlüssel / Fremdschlüssel

## Datenbanksysteme im Vergleich

### Open Source
| System | Typ | Besonderheit |
|--------|-----|-------------|
| PostgreSQL | Relational | Erweiterbar, JSON-Unterstützung |
| MySQL | Relational | Sehr verbreitet |
| MongoDB | Dokumentenorientiert | Flexible Schemata |
| Redis | Key-Value | In-Memory, extrem schnell |

### Kommerzielle Systeme
| System | Hersteller | Zielgruppe |
|--------|-----------|------------|
| Oracle DB | Oracle | Enterprise |
| SQL Server | Microsoft | Windows-Umgebungen |
| Db2 | IBM | Großunternehmen |

---

## Auswahlkriterien

1. **Datenstruktur**
   - Tabellarisch → SQL
   - Komplex/hierarchisch → NoSQL

2. **Skalierungsbedarf**
   - Vertikal (SQL)
   - Horizontal (NoSQL)

3. **Konsistenzanforderungen**
   - Starke Konsistenz → ACID
   - Eventual Consistency → BASE

4. **Performance-Anforderungen**
   - Leseintensiv → Spaltenorientiert
   - Schreibintensiv → Key-Value

5. **Budget**
   - Open Source vs. Lizenzkosten

---

## Aktuelle Trends

- **Cloud-Datenbanken**: AWS Aurora, Google Cloud Spanner
- **Multi-Model-Datenbanken**: Kombination verschiedener Modelle
- **Edge Computing**: Dezentrale Datenhaltung
- **Vector Databases**: Für KI/ML-Anwendungen

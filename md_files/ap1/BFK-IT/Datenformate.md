
# Datenformate

## TOC
- [Datenformate](#datenformate)
  - [TOC](#toc)
  - [CSV (Comma-Separated Values)](#csv-comma-separated-values)
    - [Eigenschaften](#eigenschaften)
    - [Vor-/Nachteile](#vor-nachteile)
  - [JSON (JavaScript Object Notation)\\](#json-javascript-object-notation)
    - [Eigenschaften](#eigenschaften-1)
    - [Vor-/Nachteile](#vor-nachteile-1)
  - [XML (Extensible Markup Language)](#xml-extensible-markup-language)
    - [Eigenschaften](#eigenschaften-2)
    - [Vor-/Nachteile](#vor-nachteile-2)
  - [Vergleichstabelle](#vergleichstabelle)
    - [Einsatzempfehlungen](#einsatzempfehlungen)


## CSV (Comma-Separated Values)
```csv
id,name,age,city
1,Max Müller,28,Berlin
2,Anna Schmidt,34,München
```
### Eigenschaften

-  Struktur: Tabellarisch/flach

- Syntax:\
  - Zeilen = Datensätze\
  - Spalten durch Trennzeichen (meist , oder ;) getrennt\
  - Erste Zeile oft Header

- Datentypen: Nur Strings (keine native Typisierung)

- Besonderheiten:

    - Keine Hierarchien möglich

    - Escape-Regeln für Sonderzeichen

### Vor-/Nachteile

✅ Extrem kompakt\
✅ Universell unterstützt\
✅ Einfach zu generieren/parsen\
❌ Keine komplexen Strukturen\
❌ Keine Metadaten/Schemadefinition\


## JSON (JavaScript Object Notation)\
```json
{
  "employees": [
    {
      "id": 1,
      "name": "Max Müller",
      "department": {
        "id": "IT",
        "floor": 5
      }
    }
  ]
}
```
### Eigenschaften

- Struktur: Hierarchisch (Schlüssel-Wert-Paare)

- Syntax:

    - {} für Objekte

    - [] für Arrays

    - Datentypen: String, Number, Boolean, Array, Object, null

- Besonderheiten:

    - Standardformat für Web-APIs

    - Unterstützt verschachtelte Strukturen

### Vor-/Nachteile

✅ Menschenlesbar\
✅ Kompakte Syntax\
✅ Exzellente Browser-Unterstützung\
❌ Keine Kommentare\
❌ Keine Schema-Validierung (ohne JSON Schema)\


## XML (Extensible Markup Language)
```xml
<employees>
  <employee id="1">
    <name>Max Müller</name>
    <department id="IT">
      <floor>5</floor>
    </department>
  </employee>
</employees>
```

### Eigenschaften

- Struktur: Hierarchisch (Baumstruktur)

- Syntax:

    - Tags mit < >

    - Attribute für Metadaten

    - Selbstbeschreibend

- Besonderheiten:

    - Schema-Definition via DTD/XSD

    - Unterstützt Kommentare (<!-- -->)

    - Namespaces für Modularisierung

### Vor-/Nachteile

✅ Extrem flexibel\
✅ Schema-Validierung möglich\
✅ Standard in Enterprise-Umgebungen\
❌ Hoher Overhead\
❌ Komplexer zu parsen\

## Vergleichstabelle
| Feature | CSV	| JSON | XML|
|-|-|-|-|
|Struktur | flach | hierarchisch | hierarchisch
Dateigröße | sehr klein | kompakt | groß
Browser-Support | gering | exzellent | gut
Schema-Validierung | nein | optional | ja
Metadaten | nein | begrenzt | ja
Query-Sprachen | - | JSONPath | XPath/XQuery

### Einsatzempfehlungen

- CSV: Tabellarische Datenexporte, einfache Datensätze

- JSON: Web-APIs, Konfigurationen, NoSQL-Datenbanken

- XML: Enterprise-Systeme, dokumentenorientierte Daten, wenn Validierung benötigt wird
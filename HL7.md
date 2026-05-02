---
title: HL7
permalink: /hl7
---

## HL7

* [Caristix HL7 V2 Reference](https://hl7-definition.caristix.com/v2/)
* [HAPI FHIR](https://hapifhir.io)
* [HL7 International](www.hl7.org/)
* [HL7 FHIR](https://hl7.org/fhir/)

### Escape Sequences

| Sequence | Replacement | &nbsp;                                          |
| :------: | :---------: | :---------------------------------------------- |
|   \F\    |     \|      | Field Separator (MSH-1)                         |
|   \S\    |      ^      | Subfield Separator [MSH-2](0)                   |
|   \R\    |      ~      | Repetition Separator [MSH-2](1)                 |
|   \E\    |      \      | Escape Character [MSH-2](2)                     |
|   \T\    |      &      | Subcomponent Separator [MSH-2](3)               |
|  \\.br\  |     \n      | Carriage Return (nonstandard?)                  |
|  \X0D\   |     \n      | Carriage Return (Using \x##\ + Hex Character #) |
|  \X0A\   |     \r      | Line Feed (Using \x##\ + Hex Character #)       |

## Mirth Connect

* [Mirth Connect Releases](https://github.com/nextgenhealthcare/connect/releases)
* [Mirth Connect User Guide PDF](https://downloads.mirthcorp.com/connect-user-guide/latest/mirth-connect-user-guide.pdf)
* [Mirth Connect User Guide PDF](https://docs.nextgen.com/en-US/mirth%C2%AE-connect-by-nextgen-healthcare-user-guide-3231169)
* [Mirth Connect Administrator Launcher Downloads](https://mirthdownloadarchive.s3.amazonaws.com/mcal-downloads.html)
* [Rhino](https://rhino.github.io/) (the JS engine that Mirth Connect uses.)

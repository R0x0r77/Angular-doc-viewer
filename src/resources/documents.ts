export class Documents {
  private documents = [
      // { id: 21, url: 'Pan Dokument' , title: 'Dokument 1 - przykładowy.docx'},
      // { id: 22, url: 'Pan Dokument' , title: 'Dokument 2 - przykładowy copy.docx'},
      // { id: 23, url: 'Pan Dokument' , title: 'Tytół dokumentu nieco dłuższy od innych, bo tak trzeba oto ogarnąć i alignemnts sprawdzić - przykładowy copy 2.docx'},
      { id: 24, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001495/O/D20191495.pdf' , title: 'Ustawa z dnia 31 lipca 2019 r. o zmianie niektórych ustaw w celu ograniczenia obciążeń regulacyjnych'},
      { id: 25, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001490/O/D20191490.pdf' , title: 'Ustawa z dnia 4 lipca 2019 r. o zmianie ustawy o zawodach pielęgniarki i położnej'},
      { id: 26, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001481/O/D20191481.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lipca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o systemie oświaty'},
      { id: 27, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001480/O/D20191480.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 11 czerwca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o języku polskim'},
      { id: 28, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001475/O/D20191475.pdf' , title: 'Rozporządzenie Ministra Obrony Narodowej z dnia 25 lipca 2019 r. zmieniające rozporządzenie w sprawie służby wojskowej kandydatów na żołnierzy zawodowych'},      
      { id: 29, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001473/O/D20191473.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 11 czerwca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o cmentarzach i chowaniu zmarłych'},
      { id: 30, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001472/O/D20191472.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lipca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o repatriacji'},
      { id: 31, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001469/O/D20191469.pdf' , title: 'Ustawa z dnia 4 lipca 2019 r. o zmianie ustawy - Kodeks postępowania cywilnego oraz niektórych innych ustaw'},
      { id: 32, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001466/O/D20191466.pdf' , title: 'Ustawa z dnia 13 czerwca 2019 r. o zmianie ustawy - Prawo o ruchu drogowym oraz ustawy o transporcie drogowym'},
      { id: 33, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001465/O/D20191465.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lipca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o Narodowym Planie Rozwoju'},
      { id: 34, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001438/O/D20191438.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 14 czerwca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o postępowaniu egzekucyjnym w administracji'},
      { id: 35, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001435/O/D20191435.pdf' , title: 'Ustawa z dnia 4 lipca 2019 r. o zmianie ustawy - Prawo energetyczne'},
      { id: 36, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001432/O/D20191432.pdf' , title: 'Rozporządzenie Ministra Finansów z dnia 31 lipca 2019 r. w sprawie certyfikatu weryfikacji dostawy'},
      { id: 37, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001430/O/D20191430.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lipca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o organizacji rynku mleka i przetworów mlecznych'},
      { id: 38, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001430/O/D20191430.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lipca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o organizacji rynku mleka i przetworów mlecznych'},
      { id: 39, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001427/O/D20191427.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 28 czerwca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o Służbie Więziennej'},
      { id: 40, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001424/O/D20191424.pdf' , title: 'Rozporządzenie Ministra Gospodarki Morskiej i Żeglugi Śródlądowej z dnia 12 lipca 2019 r. w sprawie granicy portu morskiego w Kamieniu Pomorskim'},
      { id: 41, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001419/O/D20191419.pdf' , title: 'Obwieszczenie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 14 czerwca 2019 r. w sprawie ogłoszenia jednolitego tekstu ustawy o izbach aptekarskich'},
      { id: 42, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001418/O/D20191418.pdf' , title: 'Rozporządzenie Ministra Finansów z dnia 29 lipca 2019 r. zmieniające rozporządzenie w sprawie zgłoszeń przewozu towarów'},
      { id: 43, url: 'http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20190001416/O/D20191416.pdf' , title: 'Rozporządzenie Rady Ministrów z dnia 26 lipca 2019 r. w sprawie ustalenia granic niektórych gmin i miast oraz nadania niektórym miejscowościom statusu miasta'},
      // { id: 44, url: '' , title: ''},
      // { id: 45, url: '' , title: ''},
      // { id: 46, url: '' , title: ''},
      // { id: 47, url: '' , title: ''},
      // { id: 48, url: '' , title: ''},
      // { id: 49, url: '' , title: ''},
      // { id: 50, url: '' , title: ''},
      // { id: 51, url: '' , title: ''},
      // { id: 52, url: '' , title: ''},
      // { id: 53, url: '' , title: ''},
      // { id: 54, url: '' , title: ''},
      // { id: 55, url: '' , title: ''},
      
    ];

  public getDocuments() {
    return this.documents;
  }
}
/**
 *
Tu zacznij
Panel
Newsletter
Twórczość
  Podcasty
  Dingsy
  Przydatne Programy Przedsiębiorcy
  Bierzcie i korzystajcie
  Przydatne Książki Przedsiębiorcy
  Prawo po ludzkiemu
Sklep
  Pakiet RODO dla małej firmy
  Regulamin strony, sklepu internetowego i newslettera
  Gotowe wzory umów dla małej firmy
Co mamy za free?
  Polityka prywatności strony internetowej, małej firmy, freelancera lub bloga | Pobierz darmowy wzór zgodny z RODO
  Strefa Sardynek
  Kalkulatory
    Kalkulator VAT
    Kalkulator wyceny usług i stawki godzinowej
    Kalkulator podatkowy dla jednoosobowej działalności gospodarczej 2024
  Fiszkursy
    O co chodzi w tych wszystkich regulaminach i politykach prywatności?
    Ochrona danych osobowych, czyli o co chodzi w tym całym RODO?
O blogu
Kontakt

 */

export default [
  {
    label: "Tu zacznij",
    url: "/tu-zacznij",
  },
  {
    label: "Panel",
    url: "https://panel.sardynkibiznesu.pl",
    target: "_blank",
    isExternal: true,
  },
  {
    label: "Newsletter",
    url: "/zapis-na-newsletter",
  },
  {
    label: "Twórczość",
    url: "#",
    children: [
      {
        label: "Podcasty",
        url: "/kategorie/podcasty",
      },
      {
        label: "Dingsy",
        url: "/kategorie/dingsy",
      },
      {
        label: "Przydatne Programy Przedsiębiorcy",
        url: "/kategorie/przydatne-programy-przedsiebiorcy",
      },
      {
        label: "Bierzcie i korzystajcie",
        url: "/kategorie/przydatne-materialy",
      },
      {
        label: "Przydatne Książki Przedsiębiorcy",
        url: "/kategorie/przydatne-ksiazki-przedsiebiorcy",
      },
      {
        label: "Prawo po ludzkiemu",
        url: "/kategorie/prawo",
      },
    ],
  },
  {
    label: "Sklep",
    url: "#",
    children: [
      {
        label: "Pakiet RODO dla małej firmy",
        url: "#",
      },
      {
        label: "Regulamin strony, sklepu internetowego i newslettera",
        url: "#",
      },
      {
        label: "Gotowe wzory umów dla małej firmy",
        url: "#",
      },
    ],
  },
  {
    label: "Co mamy za free?",
    url: "#",
    children: [
      {
        label:
          "Polityka prywatności strony internetowej, małej firmy, freelancera lub bloga | Pobierz darmowy wzór zgodny z RODO",
        url: "#",
        target: "_blank",
      },
      {
        label: "Strefa Sardynek",
        url: "#",
      },
      {
        label: "Kalkulatory",
        url: "#",
        children: [
          {
            label: "Kalkulator VAT",
            url: "#",
          },
          {
            label: "Kalkulator wyceny usług i stawki godzinowej",
            url: "#",
          },
          {
            label:
              "Kalkulator podatkowy dla jednoosobowej działalności gospodarczej 2024",
            url: "#",
          },
        ],
      },
      {
        label: "Fiszkursy",
        url: "#",
        children: [
          {
            label:
              "O co chodzi w tych wszystkich regulaminach i politykach prywatności?",
            url: "#",
          },
          {
            label:
              "Ochrona danych osobowych, czyli o co chodzi w tym całym RODO?",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    label: "O blogu",
    url: "/blogu",
  },
  {
    label: "Kontakt",
    url: "/kontakt",
  },
];

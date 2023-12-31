const App = {
    components: {
        SearchBar: Searchbar,
        FlagCards: Flagcards
    },
    data() {
        return {
            countries: [
                {
                    "id": 1,
                    "title": "Afghanistan",
                    "image": "images/Afghanistan.png",
                    "description": ""
                },
                {
                    "id": 2,
                    "title": "Albania",
                    "image": "images/Albania.png",
                    "description": ""
                },
                {
                    "id": 3,
                    "title": "Algeria",
                    "image": "images/Algeria.png",
                    "description": ""
                },
                {
                    "id": 4,
                    "title": "Andorra",
                    "image": "images/Andorra.png",
                    "description": ""
                },
                {
                    "id": 5,
                    "title": "Angola",
                    "image": "images/Angola.png",
                    "description": ""
                },
                {
                    "id": 6,
                    "title": "Antigua and Barbuda",
                    "image": "images/Antigua-and-Barbuda.png",
                    "description": ""
                },
                {
                    "id": 7,
                    "title": "Argentina",
                    "image": "images/Argentina.png",
                    "description": ""
                },
                {
                    "id": 8,
                    "title": "Armenia",
                    "image": "images/Armenia.png",
                    "description": ""
                },
                {
                    "id": 9,
                    "title": "Australia",
                    "image": "images/Australia.png",
                    "description": ""
                },
                {
                    "id": 10,
                    "title": "Austria",
                    "image": "images/Austria.png",
                    "description": ""
                },
                {
                    "id": 11,
                    "title": "Azerbaijan",
                    "image": "images/Azerbaijan.png",
                    "description": ""
                },
                {
                    "id": 12,
                    "title": "Bahamas",
                    "image": "images/Bahamas.png",
                    "description": ""
                },
                {
                    "id": 13,
                    "title": "Bahrain",
                    "image": "images/Bahrain.png",
                    "description": ""
                },
                {
                    "id": 14,
                    "title": "Bangladesh",
                    "image": "images/Bangladesh.png",
                    "description": ""
                },
                {
                    "id": 15,
                    "title": "Barbados",
                    "image": "images/Barbados.png",
                    "description": ""
                },
                {
                    "id": 16,
                    "title": "Belarus",
                    "image": "images/Belarus.png",
                    "description": ""
                },
                {
                    "id": 17,
                    "title": "Belgium",
                    "image": "images/Belgium.png",
                    "description": ""
                },
                {
                    "id": 18,
                    "title": "Belize",
                    "image": "images/Belize.png",
                    "description": ""
                },
                {
                    "id": 19,
                    "title": "Benin",
                    "image": "images/Benin.png",
                    "description": ""
                },
                {
                    "id": 20,
                    "title": "Bhutan",
                    "image": "images/Bhutan.png",
                    "description": ""
                },
                {
                    "id": 21,
                    "title": "Bolivia",
                    "image": "images/Bolivia.png",
                    "description": ""
                },
                {
                    "id": 22,
                    "title": "Bosnia and Herzegovina",
                    "image": "images/Bosnia-and-Herzegovina.png",
                    "description": ""
                },
                {
                    "id": 23,
                    "title": "Botswana",
                    "image": "images/Botswana.png",
                    "description": ""
                },
                {
                    "id": 24,
                    "title": "Brazil",
                    "image": "images/Brazil.png",
                    "description": ""
                },
                {
                    "id": 25,
                    "title": "Brunei",
                    "image": "images/Brunei.png",
                    "description": ""
                },
                {
                    "id": 26,
                    "title": "Bulgaria",
                    "image": "images/Bulgaria.png",
                    "description": ""
                },
                {
                    "id": 27,
                    "title": "Burkina Faso",
                    "image": "images/Burkina-Faso.png",
                    "description": ""
                },
                {
                    "id": 28,
                    "title": "Burundi",
                    "image": "images/Burundi.png",
                    "description": ""
                },
                {
                    "id": 29,
                    "title": "Cabo Verde",
                    "image": "images/Cabo-Verde.png",
                    "description": ""
                },
                {
                    "id": 30,
                    "title": "Cambodia",
                    "image": "images/Cambodia.png",
                    "description": ""
                },
                {
                    "id": 31,
                    "title": "Cameroon",
                    "image": "images/Cameroon.png",
                    "description": ""
                },
                {
                    "id": 32,
                    "title": "Canada",
                    "image": "images/Canada.png",
                    "description": ""
                },
                {
                    "id": 33,
                    "title": "Central African Republic",
                    "image": "images/Central-African-Republic.png",
                    "description": ""
                },
                {
                    "id": 34,
                    "title": "Chad",
                    "image": "images/Chad.png",
                    "description": ""
                },
                {
                    "id": 35,
                    "title": "Chile",
                    "image": "images/Chile.png",
                    "description": ""
                },
                {
                    "id": 36,
                    "title": "China",
                    "image": "images/China.png",
                    "description": ""
                },
                {
                    "id": 37,
                    "title": "Colombia",
                    "image": "images/Colombia.png",
                    "description": ""
                },
                {
                    "id": 38,
                    "title": "Comoros",
                    "image": "images/Comoros.png",
                    "description": ""
                },
                {
                    "id": 39,
                    "title": "Congo",
                    "image": "images/Congo.png",
                    "description": ""
                },
                {
                    "id": 40,
                    "title": "Costa Rica",
                    "image": "images/Costa-Rica.png",
                    "description": ""
                },
                {
                    "id": 41,
                    "title": "Croatia",
                    "image": "images/Croatia.png",
                    "description": ""
                },
                {
                    "id": 42,
                    "title": "Cuba",
                    "image": "images/Cuba.png",
                    "description": ""
                },
                {
                    "id": 43,
                    "title": "Cyprus",
                    "image": "images/Cyprus.png",
                    "description": ""
                },
                {
                    "id": 44,
                    "title": "Czech Republic",
                    "image": "images/Czech-Republic.png",
                    "description": ""
                },
                {
                    "id": 45,
                    "title": "Democratic Republic of the Congo",
                    "image": "images/Democratic-Republic-of-the-Congo.png",
                    "description": ""
                },
                {
                    "id": 46,
                    "title": "Denmark",
                    "image": "images/Denmark.png",
                    "description": ""
                },
                {
                    "id": 47,
                    "title": "Djibouti",
                    "image": "images/Djibouti.png",
                    "description": ""
                },
                {
                    "id": 48,
                    "title": "Dominica",
                    "image": "images/Dominica.png",
                    "description": ""
                },
                {
                    "id": 49,
                    "title": "Dominican Republic",
                    "image": "images/Dominican-Republic.png",
                    "description": ""
                },
                {
                    "id": 50,
                    "title": "East Timor",
                    "image": "images/East-Timor.png",
                    "description": ""
                },
                {
                    "id": 51,
                    "title": "Ecuador",
                    "image": "images/Ecuador.png",
                    "description": ""
                },
                {
                    "id": 52,
                    "title": "Egypt",
                    "image": "images/Egypt.png",
                    "description": ""
                },
                {
                    "id": 53,
                    "title": "El Salvador",
                    "image": "images/El-Salvador.png",
                    "description": ""
                },
                {
                    "id": 54,
                    "title": "Equatorial Guinea",
                    "image": "images/Equatorial-Guinea.png",
                    "description": ""
                },
                {
                    "id": 55,
                    "title": "Eritrea",
                    "image": "images/Eritrea.png",
                    "description": ""
                },
                {
                    "id": 56,
                    "title": "Estonia",
                    "image": "images/Estonia.png",
                    "description": ""
                },
                {
                    "id": 57,
                    "title": "Eswatini",
                    "image": "images/Eswatini.png",
                    "description": ""
                },
                {
                    "id": 58,
                    "title": "Ethiopia",
                    "image": "images/Ethiopia.png",
                    "description": ""
                },
                {
                    "id": 59,
                    "title": "Fiji",
                    "image": "images/Fiji.png",
                    "description": ""
                },
                {
                    "id": 60,
                    "title": "Finland",
                    "image": "images/Finland.png",
                    "description": ""
                },
                {
                    "id": 61,
                    "title": "France",
                    "image": "images/France.png",
                    "description": ""
                },
                {
                    "id": 62,
                    "title": "Gabon",
                    "image": "images/Gabon.png",
                    "description": ""
                },
                {
                    "id": 63,
                    "title": "Gambia",
                    "image": "images/Gambia.png",
                    "description": ""
                },
                {
                    "id": 64,
                    "title": "Georgia",
                    "image": "images/Georgia.png",
                    "description": ""
                },
                {
                    "id": 65,
                    "title": "Germany",
                    "image": "images/Germany.png",
                    "description": ""
                },
                {
                    "id": 66,
                    "title": "Ghana",
                    "image": "images/Ghana.png",
                    "description": ""
                },
                {
                    "id": 67,
                    "title": "Greece",
                    "image": "images/Greece.png",
                    "description": ""
                },
                {
                    "id": 68,
                    "title": "Grenada",
                    "image": "images/Grenada.png",
                    "description": ""
                },
                {
                    "id": 69,
                    "title": "Guatemala",
                    "image": "images/Guatemala.png",
                    "description": ""
                },
                {
                    "id": 70,
                    "title": "Guinea",
                    "image": "images/Guinea.png",
                    "description": ""
                },
                {
                    "id": 71,
                    "title": "Guinea-Bissau",
                    "image": "images/Guinea-Bissau.png",
                    "description": ""
                },
                {
                    "id": 72,
                    "title": "Guyana",
                    "image": "images/Guyana.png",
                    "description": ""
                },
                {
                    "id": 73,
                    "title": "Haiti",
                    "image": "images/Haiti.png",
                    "description": ""
                },
                {
                    "id": 74,
                    "title": "Honduras",
                    "image": "images/Honduras.png",
                    "description": ""
                },
                {
                    "id": 75,
                    "title": "Hungary",
                    "image": "images/Hungary.png",
                    "description": ""
                },
                {
                    "id": 76,
                    "title": "Iceland",
                    "image": "images/Iceland.png",
                    "description": ""
                },
                {
                    "id": 77,
                    "title": "India",
                    "image": "images/India.png",
                    "description": ""
                },
                {
                    "id": 78,
                    "title": "Indonesia",
                    "image": "images/Indonesia.png",
                    "description": ""
                },
                {
                    "id": 79,
                    "title": "Iran",
                    "image": "images/Iran.png",
                    "description": ""
                },
                {
                    "id": 80,
                    "title": "Iraq",
                    "image": "images/Iraq.png",
                    "description": ""
                },
                {
                    "id": 81,
                    "title": "Ireland",
                    "image": "images/Ireland.png",
                    "description": ""
                },
                {
                    "id": 82,
                    "title": "Israel",
                    "image": "images/Israel.png",
                    "description": ""
                },
                {
                    "id": 83,
                    "title": "Italy",
                    "image": "images/Italy.png",
                    "description": ""
                },
                {
                    "id": 84,
                    "title": "Ivory Coast",
                    "image": "images/Ivory-Coast.png",
                    "description": ""
                },
                {
                    "id": 85,
                    "title": "Jamaica",
                    "image": "images/Jamaica.png",
                    "description": ""
                },
                {
                    "id": 86,
                    "title": "Japan",
                    "image": "images/Japan.png",
                    "description": ""
                },
                {
                    "id": 87,
                    "title": "Jordan",
                    "image": "images/Jordan.png",
                    "description": ""
                },
                {
                    "id": 88,
                    "title": "Kazakhstan",
                    "image": "images/Kazakhstan.png",
                    "description": ""
                },
                {
                    "id": 89,
                    "title": "Kenya",
                    "image": "images/Kenya.png",
                    "description": ""
                },
                {
                    "id": 90,
                    "title": "Kiribati",
                    "image": "images/Kiribati.png",
                    "description": ""
                },
                {
                    "id": 91,
                    "title": "Kuwait",
                    "image": "images/Kuwait.png",
                    "description": ""
                },
                {
                    "id": 92,
                    "title": "Kyrgyzstan",
                    "image": "images/Kyrgyzstan.png",
                    "description": ""
                },
                {
                    "id": 93,
                    "title": "Laos",
                    "image": "images/Laos.png",
                    "description": ""
                },
                {
                    "id": 94,
                    "title": "Latvia",
                    "image": "images/Latvia.png",
                    "description": ""
                },
                {
                    "id": 95,
                    "title": "Lebanon",
                    "image": "images/Lebanon.png",
                    "description": ""
                },
                {
                    "id": 96,
                    "title": "Lesotho",
                    "image": "images/Lesotho.png",
                    "description": ""
                },
                {
                    "id": 97,
                    "title": "Liberia",
                    "image": "images/Liberia.png",
                    "description": ""
                },
                {
                    "id": 98,
                    "title": "Libya",
                    "image": "images/Libya.png",
                    "description": ""
                },
                {
                    "id": 99,
                    "title": "Liechtenstein",
                    "image": "images/Liechtenstein.png",
                    "description": ""
                },
                {
                    "id": 100,
                    "title": "Lithuania",
                    "image": "images/Lithuania.png",
                    "description": ""
                },
                {
                    "id": 101,
                    "title": "Luxembourg",
                    "image": "images/Luxembourg.png",
                    "description": ""
                },
                {
                    "id": 102,
                    "title": "Macedonia",
                    "image": "images/Macedonia.png",
                    "description": ""
                },
                {
                    "id": 103,
                    "title": "Madagascar",
                    "image": "images/Madagascar.png",
                    "description": ""
                },
                {
                    "id": 104,
                    "title": "Malawi",
                    "image": "images/Malawi.png",
                    "description": ""
                },
                {
                    "id": 105,
                    "title": "Malaysia",
                    "image": "images/Malaysia.png",
                    "description": ""
                },
                {
                    "id": 106,
                    "title": "Maldives",
                    "image": "images/Maldives.png",
                    "description": ""
                },
                {
                    "id": 107,
                    "title": "Mali",
                    "image": "images/Mali.png",
                    "description": ""
                },
                {
                    "id": 108,
                    "title": "Malta",
                    "image": "images/Malta.png",
                    "description": ""
                },
                {
                    "id": 109,
                    "title": "Marshall Islands",
                    "image": "images/Marshall-Islands.png",
                    "description": ""
                },
                {
                    "id": 110,
                    "title": "Mauritania",
                    "image": "images/Mauritania.png",
                    "description": ""
                },
                {
                    "id": 111,
                    "title": "Mauritius",
                    "image": "images/Mauritius.png",
                    "description": ""
                },
                {
                    "id": 112,
                    "title": "Mexico",
                    "image": "images/Mexico.png",
                    "description": ""
                },
                {
                    "id": 113,
                    "title": "Micronesia",
                    "image": "images/Micronesia.png",
                    "description": ""
                },
                {
                    "id": 114,
                    "title": "Moldova",
                    "image": "images/Moldova.png",
                    "description": ""
                },
                {
                    "id": 115,
                    "title": "Monaco",
                    "image": "images/Monaco.png",
                    "description": ""
                },
                {
                    "id": 116,
                    "title": "Mongolia",
                    "image": "images/Mongolia.png",
                    "description": ""
                },
                {
                    "id": 117,
                    "title": "Montenegro",
                    "image": "images/Montenegro.png",
                    "description": ""
                },
                {
                    "id": 118,
                    "title": "Morocco",
                    "image": "images/Morocco.png",
                    "description": ""
                },
                {
                    "id": 119,
                    "title": "Mozambique",
                    "image": "images/Mozambique.png",
                    "description": ""
                },
                {
                    "id": 120,
                    "title": "Myanmar",
                    "image": "images/Myanmar.png",
                    "description": ""
                },
                {
                    "id": 121,
                    "title": "Namibia",
                    "image": "images/Namibia.png",
                    "description": ""
                },
                {
                    "id": 122,
                    "title": "Nauru",
                    "image": "images/Nauru.png",
                    "description": ""
                },
                {
                    "id": 123,
                    "title": "Nepal",
                    "image": "images/Nepal.png",
                    "description": ""
                },
                {
                    "id": 124,
                    "title": "Netherlands",
                    "image": "images/Netherlands.png",
                    "description": ""
                },
                {
                    "id": 125,
                    "title": "New Zealand",
                    "image": "images/New-Zealand.png",
                    "description": ""
                },
                {
                    "id": 126,
                    "title": "Nicaragua",
                    "image": "images/Nicaragua.png",
                    "description": ""
                },
                {
                    "id": 127,
                    "title": "Niger",
                    "image": "images/Niger.png",
                    "description": ""
                },
                {
                    "id": 128,
                    "title": "Nigeria",
                    "image": "images/Nigeria.png",
                    "description": ""
                },
                {
                    "id": 129,
                    "title": "North Korea",
                    "image": "images/North-Korea.png",
                    "description": ""
                },
                {
                    "id": 130,
                    "title": "Norway",
                    "image": "images/Norway.png",
                    "description": ""
                },
                {
                    "id": 131,
                    "title": "Oman",
                    "image": "images/Oman.png",
                    "description": ""
                },
                {
                    "id": 132,
                    "title": "Pakistan",
                    "image": "images/Pakistan.png",
                    "description": ""
                },
                {
                    "id": 133,
                    "title": "Palau",
                    "image": "images/Palau.png",
                    "description": ""
                },
                {
                    "id": 134,
                    "title": "Palestine",
                    "image": "images/Palestine.png",
                    "description": ""
                },
                {
                    "id": 135,
                    "title": "Panama",
                    "image": "images/Panama.png",
                    "description": ""
                },
                {
                    "id": 136,
                    "title": "Papua New Guinea",
                    "image": "images/Papua-New-Guinea.png",
                    "description": ""
                },
                {
                    "id": 137,
                    "title": "Paraguay",
                    "image": "images/Paraguay.png",
                    "description": ""
                },
                {
                    "id": 138,
                    "title": "Peru",
                    "image": "images/Peru.png",
                    "description": ""
                },
                {
                    "id": 139,
                    "title": "Philippines",
                    "image": "images/Philippines.png",
                    "description": ""
                },
                {
                    "id": 140,
                    "title": "Poland",
                    "image": "images/Poland.png",
                    "description": ""
                },
                {
                    "id": 141,
                    "title": "Portugal",
                    "image": "images/Portugal.png",
                    "description": ""
                },
                {
                    "id": 142,
                    "title": "Qatar",
                    "image": "images/Qatar.png",
                    "description": ""
                },
                {
                    "id": 143,
                    "title": "Romania",
                    "image": "images/Romania.png",
                    "description": ""
                },
                {
                    "id": 144,
                    "title": "Russia",
                    "image": "images/Russia.png",
                    "description": ""
                },
                {
                    "id": 145,
                    "title": "Rwanda",
                    "image": "images/Rwanda.png",
                    "description": ""
                },
                {
                    "id": 146,
                    "title": "Saint Kitts and Nevis",
                    "image": "images/Saint-Kitts-and-Nevis.png",
                    "description": ""
                },
                {
                    "id": 147,
                    "title": "Saint Lucia",
                    "image": "images/Saint-Lucia.png",
                    "description": ""
                },
                {
                    "id": 148,
                    "title": "Saint Vincent and the Grenadines",
                    "image": "images/Saint-Vincent-and-the-Grenadines.png",
                    "description": ""
                },
                {
                    "id": 149,
                    "title": "Samoa",
                    "image": "images/Samoa.png",
                    "description": ""
                },
                {
                    "id": 150,
                    "title": "San Marino",
                    "image": "images/San-Marino.png",
                    "description": ""
                },
                {
                    "id": 151,
                    "title": "Sao Tome and Principe",
                    "image": "images/Sao-Tome-and-Principe.png",
                    "description": ""
                },
                {
                    "id": 152,
                    "title": "Saudi Arabia",
                    "image": "images/Saudi-Arabia.png",
                    "description": ""
                },
                {
                    "id": 153,
                    "title": "Senegal",
                    "image": "images/Senegal.png",
                    "description": ""
                },
                {
                    "id": 154,
                    "title": "Serbia",
                    "image": "images/Serbia.png",
                    "description": ""
                },
                {
                    "id": 155,
                    "title": "Seychelles",
                    "image": "images/Seychelles.png",
                    "description": ""
                },
                {
                    "id": 156,
                    "title": "Sierra Leone",
                    "image": "images/Sierra-Leone.png",
                    "description": ""
                },
                {
                    "id": 157,
                    "title": "Singapore",
                    "image": "images/Singapore.png",
                    "description": ""
                },
                {
                    "id": 158,
                    "title": "Slovakia",
                    "image": "images/Slovakia.png",
                    "description": ""
                },
                {
                    "id": 159,
                    "title": "Slovenia",
                    "image": "images/Slovenia.png",
                    "description": ""
                },
                {
                    "id": 160,
                    "title": "Solomon Islands",
                    "image": "images/Solomon-Islands.png",
                    "description": ""
                },
                {
                    "id": 161,
                    "title": "Somalia",
                    "image": "images/Somalia.png",
                    "description": ""
                },
                {
                    "id": 162,
                    "title": "South Africa",
                    "image": "images/South-Africa.png",
                    "description": ""
                },
                {
                    "id": 163,
                    "title": "South Korea",
                    "image": "images/South-Korea.png",
                    "description": ""
                },
                {
                    "id": 164,
                    "title": "South Sudan",
                    "image": "images/South-Sudan.png",
                    "description": ""
                },
                {
                    "id": 165,
                    "title": "Spain",
                    "image": "images/Spain.png",
                    "description": ""
                },
                {
                    "id": 166,
                    "title": "Sri Lanka",
                    "image": "images/Sri-Lanka.png",
                    "description": ""
                },
                {
                    "id": 167,
                    "title": "Sudan",
                    "image": "images/Sudan.png",
                    "description": ""
                },
                {
                    "id": 168,
                    "title": "Suriname",
                    "image": "images/Suriname.png",
                    "description": ""
                },
                {
                    "id": 169,
                    "title": "Sweden",
                    "image": "images/Sweden.png",
                    "description": ""
                },
                {
                    "id": 170,
                    "title": "Switzerland",
                    "image": "images/Switzerland.png",
                    "description": ""
                },
                {
                    "id": 171,
                    "title": "Syria",
                    "image": "images/Syria.png",
                    "description": ""
                },
                {
                    "id": 172,
                    "title": "Taiwan",
                    "image": "images/Taiwan.png",
                    "description": ""
                },
                {
                    "id": 173,
                    "title": "Tajikistan",
                    "image": "images/Tajikistan.png",
                    "description": ""
                },
                {
                    "id": 174,
                    "title": "Tanzania",
                    "image": "images/Tanzania.png",
                    "description": ""
                },
                {
                    "id": 175,
                    "title": "Thailand",
                    "image": "images/Thailand.png",
                    "description": ""
                },
                {
                    "id": 176,
                    "title": "Timor Leste",
                    "image": "images/Timor-Leste.png",
                    "description": ""
                },
                {
                    "id": 177,
                    "title": "Togo",
                    "image": "images/Togo.png",
                    "description": ""
                },
                {
                    "id": 178,
                    "title": "Tonga",
                    "image": "images/Tonga.png",
                    "description": ""
                },
                {
                    "id": 179,
                    "title": "Trinidad and Tobago",
                    "image": "images/Trinidad-and-Tobago.png",
                    "description": ""
                },
                {
                    "id": 180,
                    "title": "Tunisia",
                    "image": "images/Tunisia.png",
                    "description": ""
                },
                {
                    "id": 181,
                    "title": "Turkey",
                    "image": "images/Turkey.png",
                    "description": ""
                },
                {
                    "id": 182,
                    "title": "Turkmenistan",
                    "image": "images/Turkmenistan.png",
                    "description": ""
                },
                {
                    "id": 183,
                    "title": "Tuvalu",
                    "image": "images/Tuvalu.png",
                    "description": ""
                },
                {
                    "id": 184,
                    "title": "Uganda",
                    "image": "images/Uganda.png",
                    "description": ""
                },
                {
                    "id": 185,
                    "title": "Ukraine",
                    "image": "images/Ukraine.png",
                    "description": ""
                },
                {
                    "id": 186,
                    "title": "United Arab Emirates",
                    "image": "images/United-Arab-Emirates.png",
                    "description": ""
                },
                {
                    "id": 187,
                    "title": "United Kingdom",
                    "image": "images/United-Kingdom.png",
                    "description": ""
                },
                {
                    "id": 188,
                    "title": "United States",
                    "image": "images/United-States.png",
                    "description": ""
                },
                {
                    "id": 189,
                    "title": "Uruguay",
                    "image": "images/Uruguay.png",
                    "description": ""
                },
                {
                    "id": 190,
                    "title": "Uzbekistan",
                    "image": "images/Uzbekistan.png",
                    "description": ""
                },
                {
                    "id": 191,
                    "title": "Vanuatu",
                    "image": "images/Vanuatu.png",
                    "description": ""
                },
                {
                    "id": 192,
                    "title": "Vatican City",
                    "image": "images/Vatican-City.png",
                    "description": ""
                },
                {
                    "id": 193,
                    "title": "Venezuela",
                    "image": "images/Venezuela.png",
                    "description": ""
                },
                {
                    "id": 194,
                    "title": "Vietnam",
                    "image": "images/Vietnam.png",
                    "description": ""
                },
                {
                    "id": 195,
                    "title": "Yemen",
                    "image": "images/Yemen.png",
                    "description": ""
                },
                {
                    "id": 196,
                    "title": "Zambia",
                    "image": "images/Zambia.png",
                    "description": ""
                },
                {
                    "id": 197,
                    "title": "Zimbabwe",
                    "image": "images/Zimbabwe.png",
                    "description": ""
                }
            ]
        };
    },
    template: `
    <div>
      <search-bar></search-bar>
      <flag-cards :countries="countries"></flag-cards>
    </div>
  `
};
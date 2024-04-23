// lodash orderBy example (sorting)
// orderBy can by ascending or descending
import _ from 'lodash';

const incidences = [
  {
    "id": 1,
    "title": "Humedad en la escalera",
    "date": "2019-02-02T00:00:00.000Z",
  },
  {
    "id": 3,
    "title": "Suelo agrietado",
    "date": "2021-02-15T00:00:00.000Z",
  },
  {
    "id": 5,
    "title": "Averías eléctricas",
    "date": "2024-02-20T00:00:00.000Z",
  },
  {
    "id": 8,
    "title": "Plagas y control de plagas",
    "date": "2022-03-02T00:00:00.000Z",
  },
]

// Sorting by dates, most recent first
_.orderBy(incidences, ["date"], ['desc']);

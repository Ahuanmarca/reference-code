const incidences = getIncidences();

const incidence = incidences.find(o => o.id === 5);
console.log(incidence);

function getIncidences() {
  return [
    {
      id: 8,
      title: "Plagas y control de plagas",
      description:
        "Presencia de insectos, concretamente cucarachas, en la planta baja y el primer piso.",
      provider_id: 8,
      date: "2024-03-02T00:00:00.000Z",
      time: "1970-01-01T12:20:00.000Z",
      status: "pendiente",
      category: "Limpieza",
    },
    {
      id: 6,
      title: "Ruidos molestos",
      description:
        "Quejas de arrendatarios sobre ruidos excesivos o molestos provenientes de otros residentes de la tercera planta",
      provider_id: 6,
      date: "2024-02-25T00:00:00.000Z",
      time: "1970-01-01T09:45:00.000Z",
      status: "pendiente",
      category: "Comunidad",
    },
    {
      id: 4,
      title: "Fugas de agua",
      description:
        "Tuberías rotas o con fugas que pueden provocar daños en la propiedad y desperdicio de agua en el primer piso.",
      provider_id: 4,
      date: "2024-02-19T00:00:00.000Z",
      time: "1970-01-01T16:35:00.000Z",
      status: "pendiente",
      category: "Agua",
    },
    {
      id: 9,
      title: "Falta de limpieza",
      description: "La zona común de la entrada de la finca está muy sucia.",
      provider_id: 9,
      date: "2024-03-03T00:00:00.000Z",
      time: "1970-01-01T11:00:00.000Z",
      status: "activo",
      category: "Limpieza",
    },
    {
      id: 5,
      title: "Averías eléctricas",
      description:
        "Bombillas que no funcionan en el pasillo del descansillo del piso 2",
      provider_id: 5,
      date: "2024-02-20T00:00:00.000Z",
      time: "1970-01-01T18:00:00.000Z",
      status: "activo",
      category: "Electricidad",
    },
  ];
}

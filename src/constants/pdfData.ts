/* =====================================================
TIPOS
===================================================== */

export interface DatosGenerales {
  exportador: string;
  origen: string;
  destino: string;
  importador: string;
  crt: string;
  invoice: string;
  aduanaBrasil: string;
  aduanaDestino: string;
  due: string;
  canalExportacion: string;
  fecha: string;
}

export interface FilaLogistica {
  data: string;
  vehiculo: string;
  previsionLlegada: string;
  dataChegada: string;
  frontera: string;
  notaFiscalVehiculo: string;
  despachante: string;
  vehiculoCruze: string;
  micDta: string;
  ingresoEadiAgesa: string;
  salidaAgesa: string;
  ingresoAdBo: string;
  salidaAdBo: string;
  dataEntrega: string;
}

export interface Observacion {
  fecha: string;
  observacion: string;
}

/* =====================================================
CONSTANTES — DATOS GENERALES
===================================================== */

export const DATOS_GENERALES: DatosGenerales = {
  exportador: "SAINT-GOBAIN DO BRASIL PROD. IND. E P/ CONST. LTDA",
  origen: "Guarulhos - SP - Brasil",
  destino: "Santa Cruz de la Sierra - Bolivia",
  importador: "Industria Metalúrgica Ferrotodos S.A.",
  crt: "BR365116397",
  invoice: "000778/25",
  aduanaBrasil: "EADI-AGESA-CORUMBA-MS-BRASIL",
  aduanaDestino: "ADUANA INTERIOR SANTA CRUZ - BOLIVIA",
  due: "25BR002057495-7",
  canalExportacion: "VERDE",
  fecha: "04/11/2025"
};

/* =====================================================
CONSTANTES — TABLA LOGÍSTICA
===================================================== */

export const TABLA_LOGISTICA: FilaLogistica[] = [
  {
    data: "06-11",
    vehiculo: "5207ELY",
    previsionLlegada: "06-11",
    dataChegada: "",
    frontera: "CORUMBÁ-MS",
    notaFiscalVehiculo: "002394266 / 5207ELY",
    despachante: "AGESA",
    vehiculoCruze: "AUR3871",
    micDta: "BR365119748",
    ingresoEadiAgesa: "10-11",
    salidaAgesa: "10-11",
    ingresoAdBo: "10-11",
    salidaAdBo: "10-11",
    dataEntrega: "11-11"
  }
];

/* =====================================================
CONSTANTES — OBSERVACIONES
===================================================== */

export const OBSERVACIONES: Observacion[] = [
  {
    fecha: "04-11",
    observacion: "Vehículo cargando en fábrica"
  },
  {
    fecha: "04-11",
    observacion: "Carga finalizada, vehículo siguiendo viaje"
  },
  {
    fecha: "05-11",
    observacion: "Vehículo en tránsito hacia Corumbá-MS"
  },
  {
    fecha: "06-11",
    observacion: "Vehículo en Corumbá-MS aguardando documentación"
  },
  {
    fecha: "10-11",
    observacion: "Mercadería en canal verde, siguiendo a aduana boliviana"
  },
  {
    fecha: "11-11",
    observacion: "Descarga de mercadería en destino"
  },
  {
    fecha: "11-11",
    observacion: "Descarga de mercadería en destino"
  }
];



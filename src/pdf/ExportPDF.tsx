import {
  Document,
  Page,
  View,
  Image,
  Text
} from "@react-pdf/renderer";

import { styles } from "./styles";

import {
  DATOS_GENERALES,
  TABLA_LOGISTICA,
  OBSERVACIONES
} from "../constants/pdfData";


const ExportPDF: React.FC = () => {
  return (
    <Document>

      <Page size="A4" orientation="landscape" style={styles.page}>

        <View style={styles.banner} fixed>
          <Image
            src="../public/banner.png"
            style={styles.bannerImage}
          />
        </View>

        {/* =================================================
           TÍTULO
        ================================================= */}
        <Text style={styles.title}>STATUS DE EXPORTAÇÃO</Text>


        {/* =================================================
           DATOS GENERALES
        ================================================= */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>EXPORTADOR</Text>
              <Text>{DATOS_GENERALES.exportador}</Text>
            </View>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>IMPORTADOR</Text>
              <Text>{DATOS_GENERALES.importador}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>ORIGEM</Text>
              <Text>{DATOS_GENERALES.origen}</Text>
            </View>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>DESTINO</Text>
              <Text>{DATOS_GENERALES.destino}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { width: "25%" }]}>
              <Text style={styles.headerCell}>CRT</Text>
              <Text>{DATOS_GENERALES.crt}</Text>
            </View>
            <View style={[styles.tableCell, { width: "25%" }]}>
              <Text style={styles.headerCell}>INVOICE</Text>
              <Text>{DATOS_GENERALES.invoice}</Text>
            </View>
            <View style={[styles.tableCell, { width: "25%" }]}>
              <Text style={styles.headerCell}>CANAL EXPORTAÇÃO</Text>
              <Text>{DATOS_GENERALES.canalExportacion}</Text>
            </View>
            <View style={[styles.tableCell, { width: "25%" }]}>
              <Text style={styles.headerCell}>DATA</Text>
              <Text>{DATOS_GENERALES.fecha}</Text>
            </View>
          </View>
        </View>

        {/* =================================================
           ADUANAS
        ================================================= */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>ADUANA BRASIL</Text>
              <Text>{DATOS_GENERALES.aduanaBrasil}</Text>
            </View>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>ADUANA DESTINO</Text>
              <Text>{DATOS_GENERALES.aduanaDestino}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>DU-E</Text>
              <Text>{DATOS_GENERALES.due}</Text>
            </View>
            <View style={[styles.tableCell, { width: "50%" }]}>
              <Text style={styles.headerCell}>CANAL</Text>
              <Text>{DATOS_GENERALES.canalExportacion}</Text>
            </View>
          </View>
        </View>

        {/* =================================================
           TABLA LOGÍSTICA
        ================================================= */}
        <View style={styles.table}>

          {/* ENCABEZADO */}
          <View style={styles.tableRow}>
            {[
              "DATA",
              "VEÍCULO",
              "PREVISÃO",
              "DATA CHEGADA FRONTEIRA",
              "FRONTEIRA",
              "NF / VEÍCULO",
              "DESPACHANTE",
              "VEÍCULO CRUZE",
              "MIC / DTA",
              "ING. EADI",
              "SAÍDA AGESA",
              "ING. AD.BO",
              "SAÍDA AD.BO",
              "ENTREGA"
            ].map((header, index) => (
              <View
                key={index}
                style={[
                  styles.tableCell,
                  styles.headerCell,
                  { width: "7.14%" }
                ]}
              >
                <Text>{header}</Text>
              </View>
            ))}
          </View>

          {/* FILAS */}
          {TABLA_LOGISTICA.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.data}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.vehiculo}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.previsionLlegada}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.dataChegada || "-"}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.frontera}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.notaFiscalVehiculo}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.despachante}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.vehiculoCruze}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.micDta}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.ingresoEadiAgesa}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.salidaAgesa}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.ingresoAdBo}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.salidaAdBo}</Text></View>
              <View style={[styles.tableCell, { width: "7.14%" }]}><Text>{row.dataEntrega}</Text></View>
            </View>
          ))}

        </View>

        {/* =================================================
           TABLA DE OBSERVACIONES
        ================================================= */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.headerCell, { width: "20%" }]}>
              <Text>DATA</Text>
            </View>
            <View style={[styles.tableCell, styles.headerCell, { width: "80%" }]}>
              <Text>OBSERVAÇÕES</Text>
            </View>
          </View>

          {OBSERVACIONES.map((obs, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, { width: "20%" }]}>
                <Text>{obs.fecha}</Text>
              </View>
              <View style={[styles.tableCell, { width: "80%" }]}>
                <Text>{obs.observacion}</Text>
              </View>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
};

export default ExportPDF;



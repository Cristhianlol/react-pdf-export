import {
  Document,
  Page,
  View,
  Text
} from "@react-pdf/renderer";

import {
  PEDIDO_COMPRA_HEADER,
  ITEMS_PEDIDO,
  DOCUMENTOS_REQUERIDOS,
  APROBADO_POR
} from "../constants/purchaseOrderData";

import { styles } from "./styles2";


/* ===============================
   COMPONENTE PDF
================================ */
const ExportPurchaseOrderPDF = () => {
  const total = ITEMS_PEDIDO.reduce((s, i) => s + i.amount, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ENCABEZADO */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.company}>Plastiforte</Text>
            <Text style={styles.subtitle}>
              Tecnología y soluciones para el agua
            </Text>
            <Text style={styles.title}>Pedido de Compra</Text>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.headerCell}>
              <Text><Text style={styles.label}>No.:</Text> {PEDIDO_COMPRA_HEADER.numero}</Text>
            </View>
            <View style={styles.headerCell}>
              <Text><Text style={styles.label}>Código:</Text> {PEDIDO_COMPRA_HEADER.codigo}</Text>
            </View>
            <View style={styles.headerCell}>
              <Text><Text style={styles.label}>Versión:</Text> {PEDIDO_COMPRA_HEADER.version}</Text>
            </View>
          </View>
        </View>

        {/* DATOS GENERALES */}
        <View style={styles.section}>
          <View style={styles.grid}>
            <Text style={styles.field}><Text style={styles.label}>Proveedor:</Text> {PEDIDO_COMPRA_HEADER.proveedor}</Text>
            <Text style={styles.field}><Text style={styles.label}>Fecha:</Text> {PEDIDO_COMPRA_HEADER.fecha}</Text>
            <Text style={styles.field}><Text style={styles.label}>Tiempo Entrega:</Text> {PEDIDO_COMPRA_HEADER.tiempoEntrega}</Text>

            <Text style={styles.field}><Text style={styles.label}>Atn:</Text> {PEDIDO_COMPRA_HEADER.atn}</Text>
            <Text style={styles.field}><Text style={styles.label}>Cond. Pago:</Text> {PEDIDO_COMPRA_HEADER.condicionesPago}</Text>
            <Text style={styles.field}><Text style={styles.label}>Incoterm:</Text> {PEDIDO_COMPRA_HEADER.incoterm}</Text>

            <Text style={styles.field}><Text style={styles.label}>Nro Cotización:</Text> {PEDIDO_COMPRA_HEADER.nroCotizacion}</Text>
          </View>
        </View>

        {/* TABLA ITEMS */}
        <View style={[styles.section, styles.table]}>
          <View style={styles.row}>
            <Text style={[styles.th, { width: "5%" }]}>ITEM</Text>
            <Text style={[styles.th, { width: "45%" }]}>DESCRIPCIÓN DEL ITEM</Text>
            <Text style={[styles.th, { width: "10%" }]}>UNIDAD</Text>
            <Text style={[styles.th, { width: "10%" }]}>CANT.</Text>
            <Text style={[styles.th, { width: "15%" }]}>UNIT PRICE [USD]</Text>
            <Text style={[styles.th, { width: "15%" }]}>AMOUNT [USD]</Text>
          </View>

          {ITEMS_PEDIDO.map((it, i) => (
            <View key={i} style={styles.row}>
              <Text style={[styles.td, { width: "5%" }]}>{it.item}</Text>
              <Text style={[styles.td, { width: "45%" }]}>{it.descripcion}</Text>
              <Text style={[styles.td, { width: "10%" }]}>{it.unidad}</Text>
              <Text style={[styles.td, { width: "10%" }]}>{it.cantidad}</Text>
              <Text style={[styles.td, { width: "15%" }, styles.right]}>{it.unitPrice.toFixed(2)}</Text>
              <Text style={[styles.td, { width: "15%" }, styles.right]}>{it.amount.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* TOTAL */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            Los montos detallados en la presente incluyen impuestos de ley.
          </Text>
          <Text style={styles.totalAmount}>
            TOTAL: {total.toFixed(2)} USD
          </Text>
        </View>

        {/* DOCUMENTOS */}
        <View style={styles.section}>
          <Text style={styles.label}>Favor incluir originales de la siguiente documentación:</Text>
          {DOCUMENTOS_REQUERIDOS.map((d, i) => (
            <View key={i} style={styles.checkboxRow}>
              <View style={styles.checkbox}>{d.checked ? "✓" : ""}</View>
              <Text>{d.label}</Text>
            </View>
          ))}
        </View>

        {/* FIRMA */}
        <View style={styles.signatureBox}>
          <View style={styles.signatureLine} />
          <Text>Aprobado por:</Text>
          <Text style={styles.label}>{APROBADO_POR}</Text>
        </View>

        {/* NOTA */}
        <Text style={styles.footerNote}>
          *(Queda vedado el envío de muestras y/o regalos sin previo aviso o previa declaración en la factura comercial)
        </Text>

      </Page>
    </Document>
  );
};

export default ExportPurchaseOrderPDF;


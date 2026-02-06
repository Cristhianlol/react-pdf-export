/* ================================
   TIPOS
================================ */

export interface PedidoCompraHeader {
  numero: string;
  codigo: string;
  version: string;
  proveedor: string;
  fecha: string;
  tiempoEntrega: string;
  atn: string;
  condicionesPago: string;
  incoterm: string;
  nroCotizacion: string;
}

export interface ItemPedido {
  item: number;
  descripcion: string;
  unidad: string;
  cantidad: number;
  unitPrice: number;
  amount: number;
}

export interface DocumentoCheck {
  label: string;
  checked: boolean;
}

/* ================================
   CONSTANTES
================================ */

export const PEDIDO_COMPRA_HEADER: PedidoCompraHeader = {
  numero: "PCIME-408",
  codigo: "PR-ADQ-142-R266",
  version: "6",
  proveedor: "BOREALIS AG",
  fecha: "27/08/2025",
  tiempoEntrega: "08/09/2025",
  atn: "JUAN EMILIO CONTRERAS",
  condicionesPago: "CAD",
  incoterm: "CFR ARICA, CHILE",
  nroCotizacion: "9150601395"
};

export const ITEMS_PEDIDO: ItemPedido[] = [
  {
    item: 1,
    descripcion: "BORSAFE HE 3490-LS",
    unidad: "TM",
    cantidad: 396,
    unitPrice: 1123.00,
    amount: 444708.00
  }
];

export const DOCUMENTOS_REQUERIDOS: DocumentoCheck[] = [
  { label: "Manual en español", checked: true },
  { label: "Factura Comercial", checked: true },
  { label: "Lista de Empaque", checked: true },
  { label: "Certificado de Origen", checked: true },
  { label: "Certificado de Garantía", checked: false },
  { label: "Hoja con Datos Técnicos", checked: true },
  { label: "BL / AWB", checked: true }
];

export const APROBADO_POR = "Gabriela Miranda";

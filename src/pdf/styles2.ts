/* ===============================
   ESTILOS GERENCIALES
================================ */
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 16,
    fontSize: 9,
    fontFamily: "Helvetica"
  },

  /* HEADER */
  headerRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#1F3A5F",
    marginBottom: 10
  },
  headerLeft: {
    flex: 3,
    padding: 8,
    backgroundColor: "#F2F5F9"
  },
  company: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1F3A5F"
  },
  subtitle: {
    fontSize: 8,
    color: "#555"
  },
  title: {
    marginTop: 6,
    fontSize: 11,
    fontWeight: "bold",
    color: "#1F3A5F"
  },

  headerRight: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#1F3A5F"
  },
  headerCell: {
    borderBottomWidth: 1,
    borderBottomColor: "#1F3A5F",
    padding: 6
  },
  label: {
    fontWeight: "bold"
  },

  /* GRID INFO */
  section: {
    marginBottom: 10
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  field: {
    width: "33%",
    marginBottom: 4
  },

  /* TABLE */
  table: {
    borderWidth: 1,
    borderColor: "#1F3A5F"
  },
  row: {
    flexDirection: "row"
  },
  th: {
    borderWidth: 1,
    padding: 4,
    backgroundColor: "#E6ECF3",
    fontWeight: "bold",
    color: "#1F3A5F"
  },
  td: {
    borderWidth: 1,
    padding: 4
  },
  right: {
    textAlign: "right"
  },

  /* TOTAL */
  totalContainer: {
    marginTop: 6,
    alignItems: "flex-end"
  },
  totalText: {
    fontSize: 8,
    marginBottom: 2
  },
  totalAmount: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1F3A5F"
  },

  /* SIGNATURE */
  signatureBox: {
    marginTop: 20,
    marginBottom: 6,
    width: 220
  },
  signatureLine: {
    borderBottomWidth: 1,
    marginBottom: 4
  },

  /* CHECKS */
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3
  },
  checkbox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    marginRight: 6,
    textAlign: "center"
  },

  footerNote: {
    fontSize: 8,
    marginTop: 6
  }
});
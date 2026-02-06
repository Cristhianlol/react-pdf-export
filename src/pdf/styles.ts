import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({

  
banner: {
  width: "100%",
  marginBottom: 8
},

bannerImage: {
  width: "100%",
  height: 60,
  objectFit: "contain"
},

  header: {
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "#444",
  paddingBottom: 6,
  marginBottom: 8
},

logo: {
  width: 60,
  height: 25,
  objectFit: "contain"
},

companyName: {
  flex: 1,
  textAlign: "center",
  fontSize: 12,
  fontWeight: "bold",
  textTransform: "uppercase"
},

  page: {
    padding: 20,
    fontSize: 8,
    fontFamily: "Helvetica"
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    textTransform: "uppercase"
  },

  subtitle: {
    fontSize: 9,
    textAlign: "center",
    marginBottom: 10,
    color: "#555"
  },

  table: {
    width: "100%",
    borderWidth: 0.8,
    borderColor: "#444",
    marginBottom: 8
  },

  tableRow: {
    flexDirection: "row"
  },

  tableCell: {
    borderWidth: 0.5,
    borderColor: "#777",
    padding: 3
  },

  headerCell: {
    backgroundColor: "#E6E6E6",
    fontWeight: "bold"
  },

  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 6
  }
  
});




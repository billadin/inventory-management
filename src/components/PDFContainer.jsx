import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Receipt from "./Receipt";
import { nanoid } from "nanoid";
import { calculateTotalCost } from "../utils";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
  },

  section: {
    textAlign: 'left',
    flexDirection: "column",
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingRight: 25, 
    paddingLeft: 25, 
    gap: 8,
  },
});


// Create Document Component
const PDFContainer = ({ orders }) => {
  console.log(orders);
  if(orders) {
    const total = calculateTotalCost(orders)
    console.log(total)
}

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={{
              backgroundColor: "#FFF",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: 16
            }}>Your Checked Out Items</Text>
          </View>

          {orders?.length > 0 &&
            orders.map((product) => {
              const { name, cost, profit, soldDate, quantity, sellingPrice } =
                product;

              return (
                  <View style={styles.section} key={nanoid(10)}>
                    <Text>Name: .................................................................... {name}</Text>
                    <Text>Cost: .................................................................... ${cost}</Text>
                    <Text>Quantity: ................................................................ {quantity}</Text>
                    <Text>Cost: .................................................................... ${sellingPrice}</Text>
                    <Text>Selling Price: ........................................................... ${profit}</Text>
                    <Text>_____________________________________</Text>
                  </View>
              );
            })}
            <View>
                  <Text style={{
                        backgroundColor: "#FFF",
                        flexDirection: "column",
                        textAlign: "left",
                        marginBottom: 16,
                        paddingLeft: 25
            }}>Total Cost: .............................................................${orders && calculateTotalCost(orders)}</Text>
                  </View>
        </Page>
      </Document>
    </>
  );
};

export default PDFContainer;

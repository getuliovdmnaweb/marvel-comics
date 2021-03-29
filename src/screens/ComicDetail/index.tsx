import moment from "moment";
import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { Portrait } from "../../constants";
import { getImageUri } from "../../helpers";
import { styles } from "./styles";

interface Props {
  route: any;
}

interface DetailRowProps {
  detail: string;
  detailValue: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ detail, detailValue }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.detail}>{detail}</Text>
      <Text style={styles.detailValue}>{detailValue}</Text>
    </View>
  );
};

const ComicDetail: React.FC<Props> = ({ route }) => {
  const { comic } = route.params;

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text accessibilityRole="text" style={styles.title}>
          {comic.title}
        </Text>
        <Image
          accessibilityRole="image"
          style={styles.headerImage}
          source={{ uri: getImageUri(comic.thumbnail, Portrait.FANTASTIC) }}
        />
        <View style={styles.publishSection}>
          <View>
            <Text style={styles.published}>Published:</Text>
            <Text style={styles.date}>
              {moment.utc(comic.modified).format("LL")}
            </Text>
          </View>
          <View>
            <Text style={styles.priceLabel}>Price:</Text>
            <Text style={styles.priceValue}>${comic.prices[0].price}</Text>
          </View>
        </View>

        <Text style={styles.description}>{comic.description}</Text>
      </View>
      <View style={styles.moreDetailsSection}>
        <Text style={styles.moreDetails}>MORE DETAILS</Text>
        <Text style={styles.extendedCredits}>EXTENDED CREDITS AND INFO</Text>
        <DetailRow detail="Format:" detailValue={comic.format} />
        <DetailRow detail="UPC:" detailValue={comic.upc} />
        <DetailRow detail="ISBN:" detailValue={comic.isbn} />
        <DetailRow
          detail="OnSale:"
          detailValue={moment.utc(comic.dates[0].date).format("LL")}
        />
      </View>
    </ScrollView>
  );
};

export default ComicDetail;

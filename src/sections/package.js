/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { useEffect } from "react";
//import PatternBG from "assets/patternBG.png";

const data = [
  {
    name: "Misión",
    description: "Nuestra misión es ..",
  },
  {
    name: "Visión",
    description: "Nuestra visión  es ..",
  },
];
export default function MisionVision() {
  /*
  const data = null;
  const getData = () => {
    fetch("http://52.21.60.158/api/v1/mission_vision/")
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          data = result.result;
        });
        //console.log(response.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);*/
  console.log(data);
  return (
    <section id="mision_vision" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Unidad de enfermeria - DASS"
          slogan="mision y vision"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          <PriceCard
            data={{ name: "Misión", description: data[0].description }}
          />
          <PriceCard
            data={{ name: "Visión", description: data[1].description }}
          />
        </Flex>
      </Container>
    </section>
  );
}
//backgroundImage: `url(${PatternBG})`,
const styles = {
  pricing: {
    backgroundColor: "#12203d",
    backgroundImage: `url('https://store-sicombue.s3.us-west-2.amazonaws.com/patternBG.png')`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
};

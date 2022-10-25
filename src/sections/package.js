/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";

const packages = [
  {
    name: "Misión",
    description: "Nuestra misión ...kk.lkkkw",
  },
  {
    name: "Visión",
    description: "Nuestra visión  ..kskslmwklwl",
  },
];
export default function MisionVision({ data }) {
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
          <PriceCard data={{ name: "mision", description: data.misiion }} />
          <PriceCard data={{ name: "vision", description: data.vision }} />
        </Flex>
      </Container>
    </section>
  );
}
//backgroundImage: `url(${PatternBG})`,
const styles = {
  pricing: {
    backgroundColor: "#12203d",
    backgroundImage: `url(${PatternBG})`,
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

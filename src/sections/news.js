/** @jsx jsx */
import { jsx } from "theme-ui";
import { getInitialProps } from "next";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import NewsImg from "assets/feature/news.svg";
//import Smart from "assets/feature/smart.svg";
//import Winner from "assets/feature/winner.svg";
//import Cloud from "assets/feature/cloud.svg";
//import Setting from "assets/feature/setting.svg";
//import Design from "assets/feature/design.svg";
//import Chat from "assets/feature/chat.svg";
import { useEffect } from "react";

const data1 = [
  {
    id: 1,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
  {
    id: 2,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
  {
    id: 3,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
  {
    id: 4,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
  {
    id: 5,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
  {
    id: 6,
    imgSrc: NewsImg,
    altText: "noticia 1",
    title: "salud y bienestar",
    text: "noticia 1 de salud y bienestar",
  },
];

function News({ data }) {
  console.log(data);

  return (
    <section sx={{ variant: "section.feature" }} id="noticias">
      <Container>
        <SectionHeader slogan="Salud y bienestar" title="Ultimas noticias" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={NewsImg}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default News;

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};

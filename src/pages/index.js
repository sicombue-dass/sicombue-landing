import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import News from "sections/news";
import TestimonialCard from "sections/testimonial";
import MisionVision from "sections/package";

export default function IndexPage() {
  const [allNews, setAllNews] = React.useState([]);
  const [misionvison, setMisionVison] = React.useState({
    misiion: "",
    vision: "",
  });
  const [allActivities, setAllActivities] = React.useState([]);

  const getInitialNews = async () => {
    const response = await fetch("http://52.21.60.158/api/v1/news/");
    const data = await response.json();
    return data;
  };

  const getInitialMisionVison = async () => {
    const response = await fetch("http://52.21.60.158/api/v1/mission_vision/");
    const data = await response.json();
    return data.results;
  };

  const getInitialActivities = async () => {
    const response = await fetch("http://52.21.60.158/api/v1/activities/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  const getInitialData = async () => {
    const resultActivities = await getInitialActivities();
    setAllActivities(resultActivities.results);
    const resultNews = await getInitialNews();
    setAllNews(resultNews.results);
    const resultMisionVison = await getInitialMisionVison();
    console.log(resultMisionVison);
    setMisionVison(resultMisionVison[0]);
  };
  //useEffect(() => {
  //  getInitialData();
  //}, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Sicombue-Dass" />
          <Banner />
          <TestimonialCard data={allActivities} />
          <MisionVision data={misionvison} />
          <News data={allNews} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

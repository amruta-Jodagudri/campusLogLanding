import { Metadata } from "next";
import AboutSectionOne from "./components/About/AboutSectionOne";
import Blog from "./components/Blog";
import ScrollUp from "./components/Common/ScrollUp";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";

export const metadata: Metadata = {
  title: "SGMCOE",
  description: "",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Pricing /> */}
      <Blog />
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}

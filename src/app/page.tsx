"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";
import AOS from "aos"
import "aos/dist/aos.css";

import Image from "next/image";
import { useEffect } from "react";
import Projects from "./projects/page";
import Navbar from "@/components/Navbar";





export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);
  return (


    <main>


      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />


    </main>
  );
}

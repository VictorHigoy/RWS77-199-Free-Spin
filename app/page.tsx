"use client";
import Header from "@/components/FirstRow/Header";
import HeroSection from "@/components/FirstRow/HeroSection";
import Footer from "@/components/Footer/Footer";
import LastRow from "@/components/LastRow/LastRow";
import MiddleRow from "@/components/MiddleRow/MiddleRow";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [removeHeader, setRemoveHeader] = useState(false);

  return (
    <div>
      {!removeHeader && <Header setRemoveHeader={setRemoveHeader} />}
      <HeroSection />

      <MiddleRow />
      <LastRow />
      <Footer />
    </div>
  );
}

import Banner_03 from "@/components/commerce-ui/banner-03";
import Footer from "@/components/footer";
import FutreProd from "@/components/FutreProd";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-between bg-background">
      <div className="bg-background">
        <Banner_03 />
      </div>

      <div className="bg-background">
        <FutreProd />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

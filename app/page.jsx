"use client";

import Button from "@/components/Button";
import PricingPackage from "@/components/PricingPackage";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [pricingplan, setPricingPlan] = useState("monthly");
  const packages = [
    {
      name: "Pro",
      tagline:
        "Ideal For those who have already got their websites up and running and are seeking assistance",
      price: pricingplan === "monthly" ? " $2500" : "$1800",
      supportedFeatures: [
        "3-5 days turn around",
        "Native Development",
        "Task Delivery one by one",
        "Dedicated dash board",
      ],
      isRecommended: false,
    },
    {
      name: "Pro Plus",
      tagline:
        "Ideal if you want to scale or build  your website fast.with the strategies calls included",
      price: pricingplan === "monthly" ? "$4200" : "$3500",
      supportedFeatures: [
        "1-3 days turn around.",
        "Monthly strategy call.",
        " Commercial Lisence .",
        "Native Development.",
        "Tasks Delivered one by one.",
      ],
      isRecommended: false,
    },
    {
      name: "Custom",
      tagline:
        "If these plans dont fit , lets create one that suits , customize your subscription for a perfect fit",
      price: pricingplan === "monthly" ? "lets Talk" : "$5500",
      supportedFeatures: [
        "Everything in design & development",
        "Strategy workshop",
        "Priority support.",
        "Multiple tasks at once",
        "Advanced Custom development",
      ],
      isRecommended: true,
    },
  ];
  function setPricing(plan) {
    setPricingPlan(plan);
  }
  return (
    <main className="flex gap-5 min-h-screen flex-col items-center justify-between p-[1rem] ">
      <div className="top-header">
        <h1 className="top-heading">Choose Your Right Plan!</h1>
        <p className="topdescptn">
          Select From Best Plans, Ensuring a perfect Match. Need more or less ?{" "}
          <br />
          Customize your subscription for a seamless fit.
        </p>
        <div className="top-btns">
          <button
            className={pricingplan === "monthly" ? "active-btn" : "top-btn "}
            onClick={() => setPricing("monthly")}
          >
            Monthly
          </button>
          <button
            className={pricingplan === "quaterly" ? "active-btn" : " top-btn"}
            onClick={() => setPricing("quaterly")}
          >
            Quaterly(save 10%)
          </button>
        </div>
      </div>
      <div className="cards-container">
        {packages.map((item, i) => {
          return <PricingPackage data={item} key={i} />;
        })}
      </div>
    </main>
  );
}

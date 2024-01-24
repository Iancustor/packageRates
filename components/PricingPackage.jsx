import React from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

function PricingPackage({ data }) {
  console.log(data);
  const { isRecommended } = data;
  return (
    <div>
      <div className={isRecommended ? "active-card " : "card"}>
        <h1 className={isRecommended ? "active-card-heading" : "card-heading "}>
          {" "}
          {data.name}
        </h1>
        <p className="card-desptn">{data.tagline}</p>
        <p className="card-price">
          {data.price} <small>/ month</small>
        </p>
        <hr />
        <div className="supported-features">
          {data.supportedFeatures.map((item, i) => {
            return (
              <li key={i}>
                <CheckCircle2 /> {item}
              </li>
            );
          })}
        </div>
        <div className="card-btns">
          <button className={isRecommended ? "active-card-btn" : "card-btn "}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingPackage;

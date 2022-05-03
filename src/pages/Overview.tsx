import React from "react";
import { FC, useState } from "react";
import DataList from "../components/DataList";

export const Home1: FC = (props) => {
  const [demoData, setDemoData] = useState([]);

  async function fetchDemoDataHandler() {
    const response = await fetch(
      "https://run.mocky.io/v3/224df482-0984-432f-a0c7-cd192e314f27"
    );
    const data = await response.json();
    const transformedData = data.data.map((demoData: any) => {
      return {
        name: demoData.name,
        children: demoData.children,
      };
    });
    console.log(transformedData);
    setDemoData(transformedData);
  }

  return (
    <div className="overview">
      Home
      <div>
        <section>
          <button onClick={fetchDemoDataHandler}>API</button>
        </section>
        <section>
          <DataList demoData={demoData} />
        </section>
      </div>
    </div>
  );
};

export const Child11: FC = () => {
  return <div className="overview">Child11</div>;
};

export const Child111: FC = () => {
  return <div className="overview">Child111</div>;
};

export const Child12: FC = () => {
  return <div className="overview">Child12</div>;
};

export const Child13: FC = () => {
  return <div className="overview">Child13</div>;
};

export const Child131: FC = () => {
  return <div className="overview">Child131</div>;
};

export const Child14: FC = () => {
  return <div className="overview">Child14</div>;
};

export const Home2: FC = () => {
  return <div className="overview">Home2</div>;
};

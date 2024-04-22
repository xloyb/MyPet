import React from "react";

import Card from "../ui/dashboard/card/card";
import styles from "./dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import PetsList from "./petslist/page";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card img="/images/index494ac568.png" />
          <Card img="/images/xLoyMybb.5944be68.png" />
          <Card img="/images/xLoySEO.2ecc7aa8.png" />
        </div>
        <Chart />

        <PetsList dashboard="true" />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;

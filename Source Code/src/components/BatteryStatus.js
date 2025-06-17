import React, { useEffect, useState } from "react";
import 'animate.css'; 

export const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState("Unknown");
  const [isCharging, setIsCharging] = useState("Unknown");

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBatteryStatus = () => {
          setBatteryLevel("[" + Math.round(battery.level * 100) + "%]");
          setIsCharging(battery.charging ? "[In progress]" : "[Not Active]");
        };

        updateBatteryStatus();

        battery.addEventListener("levelchange", updateBatteryStatus);
        battery.addEventListener("chargingchange", updateBatteryStatus);

        return () => {
          battery.removeEventListener("levelchange", updateBatteryStatus);
          battery.removeEventListener("chargingchange", updateBatteryStatus);
        };
      });
    } else {
      setBatteryLevel("Not Supported");
      setIsCharging("Not Supported");
    }
  }, []);

  return (
    <div className="battery-status">
      <p>Battery Level: <span>{batteryLevel}</span></p>
      <p>Charging: <span>{isCharging}</span></p>
    </div>
  );
};

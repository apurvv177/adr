import React from "react";
import { SupplySection } from "./sections/SupplySection/SupplySection";

export const BoatUsersView = (): JSX.Element => {
  const notificationBadges = [
    {
      top: "top-[527px]",
      left: "left-[1342px]",
      zIndex: "z-[4]",
      value: "4",
    },
    {
      top: "top-[637px]",
      left: "left-[1323px]",
      zIndex: "z-[3]",
      value: "2",
    },
    {
      top: "top-[802px]",
      left: "left-[1323px]",
      zIndex: "z-[2]",
      value: "8",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start relative bg-[#0f0f0f]">
      <img
        className="absolute w-6 h-6 top-[814px] left-[1327px] z-[5]"
        alt="Cursor fill"
        src="/cursor-fill.svg"
      />

      {notificationBadges.map((badge, index) => (
        <div
          key={`notification-${index}`}
          className={`inline-flex items-center gap-1 px-2 py-0.5 absolute ${badge.top} ${badge.left} ${badge.zIndex} bg-[#fda560] rounded-[100px]`}
        >
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#0f0f0f] text-[11px] leading-[11px]">
            <span className="font-[number:var(--body-normal-xsmall-font-weight)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] font-body-normal-xsmall [font-style:var(--body-normal-xsmall-font-style)] text-[length:var(--body-normal-xsmall-font-size)]">
              {badge.value}
            </span>
          </div>
        </div>
      ))}

      <SupplySection />
    </div>
  );
};

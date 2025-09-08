import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { CustomerInfoSection } from "./sections/CustomerInfoSection/CustomerInfoSection";
import { AccountDetailsSection } from "./sections/AccountDetailsSection/AccountDetailsSection";
import { ActivitySection } from "./sections/ActivitySection/ActivitySection";

export const CustomerAccountView = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <HeaderSection />
      <div className="flex-1 p-6 space-y-6">
        <CustomerInfoSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AccountDetailsSection />
          <ActivitySection />
        </div>
      </div>
    </div>
  );
};
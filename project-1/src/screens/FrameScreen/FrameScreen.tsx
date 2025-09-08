import React from "react";
import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { ChangeLogSection } from "./sections/ChangeLogSection/ChangeLogSection";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { PageHeaderSubsection } from "./sections/PageHeaderSubsection/PageHeaderSubsection";
import { PaginationWrapperSubsection } from "./sections/PaginationWrapperSubsection/PaginationWrapperSubsection";
import { RouterDetailScreen } from "../RouterDetailScreen/RouterDetailScreen";

export const FrameScreen = (): JSX.Element => {
  const [currentView, setCurrentView] = useState<'main' | 'router-detail'>('main');
  const [selectedRouterId, setSelectedRouterId] = useState<number>(1);

  const filterBadges = [
    { label: "HLS", value: "10" },
    { label: "DASH", value: "5" },
    { label: "SSAI enabled", value: "10" },
  ];

  const handleRouterClick = (routerId: number) => {
    setSelectedRouterId(routerId);
    setCurrentView('router-detail');
  };

  const handleBackToRouters = () => {
    setCurrentView('main');
  };

  if (currentView === 'router-detail') {
    return (
      <RouterDetailScreen 
        onBack={handleBackToRouters}
        routerId={selectedRouterId}
      />
    );
  }

  return (
    <div className="flex flex-col items-start gap-4 p-4 relative w-full min-h-screen bg-[#0a0a0a]">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="bg-transparent border-0 p-0 h-auto mb-6">
          <TabsTrigger 
            value="dashboard"
            className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] px-0 py-3 rounded-none border-b-2 border-transparent hover:text-[#e7e7e7] transition-colors mr-8"
          >
            Dashboard
          </TabsTrigger>
          <TabsTrigger 
            value="midroll-routers"
            className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] px-0 py-3 rounded-none border-b-2 border-transparent hover:text-[#e7e7e7] transition-colors"
          >
            Routers
          </TabsTrigger>
          <TabsTrigger 
            value="reporting"
            className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] px-0 py-3 rounded-none border-b-2 border-transparent hover:text-[#e7e7e7] transition-colors ml-8"
          >
            Reporting
          </TabsTrigger>
          <TabsTrigger 
            value="changelogs"
            className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] px-0 py-3 rounded-none border-b-2 border-transparent hover:text-[#e7e7e7] transition-colors ml-8"
          >
            ChangeLogs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-0 space-y-4">
          <DashboardSection />
        </TabsContent>

        <TabsContent value="midroll-routers" className="mt-0 space-y-4">
          <PageHeaderSubsection />
          
          <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
            {filterBadges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1 px-3 py-1 rounded-[18px] border-[#ffffff33] bg-transparent text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] hover:bg-transparent"
              >
                <span className="whitespace-nowrap">{badge.label}</span>
                <span className="whitespace-nowrap">:</span>
                <span className="whitespace-nowrap">{badge.value}</span>
              </Badge>
            ))}
          </div>

          <FrameSubsection onRouterClick={handleRouterClick} />
          <PaginationWrapperSubsection />
        </TabsContent>

        <TabsContent value="reporting" className="mt-0 space-y-4">
          <div className="flex items-center justify-center h-64">
            <p className="text-[#999999] font-body-normal-default">Reporting content coming soon...</p>
          </div>
        </TabsContent>

        <TabsContent value="changelogs" className="mt-0 space-y-4">
          <ChangeLogSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};
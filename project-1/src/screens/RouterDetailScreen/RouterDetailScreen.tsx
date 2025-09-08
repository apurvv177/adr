import React, { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { RouterSettingsPanel } from "../../components/RouterSettingsPanel/RouterSettingsPanel";

interface RouterDetailScreenProps {
  onBack: () => void;
  routerId: number;
}

export const RouterDetailScreen = ({ onBack, routerId }: RouterDetailScreenProps): JSX.Element => {
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

  // Mock router data based on the routerId
  const getRouterData = (id: number) => {
    const routers = [
      { id: 1, name: "Fun Kids", platform: "LG", region: "United States" },
      { id: 2, name: "Animal Planet", platform: "Roku", region: "United Kingdom" },
      { id: 3, name: "Discovery Go", platform: "Plex", region: "United Kingdom" },
      { id: 4, name: "Cartoon Network", platform: "Fubo", region: "United Kingdom" },
      { id: 5, name: "Discovery Kids", platform: "Fubo", region: "United States" },
      { id: 6, name: "Discovery", platform: "Dish TV", region: "United States" },
      { id: 7, name: "CNN International", platform: "Dish TV", region: "Canada" },
      { id: 8, name: "Cartoon Network HD+", platform: "Freevee", region: "Australia" },
      { id: 9, name: "Discovery Turbo", platform: "Freevee", region: "United States" },
      { id: 10, name: "Investigation Discovery", platform: "Dish TV", region: "Australia" },
    ];
    return routers.find(r => r.id === id) || routers[0];
  };

  const router = getRouterData(routerId);

  return (
    <div className="flex flex-col items-start gap-4 p-4 relative w-full min-h-screen bg-[#0a0a0a]">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 w-full">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center gap-2 text-[#e7e7e7] hover:bg-[#ffffff12] p-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Routers
        </Button>
      </div>

      {/* Router Title */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-headings-h1 font-[number:var(--headings-h1-font-weight)] text-white text-[length:var(--headings-h1-font-size)] tracking-[var(--headings-h1-letter-spacing)] leading-[var(--headings-h1-line-height)] [font-style:var(--headings-h1-font-style)]">
            {router.name} - {router.platform}
          </h1>
          <p className="text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)]">
            Router ID: {routerId} • Region: {router.region}
          </p>
        </div>
        
        <Button
          onClick={() => setIsSettingsPanelOpen(true)}
          className="bg-[#fda560] hover:bg-[#fd9540] text-[#0a0a0a] font-body-bold-default"
        >
          Router Settings
        </Button>
      </div>

      {/* Router Detail Content */}
      <div className="w-full bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
        {/* Basic Information - Compact Layout */}
        <div className="max-w-2xl">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3 text-sm">
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Router ID:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">123982</span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Amagi ID:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">AMG13131</span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Deal Type:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">Inventory Split</span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">SSAI version:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">TSv3</span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Macros:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">20</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Router URI:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2 truncate block max-w-[200px]">
                https://vast.example.com/api/v1/router/123982/vast?param1=value1&param2=value2...
              </span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Adplus:</span>
              <span className="text-[#00ff00] font-body-normal-default font-semibold ml-2">Enabled</span>
            </div>
            <div>
              <span className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">Deal source:</span>
              <span className="text-[#e7e7e7] font-body-normal-default ml-2">Connect</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 pt-6 border-t border-[#ffffff14]">
          <div className="max-w-md">
            <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-3">
              Performance Metrics
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Total Viewership
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">1.15 M mins</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Impressions
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">63.43 M</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Fill Rate
                </label>
                <p className="text-[#82c77f] font-body-normal-default">92%</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Timeout Rate
                </label>
                <p className="text-[#f1b521] font-body-normal-default">3.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details Section */}
        <div className="mt-6 pt-6 border-t border-[#ffffff14]">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Technical Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Max Pod Duration
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">2900 ms</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Timeout
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">2900 ms</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Wrapper Timeout
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">2500 ms</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Parallel Unwrap Factor
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">3</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Strategy
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">Parallel</p>
              </div>
              <div>
                <label className="text-[#999999] font-body-normal-small text-[length:var(--body-normal-small-font-size)]">
                  Response Order
                </label>
                <p className="text-[#e7e7e7] font-body-normal-default">All</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Router Settings Panel */}
      <RouterSettingsPanel 
        isOpen={isSettingsPanelOpen} 
        onClose={() => setIsSettingsPanelOpen(false)} 
      />
    </div>
  );
};
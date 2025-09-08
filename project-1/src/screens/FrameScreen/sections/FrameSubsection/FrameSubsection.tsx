import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronRightIcon,
  ColumnsIcon,
  DollarSignIcon,
  DownloadIcon,
  FilterIcon,
  PieChartIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

interface FrameSubsectionProps {
  onRouterClick: (routerId: number) => void;
}

const initialTableData = [
  {
    id: 1,
    checked: true,
    channel: { name: "Fun Kids", image: "/image.png" },
    platform: { name: "LG", image: "/image-10.png" },
    region: "United States",
    streamType: "HLS",
    zSlate: "enabled",
    amagiSSAI: "enabled",
    dealType: "inv-share",
    viewership: { value: "1.15 M", change: 9, trend: "up" },
    impressions: { value: "63.43 M", change: 9, trend: "up" },
  },
  {
    id: 2,
    checked: true,
    channel: { name: "Animal Planet", image: "/image-1.png" },
    platform: { name: "Roku", image: "/image-11.png" },
    region: "United Kingdom",
    streamType: "HLS",
    zSlate: "not-enabled",
    amagiSSAI: "enabled",
    dealType: "inv-share",
    viewership: { value: "1.15 M", change: 5, trend: "down" },
    impressions: { value: "63.43 M", change: 5, trend: "down" },
  },
  {
    id: 3,
    checked: false,
    channel: { name: "Discovery Go", image: "/image-2.png" },
    platform: { name: "Plex", image: "/image-12.png" },
    region: "United Kingdom",
    streamType: "HLS",
    zSlate: "not-applicable",
    amagiSSAI: "enabled",
    dealType: "rev-share",
    viewership: { value: "1.15 M", change: 9, trend: "up" },
    impressions: { value: "9.71 M", change: 9, trend: "up" },
  },
  {
    id: 4,
    checked: false,
    channel: { name: "Cartoon Network", image: "/image-3.png" },
    platform: { name: "Fubo", image: "/image-14.png" },
    region: "United Kingdom",
    streamType: "HLS",
    zSlate: "not-applicable",
    amagiSSAI: "enabled",
    dealType: "inv-share",
    viewership: { value: "1.50 M", change: 9, trend: "down" },
    impressions: { value: "9.71 M", change: 9, trend: "down" },
  },
  {
    id: 5,
    checked: true,
    channel: { name: "Discovery Kids", image: "/image-4.png" },
    platform: { name: "Fubo", image: "/image-14.png" },
    region: "United States",
    streamType: "HLS",
    zSlate: "not-applicable",
    amagiSSAI: "not-enabled",
    dealType: "not-applicable",
    viewership: { value: "-", change: null, trend: null },
    impressions: { value: "-", change: null, trend: null },
  },
  {
    id: 6,
    checked: false,
    channel: { name: "Discovery", image: "/image-5.png" },
    platform: { name: "Dish TV", image: "/image-19.png" },
    region: "United States",
    streamType: "DASH",
    zSlate: "not-enabled",
    amagiSSAI: "enabled",
    dealType: "rev-share",
    viewership: { value: "1.74 M", change: 9, trend: "up" },
    impressions: { value: "7.23 M", change: 9, trend: "up" },
  },
  {
    id: 7,
    checked: true,
    channel: { name: "CNN International", image: "/image-6.png" },
    platform: { name: "Dish TV", image: "/image-19.png" },
    region: "Canada",
    streamType: "HLS",
    zSlate: "not-applicable",
    amagiSSAI: "not-enabled",
    dealType: "not-applicable",
    viewership: { value: "-", change: null, trend: null },
    impressions: { value: "-", change: null, trend: null },
  },
  {
    id: 8,
    checked: false,
    channel: { name: "Cartoon Network HD+", image: "/image-7.png" },
    platform: { name: "Freevee", image: "/image-18.png" },
    region: "Australia",
    streamType: "HLS",
    zSlate: "enabled",
    amagiSSAI: "enabled",
    dealType: "rev-share",
    viewership: { value: "2.40 M", change: 9, trend: "up" },
    impressions: { value: "7.12 M", change: 9, trend: "up" },
  },
  {
    id: 9,
    checked: false,
    channel: { name: "Discovery Turbo", image: "/image-8.png" },
    platform: { name: "Freevee", image: "/image-18.png" },
    region: "United States",
    streamType: "DASH",
    zSlate: "enabled",
    amagiSSAI: "enabled",
    dealType: "rev-share",
    viewership: { value: "7.20 M", change: 9, trend: "up" },
    impressions: { value: "7.12 M", change: 9, trend: "up" },
  },
  {
    id: 10,
    checked: false,
    channel: { name: "Investigation Discovery", image: "/image-9.png" },
    platform: { name: "Dish TV", image: "/image-19.png" },
    region: "Australia",
    streamType: "HLS",
    zSlate: "enabled",
    amagiSSAI: "enabled",
    dealType: "rev-share",
    viewership: { value: "7.20 M", change: 9, trend: "up" },
    impressions: { value: "6.99 M", change: 9, trend: "up" },
  },
];

export const FrameSubsection = ({ onRouterClick }: FrameSubsectionProps): JSX.Element => {
  const [tableData, setTableData] = useState(initialTableData);
  const [selectAll, setSelectAll] = useState(false);

  const handleRowCheckboxChange = (id: number) => {
    setTableData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };

  const handleRowClick = (id: number) => {
    onRouterClick(id);
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTableData(prevData =>
      prevData.map(row => ({ ...row, checked: newSelectAll }))
    );
  };

  // Update selectAll state based on individual row selections
  React.useEffect(() => {
    const allChecked = tableData.every(row => row.checked);
    const someChecked = tableData.some(row => row.checked);
    setSelectAll(allChecked);
  }, [tableData]);

  return (
    <div className="flex flex-col items-center self-stretch w-full bg-[#1e1e1e] rounded-lg border border-solid border-[#ffffff1f] relative flex-[0_0_auto]">
      <header className="flex flex-col h-14 items-start relative self-stretch w-full bg-[#1e1e1e] rounded-[8px_8px_0px_0px]">
        <div className="flex items-center gap-4 px-4 py-3 relative flex-1 self-stretch w-full grow">
          <div className="flex items-center gap-2 relative flex-1 grow">
            <Button
              variant="secondary"
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 h-auto bg-[#ffffff14] rounded text-[#e7e7e7] hover:bg-[#ffffff20] border-0"
            >
              <span className="font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] [font-style:var(--body-bold-default-font-style)]">
                Actions
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>

            <span className="font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[#999999] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]">
              {tableData.filter(row => row.checked).length} selected
            </span>

            <div className="w-px h-2 bg-[#999999]" />

            <span className="font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[#999999] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]">
              100 Routers
            </span>
          </div>

          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="flex w-[291px] items-start relative">
              <div className="flex flex-1 grow items-center gap-2 px-3 py-1.5 relative bg-[#ffffff08] rounded border border-solid border-[#ffffff33]">
                <SearchIcon className="w-4 h-4 text-[#616161]" />
                <Input
                  placeholder="Search"
                  className="flex-1 h-5 bg-transparent border-0 text-[#616161] placeholder:text-[#616161] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                />
              </div>
            </div>

            <Button
              variant="secondary"
              size="icon"
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 h-auto bg-[#ffffff14] rounded hover:bg-[#ffffff20] border-0"
            >
              <FilterIcon className="w-5 h-5 text-[#e7e7e7]" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 h-auto bg-[#ffffff14] rounded hover:bg-[#ffffff20] border-0"
            >
              <DownloadIcon className="w-5 h-5 text-[#e7e7e7]" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 h-auto bg-[#ffffff14] rounded hover:bg-[#ffffff20] border-0"
            >
              <ColumnsIcon className="w-5 h-5 text-[#e7e7e7]" />
            </Button>
          </div>
        </div>
      </header>

      <div className="overflow-x-auto w-full">
        <div className="min-w-max">
          {/* Table Header */}
          <div className="flex bg-[#272727] border-b border-[#ffffff14]">
            <div className="w-[60px] px-4 py-2.5 border-r border-[#ffffff14]">
              <Checkbox
                className="bg-[#fda560] border-[#fda560] data-[state=checked]:bg-[#fda560] data-[state=checked]:border-[#fda560] w-4 h-4 rounded-sm"
                checked={selectAll}
                onCheckedChange={handleSelectAllChange}
              />
            </div>
            <div className="w-[221px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                CHANNELS
              </h3>
            </div>
            <div className="w-[199px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                PLATFORMS
              </h3>
            </div>
            <div className="w-[148px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                REGION
              </h3>
            </div>
            <div className="w-[140px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                STREAM TYPE
              </h3>
            </div>
            <div className="w-[160px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                Z-SLATE
              </h3>
            </div>
            <div className="w-[140px] px-4 py-2.5 border-r border-[#ffffff14]">
              <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                DEAL TYPE
              </h3>
            </div>
            <div className="w-[193px] px-4 py-2.5 border-r border-[#ffffff14]">
              <div className="flex items-center justify-end gap-2">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  TOTAL VIEWERSHIP MINS
                </h3>
                <ArrowDownIcon className="w-4 h-4 text-[#999999]" />
              </div>
            </div>
            <div className="w-[193px] px-4 py-2.5">
              <h3 className="text-right font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                IMPRESSIONS
              </h3>
            </div>
          </div>

          {/* Table Body */}
          {tableData.map((row) => (
            <div 
              key={row.id} 
              className="flex border-b border-[#ffffff14] hover:bg-[#ffffff08] transition-colors cursor-pointer"
              onClick={() => handleRowClick(row.id)}
            >
              <div className="w-[60px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                <Checkbox
                  className={`w-4 h-4 rounded-sm ${row.checked ? "bg-[#fda560] border-[#fda560] data-[state=checked]:bg-[#fda560] data-[state=checked]:border-[#fda560]" : "bg-[#ffffff08] border-[#ffffff33]"}`}
                  checked={row.checked}
                  onCheckedChange={(e) => {
                    e?.stopPropagation?.();
                    handleRowCheckboxChange(row.id);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="w-[221px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.channel.name}
                </span>
              </div>
              <div className="w-[199px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.platform.name}
                </span>
              </div>
              <div className="w-[148px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.region}
                </span>
              </div>
              <div className="w-[140px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.streamType}
                </span>
              </div>
              <div className="w-[160px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                {row.zSlate === "enabled" && (
                  <div className="inline-flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#82c77f]" />
                    <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                      Enabled
                    </span>
                  </div>
                )}
                {row.zSlate === "not-enabled" && (
                  <div className="inline-flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#ff6961]" />
                    <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                      Not Enabled
                    </span>
                  </div>
                )}
                {row.zSlate === "not-applicable" && (
                  <span className="text-[#616161] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    Not Applicable
                  </span>
                )}
              </div>
              <div className="w-[140px] px-4 py-3 border-r border-[#ffffff14] flex items-center">
                {row.dealType === "inv-share" && (
                  <div className="inline-flex items-center gap-2">
                    <PieChartIcon className="w-5 h-5 text-[#e7e7e7]" />
                    <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                      Inv. share
                    </span>
                  </div>
                )}
                {row.dealType === "rev-share" && (
                  <div className="inline-flex items-center gap-2">
                    <DollarSignIcon className="w-5 h-5 text-[#e7e7e7]" />
                    <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                      Rev. share
                    </span>
                  </div>
                )}
                {row.dealType === "not-applicable" && (
                  <span className="text-[#616161] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    Not Applicable
                  </span>
                )}
              </div>
              <div className="w-[193px] px-4 py-3 border-r border-[#ffffff14] flex items-center justify-end gap-2">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.viewership.value}
                </span>
                {row.viewership.change && (
                  <div className="inline-flex items-center">
                    {row.viewership.trend === "up" ? (
                      <ArrowUpIcon className="w-3 h-3 text-[#82c77f]" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 text-[#ff6961]" />
                    )}
                    <span
                      className={`text-[length:var(--body-normal-xsmall-font-size)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] font-body-normal-xsmall font-[number:var(--body-normal-xsmall-font-weight)] [font-style:var(--body-normal-xsmall-font-style)] ${
                        row.viewership.trend === "up"
                          ? "text-[#82c77f]"
                          : row.viewership.trend === "down" &&
                              row.viewership.change === 5
                            ? "text-[#f1b521]"
                            : "text-[#ff6961]"
                      }`}
                    >
                      {row.viewership.change}%
                    </span>
                  </div>
                )}
              </div>
              <div className="w-[193px] px-4 py-3 flex items-center justify-end gap-2">
                <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                  {row.impressions.value}
                </span>
                {row.impressions.change && (
                  <div className="inline-flex items-center">
                    {row.impressions.trend === "up" ? (
                      <ArrowUpIcon className="w-3 h-3 text-[#82c77f]" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 text-[#ff6961]" />
                    )}
                    <span
                      className={`text-[length:var(--body-normal-xsmall-font-size)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] font-body-normal-xsmall font-[number:var(--body-normal-xsmall-font-weight)] [font-style:var(--body-normal-xsmall-font-style)] ${
                        row.impressions.trend === "up"
                          ? "text-[#82c77f]"
                          : row.impressions.trend === "down" &&
                              row.impressions.change === 5
                            ? "text-[#f1b521]"
                            : "text-[#ff6961]"
                      }`}
                    >
                      {row.impressions.change}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

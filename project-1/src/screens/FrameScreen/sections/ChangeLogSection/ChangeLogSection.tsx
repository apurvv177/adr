import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const generateChangeLogData = () => {
  const changeObjects = ["Router", "Supply", "Demand"];
  const changeTypes = ["Timeout", "Wrappers", "Tag URL", "Configuration", "Bidding", "Creative", "Targeting"];
  const companies = [
    "Vevo-Samsung", "Discovery-LG", "CNN-Roku", "MTV-Apple", "ESPN-Sony", 
    "HBO-TCL", "Netflix-Hisense", "Disney-Panasonic", "Warner-Sharp", "Universal-Philips"
  ];
  const emails = [
    "john.doe@company.com", "sarah.smith@company.com", "mike.johnson@company.com",
    "emily.davis@company.com", "alex.wilson@company.com", "lisa.brown@company.com",
    "david.miller@company.com", "anna.garcia@company.com", "chris.taylor@company.com",
    "jessica.anderson@company.com"
  ];

  return Array.from({ length: 10 }, (_, i) => {
    const now = new Date();
    const randomHours = Math.floor(Math.random() * 72); // Last 3 days
    const changeDate = new Date(now.getTime() - randomHours * 60 * 60 * 1000);
    
    return {
      id: 1000 + i,
      timestamp: changeDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }),
      changeObject: changeObjects[Math.floor(Math.random() * changeObjects.length)],
      changeType: changeTypes[Math.floor(Math.random() * changeTypes.length)],
      name: companies[i],
      previousValue: Math.random() > 0.5 ? `${Math.floor(Math.random() * 100)}s` : `${Math.floor(Math.random() * 1000)}ms`,
      newValue: Math.random() > 0.5 ? `${Math.floor(Math.random() * 100)}s` : `${Math.floor(Math.random() * 1000)}ms`,
      changedBy: emails[i]
    };
  });
};

export const ChangeLogSection = (): JSX.Element => {
  const [changeLogData] = useState(generateChangeLogData());
  const [selectedDateRange, setSelectedDateRange] = useState("today");

  const dateRangeOptions = [
    { value: "yesterday", label: "Yesterday" },
    { value: "today", label: "Today" },
    { value: "last-week", label: "Last Week" },
    { value: "last-month", label: "Last Month" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Header with Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)]">
            Date Range:
          </span>
          <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
            <SelectTrigger className="w-[150px] bg-[#ffffff08] border-[#ffffff33] text-[#e7e7e7] hover:bg-[#ffffff12]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-[#ffffff33]">
              {dateRangeOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="text-[#e7e7e7] hover:bg-[#ffffff12]"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-[291px] items-start">
          <div className="flex flex-1 grow items-center gap-2 px-3 py-1.5 bg-[#ffffff08] rounded border border-solid border-[#ffffff33]">
            <SearchIcon className="w-4 h-4 text-[#616161]" />
            <Input
              placeholder="Search changes..."
              className="flex-1 h-5 bg-transparent border-0 text-[#616161] placeholder:text-[#616161] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            />
          </div>
        </div>
      </div>

      {/* ChangeLogs Table */}
      <div className="bg-[#1e1e1e] rounded-lg border border-solid border-[#ffffff1f] overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-max">
            {/* Table Header */}
            <div className="flex bg-[#272727] border-b border-[#ffffff14]">
              <div className="w-[180px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  CHANGE TIMESTAMP
                </h3>
              </div>
              <div className="w-[120px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  CHANGE OBJECT
                </h3>
              </div>
              <div className="w-[140px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  CHANGE TYPE
                </h3>
              </div>
              <div className="w-[160px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  NAME
                </h3>
              </div>
              <div className="w-[80px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  ID
                </h3>
              </div>
              <div className="w-[140px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  PREVIOUS VALUE
                </h3>
              </div>
              <div className="w-[140px] px-4 py-2.5 border-r border-[#ffffff14]">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  NEW VALUE
                </h3>
              </div>
              <div className="w-[200px] px-4 py-2.5">
                <h3 className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                  CHANGE DONE BY
                </h3>
              </div>
            </div>

            {/* Table Body */}
            {changeLogData.map((row) => (
              <div key={row.id} className="flex border-b border-[#ffffff14] hover:bg-[#ffffff08] transition-colors">
                <div className="w-[180px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.timestamp}
                  </span>
                </div>
                <div className="w-[120px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.changeObject}
                  </span>
                </div>
                <div className="w-[140px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.changeType}
                  </span>
                </div>
                <div className="w-[160px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.name}
                  </span>
                </div>
                <div className="w-[80px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.id}
                  </span>
                </div>
                <div className="w-[140px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.previousValue}
                  </span>
                </div>
                <div className="w-[140px] px-4 py-3 border-r border-[#ffffff14]">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.newValue}
                  </span>
                </div>
                <div className="w-[200px] px-4 py-3">
                  <span className="text-[#e7e7e7] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                    {row.changedBy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
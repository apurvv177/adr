import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

// Sample data for charts
const generateTimeSeriesData = (baseValue: number, variance: number = 0.2) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return hours.map(hour => ({
    time: `${hour.toString().padStart(2, '0')}:00`,
    value: Math.round(baseValue * (1 + (Math.random() - 0.5) * variance * 2)),
  }));
};

const impressionsData = generateTimeSeriesData(850000, 0.3);
const hovData = generateTimeSeriesData(75, 0.4);
const fillRatePodData = generateTimeSeriesData(85, 0.2);
const fillRateRequestData = generateTimeSeriesData(92, 0.15);
const errorsData = generateTimeSeriesData(12, 0.8);

export const DashboardSection = (): JSX.Element => {
  const [selectedDeliveries, setSelectedDeliveries] = useState<string[]>(["delivery-1"]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("today");

  const deliveryOptions = Array.from({ length: 10 }, (_, i) => ({
    value: `delivery-${i + 1}`,
    label: `Delivery ${i + 1}`,
  }));

  const timeRangeOptions = [
    { value: "yesterday", label: "Yesterday" },
    { value: "today", label: "Today" },
    { value: "last-week", label: "Last Week" },
    { value: "last-month", label: "Last Month" },
    { value: "custom", label: "Custom" },
  ];

  const chartConfig = {
    height: 300,
    margin: { top: 20, right: 30, left: 20, bottom: 20 },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#2a2a2a] border border-[#ffffff33] rounded-lg p-3 shadow-lg">
          <p className="text-[#e7e7e7] font-body-normal-default mb-1">{`Time: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-[#e7e7e7] font-body-normal-default">
              {`Value: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Controls Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)]">
            Delivery:
          </span>
          <Select value={selectedDeliveries[0]} onValueChange={(value) => setSelectedDeliveries([value])}>
            <SelectTrigger className="w-[180px] bg-[#ffffff08] border-[#ffffff33] text-[#e7e7e7] hover:bg-[#ffffff12]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-[#ffffff33]">
              <SelectItem value="select-all" className="text-[#e7e7e7] hover:bg-[#ffffff12]">
                Select All
              </SelectItem>
              {deliveryOptions.map((option) => (
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

        <div className="flex items-center gap-2">
          <span className="text-[#999999] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[length:var(--body-normal-default-font-size)]">
            Time Range:
          </span>
          <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="w-[150px] bg-[#ffffff08] border-[#ffffff33] text-[#e7e7e7] hover:bg-[#ffffff12]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-[#ffffff33]">
              {timeRangeOptions.map((option) => (
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
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Impressions Chart */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Impressions vs Time
          </h3>
          <ResponsiveContainer width="100%" height={chartConfig.height}>
            <LineChart data={impressionsData} margin={chartConfig.margin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff14" />
              <XAxis 
                dataKey="time" 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#fda560" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#fda560" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* HoV Chart */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            HoV vs Time
          </h3>
          <ResponsiveContainer width="100%" height={chartConfig.height}>
            <LineChart data={hovData} margin={chartConfig.margin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff14" />
              <XAxis 
                dataKey="time" 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#82c77f" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#82c77f" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fill Rate (Pod Time) Chart */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Fill Rate (Pod Time) vs Time
          </h3>
          <ResponsiveContainer width="100%" height={chartConfig.height}>
            <LineChart data={fillRatePodData} margin={chartConfig.margin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff14" />
              <XAxis 
                dataKey="time" 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6366f1" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#6366f1" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Fill Rate (Return/Request Count) Chart */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Fill Rate (Return/Request Count) vs Time
          </h3>
          <ResponsiveContainer width="100%" height={chartConfig.height}>
            <LineChart data={fillRateRequestData} margin={chartConfig.margin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff14" />
              <XAxis 
                dataKey="time" 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#f59e0b" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Errors Chart - Full Width */}
        <div className="lg:col-span-2 bg-[#1e1e1e] rounded-lg border border-[#ffffff1f] p-6">
          <h3 className="text-[#e7e7e7] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[length:var(--body-bold-default-font-size)] mb-4">
            Errors Encountered vs Time
          </h3>
          <ResponsiveContainer width="100%" height={chartConfig.height}>
            <LineChart data={errorsData} margin={chartConfig.margin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff14" />
              <XAxis 
                dataKey="time" 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#999999" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#ff6961" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#ff6961" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
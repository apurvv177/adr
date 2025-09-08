import React from "react";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  User, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Heart,
  Clock,
  Target
} from "lucide-react";

export const AccountDetailsSection = (): JSX.Element => {
  const accountMetrics = [
    {
      label: "Account Balance",
      value: "$245.80",
      icon: DollarSign,
      trend: "+12.5%",
      trendUp: true,
    },
    {
      label: "Orders This Month",
      value: "8",
      icon: Package,
      trend: "+25%",
      trendUp: true,
    },
    {
      label: "Avg. Order Value",
      value: "$67.25",
      icon: TrendingUp,
      trend: "-5.2%",
      trendUp: false,
    },
    {
      label: "Last Login",
      value: "2 hours ago",
      icon: Clock,
      trend: "Active",
      trendUp: true,
    },
  ];

  const preferences = [
    { label: "Email Notifications", enabled: true },
    { label: "SMS Updates", enabled: false },
    { label: "Marketing Communications", enabled: true },
    { label: "Product Recommendations", enabled: true },
  ];

  return (
    <div className="space-y-6">
      {/* Account Metrics */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Target className="h-5 w-5 mr-2" />
            Account Metrics
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {accountMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="h-5 w-5 text-gray-600" />
                <span className={`text-sm font-medium ${
                  metric.trendUp ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.trend}
                </span>
              </div>
              <div className="font-bold text-xl text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Account Preferences */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <User className="h-5 w-5 mr-2" />
            Preferences
          </h3>
          <Button variant="outline" size="sm">
            Edit All
          </Button>
        </div>
        
        <div className="space-y-3">
          {preferences.map((preference, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">{preference.label}</span>
              <Badge 
                variant="secondary" 
                className={preference.enabled 
                  ? "bg-green-100 text-green-800" 
                  : "bg-gray-100 text-gray-600"
                }
              >
                {preference.enabled ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="justify-start">
            <Heart className="h-4 w-4 mr-2" />
            Add to VIP
          </Button>
          <Button variant="outline" className="justify-start">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Call
          </Button>
          <Button variant="outline" className="justify-start">
            <Package className="h-4 w-4 mr-2" />
            Process Return
          </Button>
          <Button variant="outline" className="justify-start">
            <DollarSign className="h-4 w-4 mr-2" />
            Issue Refund
          </Button>
        </div>
      </Card>
    </div>
  );
};
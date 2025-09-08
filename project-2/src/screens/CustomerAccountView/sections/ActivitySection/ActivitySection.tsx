import React from "react";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { ShoppingBag, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

export const ActivitySection = (): JSX.Element => {
  const recentOrders = [
    {
      id: "#ORD-2024-156",
      date: "Jan 28, 2025",
      amount: "$89.99",
      status: "Delivered",
      items: "3 items",
    },
    {
      id: "#ORD-2024-142",
      date: "Jan 22, 2025",
      amount: "$156.50",
      status: "Processing",
      items: "2 items",
    },
    {
      id: "#ORD-2024-128",
      date: "Jan 18, 2025",
      amount: "$45.00",
      status: "Delivered",
      items: "1 item",
    },
  ];

  const supportTickets = [
    {
      id: "#TKT-2024-089",
      subject: "Product return inquiry",
      date: "Jan 26, 2025",
      status: "Open",
      priority: "Medium",
    },
    {
      id: "#TKT-2024-076",
      subject: "Billing question",
      date: "Jan 20, 2025",
      status: "Resolved",
      priority: "Low",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
      case "resolved":
        return "bg-green-100 text-green-800";
      case "processing":
      case "open":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orders" className="flex items-center space-x-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Recent Orders</span>
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4" />
            <span>Support Tickets</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-3">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-600">{order.date} • {order.items}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-semibold text-gray-900">{order.amount}</div>
                    <Badge variant="secondary" className={getStatusColor(order.status)}>
                      {order.status === "Delivered" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {order.status === "Processing" && <AlertCircle className="h-3 w-3 mr-1" />}
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="support" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Support Tickets</h3>
              <Button variant="outline" size="sm">
                New Ticket
              </Button>
            </div>
            
            <div className="space-y-3">
              {supportTickets.map((ticket, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900">{ticket.id}</div>
                    <div className="text-sm text-gray-900">{ticket.subject}</div>
                    <div className="text-sm text-gray-600">{ticket.date}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant="secondary" className={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                    <Badge variant="secondary" className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};
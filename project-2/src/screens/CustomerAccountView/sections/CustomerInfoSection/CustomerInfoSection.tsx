import React from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Mail, Phone, MapPin, Edit, MoreHorizontal } from "lucide-react";

export const CustomerInfoSection = (): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-semibold">
              SA
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Sarah Anderson</h2>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                Active
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>sarah.anderson@email.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA, United States</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Customer ID</div>
          <div className="font-semibold text-gray-900">#CM-2024-001</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Member Since</div>
          <div className="font-semibold text-gray-900">Jan 15, 2024</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Total Orders</div>
          <div className="font-semibold text-gray-900">47</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Lifetime Value</div>
          <div className="font-semibold text-gray-900">$12,450</div>
        </div>
      </div>
    </div>
  );
};
import React from "react";
import { Button } from "../ui/button";
import { X, HelpCircle } from "lucide-react";

interface RouterSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RouterSettingsPanel = ({ isOpen, onClose }: RouterSettingsPanelProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Panel */}
      <div className="ml-auto w-[400px] h-full bg-[#2a2a2a] text-white shadow-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Router settings</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-140px)]">
          {/* Router name */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Router name</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-white">Vevo True school hip hop : Sling TV Worldwide</div>
          </div>

          {/* Priority */}
          <div className="space-y-3">
            <label className="text-sm text-gray-300">Priority</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="priority" defaultChecked className="text-orange-500" />
                <span className="text-orange-500">High</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="priority" />
                <span>Medium</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="priority" />
                <span>Low</span>
              </label>
            </div>
          </div>

          {/* Max pod duration */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Max pod duration</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                defaultValue="2900" 
                className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
              />
              <span className="text-gray-300">ms</span>
            </div>
          </div>

          {/* Timeout */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Timeout</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                defaultValue="2900" 
                className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
              />
              <span className="text-gray-300">ms</span>
            </div>
          </div>

          {/* Ad wrapper */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Ad wrapper</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="adWrapper" defaultChecked className="text-orange-500" />
                <span className="text-orange-500">Enabled</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="adWrapper" />
                <span>Disabled</span>
              </label>
            </div>
          </div>

          {/* Wrapper timeout */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Wrapper timeout</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                defaultValue="2500" 
                className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
              />
              <span className="text-gray-300">ms</span>
            </div>
          </div>

          {/* Parallel unwrap factor */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Parallel unwrap factor</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <input 
              type="text" 
              defaultValue="3" 
              className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Minimum ad pod duration threshold */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Minimum ad pod duration threshold</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                defaultValue="30" 
                className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
              />
              <span className="text-gray-300">s</span>
            </div>
          </div>

          {/* Ad pod duration factor */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Ad pod duration factor</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <input 
              type="text" 
              defaultValue="5" 
              className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Ad pod duration behaviour */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Ad pod duration behaviour</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="adPodBehaviour" defaultChecked className="text-orange-500" />
                <span className="text-orange-500">Floor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="adPodBehaviour" />
                <span>Round</span>
              </label>
            </div>
          </div>

          {/* Sort by price */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Sort by price</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="sortByPrice" defaultChecked className="text-orange-500" />
                <span className="text-orange-500">Enabled</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="sortByPrice" />
                <span>Disabled</span>
              </label>
            </div>
          </div>

          {/* Proxymode */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Proxymode</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="proxymode" defaultChecked className="text-orange-500" />
                <span className="text-orange-500">Enabled</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="proxymode" />
                <span>Disabled</span>
              </label>
            </div>
          </div>

          {/* Proxy demand tag */}
          <div className="space-y-2">
            <label className="text-sm text-gray-300">Proxy demand tag</label>
            <textarea 
              defaultValue="https://tv.adserve.amagi.com/rt/2227?w=1920&h=1080&cb={{CACHEBUSTER}}&ip={{IP}}&ua={{USER_AGENT}}&app_bundle={{APP_BUNDLE}}&app_name={{APP_NAME}}&app_store_url={{APP_STORE_URL}}&did={{DEVICE_ID}}&us_privacy={{US_PRIVACY}}&x-amg-track=IX_AMG_TRACK&requests=[REQUESTS]&inv_share=[INV_SHARE]"
              className="w-full h-24 bg-transparent border border-gray-600 rounded p-3 text-white text-sm resize-none focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Default duration */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Default duration</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                defaultValue="120" 
                className="bg-transparent border-b border-gray-600 text-white w-16 focus:outline-none focus:border-orange-500"
              />
              <span className="text-gray-300">s</span>
            </div>
          </div>

          {/* Strategy */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Strategy</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <select className="w-full bg-transparent border border-gray-600 rounded p-2 text-white focus:outline-none focus:border-orange-500">
              <option value="parallel" className="bg-gray-800">Parallel</option>
            </select>
          </div>

          {/* Response order */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-300">Response order</label>
              <HelpCircle className="h-4 w-4 text-gray-500" />
            </div>
            <select className="w-full bg-transparent border border-gray-600 rounded p-2 text-white focus:outline-none focus:border-orange-500">
              <option value="all" className="bg-gray-800">All</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-600 bg-[#2a2a2a]">
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose} className="border-gray-600 text-white hover:bg-gray-700">
              Cancel
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CopyIcon,
  EditIcon,
  ExternalLinkIcon,
  FilterIcon,
  MoreHorizontalIcon,
  SearchIcon,
  SettingsIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { RouterSettingsPanel } from "../../../../components/RouterSettingsPanel";

const breadcrumbItems = [
  { label: "Mid Roll Routers", href: "https://import-customer-acco-gyqq.bolt.host" },
  { label: "Fun Kids", href: "#" },
  { label: "Fun Kids : Vizio US", href: "#", current: true },
];

const routerInfo = [
  { label: "Router ID", value: "1298798" },
  { label: "Amagi ID", value: "amg211221", copyable: true },
  { label: "Deal type", value: "Inventory split" },
  { label: "Product version", value: "TSv3" },
  { label: "Macros", value: "20", link: true },
  {
    label: "Ad router URI",
    value:
      "https://tv.adserve.amagi.com/vast/641126?w=1920&h=1080&ip={{.UserInfo.Ip}}&coppa={{.UserParams.Get `ads.coppa`}}&did={{.UserParams.Get `ads.rdid`}}&dnt={{.UserParams.Get `ads.is_roku_lat`}}&is_lat={{.UserParams.Get `ads.is_roku_lat`}}&cb={{.Random}}&pod_max_dur={{.BreakParam.DurationInSec}}&content_genre={{.UserParams.Get `ads.genre`}}&content_id={{.UserParams.Get `ads.content`}}&ua={{.UserInfo.UserAgent}}&ai={{.UserParams.Get `ads.ai`}}&channelstore={{.UserParams.Get `ads.channelStore`}}&ott_app_id={{.UserParams.Get `ads.ott_app_id`}}&tags={{.UserParams.Get `ads.tags`}}&bmodel={{.UserParams.Get `ads.bmodel`}}&device_lang={{.UserParams.Get `ads.device_lang`}}&unlocked={{.UserParams.Get `ads.unlocked`}}&series_id={{.EPG.Get `series-title`}}&platform={{.UserParams.Get `ads.platform`}}&studio_id={{.UserParams.Get `ads.studio_id`}}&season_id={{.Random}}&content_rating={{.UserParams.Get `ads.content_rating`}}&content_type={{.UserParams.Get `ads.content_type`}}&content_title={{.EPG.Name}}&content_series={{.EPG.Get `series-title`}}&studio={{.EPG.Studio}}&content_language={{.EPG.Language}}&content_duration={{.EPG.Duration}}&content_start_time={{.EPG.StartTime}}&content_end_time={{.EPG.EndTime}}&session_id={{.UserInfo.Id}}&session_uuid={{.UserInfo.Id}}&iris_id={{.EPG.Get `cva-AMG01386-id`}}&iris_context={{.EPG.Get `cva-AMG01386-context`}}&dbi_asset_id={{.DBI.AssetID}}&dbi_placement_id={{.DBI.PlacementID}}&trigger_type={{.DBI.Type}}&x-amg-track=tsv3%2Cus-east1%2Camg00047-tastemade-tastemadefreetv-rokuus",
    copyable: true,
    fullWidth: true,
  },
  { label: "Ads plus", value: "Enabled", status: "success" },
  { label: "Deal source", value: "CONNECT" },
];

const supplyData = [
  {
    id: 1,
    expanded: true,
    supplyName: "Vevo True school hiphop-Sling TV",
    amagiId: "amg182912",
    supplyId: "98718927",
    invPercent: "50",
    demand: "2",
    inventoryOwner: "Vevo",
    supplyPartnerId: "Amg00032",
    lastUpdated: { date: "Sep 23, 2023", time: "10:10 IST" },
    status: "Active",
    demandTags: [
      {
        name: "Vevo True school hiphop-Vevo UK web - 12$ - US - 8192",
        id: "67271890",
        url: "https://serverside.doubleclick.net/gampad/live/ads?iu=/22847938791/Amagi_NonOnO/ctv/CatchAll&description_url=https%3A%2F%2Famagi.com%2F&ssss=springserve&ipe=ssb&ip={{IP}}&tfcd=0&npa=0&sz=640x480&mridx=1&pmnd=0&pmxd={{POD_MAX_DUR_MILLIS}}&gdfp_req=1&output=xml_vast3&unviewed_position_start=1&ad_rule=0&env=vp&scor={{CACHEBUSTER}}&correlator={{CACHEBUSTER}}&vpmute=0&vpa=click&vad_type=linear&hl=en&url=https%3A%2F%2Famagi.com%2F&vpos=midroll&videoad_start_delay=null&rdid={{DEVICE_ID}}&is_lat=0&idtype={{IFA_TYPE}}&msid={{APP_BUNDLE}}&an={{APP_NAME}}&impl=s&cust_params=floorrate%3D20%26supply%3D{{SUPPLY_PARTNER_NAME}}%26genre%3D{{CONTENT_GENRE}}%26app_name%3D{{APP_NAME}}%26app_bundle%3D{{APP_BUNDLE}}%26device%3D{{DEVICE_BRAND_NAME}}%26prodq%3D1%26language%3D{{LANGUAGE}}%26content_livestream%3D1%26rating%3D{{RATING}}&gdpr={{GDPR}}&gdpr_consent={{CONSENT}}",
        server: "GAM",
        tier: "1L",
        macros: "24",
        adReqs: { value: "50,088", change: "-1%", trend: "down" },
        wins: { value: "40,634", change: "-9%", trend: "down" },
        impressions: { value: "38,088", change: "-1%", trend: "down" },
        priority: "1",
        lastUpdated: { date: "Jul 23, 2024", time: "11:14:00 IST" },
        status: "Active",
      },
      {
        name: "Vevo True school hiphop-Vevo UK - 10$ - mobile",
        id: "88718927",
        url: "https://serverside.doubleclick.net/gampad/live/ads?iu=/22847938791/Amagi_NonOnO/ctv/CatchAll&description_url=https%3A%2F%2Famagi.com%2F&ssss=springserve&ipe=ssb&ip={{IP}}&tfcd=0&npa=0&sz=640x480&mridx=1&pmnd=0&pmxd={{POD_MAX_DUR_MILLIS}}&gdfp_req=1&output=xml_vast3&unviewed_position_start=1&ad_rule=0&env=vp&scor={{CACHEBUSTER}}&correlator={{CACHEBUSTER}}&vpmute=0&vpa=click&vad_type=linear&hl=en&url=https%3A%2F%2Famagi.com%2F&vpos=midroll&videoad_start_delay=null&rdid={{DEVICE_ID}}&is_lat=0&idtype={{IFA_TYPE}}&msid={{APP_BUNDLE}}&an={{APP_NAME}}&impl=s&cust_params=floorrate%3D20%26supply%3D{{SUPPLY_PARTNER_NAME}}%26genre%3D{{CONTENT_GENRE}}%26app_name%3D{{APP_NAME}}%26app_bundle%3D{{APP_BUNDLE}}%26device%3D{{DEVICE_BRAND_NAME}}%26prodq%3D1%26language%3D{{LANGUAGE}}%26content_livestream%3D1%26rating%3D{{RATING}}&gdpr={{GDPR}}&gdpr_consent={{CONSENT}}",
        server: "Publica",
        tier: "1L",
        macros: "32",
        adReqs: { value: "18,732", change: "+9%", trend: "up" },
        wins: { value: "17,732", change: "+9%", trend: "up" },
        impressions: { value: "16,325", change: "+9%", trend: "up" },
        priority: "2",
        lastUpdated: { date: "Jul 20, 2023", time: "11:13:54 IST" },
        status: "Active",
      },
      {
        name: "Vevo True school hiphop-Vevo UK- HB - US - 3495333244805522033",
        id: "98122927",
        url: "https://serverside.doubleclick.net/gampad/live/ads?iu=/22847938791/Amagi_NonOnO/ctv/CatchAll&description_url=https%3A%2F%2Famagi.com%2F&ssss=springserve&ipe=ssb&ip={{IP}}&tfcd=0&npa=0&sz=640x480&mridx=1&pmnd=0&pmxd={{POD_MAX_DUR_MILLIS}}&gdfp_req=1&output=xml_vast3&unviewed_position_start=1&ad_rule=0&env=vp&scor={{CACHEBUSTER}}&correlator={{CACHEBUSTER}}&vpmute=0&vpa=click&vad_type=linear&hl=en&url=https%3A%2F%2Famagi.com%2F&vpos=midroll&videoad_start_delay=null&rdid={{DEVICE_ID}}&is_lat=0&idtype={{IFA_TYPE}}&msid={{APP_BUNDLE}}&an={{APP_NAME}}&impl=s&cust_params=floorrate%3D20%26supply%3D{{SUPPLY_PARTNER_NAME}}%26genre%3D{{CONTENT_GENRE}}%26app_name%3D{{APP_NAME}}%26app_bundle%3D{{APP_BUNDLE}}%26device%3D{{DEVICE_BRAND_NAME}}%26prodq%3D1%26language%3D{{LANGUAGE}}%26content_livestream%3D1%26rating%3D{{RATING}}&gdpr={{GDPR}}&gdpr_consent={{CONSENT}}",
        server: "Spring Serve",
        tier: "1L",
        macros: "45",
        adReqs: { value: "8,508", change: "+9%", trend: "up" },
        wins: { value: "7,508", change: "+9%", trend: "up" },
        impressions: { value: "6,578", change: "+9%", trend: "up" },
        priority: "1",
        lastUpdated: { date: "Jul 10, 2024", time: "13::12:54 IST" },
        status: "Active",
      },
      {
        name: "Vevo True school hiphop-Vevo UK",
        id: "28718927",
        url: "https://serverside.doubleclick.net/gampad/live/ads?iu=/22847938791/Amagi_NonOnO/ctv/CatchAll&description_url=https%3A%2F%2Famagi.com%2F&ssss=springserve&ipe=ssb&ip={{IP}}&tfcd=0&npa=0&sz=640x480&mridx=1&pmnd=0&pmxd={{POD_MAX_DUR_MILLIS}}&gdfp_req=1&output=xml_vast3&unviewed_position_start=1&ad_rule=0&env=vp&scor={{CACHEBUSTER}}&correlator={{CACHEBUSTER}}&vpmute=0&vpa=click&vad_type=linear&hl=en&url=https%3A%2F%2Famagi.com%2F&vpos=midroll&videoad_start_delay=null&rdid={{DEVICE_ID}}&is_lat=0&idtype={{IFA_TYPE}}&msid={{APP_BUNDLE}}&an={{APP_NAME}}&impl=s&cust_params=floorrate%3D20%26supply%3D{{SUPPLY_PARTNER_NAME}}%26genre%3D{{CONTENT_GENRE}}%26app_name%3D{{APP_NAME}}%26app_bundle%3D{{APP_BUNDLE}}%26device%3D{{DEVICE_BRAND_NAME}}%26prodq%3D1%26language%3D{{LANGUAGE}}%26content_livestream%3D1%26rating%3D{{RATING}}&gdpr={{GDPR}}&gdpr_consent={{CONSENT}}",
        server: "Publica",
        tier: "1",
        macros: "32",
        adReqs: { value: "-", change: "", trend: "" },
        wins: { value: "-", change: "", trend: "" },
        impressions: { value: "-", change: "", trend: "" },
        priority: "3",
        lastUpdated: { date: "Jul 10, 2024", time: "12:45:12 IST" },
        status: "Active",
      },
      {
        name: "Vevo True school hiphop -Vevo UK",
        id: "62718927",
        url: "https://serverside.doubleclick.net/gampad/live/ads?iu=/22847938791/Amagi_NonOnO/ctv/CatchAll&description_url=https%3A%2F%2Famagi.com%2F&ssss=springserve&ipe=ssb&ip={{IP}}&tfcd=0&npa=0&sz=640x480&mridx=1&pmnd=0&pmxd={{POD_MAX_DUR_MILLIS}}&gdfp_req=1&output=xml_vast3&unviewed_position_start=1&ad_rule=0&env=vp&scor={{CACHEBUSTER}}&correlator={{CACHEBUSTER}}&vpmute=0&vpa=click&vad_type=linear&hl=en&url=https%3A%2F%2Famagi.com%2F&vpos=midroll&videoad_start_delay=null&rdid={{DEVICE_ID}}&is_lat=0&idtype={{IFA_TYPE}}&msid={{APP_BUNDLE}}&an={{APP_NAME}}&impl=s&cust_params=floorrate%3D20%26supply%3D{{SUPPLY_PARTNER_NAME}}%26genre%3D{{CONTENT_GENRE}}%26app_name%3D{{APP_NAME}}%26app_bundle%3D{{APP_BUNDLE}}%26device%3D{{DEVICE_BRAND_NAME}}%26prodq%3D1%26language%3D{{LANGUAGE}}%26content_livestream%3D1%26rating%3D{{RATING}}&gdpr={{GDPR}}&gdpr_consent={{CONSENT}}",
        server: "Publica",
        tier: "1",
        macros: "28",
        adReqs: { value: "7,457", change: "+9%", trend: "up" },
        wins: { value: "6,477", change: "+9%", trend: "up" },
        impressions: { value: "5,137", change: "+9%", trend: "up" },
        priority: "1",
        lastUpdated: { date: "Jul 09, 2024", time: "10:29:18 IST" },
        status: "Active",
      },
    ],
  },
  {
    id: 2,
    expanded: false,
    supplyName: "Vevo True school hiphop-Vevo UK",
    amagiId: "amg328915",
    supplyId: "2378300",
    invPercent: "50",
    demand: "2",
    inventoryOwner: "Vevo UK",
    supplyPartnerId: "Amg00032",
    lastUpdated: { date: "Sep 23, 2023", time: "10:10 IST" },
    status: "Active",
    demandTags: [],
  },
];

const tabItems = [
  { value: "overview", label: "Overview" },
  { value: "monetisation", label: "Monetisation" },
  { value: "ad-tags", label: "Ad tags" },
];

export const SupplySection = (): JSX.Element => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set([1]));
  const [isRouterSettingsOpen, setIsRouterSettingsOpen] = useState(false);

  const toggleRow = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const openRouterSettings = () => {
    setIsRouterSettingsOpen(true);
  };

  const closeRouterSettings = () => {
    setIsRouterSettingsOpen(false);
  };

  return (
    <>
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex gap-4 flex-col items-start relative flex-[0_0_auto]">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.current ? (
                        <span className="text-[#e7e7e7] font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]">
                          {item.label}
                        </span>
                      ) : (
                        <BreadcrumbLink
                          href={item.href}
                          className="text-[#999999] font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]"
                        >
                          {item.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator className="text-[#999999]" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <h1 className="relative w-fit mt-[-1.00px] font-headings-h1 font-[number:var(--headings-h1-font-weight)] text-[#e7e7e7] text-[length:var(--headings-h1-font-size)] tracking-[var(--headings-h1-letter-spacing)] leading-[var(--headings-h1-line-height)] whitespace-nowrap [font-style:var(--headings-h1-font-style)]">
                    Fun Kids : Vizio US
                  </h1>

                  <Badge className="inline-flex items-center gap-1 px-2 py-0.5 relative flex-[0_0_auto] bg-[#82c77f] rounded-[100px] text-[#0f0f0f] font-body-normal-xsmall font-[number:var(--body-normal-xsmall-font-weight)] text-[length:var(--body-normal-xsmall-font-size)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] [font-style:var(--body-normal-xsmall-font-style)]">
                    Live to Viewers
                  </Badge>
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 relative flex-[0_0_auto] rounded-[23px] border border-solid border-[#ffffff33]">
                      <img
                        className="relative w-4 h-4"
                        alt="Channel ready"
                        src="/channel-ready-playout.svg"
                      />

                      <div className="inline-flex items-baseline gap-2 relative flex-[0_0_auto]">
                        <div className="relative w-fit font-body-normal-large font-[number:var(--body-normal-large-font-weight)] text-[#999999] text-[length:var(--body-normal-large-font-size)] tracking-[var(--body-normal-large-letter-spacing)] leading-[var(--body-normal-large-line-height)] whitespace-nowrap [font-style:var(--body-normal-large-font-style)]">
                          Mon, Nov 14
                        </div>

                        <div className="relative w-fit mt-[-1.00px] font-headings-h3 font-[number:var(--headings-h3-font-weight)] text-[#e7e7e7] text-[length:var(--headings-h3-font-size)] tracking-[var(--headings-h3-letter-spacing)] leading-[var(--headings-h3-line-height)] whitespace-nowrap [font-style:var(--headings-h3-font-style)]">
                          07:39:00 PST
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 pl-4 pr-5 py-1 relative flex-[0_0_auto] rounded-[33px] border border-solid border-[#ffffff33]">
                    <img
                      className="relative w-4 h-4"
                      alt="User location line"
                      src="/user-location-line.svg"
                    />

                    <div className="inline-flex items-baseline gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-fit font-body-normal-large font-[number:var(--body-normal-large-font-weight)] text-[#999999] text-[length:var(--body-normal-large-font-size)] tracking-[var(--body-normal-large-letter-spacing)] leading-[var(--body-normal-large-line-height)] whitespace-nowrap [font-style:var(--body-normal-large-font-style)]">
                        Mon, Nov 14
                      </div>

                      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-headings-h3 font-[number:var(--headings-h3-font-weight)] text-[#e7e7e7] text-[length:var(--headings-h3-font-size)] tracking-[var(--headings-h3-letter-spacing)] leading-[var(--headings-h3-line-height)] whitespace-nowrap [font-style:var(--headings-h3-font-style)]">
                          06:00:00 IST
                        </div>

                        <ChevronDownIcon className="relative w-4 h-4 text-[#e7e7e7]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] font-headings-h3 font-[number:var(--headings-h3-font-weight)] text-[#e7e7e7] text-[length:var(--headings-h3-font-size)] tracking-[var(--headings-h3-letter-spacing)] leading-[var(--headings-h3-line-height)] whitespace-nowrap [font-style:var(--headings-h3-font-style)]">
          Router information
        </h2>

        <Card className="flex items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff0d] rounded-lg border-0">
          <CardContent className="flex items-start gap-4 relative flex-1 grow p-0">
            <div className="flex-col items-start justify-center gap-4 flex relative flex-1 grow">
              <div className="inline-flex items-start gap-10 relative flex-[0_0_auto] flex-wrap">
                {routerInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`inline-flex flex-col items-start relative ${info.fullWidth ? "flex-1 min-w-[150px]" : "flex-[0_0_auto]"}`}
                  >
                    <div className="w-fit mt-[-1.00px] font-body-bold-small font-[number:var(--body-bold-small-font-weight)] text-[#999999] text-[length:var(--body-bold-small-font-size)] tracking-[var(--body-bold-small-letter-spacing)] leading-[var(--body-bold-small-line-height)] whitespace-nowrap relative [font-style:var(--body-bold-small-font-style)]">
                      {info.label}
                    </div>

                    <div
                      className={`${info.copyable ? "inline-flex items-center justify-center gap-1" : ""} relative ${info.fullWidth ? "self-stretch w-full" : "flex-[0_0_auto]"}`}
                    >
                      <div
                        className={`relative ${info.fullWidth ? "flex-1" : "w-fit"} ${info.fullWidth ? "" : "mt-[-1.00px]"} font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)] ${
                          info.status === "success"
                            ? "text-[#82c77f]"
                            : info.link
                              ? "text-[#7fb8f0]"
                              : "text-[#e7e7e7]"
                        } ${info.fullWidth ? "" : "whitespace-nowrap"}`}
                      >
                        {info.status === "success" && (
                          <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                            <img
                              className="relative w-4 h-4"
                              alt="Icon"
                              src="/icon-1.svg"
                            />
                            <span>{info.value}</span>
                          </div>
                        )}
                        {!info.status && (info.label === "Ad router URI" ? 
                          (info.value.length > 100 ? info.value.substring(0, 100) + "..." : info.value) 
                          : info.value
                        )}
                      </div>

                      {info.copyable && (
                        <CopyIcon
                          className="relative w-4 h-4 text-[#e7e7e7]"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 relative flex-[0_0_auto] rounded bg-transparent border-0 h-auto hover:bg-[#ffffff14]" onClick={openRouterSettings}>
                <SettingsIcon className="relative w-5 h-5 text-[#7fb8f0]" />
                <div className="relative w-fit mt-[-1.00px] font-body-bold-default font-[number:var(--body-bold-default-font-weight)] text-[#7fb8f0] text-[length:var(--body-bold-default-font-size)] tracking-[var(--body-bold-default-letter-spacing)] leading-[var(--body-bold-default-line-height)] whitespace-nowrap [font-style:var(--body-bold-default-font-style)]">
                  Router settings
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] mt-8">
        <h2 className="relative w-fit mt-[-1.00px] font-headings-h3 font-[number:var(--headings-h3-font-weight)] text-[#e7e7e7] text-[length:var(--headings-h3-font-size)] tracking-[var(--headings-h3-letter-spacing)] leading-[var(--headings-h3-line-height)] whitespace-nowrap [font-style:var(--headings-h3-font-style)]">
          Supply
        </h2>

        <Card className="flex flex-col h-[552px] items-start relative self-stretch w-full bg-[#1e1e1e] rounded-lg overflow-hidden border border-solid border-[#ffffff1f]">
          <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-[8px_8px_0px_0px] p-0">
            <div className="flex h-14 items-center gap-4 px-4 py-3 relative self-stretch w-full bg-[#1e1e1e] rounded-[8px_8px_0px_0px] border-t [border-top-style:solid] border-r [border-right-style:solid] border-l [border-left-style:solid] border-[#ffffff1f]">
              <div className="flex items-center gap-2 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[#999999] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] whitespace-nowrap [font-style:var(--body-normal-small-font-style)]">
                  2 supply
                </div>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="flex w-[291px] items-start relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 relative flex-1 grow bg-[#ffffff08] rounded border border-solid border-[#ffffff33]">
                    <SearchIcon className="relative w-4 h-4 text-[#616161]" />
                    <Input
                      placeholder="Search"
                      className="relative flex-1 h-5 mt-[-1.00px] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#616161] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] bg-transparent border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>

                <Button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 relative flex-[0_0_auto] bg-[#ffffff14] rounded h-auto hover:bg-[#ffffff20]">
                  <FilterIcon className="relative w-5 h-5 text-[#e7e7e7]" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <Table className="relative self-stretch w-full">
                <TableHeader className="bg-transparent">
                  <TableRow className="border-b border-[#ffffff14] hover:bg-transparent">
                    <TableHead className="w-12 bg-[#272727] border-b border-[#ffffff14] h-9 p-0"></TableHead>
                    <TableHead className="flex-1 bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        SUPPLY NAME
                      </div>
                    </TableHead>
                    <TableHead className="w-[113px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        AMAGI ID
                      </div>
                    </TableHead>
                    <TableHead className="w-[142px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        SUPPLY ID
                      </div>
                    </TableHead>
                    <TableHead className="w-[72px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        INV%
                      </div>
                    </TableHead>
                    <TableHead className="w-[90px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        DEMAND
                      </div>
                    </TableHead>
                    <TableHead className="w-[184px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        INVENTORY OWNER
                      </div>
                    </TableHead>
                    <TableHead className="w-[148px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        SUPPLY PARTNER ID
                      </div>
                    </TableHead>
                    <TableHead className="w-[129px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        LAST UPDATED
                      </div>
                    </TableHead>
                    <TableHead className="w-[120px] bg-[#272727] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                      <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                        STATUS
                      </div>
                    </TableHead>
                    <TableHead className="w-[136px] bg-[#272727] border-b border-[#ffffff14] p-0"></TableHead>
                    <TableHead className="w-14 bg-[#272727] border-b border-[#ffffff14] p-0"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supplyData.map((supply) => (
                    <React.Fragment key={supply.id}>
                      <TableRow
                        className={`${expandedRows.has(supply.id) ? "bg-[#ffffff0d]" : ""} border-b border-[#ffffff14] hover:bg-[#ffffff0d] cursor-pointer`}
                        onClick={() => toggleRow(supply.id)}
                      >
                        <TableCell className="w-12 border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          {expandedRows.has(supply.id) ? (
                            <ChevronUpIcon className="relative w-4 h-4 text-[#e7e7e7]" />
                          ) : (
                            <ChevronDownIcon className="relative w-4 h-4 text-[#e7e7e7]" />
                          )}
                        </TableCell>
                        <TableCell className="flex-1 border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-col items-start relative flex-1 grow">
                              <div className="self-stretch mt-[-1.00px] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] relative [font-style:var(--body-normal-default-font-style)]">
                                {supply.supplyName}
                              </div>
                            </div>
                            <CopyIcon className="relative w-4 h-4 text-[#e7e7e7]" />
                          </div>
                        </TableCell>
                        <TableCell className="w-[113px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.amagiId}
                          </div>
                        </TableCell>
                        <TableCell className="w-[142px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.supplyId}
                          </div>
                        </TableCell>
                        <TableCell className="w-[72px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.invPercent}%
                          </div>
                        </TableCell>
                        <TableCell className="w-[90px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.demand}
                          </div>
                        </TableCell>
                        <TableCell className="w-[184px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.inventoryOwner}
                          </div>
                        </TableCell>
                        <TableCell className="w-[148px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                            {supply.supplyPartnerId}
                          </div>
                        </TableCell>
                        <TableCell className="w-[129px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="flex flex-col items-start">
                            <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#e7e7e7] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                              {supply.lastUpdated.date}
                            </div>
                            <div className="font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[#999999] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]">
                              {supply.lastUpdated.time}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[120px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <Badge className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#82c77f] rounded-[100px] text-[#0f0f0f] font-body-normal-xsmall font-[number:var(--body-normal-xsmall-font-weight)] text-[length:var(--body-normal-xsmall-font-size)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] [font-style:var(--body-normal-xsmall-font-style)]">
                            {supply.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="w-[136px] border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <Button className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-transparent border-0 h-auto hover:bg-[#ffffff14]">
                              <EditIcon className="relative w-4 h-4 text-[#7fb8f0]" />
                            </Button>
                            <Button className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-transparent border-0 h-auto hover:bg-[#ffffff14]">
                              <ExternalLinkIcon className="relative w-4 h-4 text-[#7fb8f0]" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="w-14 border-b border-[#ffffff14] h-14 px-4 py-2.5">
                          <Button className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-transparent border-0 h-auto hover:bg-[#ffffff14]">
                            <MoreHorizontalIcon className="relative w-4 h-4 text-[#e7e7e7]" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      
                      {/* Expanded demand tag rows */}
                      {expandedRows.has(supply.id) && supply.demandTags.map((tag, tagIndex) => (
                        <React.Fragment key={`${supply.id}-tag-${tagIndex}`}>
                          {tagIndex === 0 && (
                            <TableRow className="bg-[#1a1a1a] border-b border-[#ffffff14]">
                              <TableHead className="w-12 bg-[#1a1a1a] border-b border-[#ffffff14] h-9 p-0"></TableHead>
                              <TableHead className="flex-1 bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  DEMAND TAG NAME
                                </div>
                              </TableHead>
                              <TableHead className="w-[113px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  DEMAND TAG ID
                                </div>
                              </TableHead>
                              <TableHead className="w-[142px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  DEMAND TAG URL
                                </div>
                              </TableHead>
                              <TableHead className="w-[72px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  PRIORITY
                                </div>
                              </TableHead>
                              <TableHead className="w-[90px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  AD SERVER
                                </div>
                              </TableHead>
                              <TableHead className="w-[184px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  AD REQUESTS
                                </div>
                              </TableHead>
                              <TableHead className="w-[148px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  WINS
                                </div>
                              </TableHead>
                              <TableHead className="w-[129px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  AD IMPRESSIONS
                                </div>
                              </TableHead>
                              <TableHead className="w-[120px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  LAST UPDATED
                                </div>
                              </TableHead>
                              <TableHead className="w-[136px] bg-[#1a1a1a] border-b border-[#ffffff14] px-4 py-2.5 text-left">
                                <div className="font-body-bold-small-CAPS font-[number:var(--body-bold-small-CAPS-font-weight)] text-[#999999] text-[length:var(--body-bold-small-CAPS-font-size)] tracking-[var(--body-bold-small-CAPS-letter-spacing)] leading-[var(--body-bold-small-CAPS-line-height)] [font-style:var(--body-bold-small-CAPS-font-style)]">
                                  STATUS
                                </div>
                              </TableHead>
                              <TableHead className="w-14 bg-[#1a1a1a] border-b border-[#ffffff14] p-0"></TableHead>
                            </TableRow>
                          )}
                          <TableRow className="bg-[#ffffff05] border-b border-[#ffffff0a] hover:bg-[#ffffff08]">
                            <TableCell className="w-12 border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              {/* Empty cell for alignment */}
                            </TableCell>
                            <TableCell className="flex-1 border-b border-[#ffffff0a] h-14 px-8 py-2.5">
                              <div className="flex gap-2 items-center pl-4">
                                <div className="flex flex-col items-start relative flex-1 grow">
                                  <div className="self-stretch mt-[-1.00px] font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#cccccc] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] relative [font-style:var(--body-normal-default-font-style)]">
                                    {tag.name}
                                  </div>
                                </div>
                                <CopyIcon className="relative w-4 h-4 text-[#cccccc]" />
                              </div>
                            </TableCell>
                            <TableCell className="w-[113px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#cccccc] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                                {tag.id}
                              </div>
                            </TableCell>
                            <TableCell className="w-[142px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#7fb8f0] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)] truncate">
                                {tag.url.length > 20 ? tag.url.substring(0, 20) + "..." : tag.url}
                              </div>
                            </TableCell>
                            <TableCell className="w-[72px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#cccccc] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                                {tag.priority}
                              </div>
                            </TableCell>
                            <TableCell className="w-[90px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#cccccc] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                                {tag.server}
                              </div>
                            </TableCell>
                            <TableCell className="w-[184px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="flex flex-col items-start text-xs">
                                <div className="text-[#cccccc]">{tag.adReqs.value}</div>
                                <div className={`${tag.adReqs.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                  {tag.adReqs.change}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="w-[148px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="flex flex-col items-start text-xs">
                                <div className="text-[#cccccc]">{tag.wins.value}</div>
                                <div className={`${tag.wins.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                  {tag.wins.change}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="w-[129px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="flex flex-col items-start text-xs">
                                <div className="text-[#cccccc]">{tag.impressions.value}</div>
                                <div className={`${tag.impressions.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                  {tag.impressions.change}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="w-[120px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <div className="flex flex-col items-start">
                                <div className="font-body-normal-default font-[number:var(--body-normal-default-font-weight)] text-[#cccccc] text-[length:var(--body-normal-default-font-size)] tracking-[var(--body-normal-default-letter-spacing)] leading-[var(--body-normal-default-line-height)] [font-style:var(--body-normal-default-font-style)]">
                                  {tag.lastUpdated.date}
                                </div>
                                <div className="font-body-normal-small font-[number:var(--body-normal-small-font-weight)] text-[#999999] text-[length:var(--body-normal-small-font-size)] tracking-[var(--body-normal-small-letter-spacing)] leading-[var(--body-normal-small-line-height)] [font-style:var(--body-normal-small-font-style)]">
                                  {tag.lastUpdated.time}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="w-[136px] border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <Badge className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#82c77f] rounded-[100px] text-[#0f0f0f] font-body-normal-xsmall font-[number:var(--body-normal-xsmall-font-weight)] text-[length:var(--body-normal-xsmall-font-size)] tracking-[var(--body-normal-xsmall-letter-spacing)] leading-[var(--body-normal-xsmall-line-height)] [font-style:var(--body-normal-xsmall-font-style)]">
                                {tag.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="w-14 border-b border-[#ffffff0a] h-14 px-4 py-2.5">
                              <Button className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-transparent border-0 h-auto hover:bg-[#ffffff14]" onClick={(e) => e.stopPropagation()}>
                                <MoreHorizontalIcon className="relative w-4 h-4 text-[#cccccc]" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <RouterSettingsPanel 
        isOpen={isRouterSettingsOpen} 
        onClose={closeRouterSettings} 
      />
    </>
  );
};
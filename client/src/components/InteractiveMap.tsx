import { useState } from "react";

interface MapRegion {
  id: string;
  name: string;
  color: string;
  areas: string[];
}

const regions: MapRegion[] = [
  { id: "central", name: "Durban Central & CBD", color: "#F37021", areas: ["Durban CBD", "Point Waterfront", "Berea", "Greyville", "Morningside"] },
  { id: "north", name: "North Durban", color: "#FF8C42", areas: ["Umhlanga", "Durban North", "La Lucia", "Mount Edgecombe", "Phoenix"] },
  { id: "south", name: "South Durban", color: "#FFA562", areas: ["Amanzimtoti", "Chatsworth", "Isipingo", "Umlazi", "Kingsburgh"] },
  { id: "west", name: "West Durban", color: "#FFB882", areas: ["Pinetown", "Westville", "Kloof", "Hillcrest", "Queensburgh"] },
  { id: "coastal", name: "Coastal Areas", color: "#FFCBA2", areas: ["Ballito", "Tongaat", "Verulam", "Umdloti", "Salt Rock"] },
  { id: "outer", name: "Outer Durban", color: "#FFDEC2", areas: ["Cato Ridge", "Hammarsdale", "Inanda", "KwaMashu", "Newlands"] },
];

export function InteractiveMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const activeRegion = selectedRegion || hoveredRegion;
  const activeRegionData = regions.find(r => r.id === activeRegion);

  return (
    <div className="bg-background rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-auto"
            data-testid="svg-interactive-map"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 180 50 L 220 50 L 240 80 L 220 110 L 180 110 Z"
              fill={activeRegion === "coastal" ? regions[4].color : "#FFDEC2"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("coastal")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "coastal" ? null : "coastal")}
              data-testid="region-coastal"
              filter={activeRegion === "coastal" ? "url(#glow)" : undefined}
            />
            <text x="200" y="85" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="bold" pointerEvents="none">
              Coastal
            </text>

            <path
              d="M 120 120 L 180 120 L 200 150 L 180 180 L 120 180 Z"
              fill={activeRegion === "north" ? regions[1].color : "#FFA562"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("north")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "north" ? null : "north")}
              data-testid="region-north"
              filter={activeRegion === "north" ? "url(#glow)" : undefined}
            />
            <text x="150" y="155" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="bold" pointerEvents="none">
              North
            </text>

            <path
              d="M 140 200 L 200 200 L 220 230 L 200 260 L 140 260 Z"
              fill={activeRegion === "central" ? regions[0].color : "#F37021"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("central")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "central" ? null : "central")}
              data-testid="region-central"
              filter={activeRegion === "central" ? "url(#glow)" : undefined}
            />
            <text x="170" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" pointerEvents="none">
              Central
            </text>

            <path
              d="M 80 280 L 140 280 L 160 310 L 140 340 L 80 340 Z"
              fill={activeRegion === "west" ? regions[3].color : "#FFB882"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("west")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "west" ? null : "west")}
              data-testid="region-west"
              filter={activeRegion === "west" ? "url(#glow)" : undefined}
            />
            <text x="110" y="315" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="bold" pointerEvents="none">
              West
            </text>

            <path
              d="M 160 350 L 220 350 L 240 380 L 220 410 L 160 410 Z"
              fill={activeRegion === "south" ? regions[2].color : "#FFA562"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("south")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "south" ? null : "south")}
              data-testid="region-south"
              filter={activeRegion === "south" ? "url(#glow)" : undefined}
            />
            <text x="190" y="385" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="bold" pointerEvents="none">
              South
            </text>

            <path
              d="M 80 420 L 140 420 L 160 450 L 140 480 L 80 480 Z"
              fill={activeRegion === "outer" ? regions[5].color : "#FFDEC2"}
              stroke="#111111"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
              onMouseEnter={() => setHoveredRegion("outer")}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion === "outer" ? null : "outer")}
              data-testid="region-outer"
              filter={activeRegion === "outer" ? "url(#glow)" : undefined}
            />
            <text x="110" y="455" textAnchor="middle" fill="#111111" fontSize="12" fontWeight="bold" pointerEvents="none">
              Outer
            </text>
          </svg>

          <p className="text-sm text-muted-foreground text-center mt-4" data-testid="text-map-instruction">
            Click or hover over regions to view service areas
          </p>
        </div>

        <div className="flex flex-col justify-center">
          {activeRegionData ? (
            <div 
              className="bg-card border-2 rounded-lg p-6 transition-all duration-300"
              style={{ borderColor: activeRegionData.color }}
              data-testid={`info-${activeRegionData.id}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: activeRegionData.color }}
                />
                <h3 className="text-2xl font-bold text-foreground" data-testid="text-active-region-name">
                  {activeRegionData.name}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4" data-testid="text-areas-label">
                We service the following areas:
              </p>
              <ul className="grid grid-cols-1 gap-2">
                {activeRegionData.areas.map((area, index) => (
                  <li 
                    key={area}
                    className="flex items-center gap-2 text-foreground"
                    data-testid={`area-${activeRegionData.id}-${index}`}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: activeRegionData.color }}
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-card border-2 border-muted rounded-lg p-6" data-testid="info-default">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Durban Service Areas
              </h3>
              <p className="text-muted-foreground mb-4">
                Select a region on the map to view the specific areas we service.
              </p>
              <p className="text-sm text-muted-foreground">
                We cover {regions.reduce((acc, r) => acc + r.areas.length, 0)} service areas across Greater Durban.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

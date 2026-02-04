'use client';

import { Calendar, Sun, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export interface Filters {
  season: string;
  sunlight: string;
  growthTime: string;
}

interface FiltersSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onReset: () => void;
}

export function FiltersSidebar({ filters, onFilterChange, onReset }: FiltersSidebarProps) {
  const handleSeasonChange = (value: string) => {
    onFilterChange({ ...filters, season: value });
  };

  const handleSunlightChange = (value: string) => {
    onFilterChange({ ...filters, sunlight: value });
  };

  const handleGrowthTimeChange = (value: string) => {
    onFilterChange({ ...filters, growthTime: value });
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <button
          onClick={onReset}
          className="text-sm font-medium text-green-600 hover:text-green-700">
          RESET
        </button>
      </div>

      {/* Planting Season */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-green-600">
          <Calendar className="size-4" />
          <span>Planting Season</span>
        </div>
        <RadioGroup value={filters.season} onValueChange={handleSeasonChange}>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="spring"
              id="spring"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="spring" className="text-sm text-foreground">
              Spring
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="summer"
              id="summer"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="summer" className="text-sm text-foreground">
              Summer
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="autumn"
              id="autumn"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="autumn" className="text-sm text-foreground">
              Autumn
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Sunlight */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-green-600">
          <Sun className="size-4" />
          <span>Sunlight</span>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`justify-start rounded-lg ${
              filters.sunlight === 'full-sun'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'text-foreground'
            }`}
            onClick={() => handleSunlightChange('full-sun')}>
            Full Sun
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`justify-start rounded-lg ${
              filters.sunlight === 'partial-shade'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'text-foreground'
            }`}
            onClick={() => handleSunlightChange('partial-shade')}>
            Partial Shade
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`justify-start rounded-lg ${
              filters.sunlight === 'full-shade'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'text-foreground'
            }`}
            onClick={() => handleSunlightChange('full-shade')}>
            Full Shade
          </Button>
        </div>
      </div>

      {/* Growth Time */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-green-600">
          <Timer className="size-4" />
          <span>Growth Time</span>
        </div>
        <RadioGroup value={filters.growthTime} onValueChange={handleGrowthTimeChange}>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="under-30"
              id="under-30"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="under-30" className="text-sm text-foreground">
              {'< 30 Days'}
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="30-60"
              id="30-60"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="30-60" className="text-sm text-foreground">
              30-60 Days
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value="60-90"
              id="60-90"
              className="border-green-500 text-green-500 data-[state=checked]:bg-green-500"
            />
            <Label htmlFor="60-90" className="text-sm text-foreground">
              60-90 Days
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Apply Filters Button */}
      <Button className="h-11 w-full rounded-full bg-green-500 text-white hover:bg-green-600">
        Apply Filters
      </Button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { COMPANY_ADDRESS } from "@/lib/data";

export default function MapPlaceholder() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-navy/10 bg-navy-950 text-center">
        <MapPin className="h-8 w-8 text-accent-light" aria-hidden="true" />
        <p className="text-sm font-medium text-white">
          Google Map would render here
        </p>
        <p className="max-w-xs text-xs text-white/50">
          Swap this component for an embedded Google Map once an API key is
          configured.
        </p>
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-navy/20 bg-navy/3 text-center">
      <MapPin className="h-8 w-8 text-navy/40" aria-hidden="true" />
      <div>
        <p className="text-sm font-medium text-navy">{COMPANY_ADDRESS}</p>
        <p className="mt-1 text-xs text-muted">
          Loading the map sends your IP address to Google.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Click to load map
      </button>
    </div>
  );
}

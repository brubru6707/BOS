"use client";

import { useEffect, useState } from "react";

// general meetings: sundays 4-5pm eastern, erc 125
const TZ = "America/New_York";

function easternNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function status(): string {
  const { day, minutes } = easternNow();
  const start = 16 * 60;
  if (day === 0 && minutes >= start && minutes < start + 60) return "happening now in ERC 125";

  let mins = (7 - day) % 7 * 24 * 60 + (start - minutes);
  if (mins <= 0) mins += 7 * 24 * 60;
  const d = Math.floor(mins / (24 * 60));
  const h = Math.floor((mins % (24 * 60)) / 60);
  const m = mins % 60;
  if (d > 0) return `starts in ${d}d ${h}h`;
  if (h > 0) return `starts in ${h}h ${m}m`;
  return `starts in ${m}m`;
}

export default function NextMeeting() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    setText(status());
    const id = setInterval(() => setText(status()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 border border-ink/20 bg-white px-4 py-3 font-mono text-[13px]">
      <span className="h-2 w-2 bg-brown-red" aria-hidden="true" />
      <span>next general meeting · Sunday 4pm · ERC 125</span>
      {text && <span className="text-brown-red">{text}</span>}
    </div>
  );
}

import { Star, CheckCircle, Zap, Lock, BarChart3 } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Star, text: "5-star guest experience" },
    { icon: CheckCircle, text: "Full property revamp included" },
    { icon: Zap, text: "Listed within 7 days" },
    { icon: Lock, text: "No lock-in contracts" },
    { icon: BarChart3, text: "Monthly income reports" },
  ];

  return (
    <div className="bg-sand py-6 px-[5%] flex items-center justify-center gap-8 lg:gap-12 flex-wrap border-b border-border">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm font-medium text-navy tracking-wide"
        >
          <item.icon className="text-teal w-5 h-5" />
          {item.text}
        </div>
      ))}
    </div>
  );
}

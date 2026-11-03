import {
  Bell,
  Briefcase,
  CalendarDays,
  ChartColumn,
  Check,
  CircleHelp,
  Clock,
  Coins,
  EyeOff,
  Inbox,
  Layers,
  Lock,
  Mail,
  Pause,
  PenLine,
  Repeat2,
  Send,
  ShieldCheck,
  Sparkles,
  StickyNote,
  Sun,
  Target,
  Trash2,
  Users,
} from "lucide-react";
import type { IconKey } from "../../data/pages";

const ICONS: Record<IconKey, typeof Mail> = {
  pen: PenLine,
  repeat: Repeat2,
  users: Users,
  chart: ChartColumn,
  sun: Sun,
  calendar: CalendarDays,
  shield: ShieldCheck,
  lock: Lock,
  mail: Mail,
  send: Send,
  clock: Clock,
  bell: Bell,
  sparkles: Sparkles,
  target: Target,
  briefcase: Briefcase,
  eye: EyeOff,
  pause: Pause,
  note: StickyNote,
  inbox: Inbox,
  trash: Trash2,
  check: Check,
  layers: Layers,
  coins: Coins,
  help: CircleHelp,
};

export function Icon({ name, size = 20, strokeWidth = 1.9 }: { name: IconKey; size?: number; strokeWidth?: number }) {
  const C = ICONS[name];
  return <C size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}

import {
  ChartPieIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  ReceiptPercentIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  NewspaperIcon,
  AdjustmentsVerticalIcon,
  PercentBadgeIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

export const SIDEBAR_DATA = [
  { id: 1, title: "Dashboard", route: "#", icon: ChartPieIcon },
  { id: 2, title: "Leaderboard", route: "#", icon: ChartBarIcon },
  { id: 3, title: "Order", route: "#", icon: ShoppingCartIcon },
  { id: 4, title: "Product", route: "#", icon: ShoppingBagIcon },
  { id: 5, title: "Sales Report", route: "#", icon: ReceiptPercentIcon },
  { id: 6, title: "Messages", route: "#", icon: ChatBubbleBottomCenterIcon },
  { id: 7, title: "Settings", route: "#", icon: Cog6ToothIcon },
];

export const CARD_ICON = [
  { id: 1, icon: ChartBarSquareIcon },
  { id: 2, icon: NewspaperIcon },
  { id: 3, icon: PercentBadgeIcon },
  { id: 4, icon: AdjustmentsVerticalIcon },
];

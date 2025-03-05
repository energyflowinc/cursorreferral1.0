import { Badge } from "./ui/badge";

type StatusType = "Completed" | "Installation Scheduled" | "Quote Provided" | "Pending";
type RewardStatusType = "Paid" | "Pending";

interface StatusBadgeProps {
  status: StatusType | RewardStatusType;
  type: "referral" | "reward";
}

export function StatusBadge({ status, type }: StatusBadgeProps) {
  let variant: 
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | undefined;
  
  if (type === "referral") {
    switch (status) {
      case "Completed":
        variant = "success";
        break;
      case "Installation Scheduled":
        variant = "info";
        break;
      case "Quote Provided":
        variant = "warning";
        break;
      case "Pending":
        variant = "secondary";
        break;
      default:
        variant = "default";
    }
  } else {
    // reward status
    switch (status) {
      case "Paid":
        variant = "success";
        break;
      case "Pending":
        variant = "warning";
        break;
      default:
        variant = "default";
    }
  }
  
  return <Badge variant={variant}>{status}</Badge>;
} 
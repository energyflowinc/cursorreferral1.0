import { StatusBadge } from "./status-badge";
import { Button } from "./ui/button";
import { Eye, Edit, CheckCircle, MoreHorizontal } from "lucide-react";

interface Referral {
  id: number;
  referrer: string;
  referrerLocation: string;
  referralCode: string;
  referredCustomer: string;
  referredLocation: string;
  status: "Completed" | "Installation Scheduled" | "Quote Provided" | "Pending";
  date: string;
  rewardStatus: "Paid" | "Pending";
  amount: string;
}

interface ReferralsTableProps {
  referrals: Referral[];
  compact?: boolean;
}

export function ReferralsTable({ referrals, compact = false }: ReferralsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer</th>
              {!compact && (
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer's Location</th>
              )}
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referral Code</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referred Customer</th>
              {!compact && (
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referred Location</th>
              )}
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reward</th>
              {!compact && (
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              )}
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {referrals.map((referral) => (
              <tr key={referral.id} className="hover:bg-gray-50">
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{referral.referrer}</td>
                {!compact && (
                  <td className="py-4 px-6 text-sm text-gray-500">{referral.referrerLocation}</td>
                )}
                <td className="py-4 px-6 text-sm text-gray-500 font-mono">{referral.referralCode}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{referral.referredCustomer}</td>
                {!compact && (
                  <td className="py-4 px-6 text-sm text-gray-500">{referral.referredLocation}</td>
                )}
                <td className="py-4 px-6 text-sm">
                  <StatusBadge status={referral.status} type="referral" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">{referral.date}</td>
                <td className="py-4 px-6 text-sm">
                  <StatusBadge status={referral.rewardStatus} type="reward" />
                </td>
                {!compact && (
                  <td className="py-4 px-6 text-sm text-gray-500">{referral.amount}</td>
                )}
                <td className="py-4 px-6 text-sm">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" title="View Details">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Edit">
                      <Edit className="h-4 w-4" />
                    </Button>
                    {referral.rewardStatus === "Pending" && referral.status === "Completed" && (
                      <Button variant="ghost" size="icon" title="Process Reward">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" title="More Actions">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 
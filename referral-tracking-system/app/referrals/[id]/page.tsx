import Link from "next/link";
import { Header } from "../../components/header";
import { StatusBadge } from "../../components/status-badge";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Edit, Download, Printer, CheckCircle } from "lucide-react";

// In a real app, we would fetch the referral data from the API
// This is just a sample for demonstration purposes
const getReferral = (id: string) => {
  const referrals = [
    { 
      id: 1, 
      referrer: "John Smith", 
      referralCode: "JOHNS123456", 
      referrerLocation: "123 Maple Street, Boston, MA 02108", 
      referredCustomer: "Emma Johnson", 
      referredLocation: "45 Harvard Square, Cambridge, MA 02138", 
      status: "Completed", 
      date: "2024-02-28", 
      rewardStatus: "Paid", 
      amount: "$50",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      notes: "Customer was very satisfied with the service. Referred their neighbor for window replacement.",
      timeline: [
        { date: "2024-02-15", event: "Referral Created", user: "John Doe" },
        { date: "2024-02-20", event: "Quote Provided", user: "Sarah Jones" },
        { date: "2024-02-25", event: "Installation Scheduled", user: "Mike Wilson" },
        { date: "2024-02-28", event: "Installation Completed", user: "Mike Wilson" },
        { date: "2024-02-28", event: "Reward Issued", user: "John Doe" },
      ]
    },
    { 
      id: 2, 
      referrer: "Maria Garcia", 
      referralCode: "MARIA234567", 
      referrerLocation: "789 Congress Ave, Austin, TX 78701", 
      referredCustomer: "David Brown", 
      referredLocation: "567 Main Street, Round Rock, TX 78664", 
      status: "Installation Scheduled", 
      date: "2024-03-05", 
      rewardStatus: "Pending", 
      amount: "$50",
      email: "maria.garcia@example.com",
      phone: "(555) 987-6543",
      notes: "Customer is interested in solar panel installation. Appointment scheduled for next week.",
      timeline: [
        { date: "2024-02-20", event: "Referral Created", user: "John Doe" },
        { date: "2024-02-25", event: "Quote Provided", user: "Sarah Jones" },
        { date: "2024-03-01", event: "Installation Scheduled", user: "Mike Wilson" },
      ]
    },
  ];
  
  return referrals.find(ref => ref.id.toString() === id) || referrals[0];
};

export default function ReferralDetail({ params }: { params: { id: string } }) {
  const referral = getReferral(params.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/referrals" className="text-indigo-600 hover:underline flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Referrals
          </Link>
        </div>

        {/* Page Title and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-800">Referral #{referral.id}</h1>
              <StatusBadge status={referral.status} type="referral" />
            </div>
            <p className="text-gray-600">Created on {referral.date}</p>
          </div>
          <div className="flex gap-3">
            <Link href={`/referrals/edit/${referral.id}`}>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </Link>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            {referral.rewardStatus === "Pending" && referral.status === "Completed" && (
              <Button className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Process Reward
              </Button>
            )}
          </div>
        </div>

        {/* Referral Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Referral Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Referrer</h3>
                <p className="mt-1 text-base font-medium">{referral.referrer}</p>
                <p className="mt-1 text-sm text-gray-500">{referral.email}</p>
                <p className="mt-1 text-sm text-gray-500">{referral.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Referrer's Location</h3>
                <p className="mt-1 text-sm">{referral.referrerLocation}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Referred Customer</h3>
                <p className="mt-1 text-base font-medium">{referral.referredCustomer}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Referred Location</h3>
                <p className="mt-1 text-sm">{referral.referredLocation}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Referral Code</h3>
                <p className="mt-1 text-sm font-mono">{referral.referralCode}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Notes</h3>
                <p className="mt-1 text-sm">{referral.notes}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Reward Information</h2>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Reward Status</h3>
              <div className="mt-1">
                <StatusBadge status={referral.rewardStatus} type="reward" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Reward Amount</h3>
              <p className="mt-1 text-xl font-bold text-gray-800">{referral.amount}</p>
            </div>
            {referral.rewardStatus === "Paid" && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500">Payment Date</h3>
                <p className="mt-1 text-sm">{referral.date}</p>
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Timeline</h2>
          <ol className="relative border-l border-gray-200 ml-3">
            {referral.timeline.map((item, index) => (
              <li key={index} className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white">
                  <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                </span>
                <div className="flex items-baseline">
                  <time className="block mb-1 text-sm font-normal leading-none text-gray-500">
                    {item.date}
                  </time>
                  <p className="mb-1 ml-3 text-base font-normal text-gray-800">
                    {item.event} <span className="text-gray-500 text-sm">by {item.user}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
} 
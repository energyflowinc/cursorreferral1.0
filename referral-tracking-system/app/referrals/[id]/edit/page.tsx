import Link from "next/link";
import { Header } from "../../../components/header";
import { ReferralForm } from "../../../components/referral-form";
import { ArrowLeft } from "lucide-react";

// In a real app, we would fetch the referral data from the API
// This is just a sample for demonstration purposes
const getSampleReferral = (id: string) => {
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
      amount: "$50" 
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
      amount: "$50" 
    },
  ];
  
  return referrals.find(ref => ref.id.toString() === id) || referrals[0];
};

export default function EditReferral({ params }: { params: { id: string } }) {
  const referral = getSampleReferral(params.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/referrals" className="text-indigo-600 hover:underline flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Referrals
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Edit Referral</h1>
          <p className="text-gray-600">Update referral information</p>
        </div>

        {/* Referral Form */}
        <ReferralForm 
          initialData={referral}
          isEdit={true}
          onSubmit={(data) => {
            // In a real application, this would submit to an API
            console.log('Form submitted:', data);
            // Redirect to referrals page
            window.location.href = '/referrals';
          }}
          onCancel={() => {
            // Redirect back to referrals page
            window.location.href = '/referrals';
          }}
        />
      </div>
    </div>
  );
} 
import Link from "next/link";
import { Header } from "../../components/header";
import { ReferralForm } from "../../components/referral-form";
import { ArrowLeft } from "lucide-react";

export default function NewReferral() {
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
          <h1 className="text-2xl font-bold text-gray-800 mt-2">New Referral</h1>
          <p className="text-gray-600">Create a new homeowner referral</p>
        </div>

        {/* Referral Form */}
        <ReferralForm 
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
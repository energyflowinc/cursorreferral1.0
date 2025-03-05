"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  CheckCircle,
  DollarSign,
  Calendar,
  ArrowRight,
  PlayCircle,
  Shield,
  Sun,
  Zap
} from "lucide-react";

// Sample campaign data - in a real app, this would be fetched based on the referral code
const campaignData = {
  title: "Save on Energy Costs with Our Home Performance Program",
  description: "Join thousands of homeowners who have reduced their energy bills and increased their home comfort through our comprehensive energy savings program.",
  videoUrl: "https://www.youtube.com/embed/example",
  programDetails: `Our Home Performance Program is designed to help homeowners achieve maximum energy efficiency while improving comfort and reducing utility bills. The program includes:

• Comprehensive home energy assessment
• Detailed recommendations for improvements
• Access to state and federal rebates
• Professional installation services
• Quality assurance inspections`,
  
  rebateInfo: `Available Rebates and Incentives:

• Up to $2,000 in federal tax credits
• State-specific rebates up to $5,000
• Utility company incentives
• Special financing options available`,
  
  referralReward: 250,
  ctaText: "Schedule Your Free Energy Assessment"
};

export default function ReferralLanding() {
  const params = useParams();
  const referralCode = params.code as string;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would submit the lead to an API
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Your Interest!</h2>
            <p className="text-gray-600 mb-6">
              We've received your information and will contact you shortly to schedule your free energy assessment.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100">
              Reference Code: {referralCode}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{campaignData.title}</h1>
          <p className="text-xl mb-8">{campaignData.description}</p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span>Save on Energy Bills</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span>Professional Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6" />
              <span>Eco-Friendly Solutions</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Program Info */}
          <div>
            {/* Video Section */}
            {campaignData.videoUrl && (
              <div className="mb-12">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src={campaignData.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Program Details */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Details</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8 whitespace-pre-line">
                {campaignData.programDetails}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Rebates</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8 whitespace-pre-line">
                {campaignData.rebateInfo}
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <div className="flex items-center gap-3 text-green-700 mb-2">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-semibold">Why Act Now?</h3>
                </div>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Limited-time rebates available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Start saving on energy bills immediately</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Professional installation by certified experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Column - Lead Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{campaignData.ctaText}</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and our team will contact you to schedule your assessment.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-300" : ""}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-300" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-red-300" : ""}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "border-red-300" : ""}
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Assessment Date
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <input type="hidden" name="referralCode" value={referralCode} />
                
                <Button type="submit" className="w-full gap-2">
                  Schedule Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted about our energy savings program.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
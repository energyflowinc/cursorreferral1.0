"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../../components/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  ArrowLeft,
  Save,
  X,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Video,
  Image as ImageIcon,
  Link as LinkIcon,
  Plus,
  Trash2,
  Eye
} from "lucide-react";

export default function NewCampaign() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'details' | 'message' | 'landing'>('details');
  const [formData, setFormData] = useState({
    name: "",
    type: "email",
    audience: "all",
    schedule: "one-time",
    scheduledDate: "",
    messageSubject: "",
    messageBody: "",
    landingTitle: "",
    landingDescription: "",
    videoUrl: "",
    programDetails: "",
    rebateInfo: "",
    ctaText: "Schedule Free Energy Assessment",
    referralReward: "250"
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      newErrors.name = "Campaign name is required";
    }
    
    if (!formData.messageSubject.trim() && formData.type !== "sms") {
      newErrors.messageSubject = "Email subject is required";
    }
    
    if (!formData.messageBody.trim()) {
      newErrors.messageBody = "Message content is required";
    }
    
    if (!formData.landingTitle.trim()) {
      newErrors.landingTitle = "Landing page title is required";
    }
    
    if (!formData.landingDescription.trim()) {
      newErrors.landingDescription = "Landing page description is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the data to an API
      alert("Campaign created successfully!");
      router.push("/campaigns");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/campaigns" className="text-gray-600 hover:text-green-600 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Campaigns
          </Link>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Create New Campaign</h1>
            <p className="text-gray-600">Design your referral campaign and customize the landing page</p>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-100">
            <div className="flex">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'details'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Campaign Details
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'message'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('message')}
              >
                Message Content
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'landing'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('landing')}
              >
                Landing Page
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              {/* Campaign Details Tab */}
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Campaign Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-300" : ""}
                      placeholder="e.g., Spring Energy Savings Campaign"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Campaign Type *
                    </label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => handleChange({ target: { name: 'type', value } } as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="email+sms">Email + SMS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-1">
                      Target Audience *
                    </label>
                    <Select
                      value={formData.audience}
                      onValueChange={(value) => handleChange({ target: { name: 'audience', value } } as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select target audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Customers</SelectItem>
                        <SelectItem value="solar">Solar Installation Customers</SelectItem>
                        <SelectItem value="hvac">HVAC Installation Customers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="schedule" className="block text-sm font-medium text-gray-700 mb-1">
                      Schedule
                    </label>
                    <Select
                      value={formData.schedule}
                      onValueChange={(value) => handleChange({ target: { name: 'schedule', value } } as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time Send</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {formData.schedule === "one-time" && (
                    <div>
                      <label htmlFor="scheduledDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Scheduled Date
                      </label>
                      <Input
                        id="scheduledDate"
                        name="scheduledDate"
                        type="datetime-local"
                        value={formData.scheduledDate}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              )}
              
              {/* Message Content Tab */}
              {activeTab === 'message' && (
                <div className="space-y-6">
                  {formData.type !== "sms" && (
                    <div>
                      <label htmlFor="messageSubject" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Subject *
                      </label>
                      <Input
                        id="messageSubject"
                        name="messageSubject"
                        value={formData.messageSubject}
                        onChange={handleChange}
                        className={errors.messageSubject ? "border-red-300" : ""}
                        placeholder="e.g., Earn $250 for Referring Friends to Our Energy Savings Program"
                      />
                      {errors.messageSubject && (
                        <p className="mt-1 text-sm text-red-600">{errors.messageSubject}</p>
                      )}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="messageBody" className="block text-sm font-medium text-gray-700 mb-1">
                      Message Content *
                    </label>
                    <textarea
                      id="messageBody"
                      name="messageBody"
                      rows={6}
                      value={formData.messageBody}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.messageBody ? "border-red-300" : ""
                      }`}
                      placeholder="Enter your message content here. Use {{referral_link}} to insert the unique referral link."
                    ></textarea>
                    {errors.messageBody && (
                      <p className="mt-1 text-sm text-red-600">{errors.messageBody}</p>
                    )}
                    <p className="mt-2 text-sm text-gray-500">
                      Available variables: {"{customer_name}"}, {"{referral_link}"}, {"{reward_amount}"}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Message Preview</h3>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      {formData.type !== "sms" && (
                        <div className="mb-2">
                          <strong>Subject:</strong> {formData.messageSubject || "No subject"}
                        </div>
                      )}
                      <div>
                        <strong>Content:</strong><br />
                        {formData.messageBody || "No content"}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Landing Page Tab */}
              {activeTab === 'landing' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="landingTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Landing Page Title *
                    </label>
                    <Input
                      id="landingTitle"
                      name="landingTitle"
                      value={formData.landingTitle}
                      onChange={handleChange}
                      className={errors.landingTitle ? "border-red-300" : ""}
                      placeholder="e.g., Save on Energy Costs with Our Home Performance Program"
                    />
                    {errors.landingTitle && (
                      <p className="mt-1 text-sm text-red-600">{errors.landingTitle}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="landingDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Landing Page Description *
                    </label>
                    <textarea
                      id="landingDescription"
                      name="landingDescription"
                      rows={4}
                      value={formData.landingDescription}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.landingDescription ? "border-red-300" : ""
                      }`}
                      placeholder="Enter a compelling description of your energy savings program"
                    ></textarea>
                    {errors.landingDescription && (
                      <p className="mt-1 text-sm text-red-600">{errors.landingDescription}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                      Video URL
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="videoUrl"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        placeholder="e.g., https://youtube.com/watch?v=..."
                      />
                      <Button type="button" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Add a video to showcase your energy savings program
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="programDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Program Details
                    </label>
                    <textarea
                      id="programDetails"
                      name="programDetails"
                      rows={4}
                      value={formData.programDetails}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Describe the details of your state energy program"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="rebateInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Rebates
                    </label>
                    <textarea
                      id="rebateInfo"
                      name="rebateInfo"
                      rows={4}
                      value={formData.rebateInfo}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="List available rebates and incentives"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="ctaText" className="block text-sm font-medium text-gray-700 mb-1">
                      Call-to-Action Text
                    </label>
                    <Input
                      id="ctaText"
                      name="ctaText"
                      value={formData.ctaText}
                      onChange={handleChange}
                      placeholder="e.g., Schedule Your Free Energy Assessment"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="referralReward" className="block text-sm font-medium text-gray-700 mb-1">
                      Referral Reward Amount ($)
                    </label>
                    <Input
                      id="referralReward"
                      name="referralReward"
                      type="number"
                      value={formData.referralReward}
                      onChange={handleChange}
                      placeholder="e.g., 250"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="button" variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Preview Landing Page
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <Link href="/campaigns">
                <Button type="button" variant="outline" className="gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="gap-2">
                <Save className="h-4 w-4" />
                Create Campaign
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 
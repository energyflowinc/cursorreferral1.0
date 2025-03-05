"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "../../components/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select } from "../../components/ui/select";
import { ArrowLeft, Save, X } from "lucide-react";

export default function NewCustomer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "Solar",
    installationDate: "",
    projectValue: "",
    notes: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
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
      newErrors.name = "Customer name is required";
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
    
    if (!formData.installationDate) {
      newErrors.installationDate = "Installation date is required";
    }
    
    if (!formData.projectValue) {
      newErrors.projectValue = "Project value is required";
    } else if (isNaN(Number(formData.projectValue)) || Number(formData.projectValue) <= 0) {
      newErrors.projectValue = "Project value must be a positive number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the data to an API
      alert("Customer added successfully!");
      router.push("/customers");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/customers" className="text-gray-600 hover:text-green-600 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Customers
          </Link>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800">Add New Customer</h1>
            <p className="text-gray-600">Enter customer details to add them to your system</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Customer Name *
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
                      Address *
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
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type *
                    </label>
                    <Select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Solar">Solar</option>
                      <option value="HVAC">HVAC</option>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="installationDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Installation Date *
                    </label>
                    <Input
                      id="installationDate"
                      name="installationDate"
                      type="date"
                      value={formData.installationDate}
                      onChange={handleChange}
                      className={errors.installationDate ? "border-red-300" : ""}
                    />
                    {errors.installationDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.installationDate}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="projectValue" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Value ($) *
                    </label>
                    <Input
                      id="projectValue"
                      name="projectValue"
                      type="number"
                      min="0"
                      step="100"
                      value={formData.projectValue}
                      onChange={handleChange}
                      className={errors.projectValue ? "border-red-300" : ""}
                    />
                    {errors.projectValue && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectValue}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
              <Link href="/customers">
                <Button type="button" variant="outline" className="gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="gap-2">
                <Save className="h-4 w-4" />
                Save Customer
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 
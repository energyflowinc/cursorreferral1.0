"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { X, Copy, Check } from "lucide-react";

interface GenerateCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GenerateCodeModal({ isOpen, onClose }: GenerateCodeModalProps) {
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [projectType, setProjectType] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random code based on customer name and random characters
    const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
    const namePrefix = customerName.split(" ")[0].substring(0, 5).toUpperCase();
    const newCode = `${namePrefix}${randomChars}`;
    setGeneratedCode(newCode);
    setStep(2);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setStep(1);
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
    setCustomerAddress("");
    setProjectType("");
    setGeneratedCode("");
    setCopied(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {step === 1 ? "Generate New Referral Code" : "Referral Code Generated"}
          </h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name*
                  </label>
                  <Input
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter customer name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="customerPhone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label htmlFor="customerAddress" className="block text-sm font-medium text-gray-700 mb-1">
                    Address*
                  </label>
                  <Input
                    id="customerAddress"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Enter customer address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type*
                  </label>
                  <Select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="solar">Solar Installation</option>
                    <option value="hvac">HVAC Upgrade</option>
                    <option value="insulation">Home Insulation</option>
                    <option value="windows">Energy Efficient Windows</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  Generate Code
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-2">Referral Code for {customerName}</p>
                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-800 mr-2">{generatedCode}</div>
                  <button 
                    onClick={handleCopyCode} 
                    className="text-green-600 hover:text-green-700"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Share this code with {customerName} to give to their friends and family. 
                When used, you'll be notified of a new referral.
              </p>

              <div className="flex flex-col space-y-3">
                <Button onClick={() => window.open(`mailto:${customerEmail}?subject=Your%20Referral%20Code&body=Hello%20${customerName},%0A%0AThank%20you%20for%20choosing%20our%20services.%20Your%20referral%20code%20is:%20${generatedCode}%0A%0AShare%20this%20code%20with%20friends%20and%20family%20who%20might%20be%20interested%20in%20our%20services.%20When%20they%20use%20your%20code,%20you'll%20receive%20a%20$250%20reward%20after%20their%20project%20is%20completed.%0A%0AThank%20you,%0AHomeProReferrals%20Team`)}>
                  Email Code to Customer
                </Button>
                <Button variant="outline" onClick={handleClose}>
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
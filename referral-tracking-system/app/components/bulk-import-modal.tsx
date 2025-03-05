"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { X, Upload, FileText, Check, AlertCircle } from "lucide-react";

interface BulkImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ImportStatus = "idle" | "uploading" | "validating" | "success" | "error";

export function BulkImportModal({ isOpen, onClose }: BulkImportModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ImportStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [validationResults, setValidationResults] = useState<{
    total: number;
    valid: number;
    invalid: number;
    errors: string[];
  }>({
    total: 0,
    valid: 0,
    invalid: 0,
    errors: [],
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setStatus("idle");
      setValidationResults({
        total: 0,
        valid: 0,
        invalid: 0,
        errors: [],
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      setStatus("idle");
      setValidationResults({
        total: 0,
        valid: 0,
        invalid: 0,
        errors: [],
      });
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setStatus("uploading");
    setProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus("validating");
          validateFile();
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const validateFile = () => {
    // Simulate file validation
    setTimeout(() => {
      // For demo purposes, we'll simulate a CSV file with some validation errors
      const isCSV = file?.name.endsWith(".csv");
      
      if (!isCSV) {
        setStatus("error");
        setValidationResults({
          total: 0,
          valid: 0,
          invalid: 0,
          errors: ["File must be a CSV file"],
        });
        return;
      }

      // Simulate validation results
      const mockTotal = Math.floor(Math.random() * 50) + 50; // 50-100 records
      const mockInvalid = Math.floor(Math.random() * 5); // 0-5 invalid records
      const mockValid = mockTotal - mockInvalid;

      const mockErrors = [];
      if (mockInvalid > 0) {
        mockErrors.push(`Row 3: Missing email address`);
        mockErrors.push(`Row 7: Invalid phone number format`);
        mockErrors.push(`Row 12: Missing address`);
        mockErrors.push(`Row 18: Duplicate customer name`);
        mockErrors.push(`Row 23: Invalid project type`);
      }

      setValidationResults({
        total: mockTotal,
        valid: mockValid,
        invalid: mockInvalid,
        errors: mockErrors.slice(0, mockInvalid),
      });

      setStatus(mockInvalid > 0 ? "error" : "success");
    }, 1500);
  };

  const handleImport = () => {
    // In a real application, this would process the valid records
    alert(`Successfully imported ${validationResults.valid} customer records! You can now generate referral codes for these customers.`);
    handleClose();
  };

  const handleClose = () => {
    setFile(null);
    setStatus("idle");
    setProgress(0);
    setValidationResults({
      total: 0,
      valid: 0,
      invalid: 0,
      errors: [],
    });
    onClose();
  };

  const handleDownloadTemplate = () => {
    // In a real application, this would download a CSV template
    const template = `Customer Name,Email,Phone,Address,Project Type,Installation Date,Project Value
John Doe,john@example.com,555-123-4567,"123 Main St, Anytown, CA 12345",Solar,2023-10-15,25000
Jane Smith,jane@example.com,555-987-6543,"456 Oak Ave, Somewhere, NY 67890",HVAC,2023-11-20,18000`;

    const blob = new Blob([template], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "customer_import_template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Import Existing Customers
          </h2>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {status === "idle" && (
            <>
              <p className="text-gray-600 mb-4">
                Import your existing customers to start managing your referral program. 
                You'll be able to generate referral codes for these customers after import.
              </p>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".csv,.xlsx,.xls"
                  className="hidden"
                />
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {file ? file.name : "Drag and drop your customer file here"}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {file 
                    ? `${(file.size / 1024).toFixed(2)} KB - ${new Date().toLocaleDateString()}`
                    : "or click to browse (CSV format recommended)"
                  }
                </p>
                {file && (
                  <Button onClick={handleUpload} className="mt-2">
                    Upload and Validate
                  </Button>
                )}
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
                  <div>
                    <h4 className="font-medium text-gray-700">Need a template?</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      Download our CSV template to ensure your customer data is formatted correctly.
                      Include past project details to better track potential referrals.
                    </p>
                    <Button variant="outline" size="sm" onClick={handleDownloadTemplate}>
                      Download Template
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {status === "uploading" && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Uploading File</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">{progress}% Complete</p>
            </div>
          )}

          {status === "validating" && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Validating Customer Data</h3>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Checking for errors and preparing your customer data...</p>
            </div>
          )}

          {status === "success" && (
            <div className="py-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-center text-gray-700 mb-4">Customer Data Validated Successfully</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Total Customers</div>
                    <div className="text-xl font-bold text-gray-800">{validationResults.total}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Valid Records</div>
                    <div className="text-xl font-bold text-green-600">{validationResults.valid}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Invalid Records</div>
                    <div className="text-xl font-bold text-gray-800">0</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-center">
                After importing, you'll be able to generate referral codes for these customers
                and track their referrals through the EnergyFlow platform.
              </p>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={handleImport}>
                  Import {validationResults.valid} Customers
                </Button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="py-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-center text-gray-700 mb-4">Validation Issues Found</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Total Customers</div>
                    <div className="text-xl font-bold text-gray-800">{validationResults.total}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Valid Records</div>
                    <div className="text-xl font-bold text-green-600">{validationResults.valid}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Invalid Records</div>
                    <div className="text-xl font-bold text-red-600">{validationResults.invalid}</div>
                  </div>
                </div>

                {validationResults.errors.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Issues to Fix:</h4>
                    <div className="bg-white p-3 rounded border border-red-200 max-h-40 overflow-y-auto">
                      <ul className="text-sm text-gray-600 space-y-1">
                        {validationResults.errors.map((error, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {error}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                {validationResults.valid > 0 && (
                  <Button onClick={handleImport}>
                    Import {validationResults.valid} Valid Customers
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
"use client";

import React, { useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Button from "../../../../components/Button";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import {
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  DollarSign,
  Calendar,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Shield,
  Sparkles,
} from "lucide-react";

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;

  // Business Information
  businessName: string;
  businessType: string;
  yearEstablished: string;
  taxId: string;
  website: string;

  // Financing Details
  financingType: "inventory" | "logistics" | "lease";
  requestedAmount: string;
  term: string;
  purpose: string;

  // Additional Information
  monthlyRevenue: string;
  hasCollateral: string;
  comments: string;

  // Documents
  businessLicense: File | null;
  financialStatements: File | null;
  tradingHistory: File | null;
}

export default function ApplyCapitalPage() {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    businessName: "",
    businessType: "",
    yearEstablished: "",
    taxId: "",
    website: "",
    financingType: "inventory",
    requestedAmount: "",
    term: "90",
    purpose: "",
    monthlyRevenue: "",
    hasCollateral: "",
    comments: "",
    businessLicense: null,
    financialStatements: null,
    tradingHistory: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
    }

    if (currentStep === 2) {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
      if (!formData.businessType) newErrors.businessType = "Business type is required";
      if (!formData.yearEstablished) newErrors.yearEstablished = "Year established is required";
    }

    if (currentStep === 3) {
      if (!formData.requestedAmount) newErrors.requestedAmount = "Amount is required";
      if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
      if (!formData.monthlyRevenue) newErrors.monthlyRevenue = "Monthly revenue is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3 | 4);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(step)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/capital/apply', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    icon: Icon,
    required = false,
  }: {
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    icon?: React.ElementType;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={formData[name] as string}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full ${Icon ? "pl-12" : "pl-4"} pr-4 py-3.5 border-2 ${
            errors[name] ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-green-500"
          } rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-gray-900 font-medium`}
        />
      </div>
      {errors[name] && (
        <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <Header />
        <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
          <div className="max-w-2xl w-full bg-white rounded-3xl shadow-soft-2xl p-12 text-center space-y-6 border border-green-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">
              Application Submitted Successfully!
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
              Thank you for applying to Kassongo Capital. Our team will review your application and contact you within 2-3 business days.
            </p>
            <div className="bg-green-50 rounded-2xl p-6 space-y-3 border border-green-100">
              <p className="text-sm font-bold text-green-900">What happens next?</p>
              <ul className="text-xs text-gray-700 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Our team reviews your application and documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>We conduct a preliminary credit assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>You'll receive a decision or request for additional information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Upon approval, funds are disbursed according to the agreed terms</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="primary" href="/">
                Back to Home
              </Button>
              <Button variant="outline" href="/products/kassongo-capital">
                Learn More About Capital
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <Header />

      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Button
              variant="ghost"
              href="/products/kassongo-capital"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-800 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Kassongo Capital
            </Button>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-900 rounded-2xl flex items-center justify-center shadow-soft">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900">
                Apply for Capital
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the application form below. Our Shariah-compliant financing solutions help you grow your trade business.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div
                  className="h-full bg-green-600 transition-all duration-500"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
              </div>

              {[
                { num: 1, label: "Personal Info", icon: User },
                { num: 2, label: "Business Details", icon: Building2 },
                { num: 3, label: "Financing", icon: DollarSign },
                { num: 4, label: "Documents", icon: FileText },
              ].map((s) => {
                const StepIcon = s.icon;
                const isActive = step === s.num;
                const isCompleted = step > s.num;

                return (
                  <div key={s.num} className="flex flex-col items-center gap-2 relative">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isCompleted
                          ? "bg-green-600 text-white shadow-soft"
                          : isActive
                          ? "bg-green-900 text-yellow-400 shadow-soft-lg scale-110"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <StepIcon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-bold hidden sm:block ${
                        isActive ? "text-green-900" : "text-gray-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-soft-xl p-8 md:p-12 border border-gray-100">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <User className="w-6 h-6 text-green-800" />
                  <h2 className="text-2xl font-black text-gray-900">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    icon={User}
                    required
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    icon={User}
                    required
                  />
                </div>

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  icon={Mail}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    icon={Phone}
                    required
                  />
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3.5 border-2 ${
                          errors.country ? "border-red-300" : "border-gray-200"
                        } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium`}
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="TR">Turkey</option>
                        <option value="MY">Malaysia</option>
                        <option value="ID">Indonesia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {errors.country && (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <Building2 className="w-6 h-6 text-green-800" />
                  <h2 className="text-2xl font-black text-gray-900">Business Information</h2>
                </div>

                <InputField
                  label="Business Name"
                  name="businessName"
                  placeholder="Your Company LLC"
                  icon={Building2}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Business Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 border-2 ${
                        errors.businessType ? "border-red-300" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium`}
                    >
                      <option value="">Select Type</option>
                      <option value="sole_proprietor">Sole Proprietor</option>
                      <option value="llc">LLC</option>
                      <option value="corporation">Corporation</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  <InputField
                    label="Year Established"
                    name="yearEstablished"
                    type="number"
                    placeholder="2020"
                    icon={Calendar}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Tax ID / EIN"
                    name="taxId"
                    placeholder="12-3456789"
                    icon={FileText}
                  />
                  <InputField
                    label="Website (Optional)"
                    name="website"
                    type="url"
                    placeholder="https://yourcompany.com"
                    icon={Globe}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Financing Details */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <DollarSign className="w-6 h-6 text-green-800" />
                  <h2 className="text-2xl font-black text-gray-900">Financing Details</h2>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Type of Financing <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: "inventory", label: "Inventory Financing", desc: "Murabaha for inventory" },
                      { value: "logistics", label: "Logistics Financing", desc: "Qard Hassan for logistics" },
                      { value: "lease", label: "Equipment Lease", desc: "Ijarah for equipment" },
                    ].map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, financingType: type.value as any }))
                        }
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          formData.financingType === type.value
                            ? "border-green-600 bg-green-50 shadow-soft"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                              formData.financingType === type.value
                                ? "border-green-600 bg-green-600"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.financingType === type.value && (
                              <div className="w-2 h-2 bg-white rounded-full" />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-sm text-gray-900">{type.label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{type.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Requested Amount"
                    name="requestedAmount"
                    type="number"
                    placeholder="50000"
                    icon={DollarSign}
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Repayment Term <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="term"
                      value={formData.term}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium"
                    >
                      <option value="30">30 Days</option>
                      <option value="60">60 Days</option>
                      <option value="90">90 Days</option>
                      <option value="120">120 Days</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Purpose of Financing <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder="Describe how you plan to use the funds..."
                    rows={4}
                    className={`w-full px-4 py-3.5 border-2 ${
                      errors.purpose ? "border-red-300" : "border-gray-200"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium resize-none`}
                  />
                  {errors.purpose && (
                    <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.purpose}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Monthly Revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 border-2 ${
                        errors.monthlyRevenue ? "border-red-300" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium`}
                    >
                      <option value="">Select Range</option>
                      <option value="0-10k">$0 - $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                    {errors.monthlyRevenue && (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.monthlyRevenue}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Do you have collateral?
                    </label>
                    <select
                      name="hasCollateral"
                      value={formData.hasCollateral}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium"
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Any additional information you'd like to share..."
                    rows={3}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-gray-900 font-medium resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                  <FileText className="w-6 h-6 text-green-800" />
                  <h2 className="text-2xl font-black text-gray-900">Required Documents</h2>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-bold mb-1">Document Requirements</p>
                    <ul className="text-xs space-y-1 text-blue-800">
                      <li>• All documents must be in PDF, JPEG, or PNG format</li>
                      <li>• Maximum file size: 5MB per document</li>
                      <li>• Documents must be clear and legible</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      field: "businessLicense" as keyof FormData,
                      label: "Business License or Registration",
                      required: true,
                    },
                    {
                      field: "financialStatements" as keyof FormData,
                      label: "Financial Statements (Last 6-12 months)",
                      required: false,
                    },
                    {
                      field: "tradingHistory" as keyof FormData,
                      label: "Trading History or Invoices",
                      required: false,
                    },
                  ].map((doc) => (
                    <div key={doc.field} className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700">
                        {doc.label} {doc.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, doc.field)}
                          className="hidden"
                          id={doc.field}
                        />
                        <label
                          htmlFor={doc.field}
                          className="flex items-center justify-center gap-3 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all group"
                        >
                          <Upload className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                          <div className="text-center">
                            {formData[doc.field] ? (
                              <div className="text-sm">
                                <p className="font-bold text-green-700">
                                  {(formData[doc.field] as File).name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {((formData[doc.field] as File).size / 1024).toFixed(2)} KB
                                </p>
                              </div>
                            ) : (
                              <div className="text-sm">
                                <p className="font-bold text-gray-700 group-hover:text-green-700">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  PDF, JPEG, PNG (Max 5MB)
                                </p>
                              </div>
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-100">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <Button type="button" variant="primary" onClick={nextStep} className="ml-auto">
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-green-700" />
                <span className="font-bold">Shariah Compliant</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-green-700" />
                <span className="font-bold">Secure Application</span>
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Sparkles className="w-4 h-4 text-green-700" />
                <span className="font-bold">Fast Approval</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

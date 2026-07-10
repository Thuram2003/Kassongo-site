"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AlertTriangle, X, CheckCircle, Info } from "lucide-react";

export default function ProhibitedItemsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-16">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-red-900/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-gray-900 mb-6">
              Prohibited & Restricted Items
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Please review this list carefully before shipping. Violations may result in package seizure, account termination, and legal consequences.
            </p>
          </div>
        </section>

        {/* Critical Warning */}
        <section className="py-12 px-6 bg-red-600">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <X className="w-8 h-8 text-white flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Strictly Prohibited</h2>
                <p className="text-red-50 leading-relaxed text-lg">
                  Drugs, illegal substances (including marijuana, psilocybin, etc.), and pharmaceutical medications of any kind cannot be shipped or exported under any circumstances. This policy is non-negotiable and violations will result in immediate account termination and reporting to authorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Absolutely Prohibited */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-7 h-7 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Absolutely Prohibited Items</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-900 mb-3">Drugs & Pharmaceuticals</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• All prescription medications</li>
                    <li>• Over-the-counter drugs</li>
                    <li>• Marijuana and CBD products</li>
                    <li>• Psilocybin and psychedelics</li>
                    <li>• Any controlled substances</li>
                    <li>• Vitamins and supplements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-red-900 mb-3">Weapons & Firearms</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Firearms and gun replicas</li>
                    <li>• Ammunition and explosives</li>
                    <li>• Gun parts and accessories</li>
                    <li>• Knives and bladed weapons</li>
                    <li>• Stun guns and tasers</li>
                    <li>• Military/police equipment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-red-900 mb-3">Hazardous Materials</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Flammable liquids and gases</li>
                    <li>• Explosives and fireworks</li>
                    <li>• Toxic chemicals</li>
                    <li>• Radioactive materials</li>
                    <li>• Corrosive substances</li>
                    <li>• Biological hazards</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-red-900 mb-3">Illegal Items</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Counterfeit goods</li>
                    <li>• Pirated media</li>
                    <li>• Stolen property</li>
                    <li>• Illegal wildlife products</li>
                    <li>• Pornographic materials</li>
                    <li>• Human remains</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Heavily Restricted */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-7 h-7 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Heavily Restricted Items</h2>
              </div>
              <p className="text-gray-700 mb-6">
                These items may be shipped with restrictions, special handling, or additional fees. Contact support before shipping.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-orange-900 mb-3">Combustible Items</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Paints and paint thinners</li>
                    <li>• Oils and lubricants</li>
                    <li>• Lighters and matches</li>
                    <li>• Perfumes (high alcohol content)</li>
                    <li>• Nail polish and remover</li>
                    <li>• Hair dye and chemicals</li>
                    <li>• Aerosol cans</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-orange-900 mb-3">Pressurized Items</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hair spray and styling products</li>
                    <li>• Shaving cream</li>
                    <li>• Spray cans of any type</li>
                    <li>• Compressed gas cylinders</li>
                    <li>• Fire extinguishers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-orange-900 mb-3">Electronics & Batteries</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Lithium batteries (loose)</li>
                    <li>• Power banks over 100Wh</li>
                    <li>• Damaged electronics</li>
                    <li>• E-cigarettes and vaping devices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-orange-900 mb-3">Alcohol & Tobacco</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Alcoholic beverages (any quantity)</li>
                    <li>• Tobacco products</li>
                    <li>• Cigarettes and cigars</li>
                    <li>• Nicotine products</li>
                    <li>• Vaping liquids</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Country-Specific Restrictions */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-7 h-7 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Country-Specific Restrictions</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Agricultural Products</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Many countries prohibit or restrict agricultural items:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm pl-4">
                    <li>• Plants, seeds, and soil</li>
                    <li>• Fresh fruits and vegetables</li>
                    <li>• Nuts and grains</li>
                    <li>• Animal products and fur</li>
                    <li>• Perishable foods</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Currency & Valuables</h3>
                  <ul className="space-y-2 text-gray-700 text-sm pl-4">
                    <li>• Cash and currency</li>
                    <li>• Money orders and bank drafts</li>
                    <li>• Credit/debit cards (including prepaid)</li>
                    <li>• Bullion and precious metals</li>
                    <li>• Bearer bonds</li>
                    <li>• Collectible stamps and coins</li>
                    <li>• Lottery tickets</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Jewelry & Precious Stones</h3>
                  <p className="text-gray-700 text-sm">
                    Jewelry is restricted to some countries and only insurable up to $500 maximum. Any shipments exceeding $500 will be uninsured and customer assumes all risk above this limit.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Restrictions */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Restrictions & Notes</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Animals</h3>
                    <p className="text-gray-700 text-sm">Animals and products made with animal fur are prohibited in most countries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Perishable Foods</h3>
                    <p className="text-gray-700 text-sm">Foods of any type that can spoil or require refrigeration are prohibited.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pornography</h3>
                    <p className="text-gray-700 text-sm">Pornographic materials are prohibited in most countries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hazmat Surcharges</h3>
                    <p className="text-gray-700 text-sm">Items deemed as dangerous goods according to IATA regulations may be subject to additional carrier surcharges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Surveillance Equipment</h3>
                    <p className="text-gray-700 text-sm">Surveillance devices, night vision equipment, and spy gear are prohibited.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consequences */}
            <div className="bg-red-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Consequences of Shipping Prohibited Items</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Packages will be refused, returned to sender, or disposed of</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Confiscation by customs or law enforcement authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Customer remains liable for all associated costs and fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Immediate account termination</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Reporting to relevant authorities for illegal items</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Legal prosecution under applicable laws</span>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Sure About an Item?</h2>
                  <p className="text-gray-700 mb-4">
                    If you're unsure whether an item can be shipped, please contact our support team BEFORE sending packages to our warehouse. We're here to help you stay compliant with shipping regulations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-900 text-white font-semibold rounded-xl hover:bg-green-800 transition-all"
                    >
                      Contact Support
                    </a>
                    <a
                      href="mailto:support@kassongo.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-900 transition-all"
                    >
                      support@kassongo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

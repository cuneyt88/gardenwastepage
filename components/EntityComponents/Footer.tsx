"use client";
import React from 'react';
import { useSkipStore } from '@/utils/store/skipStore';

const Footer = () => {
    const { selectedSkip } = useSkipStore();

    if (!selectedSkip) {
        return null; //If skip is not selected, do not show footer
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
            <div className="max-w-7xl mx-auto">
                <div className="lg:hidden">
                    {/* Mobile View Section */}
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">{selectedSkip.size} Yard Skip</h3>
                        <div>
                            <span className="text-xl font-bold text-[#0037C1]">£</span>
                            <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} days</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="btn-secondary w-full">Back</button>
                        <button className="btn-primary w-full">Continue</button>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-between">
                    {/* Desktop/Large Screen View Section */}
                    <div className="flex items-center gap-6">
                        <div>
                            <h3 className="font-medium">{selectedSkip.size} Yard Skip</h3>
                            <p className="text-sm text-gray-400">{selectedSkip.hire_period_days} days</p>
                        </div>
                        <div>
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0037C1]">£ {selectedSkip.price_before_vat ? selectedSkip.price_before_vat : "Contact for price information"}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="btn-secondary hover:bg-gray-700 transition-colors cursor-pointer">Back</button>
                        <button className="btn-primary flex items-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer">
                            Continue
                            {/* Arrow icon for continue button */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
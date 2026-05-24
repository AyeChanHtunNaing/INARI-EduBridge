import React from 'react';
import { 
  Heart, Home, Landmark, CircleDollarSign, ShieldCheck, MapPin, 
  CheckCircle, Briefcase, Info, Compass, Sparkles, BookOpen 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/sections/CTASection';

export default function StudentLifePage() {
  const accommodationOptions = [
    {
      title: "University Dormitories",
      costRange: "¥20,000 - ¥40,000 / month",
      desc: "Often the cheapest, safest accommodation. Commuting costs are near zero, and utilities are bundled. However, availability is limited and rules are strict.",
      icon: <Home className="w-5 h-5" />
    },
    {
      title: "Shared Houses",
      costRange: "¥40,000 - ¥65,000 / month",
      desc: "Great option to make friends. Communal kitchen and bath areas, with a private bedroom. Utilities are shared. Typically require no guarantor.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Private Apartments",
      costRange: "¥55,000 - ¥85,000+ / month",
      desc: "Maximum privacy. Requires buying furniture, signing utilities contracts, and occasionally paying high move-in costs (key money, guarantor fees).",
      icon: <Compass className="w-5 h-5" />
    }
  ];

  const expenses = [
    { item: "Rent / Housing", cost: "¥30,000 - ¥65,000", frequency: "Monthly", notes: "Depends on room type and location (Tokyo is higher)." },
    { item: "Food & Groceries", cost: "¥25,000 - ¥35,000", frequency: "Monthly", notes: "Cooking at home saves significant amounts." },
    { item: "Utilities (Gas, Water, Power)", cost: "¥8,000 - ¥12,000", frequency: "Monthly", notes: "Varies significantly by season (winter heating)." },
    { item: "Mobile & Wi-Fi Internet", cost: "¥3,500 - ¥6,000", frequency: "Monthly", notes: "Pocket Wi-Fi or local SIM contracts available." },
    { item: "National Health Insurance", cost: "¥1,500 - ¥2,500", frequency: "Monthly", notes: "Calculated based on student tax bracket." },
    { item: "Transportation", cost: "¥5,000 - ¥10,000", frequency: "Monthly", notes: "Students can purchase discounted student commuter passes." },
    { item: "Leisure & Personal Expenses", cost: "¥10,000 - ¥20,000", frequency: "Monthly", notes: "Varies by lifestyle." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Student Life' }]} className="mb-6" />

      {/* Page Header */}
      <SectionHeader
        badge="Daily Living Guide"
        title="Student Life in Japan"
        subtitle="Moving to Japan represents a massive lifestyle shift. Understand housing choices, average monthly living expenses, health insurance, and local part-time job opportunities before you land."
      />

      {/* Two Column Layout: Left Details / Right Expenses Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left main details area */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Housing choices */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold font-display text-charcoal pb-3 border-b border-cream flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <span>Housing & Lodging Choices</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accommodationOptions.map((opt, idx) => (
                <div key={idx} className="bg-white border border-cream rounded-3xl p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shrink-0 shadow-inner">
                      {opt.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-display text-charcoal leading-tight">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-semibold">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-cream/50 mt-4">
                    <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Estimated Cost</span>
                    <span className="text-xs font-black text-primary-dark">{opt.costRange}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part-time jobs */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold font-display text-charcoal pb-3 border-b border-cream flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <span>Part-Time Work Guidelines</span>
            </h2>

            <div className="p-6 bg-cream/15 border border-cream rounded-3xl space-y-4">
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-semibold">
                To work in Japan on a Student Visa, you MUST obtain a work permission sticker called <strong>Shikakugai-katsudo-kyoka (Permission to Engage in Activity other than that Permitted under the Status of Residence)</strong> from immigration upon arrival.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-cream/50 flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-charcoal block mb-0.5">28-Hour Weekly Limit</strong>
                    <span className="text-[11px] text-muted font-semibold leading-relaxed block">Students are strictly capped at 28 hours per week during academic semesters, increasing to 40 hours during long university breaks.</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-cream/50 flex items-start gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-charcoal block mb-0.5">Permitted Job Fields</strong>
                    <span className="text-[11px] text-muted font-semibold leading-relaxed block">Common jobs include tutoring, English language teaching, convenience store clerks, shared warehouse roles, and restaurant server staff.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration & Insurance */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold font-display text-charcoal pb-3 border-b border-cream flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>National Health Insurance & Registration</span>
            </h2>

            <div className="p-6 bg-white border border-cream rounded-3xl space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-muted leading-relaxed font-semibold space-y-3">
                  <p>
                    <strong>Local Residence Registration: </strong>
                    Within 14 days of securing long-term lodging, you must take your Residence Card (Zairyu Card) to the local Ward Office (Kuyakusho) and register your address.
                  </p>
                  <p>
                    <strong>National Health Insurance (Kokumin Kenko Hoken): </strong>
                    All residents on student visas are required to join the local health insurance scheme. It covers 70% of standard medical treatments and medications, meaning you only pay 30% of standard doctor fees!
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Right Expenses Table Column */}
        <aside className="space-y-8">
          
          {/* Monthly Budget card */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-5">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream flex items-center gap-2">
              <CircleDollarSign className="w-4 h-4 text-primary" />
              <span>Monthly Budget Estimate</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs border-collapse">
                <thead>
                  <tr className="border-b border-cream text-charcoal font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5">Category</th>
                    <th className="py-2.5 text-right">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream/35 text-muted font-semibold">
                  {expenses.map((exp, idx) => (
                    <tr key={idx} className="hover:bg-cream/10 transition-colors">
                      <td className="py-2.5 font-bold text-charcoal">{exp.item}</td>
                      <td className="py-2.5 text-right font-black text-primary-dark">{exp.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-cream flex items-center justify-between text-xs font-bold text-charcoal">
              <span>Total Estimated Budget:</span>
              <span className="text-sm font-black text-primary-dark">¥80,000 - ¥145,000</span>
            </div>
          </div>

          {/* Financial Advice */}
          <div className="bg-white border border-cream rounded-3xl p-6 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shadow-inner">
              <Landmark className="w-5 h-5" />
            </div>
            
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-2 border-b border-cream">
              Money Savings Advice
            </h3>
            
            <ul className="space-y-2.5 text-[11px] text-muted font-bold leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Shop at local supermarkets right before closing hours for discounts (20%-50% off bentos).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Buy household items and kitchenware at 100-yen stores (Daiso, Seria).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Apply for student monthly train commuter passes matching your campus path.</span>
              </li>
            </ul>
          </div>

        </aside>

      </div>

      {/* Glowing Bottom CTA Section */}
      <CTASection />

    </div>
  );
}

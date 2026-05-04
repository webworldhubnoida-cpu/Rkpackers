import React from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, Award } from 'lucide-react';

const teamMembers = [
  { name: "Firoz Khan", role: "Owner", icon: <Award className="w-6 h-6" /> },
  { name: "Tabrej Khan", role: "Branch Manager", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Zakir Khan", role: "Finance Advisor", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Mithun Kumar", role: "Site Supervisor", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Faizan Sheikh", role: "Site Surveyor", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Amzaddullah Khan", role: "Driver", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Nitesh Yadav", role: "Packaging Staff", icon: <User className="w-6 h-6" /> },
  { name: "Tanu Sharma", role: "Packaging Staff", icon: <User className="w-6 h-6" /> },
  { name: "Rashid Ali", role: "Packaging Staff", icon: <User className="w-6 h-6" /> },
  { name: "Ashiq Ahmad", role: "Packaging Staff", icon: <User className="w-6 h-6" /> },
  { name: "Rahul Roy", role: "Packaging Staff", icon: <User className="w-6 h-6" /> },
];

export const Team = () => {
  return (
    <section className="py-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-6"
          >
            Meet Our <span className="text-secondary">Expert Team</span>
          </motion.h2>
          <div className="h-2 w-24 bg-secondary mx-auto rounded-full mb-8" />
          <p className="text-xl text-text-muted max-w-3xl mx-auto font-medium">
            Dedicated professionals committed to making your relocation seamless and stress-free.
          </p>
        </div>

        <div className="relative mt-12 group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-light to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-light to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8 w-max"
            animate={{ 
              x: [0, "-50%"] 
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ x: 0 }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="bg-white p-8 rounded-[12px] shadow-soft border border-slate-100 flex flex-col items-center text-center group/card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-w-[300px]"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-300 shadow-inner">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover/card:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, Award } from 'lucide-react';

const teamMembers = [
  { name: "Firoz Khan", role: "Owner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Tabrej Khan", role: "Branch Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Zakir Khan", role: "Finance Advisor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Mithun Kumar", role: "Site Supervisor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Faizan Sheikh", role: "Site Surveyor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "Amzaddullah Khan", role: "Driver", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" },
  { name: "Nitesh Yadav", role: "Packaging Staff", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
  { name: "Tanu Sharma", role: "Packaging Staff", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
  { name: "Rashid Ali", role: "Packaging Staff", image: "https://images.unsplash.com/photo-1521119956141-10513e8553a9?auto=format&fit=crop&q=80&w=400" },
  { name: "Ashiq Ahmad", role: "Packaging Staff", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
  { name: "Rahul Roy", role: "Packaging Staff", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400" },
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
                className="bg-white p-6 rounded-[24px] shadow-soft border border-slate-100 flex flex-col items-center text-center group/card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-w-[300px]"
              >
                <div className="relative w-32 h-32 mb-6 group/img">
                  <div className="absolute inset-0 bg-secondary rounded-full transform rotate-6 group-hover/card:rotate-12 transition-transform duration-500" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg grayscale group-hover/card:grayscale-0 transition-all duration-500"
                  />
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

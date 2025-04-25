
import React, { useState } from 'react';
import { ContactForm } from "@/components/ContactForm";
import ScheduleDemo from "@/components/ScheduleDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  return (
    <div className="min-h-screen">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        
        <Tabs 
          defaultValue="contact" 
          value={activeTab}
          onValueChange={setActiveTab} 
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="demo">Schedule a Demo</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="contact" className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-1">Contact Us</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <ContactForm />
          </TabsContent>
          
          <TabsContent value="demo">
            {activeTab === "demo" && <ScheduleDemo />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;

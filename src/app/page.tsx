"use client";

import { Sun, Zap, PhoneCall, Users, BarChart3, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering Tomorrow with Solar Energy Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your energy consumption with sustainable solar solutions
              that save money and protect our planet.
            </p>
            <button className="mr-4">Get Started</button>
            <button> Learn More</button>
          </div>
        </div>
      </section>

      {/* About Section // variant="outline" size="lg" */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="mb-4">
                <Sun className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Energy</h3>
              <p className="text-gray-600">
                Harness the power of the sun with our cutting-edge solar
                technology solutions.
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <BarChart3 className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Reduce your energy bills and increase your property value with
                solar installation.
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our certified professionals ensure quality installation and
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Residential Solar</h3>
              <p className="text-gray-600 mb-4">
                Complete solar solutions for homes, including design,
                installation, and maintenance.
              </p>
              <button>Learn More</button>
            </div>
            <div className="p-8">
              <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Commercial Solar</h3>
              <p className="text-gray-600 mb-4">
                Large-scale solar installations for businesses and industrial
                applications.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <PhoneCall className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">contact@solarcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-15">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    placeholder="Your message..."
                  />
                </div>
                <button className="w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import ContactForm from './contactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <Mail className="mr-2" size={20} />
                <span>bhaihabib.2006@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2" size={20} />
                <span>+92 3343295022</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>123 Next.js Street, React City, Karachi, Sindh, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </div>
  )
}


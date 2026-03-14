import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <header className="max-w-5xl mx-auto py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Accessible Telemedicine, Anytime</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Board-certified virtual care from the comfort of your home — licensed in all 50 states.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">Book Your Visit</Button>
        <div className="mt-4">
          <Link href="/image-generator" className="text-blue-600 underline text-sm">
            Try our AI Image Generator
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 my-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Urgent Care</h2>
            <p className="text-gray-700">Treat colds, flu, infections, rashes, and more with same-day virtual appointments.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Chronic Care</h2>
            <p className="text-gray-700">Ongoing management of hypertension, diabetes, and thyroid with labs & follow-ups.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Preventive Health</h2>
            <p className="text-gray-700">Annual exams, wellness labs, and lifestyle consultations with personalized advice.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto my-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 text-lg mb-8">
          Multi-state licensed physicians. HIPAA-compliant platform. No waiting rooms.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Same-Day Appointments</h3>
              <p className="text-gray-600">See a doctor virtually in under 15 minutes, from anywhere.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Flat fees, no surprise bills. HSA/FSA accepted.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Trusted Care</h3>
              <p className="text-gray-600">Board-certified providers with years of hospital experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-3xl mx-auto my-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Schedule Your Appointment</h2>
        <p className="text-gray-600 mb-6">Use our secure online booking system to find a convenient time.</p>
        <div className="w-full aspect-video max-w-xl mx-auto">
          <iframe
            src="https://calendly.com/your-clinic/telehealth-visit"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule Appointment"
            className="rounded-xl shadow-lg"
            allowTransparency
          ></iframe>
        </div>
      </section>

      <section className="max-w-3xl mx-auto my-16 text-left">
        <h2 className="text-xl font-bold mb-4">Patient Portal</h2>
        <p className="text-gray-700 mb-4">Access your visit notes, lab results, and send secure messages to your provider.</p>
        <Button className="text-base px-5 py-2 rounded-2xl shadow">Login to Portal</Button>
      </section>

      <section className="max-w-3xl mx-auto my-16 text-sm text-gray-500">
        <h3 className="font-semibold mb-2">Legal & Privacy</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>This website complies with HIPAA and stores no protected health information (PHI).</li>
          <li>By booking an appointment, you consent to telehealth evaluation and treatment.</li>
          <li>Review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> and <a href="/terms-of-use" className="text-blue-600 underline">Terms of Use</a>.</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 TeleDirectMD.com. HIPAA Compliant. Built for better health.
      </footer>
    </div>
  );
}

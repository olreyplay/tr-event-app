import Header from "./Header";
import ScheduleContent from "./ScheduleContent";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import CountdownTimer from "./CountdownTimer";

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="home"
        className="bg-cover bg-center bg-no-repeat text-center py-10 px-4 flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://codefinity-content-media-v2.s3.eu-west-1.amazonaws.com/courses/125aa555-8e38-4918-bf19-386e1a021074/hero+image.png')",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            filter: "blur(5px)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="text-[#EA2F14] text-4xl font-bold mb-4">
            Grill & Chill: A Backyard Hangout
          </h1>
          <p className="text-lg mb-4">
            Join us for a relaxing evening with neighbors, food, and fun!
          </p>
          <div className="mb-4">
            <p className="text-lg font-bold bg-[#FFBC4C] text-[#EA2F14] p-2 rounded mb-2">
              Oakview Park – Picnic Area B
            </p>
            <p className="text-lg font-bold bg-[#FFBC4C] text-[#EA2F14] p-2 rounded">
              Saturday at 4:00 PM
            </p>
          </div>
          <a
            href="#contact"
            className="bg-[#E6521F] text-white py-2 px-4 rounded"
          >
            Join Now
          </a>
        </div>
      </section>
      <CountdownTimer />
      <section id="about" className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the Event</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <p className="mb-4 lg:mb-0 lg:w-1/2">
            It's BBQ time, neighbors! Join us at 4 PM this Saturday at Oakview
            Park - Picnic Area B for a laid-back evening filled with music,
            food, and great company. We'll have a grill, a picnic setup, and a
            small stage for anyone who wants to perform. Whether you sing,
            dance, play guitar, or want to share a laugh, we'd love to see you
            shine!
          </p>
          <img
            src="https://codefinity-content-media-v2.s3.eu-west-1.amazonaws.com/courses/125aa555-8e38-4918-bf19-386e1a021074/grill+and+chill.png"
            alt="Chill and Grill Illustration"
            className="lg:w-1/2"
          />
        </div>
      </section>
      <ScheduleContent />
      <ContactForm />
      <section id="schedule">
        {/* Schedule section content goes here */}
      </section>
      <Footer />
    </main>
  );
}

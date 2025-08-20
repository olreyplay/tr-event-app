import { CalendarClock, Flame, Mic, Rocket, Smile } from "lucide-react";

export default function ScheduleContent() {
  return (
    <section id="schedule" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Schedule</h2>
        <div className="border-l-4 border-orange-500 pl-4 space-y-6">
          <div className="flex items-center">
            <CalendarClock color="#EA2F14" className="mr-2" />
            <div>
              <h3 className="text-xl font-semibold">
                4:00 PM – Arrivals & Setup
              </h3>
              <p>Grab a spot, meet your neighbors, and get comfy.</p>
            </div>
          </div>
          <div className="flex items-center">
            <Flame color="#EA2F14" className="mr-2" />
            <div>
              <h3 className="text-xl font-semibold">4:30 PM – Grill Time</h3>
              <p>
                The BBQ is on! Hot dogs, veggies, and good smells all around.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Mic color="#EA2F14" className="mr-2" />
            <div>
              <h3 className="text-xl font-semibold">
                5:00 PM – Open Stage & Performances
              </h3>
              <p>
                Music, poetry, magic, or a duet with Sara — hop on stage and
                shine!
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Rocket color="#EA2F14" className="mr-2" />
            <div>
              <h3 className="text-xl font-semibold">
                6:30 PM – Roller Showcase
              </h3>
              <p>Look out for a surprise entrance!</p>
            </div>
          </div>
          <div className="flex items-center">
            <Smile color="#EA2F14" className="mr-2" />
            <div>
              <h3 className="text-xl font-semibold">
                7:00 PM – Chill & Hangout
              </h3>
              <p>More food, more laughs, and lawn games till sunset.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

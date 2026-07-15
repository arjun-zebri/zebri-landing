/*
 * The founding group of MCs and celebrants shaping Zebri.
 * Facts (events, years, awards) are drawn from each person's public website and
 * directory listings. Keep them accurate; only claim figures a public source
 * states. Portraits are the members' own photos, circle-cropped inside an SVG.
 */
const members = [
  {
    name: "Nathan Cassar",
    initials: "NC",
    img: "/mcs/nathan.svg",
    meta: "Sydney",
    description:
      "Sydney’s most awarded wedding MC, named ABIA’s #1 Wedding MC in NSW for 2025 and holder of 30+ industry awards since 2021. He’s hosted 200+ weddings and 300+ events, earned 235+ five-star reviews, and is the recommended MC at 40+ venues, a craft he first sharpened as an entertainment host for Princess Cruises.",
  },
  {
    name: "John Edney",
    initials: "JE",
    img: "/mcs/john.svg",
    meta: "Melbourne",
    description:
      "A Melbourne fixture entertaining crowds since 2005, with 1,500+ events delivered and a 5.0 rating across 100+ reviews. He’s the rare professional who covers ceremony, mic and music himself: one trusted person as celebrant, MC and DJ. He’s held rooms from intimate gatherings to crowds of 5,000.",
  },
  {
    name: "Ceremonies by Sarah",
    initials: "CS",
    img: "/mcs/sarah.svg",
    meta: "Melbourne & Mornington Peninsula",
    description:
      "A celebrant and MC working across Melbourne and the Mornington Peninsula since 2020, known for modern, wildly personal ceremonies and a door open to every couple. She hosts everything from intimate elopements to full-day celebrations, carrying both the vows and the reception herself.",
  },
  {
    name: "Married by Marianna",
    initials: "MM",
    img: "/mcs/marianna.svg",
    meta: "Melbourne",
    description:
      "A Deakin-trained journalist with 200+ published articles behind her, now a celebrant and MC who turns a couple’s story into a ceremony that sounds unmistakably like them. She brings a reporter’s ear for detail and a performer’s command of the room, then carries the celebration as a warm, magnetic host.",
  },
  {
    name: "TJ Your MC",
    initials: "TJ",
    img: "/mcs/tj.svg",
    meta: "Sydney",
    description:
      "A Sydney MC with 750+ events behind him, from weddings to corporate functions to large cultural celebrations. He’s a specialist in multicultural and Polynesian ceremony, from Samoan to Tongan to Hawaiian, and reads any room with ease, keeping every moment moving.",
  },
];

export function SocialProof() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="py-20 px-4 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="community-heading"
          className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight"
        >
          We&rsquo;re building Zebri with the best MCs and celebrants in the
          country.
        </h2>
        <p className="text-lg text-[#6B7280] mt-4 mb-12 md:mb-16 max-w-3xl lg:max-w-5xl">
          A founding group of MCs and celebrants is shaping Zebri from the
          inside, from award-winning veterans to hosts running their first
          season. Wherever you are in the craft, there&rsquo;s a seat for you.
          Help us build the tool the industry has never had.
        </p>

        {/* Mobile: horizontal snap carousel bleeding to the viewport edge.
            sm+: an even profile grid. */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible">
          {members.map((m) => (
            <div
              key={m.name}
              className="w-[85%] max-w-sm shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] sm:max-w-none bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-base font-medium text-gray-600"
                >
                  {m.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.img}
                      alt=""
                      width={56}
                      height={56}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    m.initials
                  )}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate">
                    {m.name}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{m.meta}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

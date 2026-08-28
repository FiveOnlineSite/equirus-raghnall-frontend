import Image from "next/image";

const locations = [
  { city: "Noida", type: "upcoming", color: "blue", x: 38.69, y: 35.77, address: "403, Fourth Floor, Graphix Tower - 1, A-13A, Sector-62, Noida, Uttar Pradesh 203109", contact: "Amrit Pal Singh", email: "amritpalsingh@equirusraghnall.com" },
  { city: "Jaipur", type: "current", color: "green", x: 31.14, y: 43.07, address: "Office No. 201-A, 2nd Floor, Shyam Anukampa, Ashok Marg, C Scheme, Jaipur 302001, Rajasthan", contact: "Narendra Singh", email: "narendrasingh@equirusraghnall.com" },
  { city: "Guwahati", type: "current", color: "green", x: 79.68, y: 45.74, address: "2nd Floor, Megha Plaza, Basistha Chariali, Beltola, Guwahati, Assam - 781029", contact: "Name", email: "admin@equirusraghnall.com" },
  { city: "Nagpur", type: "current", color: "green", x: 38.56, y: 62.04, address: "Block No. 501/502, Imperial Plaza, Opp. Anand Talkies, Somwar Bazar, Nagpur - 440012, Maharashtra", contact: "Ayesha Shankar", email: "hr@equirusraghnall.com" },
  { city: "Pune", type: "current", color: "green", x: 36.37, y: 65.82, address: "219, 2nd Floor, Akshay Complex, Dhole Patil Road, Tadiwalla Road, Pune, Maharashtra - 411001", contact: "Nitin Balakshe", email: "nitinbalakshe@equirusraghnall.com" },
  { city: "Hyderabad", type: "current", color: "green", x: 42.82, y: 70.32, address: "Alt.F Coworking Space, 1-10-176, 3rd Floor, Unit 338, Begumpet Road, Opp. Hyderabad Public School, Mayur Marg, Begumpet", contact: "G S Praveen Kumar", email: "praveenkumar@equirusraghnall.com" },
  { city: "Vapi", type: "current", color: "green", x: 27.49, y: 60.58, address: "226, Ashapura Complex, Near Telephone Exchange, GIDC, Vapi, Valsad, Gujarat - 396195", contact: "Govind Singh", email: "info@equirusraghnall.com" },
  { city: "Mumbai - Registered Office", type: "registered", color: "registered-green", x: 28.22, y: 66.55, address: "Unit No. 16, Ground Floor, Technopolis Knowledge Park, Mahakali Caves Road, Andheri East, Mumbai, Maharashtra", contact: "Ayesha Shankar", email: "hr@equirusraghnall.com" },
  { city: "Mumbai", type: "current", color: "green", x: 28.47, y: 70.44, address: "Unit No. 2402, 24th Floor, D-33 Turbhe MIDC Road, TTC Industrial Area, Mumbai, Maharashtra", contact: "Dinesh Shelar", email: "dineshshelar@equirusraghnall.com" },
  { city: "Ahmedabad", type: "upcoming", color: "blue", x: 23.11, y: 57.91, address: "3rd Floor, House No. 9, Magnet Corporate Park, Near Zydus Hospital, Behind Intas, Sola Bridge, S.G. Highway, Ahmedabad, Gujarat", contact: "Susheel Kumar Sahani", email: "susheelsahani@equirusraghnall.com" },
  { city: "GIFT City", type: "current", color: "green", x: 25.30, y: 54.01, address: "Block No. 15, GIFT SEZ, GIFT City, Gandhinagar, Gujarat - 382355", contact: "Rushikesh Gade", email: "rushikeshgade@equirusraghnall.com" },
  { city: "Surat", type: "current", color: "green", x: 27.13, y: 55.60, address: "Upper Ground Floor, Office No. 8-9, Bhadani Era, Near Shyam Baba Mandir, VIP Road, Surat, Gujarat - 395007", contact: "Ashutosh Kedia", email: "ashutoshkedia@equirusraghnall.com" },
  { city: "Bangalore", type: "upcoming", color: "blue", x: 36.13, y: 82.97, address: "Tower A, Carlton Towers, 711-713, HAL Old Airport Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560008", contact: "Prasad Vattimilli", email: "prasadvattimilli@equirusraghnall.com" },
  { city: "Kerala", type: "current", color: "green", x: 36.37, y: 90.75, address: "3rd Floor, Highway Heights, NH Bypass, Puthiya Road, Opposite New Bharat Tyres, Ernakulam - 682032, Kerala", contact: "Mahesh Kumar", email: "maheshkumar@equirusraghnall.com" },
  { city: "Delhi", type: "current", color: "green", x: 38.69, y: 33.33, address: "Office 455, 4th Floor, Agarwal Metro Heights, Netaji Subhash Place, New Delhi - 110034", contact: "Dinesh Shelar", email: "dineshshelar@equirusraghnall.com" },
  { city: "Gurugram", type: "upcoming", color: "blue", x: 38.32, y: 39.42, address: "90B, Delhi-Jaipur Expressway, Udyog Vihar, Sector 18, Gurugram, Haryana - 122001", contact: "Visheshank Shukla", email: "visheshankshukla@equirusraghnall.com" },
];

const pinAssets = {
  green: "/assets/contact/location-pin-current.svg",
  blue: "/assets/contact/location-pin-upcoming.svg",
  "registered-green": "/assets/contact/location-pin-registered.svg",
};

const legend = [
  ["current", "Current locations"],
  ["upcoming", "Upcoming locations"],
  ["registered", "Registered Corporate Office"],
];

const detailBorderColors = {
  green: "border-l-[#0A4E08]",
  blue: "border-l-[#2C2F71]",
  "registered-green": "border-l-black",
};

const detailAccentColors = {
  green: "text-[#0A4E08]",
  blue: "text-[#2C2F71]",
  "registered-green": "text-black",
};

export default function OfficePresenceMap() {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-[1120px] flex-col md:mt-8 md:block">
      <div className="order-2 flex justify-center md:min-h-[720px]">
        <div className="relative aspect-square w-[calc(100vw-8px)] max-w-[822px] shrink-0 md:w-full">
          <Image src="/assets/contact/india-presence-map.svg" alt="" loading="eager" fill sizes="(max-width: 768px) 100vw, 822px" className="object-contain" aria-hidden />
          {locations.map((location) => (
            <div
              className="group absolute z-10 -translate-x-1/2 -translate-y-full hover:z-50 focus-within:z-50"
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              key={location.city}
            >
              <button type="button" className="relative grid size-6 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#0A4E08] focus-visible:ring-offset-1 sm:size-8 md:size-12 md:focus-visible:ring-offset-2" aria-label={`View ${location.city} office details`}>
                <Image src={pinAssets[location.color]} alt="" width={24} height={24} className="size-3 sm:size-4 md:size-6" aria-hidden />
              </button>
              <div className={`pointer-events-none invisible absolute top-0 z-[60] grid w-[min(260px,68vw)] grid-cols-[16px_1fr] gap-x-2 gap-y-1.5 rounded-md border-l-2 bg-[#FAFAFA] p-2 text-left opacity-0 shadow-[0_1px_12px_rgba(0,0,0,0.10)] md:left-0 md:right-auto md:w-[min(382px,88vw)] md:translate-x-0 md:grid-cols-[24px_1fr] md:gap-x-4 md:gap-y-3 md:rounded-lg md:p-3 md:shadow-[0_1px_16px_rgba(0,0,0,0.10)] group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${location.x < 35 ? "left-0" : location.x > 65 ? "right-0" : "left-1/2 -translate-x-1/2"} ${detailBorderColors[location.color]}`}>
                <Image src={pinAssets[location.color]} alt="" width={24} height={24} className="size-4 md:size-6" aria-hidden />
                <p className="text-[11px] font-medium leading-4 text-[#080808] md:text-sm md:leading-6">{location.address}</p>
                <svg viewBox="0 0 24 24" className="mt-0.5 size-4 text-[#080808] md:size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="3" />
                  <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
                </svg>
                <div>
                  <p className="text-[10px] font-medium leading-4 text-[#080808] md:text-xs md:leading-5">{location.contact}</p>
                  <a
                    href={`mailto:${location.email}`}
                    className={`mt-0.5 block break-all text-[10px] font-medium leading-4 hover:underline md:mt-1 md:text-xs md:leading-5 ${detailAccentColors[location.color]}`}
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 mx-auto mb-6 flex w-fit max-w-full flex-col items-start gap-3 text-left md:absolute md:right-0 md:top-16 md:mb-0 md:block md:space-y-3">
        {legend.map(([type, label]) => (
          <div className="flex items-center gap-3 text-sm font-medium text-[#080808] sm:text-base" key={type}>
            <Image src={pinAssets[type === "current" ? "green" : type === "upcoming" ? "blue" : "registered-green"]} alt="" width={18} height={18} className="size-[18px]" aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

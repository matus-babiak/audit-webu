import { Link } from "react-router-dom";
import profileImage from "@/assets/matus-babiak.png";

const CAL_MEETING_URL = "https://cal.com/babiak/meeting";

const SiteHeader = () => {
  return (
    <header className="bg-background border-b border-border/30">
      <div className="container max-w-6xl mx-auto py-3 px-3 sm:py-5 sm:px-6 md:py-6 flex flex-row items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
          <img
            src={profileImage}
            alt="Matúš Babiak"
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-primary/50 shrink-0"
            width={56}
            height={56}
          />
          <div className="text-left min-w-0">
            <p className="font-bold text-foreground leading-tight truncate text-sm sm:text-base">Matúš Babiak</p>
            <p className="text-[10px] sm:text-sm text-muted-foreground truncate">Online marketing specialist</p>
          </div>
        </Link>
        <a
          href={CAL_MEETING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm md:text-base hover:bg-white/90 transition-colors border border-white/20 whitespace-nowrap"
        >
          Chcem spolupracovať
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;

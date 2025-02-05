import { Icon } from "@iconify/react";

const socialLinks = [
  {
    icon: "ic:twotone-tiktok",
    link: "https://www.tiktok.com/@coach_nathel?_t=ZM-8tcE5aZmCMH&_r=1",
  },
  {
    icon: "basil:instagram-outline",
    link: "https://www.instagram.com/coach_nathel/?igsh=MXZoNWo4czBwcGU2MA%3D%3D#",
  },
  {
    icon: "ic:outline-facebook",
    link: "https://web.facebook.com/iamnathel?mibextid=LQQJ4d&rdid=2WI9YfJkRW2R1Ild&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1EBzm5fjbg%2F%3Fmibextid%3DLQQJ4d%26_rdc%3D1%26_rdr#",
  },
  { icon: "ri:twitter-x-fill", link: "https://x.com/coachnathel?s=21" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-hover-blue text-3xl transition"
        >
          <Icon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

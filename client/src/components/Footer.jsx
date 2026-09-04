import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "WOMEN",
      links: [
        { label: "Women's Indianwear", to: "/women?category=indianwear" },
        { label: "Women's Westernwear", to: "/women?category=westernwear" },
        { label: "Bags", to: "/women?category=bags" },
        { label: "Women's Footwear", to: "/women?category=footwear" },
        { label: "Women's Jewellery", to: "/women?category=jewellery" },
        { label: "Lingerie", to: "/women?category=lingerie" },
        { label: "Women's Sportswear", to: "/women?category=sportswear" },
        { label: "Women's Sleep & lounge", to: "/women?category=sleepwear" },
        { label: "Women's Watches", to: "/women?category=watches" },
        { label: "Fashion Accessories", to: "/women?category=accessories" },
      ],
    },
    {
      title: "MEN",
      links: [
        { label: "Topwear", to: "/men?category=topwear" },
        { label: "Bottomwear", to: "/men?category=bottomwear" },
        { label: "Ethnicwear", to: "/men?category=ethnicwear" },
        { label: "Men's Footwear", to: "/men?category=footwear" },
        { label: "Men's Accessories", to: "/men?category=accessories" },
        { label: "Innerwear & Sleepwear", to: "/men?category=innerwear" },
        { label: "Men's Watches", to: "/men?category=watches" },
        { label: "Bags & Backpacks", to: "/men?category=bags" },
        { label: "Athleisure", to: "/men?category=athleisure" },
        { label: "Sports & Fitness", to: "/men?category=sports" },
      ],
    },
    {
      title: "KIDS",
      links: [
        { label: "Kids Indianwear", to: "/kids?category=indianwear" },
        { label: "Kids Westernwear", to: "/kids?category=westernwear" },
        { label: "Kids Footwear", to: "/kids?category=footwear" },
        { label: "Kids Jewellery", to: "/kids?category=jewellery" },
        { label: "Feeding", to: "/kids?category=feeding" },
        { label: "Kids Sportswear", to: "/kids?category=sportswear" },
        { label: "Kids Sleepwear", to: "/kids?category=sleepwear" },
        { label: "Kids Accessories", to: "/kids?category=accessories" },
        { label: "Toys & Games", to: "/kids?category=toys" },
        { label: "Innerwear", to: "/kids?category=innerwear" },
      ],
    },
    {
      title: "LUXE",
      links: [
        { label: "Luxury Ethnic Wear", to: "/luxe?category=ethnic" },
        { label: "Luxury Westernwear", to: "/luxe?category=western" },
        { label: "Luxury Footwear", to: "/luxe?category=footwear" },
        { label: "Luxury Bags", to: "/luxe?category=bags" },
        { label: "Luxury Accessories", to: "/luxe?category=accessories" },
        { label: "Luxury Watches", to: "/luxe?category=watches" },
        { label: "Luxury Home", to: "/luxe?category=home" },
        { label: "Luxury Jewellery", to: "/luxe?category=jewellery" },
        { label: "Summer Collection", to: "/luxe?category=summer" },
        { label: "Luxury Dresses", to: "/luxe?category=dresses" },
      ],
    },
    {
      title: "TOP BRANDS",
      links: [
        { label: "Puma", to: "/brands/puma" },
        { label: "Vero Moda", to: "/brands/vero-moda" },
        { label: "W", to: "/brands/w" },
        { label: "Biba", to: "/brands/biba" },
        { label: "Forever New", to: "/brands/forever-new" },
        { label: "Skechers", to: "/brands/skechers" },
        { label: "Fablestreet", to: "/brands/fablestreet" },
        { label: "Only", to: "/brands/only" },
        { label: "Autumnlane", to: "/brands/autumnlane" },
        { label: "Cider", to: "/brands/cider" },
        { label: "Accessorize London", to: "/brands/accessorize" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-[#eaeaec] font-[Inter,sans-serif]">
      {/* Upper Content Section */}
      <div className="max-w-[1340px] mx-auto px-6 pt-10 pb-12 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* 6 Category Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 flex-1">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h3 className="text-[12px] font-bold text-[#282c3f] tracking-[0.5px] uppercase mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1 list-none p-0 m-0">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-[11px] text-[#535766] hover:text-[#282c3f] leading-[1.65] block transition-colors duration-150 no-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scroll to Top Button (Desktop) */}
          <div className="hidden lg:flex items-center justify-center shrink-0 pt-16">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Scroll to Top"
              className="w-10 h-10 bg-white border border-[#eaeaec] shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded flex items-center justify-center text-[#282c3f] cursor-pointer hover:border-[#d4d5d9] hover:bg-[#fafafa] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile/Tablet Scroll to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="lg:hidden fixed right-5 bottom-5 z-40 w-10 h-10 bg-white border border-[#eaeaec] shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded flex items-center justify-center text-[#282c3f] cursor-pointer hover:border-[#d4d5d9] hover:bg-[#fafafa] transition-all duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Magenta Bar */}
      <div className="bg-[#a81c51] text-white py-[11px] px-4 text-center">
        <p className="m-0 text-white font-medium text-[11.5px] tracking-[0.2px]">
          © 2026 ShowNow Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

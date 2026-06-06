import { FiTruck, FiGift, FiHeadphones, FiShield } from "react-icons/fi";

export default function FeaturesBanner() {
  const features = [
    {
      icon: <FiTruck size={26} />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping across Lebanon.",
    },
    {
      icon: <FiGift size={26} />,
      title: "Curated Gifts",
      description: "Handpicked products for every special occasion.",
    },
    {
      icon: <FiHeadphones size={26} />,
      title: "Online Support",
      description: "Friendly support whenever you need assistance.",
    },
    {
      icon: <FiShield size={26} />,
      title: "Secure Payments",
      description: "Safe and trusted checkout experience.",
    },
  ];

  return (
    <section className="bg-black border-y border-white/10">
      <div className="container mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                flex flex-col items-center text-center
                group
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div
                className="
                  mb-4 text-white
                  transition-transform duration-300
                  group-hover:scale-110
                  group-hover:text-white
                "
              >
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-medium text-white text-lg">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-white/60 max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

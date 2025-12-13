import { detailCards } from '@/app/constants/detailCards';
import Button from '@/components/button/Button';

interface AboutSectionProps {
  propertyName: string;
  propertyLocation: string;
  showFullAbout: boolean;
  onToggleShowMore: () => void;
}

export default function AboutSection({
  propertyName,
  propertyLocation,
  showFullAbout,
  onToggleShowMore,
}: AboutSectionProps) {
  return (
    <section className="w-full header-content flex flex-col gap-section mb-11">
      {/* About this home */}
      <div className="w-full border-b border-light-e8 pb-6 mb-6">
        <h2 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo mb-5">
          About this home
        </h2>
        <div className="flex flex-col lg:flex-row gap-description w-full">
          <div className="about-description-container w-full lg:w-auto">
            <p className="about-description-text">
              Welcome to {propertyName}, your idyllic retreat nestled in the heart of {propertyLocation}! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.<br />
              {showFullAbout ? (
                <>
                  <b>Living Space:</b> This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more.<br />
                  <b>Bedrooms:</b> With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to 8 guests. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.<br />
                  <b>Kitchen & Dining:</b> Our fully-equipped kitchen offers everything you need to prepare delicious home-cooked meals. The open dining area provides a welcoming space to enjoy meals with friends and family.<br />
                  <b>Bathrooms:</b> 2 modern bathrooms stocked with fresh towels, toiletries, and all essential amenities add to your convenience.<br />
                  <b>Outdoor Space:</b> Step outside to a serene outdoor setting. Whether it's a morning coffee on the porch, a BBQ in the yard, or a soothing evening by the fire pit, the beauty of this location is at your doorstep.<br />
                  <b>Location:</b> Located just minutes from local attractions, trails, dining, and shopping, our cabin offers the perfect base to explore the best of the region or simply unwind in seclusion.<br />
                  <b>Hosted with Love:</b> We take pride in hosting our guests and are committed to making your stay unforgettable. Book now and make yourself at home!
                </>
              ) : (
                <>
                  <b>Living Space:</b> This charming cabin boasts a spacious living area adorned with rustic decor and modern amenities. Enjoy the warmth of the wood-burning fireplace, relax on the plush sofas, and make yourself at home with our entertainment center featuring a flat-screen TV, WiFi, and more.<br />
                  <b>Bedrooms:</b> With 3 beautifully appointed bedrooms, our cabin comfortably accommodates up to 8 guests. Each room is furnished with luxurious bedding and unique woodland-inspired touches to ensure a restful slumber.
                </>
              )}
            </p>
            <Button 
              onClick={onToggleShowMore}
              variant="secondary"
              size="sm"
              className="cursor-pointer mt-4"
            >
              {showFullAbout ? "Show less" : "Show more"}
            </Button>
          </div>
          
          {/* Detail Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-96">
            {detailCards.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex flex-row items-center gap-5 w-full amenity-item-height">
                  <div className="amenity-icon-size rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <IconComponent />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="text-lg font-semibold leading-7 tracking-wider text-gray-900 font-archivo">
                      {item.title}
                    </span>
                    <span className="text-base font-normal leading-5 tracking-wider text-gray-500 font-archivo">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

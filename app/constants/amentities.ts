import {
    LandSlide,
    Kitchen,
    Wifi,
    CameraIcon,
    FreeParking,
    Shampoo,
    CoffeMaker,
    FireExtinguisher,
    GlassStove,
    OutdoorShower,
    HotWater,
    Freezer,
} from '@/components/icons';

export interface Amenity {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const amenities: Amenity[] = [
    { label: 'Lakeside', icon: LandSlide },
    { label: 'Kitchen', icon: Kitchen },
    { label: 'Security cameras on property', icon: CameraIcon },
    { label: 'Wifi', icon: Wifi },
    { label: 'Free parking', icon: FreeParking },
    { label: 'Outdoor shower', icon: OutdoorShower },
    { label: 'Hot water', icon: HotWater },
    { label: 'Shampoo', icon: Shampoo },
    { label: 'Fire Extinguisher', icon: FireExtinguisher },
    { label: 'Freezer', icon: Freezer },
    { label: 'Coffee Maker', icon: CoffeMaker },
    { label: 'Glass stove', icon: GlassStove },
];

export default amenities;
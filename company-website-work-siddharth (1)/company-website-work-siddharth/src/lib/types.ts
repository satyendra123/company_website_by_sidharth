// **** Types for Navbar ****

export interface RouteProps {
    href: string;
    label: string;
  }

export interface ProductNavProps {
    href: string;
    label: string;
}

// **** Types for product section ****

export interface HeaderPoint {
    heading: string;
    subheading: string;
}

export interface StatItem {
    image: string;
    subheading: string;
}

export interface ApplicationAreas {
    images: string[];
    description: string;
}


export interface dimensionandlayout {
    image: string;
    description: string;
}

export interface ProductDetails {
    headerPoints: HeaderPoint[];
    keyspecs: string[]
    applicationAreas: ApplicationAreas;
    dimensionandlayout?: dimensionandlayout;
    integrationIdeasImage: string;
    accessoryImages: string[];
    mediaGalleryImages: string[];
}

export interface Product {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    stats: StatItem[];
    details: ProductDetails;
}

export interface ProductProps {
    products: Product[];
}

// **** Types for solution section ****

// Basic Heading and Description Structure
export interface HeadingDescription {
    heading: string;
    description: string;
}

// Single Navigation Item with Optional Subheading
export interface NavItem {
    heading: string;
    description: string;
    list: string[];
    image: string;
}

// Navigation Section
export interface Navigation {
    icon: string;
    details: HeadingDescription;
}

// Bottom Section Data
export interface BottomData {
    image: string;
    details: HeadingDescription;
}

// Product Item
export interface ProductItem {
    description: string;
    image: string;
}

export interface NavbarList {
    label: string;
    data: NavItem[];
}

export interface NavFirst {
    heading: string;
    description: string;
    productitem: ProductItem[];
    navbarlist: NavbarList[];

}

// Main Solution Interface
export interface Solution {
    header: HeadingDescription;             // Top Header Information                //
    video: string;                         //  Video URL                            //
    navfirst?: NavFirst[];                //   Optional First Navigation Array     //
    navsecond?: Navigation[];            //    Optional Second Navigation Array   //
    navbarlist?: NavbarList[];          //     Dependent Navigation Items        //
    bottomdata: BottomData;            //      Bottom Section Information       //
    productitem?: ProductItem[];      //       Product Item Information        //
}

export interface SolutionProps {
    solution: Solution;
}

// **** Types for IT Services section ****

export interface TopCards {
    icon: string;
    title: string;
    description: string;
}

export interface BottomCards {
    image: string;
    title: string;
    points: string[];
    contactLink: string;
}

export interface Service {
    banner: string
    toptitle: string;
    topcards: TopCards[];
    bottomtitle: string;
    bottomsubtitle: string;
   bottomcards: BottomCards[];
}

export interface ServiceProps {
    services: Service;
}
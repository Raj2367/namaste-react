import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from JAVAscript"
// );
// console.log(heading); // object

// JSX
const heading = <h2 className="heading"> Namaste React using js</h2>;

// React Component
// Class based component - OLD
// Functional component - NEW
const Title = () => {
  return <h1 className="title">Namaste from react component</h1>;
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "873182",
    name: "Ministry of Oats",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/5f3f8ae9-cceb-4424-a409-2669d87171e6_873182.jpg",
    locality: "Whitefield",
    areaName: "Whitefield",
    costForTwo: "₹399 for two",
    cuisines: ["Desserts", "Healthy Food"],
    avgRating: 4.4,
    veg: true,
    parentId: "492566",
    avgRatingString: "4.4",
    totalRatingsString: "352",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 0.5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "0.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "322270",
    name: "Andhra Gunpowder",
    cloudinaryImageId: "oj8lzml52o2zjfa8jptp",
    locality: "Byrappa Layout",
    areaName: "Whitefield",
    costForTwo: "₹350 for two",
    cuisines: ["Andhra", "Biryani", "South Indian"],
    avgRating: 4.4,
    parentId: "10496",
    avgRatingString: "4.4",
    totalRatingsString: "11K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹499",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "1066693",
    name: "Nandhini Deluxe",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/35f4ed02-a1e3-4f49-8b1c-cf5026000ea0_1066693.jpg",
    locality: "Whitefield",
    areaName: "Whitefield",
    costForTwo: "₹650 for two",
    cuisines: ["Andhra"],
    avgRating: 4.2,
    parentId: "2451",
    avgRatingString: "4.2",
    totalRatingsString: "163",
    sla: {
      deliveryTime: 35,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-18 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹199",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "749777",
    name: "Sorbetto - Ice Creams",
    cloudinaryImageId: "8e7a7b397bedfd0c2f040d20c2e75968",
    locality: "Mahadevapura",
    areaName: "Whitefield",
    costForTwo: "₹250 for two",
    cuisines: ["Ice Cream", "Desserts", "Beverages", "Sweets", "Cakes"],
    avgRating: 4.4,
    veg: true,
    parentId: "488911",
    avgRatingString: "4.4",
    totalRatingsString: "439",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹79",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "984640",
    name: "Meemee's Ice Creams & Desserts",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/a6dfbe44-3916-4496-b931-b67c66e54d22_984640.jpg",
    locality: "Gandhipura",
    areaName: "Whitefield",
    costForTwo: "₹450 for two",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: 4.4,
    parentId: "598688",
    avgRatingString: "4.4",
    totalRatingsString: "94",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 00:55:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹81",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "335957",
    name: "The Betel Leaf Co - PAAN Originally from Bangalore",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/26/5e6ed0d4-fa74-41b1-b3c2-715e30b101c2_335957.JPG",
    locality: "Narayanappa Garden",
    areaName: "Whitefield",
    costForTwo: "₹100 for two",
    cuisines: ["Paan", "Desserts", "Indian", "Ice Cream"],
    avgRating: 4.5,
    veg: true,
    parentId: "513337",
    avgRatingString: "4.5",
    totalRatingsString: "1.5K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 0.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "0.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-18 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "UPTO ₹40",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "488831",
    name: "Absolute Shawarma",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/25/d32de629-39bb-46d6-8ec5-78b01a31334c_488831.jpg",
    locality: "JK Mall",
    areaName: "Whitefield",
    costForTwo: "₹250 for two",
    cuisines: ["shawarma", "Arabian", "Snacks", "Burgers", "Continental"],
    avgRating: 4.3,
    parentId: "10528",
    avgRatingString: "4.3",
    totalRatingsString: "367",
    sla: {
      deliveryTime: 28,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "550793",
    name: "Bakingo",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/e6ad7aae-0646-433a-868f-20b6c6700aa6_550793.JPG",
    locality: "Hagdur Road",
    areaName: "Whitefield",
    costForTwo: "₹299 for two",
    cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
    avgRating: 4.5,
    parentId: "3818",
    avgRatingString: "4.5",
    totalRatingsString: "5.5K+",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-19 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹200 OFF",
      subHeader: "ABOVE ₹999",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "1123561",
    name: "Mealy - Your Everyday Meal",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d43193df-6cdf-407c-a6a8-80ee79c073ee_1123561 (1).jpg",
    locality: "Saroj Studio",
    areaName: "Whitefield",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "Meal", "Healthy Food"],
    avgRating: 4.3,
    parentId: "11705",
    avgRatingString: "4.3",
    totalRatingsString: "<3",
    sla: {
      deliveryTime: 64,
      lastMileTravel: 6,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "60-70 mins",
      lastMileTravelString: "6.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "634166",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c558e8b0-6a38-435b-aaa3-1541fa9bd882_634166.jpg",
    locality: "Nexus Whitefield Mall",
    areaName: "Whitefield",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.2,
    parentId: "166",
    avgRatingString: "4.2",
    totalRatingsString: "13K+",
    sla: {
      deliveryTime: 47,
      lastMileTravel: 1.9,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "45-55 mins",
      lastMileTravelString: "1.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "47483",
    name: "Homely",
    cloudinaryImageId: "lkcmdptkbhkpwtzb5juq",
    locality: "1st Phase",
    areaName: "Whitefield",
    costForTwo: "₹200 for two",
    cuisines: ["Home Food", "South Indian", "Beverages", "Desserts", "Thalis"],
    avgRating: 4.3,
    parentId: "4043",
    avgRatingString: "4.3",
    totalRatingsString: "79K+",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 6,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "50-60 mins",
      lastMileTravelString: "6.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          description: "OnlyOnSwiggy",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "C",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "OnlyOnSwiggy",
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹349",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "899579",
    name: "Dunkin' - Donuts & Coffee",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/30/568590d2-87d8-4d27-b2fd-3534aa9b53c0_899579.jpg",
    locality: "Nexus Mall",
    areaName: "Whitefield",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Cafe", "Bakery", "Beverages", "Fast Food"],
    avgRating: 3.9,
    parentId: "2276",
    avgRatingString: "3.9",
    totalRatingsString: "276",
    sla: {
      deliveryTime: 57,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "55-65 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "3.3",
        ratingCount: "18",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "853143",
    name: "ITC Aashirvaad Soul Creations",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/6/68a0399a-6f11-465f-a5cb-bb9248e2289c_853143.JPG",
    locality: "Whitefield Main Road",
    areaName: "Pattandur, Agrahara",
    costForTwo: "₹500 for two",
    cuisines: [
      "North Indian",
      "pure veg",
      "Healthy Food",
      "Home Food",
      "South Indian",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "346141",
    avgRatingString: "4.3",
    totalRatingsString: "2.5K+",
    sla: {
      deliveryTime: 34,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "30-40 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "398804",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/e83eef2b-96a7-4a4a-af89-a49e2c78c9d2_398804.jpg",
    locality: "Hagadur Main Rd",
    areaName: "Whitefield",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream"],
    avgRating: 4.4,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.4",
    totalRatingsString: "4.3K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 1.1,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "30-35 mins",
      lastMileTravelString: "1.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-18 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "376442",
    name: "Lakeview Milkbar Since 1930",
    cloudinaryImageId: "qyqkbiryjgqn7w9gujfx",
    locality: "Whitefield",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    cuisines: ["Bakery", "Desserts", "Ice Cream"],
    avgRating: 4.3,
    parentId: "570282",
    avgRatingString: "4.3",
    totalRatingsString: "2.3K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "35-40 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 00:55:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "739",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "1031986",
    name: "Easybites By Empire",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/8813f04c-2aed-4517-8100-3eb7a83d32f6_1031986.JPG",
    locality: "Whitefield",
    areaName: "Whitefield",
    costForTwo: "₹200 for two",
    cuisines: ["Burgers"],
    avgRating: 4.4,
    parentId: "443171",
    avgRatingString: "4.4",
    totalRatingsString: "350",
    sla: {
      deliveryTime: 61,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "60-70 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "663429",
    name: "Falhari - A fruitful habit",
    cloudinaryImageId: "6baae34962e139b30bce6d9ca5ff62a7",
    locality: "Hosur Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    cuisines: ["Healthy Food", "Juices", "Salads"],
    avgRating: 4.5,
    veg: true,
    parentId: "13818",
    avgRatingString: "4.5",
    totalRatingsString: "3.0K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 0.5,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "35-40 mins",
      lastMileTravelString: "0.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 03:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "brand",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.4",
        ratingCount: "420",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "762494",
    name: "Namo Andhra",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/16/2ea49992-6ac3-4485-8fdd-6961fb088f0a_762494.jpg",
    locality: "KR Puram",
    areaName: "Whitefield",
    costForTwo: "₹350 for two",
    cuisines: ["South Indian"],
    avgRating: 4.5,
    veg: true,
    parentId: "507121",
    avgRatingString: "4.5",
    totalRatingsString: "354",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "30-35 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹499",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "702864",
    name: "TrueCakes - Fresh | Eggless | Cakes",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/11/0d44ed8b-f90f-475b-a1c9-8807aea7a199_702864.jpg",
    locality: "Vijayanagar",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.4,
    veg: true,
    parentId: "465380",
    avgRatingString: "4.4",
    totalRatingsString: "1.6K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "30-35 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "726196",
    name: "ART OF SPICES",
    cloudinaryImageId: "f594f4f63d3e00e93203f02d40e38d24",
    locality: "Immadihalli",
    areaName: "Whitefield",
    costForTwo: "₹399 for two",
    cuisines: ["Biryani"],
    avgRating: 3.8,
    parentId: "2498",
    avgRatingString: "3.8",
    totalRatingsString: "78",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "20-25 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 07:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "15% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "983616",
    name: "The Kalki Cafe (Davangere benne dosa and basaveshwara khanavali)",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/27/d81c7b50-a536-493e-b715-38222d7e27c0_983616.sss.jpg",
    locality: "Marathahalli",
    areaName: "Marathahalli",
    costForTwo: "₹200 for two",
    cuisines: ["South Indian"],
    avgRating: 4.4,
    veg: true,
    parentId: "586162",
    avgRatingString: "4.4",
    totalRatingsString: "619",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 7.5,
      serviceability: "SERVICEABLE_WITH_BANNER",
      slaString: "35-40 mins",
      lastMileTravelString: "7.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextOpenTimeMessage: "Currently not taking orders for this location",
      nextCloseTime: "2025-09-19 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const RestaurantCard = (props) => {
  const { resName, imageid, costForTwo, cuisines, rating, deliveryTime } =
    props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageid
        }
      />
      <h3>{resName}</h3>
      <h4>{costForTwo}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              resName={restaurant.name}
              imageid={restaurant.cloudinaryImageId}
              costForTwo={restaurant.costForTwo}
              cuisines={restaurant.cuisines}
              rating={restaurant.avgRating}
              deliveryTime={restaurant.sla.slaString}
            />
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

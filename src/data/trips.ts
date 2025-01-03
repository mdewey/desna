
export interface PlaceOfInterest {
  title: string;
  description: string | null;
  address: string;
  website: string | undefined;
  targetDate?: Date; 
}

export interface TripInterface {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  hotel: {
    name: string;
    address: string;
    arrivalDate: Date;
    departureDate: Date;
    reservationNumber?: string,
    gmailLink?: string, 
  },
  tickets: {
    type: string;
    details: string;
    reservationNumber: string;
    email: string;
  } | null, 
  gmailLink: string;
  transportation: {
    type: string;
    details: string;
    leavingTime: Date | string;
    backHomeTime: Date | string;
    flights:{
      going: {
        airline: string;
        flightNumber: string;
        departureAirport: string;
        departureTime: Date;
        arrivalAirport: string;
        arrivalTime: Date;
      } | null,
      returning: {
        airline: string;
        flightNumber: string;
        departureAirport: string;
        departureTime: Date;
        arrivalAirport: string;
        arrivalTime: Date;
       } | null,
    }
  },
  thingsToDo?: PlaceOfInterest[];
  restaurants?: PlaceOfInterest[];
  climbingGyms?: PlaceOfInterest[] | null;
}

const halloween2024 = {
  id: "2024-halloween",
  title: 'Halloween Trip to Indianapolis for PPPP ',
  startDate: new Date('2024-10-30'),
  endDate: new Date('2024-11-01'),
  gmailLink:"https://mail.google.com/mail/u/0/#label/Travel%2F2024+halloween",
  hotel: {
    name: "Hotel Broad Ripple",
    address: "6520 Westfield Blvd, Indianapolis, IN 46220",
    arrivalDate: new Date('10-30-2024'),
    departureDate: new Date('11-01-2024'),
  },
  transportation: {
    type: "driving",
    details: "Driving from Home",
    leavingTime: "after lunch",
    backHomeTime: "evening",
  },
  thingsToDo: [
    {
      title: "The Ruins",
      description: "Once adorning a New York skyscraper, these reclaimed ruins now haunt an Indiana park. ",
      address: "6363 Spring Mill Rd, Indianapolis, Indiana, 46260",
      website: "https://www.atlasobscura.com/places/the-ruins-indianapolis-indiana",
    },
    {
      title: "Garfield Park",
      description: "a really nice park ",
      address: "2345 Pagoda Dr, Indianapolis, IN 46203",
      website: "https://parks.indy.gov/parks/garfield-park/",
    },
    {
      title: "THE INDIANA MEDICAL HISTORY MUSEUM",
      address: "3270 Kirkbride, Indianapolis, IN 46222",
      website: "https://www.imhm.org/",
    },
    {
      title: "The Zoo!",
      address: "1200 W Washington St, Indianapolis, IN 46222",
      website: "https://www.indianapoliszoo.com/ ",
    },
  ],
  restaurants: [
    {
      title: "The Egyptian",
      description: "mediterranean",
      address: "6220 Carrolton Ave, Indianapolis, IN 46220",
      website: "https://www.google.com/maps/place/The+Egyptian/@39.8689905,-86.1450491,19z/data=!4m14!1m7!3m6!1s0x886b5a6812c3e5c5:0xad48993135bedd18!2sGarfield+Park!8m2!3d39.7343138!4d-86.1484095!16zL20vMDdtYjA4!3m5!1s0x886b53a589d0eccd:0x3e9b95f7916fcbd!8m2!3d39.8685214!4d-86.1450345!16s%2Fg%2F1tdb50hb?authuser=1&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Eating Fresh",
      address: "6255 N College Ave, Indianapolis, IN 46220",
      website: "https://eatingfresh.co/",
    },
    {
      title: "Flatwater",
      address: "832 E Westfield Blvd, Indianapolis, IN 46220",
      website: "http://flatwaterbroadripple.com/",
    }
  ],
  climbingGyms: [
    {
      title: "North Mass Bouldering",
      address: "1411 Roosevelt Ave, Indianapolis, IN 46201",
      website: "https://www.northmassboulder.com/",
    },
    {
      title:"Chambers Purely Bouldering",
      description: "In Columbus on the way home",
      address: "1165 Chambers Road, Columbus, OH 43212",
      website: "https://www.chambersbouldering.com/",
      targetDate: new Date('2024-11-01'),
    }
  
  ],
} as TripInterface; 


const disneyWorld2025 = {
  id: "2025-disney",
  title: 'Family Disney World Trip',
  startDate: new Date('2025-03-28'),
  endDate: new Date('2025-04-02'),
  gmailLink: "https://mail.google.com/mail/u/0/#label/2025+disney+trip",
  hotel: {
    name: "Disney's Pop Century Resort",
    address: "1050 Century Dr, Orlando, FL 32830",
    arrivalDate: new Date('03-28-2025'),
    departureDate: new Date('04-02-2025'),
    reservationNumber: "36524803",
    gmailLink: "https://mail.google.com/mail/u/0/#label/2025+disney+trip/FMfcgzQZSXwbnmBrRgwPGsskPMbJVLKj"
  },
  tickets: {
    type: "Park Tickets",
    details: "4 day park hopper",
    reservationNumber: "FZGJ87101010",
    email: "https://mail.google.com/mail/u/0/#label/2025+disney+trip/FMfcgzQZSXwbntwJnCDBdZQmlRftxVbc"
  },
  transportation: {
    type: "flying",
    details: "Flying from Pittsburgh",
    leavingTime: "morning",
    backHomeTime: "evening",
    flights: {
      going: null,
      returning: null
    },
  },
  thingsToDo: [],
  restaurants: [],
  climbingGyms:  null,
} as TripInterface;

export   {
  disneyWorld2025,
  halloween2024
};  // Exporting the trip object


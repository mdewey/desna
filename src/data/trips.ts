
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
  };
  gmailLink: string;
  transportation: {
    type: string;
    details: string;
    leavingTime: Date | string;
    backHomeTime: Date | string;
  };
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
    arrivalDate: new Date('2024-10-30'),
    departureDate: new Date('2024-11-01'),
  },
  transportation: {
    type: "driving",
    details: "Driving from Home",
    leavingTime: "after lunch",
    backHomeTime: "evening",
  },
} as TripInterface; 

export   {
  halloween2024
};  // Exporting the trip object


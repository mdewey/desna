
export interface TripInterface {
  id: string;
  title: string;
  startDate: {
    raw: string;
    formatted: string;
  };
  endDate: {
    raw: string;
    formatted: string;
  };
}

const halloween2024 = {
  id: "2024-halloween",
  title: 'Halloween Trip to Indianapolis for PPPP ',
  startDate: {
    raw: "2022-10-10",
    formatted: "10th October 2022"
  },
  endDate: {
    raw: "2022-10-20",
    formatted: "20th October 2022"
  },
} as TripInterface; 

export   {
  halloween2024
};  // Exporting the trip object


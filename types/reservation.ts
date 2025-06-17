export interface IReservation {
    id: string;
    name: string;
    phone: string;
    dateTocome: string | Date;
    timeTocome: string;
    guests: number;
    specialRequest: string;
} 
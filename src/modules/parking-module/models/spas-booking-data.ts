/**
 * Holds user booking details
 */
export class BookingData {
    area?: string;
    parkingId?: string;
    parkingName?: string;
    username?: string;
    userId?: string;
    userContact?: string;
    vehicleNo?: string;
    startTime?: string;
    endTime?: string;
    row?: string;
    column?: string;
    amount?: string;
    paymentStatus?: string;
    status?: string;
    slotNumber?: string;

    constructor(data?: any) {
        this.area = data.area ? data.area : '';
        this.parkingName = data.parkingName ? data.parkingName : '';
        this.username = data.username ? data.username : '';
        this.userContact = data.userContact ? data.userContact : undefined;
        this.vehicleNo = data.vehicleNo ? data.vehicleNo : '';
        this.startTime = data.startTime ? data.startTime : '';
        this.endTime = data.endTime ? data.endTime : '';
        this.row = data.row ? data.row : undefined;
        this.column = data.column ? data.column : undefined;
        this.slotNumber = data.row && data.column ? alphabets[data.row] + '-' + data.column : undefined;
        this.amount = data.amount ? data.amount : undefined;
        this.status = data.status ? data.status : undefined;
        this.paymentStatus = data.paymentStatus ? data.paymentStatus : undefined;
        this.userId = data.userId ? data.userId : undefined;
        this.parkingId = data.parkingId ? data.parkingId : undefined;

    }
}

/**
 * Booking to be sent to API
 */
export interface BookingDetails {
    parkingId: string;
    userId: string;
    row: string;
    column: string;
    startTime: string;
    endTime: string;
    userContact: string;
    status: string;
    paymentStatus: string;
    amount: string;
    vehicleNo: string;
}

/**
 * Holds Alphabets to have numbering for slots.
 */
export const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

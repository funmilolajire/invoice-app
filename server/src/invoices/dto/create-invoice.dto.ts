export class CreateInvoiceDto {
    id?: string;
    status: string;
    senderAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    };
    clientName: string;
    clientEmail: string;
    clientAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    };
    createdAt: string;
    paymentDue: string;
    paymentTerms: number;
    description: string;
    items: {
        name: string,
        quantity: number,
        price: number,
        total: number
    }[];
    total: number
}

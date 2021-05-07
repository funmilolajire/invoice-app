interface Status {
    status: string,
    id: string
}

interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

interface InvoiceHeader {
    id: string;
    description: string;
    senderAddress: Address
}

interface InvoiceCenter {
    clientName: string;
    clientEmail: string;
    createdAt: string;
    paymentDue: string;
    clientAddress: Address
}

interface InvoiceItems {
    total: number,
    items: {
        name: string;
        price: number;
        quantity: number;
        total: number;
    }[]
}
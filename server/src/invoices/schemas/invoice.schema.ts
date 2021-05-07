import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;

@Schema({ optimisticConcurrency: true })
export class Invoice {
    @Prop()
    _id: string;

    @Prop()
    status: string;

    @Prop({ type: Object })
    senderAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    };

    @Prop()
    clientName: string;

    @Prop()
    clientEmail: string;

    @Prop({ type: Object })
    clientAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    };

    @Prop()
    createdAt: string;

    @Prop()
    paymentDue: string;

    @Prop()
    paymentTerms: number;

    @Prop()
    description: string;

    @Prop({ type: [Object] })
    items: {
        name: string,
        quantity: number,
        price: number,
        total: number
    }[];

    @Prop()
    total: number
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
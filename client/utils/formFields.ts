import { accessIssueState, accessPaymentState } from '../state/form.state';
export const initialValues = {
    _id: "",
    status: "Draft",
    senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    clientName: "",
    clientEmail: "",
    clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    createdAt: accessIssueState().get(),
    paymentTerms: accessPaymentState().get(),
    paymentDue: "",
    description: "",
    items: [],
    total: 0.00
}
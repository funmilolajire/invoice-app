import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    _id: Yup.string(),
    status: Yup.string(),
    senderAddress: Yup.object().shape({
        street: Yup.string().required('can\'t be empty'),
        city: Yup.string().required('can\'t be empty'),
        postCode: Yup.string().required('can\'t be empty'),
        country: Yup.string().required('can\'t be empty')
    }),
    clientName: Yup.string().required('can\'t be empty'),
    clientEmail: Yup.string().email('invalid email address').required('can\'t be empty'),
    clientAddress: Yup.object().shape({
        street: Yup.string().required('can\'t be empty'),
        city: Yup.string().required('can\'t be empty'),
        postCode: Yup.string().required('can\'t be empty'),
        country: Yup.string().required('can\'t be empty')
    }),
    createdAt: Yup.string().default(() => new Date().toLocaleString()),
    paymentDue: Yup.string().default(() => new Date().toLocaleString()),
    paymentTerms: Yup.number().required('pick a payment term'),
    description: Yup.string().required('can\'t be empty'),
    items: Yup.array().min(1).of(
        Yup.object().shape({
            name: Yup.string().required(),
            quantity: Yup.number().required(),
            price: Yup.number().required(),
            total: Yup.number().required()
        })
    ).required('An item must be added'),
    total: Yup.number()
})
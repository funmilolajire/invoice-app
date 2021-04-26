interface FormType {
    formType: string;
    invoice?: FormValues;
}

interface TermValue {
    paymentTerm?: number
}

interface TextInputProps {
    label: string,
    id: string,
    name: string,
    type: string,
    placeholder?: string,
    step?: number,
    min?: number,
    value?: string | number,
    [Symbol.iterator]?(): Iterator<T>,
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    onChange?: any,
    handleChange?: any
}

interface ItemsListProps {
    items: {
        name: string,
        quantity: number,
        price: number,
        total: number
    }[],
    push: (obj: any) => void,
    remove: <T>(index: number) => T | undefined,
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    handleChange?: any
}

interface FormValues {
    id?: string;
    status: string,
    senderAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    },
    clientName: string,
    clientEmail: string,
    clientAddress: {
        street: string,
        city: string,
        postCode: string,
        country: string
    },
    createdAt: string,
    paymentDue: string,
    paymentTerms: number,
    description: string,
    items: {
        name: string,
        quantity: number,
        price: number,
        total: number
    }[],
    total: number
}
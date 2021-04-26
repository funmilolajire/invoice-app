import { createState, useState, State } from '@hookstate/core';
import dayjs from 'dayjs';

//form open/close state
const formState = createState(false)
const wrapFormState = (state: State<boolean>) => ({
    get: () => state.value,
    open: () => state.set(true),
    close: () => state.set(false),
})

export const accessFormState = () => wrapFormState(formState)
export const useFormState = () => wrapFormState(useState(formState))

//delete modal open/close state
const modalState = createState(false)
const wrapModalState = (state: State<boolean>) => ({
    get: () => state.value,
    open: () => state.set(true),
    close: () => state.set(false)
})

export const accessModalState = () => wrapModalState(modalState)
export const useModalState = () => wrapModalState(useState(modalState))

//Payment Term State
const paymentTermState = createState(30)
const wrapTermState = (state: State<number>) => ({
    get: () => state.value,
    change: (term: number) => state.set(term)
})

export const accessPaymentState = () => wrapTermState(paymentTermState)
export const usePaymentState = () => wrapTermState(useState(paymentTermState))

//Issue Date Term State
const issueDateState = createState(dayjs().format('YYYY-MM-DD'))
const wrapDateState = (state: State<string>) => ({
    get: () => state.value,
    change: (date: string) => state.set(date)
})

export const accessIssueState = () => wrapDateState(issueDateState)
export const useIssueState = () => wrapDateState(useState(issueDateState))

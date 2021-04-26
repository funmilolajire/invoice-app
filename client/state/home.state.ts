import { createState, useState, State, none } from '@hookstate/core';

const filterState = createState("")
const wrapFilterState = (state: State<string>) => ({
    get: () => state.value,
    change: (filter: string) => state.set(filter),
})

export const accessFilterState = () => wrapFilterState(filterState)
export const useFilterState = () => wrapFilterState(useState(filterState))
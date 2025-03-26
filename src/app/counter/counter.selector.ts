import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.reducer";
export const selectorCounter=createFeatureSelector<State>('counter');
export const selectedCount=createSelector(selectorCounter,(state:State)=>state.count);
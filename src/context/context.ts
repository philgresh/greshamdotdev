import React from 'react';
import type { PortfolioContextType } from '../types';

// @ts-ignore; Argument of type '{}' is not assignable to parameter of type 'PortfolioContextType'.   Type '{}' is missing the following properties from type 'PortfolioContextType': head, hero, about, projects, and 3 more.ts(2345)
const PortfolioContext = React.createContext<PortfolioContextType>({});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;

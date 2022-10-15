import React from 'react';
import type { PortfolioContextType } from '../types';

const PortfolioContext = React.createContext<PortfolioContextType>({});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;

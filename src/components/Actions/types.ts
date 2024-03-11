import { SupportedActions, Protocol } from 'lib/constants';
import { Token } from 'lib/constants/tokens';

export interface WithdrawAction {
  step: number;
  action: SupportedActions.WITHDRAW;
  amount: number;
  symbol: string;
  vaultName: string;
  description: string;
  protocol: Protocol;
}
export interface DepositAction {
  step: number;
  action: SupportedActions.DEPOSIT;
  fromToken: Token[];
  rewardTokens: Token[];
  description: string;
  protocol: Protocol;
}

export interface StakeAction {
  step: number;
  action: SupportedActions.STAKE;
  allocation?: number;
  rewardTokens?: Token[];
  fromToken: Token[];
  toToken: Token[];
  protocol: Protocol;
  description: string;
}

export interface HarvestAction {
  step: number;
  action: SupportedActions.HARVEST;
  description: string;
  rewardTokens: Token[];
  protocol: Protocol;
  frequency?: string;
}

export interface SwapAction {
  step: number;
  action: SupportedActions.SWAP;
  fromToken: Token;
  toToken: Token;
  protocol: Protocol;
  description: string;
}

export interface MintAction {
  step: number;
  action: SupportedActions.MINT;
  fromToken: Token;
  toToken: Token;
  protocol: Protocol;
  description: string;
}

export interface LendAction {
  step: number;
  action: SupportedActions.LEND;
  fromToken: Token;
  toToken: Token;
  protocol: Protocol;
  description: string;
}

export interface BorrowAction {
  step: number;
  action: SupportedActions.BORROW;
  fromToken: Token;
  toToken: Token;
  protocol: Protocol;
  description: string;
}

export interface LPAction {
  step: number;
  action: SupportedActions.LP;
  fromToken: Token[];
  toToken: Token[];
  protocol: Protocol;
  description: string;
}

export interface LeverageAction {
  step: number;
  action: SupportedActions.LEVERAGE;
  fromToken: Token;
  toToken: Token;
  protocol: Protocol;
  description: string;
}

export type Action =
  | DepositAction
  | WithdrawAction
  | StakeAction
  | HarvestAction
  | SwapAction
  | MintAction
  | BorrowAction
  | LendAction
  | LPAction
  | LeverageAction;

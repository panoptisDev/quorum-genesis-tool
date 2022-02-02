import { QuestionTree } from "../types/questions";

export const privacyQuestion: QuestionTree = {
  name: "accountPassword",
  prompt: "Set your account password: (empty for none)"
};

export const curveQuestion: QuestionTree = {
  name: "curve",
  prompt: "Choose your encryption curve: Default: [1]",

};

export const bootnodesQuestion: QuestionTree = {
  name: "bootnodes",
  prompt: "Choose number of bootnode node keys to generate: (integer) Default: 2",
};

export const membersQuestion: QuestionTree = {
  name: "members",
  prompt: "Choose number of member node keys to generate: (integer)",
};

export const validatorsQuestion: QuestionTree = {
  name: "validators",
  prompt: "Choose number of validator node keys to generate: (integer) Default: 4",
};

export const txnSizeLimitQuestion: QuestionTree = {
  name: "txnSizeLimit",
  prompt: "Set your transaction size limit value: (integer)",
};

export const maxCodeSizeQuestion: QuestionTree = {
  name: "maxCodeSize",
  prompt: "Set your max code size value: (integer)",
};

export const coinbaseQuestion: QuestionTree = {
  name: "coinbase",
  prompt: "Set your coinbase address for rewards: (string)",
};

export const gasLimitQuestion: QuestionTree = {
  name: "gasLimit",
  prompt: "Set your gas limit value: (integer)",
};

export const difficultyQuestion: QuestionTree = {
  name: "difficulty",
  prompt: "Set your difficulty: (integer) Default: 0x1",
};

export const epochQuestion: QuestionTree = {
  name: "epochLength",
  prompt: "Set your epoch length value: (integer)",
};

export const requestTimeoutQuestion: QuestionTree = {
  name: "requestTimeout",
  prompt: "Set your requestTimeoutSeconds value: (integer)",
};

export const blockPeriodQuestion: QuestionTree = {
  name: "blockperiod",
  prompt: "Set your blockperiodseconds value: (integer)",
};

export const chainIDQuestion: QuestionTree = {
  name: "chainID",
  prompt: "Set your chainID value: (integer)",
};

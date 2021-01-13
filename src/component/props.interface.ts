export interface ButtonPropsI {
  isClearAll: boolean
  onNumberClick: ( number: number ) => void
  onClearClick: ( isClearAll?: boolean) => void
  onOperatorClick: ( operator: string) => void
  onChangeSignClick: () => void
  onPercentClick: () => void
  onDotClick: () => void
  getResult: () => void
  onMCClick: () => void
  onMRClick: () => void
  onMamoryCalcClick: (oper: string) => void
}
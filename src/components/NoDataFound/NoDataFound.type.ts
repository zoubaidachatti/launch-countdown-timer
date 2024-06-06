type ResponsiveStyleValue = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export interface NoDataFoundProps {
  message?: string;
  minHeight?: number | string | ResponsiveStyleValue;
}

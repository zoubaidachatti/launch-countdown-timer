import { RootStyle } from './CustomTableCell.style';
import { CustomTableCellProps } from './CustomTableCell.type';

export function CustomTableCell({
  cell,
  clickable,
  children,
  onClick,
}: Readonly<CustomTableCellProps>) {
  return (
    <RootStyle
      clickable={`${clickable}`}
      align={cell?.contentAlign ?? cell?.align}
      width={cell?.xsWidth ? `${cell.xsWidth}%` : undefined}
      onClick={onClick}
    >
      {children}
    </RootStyle>
  );
}

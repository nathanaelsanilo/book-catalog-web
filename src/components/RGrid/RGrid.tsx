import { clsxm } from '@/utils';

type Props = {
  children?: React.ReactNode;
  cols?: number;
};

type RGridItemProp = {
  children?: React.ReactNode;
};

const RGridItem = ({ children }: RGridItemProp) => {
  return children;
};

const RGrid = ({ children, cols = 1 }: Props) => {
  const classes = clsxm('grid gap-x-6 gap-y-8', `grid-cols-${cols}`);

  return <div className={classes}>{children}</div>;
};

RGrid.RGridItem = RGridItem;

export default RGrid;

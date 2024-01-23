import { RDivider, RTitle } from '..';

type Props = {
  children?: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
};

type PageActionProps = {
  children?: React.ReactNode;
};

const PageAction = ({ children }: PageActionProps) => {
  return children;
};

const AppPage = ({ children, title, action }: Props) => {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>{title}</RTitle>
        {action}
      </div>
      <RDivider />
      {children}
    </section>
  );
};

AppPage.PageAction = PageAction;

export default AppPage;

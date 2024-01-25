type ItemProp = {
  label: string;
  value?: React.ReactNode;
  children?: React.ReactNode;
};

type AppDetailProp = {
  children?: React.ReactNode;
};

const Item = ({ label, value, children }: ItemProp) => {
  return (
    <li className='border-t border-gray-200'>
      <div className='flex flex-row'>
        <div className='w-1/3 py-8'>
          <p className='text-gray-900'>{label}</p>
        </div>
        <div className='flex-1 py-8'>
          <p className='text-gray-600 font-light'>{value ? value : children}</p>
        </div>
      </div>
    </li>
  );
};

const AppDetail = ({ children }: AppDetailProp) => {
  return <ul className='divide-y divide-gray-200'>{children}</ul>;
};

AppDetail.Item = Item;

export default AppDetail;

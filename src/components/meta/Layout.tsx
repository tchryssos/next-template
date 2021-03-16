import Head from './Head'

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => (
  <div>
    <Head title={title} />
    {children}
  </div>
);

export default Layout;

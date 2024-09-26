import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './commonComponent/header';
import SideBar from './commonComponent/sidebar';
const { Sider, Content } = Layout;

const AdminPanelLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => console.log(collapsed, type)}
      >
        <SideBar />
      </Sider>

      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
      
    </Layout>
  );
};

export default AdminPanelLayout;

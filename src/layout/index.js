import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SiderMenu from '../components/SiderMenu';
const { Header, Sider, Content } = Layout;

const layoutStyle = { height:'100vh' };
const siderStyle = { backgroundColor:'pink' };
const headerStyle = { backgroundColor:'grey' };

const LayoutComponent = (props) => {
    return (
        <Layout style={layoutStyle}>
            <Sider style={siderStyle}>
                <SiderMenu/>
            </Sider>
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    )
};
export default LayoutComponent
import { Layout, Menu } from 'antd';
import {  AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined, TeamOutlined, UserOutlined, UploadOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import React from 'react';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

 const App = () => (
  <>
    <Layout >
      <Sider
        width={300} 
        className="sideMenu" >
        <div className='division'>
          DASH
        </div>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} item = {{items}}/>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </>
);

export default App;
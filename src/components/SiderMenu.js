import { Button, Menu } from 'antd';
import {
    MenuFoldOutlined,MenuUnfoldOutlined
  } from '@ant-design/icons';
  import { useState } from 'react'
  const items = [
    1,2,3
  ];
const SiderMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
      <div
        style={{
          width: 256,
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items}
        />
      </div>
    );
  };
  export default SiderMenu;
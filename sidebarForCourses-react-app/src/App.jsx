import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import Logo from './components/Logo';
import MenuComponent from './components/MenuComponent';
import ToggleTheme from './components/ToggleTheme';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
  <Layout className={darkTheme ? 'dark-theme' : 'light-theme'}>
    <Sider
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme={darkTheme ? 'dark' : 'light'}
      className="sidebar"
    >
      <Logo />
      <MenuComponent darkTheme={darkTheme} />
      <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </Sider>
    <Layout>
      <Header style={{ padding: 0 }}>
        <Button
          type="text"
          className="toggle"
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />
      </Header>
      <Content style={{ padding: '20px' }}>
        <h2>Welcome to the Study Course Platform</h2>
      </Content>
    </Layout>
  </Layout>
</div>

  );
}

export default App;

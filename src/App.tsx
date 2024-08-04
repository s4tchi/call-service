import { Flex, Layout } from "antd";
import { AuthPage } from "./assets/pages";

import "./App.css";
import { Header } from "./componenst";

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  height: '100%',
};

const contentStyle: React.CSSProperties = {
  width: '100%',
  alignItems: 'center',
}

const contentLayoutStyle: React.CSSProperties = {
  alignItems: 'center',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
}

function App() {
  return (
    <Layout style={layoutStyle}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        <Flex vertical style={contentLayoutStyle}>
          <AuthPage />
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default App;

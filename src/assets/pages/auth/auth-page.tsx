import { Button, Flex, Input } from "antd";
import { flexStyle } from "./styles";

export function AuthPage() {
  return (
    <Flex vertical={true} gap={10} style={flexStyle}>
      <h1>Wellcome, I'm call Service</h1>
      <Input placeholder="email" />
      <Input placeholder="password" type="password" />
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </Flex>
  );
}

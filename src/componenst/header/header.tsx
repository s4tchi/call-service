import { Flex } from "antd";
import { Logo } from "../logo";
import { headerStyle } from "./styles";

export function Header() {

    return (
        <Flex style={headerStyle}>
            <Logo />
        </Flex>
    )
}
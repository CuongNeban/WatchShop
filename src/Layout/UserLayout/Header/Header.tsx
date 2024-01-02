import { Badge, Flex, Input, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { BoxBorder, FlexItem, Image, MenuHeader, style } from "./styles";
import Logo from "../../../assets/logo-mona.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const itemsNav: MenuProps["items"] = [
    {
      label: "Trang Chủ",
      key: "/",
      style: style.styleLink,
    },
    {
      label: "Giới thiệu",
      key: "introduce",
      style: style.styleLink,
    },
    {
      label: "Sản Phẩm",
      key: "products",
      style: style.styleLink,
    },
    {
      label: "Blogs",
      key: "blogs",
      style: style.styleLink,
    },
    {
      label: "Liên hệ",
      key: "contact",
      style: style.styleLink,
    },
  ];
  const onClick: MenuProps["onClick"] = (e: any) => {
    navigate(e.key);
  };
  return (
    <Layout style={style.bg}>
      <BoxBorder>
        <FlexItem>
          <Image src={Logo} />
          <Input
            style={style.input}
            placeholder="Tìm kiếm"
            size="large"
            suffix={<SearchOutlined style={style.suffix} />}
          />
          <Flex align="center" style={style.flex}>
            <UserOutlined style={style.iconSearch} />
            <Badge count={3}>
              <ShoppingCartOutlined style={style.badge} />
            </Badge>
          </Flex>
        </FlexItem>
      </BoxBorder>
      <Header style={style.header}>
        <MenuHeader>
          <Menu items={itemsNav} onClick={onClick} style={style.bg} />
        </MenuHeader>
      </Header>
    </Layout>
  );
};

export default Header;

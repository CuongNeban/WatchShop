import React from "react";
import { Category, Div } from "./StyleProduct";
import { Image, List, Typography } from "antd";
import { useDataContext } from "../../contexts/ContextDatasProvider";

const SiderProduct: React.FunctionComponent = () => {
  const { Title } = Typography;

  const { datas } = useDataContext();

  return (
    <Div>
      <Title level={3}>SẢN PHẨM BÁN CHẠY</Title>
      <Category>
        <List
          itemLayout="horizontal"
          dataSource={datas.filter((items) => items.status === "selling")}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    style={{ width: "60px" }}
                    preview={false}
                    src={item.image}
                  />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.currentPrice}
              />
            </List.Item>
          )}
        />
      </Category>
    </Div>
  );
};

export default SiderProduct;

import { Button, Flex, Tabs } from "antd";
import React from "react";
import { CardWrap } from "../Selling/StyleSelling";
import Meta from "antd/es/card/Meta";
import { useDataContext } from "../../../contexts/ContextDatasProvider";
import { styleTab } from "./Tabstyle";

const TabProducts: React.FunctionComponent = () => {
  const array = ["popular", "promotion", "new"];
  const { datas } = useDataContext();
  const items = array.map((item) => {
    return {
      label:
        item === "popular"
          ? "Sản phẩm phổ biến"
          : item === "promotion"
          ? "Sản phẩm khuyến mãi"
          : "Sản phẩm mới",
      key: item,
      children: (
        <Flex wrap="wrap" gap={20}>
          {datas.map((prod) => {
            if (prod.status === item) {
              return (
                <CardWrap
                  key={prod.id}
                  hoverable
                  style={styleTab.card}
                  cover={<img alt={prod.name} src={prod.image} />}
                  actions={[
                    <Button
                      style={{ backgroundColor: "#c89979" }}
                      type="primary"
                    >
                      THÊM VÀO GIỎ
                    </Button>,
                  ]}
                >
                  <Meta title={prod.name} description={prod.currentPrice} />
                </CardWrap>
              );
            }
          })}
        </Flex>
      ),
    };
  });
  return <Tabs defaultActiveKey="1" style={styleTab.tabs} items={items} />;
};

export default TabProducts;

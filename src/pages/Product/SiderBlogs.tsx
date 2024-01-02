import React from "react";
import { Category, Div } from "./StyleProduct";
import { Avatar, List, Typography } from "antd";
import { useDataContext } from "../../contexts/ContextDatasProvider";

const SiderBlogs: React.FunctionComponent = () => {
  const { Title } = Typography;
  const { blogs } = useDataContext();

  return (
    <Div>
      <Title level={3}>BÀI VIẾT MỚI NHẤT</Title>
      <Category>
        <List
          itemLayout="horizontal"
          dataSource={blogs}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                    src={item.img}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </Category>
    </Div>
  );
};

export default SiderBlogs;

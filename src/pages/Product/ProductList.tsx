import { memo } from "react";
import { Button, Col, Image, Row } from "antd";
import { CardWrap } from "../Home/Selling/StyleSelling";
import Meta from "antd/es/card/Meta";
import { Products } from "../../Types/Product.type";
import { useNavigate } from "react-router-dom";

const ProductList = ({ data }: {data: Products[]}) => {
  const navigate = useNavigate();
  return (
    <Row gutter={[16, 0]}>
      {data.map((prod) => (
        <Col key={prod.id} span={6}>
          <CardWrap
            hoverable
            style={{
              width: "100%",
              border: " 1x solid #ccc",
              marginTop: 0,
              marginBottom: "16px",
            }}
            cover={<Image onClick={() => navigate(`/products/${prod.id}`)} preview={false} src={prod.image} />}
            actions={[
              <Button style={{ backgroundColor: "#c89979" }} type="primary">
                THÊM VÀO GIỎ
              </Button>,
            ]}
          >
            <Meta title={prod.name} description={prod.currentPrice} />
          </CardWrap>
        </Col>
      ))}
    </Row>
  );
};

export default memo(ProductList);

import { Collapse, Typography, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 1</LinkStyled>
        <Button type="text" icon={<PlusCircleOutlined />} className="add-room">
          Thêm Phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

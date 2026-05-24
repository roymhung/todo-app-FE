import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateUserModal from "../components/modal/create.user.model";

interface IUser {
  id: number;
  name: string;
  email: string;
}

const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");

    if (res?.data?.status === "success") {
      setUsers(res.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Table Users</h3>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => setOpenCreateModal(true)}
        >
          Add User
        </Button>
      </div>
      <Table bordered dataSource={users} columns={columns} rowKey={"id"} />
      <CreateUserModal
        openCreateModal={openCreateModal}
        setOpenCreateModal={setOpenCreateModal}
      />
    </div>
  );
};

export default UserPage;

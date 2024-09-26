import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import {
  LockOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Toaster } from 'react-hot-toast';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();

  const profileItems: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      icon: <UserOutlined />,
    //   onClick: () => profileHandleChange(),
    },
    {
      key: "2",
      label: "Update Profile",
      icon: <ProfileOutlined />,
    //   onClick: () => updateProfileHandleChange(),
    },
    {
      key: "3",
      label: "Change password",
      icon: <LockOutlined />,
    //   onClick: () => setChangePasswordVisible(true),
    },
    {
      key: "4",
      danger: true,
      label: "Logout",
      icon: <LogoutOutlined />,
    //   onClick: () => logOut(navigate),
    },
  ];

  const handleSubmit = async (values: string) => {
    console.log("Form submitted with values:", values);
  };

  let name: string = "User";
  let firstLetter = name.charAt(0);

  return (
    <div className="d-flex bg-white justify-content-end px-0 pe-3 py-3">
      <Dropdown menu={{ items: profileItems }} trigger={["click"]} className="cursor-pointer">
        <Space>
          <Avatar className=" bg-gradient text-white fw-bold fs-6 " >{firstLetter}</Avatar>
          <span className=" fw-bold " >
            {name}
          </span>
          <IoIosArrowDown />
        </Space>
      </Dropdown>

      <Toaster />
    </div>
  );
};

export default Header;

import React from "react";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Chip,
} from "@nextui-org/react";
import _ from "lodash";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../store/user.slice";

const AvatarDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    Cookies.remove("refreshToken", {
      path: "/",
      domain: process.env.REACT_APP_HOST,
    });
    Cookies.remove("accessToken", {
      path: "/",
      domain: process.env.REACT_APP_HOST,
    });
    dispatch(logout());
    navigate("/");
  };

  const renderRoleChip = () => {
    const roles = user?.userRoles;

    const result = _.pickBy(roles, (value, key) => {
      if (value === true) {
        return key;
      }
    });

    return Object.keys(result)?.map((role) => {
      return (
        <Chip key={`${role}`} size="sm" variant="flat">
          {role}
        </Chip>
      );
    });
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={user?.name}
          size="sm"
          src={user?.profilePhotoUrl}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">登入身份</p>
          <p className="font-semibold">{user?.email}</p>
        </DropdownItem>
        <DropdownItem key="roles">
          <p className="font-semibold">擁有權限</p>
          <div className="flex flex-col gap-2 mt-2 lg:flex-row">
            {renderRoleChip()}
          </div>
        </DropdownItem>
        <DropdownItem onPress={() => navigate("/bind")} key="analytics">
          綁定身份
        </DropdownItem>
        <DropdownItem onPress={() => navigate("/courses")} key="analytics">
          課程+
        </DropdownItem>
        <DropdownItem key="settings">任務牆</DropdownItem>
        <DropdownItem key="team_settings">輪盤+</DropdownItem>
        <DropdownItem
          href="#"
          key="logout"
          color="danger"
          onPress={handleLogout}
        >
          <span className="text-red-500">登出</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarDropDown;

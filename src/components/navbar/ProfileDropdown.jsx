import React from "react";
import { logoutUser } from "../../api/auth";

import UserProfileIcon from "../icons/UserProfileIcon";
import { Dropdown } from "flowbite-react";
import { redirect, useNavigate } from "react-router-dom";
import { preload, useSWRConfig } from "swr";
import { fetcher } from "../../api";
import { useUser } from "../../hooks/services/user";

const ProfileDropdown = () => {
  const { mutate } = useUser();
  const navigate = useNavigate();

  return (
    <Dropdown
      label={<UserProfileIcon />}
      as={"button"}
      style={{
        background: "#334155",
      }}
    >
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>My Blogs</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={async () => {
          await logoutUser();
          localStorage.removeItem("auth_token");

          mutate(null);
          navigate("/", {
            replace: true,
          });
        }}
      >
        Logout
      </Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileDropdown;

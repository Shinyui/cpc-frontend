import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useGoogleLogin } from "@react-oauth/google";
import { API, uninterceptedAxiosInstance } from "../../axios/axios.js";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/user.slice.js";

import { useNavigate } from "react-router-dom";

import ThemeSwitch from "../ThemeSwitch.component.jsx";
import AvatarDropDown from "./AvatarDropDown.component.jsx";
import HamburgerMenu from "./HamburgerMenu.component.jsx";
import AllToolsDropdown from "./AllToolsDropdown.component.jsx";

const Nav = () => {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);

      const userInfo = await uninterceptedAxiosInstance.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      const resp = await API.post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/auth/login`,
        userInfo.data
      );

      Cookies.set("accessToken", resp.data.accessToken, {
        expires: 1,
        secure: true,
      });
      Cookies.set("refreshToken", resp.data.refreshToken, {
        expires: 7,
        secure: true,
      });

      dispatch(fetchUser());

      toast.success("成功登入", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setIsLoading(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const renderAuthContent = () => {
    return user?._id ? (
      <AvatarDropDown />
    ) : (
      <Button
        as={Link}
        color="primary"
        variant="flat"
        onPress={() => googleLogin()}
        isLoading={isLoading}
      >
        {isLoading ? "登入中" : "登入 / 註冊"}
      </Button>
    );
  };

  return (
    <Navbar
      css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link color="foreground" onPress={() => navigate("/")}>
            <p className="font-bold text-inherit uppercase">CPC</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://cryptopioneercommunity.cashier.ecpay.com.tw/"
          >
            CPC 商店
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://blog.cryptopioneer.app/">
            CPC 部落格
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onPress={() => navigate("/calculate/tradesize")}
            color="foreground"
          >
            倉位價值計算機
          </Link>
        </NavbarItem>
        <AllToolsDropdown />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>{renderAuthContent()}</NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <HamburgerMenu />
    </Navbar>
  );
};

export default Nav;

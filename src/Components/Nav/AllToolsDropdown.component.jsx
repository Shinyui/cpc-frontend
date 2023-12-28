import React from "react";
import {
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "../Icons.jsx";
import { Link as LinkReacRouterDom, useNavigate } from "react-router-dom";

const AllToolsDropdown = () => {
  const navigate = useNavigate();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            endContent={icons.chevron}
            radius="sm"
            variant="light"
            size="lg"
          >
            CPC 工具箱
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="ep_size_calculator"
          description="根據你的合約本金、合約進出場點位，及單次可接受止損金額自動計算合理倉位價值"
          onPress={() => navigate("/calculate/tradesize")}
        >
          <Link color="foreground">倉位計算機</Link>
        </DropdownItem>
        <DropdownItem
          key="profit_calculator"
          description="根據你的合約本金，及交易策略自動計算每月潛在合約獲利"
          onPress={() => navigate("/calculate/tradeprofit")}
        >
          <LinkReacRouterDom
            key="tradeprofit_calculator"
            onPress={() => navigate("/calculate/tradeprofit")}
          >
            <Link color="foreground">合約利潤計算機</Link>
          </LinkReacRouterDom>
        </DropdownItem>
        <DropdownItem
          key="ep_calculator"
          description="根據你的合約本金、進場區間，以及單次可接受止損金額計算出掛單區間及合理倉位價值"
          onPress={() => navigate("#")}
        >
          <Link color="foreground" isDisabled={true}>
            分倉點位計算機
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AllToolsDropdown;

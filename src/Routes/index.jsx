import React from "react";
import { Routes, Route } from "react-router-dom";
import CommonLayout from "../Layout/Common.layput";
import HomePage from "../page/Home.page";
import ToolPage from "../page/Tool.page";
import TradeSize from "../Components/Calculator/TradeSize.component";
import TradeProfit from "../Components/Calculator/TradeProfit.component";
import Bind from "../page/Bind.page";
import RoulettePlus from "../page/RoulettePlus.page";
import Blog from "../page/Blog.page";
import BlogPost from "../page/BlogPost.page";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<CommonLayout />}>
        <Route path="/bind" element={<Bind />} />
        <Route path="/roulette" element={<RoulettePlus />} />
        <Route
          path="/calculate/tradesize"
          element={
            <ToolPage pageTitle={"倉位價值計算機"} toolComp={<TradeSize />} />
          }
        />
        <Route
          path="/calculate/tradeprofit"
          element={
            <ToolPage pageTitle={"合約利潤計算機"} toolComp={<TradeProfit />} />
          }
        />
        <Route
          path="/calculate/entrypoint"
          element={
            <ToolPage pageTitle={"分倉點位計算機"} toolComp={<TradeSize />} />
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Route>
    </Routes>
  );
};

export default Routers;

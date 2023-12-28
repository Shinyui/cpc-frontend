import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input, Button } from "@nextui-org/react";

const TradeProfit = () => {
  const { register, handleSubmit } = useForm();
  const [formState, setFormState] = useState({ errors: {} });
  const [tradeRevenue, setTradeRevenue] = useState(0);

  const tradeSizeSchema = z
    .object({
      principal: z.number().gt(0).safe().finite(),
      principal_risk_percentage: z.number().gt(0).lte(100),
      winRate: z.number().gt(0).lte(100),
      tradeOdd: z.number().gt(0).finite(),
      tradeEntries: z.number().gt(0).finite(),
    })
    .required();

  const calculateRevenue = (data) => {
    const {
      principal,
      principal_risk_percentage,
      winRate,
      tradeOdd,
      tradeEntries,
    } = data;

    const postitive = (Number(tradeOdd) * Number(winRate)) / 100;
    const negative = (100 - Number(winRate)) / 100;
    const ev = Math.round((postitive - negative) * 100) / 100;

    const tradeRevenue =
      ev *
      (principal * (principal_risk_percentage / 100)) *
      Number(tradeEntries);

    console.log(tradeRevenue);

    return tradeRevenue;
  };

  const onSubmit = (data) => {
    setFormState({ errors: {} });

    const numerArray = Object.values(data).map(Number);
    const merged = Object.keys(data).reduce(
      (obj, key, index) => ({ ...obj, [key]: numerArray[index] }),
      {}
    );

    const result = tradeSizeSchema.safeParse(merged);

    if (!result.success) {
      setFormState({ errors: result.error.flatten().fieldErrors });
      return;
    }

    const tradeRevenue = calculateRevenue(data);

    setTradeRevenue(tradeRevenue);
  };

  return (
    <form className="flex flex-col mt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="principal"
        type="number"
        label="合約本金"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"USDT"}
        errorMessage={formState.errors.principal?.join(", ")}
        {...register("principal")}
      />
      <Input
        name="principal_risk_percentage"
        type="number"
        label="單筆交易本金損失比例"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"%"}
        errorMessage={formState.errors.principal_risk_percentage?.join(", ")}
        {...register("principal_risk_percentage")}
      />
      <Input
        name="winRate"
        type="number"
        label="策略平均勝率"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"%"}
        errorMessage={formState.errors.winRate?.join(", ")}
        {...register("winRate")}
      />
      <Input
        name="tradeOdd"
        type="number"
        label="風險報酬比"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        startContent={"1:"}
        errorMessage={formState.errors.tradeOdd?.join(", ")}
        {...register("tradeOdd")}
      />
      <Input
        name="tradeEntries"
        type="number"
        label="單月平均交易次數"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"次"}
        errorMessage={formState.errors.tradeEntries?.join(", ")}
        {...register("tradeEntries")}
      />
      <Button type="submit" className="mb-10 w-full" color="primary">
        計算
      </Button>
      <h2 className="text-3xl mb-10 text-center uppercase">計算結果</h2>{" "}
      <p className="self-start principalize mb-2">未扣除手續費一個月可賺</p>
      <Input
        name="usdtRevenue"
        type="text"
        defaultValue="60.55"
        className="max-w-full mb-4"
        size="lg"
        readOnly={true}
        endContent={"USDT"}
        value={tradeRevenue}
      />
      <p className="self-start principalize mb-2">相當於新台幣（匯率 1:30）</p>
      <Input
        name="twdRevenue"
        type="text"
        defaultValue="another output value"
        className="max-w-full mb-4"
        size="lg"
        readOnly={true}
        value={tradeRevenue * 30}
        endContent={"元"}
      />
    </form>
  );
};

export default TradeProfit;

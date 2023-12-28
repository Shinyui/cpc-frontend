import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input, Button } from "@nextui-org/react";

const TradeSize = () => {
  const { register, handleSubmit } = useForm();
  const [formState, setFormState] = useState({ errors: {} });
  const [resultState, setResultState] = useState({
    tradeSize: 0,
    percentageChange: 0,
  });

  const tradeSizeSchema = z
    .object({
      principal: z.number().gt(0).safe().finite(),
      principal_risk_percentage: z.number().gt(0).lte(100),
      entry_point: z.number().gt(0).safe().finite(),
      stoploss: z.number().gt(0).safe().finite(),
    })
    .required();

  const calculateResult = (data) => {
    const { principal, principal_risk_percentage, entry_point, stoploss } =
      data;

    const principalRiskPerTrade = (principal / 100) * principal_risk_percentage;
    const percentageChange = Math.abs(
      ((entry_point - stoploss) / entry_point) * 100
    ).toFixed(2);
    const tradeSize = principalRiskPerTrade / (percentageChange / 100);

    return { percentageChange, tradeSize };
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

    const { tradeSize, percentageChange } = calculateResult(data);

    setResultState({
      tradeSize,
      percentageChange,
    });
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
        name="entry_point"
        type="number"
        label="開倉點位"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"USDT"}
        errorMessage={formState.errors.entry_point?.join(", ")}
        {...register("entry_point")}
      />
      <Input
        name="stoploss"
        type="number"
        label="止損點位"
        className="max-w-full mb-4"
        size="lg"
        isRequired={true}
        endContent={"USDT"}
        errorMessage={formState.errors.stoploss?.join(", ")}
        {...register("stoploss")}
      />
      <Button type="submit" className="mb-10 w-full" color="primary">
        計算
      </Button>
      <h2 className="text-3xl mb-10 text-center uppercase">計算結果</h2>{" "}
      <p className="self-start principalize mb-2">實盤止損比例</p>
      <Input
        name="percentage_change"
        type="text"
        defaultValue="60.55"
        className="max-w-full mb-4"
        size="lg"
        readOnly={true}
        endContent={"%"}
        value={resultState.percentageChange}
      />
      <p className="self-start principalize mb-2">倉位價值</p>
      <Input
        name="trade_size"
        type="text"
        defaultValue="another output value"
        className="max-w-full mb-4"
        size="lg"
        readOnly={true}
        value={resultState.tradeSize}
      />
    </form>
  );
};

export default TradeSize;

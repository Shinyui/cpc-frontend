import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { z } from "zod";
import { API } from "../axios/axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/user.slice";

const Bind = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [formState, setFormState] = useState({ errors: {} });

  const bindFormSchema = z
    .object({
      uid: z.string().regex(new RegExp("^[0-9]*$"), "must be numbers"),
    })
    .required();

  const onSubmit = async (data) => {
    setFormState({ errors: {} });

    const result = bindFormSchema.safeParse(data);

    if (!result.success) {
      setFormState({ errors: result.error.flatten().fieldErrors });
      return;
    }

    await API.post("/api/auth/bind/bitget", { uid: result.data.uid });

    dispatch(fetchUser());
  };

  const renderFormBtn = () => {
    const stage = user?.bitgetRegistry.verificationStage;

    if (stage === "notReceived") {
      return (
        <Button type="submit" className="mb-10 w-full" color="primary">
          送出
        </Button>
      );
    }

    if (stage === "pending") {
      return (
        <Button
          isDisabled={true}
          type="submit"
          className="mb-4 w-full"
          color="primary"
        >
          驗證中
        </Button>
      );
    }

    if (stage === "verified") {
      return (
        <Button
          isDisabled={true}
          type="submit"
          className="mb-10 w-full"
          color="success"
        >
          驗證成功
        </Button>
      );
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-center mt-12 uppercase">UID 身份綁定</h1>
        <div className="mx-auto lg:w-8/12 md:w-10/12 sm:w-12/12">
          <form
            className="flex flex-col mt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="uid"
              label="UID"
              className="max-w-full mb-4"
              size="lg"
              isRequired={true}
              errorMessage={formState.errors.uid?.join(", ")}
              defaultValue={user?.bitgetRegistry?.uid}
              isReadOnly={
                user?.bitgetRegistry.verificationStage !== "notReceived"
              }
              {...register("uid")}
            />
            {renderFormBtn()}
          </form>
        </div>
      </div>
    </>
  );
};

export default Bind;

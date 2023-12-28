import React from "react";
import Roulette from "../Components/Roulette.component";
import { Card, CardBody } from "@nextui-org/react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const RoulettePlus = () => {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "TICKET ID",
    },
    {
      key: "role",
      label: "PRIZE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <>
      <div className="p-4 mx-auto lg:w-9/12 md:w-12/12 sm:w-12/12 mt-12">
        <div className="grid grid-cols-10 items-center grid-rows-2 gap-3 md:grid-rows-none">
          <h1 className="text-4xl uppercase text-center col-start-1 col-end-11 md:col-start-4 md:col-end-8">
            Roulette+
          </h1>
          <Card className="col-start-1 col-end-11 md:col-start-9 md:col-end-11">
            <CardBody>
              <p className="text-center">剩餘彩票: 1</p>
            </CardBody>
          </Card>
        </div>

        <div className="mt-10">
          <Roulette />
        </div>

        <h2 className="text-3xl my-10 uppercase text-center">prize</h2>

        <Table
          className="mx-auto my-10"
          aria-label="Example table with dynamic content"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default RoulettePlus;

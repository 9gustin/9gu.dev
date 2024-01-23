"use client";

import { fromNow, toNow } from "@/utils/date";
import { FC } from "react";

export const ClientDateHelper: FC<{
  date: string;
  from?: boolean;
}> = ({ date, from = false }) => <>{from ? fromNow(date) : toNow(date)}</>;

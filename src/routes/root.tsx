import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import { LinkProps } from "../models/route";
import { useEffect, useState } from "react";

const Root = () => {
  return (
    <main className="h-full">
      <Outlet />
    </main>
  );
};

export default Root;

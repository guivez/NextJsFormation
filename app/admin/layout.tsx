import React from "react";
import { LayoutProps } from "../lib/types";


const AdminLayout = ({children}: LayoutProps ) => {
  return <div className="p-10">
    {children}
  </div>

};

export default AdminLayout;

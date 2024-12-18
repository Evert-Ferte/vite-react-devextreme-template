import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router";

export default function Root({ title="Vite + React + DevExtreme" }: any) {
    return (
        <React.Fragment>
            <Header />
            <h1>{title}</h1>
            <div>
                <Outlet />
            </div>
        </React.Fragment>
    );
}
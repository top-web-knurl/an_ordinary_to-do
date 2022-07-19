import React from "react";

export const Layout = ({ children }) => {

    return (

        <div className="container">
            <div className="row">
                <main className="bg-dark mt-5 p-3 rounded-3 text-light">
                    {children}
                </main>
            </div>
        </div>

    )
}
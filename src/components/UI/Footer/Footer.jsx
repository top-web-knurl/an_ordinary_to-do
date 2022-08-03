import React from "react";


export const Footer = () => {

    return (
        <footer className="p-2 p-lg-3 bg-dark text-white text-decoration-none">
            <div className="container">
                <div className="row ">
                    <a
                        href="https://github.com/top-web-knurl/an_ordinary_to-do"
                        target="_blank"
                        rel="noreferrer"
                        className="link-light"
                    >
                        GitHub (2022 - {new Date().getFullYear()})
                    </a>
                </div>
            </div>
        </footer>
    )
}
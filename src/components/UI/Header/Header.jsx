import React from "react";
import { Search } from "../Search/Search";

export const Header = () => {

    return (
        <header className="p-2 p-lg-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-wrap align-items-center justify-content-between align-items-center">
                        <a href="/" className="d-flex align-items-center text-light gap-2 text-decoration-none mb-lg-0 mb-2">
                            <span >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </span>
                            <span className="fs-4">Список задач</span>
                        </a>
                        <div className="col-12 col-lg-auto mb-3 mb-lg-0 ms-lg-3">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
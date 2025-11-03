import React, { useContext, type FC } from "react";
import { PostContext } from "../../context/post";

const Header: FC = () => {
    const value = useContext(PostContext)
    const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
    };
    
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <p>Posts(2)</p>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <label className="input">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" onChange={onchangeSearch} />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;

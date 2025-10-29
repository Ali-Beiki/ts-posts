import React from "react";

function Item() {
    const editClickEdit = () => {
        console.log("Edit Item");
    };

    const editClickDelete = () => {
        console.log("Delete Item");
    };
    return (
        <div>
            <div className="card card-compact bg-neutral text-neutral-content w-full">
                <div className="card-body ">
                    <div className="card-title flex justify-between items-center">
                        <h2>title</h2>
                        <div className="flex item-center gap-2">
                            <button
                                className="btn btn-circle btn-outline btn-sm"
                                onClick={editClickEdit}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"
                                    />
                                </svg>
                            </button>

                            <button
                                className="btn btn-circle btn-outline btn-sm"
                                onClick={editClickDelete}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    {" "}
                                    <path
                                        fill="currentColor"
                                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Eos dolores reiciendis ut, rem aut eum veritatis
                        eveniet et natus dolore illum provident odit voluptatum
                        facilis fuga iste saepe molestias quibusdam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Item;

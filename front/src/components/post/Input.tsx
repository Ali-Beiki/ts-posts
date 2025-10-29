import React, { useState, type FC } from "react";

const DEFAULT_INPUT_VALUE = {
    title: "",
    content: "",
};

const Input: FC = () => {
    /*
    🛑 خروجیش یک ابجکت هست که نام کلید و تایپی که مشخص کرده ایم درونش هست Record<"title" | "content", string>
        {
          title: string;
          content: string;
        }
    */
    const [input, setInput] =
        useState<Record<"title" | "content", string>>(DEFAULT_INPUT_VALUE);


    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        // value : مقداری که کاربر تایپ کرده
        // name : اسم فیلدی که تغییر کرده
        // [] وقتی می‌خوای از مقدار یه متغیر به عنوان نام کلید استفاده کنی، باید بذاریش داخل 
        const { value, name } = e.target;
        setInput({ ...input, [name]: value });
    };

    const onSubmitClick = () => {
        console.log("submit");
    };

    return (
        <div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Title</span>
                </div>
                <input
                    value={input.title}
                    placeholder="Post Title"
                    className="input input-bordered input-sm w-full "
                    name="title"
                    onChange={onChangeInput}
                />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Content</span>
                </div>
                <textarea
                    value={input.content}
                    placeholder="Post content"
                    className="textarea textarea-bordered textarea-sm w-full "
                    name="content"
                    onChange={onChangeInput}
                ></textarea>
            </label>

            <button
                className="btn btn-primary w-full btn-sm mt-4"
                onClick={onSubmitClick}
            >
                {"Create Post"}
            </button>
        </div>
    );
};

export default Input;

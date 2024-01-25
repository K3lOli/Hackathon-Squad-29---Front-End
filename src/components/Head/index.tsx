import React from "react";

interface HeadProps {
    readonly title: string;
    readonly description: string;
}

export function Head(props: HeadProps) {
    React.useEffect(() => {
        document.title = "Orange Portfólio | " + props.title;

        const metaDescription = document.querySelector(
            "meta[name='description']",
        );

        if (metaDescription) {
            metaDescription.setAttribute("content", props.description);
        }
    }, [props]);

    return <div />;
}

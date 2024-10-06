import React from "react";
import { Helmet } from "react-helmet";
import { SCHOOL_NAME } from "../../constants";

export default function SeoContent({ title, description }) {
    const TITLE = title ? `${title} | ${SCHOOL_NAME}` : SCHOOL_NAME;
    return (
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
    );
}

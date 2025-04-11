"use client";

import I18nProvider from "./I18nProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <I18nProvider>{children}</I18nProvider>
        </>
    );
};

// tanstack provider

export default Providers;

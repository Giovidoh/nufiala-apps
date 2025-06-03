"use client";

import { useTranslation } from "react-i18next";
// import LoginForm from "@/components/forms/auth/LoginForm";
// import Logo from "@/components/Logo";

const LoginPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center w-full h-full bg-background">
            <div className="flex flex-col md:min-w-[500px] max-w-[600px] gap-8 py-[50px] px-[50px]">
                {/* <Logo /> */}
                <div className="flex flex-col gap-4">
                    <h1 className="h1">{t("login.greeting")}</h1>
                    <p>{t("login.description")}</p>
                </div>
                {/* <LoginForm /> */}
            </div>
        </div>
    );
};

export default LoginPage;

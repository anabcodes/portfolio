import type { ReactNode } from "react";

interface ContentSectionProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

function ContentSection({ children, title = "", subtitle = "" }: ContentSectionProps){
    return(
        <section className="flex flex-col gap-4 mb-20 md:mb-40">
            <h1 className="text-4xl md:text-6xl font-bold text-center">{title}</h1>
            <p className="text-center font-medium mb-5">{subtitle}</p>
            <div>{children}</div>
        </section>
    )
}
export default ContentSection;
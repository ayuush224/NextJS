export default function AboutLayout({ children }: LayoutProps<"/">){
    return (
        <>
        <h1>
            This is the heading
        </h1>
            {children}
        </>
    )
}
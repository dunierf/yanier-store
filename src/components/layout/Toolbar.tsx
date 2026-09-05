const Toolbar = (props: ToolbarProps) => {

    const handleMenuClick = () => {
        if (props.onMenuClick)
            props.onMenuClick();
    };

    return (
        <div className="bg-gray-800 text-white p-4 h-12 w-full flex items-center justify-between">
            <div className="grow">
                Yanier Store
            </div>
            <div className="xl:hidden">
                <button onClick={handleMenuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
 
export default Toolbar;

export type ToolbarProps = {
    onMenuClick?: () => void;
}
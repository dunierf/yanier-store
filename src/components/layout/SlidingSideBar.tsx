import clsx from "clsx";
import { useEffect, useState } from "react";

// Components
import Menu from "./Menu";

const SlidingSidebar = (props: SlidingSidebarProps) => {
    const [open, setOpen] = useState<boolean>(true);
    const [css, setCss] = useState<string>(sidebarCss(false));

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 300);
    }, []);

    useEffect(() => {
        setCss(sidebarCss(open));
    }, [open]);

    const handleClickBackdrop = () => {
        setOpen(false);

        setTimeout(() => {
            if (props.onHide)
                props.onHide();
        }, 500);
    };

    return (
        <>
            <div className={backgropCss()} onClick={handleClickBackdrop}>
            </div>
            <div className={css}>
                <div className="p-5">
                    <Menu onMenuItemClick={handleClickBackdrop} />
                </div>
            </div>
        </>
    );
}
 
export default SlidingSidebar;

export type SlidingSidebarProps = {
    onHide: () => void;
};

const sidebarCss = (open: boolean) : string => {
    return clsx([
        'z-70',
        'lg:hidden',
        'fixed top-0 left-0 h-full w-75',
        'bg-white border-r-gray-700',
        'shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]',
        { 
            'translate-x-0': open,
            '-translate-x-full': !open
        },
        'transition-transform duration-300'
    ]);
}

const backgropCss = () : string => {
    return clsx([
        'z-50',
        'fixed top-0 left-0 w-full h-full',
        'bg-black opacity-40',
        'lg:hidden'
    ]);
};
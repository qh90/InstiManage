"use client"
import React from 'react'
import { useSelector, selectUser, useDispatch, toggleMenu } from "@/lib/redux"
import Hamburger from 'hamburger-react'
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";
 
// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
 
function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
    const closeMenu = () => setIsMenuOpen(false);
    const user = useSelector(selectUser);

    console.log(user)
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 text-sm tracking-tight rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border rounded-full w-10 border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                        {user?.username}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 mt-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                    <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded ${
                        isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                    }`}
                    >
                    {React.createElement(icon, {
                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                        strokeWidth: 2,
                    })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? "red" : "inherit"}
                    >
                        {label}
                    </Typography>
                    </MenuItem>
                );
                })}
            </MenuList>
        </Menu>
    );
}
 
export default function NavBar() {
 
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const isOpen = useSelector((state) => state.menu.openMenu);

    const dispatch = useDispatch();
    const handleMenu = () => {
        dispatch(toggleMenu(isOpen));    
    }
    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);
 
    return (
        <Navbar className="mx-auto mt-5 p-2 lg:rounded-full lg:pl-6 dark:bg-gray-800">
            <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
                <Hamburger toggled={isOpen} toggle={handleMenu} />
                <ProfileMenu />
            </div>
        </Navbar>
    );
}
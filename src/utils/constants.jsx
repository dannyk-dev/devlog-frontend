import NotificationBell from "../components/icons/NotificationBell";
import Button from "../components/Button";
import ProfileDropdown from "../components/navbar/ProfileDropdown";
import { hasToken } from "../api";

const NAV_LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Articles",
    href: "#",
  },
];

const loggedOutLinks = [
  {
    icon: <Button variant="outline" text="Login" />,
    href: "/login",
  },
];

const loggedInLinks = [
  {
    icon: <NotificationBell />,
    href: "/notifications",
  },
  {
    icon: <ProfileDropdown />,
    isLink: false,
  },
];

export const getNavConfig = (isAuthenticated) => {
  if (isAuthenticated) {
    return [...NAV_LINKS, ...loggedInLinks];
  }

  return [...NAV_LINKS, ...loggedOutLinks];
};

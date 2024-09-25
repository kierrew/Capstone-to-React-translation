import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Controller/Auth";

const CustomNavbar = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const Routes = [
    {
      name: "Accounts",
      path: "/accounts",
    },
    {
      name: "Budget Templates",
      path: "/templates",
    },
    {
      name: "Currency Exchange",
      path: "/exchange",
    },
    {
      name: "Debts",
      path: "/debts",
    },
    {
      name: "My Profile",
      path: "/profile",
    },
    {
      name: "My Wallet",
      path: "/wallet",
    },
    {
      name: "Plans",
      path: "/plans",
    },
    {
      name: "Savings",
      path: "/savings",
    },
    {
      name: "Tools",
      path: "/tools",
    },
    {
      name: "Transactions",
      path: "/transactions",
    },
    {
      name: "User List",
      path: "/users",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarItem>
          <Link href="home" className="text-black">
            Home
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarMenu>
          {Routes.map((route) => (
            <NavbarMenuItem key={route.name}>
              <Link color="success" href={route.path}>
                {route.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="bordered" onClick={handleLogout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;

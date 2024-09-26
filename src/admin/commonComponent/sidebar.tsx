import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ISideNavType } from "../../types/adminTypes";
import { sideNavItems } from "../../config/sideMenu";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../../App.css";

const SideBar: FC = () => {
  const location = useLocation();

  const { pathname } = location;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const renderDropdown = (item: ISideNavType) => {
    if (item.children && openDropdown === item.key) {
      return (
        <Nav className="flex-column ms-3">
          {item.children.map((child) => (
            <Nav.Item key={child.key}>
              <Nav.Link
                as={Link}
                to={`${child.url}`}
                className={`py-2 px-3 d-flex align-items-center rounded ${pathname === child.url
                  ? "text-white bg-primary fw-semibold"
                  : "text-secondary"
                  }`}
              >
                <span className="me-2 text-capitalize">{child.icon && <child.icon />}</span>
                <span className="flex-grow-1 text-capitalize ">
                  {child?.key}
                </span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      );
    }
    return null;
  };

  useEffect(() => {
    sideNavItems.forEach((item) => {
      if (item.children) {
        item.children.forEach((child: ISideNavType) => {
          if (pathname.startsWith(`${child.url}`)) {
            setOpenDropdown(item.key);
          }
        });
      }
    });
  }, [pathname]);

  return (
    <Navbar
      className="flex-column z-3 px-2 vh-100 border-end"
    >
      <Container fluid>
        <Navbar.Brand className="text-center  fw-bold text-light">
          RHC
        </Navbar.Brand>
      </Container>
      <Nav className="flex-column w-100 mt-4">
        {sideNavItems.map((item) => {
          const isRootActive = pathname === item.url;
          const isNestedActive = item.children
            ? pathname.startsWith(`${item.url}`)
            : false;
          const isActive = isRootActive || isNestedActive;

          return (
            <Nav.Item key={item.key} className="position-relative">
              <Nav.Link
                as={Link}
                to={`${item.url}`}
                className={`d-flex align-items-center rounded mb-2 cursor-pointer ${isActive ? "bg-primary text-white" : ""
                  }`}
                onClick={() => item.children && toggleDropdown(item.key)}
              >
                <span
                  className={"me-2 text-white"}
                >
                  {item.icon && <item.icon />}
                </span>
                <span className="flex-grow-1 text-capitalize text-light">
                  {item.key}
                </span>
                {item.children && (
                  <span
                    className={`ms-auto me-3 text-light ${openDropdown === item.key ? "rotate" : "rotate-reverse"
                      }`}
                  >
                    {item.dropDownIcon && <item.dropDownIcon />}
                  </span>
                )}
              </Nav.Link>
              {renderDropdown(item)}
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default SideBar;

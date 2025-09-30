import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button, Flex, Box} from "@mantine/core";
import {  useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();
  const isActive = (path: string) => location.pathname === path;
  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/users");
    }
  }, [isAuthenticated, navigate]);
  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/users");
    }
  }, [location.pathname, navigate]);

  return (
    <Flex style={{ height: "100vh" }}>
      <Box
        style={{
          width: "220px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          borderRight: "1px solid #ddd",
        }}
      >
        <Button
          variant={isActive("/admin/users") ? "filled" : "light"}
          color={isActive("/admin/users") ? "blue" : "gray"}
          onClick={() => navigate("/admin/users")}
        >
          Users
        </Button>
        <Button
          variant={isActive("/admin/faculties") ? "filled" : "light"}
          color={isActive("/admin/faculties") ? "blue" : "gray"}
          onClick={() => navigate("/admin/faculties")}
        >
          Faculties
        </Button>
        <Button
          variant={isActive("/admin/events") ? "filled" : "light"}
          color={isActive("/admin/events") ? "blue" : "gray"}
          onClick={() => navigate("/admin/events")}
        >
          Events
        </Button>
        <Button
          variant={isActive("/admin/rules") ? "filled" : "light"}
          color={isActive("/admin/rules") ? "blue" : "gray"}
          onClick={() => navigate("/admin/rules")}
        >
          Rules
        </Button>
        <Button
          variant={isActive("/admin/galery") ? "filled" : "light"}
          color={isActive("/admin/galery") ? "blue" : "gray"}
          onClick={() => navigate("/admin/galery")}
        >
          Galery
        </Button>
        <Button
          variant={isActive("/admin/questions") ? "filled" : "light"}
          color={isActive("/admin/questions") ? "blue" : "gray"}
          onClick={() => navigate("/admin/questions")}
        >
          Questions
        </Button>
        <Button
          variant={isActive("/admin/position") ? "filled" : "light"}
          color={isActive("/admin/position") ? "blue" : "gray"}
          onClick={() => navigate("/admin/position")}
        >
          Position
        </Button>
        <Button
          variant={isActive("/admin/owners") ? "filled" : "light"}
          color={isActive("/admin/owners") ? "blue" : "gray"}
          onClick={() => navigate("/admin/owners")}
        >
          Owners
        </Button>

        <Button
          variant={isActive("/admin/teachers") ? "filled" : "light"}
          color={isActive("/admin/teachers") ? "blue" : "gray"}
          onClick={() => navigate("/admin/teachers")}
        >
          Teachers
        </Button>

        <Button
          variant={isActive("/admin/news") ? "filled" : "light"}
          color={isActive("/admin/news") ? "blue" : "gray"}
          onClick={() => navigate("/admin/news")}
        >
          News
        </Button>

        <Button
          variant={isActive("/admin/education") ? "filled" : "light"}
          color={isActive("/admin/education") ? "blue" : "gray"}
          onClick={() => navigate("/admin/education")}
        >
          Education
        </Button>
      </Box>

      <Box style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </Box>
    </Flex>
  );
};

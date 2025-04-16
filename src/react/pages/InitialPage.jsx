import React from "react";
import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "@/sass/pages/_initial_page.scss";

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="initial-page">
      <h1>Rouge</h1>
      <Group position="center" spacing="xl" className="button-group">
        <Button
          variant="filled"
          className="design-system-btn"
          onClick={() => navigate("/design-system")}
        >
          Design System
        </Button>
        <Button
          variant="filled"
          className="prototype-btn"
          onClick={() => navigate("/animation")}
        >
          Prototype
        </Button>
      </Group>
    </div>
  );
};

export default InitialPage;

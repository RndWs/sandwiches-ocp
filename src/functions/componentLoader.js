

import { lazy } from "react";
import NotFound from "../components/NotFound/NotFound";

import menuArray from '../menu-setup/menuArray';

// Globally register components
const availableComponents = import.meta.glob("../components/**/*.jsx");

const dynamicImport = (componentName, url) => {
  const componentPath = `../${url}/${componentName}.jsx`;
  console.log(`componentPath: ${componentPath}`);

  if (!availableComponents[componentPath]) {
    console.error(
      `Component '${componentName}' not found! Redirecting to NotFound.`
    );
    return NotFound; // Return NotFound if the component doesn't exist
  }

  return lazy(() => availableComponents[componentPath]()); // Lazy load dynamically
};

// Generate the component map dynamically
const componentMap = menuArray.reduce((acc, { name, url }) => {
  acc[name] = dynamicImport(name, url); // Load or fallback
  return acc;
}, {});

export default componentMap;
import React from "react";
import PropTypes from "prop-types";

const DefaultLayout = ({ children, header, footer }) => (
  <div className="container mx-auto p-4">
    {header && <header className="mb-4">{header}</header>}
    <main role="main">{children}</main>
    {footer && <footer className="mt-4">{footer}</footer>}
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are valid React nodes
  header: PropTypes.node, // Optional header component
  footer: PropTypes.node, // Optional footer component
};

export default DefaultLayout;

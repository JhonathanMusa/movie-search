import React from "react";
import { Link } from "react-router-dom";

export default function BtnBackHome() {
  return (
    <Link className="button is-primary" to="/">
      Back Home
    </Link>
  );
}

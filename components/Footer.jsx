import React from "react";
import Link from "next/link";
import { Logo } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container">
        <footer className="footer py-10">
          <div>
            <span className="text-primary mb-2">
              <Logo />
            </span>
            <p>Sherdec Tree Service LLC</p>
            <p>Triple Certified Tree Care & Removal Company</p>
            <p>
              Website by{" "}
              <a href="https://www.raymondkneipp.com/" className="link">
                Raymond Kneipp
              </a>
            </p>
          </div>
          <div>
            <span className="footer-title">Tree Care</span>
            <a className="link link-hover">Seasonal Care</a>
            <a className="link link-hover">Health / Maintenance</a>
            <a className="link link-hover">Insects</a>
            <a className="link link-hover">Disease / Fertilization</a>
            <a className="link link-hover">Pruning Tips</a>
          </div>
          <div>
            <span className="footer-title">Pages</span>
            <Link href="/">
              <a className="link link-hover">Home</a>
            </Link>
            <Link href="/about">
              <a className="link link-hover">About</a>
            </Link>
            <Link href="/contact">
              <a className="link link-hover">Contact</a>
            </Link>
            <Link href="/services">
              <a className="link link-hover">Services</a>
            </Link>
            <Link href="/schedule">
              <a className="link link-hover">Schedule</a>
            </Link>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <a
              className="link link-hover"
              href="https://www.facebook.com/Sherdec-Tree-Service-123190798017856/"
            >
              Facebook
            </a>
            <a
              className="link link-hover"
              href="https://www.instagram.com/sherdectreeservice/"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
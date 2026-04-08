"use client";
import apiClient from "@/utils/axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Sponsors.css";
// @ts-ignore
import emailjs from "emailjs-com";

interface SponsorItem {
  targetUrl: string;
  imageUrl: string;
}

interface SponsorCategory {
  sponsorSection: string;
  sponsors: SponsorItem[];
}

const Sponsors2 = () => {
  const [sponsors, setSponsors] = useState<SponsorCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [btnText, setTxt] = useState("Submit");
  const [email, setEmail] = useState("");

  useEffect(() => {
    apiClient.get("/sponsors").then((res: any) => {
      const sponsors = res.data.data.sponsors;
      setSponsors(sponsors);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="sponsors-loading">Loading sponsors…</div>
      ) : (
        <div className="sponsors-wrapper">
          {/* All logos in one flat flex-wrap row, each with a category badge */}
          <div className="sponsors-grid">
            {sponsors.map((category, ci) =>
              category.sponsors.map((spons, si) => (
                <a
                  key={`${ci}-${si}`}
                  href={spons?.targetUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card"
                >
                  <img
                    src={spons?.imageUrl}
                    alt={category.sponsorSection}
                    className="sponsor-img"
                  />
                  <span className="sponsor-badge">{category.sponsorSection}</span>
                </a>
              ))
            )}
          </div>

          {/* Compact onboarding strip */}
          <div className="sponsors-cta">
            <div className="sponsors-cta-text">
              <p className="sponsors-cta-title">Want to partner with us?</p>
              <p className="sponsors-cta-sub">
                Share your email and our team will reach out to you.
              </p>
            </div>
            <div className="sponsors-cta-form">
              <input
                value={email}
                onChange={(e) => { setEmail(e.target.value); setTxt("Submit"); }}
                type="email"
                placeholder="Your email address"
                className="sponsors-email-input"
              />
              <Button
                btnText={btnText}
                sty="sponsors-btn"
                onClick={async () => {
                  if (email === "") { setTxt("Enter email"); return; }
                  setTxt("Submitting…");
                  try {
                    await emailjs.send(
                      "service_fsffmpr", "template_bk1prys",
                      { email },
                      "tPp7ffxoxdcF1eUWj"
                    );
                    setTxt("Submitted!");
                  } catch (error) {
                    setTxt("Error — retry?");
                    console.error("Error submitting form:", error);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsors2;

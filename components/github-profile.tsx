"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GitBranch,
  Link2,
  MapPin,
  Users,
} from "lucide-react";
import type { GitHubProfile } from "@/lib/github";

type ProfileState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; profile: GitHubProfile };

function isGitHubProfile(value: unknown): value is GitHubProfile {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "login" in value &&
    typeof value.login === "string" &&
    "name" in value &&
    (typeof value.name === "string" || value.name === null) &&
    "avatar_url" in value &&
    typeof value.avatar_url === "string" &&
    "html_url" in value &&
    typeof value.html_url === "string" &&
    "bio" in value &&
    (typeof value.bio === "string" || value.bio === null) &&
    "public_repos" in value &&
    typeof value.public_repos === "number" &&
    "public_gists" in value &&
    typeof value.public_gists === "number" &&
    "followers" in value &&
    typeof value.followers === "number" &&
    "following" in value &&
    typeof value.following === "number" &&
    "location" in value &&
    (typeof value.location === "string" || value.location === null) &&
    "company" in value &&
    (typeof value.company === "string" || value.company === null) &&
    "blog" in value &&
    (typeof value.blog === "string" || value.blog === null) &&
    "created_at" in value &&
    typeof value.created_at === "string"
  );
}

export function GitHubProfileCard() {
  const [state, setState] = useState<ProfileState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/github/profile", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub profile request failed: ${response.status}`);
        }

        const data: unknown = await response.json();
        if (!isGitHubProfile(data)) {
          throw new Error("GitHub returned an invalid profile.");
        }

        setState({ status: "ready", profile: data });
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setState({ status: "error" });
        }
      });

    return () => controller.abort();
  }, []);

  if (state.status === "loading") {
    return (
      <div className="github-profile-card github-profile-loading" role="status">
        <span className="github-avatar-skeleton" />
        <span className="github-loading-copy" />
        <span className="github-loading-stats" />
        <span className="sr-only">Loading GitHub profile...</span>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="github-profile-card github-profile-error" role="alert">
        <div>
          <p className="github-profile-name">Profile unavailable right now</p>
          <p className="github-profile-bio">
            GitHub data could not be loaded. You can still visit the profile
            directly.
          </p>
        </div>
        <a
          className="github-profile-cta"
          href="https://github.com/noelleputra"
          target="_blank"
          rel="noreferrer"
        >
          Open GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    );
  }

  const { profile } = state;
  const profileDetails: {
    label: string;
    href?: string;
    icon: typeof Building2;
  }[] = [
    {
      label: `Joined ${new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(profile.created_at))}`,
      icon: CalendarDays,
    },
  ];

  if (profile.company) {
    profileDetails.push({ label: profile.company, icon: Building2 });
  }
  if (profile.location) {
    profileDetails.push({ label: profile.location, icon: MapPin });
  }
  if (profile.blog) {
    profileDetails.push({
      label: profile.blog.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: /^https?:\/\//.test(profile.blog)
        ? profile.blog
        : `https://${profile.blog}`,
      icon: Link2,
    });
  }
  const stats = [
    { label: "Public repos", value: profile.public_repos, icon: BookOpen },
    { label: "Public gists", value: profile.public_gists, icon: GitBranch },
    { label: "Followers", value: profile.followers, icon: Users },
    { label: "Following", value: profile.following, icon: Users },
  ];

  return (
    <div className="github-profile-card">
      <div className="github-profile-identity">
        <Image
          className="github-avatar"
          src={profile.avatar_url}
          alt={`${profile.login}'s GitHub avatar`}
          width={125}
          height={125}
          unoptimized
        />
        <div className="github-profile-copy">
          <p className="github-profile-name">{profile.name || profile.login}</p>
          <p className="github-profile-login">@{profile.login}</p>
          {profile.bio && <p className="github-profile-bio">{profile.bio}</p>}
          <div className="github-profile-details">
            {profileDetails.map(({ label, href, icon: Icon }) => {
              const detail = (
                <>
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span>{label}</span>
                  {href && (
                    <ArrowUpRight className="github-detail-arrow size-3" aria-hidden="true" />
                  )}
                </>
              );

              return href ? (
                <a
                  className="github-profile-detail"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {detail}
                </a>
              ) : (
                <span className="github-profile-detail" key={label}>
                  {detail}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="github-profile-footer">
        <div className="github-profile-stats">
          {stats.map(({ label, value, icon: Icon }) => (
            <div className="github-profile-stat" key={label}>
              <Icon className="size-4" aria-hidden="true" />
              <span className="github-profile-stat-value">
                {new Intl.NumberFormat("en").format(value)}
              </span>
              <span className="github-profile-stat-label">{label}</span>
            </div>
          ))}
        </div>
        <a
          className="github-profile-cta"
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub profile{" "}
          <ArrowUpRight className="size-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

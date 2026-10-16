import type { GitHubProfile } from "@/lib/github";

export async function GET() {
  const response = await fetch("https://api.github.com/users/noelleputra", {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "Noellx-Portfolio",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return Response.json(
      { message: `GitHub returned ${response.status}.` },
      { status: 502 },
    );
  }

  const profile: GitHubProfile = await response.json();

  return Response.json({
    login: profile.login,
    name: profile.name,
    avatar_url: profile.avatar_url,
    html_url: profile.html_url,
    bio: profile.bio,
    public_repos: profile.public_repos,
    public_gists: profile.public_gists,
    followers: profile.followers,
    following: profile.following,
    location: profile.location,
    company: profile.company,
    blog: profile.blog,
    created_at: profile.created_at,
  });
}

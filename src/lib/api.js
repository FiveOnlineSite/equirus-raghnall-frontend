const API_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export async function apiRequest(path, options = {}) {
  if (!API_URL) {
    throw new ApiError("NEXT_PUBLIC_API_URL is not configured.", 0, null);
  }

  const headers = new Headers(options.headers);
  const hasBody = options.body !== undefined && options.body !== null;

  if (hasBody && !(options.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response;

  try {
    response = await fetch(`${API_URL}/${path.replace(/^\/+/, "")}`, {
      ...options,
      headers,
      credentials: "include",
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new ApiError("Unable to connect to the server.", 0, null);
  }

  const contentType = response.headers.get("content-type") || "";
  let data = null;

  if (response.status !== 204) {
    try {
      data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const message =
      (data && typeof data === "object" && (data.message || data.error)) ||
      `Request failed with status ${response.status}.`;
    throw new ApiError(message, response.status, data);
  }

  return data;
}

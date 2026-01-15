import type { MetObject } from "./type";

const API_URL = import.meta.env.PUBLIC_API_URL;

export async function  searchMetObjects(query: string) {
  const res = await fetch(
    `${API_URL}/search?q=${encodeURIComponent(query)}`
  )

  if(!res.ok){
    throw new Error('Failed to search Met Museum objects');
  }
  return res.json();
}

export async function fetchMetObject(
  id: number
): Promise<MetObject> {
  const res = await fetch(
    `${API_URL}/objects/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Met object");
  }

  return res.json();
}
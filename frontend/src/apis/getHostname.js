// src/apis/hostName.js
export async function callApi() {
  try {
    const response = await fetch("http://localhost:3001/");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error fetching from API:", error);
    return null;
  }
}

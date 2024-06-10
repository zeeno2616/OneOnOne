export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI1OGY2OGY5Mi1mMmJkLTQ5ZWUtODg5YS1hNDk0MzE0YjJiNTkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxODA0MzAxNCwiZXhwIjoxNzE4NjQ3ODE0fQ.ZIWyDEexl1YA67Ir9UuRMCCN8s0jsXypqRtTaVb6AFs";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
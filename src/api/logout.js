import client from "./client";

export const Logout = async () => {
  try {
    const res = await client.post(
      "/auth/login",
      {},
      { headers: { "Cache-Control": "no-cache" } }
    );

    console.log(res);
    localStorage.clear(); // 로컬 스토리지 완전 초기화

    return res;
  } catch (err) {
    console.log(err);
  }
};

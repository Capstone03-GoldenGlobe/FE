import client from "./client";

export const PostPDF2 = async (id, file) => {
  try {
    // FormData 객체 생성

    console.log(file);
    const formData = new FormData();
    formData.append("file", file); // 파일을 FormData에 추가

    // 파일을 multipart/form-data로 전송
    const res = await client.post(`/pdf/${id}`, formData);

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};

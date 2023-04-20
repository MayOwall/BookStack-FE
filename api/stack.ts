import apiClient from "./apiClient";
import { QuoteCardData } from "type";
interface StackCreateBody {
  title: string;
  author: string;
  publisher: string;
  date: string;
  detail: string;
}

export const getStack = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.get("/stack", {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const postStackCreate = async (body: StackCreateBody) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.post("/stack/create", body, {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const getStackDetail = async (no: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.get(`/stack/detail/${no}`, {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const deleteStackDetail = async (no: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.delete(`/stack/detail/${no}`, {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const postQuoteCreate = async (no: number, body: QuoteCardData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const nextData = {
    no,
    body,
  };

  const { data } = await apiClient.post(
    "/stack/detail/quote/create",
    nextData,
    {
      headers: {
        authorization: token,
      },
    }
  );

  return data;
};

export const postQuoteDelete = async (no: string, _id: string) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const nextData = {
    no,
    _id,
  };

  const { data } = await apiClient.post(
    "/stack/detail/quote/delete",
    nextData,
    {
      headers: {
        authorization: token,
      },
    }
  );

  return data;
};

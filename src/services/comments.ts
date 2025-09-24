import type { Comment } from "@/types";
import api from "@/utils/axios.utils";

export const getComments = async () => {
  try {
    const res = await api.get("/comments"); // trae ~500
    const comments = res.data as any[];
    // Expandir hasta 2000 generando copias con ids únicos
    const expanded: Comment[] = [];
    let idCounter = 1;
    while (expanded.length < 2000) {
      for (const comment of comments) {
        if (expanded.length >= 2000) break;
        expanded.push({
          id: idCounter++,
          name: comment.name || `Item ${idCounter}`,
          body: comment.body || "",
        });
      }
    }
    return expanded;
  } catch (err) {
    console.error(err);
  }
};

import React, { useEffect, useState } from "react";
import type { Comment } from "../types";

import { getComments } from "@/services/comments";
import { Virtuoso } from "react-virtuoso";

const Virtualized: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const comments = await getComments(); // trae ~500
        if (comments && comments.length > 0) {
          setComments(comments);
        } else {
          setError("No se pudieron cargar los comentarios");
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError(
          "Error al cargar los comentarios. Verifica tu conexión a internet."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex-1 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando comentarios...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex-1 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex-1 p-4 bg-gray-50">
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">
          Lista Virtualizada
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-gray-600 text-lg">
            Total de comentarios:{" "}
            <span className="font-semibold text-blue-600">
              {comments.length}
            </span>
          </p>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {comments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No hay comentarios para mostrar</p>
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-150px)] border border-gray-200 rounded-lg shadow-lg">
          <Virtuoso
            totalCount={comments.length}
            itemContent={(index) => {
              const item = comments[index];
              return (
                <div className="p-6 border-b border-gray-200 hover:bg-gray-50 min-h-[120px] flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-3">
                      {item.body}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 font-medium">
                      ID: {item.id}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Virtualized;

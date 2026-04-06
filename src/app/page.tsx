"use client";

import React, { useState } from "react";

type Item = {
  id: number;
  name: string;
  note?: string;
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    if (editingId !== null) {
      setItems((prev) =>
        prev.map((it) => (it.id === editingId ? { ...it, name: trimmed, note } : it))
      );
      setEditingId(null);
    } else {
      const newItem: Item = { id: Date.now(), name: trimmed, note };
      setItems((prev) => [newItem, ...prev]);
    }

    setName("");
    setNote("");
  }

  function startEdit(id: number) {
    const it = items.find((i) => i.id === id);
    if (!it) return;
    setName(it.name);
    setNote(it.note || "");
    setEditingId(id);
  }

  function cancelEdit() {
    setEditingId(null);
    setName("");
    setNote("");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-gray-900 text-slate-100 p-6">
      <div className="relative max-w-4xl mx-auto">
        {/* Futuristic background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-24 w-96 h-96 bg-gradient-to-br from-cyan-400/20 via-violet-400/10 to-pink-400/5 rounded-full blur-3xl animate-tilt" />
          <div className="absolute -right-24 bottom-0 w-72 h-72 bg-gradient-to-tr from-indigo-400/10 to-cyan-300/5 rounded-full blur-2xl" />
        </div>

        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-purple-300 to-pink-400">
            Welcome to Mortuary
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            A simple, futuristic interface to create, view and update records. Built to be
            extended — persistence and delete can be added later.
          </p>
        </header>

        <section className="bg-white/5 backdrop-blur-md border border-white/6 rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Create / Update</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div className="sm:col-span-2">
              <label className="sr-only">Name</label>
              <input
                aria-label="Name"
                className="w-full bg-transparent border border-white/10 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="hidden sm:block" />

            <div className="sm:col-span-3">
              <label className="sr-only">Note</label>
              <input
                aria-label="Note"
                className="w-full bg-transparent border border-white/10 px-3 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Note (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <div className="sm:col-span-3 flex gap-2">
              <button
                type="submit"
                className="ml-auto bg-cyan-500 text-black px-4 py-2 rounded font-medium hover:scale-105 transition-transform"
              >
                {editingId !== null ? "Update Record" : "Create Record"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="border border-white/10 px-4 py-2 rounded text-slate-200 hover:bg-white/5"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Records</h3>

          <div className="space-y-3">
            {items.length === 0 ? (
              <div className="text-slate-400">No records yet. Use the form above to add one.</div>
            ) : (
              <ul className="grid gap-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-white/3 border border-white/6 rounded"
                  >
                    <div>
                      <div className="font-medium text-slate-100">{item.name}</div>
                      {item.note && <div className="text-sm text-slate-400">{item.note}</div>}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(item.id)}
                        className="px-3 py-1 rounded border border-white/10 text-sm hover:bg-white/5"
                      >
                        Edit
                      </button>
                      {/* Delete intentionally omitted — only create/read/update requested */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <footer className="mt-8 text-center text-slate-500 text-sm">
          Future-ready UI — add persistence or delete when needed.
        </footer>
      </div>

      <style jsx>{`
        .animate-tilt {
          animation: tilt 8s linear infinite;
        }

        @keyframes tilt {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(6deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </main>
  );
}

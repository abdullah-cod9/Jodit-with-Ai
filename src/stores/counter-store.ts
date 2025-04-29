import { create } from "zustand";

export type EditorState = {
  editorStore: string;
};

export type EditorActions = {
  setEditorStore: (value: string) => void;
  reset: () => void;
};

export type EditorStore = EditorState & EditorActions;

export const editorInitState: EditorState = {
  editorStore: "",
};
export const useEditorStore = create<EditorStore>((set) => ({
  editorStore: "",
  setEditorStore: (value: string) => set(() => ({ editorStore: value })),
  reset: () => {
    set(editorInitState);
  },
}));

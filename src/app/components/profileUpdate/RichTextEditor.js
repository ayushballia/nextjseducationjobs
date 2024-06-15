"use client";
import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { FiBold, FiItalic, FiUnderline, FiLink, FiList } from "react-icons/fi";
import { FaListOl, FaStrikethrough } from "react-icons/fa";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const addLink = (e) => {
    e.preventDefault();
    const url = prompt("Enter the URL");
    if (!url) return;

    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    setEditorState(
      RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    );
  };

  return (
    <div className="mb-6">
      <div className="relative min-h-[100px] w-full border p-2 rounded-[15px] shadow-sm focus-within:border-blue-500">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
        <div className="absolute bottom-0 flex space-x-1 mb-0.5">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleInlineStyle("BOLD");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FiBold />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleInlineStyle("ITALIC");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FiItalic />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleInlineStyle("UNDERLINE");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FiUnderline />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleInlineStyle("STRIKETHROUGH");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FaStrikethrough />
          </button>
          <button
            onClick={addLink}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FiLink />
          </button>
          <button
            onclick={(e) => {
              e.preventDefault();
              toggleBlockType("unordered-list-item");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            <FiList />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleBlockType("ordered-list-item");
            }}
            className="p-2 border rounded hover:bg-gray-200"
          >
            {/* <FiListOl /> */}
            <FaListOl />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;

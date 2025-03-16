import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// クリーンアップのための設定
afterEach(() => {
  cleanup();
});

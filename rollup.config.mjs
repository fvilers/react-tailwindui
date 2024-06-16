import typescript from "@rollup/plugin-typescript";
import clear from "rollup-plugin-clear";
import copy from "rollup-plugin-copy";
import { dts } from "rollup-plugin-dts";
import generatePackageJson from "rollup-plugin-generate-package-json";

const outputFolder = "./dist";

export default [
  {
    external: [
      "class-variance-authority",
      "react",
      "react-dom",
      "tailwind-merge",
    ],
    input: "./src/components/index.ts",
    output: {
      dir: outputFolder,
      format: "es",
      preserveModules: true,
    },
    plugins: [
      clear({ targets: [outputFolder] }),
      typescript(),
      generatePackageJson({
        baseContents: ({ description, name, type, version }) => {
          return {
            description,
            module: "index.js",
            name,
            publishConfig: {
              access: "public",
            },
            type,
            types: "index.d.ts",
            version,
          };
        },
        outputFolder,
      }),
      copy({
        targets: [{ dest: outputFolder, src: "README.md" }],
      }),
    ],
  },
  {
    input: "./src/components/index.ts",
    output: [{ dir: outputFolder, format: "es", preserveModules: true }],
    plugins: [dts()],
  },
];

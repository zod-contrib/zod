import bench, { Benchmark } from "nanobench";

import * as z from "../index.ts";

bench("z.string(): empty string", (b: Benchmark) => {
  const stringParser = z.string();

  b.start();

  for (let i = 0; i < 200000; i++) {
    stringParser.parse("");
  }

  b.end();
});

bench("z.string(): null", (b: Benchmark) => {
  const stringParser = z.string();

  b.start();

  for (let i = 0; i < 200000; i++) {
    try {
      stringParser.parse(null);
    } catch (err) {}
  }

  b.end();
});

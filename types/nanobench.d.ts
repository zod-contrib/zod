declare module "nanobench" {
  export = bench;

  function bench(name: string, cb: bench.BenchmarkCallback): void;

  namespace bench {
    interface Benchmark {
      start(): void;
      end(): void;
    }

    interface BenchmarkCallback {
      (b: Benchmark): void;
    }
  }
}

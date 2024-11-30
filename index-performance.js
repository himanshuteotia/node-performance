const { performance, PerformanceObserver } = require("perf_hooks");

performance.mark("start-task");

// Simulate a task
for (let i = 0; i < 1e6; i++) {}

performance.mark("end-task");
performance.measure("Task Duration", "start-task", "end-task");

const obs = new PerformanceObserver((items) => {
  console.log("Performance", items.getEntries());
  performance.clearMarks();
});
obs.observe({ entryTypes: ["measure"] });
console.log("Performance", performance.getEntries());

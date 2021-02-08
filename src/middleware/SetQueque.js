const Queue = require("bull");
const QueueMQ = require("bullmq");
const { setQueues, BullMQAdapter, BullAdapter } = require("bull-board");

const someQueue = new Queue();
const someOtherQueue = new Queue();
const queueMQ = new QueueMQ();

setQueues([
  new BullAdapter(someQueue),
  new BullAdapter(someOtherQueue),
  new BullMQAdapter(queueMQ),
]);

"use strict";

const express = require("express");
const cors = require("cors");
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const app = express();
const port = process.env.PORT || 4000;

const routers = require("./src/router");
const notFound = require("./src/middleware/notFound");
const logMorgan = require("./src/middleware/logMorgan");
const errorHandler = require("./src/middleware/errorHandler");

const loggerMiddleware = require("./src/middleware/logger");

const dsn = process.env.SENTRYDSN;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const logger = (res, req, next) => {
 // console.log("logger");
  next()
}

const logger2 = (res, req, next) => {
 // console.log("logger2");
  next()
}

Sentry.init({
  dsn: dsn,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// app.use(logger)
// app.use(logger2)


app.use(cors());
app.use(logMorgan);
// app.use(loggerMiddleware);

app.use("/api/v1", routers);
app.use(Sentry.Handlers.errorHandler());

// app.use(notFound); // middleware handling 404
errorHandler.forEach((handler) => app.use(handler));


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
